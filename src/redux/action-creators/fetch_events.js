import { createAction } from './create-action'
import { getJson } from './fetch'
import {
  GET_EVENTS_ERROR,
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS
} from '../constants/constants'

export function fetchEvents(queryParams) {
  return function (dispatch) {
    dispatch(createAction(GET_EVENTS_REQUEST))
    return getJson('/events')
      .then(res => res.json())
      .then(data =>
        dispatch(createAction(GET_EVENTS_SUCCESS, { data }))
      )
      .catch(error => dispatch(createAction(GET_EVENTS_ERROR, { error })))
  }
}

export default fetchEvents
