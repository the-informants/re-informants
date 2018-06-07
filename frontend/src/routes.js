import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './components/Intro/About';
import Account from './components/Intro/AccountProfile';
import Buyer from './components/Intro/Buyer';
import GetStarted from './components/Intro/GetStarted';
import Informant from './components/Intro/Informant';
import InquiryThankYou from './components/Intro/InquiryThankYou';

export default (
    <Switch>
        <Route exact path = '/' component={Login}/>
        <Route component={Account} path='/Account' />
        <Route component={Buyer} path='/Buyer' />
        <Route component={GetStarted} path='/GetStarted' />
        <Route component={Informant} path='/Informant' />
        <Route component={InquiryThankYou} path='/ThankYou' />
     
    </Switch>
)