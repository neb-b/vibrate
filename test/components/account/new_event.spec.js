import React from 'react'
import ReactDOM from 'react-dom'
import NewEvent from '../../../src/components/account/new_event'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NewEvent />, div)
})
