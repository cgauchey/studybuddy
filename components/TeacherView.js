import React from "react";
import { Text, View, Button } from "react-native";
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
        onPress={() => navigation.navigate("AllStudyGroups")}
        title="View All Study Groups"
      />
    </View>
    <View style={styles.primaryBtn}>
      <Button
        onPress={() => navigation.navigate("Map")}
        title="View Library Map"
      />
    </View>

    <View>
      <Button onPress={() => navigation.navigate("Main")} title="Logout" />
    </View>
  </View>
);

export default TeacherView;
