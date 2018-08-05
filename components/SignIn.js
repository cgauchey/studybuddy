import React from "react";
import { StyleSheet, Text, View, Button, navigation } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

import { StackNavigator } from "react-navigation";
import db from "../firebase";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      user: {}
    };
    // this.handleSignUp() = this.handleSignUp.bind(this)
  }

  handleSignUp() {
    // event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    db.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  handleLogIn(email, password) {
    // event.preventDefault();
    db.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  redirect() {
    db.auth().onAuthStateChanged(user => {
      if (user) {
        window.location = "StudentView"; //Change
      } else {
        window.location = "SignIn";
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <FormLabel>School E-mail</FormLabel>
        <FormInput onChangeText={email => this.setState({ email })} />
        <FormValidationMessage>This field is required</FormValidationMessage>
        <FormLabel>Password</FormLabel>
        <FormInput onChangeText={password => this.setState({ password })} />
        <FormValidationMessage>This field is required</FormValidationMessage>
        {/* <Button onPress={() => this.handleLogIn()} title="Log In" />
        <Button onPress={() => this.handleSignUp()} title="Sign Up" /> */}
        <Button
          onPress={() => this.props.navigation.navigate("ClassroomId")}
          title="Log In"
        />
      </View>
    );
  }
}

// const SignIn = ({ navigation }) => (
//   <View style={styles.container}>
// <FormLabel>School E-mail</FormLabel>
// <FormInput />
// {/* <FormInput onChangeText={INSERTFUNCTION} /> */}
// {/* <FormValidationMessage>This field is required</FormValidationMessage> */}
// <FormLabel>Password</FormLabel>
// <FormInput />
// {/* <FormInput onChangeText={INSERTFUNCTION} /> */}
// {/* <FormValidationMessage>This field is required</FormValidationMessage> */}
// {/* <FormLabel>Classroom ID</FormLabel>
// <FormInput /> */}
// {/* <FormInput onChangeText={INSERTFUNCTION} /> */}
// {/* <FormValidationMessage>This field is required</FormValidationMessage> */}
// <Button
//   onPress={() => navigation.navigate("StudentView")}
//   title="Sign In As Student"
// />
// <Button
//   onPress={() => navigation.navigate("TeacherView")}
//   title="Sign In As Teacher"
// />
//   </View>
// );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  }
});

export default SignIn;
