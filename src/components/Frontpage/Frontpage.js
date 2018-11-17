import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import { withNamespaces } from 'react-i18next';

// class Frontpage extends Component {

//     render() {
//         return (

//             <div align="center">
//                 <Jumbotron>
//                     <h1 className="display-3">Front page here, hello!</h1>
//                     <hr className="lead" />
//                     <p className="lead">Some content here yes yes yes</p>
//                 </Jumbotron>
//             </div>
//         );
//     }
// }
function Frontpage({ t }) {


    return (
        <div align="center">
            <Jumbotron>
                <h1 className="display-3">{t('Hello.Frontpage')}</h1>
                <hr className="lead" />
                <p className="lead">{t('Some content')}</p>
            </Jumbotron>
        </div>
    )
}

// export default Frontpage;
export default withNamespaces()(Frontpage);