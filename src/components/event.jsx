import React from 'react'

const Event = ({ params }) => {
  let eventId
  if (params && params.eventId) {
    eventId = params.eventId
  }
  return (
    <div>Event: { eventId && eventId }</div>
  )
}

export default Event
