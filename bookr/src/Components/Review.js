import React from 'react';

const Review = props => {
  return(
    <div className="review">
      {props.review.review}

      <span className="reviewed-by">Reviewed by</span>
      <span className="reviewer">{props.review.reviewer}</span>
    </div>
  )
}

export default Review;
