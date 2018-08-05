import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import socket from "./Sockets";

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.handleSocket = this.handleSocket.bind(this);
    this.onReceive = this.onReceive.bind(this);
    this.onSend = this.onSend.bind(this);
    this.storeMessages = this.storeMessages.bind(this);
  }

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Welcome! Please type your question below.",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar:
              "https://images-platform.99static.com/fHPxSzfJy7lsHfReCeiicVn1FwA=/500x500/top/smart/99designs-contests-attachments/59/59081/attachment_59081997"
          }
        }
      ]
    });
    socket.on("message", this.onReceive);
  }

  handleSocket() {
    socket.on("message", this.onReceive);
  }

  onReceive(messages) {
    this.storeMessages(messages);
  }

  onSend(messages = []) {
    socket.emit("message", messages[0]);
  }

  storeMessages(messages) {
    this.setState(previousState => {
      return {
        messages: GiftedChat.append(previousState.messages, messages)
      };
    });
  }

  render() {
    console.log("this.state.messages", this.state.messages);
    return (
      <GiftedChat
        style={styles.container}
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: 1
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  }
});

export default Questions;
