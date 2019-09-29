import React from 'react';
import './Destination.scss';
import Carousel from 'react-bootstrap/Carousel';

class ImageCarousel extends React.Component {
    render(){
        const { destination } = this.props;
        
        return(
            <div className="carousel-container">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={destination.img[0]} alt="First"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={destination.img[1]} alt="Second slide"
                            />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={destination.img[2]} alt="Third slide" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>       
                </Carousel>
            </div>
        );
    }
}

export default ImageCarousel;