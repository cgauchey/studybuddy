import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "react-navigation";
import socket from "./Sockets";
import Questions from "./Questions";

class Reaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repeatCounter: 0,
      explainCounter: 0,
      exampleCounter: 0
    };
    this.incrementRepeat = this.incrementRepeat.bind(this);
    this.incrementExplain = this.incrementExplain.bind(this);
    this.incrementExample = this.incrementExample.bind(this);
    this.reset = this.reset.bind(this);
    this.handleSocket = this.handleSocket.bind(this);
  }

  componentDidMount() {
    this.handleSocket();
  }

  handleSocket() {
    socket.on("repeatCounter", repeatCounter => {
      this.setState({ repeatCounter: repeatCounter[0] });
    });

    socket.on("explainCounter", explainCounter => {
      this.setState({ explainCounter: explainCounter[0] });
    });

    socket.on("exampleCounter", exampleCounter => {
      this.setState({ exampleCounter: exampleCounter[0] });
    });
    socket.on("resetCounter", resetCounter => {
      this.setState({
        repeatCounter: 0,
        explainCounter: 0,
        exampleCounter: 0
      });
    });
  }

  incrementRepeat() {
    this.setState({ repeatCounter: ++this.state.repeatCounter });
    socket.emit("repeatCounter", this.state.repeatCounter);
  }

  incrementExplain() {
    this.setState({ explainCounter: ++this.state.explainCounter });
    socket.emit("explainCounter", this.state.explainCounter);
  }

  incrementExample() {
    this.setState({ exampleCounter: ++this.state.exampleCounter });
    socket.emit("exampleCounter", this.state.exampleCounter);
  }

  reset() {
    this.setState({
      repeatCounter: 0,
      explainCounter: 0,
      exampleCounter: 0
    });
    socket.emit("resetCounter", this.state.resetCounter);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>How students are reacting:</Text>
        <Text>{this.state.repeatCounter} Repeat</Text>
        <Text>{this.state.explainCounter} Explain</Text>
        <Text>{this.state.exampleCounter} Example</Text>
        <Button onPress={this.reset} title="Reset" />
        <Questions />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: "white"
    // justifyContent: "center"
  }
});

export default Reaction;
