import React from 'react'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={} />
        <Route exact path="/:roomId" component={} />
      </Switch>
    </div>
  )
}

export default App