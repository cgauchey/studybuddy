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
    <Button
      onPress={() => navigation.navigate("Reaction")}
      title="Participate"
    />
    <Button
      onPress={() => navigation.navigate("AllStudents")}
      title="View Class Information"
    />
    <Button
      onPress={() => navigation.navigate("Map")}
      title="View Library Map"
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
