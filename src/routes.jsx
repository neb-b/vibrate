import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './app'

import Home from './components/home'
import Login from './connected/login.connected'
import Events from './connected/events.connected'
import Event from './components/event'
import EventHistory from './components/profile/event_history'
import NewEvent from './connected/new_event.connected'
import Profile from './components/profile'
import Account from './components/account'

import './style/app.css'

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />

      <Route path="/login" component={Login} />

      <Route path="/events" component={Events} />
      <Route path="/events/:eventId" component={Event} />

      <Route path="/profile" component={Profile} />
      <Route path="/profile/events" component={EventHistory} />

      <Route path="/account" component={Account} />
      <Route path="/account/events/new" component={NewEvent} />

      <Route path="*" component={Home} />
    </Route>
  </Router>
);

export default Routes
