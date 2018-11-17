import React, { Component } from 'react';
import { TodayfromNasa } from '../../ServiceClient';
import Photo from './Photo';
import { Jumbotron } from 'reactstrap';
import i18n from "../../i18n";

class TodaysPhoto extends Component {

    state = { data: [], date: "" }

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
                    <h3>{i18n.t('PotD title')}</h3>
                    <h6>{this.state.date}</h6>
                    <small>{i18n.t('PS FI only')}</small>
                    <Photo info={this.state.data} />
                </Jumbotron>
            </div>
        );
    }
}

export default TodaysPhoto;