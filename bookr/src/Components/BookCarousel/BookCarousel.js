import React, { Component } from 'react';
import Slider from 'react-slick';

const items = [
  {
    src: 'https://images.penguinrandomhouse.com/cover/9781101931288',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://images.penguinrandomhouse.com/cover/9780399585050',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://images.penguinrandomhouse.com/cover/9780345805096',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'https://images.penguinrandomhouse.com/cover/9781594485756',
    altText: 'Slide 4',
    caption: 'Slide 4'
  },
  {
    src: 'https://images.penguinrandomhouse.com/cover/9781101946626',
    altText: 'Slide 5',
    caption: 'Slide 5'
  },
  {
    src: 'https://images.randomhouse.com/cover/9780141044668',
    altText: 'Slide 6',
    caption: 'Slide 6'
  },
  {
    src: 'https://images.penguinrandomhouse.com/cover/9780525436140',
    altText: 'Slide 7',
    caption: 'Slide 7'
  },
  {
    src: 'https://images.penguinrandomhouse.com/cover/9780812998955',
    altText: 'Slide 8',
    caption: 'Slide 8'
  },
  {
    src: 'https://images.randomhouse.com/cover/9780735274259',
    altText: 'Slide 9',
    caption: 'Slide 9'
  },
  {
    src: 'https://images.penguinrandomhouse.com/cover/9781594633409',
    altText: 'Slide 10',
    caption: 'Slide 10'
  }
];

const NextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
};

const PrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
};

export default class BookCarousel extends Component {
  render() {
    const settings = {
      width: '100vw',
      className: 'center',
      arrows: true,
      centerMode: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      centerPadding: '50px',
      slidesToShow: 3,
      speed: 500,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };

    const slides = items.map(item => {
      return (
        <div className="solo-slide" key={item.src}>
          <img className="slide-image" src={item.src} alt={item.altText} />
        </div>
      );
    });

    return (
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
    );
  }
}
