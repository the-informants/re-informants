import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Nav from './components/Shared/Nav';
import Footer from './components/Shared/Footer';

class App extends Component {
  render() {
    return (
     <div>
      <div className="App">
        <Nav/>
        <body>{routes}</body>
        <Footer/>
      </div>
    </div>
    );
  }
}

export default App;
