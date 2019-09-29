import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Destination.scss';
import Button from 'react-bootstrap/Button';
import { Icon } from 'antd';



class Destination extends React.Component {

    constructor(props){
        super(props);
    }

    state = {
        cpt: 0
    }

    checkModulo = (props) => {
        if(props % 3 == 0){
            return true;
        }
        else{
            return false;
        }
    }


    renderImgCarousel = (props) => {
       return(
           <div>
            <div className="carousel-container">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={props.img[0].src}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={props.img[1].src}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={props.img[2].src}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>       
                </Carousel>
            </div>
            <div className="bottom-right-carousel">{props.upto} </div>
        </div>
        
       );
    }

    renderImg= (props) => {
        if(typeof props.img != 'string'){
            return (
                <div className="imageContainer">     
                    <div>
                        {this.renderImgCarousel(props)}
                    </div>
                    <div className="bottomInfo">
                        <div>
                            <div className="countryPlace-container country-place">
                                <span className="country">{props.country}</span>
                                <div className="diviser-info"></div>
                                <span className="place">{props.place}</span>
                            </div>
                            <div className="countryPlace-container">
                                <span className="label">{props.label}</span>
                                <span className="rating">{this.renderRating(props.rating)}</span>
                            </div>
                            <div className="countryPlace-container tags">
                                {this.renderTags(props.tags)}
                            </div >
                        </div>
                        <Button type="default"><Icon type="right" /></Button>
                    </div>
                </div> 
            )         
        };

        return(
            <div>
                <div className="imageContainer">
                    <img src={props.img}/>
                    <div className="bottom-right">{props.upto} </div>
                </div>
                <div className="bottomInfo">
                    <div>
                        <div className="countryPlace-container country-place">
                                <span className="country">{props.country}</span>
                                <div className="diviser-info"></div>
                                <span className="place">{props.place}</span>
                        </div>
                        <div className="countryPlace-container">
                            <span className="label">{props.label}</span>
                            <span className="rating">{this.renderRating(props.rating)}</span>
                        </div>
                        <div className="countryPlace-container tags">
                                {this.renderTags(props.tags)}
                        </div>
                    </div>
                    <Button type="default"> <Icon type="right" /> </Button>
                </div>
            </div>

        )
    }

    renderRating = (props) =>{
        let stars = [];
        for(let i = 0; i < props; i++){
            stars.push(<Icon type="star" theme="filled" key={i}/>)
        }              
        return stars;
    }

    renderTags = (props) => {
        let tags = [] 
            props.map((tag,index) => {
                tags.push(<div className="tag" key={index}>{tag.label}</div>)
            })
        return tags;
    }



    render(){
        return(
            <div>
                {this.renderImg(this.props.destination)}
            </div>
        )
    }
    
}

export default Destination;