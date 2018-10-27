import React, { Component } from 'react';
import { TodayfromNasa } from '../../ServiceClient';
import Photo from './Photo';
import { Jumbotron } from 'reactstrap';

class TodaysPhoto extends Component {

    state = { data: [], date: "" }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log("loading");
        this.getDate();
        this.getData();
    }

    getDate = () => {
        var date = new Date().toDateString();
        this.setState({ date });
    }

    getData = () => {
        TodayfromNasa(function (x) {
            console.log("fetching data");
            console.log(this.state);
            this.setState({ data: x });
        }.bind(this));
    }

    render() {

        // console.dir(this.state.data);
        return (
            <div align="center">
                <Jumbotron>
                    <h3>Nasa's photo of the day</h3>
                    <h6>{this.state.date}</h6>
                    <Photo info={this.state.data} />
                </Jumbotron>
            </div>
        );
    }
}

export default TodaysPhoto;