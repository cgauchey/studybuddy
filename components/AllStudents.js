import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import db from "../firestore";
import { fetchAllStudents } from "./store/students";
import { connect } from "react-redux";

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
    this.allStudents();
  }

  async allStudents() {
    const allTheStudents = db.collection("students");
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
      <View>
        {allStudents.length === 0 ? (
          <Text>Loading...</Text>
        ) : (
          allStudents.map(student => {
            return (
              <View key={student.id}>
                <Text>
                  {student.firstName} {student.lastName}
                </Text>
                <Text>{student.college}</Text>
                <Text>{student.email}</Text>
              </View>
            );
          })
        )}
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

export default AllStudents;
// export default (mapStateToProps, mapDispatchToProps)(AllStudents);
