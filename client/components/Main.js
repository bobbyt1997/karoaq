import React from 'react'

class Main extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="container">
        <h1 className="display-1">
          Karao
          <small class="text-muted">Q</small>
        </h1>
        <form>
          <div class="form-group">
            <label for="personName">Your Name</label>
            <input type="personName" class="form-control" id="personName" />
          </div>
          <div class="form-group">
            <label for="roomName">Room Name</label>
            <input type="roomName" class="form-control" id="roomName" />
          </div>
          <button className="btn btn-dark btn-lg btn-block">Create or Join Room</button>
        </form>
      </div>
    )
  }
}

export default Main