import React from 'react'
import Navbar from './Navbar.js'

class Main extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Navbar />
        <form className="join-createRoom">
          <div className="formGroup">
            <label htmlFor="roomName">Room Name</label>
            <input type="text" name="roomName" className="form-control" id="roomName" placeholder="Enter Room Name" />
          </div>
          <button type="submit" className="btn btn-primary">Create Room</button>
          <button type="submit" className="btn btn-primary">Join Room</button>
        </form>
      </div>
    )
  }
}

export default Main