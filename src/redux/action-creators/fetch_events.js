import {
  GET_EVENTS,
  GET_EVENTS_ERROR
} from '../constants/constants'
import { getJson } from './fetch'


async function fetchEvents (queryParams) {
  console.log("queryParams", queryParams)

  try {
    const res = await getJson('/events')
    const events = await res.json()
    return {
      type: GET_EVENTS,
      payload: { events: events }
    }
  } catch (error) {
    return {
      type: GET_EVENTS_ERROR,
      payload: { error }
    }
  }
}

export default fetchEvents
