import axios from 'axios';

export const LOGOUT = 'LOGOUT';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTRATION_START = 'REGISTRATION_START';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';
export const API_REQUEST_START = 'API_REQUEST_START';
export const API_REQUEST_SUCCESS = 'API_REQUEST_SUCCESS';
export const API_REQUEST_FAILURE = 'API_REQUEST_FAILURE';
export const SEARCH_REQUEST_START = 'SEARCH_REQUEST_START';
export const SEARCH_REQUEST_SUCCESS = 'SEARCH_REQUEST_SUCCESS';
export const SEARCH_REQUEST_FAILURE = 'SEARCH_REQUEST_FAILURE';

const BOOKR_API_DOMAIN = process.env.REACT_APP_BOOKR_API_DOMAIN || 'http://localhost:5000';

export const login = (authData) => async (dispatch) => {
	dispatch({ type: LOGIN_START });
	try {
		const { data } = await axios.post(`${BOOKR_API_DOMAIN}/api/users/login`, authData);
		const { token } = data;
		localStorage.setItem(
			'auth',
			JSON.stringify({
				username: authData.username,
				token
			})
		);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: { authToken: token, username: authData.username }
		});
	} catch (error) {
		dispatch({ type: LOGIN_FAILURE, payload: error.response.data.error });
	}
};

export const register = (authData) => async (dispatch) => {
	dispatch({ type: REGISTRATION_START });
	try {
		const { data } = await axios.post(`${BOOKR_API_DOMAIN}/api/users/register`, authData);
		if (data.id && data.username && data.password) {
			dispatch({ type: REGISTRATION_SUCCESS });
		} else {
		}
	} catch (error) {
		dispatch({ type: REGISTRATION_FAILURE });
	}
};

export const logout = () => (dispatch) => {
	localStorage.clear();
	dispatch({ type: LOGOUT });
};

export const getBooks = () => async (dispatch) => {
	dispatch({ type: API_REQUEST_START });
	try {
		const { data } = await axios.get(`${BOOKR_API_DOMAIN}/api/books`);
		dispatch({ type: API_REQUEST_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: API_REQUEST_FAILURE, payload: error.response.data.error });
	}
};

export const deleteBook = (bookId) => async (dispatch) => {
	dispatch({ type: API_REQUEST_START });
	try {
		const { data } = await axios.delete(`${BOOKR_API_DOMAIN}/api/books/${bookId}`);
		dispatch({ type: API_REQUEST_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: API_REQUEST_FAILURE, payload: error.response.data.error });
	}
};

export const addReview = (bookId, review) => async (dispatch) => {
	dispatch({ type: API_REQUEST_START });
	try {
		const { token } = JSON.parse(localStorage.getItem('auth'));
		const { data } = await axios.post(
			`${BOOKR_API_DOMAIN}/api/reviews/books/${bookId}`,
			{
				book_id: bookId,
				...review
			},
			{
				headers: {
					Authorization: token,
					'Content-Type': 'application/json'
				}
			}
		);
		dispatch({ type: API_REQUEST_SUCCESS });
	} catch (error) {
		dispatch({ type: API_REQUEST_FAILURE, payload: error.response.data.error });
	}
};

export const deleteReview = (reviewId) => async (dispatch) => {
	dispatch({ type: API_REQUEST_START });
	try {
		const { data } = await axios.delete(`${BOOKR_API_DOMAIN}/api/reviews/${reviewId}`);
		dispatch({ type: API_REQUEST_SUCCESS });
	} catch (error) {
		dispatch({ type: API_REQUEST_FAILURE, payload: error.response.data.error });
	}
};

export const editReview = (reviewId, newReview) => async (dispatch) => {
	dispatch({ type: API_REQUEST_START });
	try {
		const { data } = await axios.put(`${BOOKR_API_DOMAIN}/api/reviews/${reviewId}`, newReview);
		dispatch({ type: API_REQUEST_SUCCESS });
	} catch (error) {
		dispatch({ type: API_REQUEST_FAILURE, payload: error.response.data.error });
	}
};

export const searchBooks = (query) => async (dispatch) => {
	dispatch({ type: SEARCH_REQUEST_START });
	try {
		const { data } = await axios.get(`http://localhost:5000/api/books/search?q=${query}`);
		dispatch({ type: SEARCH_REQUEST_SUCCESS, payload: data.books });
	} catch (error) {
		dispatch({ type: SEARCH_REQUEST_FAILURE, payload: error.response.data.error });
	}
};
