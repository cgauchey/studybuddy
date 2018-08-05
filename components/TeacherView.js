import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";
import { StackNavigator } from "react-navigation";
import styles from "./StyleSheet";

const SignIn = ({ navigation }) => (
  <View style={styles.homeBtnContainer}>
    <View style={styles.primaryBtn}>
      <Button
        onPress={() => navigation.navigate("ViewReactions")}
        title="View Class Participation"
      />
    </View>
    <View style={styles.primaryBtn}>
      <Button
        onPress={() => navigation.navigate("AllStudents")}
        title="View Class Information"
      />
    </View>
    <View style={styles.primaryBtn}>
      <Button
        onPress={() => navigation.navigate("Map")}
        title="View Library Map"
      />
    </View>
  </View>
);

export default SignIn;
