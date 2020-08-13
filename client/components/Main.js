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
          <button className="btn btn-dark btn-lg btn-block">Create Room</button>
          <button className="btn btn-dark btn-lg btn-block">Join Room</button>
        </form>
      </div>
    )
  }
}

export default Main