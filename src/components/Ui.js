import React from "react";
import street from "../img/street.jpg";
import church from "../img/church.jpg";
import slopes from "../img/slopes.jpg";
import sidewalk from "../img/sidewalk.jpg";
import landscape from "../img/landscape.jpg";
import ColorPicker from "./ColorPicker.js";
import SidebarItems from "./SidebarItems.js";
import { randInv, textValidator, randGrayColor } from "../calculations.js";
import { Button } from "semantic-ui-react";
import { Menu, Segment, Sidebar } from "semantic-ui-react";

class Ui extends React.Component {
  state = {
    visible: false,
    color: "#fff",
  };

  handleColorChange = color => {
    this.setState(
      { color: color.hex },
      console.log("state is now", this.state.color)
    );
  };

  colorHandler = () => {
    if (document.querySelector(".modal")) {
      document.querySelector(".modal").style.display = "block";
    } else {
      console.warn("no .modal element");
    }
  };

  closeBtnHandler = () => {
    if (document.querySelector(".modal")) {
      document.querySelector(".modal").style.display = "none";
    } else {
      console.warn("no .modal element");
    }
  };

  handleButtonClick = () => this.setState({ visible: !this.state.visible });

  handleSidebarHide = () => this.setState({ visible: false });

  addPrimitive = primitive => {
    const sceneEl = document.querySelector("a-scene");
    const entityEl = document.createElement(`a-${primitive}`);

    const z = randInv(-7, -2, 0.2);
    const y = randInv(0, 3, 0.2);
    const x = randInv(-3, 3, 0.2);
    console.log(x, y, z);
    sceneEl.appendChild(entityEl);
    entityEl.setAttribute("position", { x, y, z });
    if (this.state.color === "#fff") {
      console.log("default color chosen");
      entityEl.setAttribute("color", randGrayColor());
    } else {
      entityEl.setAttribute("color", this.state.color);
    }
    entityEl.setAttribute("mixin", "editable");
    entityEl.classList.add("clickable");
    // entityEl.object3D.position.set(x, y, z);
    console.log(`${primitive} added`);
  };

  addText = () => {
    const text = textValidator(prompt("Enter Text:"));
    if (text) {
      this.addPrimitive("text"); //refactor to not use this method, possible async issue
      const allTexts = document.querySelectorAll("a-text");
      allTexts[allTexts.length - 1].setAttribute("value", text);
    }
  };

  addText2 = () => {
    const text = textValidator(prompt("Enter Text:"));
    if (text) {
      this.addPrimitive("text"); //refactor to not use this method, possible async issue
      const allTexts = document.querySelectorAll("a-text");
      allTexts[allTexts.length - 1].setAttribute("value", text);
      allTexts[allTexts.length - 1].setAttribute("geometry", "primitive:plane");
    }
  };

  removeAllUserAdded = () => {
    const sceneEl = document.querySelector("a-scene");
    sceneEl.querySelectorAll(".clickable").forEach(el => {
      el.parentNode.removeChild(el);
    });
  };

