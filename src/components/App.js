import React from 'react';
import data from '../data';
import './App.scss';
import { Icon } from 'antd';


class App extends React.Component {

    state = {
        data: data
    }

    componentDidMount(){
        console.log(this.state.data);
    }

    render(){
        return (
        <div className="mainDiv">
            <div className="topDiv">
                <h1>Découvrez les offres du moment</h1>
                <h2>Vol + hôtel jusqu'à -70%</h2>
            </div>
            <div>
                <span> <Icon type="sliders" theme="filled" /> Destination</span>
                <Icon type="down" />
            </div>
        </div>
        );
    }

}

export default App;