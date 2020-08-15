import React from 'react'
import Navbar from './Navbar.js'
import { db } from '../../config/fire.js'
import history from '../history.js'
import { Redirect } from 'react-router-dom'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      roomName: '',
      roomExists: false
    }

    this.join = this.join.bind(this)
    this.create = this.create.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  join(e) {
    e.preventDefault()
  }

  create(e) {
    e.preventDefault()

    // db.ref('rooms/' + this.state.roomName).set({
    //   users: [this.props.user.email]
    // });

    history.push('/test')
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
          <button type="submit" onClick={this.create} className="btn btn-primary">Create Room</button>
          <button type="submit" onClick={this.join} className="btn btn-primary">Join Room</button>
        </form>
      </div>
    )
  }
}

export default Main