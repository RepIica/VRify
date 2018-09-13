import React from 'react';
// import { randInt,randInv,textValidator,randBrightColor,randGrayColor } from '../calculations.js'
import { SliderPicker } from 'react-color';

class ColorPicker extends React.Component {


  render() {
    return <SliderPicker
      color={ this.props.color }
      onChangeComplete={ this.props.handleChange } />;
  }
}

export default ColorPicker
