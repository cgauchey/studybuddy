import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { StackNavigator } from "react-navigation";

const Class = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Welcome to Intro to JavaScript!</Text>
    <Button onPress={() => navigation.navigate("Roster")} title="View Roster" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Class;
