import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Image
} from "react-native-elements";
import { StackNavigator } from "react-navigation";
import styles from "./StyleSheet";

const TeacherView = ({ navigation }) => (
  <View style={styles.homeBtnContainer}>
    <View>
      <Text style={styles.title}>Welcome to Intro to Coding!</Text>
    </View>
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
    <View style={styles.primaryBtn}>
      <Button
        onPress={() => navigation.navigate("AllStudyGroups")}
        title="View All Study Groups"
      />
    </View>
    <View>
      <Button onPress={() => navigation.navigate("Main")} title="Logout" />
    </View>
  </View>
);

export default TeacherView;
