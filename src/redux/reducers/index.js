import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import events from './events'
import login from './login'

export default combineReducers({
  form: reduxFormReducer,
  events,
  login
})
