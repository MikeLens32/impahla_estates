import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item className='Carousel'>
                    <img
                    className="d-block w-100"
                    src="https://www.regulationmatters.uk/wp-content/uploads/2018/04/diversity12.jpeg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='Carousel'>
                    <img
                    className="d-block w-100"
                    src="https://www.city-locksmith.co.uk/wp-content/uploads/2018/03/keys-locks.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='Carousel'>
                    <img
                    className="d-block w-100"
                    src="https://motionarray.imgix.net/preview-669091NuqJVMqon_0006.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    )
}

export default Banner
