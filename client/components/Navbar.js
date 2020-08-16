import React from 'react'
import { fire } from '../../config/fire.js'

export default class Navbar extends React.Component {
  constructor() {
    super()
    this.logout = this.logout.bind(this)
  }

  logout() {
    fire.auth().signOut()
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <a className="navbar-brand">
          Karao
            <small className="text-muted">Q</small>
        </a>
        <button onClick={this.logout} className="btn btn-danger my-2 my-sm-0">Logout</button>
      </nav>
    )
  }
}
