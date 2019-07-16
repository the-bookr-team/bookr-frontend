import React from 'react';
import { FilledStar, EmptyStar } from './Stars';
import { Link } from 'react-router-dom';

const CollectionItem = props => {
  const defaultPoints = Array(5).fill(false);
  const ratingPoints = defaultPoints.fill(true, 0, props.book.rating)

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
          Avg. Rating: { ratingPoints.map(point => point ? <FilledStar /> : <EmptyStar />) }
        </div>

        <Link to={`/book/${props.book.id}`}>View details</Link>

      </div>
    </div>
  )
}

export default CollectionItem;
