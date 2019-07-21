import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { deleteReview } from '../actions';

const Review = props => {
  const authenticatedUserEqualsReviewer = () =>
    props.username === props.review.reviewer
  return(
    <div className="review">
      {props.review.review}

      <span className="reviewed-by">Reviewed by</span>
      <span className="reviewer">{props.review.reviewer}</span>
      {props.isAuthenticated && authenticatedUserEqualsReviewer() && (
        <>
          <Button size="sm" color="secondary">Edit</Button>{' '}
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
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated,
  username: state.username
});

export default connect(mapStateToProps, { deleteReview })(Review);
