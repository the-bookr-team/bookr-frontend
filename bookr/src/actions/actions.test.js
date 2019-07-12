import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import {
  // Action Types
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  API_REQUEST_START,
  API_REQUEST_SUCCESS,
  API_REQUEST_FAILURE,
  // Action Creators
  getBooks
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
})
