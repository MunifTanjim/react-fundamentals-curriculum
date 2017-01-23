import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Main from '../containers/Main'
import Home from '../containers/Home'
import ForecastContainer from '../containers/ForecastContainer'

export default (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='forecast/:place' component={ForecastContainer} />
    </Route>
  </Router>
)
