import React, { Component } from 'react';
import Review from './Review';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import axios from 'axios';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null,
      reviews: [],
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchBook(id);
  }
  
  fetchBook = async id => {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/books/${id}`);
      const book = data['0'];
      const { reviews } = data;
      this.setState({
        book,
        reviews
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    if (!this.state.book) {
      return <p>Loading...</p>;
    }

    const {
      id,
      author,
      book_img,
      title,
    } = this.state.book;
    const { reviews } = this.state;

    return (
      <div className="page-container">
        <div className="book-header">
          <img src={book_img} alt={title} />
  
          <div className="book-header__details">
            <h1>{title}</h1>
            <h2>By: {author}</h2>
            <Button color="primary">Purchase Now</Button>
            <Link
              to={{
                pathname: `/book/${id}/review`,
                state: this.state.book
              }}
            >
              <Button
                outline
                color="primary"
              >
                Add a Review
              </Button>
            </Link>
          </div>
        </div>
  
        <div className="reviews">
          <h2>Reviews</h2>
          {reviews.map(review => (
            <Review review={review} key={review.id} />
          ))}
        </div>
      </div>
    );
  }
};

export default withRouter(Book);
