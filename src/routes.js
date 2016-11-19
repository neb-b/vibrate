import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './app'
import Home from './components/home'
import './style/app.css';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="*" component={Home} />
    </Route>
  </Router>
);

export default Routes
