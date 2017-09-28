const WRITE_CAMPUS_NAME = 'WRITE_CAMPUS_NAME'
const WRITE_CAMPUS_IMAGE = 'WRITE_CAMPUS_IMAGE'

const initialState = {
                      newCampusName: '',
                      newCampusImage:''
                      }
export function writeCampusName(newCampusName){
  const action = {type: WRITE_CAMPUS_NAME, newCampusName}
  return action
}

export function writeCampusImage(newCampusImage){
  const action = {type: WRITE_CAMPUS_IMAGE, newCampusImage}
  return action
}

export default function reducer(state = initialState, action){

  switch (action.type) {

    case WRITE_CAMPUS_NAME:
      return Object.assign({}, state, {newCampusName: action.newCampusName})

    case WRITE_CAMPUS_IMAGE:
      return Object.assign({}, state, {newCampusImage: action.newCampusImage})

    default:
      return state;
  }

}