  render() {
    const { visible } = this.state;
    return (
      <Sidebar.Pushable as={Segment}>
        <ColorPicker
          color={this.state.color}
          handleChange={this.handleColorChange}
        />{" "}
        {/* Modal for colorpicker revealed by <SidebarItems> */}
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={visible}
          width="thin"
        >
          <SidebarItems
            addPrimitive={this.addPrimitive}
            removeAllUserAdded={this.removeAllUserAdded}
            addText={this.addText}
            addText2={this.addText2}
            handleColorPicker={this.colorHandler}
          ></SidebarItems>
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
                {/* <a-entity id="main-camera" camera fps-look-controls wasd-controls super-hands hand-controls="right"> {/*raycaster to enable click detection}
                  <a-entity cursor="rayOrigin: mouse;" raycaster="objects: .clickable" position="0 0 -1"
                            geometry="primitive: ring; radiusInner: 0.015; radiusOuter: 0.025"
                            material="color: rgb(255, 255, 255); shader: flat; opacity: 0.5; transparent: true"></a-entity>
                </a-entity> */}

                <a-entity
                  camera
                  wasd-controls
                  fps-look-controls
                  position="0 0 1"
                  capture-mouse
                  raycaster="objects: .clickable"
                >
                  <a-entity
                    cursor="rayOrigin: mouse;"
                    position="0 0 -1"
                    geometry="primitive: ring; radiusInner: 0.015; radiusOuter: 0.025"
                    material="color: rgb(255, 255, 255); shader: flat; opacity: 0.5; transparent: true"
                    raycaster="objects: .clickable" // 2nd object class?
                    static-body="shape: sphere; sphereRadius: 0.001"
                    super-hands="colliderEvent: raycaster-intersection;
                            colliderEventProperty: els;
                            colliderEndEvent:raycaster-intersection-cleared;
                            colliderEndEventProperty: clearedEls;"
                  ></a-entity>
                </a-entity>

                <a-assets>
                  <a-mixin
                    id="editable"
                    hoverable
                    grabbable
                    stretchable
                    draggable
                    droppable
                    shadow
                    event-set__hoveron="_event: hover-start; material.opacity: 0.7; transparent: true"
                    event-set__hoveroff="_event: hover-end; material.opacity: 1; transparent: false"
                    event-set__dragon="_event: dragover-start; material.wireframe: true"
                    event-set__dragoff="_event: dragover-end; material.wireframe: false"
                  ></a-mixin>
                  <img id="start-bg" src={sidewalk} alt="start-bg" />
                  <img id="detail-bg" src={street} alt="detail-bg" />
                  <img id="left-tile-image" src={slopes} alt="left-tile" />
                  <img id="center-tile-image" src={church} alt="center-tile" />
                  <img id="right-tile-image" src={landscape} alt="right-tile" />
                  <a-mixin
                    id="overlay-fade-in"
                    animation="property: opacity; dir: normal; dur: 500; easing: easeOutQuad; loop: false; from:0; to: .75; startEvents: clickDown;"
                  ></a-mixin>
                </a-assets>

                <a-sky color="#ECECEC"></a-sky>

                <a-sphere
                  id="main-bg"
                  radius="100"
                  position="0 0 0"
                  rotation="0 90 0"
                  src="#start-bg"
                  color="#333333"
                  material="side: double;"
                ></a-sphere>

                {/* <a-image
                  id="left-tile-image"
                  className="tile"
                  position="-4.5 1 -8"
                  src="#left-tile-image"
                  width="4"
                  height="3"
                  opacity="0"
                  animation="property: opacity; dir: normal; dur: 1500;
                             easing: easeInOutQuad; loop: false; from:0; to: 1; delay: 1000;"></a-image> */}

                <a-plane
                  id="center-tile"
                  class="clickable"
                  position="0 1 -8"
                  width="4"
                  height="3"
                  opacity="0"
                  animation="property: scale; dir: normal; dur: 500; easing: easeOutQuad; loop: false; from: 1 1 1; to: 1.5 1.5 1.5; startEvents: click;"
                >
                  <a-image
                    id="center-tile-image"
                    className="tile"
                    position="0 0 0 "
                    src="#detail-bg"
                    width="4"
                    height="3"
                    opacity="0"
                    animation="property: opacity; dir: normal; dur: 1500;
                    easing: easeInOutQuad; loop: false; from:0; to: 1; delay: 1250;"
                  ></a-image>
                  <a-plane
                    id="center-tile-overlay"
                    width="4"
                    height="3"
                    position="0 0 0.01"
                    color="#000"
                    opacity="0"
                    mixin="overlay-fade-in"
                  ></a-plane>
                  <a-text
                    id="center-tile-text"
                    position="0 .25 .02"
                    align="center"
                    line-height="64"
                    opacity="0"
                    value="Kumamoto City\nJapan"
                    mixin="overlay-fade-in"
                  ></a-text>
                  <a-plane
                    id="center-tile-cta"
                    width="2"
                    height=".5"
                    position="0 -.75 .01"
                    color="#000"
                    opacity="0"
                    mixin="overlay-fade-in"
                  >
                    <a-text
                      id="center-tile-cta-text"
                      position="0 0 .02"
                      align="center"
                      line-height="64"
                      opacity="0"
                      value="View"
                      mixin="overlay-fade-in"
                    ></a-text>
                  </a-plane>
                </a-plane>

                {/* <a-image
                  id="right-tile-image"
                  className="tile"
                  position="4.5 1 -8"
                  src="#right-tile-image"
                  width="4"
                  height="3"
                  opacity="0"
                  animation="property: opacity; dir: normal; dur: 1500;
                             easing: easeInOutQuad; loop: false; from:0; to: 1; delay: 1500;"></a-image> */}

                {/* <a-text value="Now Interactable" geometry="primitive:plane" position="4.5 1 -8"></a-text> */}
                {/* <a-entity class="clickable" geometry="primitive: box; width: 0.5; height: 0.5; depth: 0.5" mixin="editable" position="0 1 -1.25" material="color: red"></a-entity> */}
              </a-scene>
            </div>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default Ui;
