import React, { Component } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import './style/app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <h2>Hello World</h2>
        <Footer />
      </div>
    );
  }
}

export default App;
