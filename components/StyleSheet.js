import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50,
    backgroundColor: "white"
  },
  reactions: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20
    // flexDirection: "row"
  },
  repeat: {
    backgroundColor: "#FF2828",
    marginBottom: 20,
    borderRadius: 10,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 17,
    paddingBottom: 17,
    paddingRight: 17,
    paddingLeft: 17
  },
  explain: {
    backgroundColor: "#FF710F",
    marginBottom: 20,
    borderRadius: 10,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 17,
    paddingBottom: 17,
    paddingRight: 17,
    paddingLeft: 17
  },
  example: {
    backgroundColor: "#FEB100",
    borderRadius: 10,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 17,
    paddingBottom: 17,
    paddingRight: 17,
    paddingLeft: 17
  },
  font: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 17,
    paddingBottom: 17
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  studentInfo: {
    backgroundColor: "#FEB100",
    marginBottom: 5,
    borderRadius: 10,
    // marginRight: 160,
    marginLeft: 20,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 17,
    paddingLeft: 17
  },
  allStudents: {
    flexDirection: "row"
  },
  addStudentBtn: {
    backgroundColor: "#FEB100",
    marginBottom: 5,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 20,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 17,
    paddingLeft: 17
  }
});

export default styles;
