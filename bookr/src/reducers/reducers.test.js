import rootReducer from './index'

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTRATION_START,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
  API_REQUEST_START,
  API_REQUEST_SUCCESS,
  API_REQUEST_FAILURE,
} from '../actions'

describe('Root Reducer', () => {
  const initialState = {
    error: null,
    books: [],
    isAuthenticated: false,
    authToken: null,
    wasRegistrationSuccessful: false,
    isRegistering: false,
    isLoggingIn: false,
    makingAPIReqeust: false,
  }

  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle API_REQUEST_START', () => {
    expect(
      rootReducer(undefined, {
        type: API_REQUEST_START
      })
    ).toEqual({
      ...initialState,
      makingAPIReqeust: true
    })
  })

  it('should handle API_REQUEST_SUCCESS', () => {
    const mockData = [
      {
        id: 0,
        title: 'Pinocchio',
        author: 'Carlo Collodi',
        publisher: 'Sterling Childrens Books'
      }
    ]

    expect(
      rootReducer(undefined, {
        type: API_REQUEST_SUCCESS,
        payload: mockData,
      })
    ).toEqual({
      ...initialState,
      books: mockData,
    })
  })

  it('should handle API_REQUEST_FAILURE', () => {
    const mockErrorMsg = 'Error - issue fetching books'

    expect(
      rootReducer(undefined, {
        type: API_REQUEST_FAILURE,
        payload: mockErrorMsg,
      })
    ).toEqual({
      ...initialState,
      error: mockErrorMsg,
    })
  })

  it('shoudl handle LOGIN_START', () => {
    expect(
      rootReducer(undefined, {
        type: LOGIN_START
      })
    ).toEqual({
      ...initialState,
      isLoggingIn: true,
    })
  })

  it('should handle LOGIN_SUCCESS', () => {
    const mockData = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    expect(
      rootReducer(undefined, {
        type: LOGIN_SUCCESS,
        payload: mockData
      })
    ).toEqual({
      ...initialState,
      isLoggingIn: false,
      isAuthenticated: true,
      authToken: mockData,
    })
  })

  /**
   * TODO - test reducers for LOGIN and REGISTER
   */
  // it('should handle LOGIN_FAILURE')
  // it('should handle REGISTRATION_SUCCESS')
  // it('should handle REGISTRATION_FAILURE')
})
