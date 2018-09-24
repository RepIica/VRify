import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import FlagsDropdown from './FlagsDropdown.js'

const SidebarItems = (props) => (
  <React.Fragment>
    <Menu.Item as='a' className="shape-btn" onClick={()=>{props.addPrimitive('sphere')}}>sphere</Menu.Item>
    <Menu.Item as='a' className="shape-btn" onClick={()=>{props.addPrimitive('box')}}>cube</Menu.Item>
    <Menu.Item as='a' className="shape-btn" onClick={()=>{props.addPrimitive('torus-knot')}}>torus knot</Menu.Item>
    <Menu.Item as='a' className="shape-btn" onClick={()=>{props.addPrimitive('plane')}}>plane</Menu.Item>
    <Menu.Item as='a' className="shape-btn" onClick={()=>{props.addPrimitive('light')}}>kill lights</Menu.Item>
    <Menu.Item as='a' className="shape-btn" onClick={props.addText}>Add Text</Menu.Item>
    <Menu.Item as='a' className="shape-btn" onClick={props.addText2}>Add Text v2</Menu.Item>
    <Menu.Item as='a' className="shape-btn" onClick={props.handleColorClick} handleChange={props.colorHandler}>Select Color</Menu.Item>

    <FlagsDropdown></FlagsDropdown>
    <Menu.Item as='a' className="shape-btn warning" onClick={props.removeAllUserAdded}>clear</Menu.Item>

  </React.Fragment>
)

export default SidebarItems
