import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from './components/Main.js'
import Room from './components/Room.js'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/:roomId" component={Room} />
      </Switch>
    </div>
  )
}

export default App