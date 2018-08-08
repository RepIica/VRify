import React from 'react';

const Aincraft = (props) => {
  return(
    <a-scene avatar-recorder>
      <a-assets>
        <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
        <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
        <a-mixin id="voxel"
           geometry="primitive: box; height: 0.5; width: 0.5; depth: 0.5"
           material="shader: standard"
           random-color
           snap="offset: 0.25 0.25 0.25; snap: 0.5 0.5 0.5"
        ></a-mixin>
      </a-assets>

      <a-sky id="bg" radius="30" src="#skyTexture" theta-length="90"></a-sky>

      <a-cylinder id="ground" src="#groundTexture" radius="32" height="0.1"></a-cylinder>

      <a-entity id="sphere" geometry="primitive: sphere"
                material="color: #f426ff; shader: flat"
                position="0 0.15 -5"
                animation="property: position; easing: easeInOutQuad; dir: alternate; dur: 1000; to: 0 -0.10 -5; loop: true"></a-entity>

      <a-entity id="teleHand"
        hand-controls="left"
        teleport-controls="type: parabolic; collisionEntities: [mixin='voxel'], #ground"
      ></a-entity>

      <a-entity id="blockHand"
        hand-controls="right"
        controller-cursor
        intersection-spawn="event: click; mixin: voxel"
      ></a-entity>

      <a-camera>
        <a-cursor
          intersection-spawn="event: click; mixin: voxel"
        ></a-cursor>
      </a-camera>

    </a-scene>
  )
}

export default Aincraft
