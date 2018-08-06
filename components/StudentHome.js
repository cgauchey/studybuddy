import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

import { StackNavigator } from "react-navigation";

const SignIn = ({ navigation }) => (
  <View style={styles.container}>
    <FormLabel>Classroom ID</FormLabel>
    <FormInput />
    <Button
      onPress={() => navigation.navigate("StudentView")}
      title="Sign In As Student"
    />
    <Button
      onPress={() => navigation.navigate("TeacherView")}
      title="Sign In As Teacher"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  }
});

export default SignIn;
