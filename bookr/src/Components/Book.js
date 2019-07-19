import React, { Component } from 'react';
import Review from './Review';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import { fetchBook } from '../utils';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null,
      reviews: [],
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const [book, reviews] = await fetchBook(id);
    this.setState({
      book,
      reviews
    });
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
            {this.props.isAuthenticated &&
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
            }
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

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated,
});

export default withRouter(connect(mapStateToProps)(Book));
