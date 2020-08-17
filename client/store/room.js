import { fire, db } from '../../config/fire'

/**
 * ACTION TYPES
 */
const JOIN_CREATE = 'JOIN_CREATE'

/**
 * INITIAL STATE
 */
const initialState = {}

/**
 * ACTION CREATORS
 */
const joinCreateCreator = (roomDetails) => {
  return {
    type: JOIN_CREATE,
    roomDetails
  }
}

/**
 * THUNK CREATORS
 */
export const joinCreate = (roomName, currentUser) => {
  return async (dispatch) => {
    try {
      if ((await db.ref('/rooms').once('value')).val().hasOwnProperty(roomName)) {
        // let users = (await db.ref('/rooms/' + roomName).once('value')).val().users
        // console.log('THUNK CREATOR: ', ...users)
        // let updates = {}
        // updates[`/rooms/${roomName}/users`] = [...users, currentUser];
        // db.ref().update(updates);
        console.log('ROOM EXISTS')
        //dispatch(joinCreateCreator(roomDetails))
      }

    } catch (err) {
      console.log(err)
    }
  }
}

export default function roomReducer(state = initialState, action) {
  switch (action.type) {
    case JOIN_CREATE:
      return { ...state, roomDetails: action.roomDetails }
    default:
      return state
  }
}