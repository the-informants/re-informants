import React from 'react';
import {Switch, Route} from 'react-router-dom';


import Account from './components/AccountProfile/AccountProfile';
import PublicBuyer from './components/PublicBuyer/Buyer';
import PublicGetStarted from './components/PublicGetStarted/GetStarted';
import PublicInformant from './components/PublicInformant/Informant';
import PrivateBuyer from './components/PrivateBuyer/Buyer';
import PrivateInformant from './components/PrivateInformant/Informant';
import InquiryThankYou from './components/ThankYou/InquiryThankYou';

export default (
    <Switch>
        <Route exact path = '/' component={PublicGetStarted}/>
        <Route component={Account} path='/Account' />
        <Route component={PublicBuyer} path='/PublicBuyer' />
        <Route component={PublicInformant} path='/PublicInformant' />
        <Route component={PrivateBuyer} path='/PrivateBuyer' />
        <Route component={PrivateInformant} path='/PrivateInformant' />
        <Route component={InquiryThankYou} path='/ThankYou' />
     
    </Switch>
)