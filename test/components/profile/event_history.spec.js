import React from 'react'
import ReactDOM from 'react-dom'
import EventHistory from '../../../src/components/profile/event_history'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<EventHistory />, div)
})
