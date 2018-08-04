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
  }
});

export default styles;
