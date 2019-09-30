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
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={destination.img[1]} alt="Second slide"
                            />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={destination.img[2]} alt="Third slide" />
                    </Carousel.Item>       
                </Carousel>
            </div>
        );
    }
}

export default ImageCarousel;