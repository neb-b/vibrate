import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import events from './events'


export default combineReducers({
  events,
  routing: routerReducer
})
