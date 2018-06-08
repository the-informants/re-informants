import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';

import {BrowserRouter, Route} from 'react-router-dom';
import Store from './store';
import {Provider} from 'react-redux';

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<BrowserRouter>
    {/* <Provider store = {Store}> */}
        <App/>
    {/* </Provider> */}
</BrowserRouter>
, document.getElementById('root'));
// registerServiceWorker();
