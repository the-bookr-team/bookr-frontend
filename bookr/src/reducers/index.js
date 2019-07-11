import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  API_REQUEST_START,
  API_REQUEST_SUCCESS,
  API_REQUEST_FAILURE,
} from '../actions'

const initialState = {
  error: null,
  books: [],
  isAuthenticated: false,
  authToken: null,
  // the below Booleans are used to display loading spinners where appropriate
  isLoggingIn: false,
  makingAPIReqeust: false,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        authToken: action.payload,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error: action.payload,
      }
    case API_REQUEST_START:
      return {
        ...state,
        makingAPIReqeust: true,
      }
    case API_REQUEST_SUCCESS:
      return {
        ...state,
        makingAPIReqeust: false,
        books: action.payload,
      }
    case API_REQUEST_FAILURE:
      return {
        ...state,
        makingAPIReqeust: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default rootReducer
