import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import Header from './components/header'
import Footer from './components/footer'
import './style/app.css';

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
