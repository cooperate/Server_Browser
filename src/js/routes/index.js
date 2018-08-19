import React from 'react'
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'
import Main from '../components/Main'
import LoginForm from '../components/LoginForm'
import NoMatch from '../components/NoMatch'
import NavBar from '../components/NavBar'

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={LoginForm} />
    </Switch>
  </div>
)

export default routes