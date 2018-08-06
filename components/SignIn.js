import React from "react";
import { View, Button, KeyboardAvoidingView } from "react-native";
import { FormLabel, FormInput } from "react-native-elements";
import db from "../firebase";
import styles from "./StyleSheet";
import PasswordInputText from "react-native-hide-show-password-input";
const firebase = require("firebase");
require("firebase/firestore");

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
      // user: {}
    };
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  // componentDidMount() {
  //   this.redirect();
  // }

  handleSignUp() {
    const email = this.state.email;
    const password = this.state.password;
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (err) {
      alert(err.toString());
    }
  }

  handleLogIn(email, password) {
    try {
      console.log("email", email);
      firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (err) {
      alert(err.toString());
    }
  }

  redirect() {
    firebase.auth().onAuthStateChanged(user => {
      if (user !== null) {
        this.props.navigation.navigate("ClassroomId");
      } else {
        window.location = "SignIn";
      }
    });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.signIn} behavior="padding">
        <FormLabel>School E-mail</FormLabel>
        <View style={{ width: 300 }}>
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
          />
        </View>
        <FormLabel>Password</FormLabel>
        <View style={{ width: 265 }}>
          <PasswordInputText
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
          />
        </View>

        <Button
          onPress={() => {
            this.handleLogIn(this.state.email, this.state.password);
            this.redirect();
          }}
          title="Log In"
        />
        <Button
          onPress={() => {
            this.handleSignUp();
            this.props.navigation.navigate("ClassroomId");
          }}
          title="Sign Up"
        />
      </KeyboardAvoidingView>
    );
  }
}

export default SignIn;
