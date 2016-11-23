import {
  NEW_EVENT,
  NEW_EVENT_ERROR
} from '../constants/constants'
import { postJson } from './fetch'

async function newEvent ({ name }) {
  const payload = { name: "event from frontend" }
  try {
    const res = await postJson('/events', payload)
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
