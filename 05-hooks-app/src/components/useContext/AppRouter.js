import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import { HomeScreen } from './HomeScreen'
import { AboutScreen } from './AboutScreen'
import { LoginScreen } from './LoginScreen'
import { Navbar } from './Navbar'

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch className="container">
          <Route exact path="/" component={ HomeScreen } />
          <Route exact path="/about" component={ AboutScreen } />
          <Route exact path="/login" component={ LoginScreen } />  


          {/* <Route component={ HomeScreen } /> */}
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}
