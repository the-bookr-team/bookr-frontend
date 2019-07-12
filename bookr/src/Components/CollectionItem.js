import React from 'react';
import { Star } from 'react-feather';

const CollectionItem = () => {
  return(
    <div className="collection-item">
      <img className="collection-item__cover"
        src="https://m.media-amazon.com/images/I/81wrqVLMYqL._AC_UL436_.jpg"
        alt="Spilled Milk"
      />

      <div className="collection-item__details">
        <h3>Spilled Milk: Based On A True Story</h3>

        <div className="collection-item__author">
          K.L Randis &middot;
          K.L Randis (June 7, 2013)
        </div>

        <div className="collection-item__rating">
          Avg. Rating: <Star /><Star /><Star /><Star />
        </div>
      </div>
    </div>
  )
}

export default CollectionItem;
