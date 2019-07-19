import React from 'react';
import StaticRating from '../Stars/StaticRating';

const CollectionItem = props => {
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
          Avg. Rating: <StaticRating value={props.book.rating} />
        </div>
      </div>
    </div>
  )
}

export default CollectionItem;
