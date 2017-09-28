const CHANGE_CAMPUS = 'CHANGE_CAMPUS';

export function changeCurrentCampus (campus){
  const action = { type: CHANGE_CAMPUS, campus}
  return action;
}

export default function reducer (state = [], action) {

  switch(action.type){

    case CHANGE_CAMPUS:
      return action.campus

    default:
      return state;
  }
}
