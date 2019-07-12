import axios from 'axios' 

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const API_REQUEST_START = 'API_REQUEST_START'
export const API_REQUEST_SUCCESS = 'API_REQUEST_SUCCESS'
export const API_REQUEST_FAILURE = 'API_REQUEST_FAILURE'

export const login = authData => async dispatch => {
  dispatch({ type: LOGIN_START })
  try {
    const { data } = await axios.post('http://localhost:5000/api/user', authData)
    dispatch({ type: LOGIN_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.response.data.error })
  }
}

export const getBooks = () => async dispatch => {
  dispatch({ type: API_REQUEST_START })
  try {
    const { data } = await axios.get('http://localhost:5000/api/books')
    dispatch({ type: API_REQUEST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: API_REQUEST_FAILURE, payload: error.response.data.error })
  }
}

export const deleteBook = bookId => async dispatch => {
  dispatch({ type: API_REQUEST_START })
  try {
    const { data } = await axios.delete(`http://localhost:5000/api/books/${bookId}`)
    dispatch({ type: API_REQUEST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: API_REQUEST_FAILURE, payload: error.response.data.error })
  }
}

export const addReview = (bookId, review)  => async dispatch => {
  dispatch({ type: API_REQUEST_START })
  try {
    const { data } = await axios.post(`http://localhost:5000/api/reviews`, {
      bookId,
      review,
    })
    dispatch({ type: API_REQUEST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: API_REQUEST_FAILURE, payload: error.response.data.error })
  }
}

export const deleteReview = reviewId => async dispatch => {
  dispatch({ type: API_REQUEST_START })
  try {
    const { data } = await axios.delete(`http://localhost:5000/api/reviews/${reviewId}`)
    dispatch({ type: API_REQUEST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: API_REQUEST_FAILURE, payload: error.response.data.error })
  }
}
