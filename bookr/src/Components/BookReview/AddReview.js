import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Rater from '../Stars/Stars2';

import { addReview } from '../../actions';
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
      username: '',
    };
  }

  async componentDidMount() {
    const { username } = JSON.parse(localStorage.getItem('auth'))
    const { id } = this.props.match.params;
    const [book, reviews] = await fetchBook(id);
    this.setState({ book, username });
  }

  handleReview = e => {
    e.preventDefault();
    this.setState({ review: e.target.value });
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
    setTimeout(async () => {
      await this.props.addReview(id, newReview);
      this.props.history.push(`/book/${id}`);
    }, 500);
  };

  render() {
    return (
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
          book={this.state.book}
          handleRatingSubmit={this.handleRatingSubmit}
          handleReview={this.handleReview}
        />
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
    <div className="title-wrapper">
      <img src={book_img} alt={title} />
      <div className="title-author">
        <h3 className="review-title">Add a Review for: {title}</h3>
        <p className="author">
          Author: <em>{author}</em>
        </p>
      </div>
    </div>
  );
};

const ReviewForm = props => {
  if (!props.book) {
    return <p>Loading...</p>;
  }
  const { title } = props.book;
  return (
    <div className="review-form-wrapper">
      <h3>What did you think?</h3>
      <form className="review-form" onSubmit={props.handleRatingSubmit}>
        <textarea
          onChange={props.handleReview}
          placeholder={`Write a review of ${title}`}
        />
        <Button color="primary" className="form-button" type="submit">
          Submit Review
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
  { addReview }
)(AddReview);
