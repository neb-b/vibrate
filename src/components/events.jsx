import React, { Component } from 'react'
import { Link } from 'react-router'

class Events extends Component {
  render() {
    const eventId = '123'
    return (
      <div className="events">
        <h2>Events</h2>
        <div><Link to={`/events/${eventId}`}>an event</Link></div>
      </div>
    )
  }
}

export default Events
