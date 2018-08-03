window.navigator.userAgent = "react-native";
import SocketIOClient from "socket.io-client";
import schoolIP from "../secrets";
import Reaction from "./Reaction";

const socket = SocketIOClient(schoolIP, { jsonp: false });

socket.on("connect", () => {
  console.log("I am now connected to the server!");
});

// socket.emit("repeatCounter", () => {
//   console.log("hi");
// });

// socket.on("explainCounter", () => {
//   Reaction.incrementExplain();
// });

// socket.on("exampleCounter", () => {
//   Reaction.incrementExample();
// });

export default socket;
