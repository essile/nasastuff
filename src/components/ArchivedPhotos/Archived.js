import React, { Component } from 'react';
import SearchForm from './SearchForm';
import { Jumbotron } from 'reactstrap';
import { withNamespaces } from 'react-i18next';
import i18n from '../../i18n';

class Archived extends Component {
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
                <SearchForm /><br />
            </Jumbotron>
            </div>
        );
    }
}

// export default Archived;

function ArchivedFunction({ t }) {
    return (
        <Archived/>
    );
}
export default withNamespaces()(ArchivedFunction);