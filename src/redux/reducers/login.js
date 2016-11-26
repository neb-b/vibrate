import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS
 } from '../constants/constants'

export default function (state = {}, { type, payload }) {
  switch (type) {
    case LOGIN_REQUEST:
      return { error: null, loading: true }
    case LOGIN_SUCCESS:
      return { error: null, eventsList: payload.data, loading: false }
    case LOGIN_ERROR:
      return { error: true, loading: false }

    default:
      return state
  }
}
