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
    {/* <FormInput onChangeText={INSERTFUNCTION} /> */}
    <FormValidationMessage>This field is required</FormValidationMessage>
    <Button
      onPress={() => navigation.navigate("Reaction")}
      title="Sign In As Student"
    />
    <Button
      onPress={() => navigation.navigate("Class")}
      title="View Class Information"
    />
    <Button
      onPress={() => navigation.navigate("ViewReactions")} //change to ViewReactions
      title="Sign In As Teacher"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default SignIn;
