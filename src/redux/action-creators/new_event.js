import {
  NEW_EVENT,
  NEW_EVENT_ERROR
} from '../constants/constants'

async function newEvent ({ name }) {
  const payload = { name }
  console.log("new event", payload)
  try {
    const res = await fetch('http://localhost:3000/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    const data = await res.json()
    console.log("success", data)

    return {
      type: NEW_EVENT,
      payload: { _id: data._id }
    }
  } catch (error) {
    return {
      type: NEW_EVENT_ERROR,
      payload: { error }
    }
  }
}

export default newEvent
