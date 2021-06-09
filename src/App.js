import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

import Home from './components/pages/Home';
// import Search from './components/pages/Search';
// import Catalog from './components/pages/Catalog';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/search" component={Search} /> 
            <Route exact path="/foguetes" component={Catalog} /> */}
        <Footer />
      </Router>
    );
  }
}

export default App;