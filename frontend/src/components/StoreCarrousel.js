import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SlideUno from "../images/slide_01.png";
import SlideDos from "../images/slide_02.png";
import SlideTres from "../images/slide_03.png";

const Slider = () => {

    return (
        <Carousel>

            <Carousel.Item>

                <img
                    className="d-block w-100"
                    src={SlideUno}
                    alt="First Slide"
                />

            </Carousel.Item>

            <Carousel.Item>

                <img
                    className="d-block w-100"
                    src={SlideDos}
                    alt="Second Slide"
                />

            </Carousel.Item>

            <Carousel.Item>

                <img
                    className="d-block w-100"
                    src={SlideTres}
                    alt="Third Slide"
                />

            </Carousel.Item>

        </Carousel>
    )

}

export default Slider;