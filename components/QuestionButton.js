import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { StackNavigator } from "react-navigation";

const QuestionButton = ({ navigation }) => (
  <Button
    onPress={() => navigation.navigate("Home")}
    title="Submit a question"
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default QuestionButton;
