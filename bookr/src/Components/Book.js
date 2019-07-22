import React, { Component } from 'react';
import Review from './Review';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import StaticRating from './Stars/StaticRating';
import { calculateAvgRating } from '../utils';

import { fetchBook } from '../utils';
import Login from './Login';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null,
      reviews: []
    };
  }

  componentDidMount() {
    this.updatePage();
  }

  updatePage = async () => {
    const { id } = this.props.match.params;
    const [book, reviews] = await fetchBook(id);
    this.setState({
      book,
      reviews
    });
  }

  render() {
    if (!this.state.book) {
      return <p>Loading...</p>;
    }

    const { id, author, book_img, title } = this.state.book;
    const { reviews } = this.state;

    return (
      <div className="page-container">
        <div className="book-header">
          <img src={book_img} alt={title} />

          <div className="book-header__details">
            <h1>{title}</h1>
            <h2>By: {author}</h2>
            <div className="button-wrapper">
              <h2>
                Avg. Rating:{' '}
                <StaticRating value={calculateAvgRating(reviews)} />
              </h2>
              <Button color="primary">Purchase Now</Button>
              {this.props.isAuthenticated ? (
                <Link
                  to={{
                    pathname: `/book/${id}/review`,
                    state: this.state.book
                  }}
                >
                  <Button outline color="primary">
                    Add a Review
                  </Button>
                </Link>
              ) : (
                <Login
                  buttonLabel={
                    <Button className="sign-in-button" outline color="primary">
                      Sign In to Add Review
                    </Button>
                  }
                />
              )}
            </div>
          </div>
        </div>

        <div className="reviews">
          <h2>Reviews</h2>
          {reviews.map(review => (
            <Review
              key={review.id}
              review={review}
              book={this.state.book}
              updatePage={this.updatePage} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
});

export default withRouter(connect(mapStateToProps)(Book));
