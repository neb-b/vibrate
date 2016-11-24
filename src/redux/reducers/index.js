import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import events from './events'

export default combineReducers({
  form: reduxFormReducer,
  events
})
