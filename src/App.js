import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './components/Projects';
import Articles from './components/Articles';
import About from './components/About';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar/>
      </div>
    );
  }
}
export default App;


// <BrowserRouter>
// <div className="App">
//
// <Route exact path="/" component={Projects} />
// <Route path="/articles" component={Articles} />
// <Route path="/about" component={About} />
//
// <div className="navigation">
// <div className="navigation-sub">
//
// <Link to="/" className="item">Projects</Link>
// <Link to="/articles" className="item">Articles</Link>
// <Link to="/about" className="item">About</Link>
//
// </div>
// </div>
// </div>
// </BrowserRouter>
