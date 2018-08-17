import React from 'react'
import { connect } from 'react-redux'

class Nav extends React.Component {

  projName = (id) => {
    return fetch(`http://localhost:3001/api/v1/user/projects`, {
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        userId: id
      })
    }).then(resp => resp.json())
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentUser) {
      this.projName(this.props.currentUser.id)
        .then(data => {
          console.log(data)
          console.log(data.length)
          document.querySelector('.dl').href=`./${this.props.currentUser.name}/${data[data.length-1]}.html`
          data.length ? document.querySelector('.dl').innerHTML= 'DOWNLOAD' : null
          // document.querySelector('.dl').href=`./Lawrence/ProjL11.html`
        })
    }

  }

  render(){
    return (
      <nav className="navbar navbar-default" id="nav">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <a className="navbar-brand" id="logo" href="/">VR<span>IFY</span></a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              {/* {this.props.currentUser ?<li><a id="navlink1">LOGGED IN AS: {this.props.currentUser.name.toUpperCase()}</a></li>:null} */}
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {this.props.currentUser ?
                <React.Fragment>
                  <li><a onClick={this.props.logout} id="navlink1">MY PROJECTS</a></li>
                  <li><a onClick={()=>{this.props.save();this.setProj()}} id="navlink1">SAVE PROJECT</a></li>
                  <li><a className="dl" id="navlink1" download></a></li>
                  <li><a onClick={this.props.logout} id="navlink1">LOGOUT</a></li>
                </React.Fragment>
                :
                null
              }
            </ul>

          </div>
        </div>
      </nav>
    )
  }

}


const mapStateToProps = (state) => {
  return{
    currentUser: state.authReducer.currentUser
  }
}

export default connect(mapStateToProps)(Nav)
