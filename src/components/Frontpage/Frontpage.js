import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Frontpage extends Component {
    
    render() {
        return (
            <div align="center">
                <Jumbotron>
                <h1 className="display-3">Front page here, hello!</h1>
                <hr className="lead"/>
                <p className="lead">Some content here yes yes yes</p>
                </Jumbotron>
            </div>
        );
    }
}

export default Frontpage;