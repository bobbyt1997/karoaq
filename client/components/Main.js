import React from 'react'
import Navbar from './Navbar.js'
import { db } from '../../config/fire.js'
import history from '../history.js'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from '../store/auth'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      roomName: '',
      roomExists: false
    }

    this.joinCreate = this.joinCreate.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.getUser()
  }

  joinCreate(e) {
    e.preventDefault()

    db.ref('rooms/' + this.state.roomName).set({
      users: [this.props.user.email]
    });

    history.push(`/${this.state.roomName}`)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <Navbar />
        <form className="join-createRoom">
          <div className="formGroup">
            <label htmlFor="roomName">Room Name</label>
            <input type="text" onChange={this.handleChange} name="roomName" className="form-control" id="roomName" placeholder="Enter Room Name" />
          </div>
          <button type="submit" onClick={this.joinCreate} className="btn btn-primary">Create/Join Room</button>
        </form>
      </div>
    )
  }
}

const mapState = (reduxStore) => {
  return {
    credentials: reduxStore.credentials
  }
}

const mapDispatch = (dispatch) => {
  return {
    getUser: () => dispatch(getUser())
  }
}

export default connect(mapState, mapDispatch)(Main)