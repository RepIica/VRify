import React, { Component } from "react";
// import { connect } from 'react-redux'
// import { setColor } from './../actions/projectActions.js'
import { Menu } from "semantic-ui-react";
// import ColorPicker from './ColorPicker.js'
import FlagsDropdown from "./FlagsDropdown.js";

class SidebarItems extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu.Item
          as="a"
          className="shape-btn"
          onClick={() => {
            this.props.addPrimitive("sphere");
          }}
        >
          sphere
        </Menu.Item>
        <Menu.Item
          as="a"
          className="shape-btn"
          onClick={() => {
            this.props.addPrimitive("box");
          }}
        >
          cube
        </Menu.Item>
        <Menu.Item
          as="a"
          className="shape-btn"
          onClick={() => {
            this.props.addPrimitive("torus-knot");
          }}
        >
          torus knot
        </Menu.Item>
        <Menu.Item
          as="a"
          className="shape-btn"
          onClick={() => {
            this.props.addPrimitive("plane");
          }}
        >
          plane
        </Menu.Item>
        <Menu.Item
          as="a"
          className="shape-btn"
          onClick={() => {
            this.props.addPrimitive("light");
          }}
        >
          kill lights
        </Menu.Item>
        <Menu.Item as="a" className="shape-btn" onClick={this.props.addText}>
          Add Text
        </Menu.Item>
        <Menu.Item as="a" className="shape-btn" onClick={this.props.addText2}>
          Add Text v2
        </Menu.Item>
        <Menu.Item
          as="a"
          className="shape-btn"
          onClick={this.props.handleColorPicker}
        >
          Select Color
        </Menu.Item>

        <FlagsDropdown></FlagsDropdown>
        <Menu.Item
          as="a"
          className="shape-btn warning"
          onClick={this.props.removeAllUserAdded}
        >
          clear
        </Menu.Item>
      </React.Fragment>
    );
  }
}

// const mapStateToProps = (state) => {
//   return{
//     currentColor: state.currentColor,
//     colors: state.colors
//
//   }
// }

// export default connect(mapStateToProps, { setColor })(SidebarItems)
export default SidebarItems;
