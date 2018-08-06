import React from "react";
import { Text, View, Button, Animated, Easing } from "react-native";
import { StackNavigator } from "react-navigation";
import styles from "./StyleSheet";

class StudentView extends React.Component {
  constructor(props) {
    super(props);
    this.springValue = new Animated.Value(0.3);
  }

  spring() {
    this.springValue.setValue(0.3);
    Animated.spring(this.springValue, { toValue: 1, friction: 1 }).start();
  }

  render() {
    return (
      <View style={styles.homeBtnContainer}>
        <View>
          <Text style={styles.title}>Welcome to Intro to Coding!</Text>
        </View>
        <View style={styles.primaryBtn}>
          <Button
            onPress={() => this.props.navigation.navigate("Reaction")}
            title="Participate"
          />
        </View>
        <View style={styles.primaryBtn}>
          <Button
            onPress={() => this.props.navigation.navigate("AllStudents")}
            title="View Class Information"
          />
        </View>
        <View style={styles.primaryBtn}>
          <Button
            onPress={() => this.props.navigation.navigate("AllStudyGroups")}
            title="View All Study Groups"
          />
        </View>
        <View style={styles.primaryBtn}>
          <Button
            onPress={() => this.props.navigation.navigate("Map")}
            title="View Library Map"
          />
        </View>

        <View>
          <Button
            onPress={() => this.props.navigation.navigate("Main")}
            title="Logout"
          />
        </View>
      </View>
    );
  }
}
export default StudentView;
