import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Dashboard from './views/Dashboard'


export default props => (
    <HashRouter>
        <Switch>
          <Route exact path='/' component={ Dashboard } />
        </Switch>
    </HashRouter>
  )