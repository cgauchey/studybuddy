import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { StackNavigator } from "react-navigation";
const logoPic = {
  uri:
    "https://images-platform.99static.com/fHPxSzfJy7lsHfReCeiicVn1FwA=/500x500/top/smart/99designs-contests-attachments/59/59081/attachment_59081997"
};
const Home = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.logo}>
      <Image source={logoPic} style={styles.image} />
    </View>
    <View style={styles.button}>
      <Button
        onPress={() => navigation.navigate("SignIn")}
        title="Join Classroom"
      />
    </View>
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
    backgroundColor: "#F7C46B",
    borderRadius: 10,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 17,
    paddingBottom: 17,
    paddingRight: 17,
    paddingLeft: 17,
    width: 200
  }
});

export default Home;
