import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import TodaysPhoto from './TodaysPhoto';

function PotDFunction ({t}) {
    return (
        <TodaysPhoto/>
    )
}

export default withNamespaces()(PotDFunction);