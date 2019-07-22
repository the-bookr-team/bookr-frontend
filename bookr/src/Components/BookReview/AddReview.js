import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Rater from '../Stars/Stars2';

import { addReview, editReview } from '../../actions';
import { fetchBook } from '../../utils';
import { connect } from 'react-redux';

class AddReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null,
      rating: null,
      review: '',
      value: 0,
      username: ''
    };
  }

  async componentDidMount() {
    const { username } = JSON.parse(localStorage.getItem('auth'));
    const { id } = this.props.match.params;
    const [book, reviews] = await fetchBook(id);
    if (!this.props.location.state) {
      this.setState({ book, username });
    } else {
      this.setState({
        username,
        book,
        ...this.props.location.state
      });
    }
  }

  handleReview = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRatingChange = value => {
    this.setState({ value });
  };

  handleRatingSubmit = e => {
    e.preventDefault();
    const id = this.state.book.id;
    const newReview = {
      reviewer: this.state.username,
      reviewer_id: this.props.userId,
      review: this.state.review,
      rating: this.state.value
    };
    console.log(this.state.username);
    setTimeout(async () => {
      if (this.props.location.state.editingReview) {
        const reviewId = this.props.location.state.id;
        await this.props.editReview(reviewId, newReview);
      } else {
        await this.props.addReview(id, newReview);
      }
      this.props.history.push(`/book/${id}`);
    }, 500);
  };

  render() {
    return (
      <div className="page-container">
        <div className="add-review-wrapper">
          <ReviewDetails book={this.state.book} />
          <div className="star-rating-wrapper">
            <h3>Rating (1-5 stars)</h3>
            <Rater
              handleRatingChange={this.handleRatingChange}
              value={this.state.value}
            />
          </div>
          <ReviewForm
            {...this.props}
            book={this.state.book}
            review={this.state.review}
            handleRatingSubmit={this.handleRatingSubmit}
            handleReview={this.handleReview}
          />
        </div>
      </div>
    );
  }
}

const ReviewDetails = props => {
  if (!props.book) {
    return <p>Loading...</p>;
  }

  const { book_img, title, author } = props.book;
  return (
    <div className="book-header">
      <img src={book_img} alt={title} />

      <div className="book-header__details">
        <h1>{title}</h1>
        <h2>By: {author}</h2>
      </div>
    </div>
  );
};

const ReviewForm = props => {
  if (!props.book) {
    return <p>Loading...</p>;
  }
  const { editingReview } = props.location.state || false;
  const { title } = props.book;
  return (
    <div className="review-form-wrapper">
      <h3>What did you think?</h3>
      <form className="review-form" onSubmit={props.handleRatingSubmit}>
        <textarea
          name="review"
          value={props.review}
          onChange={props.handleReview}
          placeholder={`Write a review of ${title}`}
        />
        <Button color="primary" className="form-button" type="submit">
          {editingReview ? 'Update Review' : 'Submit Review'}
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  username: state.username,
  userId: state.userId
});

export default connect(
  mapStateToProps,
  { addReview, editReview }
)(AddReview);
