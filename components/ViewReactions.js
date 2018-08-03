import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const ViewReactions = ({ navigation }, props) => {
  return (
    <View style={styles.container}>
      <Text>Student's Reactions:</Text>
      <Text> ?? students want you to give an EXAMPLE</Text>
      <Text> ?? students want you to REPEAT what you said </Text>
      <Text> ?? students want you to EXPLAIN more </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ViewReactions;
