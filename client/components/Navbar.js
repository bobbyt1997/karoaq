import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../store/auth'

class Navbar extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <a className="navbar-brand">
          Karao
            <small className="text-muted">Q</small>
        </a>
        <button onClick={this.props.logout} className="btn btn-danger my-2 my-sm-0">Logout</button>
      </nav>
    )
  }
}

const mapDispatch = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatch)(Navbar)