import '../App.css';
import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import DieuHuongURL from './DieuHuongURL';
import {
  BrowserRouter as Router
} from "react-router-dom";
// import {phoneData} from './FirebaseConnect';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <DieuHuongURL/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;