import React from "react";
import { Text, View, ScrollView } from "react-native";
import db from "../firestore";
import styles from "./StyleSheet";

class StudyGroup extends React.Component {
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

  randomGroup(allStudents) {
    var j, x, i;
    for (i = allStudents.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = allStudents[i];
      allStudents[i] = allStudents[j];
      allStudents[j] = x;
    }
    // return allStudents[0];
    return allStudents.slice(0, 3);
  }

  render() {
    const allStudents = this.state.allStudents;
    const randomStudents = this.randomGroup(allStudents);
    // const randomStudent = this.randomGroup(allStudents);
    return (
      <View style={styles.container}>
        <ScrollView>
          {allStudents.length === 0 ? (
            <View style={styles.loading}>
              <Text style={styles.title}>Loading...</Text>
            </View>
          ) : (
            // return (
            ((
              <View style={styles.loading}>
                <Text style={styles.title}>Your Study Buddies are ...</Text>
              </View>
            ),
            randomStudents.map(randomStudent => {
              return (
                <View style={styles.loading} key={randomStudent.id}>
                  {/* <Text style={styles.title}>Your Study Buddies are ...</Text> */}
                  <View style={styles.allStudents}>
                    <View key={randomStudent.id} style={styles.studentInfo}>
                      <Text style={styles.font}>
                        {randomStudent.firstName} {randomStudent.lastName}
                      </Text>
                      {randomStudent.college ? (
                        <Text style={styles.font}>{randomStudent.college}</Text>
                      ) : (
                        <Text style={styles.font}>(no college found)</Text>
                      )}
                      <Text style={styles.font}>{randomStudent.email}</Text>
                    </View>
                  </View>
                </View>
              );
            }))
          )}
        </ScrollView>
      </View>
    );
  }
}

export default StudyGroup;
