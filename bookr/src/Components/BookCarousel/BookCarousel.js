import React from "react";
import { connect } from "react-redux";
import "./index.css";

const BookCarousel = props => {
  props.books.map(item => {
    if (item.id < 12) {
      return (
        <div className="solo-slide" key={item.book_img}>
          <img className="slide-image" src={item.book_img} alt={item.title} />
        </div>
      );
    }
  });
};

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

export default connect(mapStateToProps, {})(BookCarousel);
