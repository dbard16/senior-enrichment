const CHANGE_STUDENT = 'CHANGE_STUDENT';

export function changeCurrentStudent (student){
  const action = {type: CHANGE_STUDENT, student}
  return action;
}

export default function reducer (state = [], action) {

  switch(action.type){

    case CHANGE_STUDENT:
      return action.student

    default:
      return state;
  }

}
