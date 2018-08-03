import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import Home from "./components/Home";
import Reaction from "./components/Reaction";
import SignIn from "./components/SignIn";
import ViewReactions from "./components/ViewReactions";
import Questions from "./components/Questions";
import Class from "./components/Class";
import Roster from "./components/Roster";
import theMap from "./components/Map";

const RootNavigator = createStackNavigator({
  Main: {
    screen: Home,
    navigationOptions: {
      headerTitle: "Home"
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      headerTitle: "Sign In"
    }
  },
  Reaction: {
    screen: Reaction,
    navigationOptions: {
      headerTitle: "Reaction"
    }
  },
  ViewReactions: {
    screen: ViewReactions,
    navigationOptions: {
      headerTitle: "View Reactions"
    }
  },
  Questions: {
    screen: Questions,
    navigationOptions: {
      headerTitle: "Questions"
    }
  },
  Class: {
    screen: Class,
    navigationOptions: {
      headerTitle: "Class"
    }
  },
  Roster: {
    screen: Roster,
    navigationOptions: {
      headerTitle: "Roster"
    }
  },
  Map: {
    screen: theMap,
    navigationOptions: {
      headerTitle: "Map"
    }
  }
});

export default RootNavigator;
