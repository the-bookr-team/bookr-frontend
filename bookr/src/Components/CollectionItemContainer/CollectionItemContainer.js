import React from 'react';
import { Link } from 'react-router-dom';
import CollectionItem from './CollectionItem';

const books = [
  {
    id: 1,
    book_img:
      'https://images-na.ssl-images-amazon.com/images/I/615f6CAjYSL.jpg',
    title: 'Pinocchio (Sterling Unabridged Classics)',
    author: 'Carlo Collodi',
    publisher:
      "Sterling Children's Books; Unabridged edition (September 2, 2014)",
    rating: 3
  },
  {
    id: 2,
    book_img:
      'https://images-na.ssl-images-amazon.com/images/I/51DCK3z12-L._SX304_BO1,204,203,200_.jpg',
    title: 'A Game of Thrones (A Song of Ice and Fire, Book 1)',
    author: 'George R. R. Martin',
    publisher: 'Bantam; Media Tie In, Reprint edition (March 22, 2011)',
    rating: 4
  },
  {
    id: 3,
    book_img: 'https://m.media-amazon.com/images/I/81v5wp2zeQL._AC_UL436_.jpg',
    title: 'All the Light We Cannot See: A Novel',
    author: 'Anthony Doerr',
    publisher: 'Scribner; Reprint edition (April 4, 2017)',
    rating: 2
  },
  {
    id: 4,
    book_img: 'https://m.media-amazon.com/images/I/517NNEemClL._AC_UL436_.jpg',
    title: 'Beneath a Scarlet Sky: A Novel',
    author: 'Mark Sullivan',
    publisher: 'Lake Union Publishing (May 1, 2017)',
    rating: 5
  }
];

const CollectionItemContainer = () => {
  return (
    <div className="page-container">
      {books.map(book => (
        <Link
          to={{ pathname: `/book/${book.id}`, state: { book } }}
          key={book.id}
          style={{
            textDecoration: 'none',
            color: 'black'
          }}
        >
          <CollectionItem book={book} key={book.id} />
        </Link>
      ))}
    </div>
  );
};

export default CollectionItemContainer;
