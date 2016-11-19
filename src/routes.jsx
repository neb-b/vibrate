import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './app'

import Home from './components/home'
import Events from './components/events'
import Event from './components/events/event'
import EventHistory from './components/events/event_history'
import NewEvent from './components/events/new_event'
import Profile from './components/profile'
import Account from './components/account'

import './style/app.css'

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />

      <Route path="/events" component={Events} />
      <Route path="/events/:eventId" component={Event} />
      <Route path="/events/history" component={EventHistory} />

      <Route path="/profile" component={Profile} />
      <Route path="/profile/events" component={EventHistory} />

      <Route path="/account" component={Account} />
      <Route path="/account/events/new" component={NewEvent} />

      <Route path="*" component={Home} />
    </Route>
  </Router>
);

export default Routes
