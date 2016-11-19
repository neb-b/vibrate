import React, { Component } from 'react'
import EventHistory from '../events/event_history'

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <h2>Profile</h2>
        <EventHistory />
      </div>
    )
  }
}

export default Profile
