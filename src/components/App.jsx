import React from 'react';
import data from '../data';
import './App.scss';
import { Icon } from 'antd';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Destination from './Destination';
import { ifStatement } from '@babel/types';
import _ from 'lodash';

class App extends React.Component {

    state = {
        data,
        selected: undefined,
        selectedName: undefined
    }

    chooseDestination(id, country){
        this.setState({
            selected: id,
            selectedName: country
        })
        console.log(this.state.selectedName);
    }
    
    renderDropdown = () => {
        return (this.state.data.map((el) => <Dropdown.Item href="#/action-1" key={el.id}  onClick={() => this.chooseDestination(el.id, el.country)}>{el.country}</Dropdown.Item>));
    }

    groupImage = () => {
        const { selected } = this.state;
        let images = this.state.data.filter(dest => dest.id === selected || selected === undefined).map((destination, index) => <Col key={destination.id}><Destination destination={destination} key={destination.id} row={index}></Destination></Col>)
        return _.chunk(images,3).map((group,index) => {
            return <Row key={index}>{group}</Row>
        })
    }

    render(){
        const buttonName = (
            <div>
                <Icon type="sliders" theme="filled"/>
                <span>{this.state.selected === undefined ? "DESTINATIONS" : this.state.selectedName}</span>
            </div>
        );

        

        return (
        <div>
          <div className="mainDiv">
              <div className="topDiv">
                  <h1 className="title">Découvrez les offres du moment</h1>
                  <h2 className="sub-title">Vol + hôtel jusqu'à -70%</h2>
                  <div className="diviser"></div>
              </div>
              <div>
                    <DropdownButton  id="dropdown-basic-button" className="dropdown" title={buttonName}>       
                    <Dropdown.Item href="#/action-1"  onClick={() => this.setState({selected: undefined})}>Toutes</Dropdown.Item>  
                        {this.renderDropdown()}
                    </DropdownButton>
              </div>
          </div>
          <Container>
              {this.groupImage()}     
          </Container>
        </div>
        );
    }

}

export default App;