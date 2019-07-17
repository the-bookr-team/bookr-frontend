import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { EmptyStar } from '../Stars';

import { fetchBook } from '../../utils';

export default class AddReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null,
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const [book, reviews] = await fetchBook(id);
    this.setState({ book });
  }

  render() {
    return (
      <div className="add-review-wrapper">
        <ReviewDetails book={this.state.book} />
        <StarRating />
        <ReviewForm />
      </div>
    );
  }
}

const ReviewDetails = (props) => {
  if (!props.book) {
    return <p>Loading...</p>
  }

  const { book_img, title, author } = props.book;
  return (
    <div className="title-wrapper">
      <img src={book_img} alt={title} />
      <h3 className="review-title">Add a Review for: {title}</h3>
      <p className="author">
        Author: {author}
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
