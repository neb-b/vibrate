import React, { Component } from 'react'
import Header from './global/header'
import Footer from './global/footer'
import '../style/app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}

export default App
