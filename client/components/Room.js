import React from 'react'

class Room extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <div className="split left">
          <div className="splitHorizontal">
            <h1>PARTICIPANTS SCREEN</h1>
          </div>
          <div className="splitHorizontal">
            <h1>CHAT SCREEN</h1>
          </div>
        </div>
        <div className="split right">
          <div className="splitHorizontal">
            <h1>VIDEO SCREEN</h1>
          </div>
          <div className="splitHorizontal">
            <h1>QUEUE SCREEN</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Room