import React, { Component } from 'react';
import SearchForm from './SearchForm';
import { Jumbotron } from 'reactstrap';
import { withNamespaces } from 'react-i18next';
import i18n from '../../i18n';
import { ArchivedfromNasa } from '../../ServiceClient';
import SearchResults from './SearchResults';
import history from '../../config/history';

class Archived extends Component {

    state = {
        date: window.location.pathname.split("/").pop(),
        data: [],
    }

    componentDidMount = () => {
        // console.log(this.props.match.params);
        console.log("date in the url: " + window.location.pathname.split("/").pop());
        this.searchDate();
    }

    dateGiven = (date) => {
        this.setState({ date: date })
    }

    searchDate = () => {
        // console.log("välitetty object:");
        // console.dir(this.state.date);
        history.push(`/archived-photos/${this.state.date}`);

        if (this.state.date !== "") {
            ArchivedfromNasa(this.state.date, function (ddd) {
                console.log("välitetään tietoa");
                this.setState({ data: ddd });
                console.log(this.state.data);
            }.bind(this));
        }
            
    }

    render() {
        return (
            <div align="center">
                <Jumbotron>
                    <h2>{i18n.t('Search archived title')}</h2>
                    <p>
                        {i18n.t('Search archived paragraph')}
                    </p>
                    <small>{i18n.t('PS FI only')}</small>
                    <hr />
                    <SearchForm date={this.dateGiven} />
                    <input type="button" value={i18n.t('Search')} onClick={this.searchDate} />
                </Jumbotron>
                <SearchResults dataFromNasa={this.state.data} date={this.state.date} />
            </div>
        );
    }
}


// Function to make the component to change the language instantly
function ArchivedFunction({ t }) {
    return (
        <Archived />
    );
}
export default withNamespaces()(ArchivedFunction);