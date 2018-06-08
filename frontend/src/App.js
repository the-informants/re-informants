import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes';
import Nav from './components/Shared/Nav'

class App extends Component {
  render() {
    return (
     <div>
      <div>
        <Nav />
      </div>
      <div className="App">
        {routes}
      </div>
    </div>
    );
  }
}

export default App;
