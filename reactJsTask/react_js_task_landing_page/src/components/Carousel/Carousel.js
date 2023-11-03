import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bike from './img/bikeIns.jpg';
import car from './img/carIns.jpg';
import all from './img/allVehiIns.png';

function ImageCarousel() {
  return (
    <div className="carousel-container">
      <Carousel showStatus={false} showThumbs={false} dynamicHeight={true} infiniteLoop={true}>
        <div className="carousel-slide">
          <div className="carousel-image-container">
            <img src={bike} className='carousel-slide-img' alt="bike" />
          </div>
        </div>
        <div className="carousel-slide">
          <div className="carousel-image-container">
            <img src={car} className='carousel-slide-img' alt="car" />
          </div>
        </div>
        <div className="carousel-slide">
          <div className="carousel-image-container">
            <img src={all} className='carousel-slide-img' alt="all vehicles" />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
