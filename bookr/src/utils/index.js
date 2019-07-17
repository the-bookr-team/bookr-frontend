import axios from 'axios'

export const fetchBook = async id => {
  try {
    const { data } = await axios.get(`http://localhost:5000/api/books/${id}`);
    const book = data['0'];
    const { reviews } = data;
    return [book, reviews]
  } catch (error) {
    throw new Error(error)
  }
}
