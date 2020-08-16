import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Login from './components/Login.js'
import Room from './components/Room.js'
import Entry from './components/Entry.js'
import Main from './components/Main.js'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Entry} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/:roomId" component={Room} />
      </Switch>
    </div>
  )
}

export default withRouter(App)