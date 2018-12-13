import React, { Component } from 'react';
import history from '../../config/history';

class SearchForm extends Component {

    state = {
        dateGiven: new Date(),
        yearToday: new Date().getFullYear(),
        dayToday: new Date().getDate(),
        monthToday: new Date().getMonth() + 1,
        data: [],
        today: "",
        value: ""
    }

    constructor(props) {
        super(props);
        this.state.today = `${this.state.yearToday}-${this.state.monthToday}-${this.state.dayToday}`
    }

    changeDate = () => {
        var pvm = document.getElementById("ddate").value;
        console.log("Saving the date given " + pvm);
        this.setState({ dateGiven: pvm, value: pvm })
        this.sendDateToParent(pvm);
    }

    sendDateToParent = (date) => {
        this.props.date(date);
    }

    render() {
        return (
            <div>
                <input id="ddate" type="date" min="1995-06-16" max={this.state.today} onChange={this.changeDate} />
            </div>
        );
    }
}

export default SearchForm;