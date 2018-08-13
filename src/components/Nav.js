import React from 'react'
import { connect } from 'react-redux'

const Nav = (props) => {
  console.log(props);
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
          <a className="navbar-brand" id="logo" href="#">VR<span>IFY</span></a>
        </div>


        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            {/* <li className=""><a href="#">Link <span className="sr-only">(current)</span></a></li>
            <li><a href="#">Link</a></li> */}
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {/* <li><a onClick={props.UserInfoModal?}id="navlink1">{props.name.toUpperCase()}</a></li> */}
            {props.currentUser ?
              <React.Fragment>
                <li><a id="navlink1">{props.currentUser.name.toUpperCase()}</a></li>
                <li><a onClick={props.logout} id="navlink1">LOGOUT</a></li>
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

const mapStateToProps = (state) => {
  return{
    currentUser: state.authReducer.currentUser
  }
}

export default connect(mapStateToProps)(Nav)
