import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const API_REQUEST_START = 'API_REQUEST_START';
export const API_REQUEST_SUCCESS = 'API_REQUEST_SUCCESS';
export const API_REQUEST_FAILURE = 'API_REQUEST_FAILURE';

const BOOKR_API_DOMAIN =
  process.env.REACT_APP_BOOKR_API_DOMAIN || 'http://localhost:5000';

export const login = authData => async dispatch => {
  dispatch({ type: LOGIN_START });
  try {
    const { data } = await axios.post(`${BOOKR_API_DOMAIN}/api/user`, authData);
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.response.data.error });
  }
};

export const getBooks = () => async dispatch => {
  dispatch({ type: API_REQUEST_START });
  try {
    const { data } = await axios.get(`${BOOKR_API_DOMAIN}/api/books`);
    dispatch({ type: API_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: API_REQUEST_FAILURE, payload: error.response.data.error });
  }
};

export const deleteBook = bookId => async dispatch => {
  dispatch({ type: API_REQUEST_START });
  try {
    const { data } = await axios.delete(
      `${BOOKR_API_DOMAIN}/api/books/${bookId}`
    );
    dispatch({ type: API_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: API_REQUEST_FAILURE, payload: error.response.data.error });
  }
};

export const addReview = (bookId, review) => async dispatch => {
  dispatch({ type: API_REQUEST_START });
  try {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJ1c2VybmFtZSI6IkJhYUIiLCJpYXQiOjE1NjM0MjY3OTIsImV4cCI6MTU2MzUxMzE5Mn0.DxBnwdpPEzCoX6vvpeGYsfdyxQ6hpmzRGqur7gsPQ6Q';
    const { data } = await axios.post(
      `${BOOKR_API_DOMAIN}/api/reviews/books/${bookId}`,
      review,
      {
        headers: {
          Authorization: token
        }
      }
    );
    dispatch({ type: API_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: API_REQUEST_FAILURE, payload: error.response.data.error });
  }
};

export const deleteReview = reviewId => async dispatch => {
  dispatch({ type: API_REQUEST_START });
  try {
    const { data } = await axios.delete(
      `${BOOKR_API_DOMAIN}/api/reviews/${reviewId}`
    );
    dispatch({ type: API_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: API_REQUEST_FAILURE, payload: error.response.data.error });
  }
};
