import React from "react";
import { StyleSheet, Text, View, Button, navigation } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

import { StackNavigator } from "react-navigation";
import db from "../firebase";

class ClassroomId extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classroomId: ""
    };
    // this.handleSignUp() = this.handleSignUp.bind(this)
  }

  handleSignIn() {}

  render() {
    return (
      <View style={styles.container}>
        <FormLabel>Classroom ID</FormLabel>
        <FormInput
          onChangeText={classroomId => this.setState({ classroomId })}
        />
        <FormValidationMessage>This field is required</FormValidationMessage>
        <Button
          onPress={() => this.props.navigation.navigate("StudentView")}
          title="Log In As Student"
        />
        <Button
          onPress={() => this.props.navigation.navigate("TeacherView")}
          title="Log In As Teacher"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  }
});

export default ClassroomId;
