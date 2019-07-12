import React from 'react';

const Book = () => {
  return(
    <div className="book">
      <h1>Pinocchio (Sterling Unabridged Classics)</h1>
      <h2>By: Carlo Collodi</h2>

      <button>Purchase Now</button>
      <button>Add a Review</button>

      <div className="reviews">
        <div className="review">
          Awesome book, definitely worth reading again.
          <span className="reviewed-by">Reviewed by:</span>
          <span className="reviewer">Dan</span>
        </div>

        <div className="review">
          An amazing read for anyone who roots for the underdog!
          <span className="reviewed-by">Reviewed by:</span>
          <span className="reviewer">Justin</span>
        </div>

      </div>
    </div>
  )
}

export default Book;



/*
    "id": 1,
    "book_img": "https://images-na.ssl-images-amazon.com/images/I/615f6CAjYSL.jpg",
    "title": "Pinocchio (Sterling Unabridged Classics)",
    "author": "Carlo Collodi",
    "publisher": "Sterling Children's Books; Unabridged edition (September 2, 2014)",
    "rating": 3
*/
