import React from 'react'
import Event from './events/event'

const Events = ({ error, events: { eventsList } }) => {
  return (
    <div className="events">
      <h2>Events</h2>
      { error && <span>Error</span>}
      {
        eventsList &&
        eventsList.map((event) => <Event key={event._id} {...event} />)
      }
    </div>
  )
}

export default Events
