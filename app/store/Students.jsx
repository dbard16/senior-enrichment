import axios from 'axios';

const GET_STUDENT = 'GET_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';
const DELETE_STUDENT = 'DELETE_STUDENT';

export function getStudent(student){
  const action = {type: GET_STUDENT, student};
  return action;
}

export function getStudents(students){
  const action = {type: GET_STUDENTS, students}
  return action;
}

export function deleteStudent(id){
  const action = {type: DELETE_STUDENT, id}
  return action;
}

export function fetchStudents(){
  return function thunk(dispatch){
    axios.get('api/student')
    .then(res => res.data)
    .then(students => {
      const action = getStudents(students)
      dispatch(action)
    })
  }
}

export function postStudent(student, history){
  return function thunk(dispatch){
    axios.post('api/studentForm', student)
    .then(res => res.data)
    .then(newStudent => {
      const action = getStudent(newStudent)
      dispatch(action);
      history.push('/students');
    })
  }
}

export function removeStudent(id){
  return function thunk(dispatch){
    const action = deleteStudent(id)
    dispatch(action)
    axios.delete(`api/student/${id}`)
    fetchStudents();
  }
}

export default function reducer(state = [], action){
  switch (action.type){
    case GET_STUDENT:
      return [...state, action.student];

    case GET_STUDENTS:
      return action.students;

    case DELETE_STUDENT:
      return state.filter(student => student.id != action.id)

    default:
      return state;
  }
}
