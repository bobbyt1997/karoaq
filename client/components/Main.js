import React from 'react'
import fire from '../../config/fire.js'

class Main extends React.Component {
  constructor() {
    super()
    this.logout = this.logout.bind(this)
  }

  logout() {
    fire.auth().signOut()
  }

  render() {
    return (
      <div className="container">
        <h1 className="display-4">
          Karao
          <small className="text-muted">Q</small>
        </h1>
        <button onClick={this.logout} className="btn btn-danger">Logout</button>
      </div>
    )
  }
}

export default Main