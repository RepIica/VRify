import React from 'react';
import street from '../img/street.jpg'
import church from '../img/church.jpg'
import slopes from '../img/slopes.jpg'
import sidewalk from '../img/sidewalk.jpg'
import landscape from '../img/landscape.jpg'
import { Button } from 'semantic-ui-react'
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'



class Ui extends React.Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  addSphere = () => {
    console.log('addSphere clicked')
  }

  render() {
    const { visible } = this.state
    return(

      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='push'
          icon='labeled'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={visible}
          width='thin'
        >
          <Menu.Item as='a' className="shape-btn" onClick={this.addSphere}>
            sphere
          </Menu.Item>
          <Menu.Item as='a' className="shape-btn">
            cube
          </Menu.Item>
          <Menu.Item as='a' className="shape-btn">
            plane
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
          <Segment basic>

            <div id="embedded-scene" className="row">
              <Button onClick={this.handleButtonClick}>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </Button>
              <a-scene embedded>

                <a-entity id="main-camera" camera fps-look-controls wasd-controls> {/*raycaster to enable click detection*/}
                  <a-entity cursor="rayOrigin: mouse;" raycaster="objects: .clickable" position="0 0 -1"
                            geometry="primitive: ring; radiusInner: 0.015; radiusOuter: 0.025"
                            material="color: rgb(255, 255, 255); shader: flat; opacity: 0.5; transparent: true"></a-entity>
                </a-entity>

                <a-assets>
                  <img id="start-bg" src={sidewalk} alt="start-bg" />
                  <img id="detail-bg" src={street} alt="detail-bg" />
                  <img id="left-tile-image" src={slopes} alt="left-tile" />
                  <img id="center-tile-image" src={church} alt="center-tile" />
                  <img id="right-tile-image" src={landscape} alt="right-tile" />
                  <a-mixin id="overlay-fade-in" animation="property: opacity; dir: normal; dur: 500; easing: easeOutQuad; loop: false; from:0; to: .75; startEvents: clickDown;"></a-mixin>
                </a-assets>

                <a-sky color="#ECECEC"></a-sky>

                <a-sphere id="main-bg" radius="100" position="0 0 0" rotation="0 90 0" src="#start-bg" color="#333333" material="side: double;"></a-sphere>

                <a-image
                  id="left-tile-image"
                  className="tile"
                  position="-4.5 1 -8"
                  src="#left-tile-image"
                  width="4"
                  height="3"
                  opacity="0"
                  animation="property: opacity; dir: normal; dur: 1500;
                             easing: easeInOutQuad; loop: false; from:0; to: 1; delay: 1000;"></a-image>

                <a-plane id="center-tile" class="clickable" position="0 1 -8" width="4" height="3" opacity="0"
                          animation="property: scale; dir: normal; dur: 500; easing: easeOutQuad; loop: false; from: 1 1 1; to: 1.5 1.5 1.5; startEvents: click;">
                  <a-image
                    id="center-tile-image"
                    className="tile"
                    position="0 0 0 "
                    src="#detail-bg"
                    width="4"
                    height="3"
                    opacity="0"
                    animation="property: opacity; dir: normal; dur: 1500;
                    easing: easeInOutQuad; loop: false; from:0; to: 1; delay: 1250;"></a-image>
                    <a-plane id="center-tile-overlay" width="4" height="3" position="0 0 0.01" color="#000" opacity="0"
                             mixin="overlay-fade-in"></a-plane>
                    <a-text id="center-tile-text" position="0 .25 .02" align="center" line-height="64" opacity="0" value="Kumamoto City\nJapan"
                            mixin="overlay-fade-in"></a-text>

                    <a-plane id="center-tile-cta" width="2" height=".5" position="0 -.75 .01" color="#000" opacity="0"
                             mixin="overlay-fade-in">
                      <a-text id="center-tile-cta-text" position="0 0 .02" align="center" line-height="64" opacity="0" value="View"
                              mixin="overlay-fade-in"></a-text>
                    </a-plane>
                </a-plane>

                <a-image
                  id="right-tile-image"
                  className="tile"
                  position="4.5 1 -8"
                  src="#right-tile-image"
                  width="4"
                  height="3"
                  opacity="0"
                  animation="property: opacity; dir: normal; dur: 1500;
                             easing: easeInOutQuad; loop: false; from:0; to: 1; delay: 1500;"></a-image>

              </a-scene>
            </div>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

export default Ui
