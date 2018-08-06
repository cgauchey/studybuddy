import React from "react";
import { View, Button, KeyboardAvoidingView } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

import { StackNavigator } from "react-navigation";
import db from "../firebase";
import styles from "./StyleSheet";

class ClassroomId extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classroomId: ""
    };
    // this.handleSignIn() = this.handleSignUp.bind(this)
  }

  handleSignIn() {}

  render() {
    return (
      <KeyboardAvoidingView style={styles.signIn} behavior="padding">
        <FormLabel>Classroom ID</FormLabel>
        <View style={{ width: 300 }}>
          <FormInput
            onChangeText={classroomId => this.setState({ classroomId })}
          />
        </View>
        <FormValidationMessage>This field is required</FormValidationMessage>
        <View>
          <Button
            onPress={() => this.props.navigation.navigate("StudentView")}
            title="Log In As Student"
          />
        </View>
        <View>
          <Button
            onPress={() => this.props.navigation.navigate("TeacherView")}
            title="Log In As Teacher"
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default ClassroomId;
