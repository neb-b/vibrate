import React from 'react'

const NewEvent = (props) => {
  console.log("props", props)
  return (
    <div>
      event name: <input />
      <button onClick={() => props.newEvent({ name: "sean" })}>
        New Event
      </button>
    </div>
  )
}

export default NewEvent
