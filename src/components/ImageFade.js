import React, { Component } from 'react';
import { Image, Reveal } from 'semantic-ui-react'
import church from '../img/church.jpg'
import ColorPicker from './ColorPicker.js'
import { Grid } from 'semantic-ui-react'

class ImageFade extends Component {

  state = {
    color: '#fff',
  }

  handleChangeComplete = (color) => {
    this.setState({ color: color.hex },console.log('state is now', this.state.color));
  };

  componentDidUpdate() {
    console.log('Component Mounted')
    document.querySelector('#state-color').style.color = this.state.color
  }

  colorHandler = () => {
    document.querySelector('.modal').style.display = 'block'
  }

  render() {
    return (
      <div>
        <Reveal animated='small fade'>
          <Reveal.Content visible>
            <Image src={church} size='small' />
          </Reveal.Content>
          <Reveal.Content hidden>
            <h1>Hello Semantic</h1>
          </Reveal.Content>
        </Reveal>
        <br/>
        <br/>
        <br/>
        <Grid verticalAlign='middle' columns={3} centered>
          <Grid.Row>
            <Grid.Column>
              <h1 id="state-color" onClick={this.colorHandler}>State Color: {this.state.color}</h1>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <ColorPicker color={this.state.color} handleChange={this.handleChangeComplete}/>
      </div>
    );
  }

}

export default ImageFade
