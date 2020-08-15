import React, { Component } from 'react'
import Main from './Main.js'
import Login from './Login.js'
import { fire } from '../../config/fire'

class Entry extends Component {
  constructor() {
    super()
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.authListener()
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user })
        localStorage.setItem('user', user.uid)
      } else {
        this.setState({ user: null })
        localStorage.removeItem('user')
      }
    })
  }
  render() {
    return (
      <div>
        {this.state.user ? <Main user={this.state.user} /> : <Login />}
      </div>
    )
  }
}

export default Entry