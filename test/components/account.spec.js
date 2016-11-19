import React from 'react'
import ReactDOM from 'react-dom'
import Account from '../../src/components/account'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Account />, div)
})
