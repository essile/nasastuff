import React from 'react';
import {withNamespaces} from 'react-i18next';
import NavBar from './NavBar';

function NavBarFunction ({t}) {
    return (
        <NavBar/>
    )
}

export default withNamespaces()(NavBarFunction);