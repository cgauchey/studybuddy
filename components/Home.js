import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { StackNavigator } from "react-navigation";
let pic = {
  uri:
    "https://images-platform.99static.com/fHPxSzfJy7lsHfReCeiicVn1FwA=/500x500/top/smart/99designs-contests-attachments/59/59081/attachment_59081997"
};
const Home = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.logo}>
      <Image source={pic} style={styles.image} />
    </View>
    <Button
      style={styles.button}
      onPress={() => navigation.navigate("SignIn")}
      title="Join Classroom"
    />
    {/* <Button
      onPress={() => navigation.navigate("Map")}
      title="View Library Map"
    /> */}
    {/* <Button
      onPress={() => navigation.navigate("Reaction")}
      title="Participate"
    /> */}
    {/* <Button
      onPress={() => navigation.navigate("AllStudents")}
      title="View Class Information"
    /> */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    paddingBottom: 60
  },
  image: {
    width: 320,
    height: 320
  },
  logo: {
    alignItems: "center"
  },
  button: {
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  }
});

export default Home;
