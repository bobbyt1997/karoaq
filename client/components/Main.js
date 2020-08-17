import React from 'react'
import Navbar from './Navbar.js'
import history from '../history.js'
import { connect } from 'react-redux'
import { joinCreate } from '../store/room'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      roomName: '',
    }

    this.joinCreate = this.joinCreate.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  joinCreate(e) {
    e.preventDefault()

    this.props.joinCreate(this.state.roomName, this.props.user.email)
    // db.ref('rooms/' + this.state.roomName).set({
    //   users: [this.props.user.email]
    // });

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

const mapDispatch = (dispatch) => {
  return {
    getUser: () => dispatch(getUser()),
    joinCreate: (roomName) => dispatch(joinCreate(roomName))
  }
}

export default connect(null, mapDispatch)(Main)