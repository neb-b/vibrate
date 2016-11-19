import React from 'react'
import ReactDOM from 'react-dom'
import NewEvent from '../../../src/components/events/new_event'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NewEvent />, div)
})
