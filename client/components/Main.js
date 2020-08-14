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
          <small className="text-muted">Q</small>
        </h1>
        <form>
          <div className="form-group">
            <label htmlFor="personName">Your Name</label>
            <input type="personName" className="form-control" id="personName" />
          </div>
          <div className="form-group">
            <label htmlFor="roomName">Room Name</label>
            <input type="roomName" className="form-control" id="roomName" />
          </div>
          <button className="btn btn-dark btn-lg btn-block">Create or Join Room</button>
        </form>
      </div>
    )
  }
}

export default Main