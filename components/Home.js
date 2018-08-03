import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { StackNavigator } from "react-navigation";

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Wait, What?!</Text>
    <Button
      onPress={() => navigation.navigate("SignIn")}
      title="Sign in to your class"
    />
    <Button onPress={() => navigation.navigate("Map")} title="View Map" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Home;
