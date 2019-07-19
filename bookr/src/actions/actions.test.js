import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import {
  // Action Types
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTRATION_START,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
  API_REQUEST_START,
  API_REQUEST_SUCCESS,
  API_REQUEST_FAILURE,

  // Action Creators
  getBooks,
  login,
  register,
} from './index'

const mock = new MockAdapter(axios)
const middleware = [thunk]
const mockStore = configureMockStore(middleware)

describe('Async Action Creators', () => {
  beforeEach(() => mock.reset())
  afterAll(() => mock.restore())

  it('creates API_REQUEST_SUCCESS when fetching books has completed', () => {
    const mockData = [
      {
        id: 0,
        title: 'Pinocchio',
        author: 'Carlo Collodi',
        publisher: 'Sterling Childrens Books'
      }
    ]
    mock.onGet('http://localhost:5000/api/books').replyOnce(200, mockData)

    const expectedActions = [
      { type: API_REQUEST_START },
      { type: API_REQUEST_SUCCESS, payload: mockData },
    ]
    const store = mockStore({
      makingAPIRequest: false,
      books: [],
    })

    return store.dispatch(getBooks()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates API_REQUEST_FAILURE when server responds with 4xx status', () => {
    const mockError = {
      error: 'Error - issue fetching books'
    }
    mock.onGet('http://localhost:5000/api/books').replyOnce(400, mockError)

    const expectedActions = [
      { type: API_REQUEST_START },
      { type: API_REQUEST_FAILURE, payload: mockError.error },
    ]
    const store = mockStore({
      makingAPIRequest: false,
      error: null,
    })

    return store.dispatch(getBooks()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates LOGIN_SUCCESS after successfully loggin in', () => {
    const mockLogin = {
      username: 'alice',
      password: 'password',
    }
    const mockResponse = {
      message: 'Welcome alice',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    }

    mock.onPost('http://localhost:5000/api/users/login').replyOnce(200, mockResponse)

    const expectedActions = [
      { type: LOGIN_START },
      { type: LOGIN_SUCCESS, payload: mockResponse.token },
    ]
    const store = mockStore({
      isLoggingIn: false,
      authToken: null,
      isAuthenticated: false,
    })

    return store.dispatch(login(mockLogin)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it ('creates REGISTRATION_SUCCESS after successfully registering a new user', () => {
    const mockRegistration = {
      username: 'bob',
      password: 'password',
    }
    const mockResponse = {
      id: 42,
      username: 'bob',
      password: '$2a$10$6w7FiNntDsUxHHpZ0s4.lulqW9oEyZtVyZHj/GgvWkYIW.Jl7loya'
    }

    mock.onPost('http://localhost:5000/api/users/register').replyOnce(201, mockResponse)

    const expectedActions = [
      { type: REGISTRATION_START },
      { type: REGISTRATION_SUCCESS },
    ]
    const store = mockStore({
      isRegistering: false,
      wasRegistrationSuccessful: null,
    })

    return store.dispatch(register(mockRegistration)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
