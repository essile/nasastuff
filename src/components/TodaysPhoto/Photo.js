import React, { Component } from 'react';
import Datainfo from './Datainfo';

class Photo extends Component {

    render() {
        console.log("checking the state");
        console.dir(this.props.info);

        var da = [].concat(this.props.info)
            .map(function (dataset, index) {
                return (<Datainfo
                    key={index}
                    d={dataset} />
                )
            });

        return (
            <div>
                {da}
            </div>
        );
    }
}

export default Photo;