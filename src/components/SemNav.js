import React from 'react'
import { connect } from 'react-redux'
import { Dropdown, Menu, Button } from 'semantic-ui-react'

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
    console.error('SemNav COMPONENT DID UPDATED!')
    console.log(this.props)
    if (this.props.currentUser && this.props.currentProj) {
      console.log('QUERYSELECTING')
          const dlBtn = document.querySelector('.dl')
          if (dlBtn) {
            dlBtn.href=`./${this.props.currentUser.name}/${this.props.currentProj.name}.html`

          }else{
            console.error('no download button on page')
          }
    }

  }

  mobileToggle = () => {
    const el = document.querySelector('.right.menu')
    if (el.style.position==='static'){
      el.style.position = 'absolute'
      el.style.visibility = 'hidden'
    }else{
      el.style.position = 'static'
      el.style.visibility = 'visible'
    }
  }

  render() {
    console.warn(this.props.projects)
    return (
      <Menu stackable id="nav">
        <Menu.Item
          name='home'
          onClick={(e) => {this.props.history.push('/')}}
          content='VRify'
          // children={<span>IFY</span>}
          id ='logo'
        />

        <Button onClick={this.mobileToggle} id="mobile-btn">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </Button>

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
                onClick={this.props.save}
                // onClick={(e) => {this.props.save();this.props.setProj()}}
                download
              />
              {this.props.currentProj &&
                <Menu.Item
                  name='DOWNLOAD'
                  className="dl navlink1"
                  onClick={(e) => {
                    console.log(`downloading ${e.target.href}`)
                  }}
                  href={this.props.projects[this.props.projects.length-1].filepath}
                  download
                />
              }
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
    currentUser: state.authReducer.currentUser,
    projects: state.projectsReducer.projects,
    currentProj: state.projectsReducer.currentProject
  }
}

export default connect(mapStateToProps)(SemNav)
