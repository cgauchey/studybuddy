import React from "react";
import { StyleSheet, Text, View, Button, navigation } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

import { StackNavigator } from "react-navigation";
import db from "../firestore";
import styles from "./StyleSheet";
const firebase = require("firebase");
require("firebase/firestore");

class CreateGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: "",
      name: "",
      contact: ""
    };
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleCreate() {
    db.collection("studyGroup")
      .add(this.state)
      .then(ref => {
        console.log("Added document with ID: ", ref.id);
      });
  }

  render() {
    return (
      <View style={styles.signIn}>
        <FormLabel>Study Topic</FormLabel>
        <View style={{ width: 300 }}>
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={topic => this.setState({ topic })}
          />
        </View>
        <FormLabel>My name is...</FormLabel>
        <View style={{ width: 300 }}>
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={name => this.setState({ name })}
          />
        </View>
        <FormLabel>You can contact me at...</FormLabel>
        <View style={{ width: 300 }}>
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={contact => this.setState({ contact })}
          />
        </View>
        <View>
          <Button
            onPress={() => {
              this.handleCreate();
              this.props.navigation.navigate("AllStudyGroups"); // re route to home?
            }}
            title="Create Group"
          />
        </View>
      </View>
    );
  }
}

export default CreateGroup;
