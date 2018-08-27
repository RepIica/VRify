import React from 'react'
import { connect } from 'react-redux'
import { Dropdown, Menu, Button } from 'semantic-ui-react'
import { setCurrentProject } from '../actions/projectActions.js'

class SemNav extends React.Component {

  componentDidUpdate(prevProps, prevState) {
    console.log('<SemNav> componentDidUpdated')
    console.log(this.props)
    if (this.props.currentUser && this.props.currentProj) {
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

  loadProj = (projId) => {
    const selectedProj = this.props.projects.find(proj => proj.id === projId)
    this.props.setCurrentProject(selectedProj)

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

                  {this.props.projects ?
                    this.props.projects.map((project) => <Dropdown.Item key={project.id} onClick={()=>{this.loadProj(project.id)}} >{project.name}</Dropdown.Item>)
                    :
                    <Dropdown.Item>No Projects Yet!</Dropdown.Item>
                  }

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

export default connect(mapStateToProps, { setCurrentProject })(SemNav)
