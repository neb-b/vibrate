import { createAction } from './create_action'
import { postJson } from './fetch'
import {
  NEW_EVENT_ERROR,
  NEW_EVENT_REQUEST,
  NEW_EVENT_SUCCESS
} from '../constants/constants'

export function newEvent({ name }) {
  const payload = { name }

  return function (dispatch) {
    dispatch(createAction(NEW_EVENT_REQUEST))
    return postJson('/events', payload)
      .then(res => res.json())
      .then(data =>
        dispatch(createAction(NEW_EVENT_SUCCESS, { data }))
      )
      .catch(error => dispatch(createAction(NEW_EVENT_ERROR, { error })))
  }
}

export default newEvent
