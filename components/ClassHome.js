import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { StackNavigator } from "react-navigation";

const ClassHome = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Class Page</Text>

    <Button
      onPress={() => navigation.navigate("Map")}
      title="View Library Map"
    />
    <Button
      onPress={() => navigation.navigate("AllStudents")}
      title="All Students"
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

export default ClassHome;
