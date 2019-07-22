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
      {props.review.review}

      <span className="reviewed-by">Reviewed by</span>
      <span className="reviewer">{props.review.reviewer}</span>
      {props.isAuthenticated && authenticatedUserEqualsReviewer() && (
        <>
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
            <Button size="sm" color="secondary">
              Edit
            </Button>{' '}
          </Link>
          <Button
            size="sm"
            color="danger"
            onClick={async () => {
              await props.deleteReview(props.review.id);
              await props.updatePage();
            }}
          >
            Delete
          </Button>
        </>
      )}
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
