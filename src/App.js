import React, { Component } from 'react';
import { Container } from "reactstrap";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './components/Projects';
import About from './components/About';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
        <AppNavbar/>
        <About/>
        <Projects/>
        </Container>
        </div>
    );
  }
}
export default App;
