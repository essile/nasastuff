import React, { Component } from 'react';
import { ArchivedfromNasa } from '../../ServiceClient';
import SearchResults from './SearchResults';

class SearchForm extends Component {

    state = { 
        data: [], 
        dateGiven: new Date(), 
        yearToday: new Date().getFullYear(), 
        dayToday: new Date().getDate(), 
        monthToday: new Date().getMonth()+1,
        today: ""
    }

    constructor(props) {
        super(props);
        this.state.today = `${this.state.yearToday}-${this.state.monthToday}-${this.state.dayToday}`
    }

    changeDate = () => {
        var pvm = document.getElementById("ddate").value;
        console.log("Saving the date given");
        this.setState({ dateGiven: pvm })
    }

    searchDate = () => {
        console.log("välitetty object:");
        console.dir(this.state.dateGiven);
        
        ArchivedfromNasa(this.state.dateGiven, function(ddd) {
            console.log("välitetään tietoa");
            this.setState({ data: ddd });            
            console.log(this.state.data);
        }.bind(this));
    }

    render() {
        return (
            <div>
                <input id="ddate" min="1995-06-16" max={this.state.today} type="date" onChange={this.changeDate} /><br />
                <input type="button" value="Search" onClick={this.searchDate} />
                <SearchResults dataFromNasa={this.state.data}/>
            </div>
        );
    }
}

export default SearchForm;