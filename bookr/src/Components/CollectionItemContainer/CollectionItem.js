import React from 'react';
import StaticRating from '../Stars/StaticRating';

const CollectionItem = props => {
  const calculateAvgRating = reviews => {
    const numReviews = reviews.length
    const sum = reviews.reduce((acc, curr) => { return curr.rating + acc }, 0)
    const avgRating = Math.round(sum / numReviews)
    return avgRating
  }

  return(
    <div className="collection-item">
      <img className="collection-item__cover"
        src={props.book.book_img}
        alt={props.book.title}
      />

      <div className="collection-item__details">
        <h3>{props.book.title}</h3>

        <div className="collection-item__author">
          {props.book.author} &middot; {props.book.publisher} 
        </div>

        <div className="collection-item__rating">
          Avg. Rating: <StaticRating value={calculateAvgRating(props.book.reviews)} />
        </div>
      </div>
    </div>
  )
}

export default CollectionItem;
