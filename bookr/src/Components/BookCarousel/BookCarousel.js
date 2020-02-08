import React from "react";
import Slider from "react-slick";
import Loader from "react-loaders";

import { settings } from "./BookCarouselSettings";
import { connect } from "react-redux";
import "./index.css";

const BookCarousel = props => {
  const slides = props.books.map(item => {
    console.log("book", item);
    if (item.id < 12) {
      return (
        <div className="solo-slide" key={item.book_img}>
          <img className="slide-image" src={item.book_img} alt={item.title} />
        </div>
      );
    }
  });
  if (props.books.length > 0) {
    return (
      <div className="carousel-wrapper">
        <Loader active />
        <Slider {...settings}>{slides}</Slider>
      </div>
    );
  } else {
    return <Loader type="line-scale" active />;
  }
};

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

export default connect(mapStateToProps, {})(BookCarousel);
