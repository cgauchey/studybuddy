import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import Home from "./components/Home";
import Reaction from "./components/Reaction";
import SignIn from "./components/SignIn";
import ViewReactions from "./components/ViewReactions";
import Questions from "./components/Questions";
import theMap from "./components/Map";
import AllStudents from "./components/AllStudents";
import StudentView from "./components/StudentView";
import TeacherView from "./components/TeacherView";
import StudyGroup from "./components/StudyGroup";
import ClassroomId from "./components/ClassroomId";
import AllStudyGroups from "./components/AllStudyGroups";
import CreateGroup from "./components/CreateGroup";

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
  Map: {
    screen: theMap,
    navigationOptions: {
      headerTitle: "Map"
    }
  },
  AllStudents: {
    screen: AllStudents,
    navigationOptions: {
      headerTitle: "Student Roster"
    }
  },
  StudentView: {
    screen: StudentView,
    navigationOptions: {
      headerTitle: "Student View"
    }
  },
  TeacherView: {
    screen: TeacherView,
    navigationOptions: {
      headerTitle: "Teacher View"
    }
  },
  StudyGroup: {
    screen: StudyGroup,
    navigationOptions: {
      headerTitle: "Study Buddies"
    }
  },
  ClassroomId: {
    screen: ClassroomId,
    navigationOptions: {
      headerTitle: "Input Classroom ID"
    }
  },

  CreateGroup: {
    screen: CreateGroup,
    navigationOptions: {
      headerTitle: "Create Study Group"
    }
  },
  AllStudyGroups: {
    screen: AllStudyGroups,
    navigationOptions: {
      headerTitle: "All Study Groups"
    }
  }
});

export default RootNavigator;
