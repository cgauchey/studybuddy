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
  topic: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    textDecorationLine: "underline"
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
    marginLeft: 20,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 17,
    paddingLeft: 17,
    width: 200
  },
  groupInfo: {
    backgroundColor: "#FEB100",
    marginBottom: 5,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 17,
    paddingLeft: 17,
    width: 300
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
  },
  homeBtnContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  primaryBtn: {
    backgroundColor: "#A2EBFF",
    borderRadius: 10,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 17,
    paddingBottom: 17,
    paddingRight: 17,
    paddingLeft: 17,
    width: 300
  },
  primaryBtn1: {
    backgroundColor: "#A2EBFF",
    borderRadius: 10,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 1,
    paddingBottom: 1,
    paddingRight: 5,
    paddingLeft: 5,
    width: 300
  },
  signIn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  signInBtn: {
    backgroundColor: "#F7C46B",
    marginBottom: 20,
    borderRadius: 10,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 3,
    paddingBottom: 3,
    paddingRight: 5,
    paddingLeft: 5
  },
  formInput: {
    width: 300
  },
  passwordInput: {
    margin: 20
  }
});

export default styles;
