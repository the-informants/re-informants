import React from 'react';
import {Switch, Route} from 'react-router-dom';


import Account from './components/AccountProfile/AccountProfile';
import PublicBuyer from './components/PublicBuyer/Buyer';
import PublicGetStarted from './components/PublicGetStarted/GetStarted';
import PublicInformant from './components/PublicInformant/Informant';
import InquiryThankYou from './components/ThankYou/InquiryThankYou';

export default (
    <Switch>
        <Route exact path = '/' component={PublicGetStarted}/>
        <Route component={Account} path='/Account' />
        <Route component={PublicBuyer} path='/Buyer' />
        <Route component={PublicInformant} path='/Informant' />
        <Route component={InquiryThankYou} path='/ThankYou' />
     
    </Switch>
)