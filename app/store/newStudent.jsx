const WRITE_STUDENT_NAME = 'WRITE_STUDENT_NAME'
const CHANGE_NEW_CAMPUS = 'CHANGE_NEW_CAMPUS'
const WRITE_STUDENT_EMAIL = 'WRITE_STUDENT_EMAIL'

const initialState = {
                  newStudentName: '',
                  newStudentEmail: '',
                  newStudentCampusId: 0
}
export function writeStudentName(studentName){
  const action = {type: WRITE_STUDENT_NAME, studentName}
  return action
}

export function changeNewCampus(campus){
  const action = {type: CHANGE_NEW_CAMPUS, campus}
  return action
}

export function writeStudentEmail(studentEmail){
  const action = {type: WRITE_STUDENT_EMAIL, studentEmail}
  return action
}
export default function reducer(state = initialState, action){

  switch (action.type) {

    case WRITE_STUDENT_NAME:
      return Object.assign({}, state, {newStudentName: action.studentName})

    case CHANGE_NEW_CAMPUS:
      return Object.assign({}, state, {newStudentCampusId: action.campus})

    case WRITE_STUDENT_EMAIL:
      return Object.assign({}, state, {newStudentEmail: action.studentEmail})

    default:
      return state;
  }

}
