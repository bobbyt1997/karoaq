import React from 'react'

class Main extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="container">
        <form>
          <button className="btn btn-dark btn-lg btn-block">Create Room</button>
          <button className="btn btn-dark btn-lg btn-block">Join Room</button>
        </form>
      </div>
    )
  }
}

export default Main