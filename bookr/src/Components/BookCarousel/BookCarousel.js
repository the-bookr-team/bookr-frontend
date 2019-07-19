import React, { Component } from 'react';
import Slider from 'react-slick';

import './bookCarousel.css';

const items = [
	{
		id: 1,
		book_img: 'https://images-na.ssl-images-amazon.com/images/I/615f6CAjYSL.jpg',
		title: 'Pinocchio (Sterling Unabridged Classics)',
		author: 'Carlo Collodi',
		publisher: "Sterling Children's Books; Unabridged edition (September 2, 2014)"
	},
	{
		id: 2,
		book_img: 'https://images-na.ssl-images-amazon.com/images/I/51DCK3z12-L._SX304_BO1,204,203,200_.jpg',
		title: 'A Game of Thrones (A Song of Ice and Fire, Book 1)',
		author: 'George R. R. Martin',
		publisher: 'Bantam; Media Tie In, Reprint edition (March 22, 2011)'
	},
	{
		id: 3,
		book_img: 'https://m.media-amazon.com/images/I/81v5wp2zeQL._AC_UL436_.jpg',
		title: 'All the Light We Cannot See: A Novel',
		author: 'Anthony Doerr',
		publisher: 'Scribner; Reprint edition (April 4, 2017)'
	},
	{
		id: 4,
		book_img: 'https://m.media-amazon.com/images/I/517NNEemClL._AC_UL436_.jpg',
		title: 'Beneath a Scarlet Sky: A Novel',
		author: 'Mark Sullivan',
		publisher: 'Lake Union Publishing (May 1, 2017)'
	},
	{
		id: 5,
		book_img: 'https://m.media-amazon.com/images/I/913q3yNsbaL._AC_UL436_.jpg',
		title: 'The Girl on the Train',
		author: 'Paula Hawkins',
		publisher: 'Riverhead Books; Reprint edition (July 12, 2016)'
	},
	{
		id: 6,
		book_img: 'https://m.media-amazon.com/images/I/81WWiiLgEyL._AC_UL436_.jpg',
		title: 'Where the Crawdads Sing',
		author: 'Delia Owens',
		publisher: "G.P. Putnam's Sons (August 14, 2018)"
	},
	{
		id: 7,
		book_img: 'https://m.media-amazon.com/images/I/71124+8SsFL._AC_UL436_.jpg',
		title: "Ghost Soldiers: The Epic Account of World War II's Greatest Rescue Mission",
		author: 'Hampton Sides',
		publisher: 'Anchor (May 7, 2002)'
	},
	{
		id: 8,
		book_img: 'https://m.media-amazon.com/images/I/81WojUxbbFL._AC_UL436_.jpg',
		title: 'Educated: A Memoir',
		author: 'Tara Westover',
		publisher: 'Random House; 1st edition (February 20, 2018)'
	},
	{
		id: 9,
		book_img: 'https://m.media-amazon.com/images/I/81wrqVLMYqL._AC_UL436_.jpg',
		title: 'Spilled Milk: Based On A True Story',
		author: 'K.L Randis',
		publisher: 'K.L Randis (June 7, 2013)'
	},
	{
		id: 10,
		book_img: 'https://m.media-amazon.com/images/I/91XT4tkFFeL._AC_UL436_.jpg',
		title: "The Handmaid's Tale",
		author: 'Margaret Atwood',
		publisher: 'Houghton Mifflin Harcourt (February 17, 1986)'
	}
];

const NextArrow = (props) => {
	const { className, style, onClick } = props;
	return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
};

const PrevArrow = (props) => {
	const { className, style, onClick } = props;
	return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
};

export default class BookCarousel extends Component {
	render() {
		const settings = {
			className: 'center',
			arrows: true,
			centerMode: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
			centerPadding: '-5px',
			slidesToShow: 5,
			speed: 1000,
			nextArrow: <NextArrow />,
			prevArrow: <PrevArrow />
		};

		const slides = items.map((item) => {
			return (
				<div className="solo-slide" key={item.book_img}>
					<img className="slide-image" src={item.book_img} alt={item.title} />
				</div>
			);
		});

		return (
			<div className="carousel">
				<h2> Featured</h2>

				<div className="carousel-wrapper">
					<Slider {...settings}>
						{slides[0]}
						{slides[1]}
						{slides[2]}
						{slides[3]}
						{slides[4]}
						{slides[5]}
						{slides[6]}
						{slides[7]}
						{slides[8]}
						{slides[9]}
					</Slider>
				</div>
			</div>
		);
	}
}
