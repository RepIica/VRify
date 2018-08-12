import React from 'react'

class Signup extends React.Component {
  state = {
    username: "",
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
        <br/><br/><br/>
        <h1>SIGN UP COMING SOON</h1><br/><br/><br/><br/>
        <form onSubmit={this.props.clickHandler}>
          <input type="text" name="username" placeholder="username"  />
          <input type="password" name="password" placeholder="password" />
          <input type="submit" />
        </form>
      </React.Fragment>
    )
  }
}

export default Signup
