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
// import StudentHome from "./components/StudentHome";
// import TeacherHome from "./components/TeacherHome";

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
      headerTitle: "Study Buddy"
    }
  },
  ClassroomId: {
    screen: ClassroomId,
    navigationOptions: {
      headerTitle: "Input Classroom ID"
    }
  }
  // StudentHome: {
  //   screen: StudentHome,
  //   navigationOptions: {
  //     headerTitle: "Student Home"
  //   }
  // },
  // TeacherHome: {
  //   screen: TeacherHome,
  //   navigationOptions: {
  //     headerTitle: "Teacher Home"
  //   }
  // }
});

export default RootNavigator;
