import { fire, db } from '../../config/fire'
import 'regenerator-runtime'

/**
 * ACTION TYPES
 */
const SET_LOGIN_SIGNUP = 'SET_LOGIN_SIGNUP'
const PERFORM_LOGOUT = 'PERFORM_LOGOUT'
const GET_CURRENT_USER = 'GET_CURRENT_USER'

/**
 * INITIAL STATE
 */
const initialState = {}

/**
 * ACTION CREATORS
 */
const getCurrentUser = (user) => {
  return {
    type: GET_CURRENT_USER,
    user
  }
}

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
export const getUser = () => {
  return async (dispatch) => {
    try {
      let user = await fire.auth().currentUser;
      dispatch(getCurrentUser(user))
    } catch (err) {
      console.log(err)
    }
  }
}

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
      return { ...state, credentials: action.credentials }
    case PERFORM_LOGOUT:
      return { ...state, credentials: action.credentials }
    case GET_CURRENT_USER:
      return { ...state, user: action.user }
    default:
      return state
  }
}