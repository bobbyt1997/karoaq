import { fire, db } from '../../config/fire'
import 'regenerator-runtime'

/**
 * ACTION TYPES
 */
const SET_LOGIN = 'SET_LOGIN'
const PERFORM_LOGOUT = 'PERFORM_LOGOUT'

/**
 * INITIAL STATE
 */
const initialState = {}

/**
 * ACTION CREATORS
 */
const setLogin = (email, password) => {
  return {
    type: SET_LOGIN,
    credentials: {
      email,
      password
    }
  }
}

const performLogout = () => {
  return {
    type: PERFORM_LOGOUT,
    credentials: {
      email: '',
      password: ''
    }
  }
}

/**
 * THUNK CREATORS
 */
export const login = (email, password) => {
  return async (dispatch) => {
    try {
      await fire.auth().signInWithEmailAndPassword(email, password)
      dispatch(setLogin(email, password))
    } catch (err) {
      console.log(err)
    }
  }
}

export const logout = () => {
  return async (dispatch) => {
    try {
      await fire.auth().signOut()
      dispatch(performLogout)
    } catch (err) {
      console.log(err)
    }
  }
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN:
      return action.credentials
    case PERFORM_LOGOUT:
      return action.credentials
    default:
      return state
  }
}