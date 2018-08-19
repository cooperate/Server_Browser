import React from 'react'
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'
import Room from '../components/Room'
import LoginForm from '../components/LoginForm'
import RoomForm from '../components/RoomForm'
import RoomList from '../components/RoomList'
import NoMatch from '../components/NoMatch'
import NavBar from '../components/NavBar'

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/newroom" component={RoomForm} />
      <Route exact path="/rooms" component={RoomList} />
      <Route component={NoMatch} />
    </Switch>
    <Route path="/rooms/:roomName" component={Room}/>
  </div>
)

export default routes