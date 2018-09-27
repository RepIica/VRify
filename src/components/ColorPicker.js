import React from 'react';
// import { randInt,randInv,textValidator,randBrightColor,randGrayColor } from '../calculations.js'
import { SliderPicker } from 'react-color';

class ColorPicker extends React.Component {

  closeBtnHandler = () => {
    document.querySelector('.modal').style.display = 'none'
  }

  render() {
    return (
      <div className="modal">
        <div className="modalContent">
          <button id="modal-close" onClick={this.closeBtnHandler}>X</button>
          <SliderPicker
            color={ this.props.color }
            onChangeComplete={ this.props.handleChange } />
        </div>
        <div className="modalBg" onClick={this.closeBtnHandler}></div>
      </div>

    )
  }
}

export default ColorPicker
