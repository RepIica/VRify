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
        <div className="row">
          <div className="col-xs-12" align="center">
            <h1>Login</h1>
          </div>
        </div>
          <div className="row">
            <div className="col-sm-4 col-sm-offset-4 col-xs-12">
              <form onSubmit={(e) => {
                e.preventDefault()
                this.props.submitLogin(this.state.email, this.state.password)
              }}>
              <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.onInputChange}/><br/><br/>
              <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onInputChange}/><br/><br/>
              <input type="submit" value="Log In"/>
            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default connect(null, { submitLogin })(Login)
