import React from 'react'
import { connect } from 'react-redux'
import { Dropdown, Menu } from 'semantic-ui-react'

class SemNav extends React.Component {

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
          const dlBtn = document.querySelector('.dl')
          if (dlBtn) {
            dlBtn.href=`./${this.props.currentUser.name}/${data[data.length-1]}.html`
            data.length ? document.querySelector('.dl').innerHTML= 'DOWNLOAD' : null
          }else{
            console.error('no download button on page')
          }
          // document.querySelector('.dl').href=`./Lawrence/ProjL11.html`
        })
    }

  }

  render() {

    return (
      <Menu stackable id="nav">
        <Menu.Item
          name='home'
          onClick={(e) => {this.props.history.push('/')}}
          content='VRify'
          // children={<span>IFY</span>}
          id ='logo'
        />

        <Menu.Menu position='right'>
          {this.props.currentUser ?
            <React.Fragment>
              <Dropdown item text='MY PROJECTS' className="navlink1">
                <Dropdown.Menu>
                  <Dropdown.Item>Project 1</Dropdown.Item>
                  <Dropdown.Item>Project 2</Dropdown.Item>
                  <Dropdown.Item>Project 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item
                name='SAVE PROJECT'
                className="navlink1"
                onClick={(e) => {this.props.save();this.setProj()}}
                download
              />
              <Menu.Item
                name='DOWNLOAD'
                className="dl navlink1"
                onClick={(e) => {
                  console.log(`downloading ${e.target.href}`)
                }}
                download
              />
              <Menu.Item
                name='LOGOUT'
                onClick={this.props.logout}
                className="navlink1"
              />
            </React.Fragment>
            :
            <Menu.Item
              name='SIGNUP'
              onClick={(e) => {this.props.history.push('/signup')}}
              className="navlink1"
            />
          }
        </Menu.Menu>
      </Menu>
    )
  }

}


const mapStateToProps = (state) => {
  return{
    currentUser: state.authReducer.currentUser
  }
}

export default connect(mapStateToProps)(SemNav)
