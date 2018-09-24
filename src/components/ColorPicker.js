import React from 'react';
// import { randInt,randInv,textValidator,randBrightColor,randGrayColor } from '../calculations.js'
import { SliderPicker } from 'react-color';

class ColorPicker extends React.Component {


  render() {
    return (
      <div className="modal">
        <div className="modalContent">
          <SliderPicker
            color={ this.props.color }
            onChangeComplete={ this.props.handleChange } />;
        </div>
        <div className="modalBg"></div>
      </div>

    )
  }
}

export default ColorPicker
