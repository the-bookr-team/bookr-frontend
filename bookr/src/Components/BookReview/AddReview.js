import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { EmptyStar } from '../Stars';

export default class AddReview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="add-review-wrapper">
        <ReviewDetails />
        <StarRating />
        <ReviewForm />
      </div>
    );
  }
}

const ReviewDetails = () => {
  // const { book_img, title, author } = book;
  return (
    <div className="title-wrapper">
      <img />
      <h3 className="review-title">Add a Review for: </h3>
      <p className="author">
        Author:
        <em />
      </p>
    </div>
  );
};

const StarRating = () => {
  return (
    <div className="star-rating-wrapper">
      <h3>Rating (1-5 stars)</h3>
      <EmptyStar />
      <EmptyStar />
      <EmptyStar />
      <EmptyStar />
      <EmptyStar />
    </div>
  );
};

const ReviewForm = () => {
  // const { title } = book;
  return (
    <div className="review-form-wrapper">
      <h3>What did you think?</h3>
      <form className="review-form">
        <textarea placeholder={`Write a review of`} />
        <Button color="primary" className="form-button" type="submit">
          Submit Review
        </Button>
      </form>
    </div>
  );
};
