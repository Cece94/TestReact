import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Destination.scss';
import Button from 'react-bootstrap/Button';
import { Icon } from 'antd';
import ImageCarousel from './imageCarousel';



class Destination extends React.Component {

    renderImg= (props) => {
        return (
            <div>
                <div className="imageContainer">     
                    {Array.isArray(props.img) ?
                        <ImageCarousel destination={props} /> : <img src={props.img} alt='img' />
                    }
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
                            </div >
                        </div>
                        <Button type="default"><Icon type="right" /></Button>
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