import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from './pages/PrivateRoute'

import Login from './pages/Login'
import Home from './pages/Home'
import Add from './pages/Add'
import Edit from './pages/Edit'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/add" component={Add} />
        <PrivateRoute path="/edit/:id" component={Edit} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
