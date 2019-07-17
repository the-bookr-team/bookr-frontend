import axios from 'axios'

const BOOKR_API_DOMAIN = process.env.REACT_APP_BOOKR_API_DOMAIN || 'http://localhost:5000'

export const fetchBook = async id => {
  try {
    const { data } = await axios.get(`${BOOKR_API_DOMAIN}/api/books/${id}`);
    const book = data['0'];
    const { reviews } = data;
    return [book, reviews]
  } catch (error) {
    throw new Error(error)
  }
}
