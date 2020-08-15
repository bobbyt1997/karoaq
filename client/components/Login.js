import React, { Component } from 'react'
import fire from '../../config/fire'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.login = this.login.bind(this)
  }

  login(e) {
    e.preventDefault()
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => { })
      .catch(err => {
        console.log(err)
      })
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="startForm">
        <h1 className="display-1">
          Karao
          <small className="text-muted">Q</small>
        </h1>
        <div className="col-md-6">
          <form>
            <div className="formGroup">
              <label htmlFor="email">Email Address</label>
              <input value={this.state.email} onChange={this.handleChange} type="email" name="email"
                className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else</small>
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input value={this.state.password} onChange={this.handleChange} type="password" name="password"
                className="form-control" id="password" placeholder="Password" />
            </div>
            <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
            <button onClick={this.signup} className="btn btn-success">Signup</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login