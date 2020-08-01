import * as THREE from "three";
import React, { useLayoutEffect } from "react";
import { OrbitControls } from "./OrbitControls";
import { Water } from "./Water.js";
import { Sky } from "./Sky.js";

var container;
var camera, scene, renderer;
var controls, water, sun;

function init() {
  container = document.getElementById("animation-container");

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);

  renderer.setSize(container.offsetWidth, 2000);
  container.appendChild(renderer.domElement);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    1,
    20000
  );
  camera.position.set(-150000, 20000, 100000);

  // Sun

  sun = new THREE.Vector3();

  // Water

  var waterGeometry = new THREE.PlaneBufferGeometry(10000, 10000);

  water = new Water(waterGeometry, {
    textureWidth: 512,
    textureHeight: 512,
    waterNormals: new THREE.TextureLoader().load(
      "textures/waternormals.jpg",
      function (texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      }
    ),
    alpha: 1.0,
    sunDirection: new THREE.Vector3(),
    sunColor: 0xffffff,
    waterColor: 0x001e0f,
    distortionScale: 3.7,
    fog: scene.fog !== undefined,
  });

  water.rotation.x = -Math.PI / 2;

  scene.add(water);

  // Skybox

  var sky = new Sky();
  sky.scale.setScalar(10000);
  scene.add(sky);

  var uniforms = sky.material.uniforms;

  uniforms["turbidity"].value = 10;
  uniforms["rayleigh"].value = 2;
  uniforms["mieCoefficient"].value = 0.005;
  uniforms["mieDirectionalG"].value = 0.8;

  var parameters = {
    inclination: 0.49,
    azimuth: 0.205,
  };

  var pmremGenerator = new THREE.PMREMGenerator(renderer);

  function updateSun() {
    var theta = Math.PI * (parameters.inclination - 0.5);
    var phi = 2 * Math.PI * (parameters.azimuth - 0.5);

    sun.x = Math.cos(phi);
    sun.y = Math.sin(phi) * Math.sin(theta);
    sun.z = Math.sin(phi) * Math.cos(theta);

    sky.material.uniforms["sunPosition"].value.copy(sun);
    water.material.uniforms["sunDirection"].value.copy(sun).normalize();

    scene.environment = pmremGenerator.fromScene(sky).texture;
  }

  updateSun();

  controls = new OrbitControls(camera, renderer.domElement);
  controls.maxPolarAngle = Math.PI * 0.495;
  controls.target.set(0, 10, 0);
  controls.minDistance = 40.0;
  controls.maxDistance = 200.0;
  controls.update();

  var uniforms = water.material.uniforms;
  window.addEventListener("resize", onWindowResize, false);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.offsetWidth, container.offsetHeight);
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  var time = performance.now() * 0.001;

  water.material.uniforms["time"].value += 1.0 / 60.0;

  renderer.render(scene, camera);
}

function AnimationOcean() {
  useLayoutEffect(() => {
    init();
    animate();
  });

  return <div id="animation-container"></div>;
}

export default AnimationOcean;
