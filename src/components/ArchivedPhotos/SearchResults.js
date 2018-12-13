import React, { Component } from 'react';
import Datainfo from '../TodaysPhoto/Datainfo';
import { Alert } from 'reactstrap';
import i18n from '../../i18n';
import history from '../../config/history';

class SearchResults extends Component {

    render() {

        var date = window.location.pathname.split("/").pop();

        if (this.props.dataFromNasa.status == 400) {
            // alert("Tarkista päivämäärä.");
            return <Alert color="warning">{i18n.t('Date error')}</Alert>;
        }
        else {
            console.log("concat");
            var searchresult = [].concat(this.props.dataFromNasa)
                .map(function (data, index) {
                    return (
                        <Datainfo
                            key={index}
                            d={data}
                        />);
                });

            return (
                <div>
                    {date}
                    {searchresult}
                </div>
            );
        }
    }
}

export default SearchResults;