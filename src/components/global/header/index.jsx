import React, { Component } from 'react'
import { Link } from 'react-router'
import '../../../style/header.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <h1 className="title">Home</h1>
        </Link>
        <Link to="/events" className="nav">Events</Link>
        <Link to="/profile" className="nav">Profile</Link>
        <Link to="/account" className="nav">Account</Link>
      </div>
    )
  }
}

export default Header
