import React, { Component } from 'react'
import { Link } from 'react-router'

class Account extends Component {
  render() {
    return (
      <div className="account">
        <h2>Account Dashboard</h2>
        <Link to="account/events/new">New Event</Link>
        <div>Upcoming event</div>
        <div>Upcoming event</div>
        <div>Upcoming event</div>
        <div>Upcoming event</div>
      </div>
    )
  }
}

export default Account
