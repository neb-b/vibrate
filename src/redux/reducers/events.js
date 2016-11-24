import {
  GET_EVENTS_ERROR,
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
  NEW_EVENT_ERROR,
  NEW_EVENT_REQUEST,
  NEW_EVENT_SUCCESS
 } from '../constants/constants'

export default function (state = {}, { type, payload }) {
  switch (type) {
    case GET_EVENTS_REQUEST:
      return { error: null, loading: true }
    case GET_EVENTS_SUCCESS:
      return { error: null, eventsList: payload.data, loading: false }
    case GET_EVENTS_ERROR:
      return { error: true, loading: false }

    case NEW_EVENT_REQUEST:
      return { error: null, loading: true }
    case NEW_EVENT_SUCCESS:
      return { _id: payload._id, error: null }
    case NEW_EVENT_ERROR:
      return { error: true, loading: null }

    default:
      return state
  }
}
