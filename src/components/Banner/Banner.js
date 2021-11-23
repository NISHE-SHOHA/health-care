import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/img1 (2).jpg';
import banner2 from '../../images/img2 (2).jpg';
import banner3 from '../../images/img3 (2).jpg';

const Banner = () => {
    return (
        <>
        <Carousel className="fw-bolder">
            <Carousel.Item>
            <img className="d-block w-100 " style={{height: '80vh'}}
            src={banner1}
            alt="First slide"
        />

        <Carousel.Caption className="text-warning">
            <h3>Never giveUp Become Stronger</h3>
            <p>New Members Get One Month Free.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
        className="d-block w-100" style={{height: '70vh'}}
        src={banner2}
        alt="Second slide"
        />

        <Carousel.Caption className="text-warning">
        <h3>Turn Fat Into Fit</h3>
        <p>New Members Get One Month Free.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" style={{height: '70vh'}}
        src={banner3}
        alt="Third slide"
        />

        <Carousel.Caption className="text-warning">
      <h3>Get in Shape & Be Healthy</h3>
      <p>New Members Get One Month Free.</p>
    </Carousel.Caption>
    </Carousel.Item>
    </Carousel>   
        </>
    );
};

export default Banner;