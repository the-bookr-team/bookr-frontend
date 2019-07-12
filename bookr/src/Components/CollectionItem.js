import React from 'react';
import { Star } from 'react-feather';

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
          Avg. Rating: <Star /><Star /><Star /><Star />
        </div>
      </div>
    </div>
  )
}

export default CollectionItem;
