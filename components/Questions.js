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
  }

  componentWillMount() {
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
              "https://ih1.redbubble.net/image.470680968.7819/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1u5.jpg"
          }
        }
      ]
    });
    this.handleSocket();
  }

  handleSocket() {
    // socket.on("questions", questions => {
    //   console.log("questions in QUESTIONS", questions);
    //   this.setState({ messages: [...this.state, questions[0]["text"]] });
    // });
    socket.on("message", this.onReceive);
  }

  onReceive(messages) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }

  onSend(messages = []) {
    socket.emit("message", messages[0]);
    console.log("MESSAGES", messages);
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
    // console.log("THIS.STATE.MESSAGES", this.state.messages);
    // socket.emit("questions", this.state.messages);
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1
        }}
      />
    );
  }
}

export default Questions;
