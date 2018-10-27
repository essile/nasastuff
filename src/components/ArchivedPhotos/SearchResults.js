import React, { Component } from 'react';
import Datainfo from '../TodaysPhoto/Datainfo';

class SearchResults extends Component {
    render() {
        console.log("concat");
        var searchresult = [].concat(this.props.dataFromNasa)
        .map(function (data, index) {
            return (<Datainfo 
                key={index}
                d={data}
                />);
        });

        return (
            <div>
                {searchresult}
            </div>
        );
    }
}

export default SearchResults;