import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTRATION_START,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
  API_REQUEST_START,
  API_REQUEST_SUCCESS,
  API_REQUEST_FAILURE
} from '../actions';

const initialState = {
  error: null,
  books: [],
  isAuthenticated: false,
  authToken: null,
  wasRegistrationSuccessful: false,
  // the below Booleans are used to display loading spinners where appropriate
  isRegistering: false,
  isLoggingIn: false,
  makingAPIReqeust: false,
  username: '',
  userId: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        authToken: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error: action.payload,
      }
    case REGISTRATION_START:
      return {
        ...state,
        isRegistering: true,
      }
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        wasRegistrationSuccessful: true,
      }
    case REGISTRATION_FAILURE:
      return {
        ...state,
        isRegistering: false,
        wasRegistrationSuccessful: false,
      }
    case API_REQUEST_START:
      return {
        ...state,
        makingAPIReqeust: true
      };
    case API_REQUEST_SUCCESS:
      return {
        ...state,
        makingAPIReqeust: false,
        books: action.payload
      };
    case API_REQUEST_FAILURE:
      return {
        ...state,
        makingAPIReqeust: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
