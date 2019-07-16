import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AddReview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="add-review-wrapper">
        <ReviewDetails />
      </div>
    );
  }
}

const ReviewDetails = ({ book }) => {
  const { book_img, title, author } = book;
  return (
    <div className="title-wrapper">
      <img src={book_img} />
      <h3 className="review-title">Add a Review for: {title}</h3>
      <p className="author">
        Author:<em>{author}</em>
      </p>
    </div>
  );
};

const StarRating = () => {};
