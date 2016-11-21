import { createStore } from 'redux'
// import thunk from 'redux-thunk'
// import createLogger from 'redux-logger'
import reducer from '../reducers'

const configureStore = (preloadedState) => {
  const store = createStore(
    reducer,
    preloadedState
  )

  return store
}

export default configureStore
