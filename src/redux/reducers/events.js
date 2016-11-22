import {
  GET_EVENTS,
  GET_EVENTS_ERROR,
  NEW_EVENT,
  NEW_EVENT_ERROR
 } from '../constants/constants'


const events = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_EVENTS:
      return {
        error: null,
        eventsList: payload.events
      }
    case GET_EVENTS_ERROR:
      return {
        error: true
      }

    case NEW_EVENT:
      return {
        _id: payload._id,
        error: null
      }
    case NEW_EVENT_ERROR:
      return {
        error: true
      }

    default:
      return state
  }
}

export default events
