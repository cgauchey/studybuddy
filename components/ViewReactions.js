import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "react-navigation";
import socket from "./Sockets";
import Questions from "./Questions";
import styles from "./StyleSheet";

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
        <View style={styles.reactions}>
          <Text style={styles.title}>How students are reacting:</Text>
          <View style={styles.repeat}>
            <Text style={styles.font}>{this.state.repeatCounter} Repeat</Text>
          </View>
          <View style={styles.explain}>
            <Text style={styles.font}>
              {this.state.explainCounter} Explain More
            </Text>
          </View>
          <View style={styles.example}>
            <Text style={styles.font}>
              {this.state.exampleCounter} Give An Example
            </Text>
          </View>
        </View>
        <Button onPress={this.reset} title="Reset" />
        <Questions />
      </View>
    );
  }
}

export default Reaction;
