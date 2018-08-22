import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
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
      <div id="ui-container">
        <Grid verticalAlign='middle' centered>
          <Grid.Row>
            <Grid.Column id="login-align"></Grid.Column>
            <Grid.Column mobile={14} tablet={3} computer={3}>
              <Header as="h1" textAlign="center" inverted color="grey" id='login-h1'>Login</Header>
              <form onSubmit={(e) => {
                  e.preventDefault()
                  // when submitLogin is refactored to be pure, put other state updates in here
                  this.props.submitLogin(this.state.email, this.state.password)
                }}>
                <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.onInputChange}/><br/><br/>
                <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onInputChange}/><br/><br/>
                <input type="submit" value="Log In"/>
              </form>
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default connect(null, { submitLogin })(Login)
