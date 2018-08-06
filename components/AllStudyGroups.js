import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import db from "../firestore";
import { fetchAllStudents } from "./store/students";
import { connect } from "react-redux";
import styles from "./StyleSheet";

class AllStudyGroups extends React.Component {
  constructor() {
    super();
    this.state = {
      allStudyGroups: []
    };
    this.allStudyGroups = this.allStudyGroups.bind(this);
  }

  componentDidMount() {
    this.allStudyGroups();
  }

  async allStudyGroups() {
    const allTheStudyGroups = await db.collection("studyGroup");
    const arr = [];
    await allTheStudyGroups.get().then(docsArr => {
      docsArr.forEach(doc => {
        arr.push(doc.data());
      });
    });
    this.setState({ allStudyGroups: arr });
  }

  render() {
    const allStudyGroups = this.state.allStudyGroups;
    return (
      <View style={styles.container}>
        <ScrollView>
          {allStudyGroups.length === 0 ? (
            <View style={styles.loading}>
              <Text style={styles.title}>Loading...</Text>
            </View>
          ) : (
            allStudyGroups.map(student => {
              return (
                <View style={styles.allStudents} key={student.id}>
                  <View key={student.id} style={styles.groupInfo}>
                    <Text style={styles.topic}>Topic: {student.topic}</Text>
                    {student.name ? (
                      <Text style={styles.font}>Name: {student.name}</Text>
                    ) : (
                      <Text style={styles.font}>(no name found)</Text>
                    )}
                    <Text style={styles.font}>Contact: {student.contact}</Text>
                  </View>
                  {/* <View style={styles.addStudentBtn}>
                    <Button
                      // onPress={() => navigation.navigate("AllStudents")}
                      title="Add to Study Group"
                    />
                  </View> */}
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

export default AllStudyGroups;
