import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import db from "../firestore";
import { fetchAllStudents } from "./store/students";
import { connect } from "react-redux";
import styles from "./StyleSheet";
// const firebase = require("firebase");
// require("firebase/firestore");

// const firestore = require("firestore");
// const classID = 1;
// const studentsClass = allStudents.where("classID", "==", classID);

class AllStudents extends React.Component {
  constructor() {
    super();
    this.state = {
      allStudents: []
    };
    this.allStudents = this.allStudents.bind(this);
  }

  componentDidMount() {
    // this.fetchAllStudents();
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
        <View style={styles.primaryBtn}>
          <Button
            onPress={() => this.props.navigation.navigate("StudyGroup")}
            title="Generate Study Group"
          />
        </View>
      </View>
    );
  }
}

// const mapStateToProps = state => {
//   return { allStudents: state.student.allStudents };
// };

// const mapDispatchToProps = dispatch => ({
//   fetchAllStudents: () => {
//     dispatch(fetchAllStudents());
//   }
// });
console.disableYellowBox = true;

export default AllStudents;
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AllStudents);
