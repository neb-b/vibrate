import React from 'react'
import { Link } from 'react-router'

const Event = ({ _id, name }) => {
  return (
    <Link to={`events/${_id}`}>
      <div key={_id} className="event">
          <h2>Name: { name }</h2>
          <p>Id: { _id }</p>
      </div>
    </Link>
  )
}

export default Event
