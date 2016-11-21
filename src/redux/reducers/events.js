import { GET_EVENTS } from '../constants/constants'


const events = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_EVENTS:
      return {
        error: null,
        eventsList: payload.events
      }
    default:
      return state
  }
}

export default events
