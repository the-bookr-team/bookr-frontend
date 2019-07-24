import React from 'react';
import Slider from 'react-slick';

import { settings } from './BookCarouselSettings';
import { connect } from 'react-redux';
import './index.css';

const BookCarousel = (props) => {
	const slides = props.books.map((item) => {
		return (
			<div className="solo-slide" key={item.book_img}>
				<img className="slide-image" src={item.book_img} alt={item.title} />
			</div>
		);
	});

	return (
		<div className="carousel-wrapper">
			<Slider {...settings}>{slides}</Slider>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		books: state.books
	};
};

export default connect(mapStateToProps, {})(BookCarousel);
