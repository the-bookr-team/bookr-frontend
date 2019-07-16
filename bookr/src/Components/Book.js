import React from 'react';
import Review from './Review';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

// This data will come from state in the final version

const book = {
  id: 1,
  book_img: 'https://images-na.ssl-images-amazon.com/images/I/615f6CAjYSL.jpg',
  title: 'Pinocchio (Sterling Unabridged Classics)',
  author: 'Carlo Collodi',
  publisher:
    "Sterling Children's Books; Unabridged edition (September 2, 2014)",
  rating: 3
};

const reviews = [
  {
    id: 1,
    title: 'Pinocchio (Sterling Unabridged Classics)',
    review: 'An amazing read for anyone who roots for the underdog!',
    reviewer: 'Justin',
    bookId: 1,
    rating: 5
  },
  {
    id: 2,
    title: 'Pinocchio (Sterling Unabridged Classics)',
    review: 'Awesome book, definitely worth reading again.',
    reviewer: 'Dan',
    bookId: 1,
    rating: 5
  },
  {
    id: 3,
    title: 'Pinocchio (Sterling Unabridged Classics)',
    review:
      "The context was decent but the title just didn't peak my interest... ",
    reviewer: 'Cedric',
    bookId: 1,
    rating: 2
  },
  {
    id: 4,
    title: 'Pinocchio (Sterling Unabridged Classics)',
    review:
      "I couldn't sleep because the story was so intense, it's the type of book that continues to draw you in!  Definitely would recommend for anyone!",
    reviewer: 'Cesare',
    bookId: 1,
    rating: 5
  }
];

const Book = props => {
  const {
    id,
    book_img,
    title,
    author,
    // reviews,
    publisher
  } = props.location.state.book;
  return (
    <div className="page-container">
      <div className="book-header">
        <img src={book_img} alt={title} />

        <div className="book-header__details">
          <h1>{book.title}</h1>
          <h2>By: {author}</h2>
          <Button color="primary">Purchase Now</Button>
          <Link
            to={{
              pathname: `/book/${book.id}/review`,
              state: props.location.state.book
            }}
          >
            <Button
              outline
              color="primary"
              onClick={() => props.history.push(`/book/${id}/review`)}
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
};

export default withRouter(Book);

/*
    "id": 1,
    "book_img": "https://images-na.ssl-images-amazon.com/images/I/615f6CAjYSL.jpg",
    "title": "Pinocchio (Sterling Unabridged Classics)",
    "author": "Carlo Collodi",
    "publisher": "Sterling Children's Books; Unabridged edition (September 2, 2014)",
    "rating": 3
    */
