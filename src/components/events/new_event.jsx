import React, { Component } from 'react'
import { Link } from 'react-router'

class NewEvent extends Component {
  render() {
    return (
      <div className="event">
        <h2>NewEvent</h2>
        <Link to="/account">Cancel</Link>
      </div>
    )
  }
}

export default NewEvent
