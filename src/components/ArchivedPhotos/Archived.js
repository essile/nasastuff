import React, { Component } from 'react';
import SearchForm from './SearchForm';
import { Jumbotron } from 'reactstrap';

class Archived extends Component {
    render() {
        return (
            <div align="center">
                <Jumbotron>
                    <h2>Search the archived phtotos</h2>
                    <p>
                        Did you miss the photo of the day yesterday? Or are you interested
                        in on the photo of the day when you had your last birthday?
                        What was it when your child was born? Check it here!
                    </p>
                    <hr/>
                    <SearchForm /><br />
                </Jumbotron>
            </div>
        );
    }
}

export default Archived;