import { createAction } from './create_action'
import { postJson } from './fetch'
import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS
} from '../constants/constants'

const login = () => {
  console.log("start login")
  return function (dispatch) {
    dispatch(createAction(LOGIN_REQUEST))
    return postJson('/login')
      .then(res => res.json())
      .then(data =>
        dispatch(createAction(LOGIN_SUCCESS, { data }))
      )
      .catch(error => dispatch(createAction(LOGIN_ERROR, { error })))
  }
}

export default login
