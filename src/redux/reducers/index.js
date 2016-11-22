import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as reduxFormReducer } from 'redux-form'

import events from './events'


export default combineReducers({
  form: reduxFormReducer,
  routing: routerReducer,
  events
})
