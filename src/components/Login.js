import React from 'react'
import { connect } from 'react-redux'
import { submitLogin } from '../actions/authActions.js'

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
            <h1>Login</h1>
              <form onSubmit={(e) => {
                e.preventDefault()
                this.props.submitLogin(this.state.email, this.state.password)
              }}>
              <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.onInputChange}/><br/><br/>
              <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onInputChange}/><br/><br/>
              <input type="submit" value="Log In"/>
            </form>
      </React.Fragment>
    )
  }
}

export default connect(null, { submitLogin })(Login)
