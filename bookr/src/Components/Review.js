import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { deleteReview } from '../actions';
import { Link } from 'react-router-dom';

const Review = props => {
  const authenticatedUserEqualsReviewer = () =>
    props.username === props.review.reviewer;
  return (
    <div className="review">
      {/* <span className="reviewed-by">Reviewed by</span> */}
      <span className="reviewer">
        {props.review.reviewer}{' '}
        {props.isAuthenticated && authenticatedUserEqualsReviewer() && (
          <div className="edit-delete-review-buttons">
            <Link
              to={{
                pathname: `/book/${props.book.id}/review`,
                state: {
                  editingReview: true,
                  id: props.review.id,
                  value: props.review.rating,
                  review: props.review.review
                }
              }}
            >
              <Button className="far fa-edit" size="sm" color="link" />
            </Link>
            <Button
              className="fas fa-trash-alt"
              size="sm"
              color="link"
              onClick={async () => {
                await props.deleteReview(props.review.id);
                await props.updatePage();
              }}
            />
          </div>
        )}
      </span>
      <span className="review-text">{props.review.review}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated,
  username: state.username
});

export default connect(
  mapStateToProps,
  { deleteReview }
)(Review);
