import React, { Component } from 'react'

class Event extends Component {
  render() {
    console.log("event", this.props)
    return (
      <div className="event">
        <h2>Event</h2>
      </div>
    )
  }
}

export default Event
