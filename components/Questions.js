import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

class Questions extends React.Component {
  state = {
    messages: []
  };

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
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
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
