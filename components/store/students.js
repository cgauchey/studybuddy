const firebase = require("firebase");
require("firebase/firestore");
const GET_ALL_STUDENTS = "GET_ALL_STUDENTS";

const initialState = {
  allStudents: []
};

const getAllStudents = allStudents => ({ type: GET_ALL_STUDENTS, allStudents });

export const fetchAllStudents = () => async dispatch => {
  try {
    const allTheStudents = firebase.collection("students");
    const arr = [];
    allTheStudents.get().then(docsArr => {
      docsArr.forEach(doc => {
        arr.push(doc.data());
      });
    });
    dispatch(getAllStudents(arr));
  } catch (err) {
    console.log(err);
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_STUDENTS:
      console.log(action.allStudents);
      return { ...state, allStudents: action.allStudents };
    default:
      return state;
  }
}
