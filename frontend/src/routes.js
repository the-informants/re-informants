import React from 'react';
import {Switch, Route} from 'react-router-dom';


import Account from './components/AccountProfile/AccountProfile';
import PublicBuyer from './components/PublicBuyer/PublicBuyer';
import PublicSeller from './components/PublicSeller/PublicSeller';
import PublicGetStarted from './components/PublicGetStarted/GetStarted';
import AboutUs from './components/AboutUs/AboutUs';
import PublicReference from './components/PublicReference/Reference';
import PrivateBuyer from './components/PrivateBuyer/Buyer';
import PrivateInformant from './components/PrivateInformant/Informant';
import kellerchch from './components/PrivateInformant/kellerchch';
import Cart from './components/Cart/Cart';
import InquiryThankYou from './components/ThankYou/InquiryThankYou';
import Modal from './components/PublicGetStarted/Modal';
import StayInformed from './components/StayInformed/StayInformed';

import Opening from './components/PublicGetStarted/Opening';

import UserReviews from './components/UserReviews/UserReviews';


export default (
    <Switch>
        {/* <Route exact path = '/' component={Opening}/> */}
        <Route exact path = '/' component={StayInformed}/>
        {/* <Route exact path = '/' component={PublicGetStarted}/> */}
        {/* <Route component={Opening} path='/Opening' /> */}

        <Route component={PublicGetStarted} path='/PublicGetStarted' />
        <Route component={kellerchch} path='/user/kellerchch' />
        <Route component={Account} path='/Account' />
        <Route component={PublicBuyer} path='/PublicBuyer' />
        <Route component={PublicSeller} path='/PublicSeller' />
        <Route component={AboutUs} path='/AboutUs' />
        <Route component={PublicReference} path='/PublicReference' />
        <Route component={PrivateBuyer} path='/PrivateBuyer' />
        <Route component={PrivateInformant} path='/PrivateInformant' />
        <Route component={Cart} path='/Cart' />
        <Route component={InquiryThankYou} path='/ThankYou' />
        <Route component={Modal} path='/Modal' />
        <Route component={UserReviews} path = '/UserReviews/:id'/>
     
    </Switch>
)