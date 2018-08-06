import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import db from "../firestore";
import { fetchAllStudents } from "./store/students";
import { connect } from "react-redux";
import styles from "./StyleSheet";

class AllStudents extends React.Component {
  constructor() {
    super();
    this.state = {
      allStudents: []
    };
    this.allStudents = this.allStudents.bind(this);
  }

  componentDidMount() {
    this.allStudents();
  }

  async allStudents() {
    const allTheStudents = await db.collection("students");
    const arr = [];
    await allTheStudents.get().then(docsArr => {
      docsArr.forEach(doc => {
        arr.push(doc.data());
      });
    });
    this.setState({ allStudents: arr });
  }

  render() {
    const allStudents = this.state.allStudents;
    return (
      <View style={styles.container}>
        <ScrollView>
          {allStudents.length === 0 ? (
            <View style={styles.loading}>
              <Text style={styles.title}>Loading...</Text>
            </View>
          ) : (
            allStudents.map(student => {
              return (
                <View style={styles.allStudents} key={student.id}>
                  <View key={student.id} style={styles.studentInfo}>
                    <Text style={styles.font}>
                      {student.firstName} {student.lastName}
                    </Text>
                    {student.college ? (
                      <Text style={styles.font}>{student.college}</Text>
                    ) : (
                      <Text style={styles.font}>(no college found)</Text>
                    )}
                    <Text style={styles.font}>{student.email}</Text>
                  </View>
                </View>
              );
            })
          )}
        </ScrollView>
        <View style={styles.primaryBtn1}>
          <Button
            onPress={() => this.props.navigation.navigate("CreateGroup")}
            title="Create Study Group"
          />
        </View>
        <View style={styles.primaryBtn1}>
          <Button
            onPress={() => this.props.navigation.navigate("StudyGroup")}
            title="Generate Random Group"
          />
        </View>
      </View>
    );
  }
}

console.disableYellowBox = true;

export default AllStudents;
