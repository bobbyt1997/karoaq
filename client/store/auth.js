import { fire, db } from '../../config/fire'
import 'regenerator-runtime'
import { async } from 'regenerator-runtime'

/**
 * ACTION TYPES
 */
const SET_LOGIN_SIGNUP = 'SET_LOGIN_SIGNUP'
const PERFORM_LOGOUT = 'PERFORM_LOGOUT'

/**
 * INITIAL STATE
 */
const initialState = {}

/**
 * ACTION CREATORS
 */
const setLoginSignup = (email, password) => {
  return {
    type: SET_LOGIN_SIGNUP,
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
      dispatch(setLoginSignup(email, password))
    } catch (err) {
      console.log(err)
    }
  }
}

export const signup = (email, password) => {
  return async (dispatch) => {
    try {
      await fire.auth().createUserWithEmailAndPassword(email, password)
      dispatch(setLoginSignup(email, password))
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
    case SET_LOGIN_SIGNUP:
      return action.credentials
    case PERFORM_LOGOUT:
      return action.credentials
    default:
      return state
  }
}