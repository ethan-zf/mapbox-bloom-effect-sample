import * as THREE from 'three';

import Stats from 'three/examples/jsm/libs/stats.module.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

let stats;
let composer, mixer, clock;

const params = {
  threshold: 0,
  strength: 1,
  radius: 0,
  exposure: 1,
};

const container = document.getElementById('container') as HTMLElement;

stats = new Stats();
container.appendChild(stats.dom);

clock = new THREE.Clock();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();
scene.add(camera);

const controls = new OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = Math.PI * 0.5;
controls.minDistance = 30;
controls.maxDistance = 800;

// scene.add(new THREE.AmbientLight(0xcccccc));

// const pointLight = new THREE.PointLight(0xffffff, 100);
// camera.add(pointLight);

const renderScene = new RenderPass(scene, camera);
addCubes(scene);

const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
bloomPass.threshold = params.threshold;
bloomPass.strength = params.strength;
bloomPass.radius = params.radius;

const outputPass = new OutputPass();

composer = new EffectComposer(renderer);
composer.addPass(renderScene);
composer.addPass(bloomPass);
composer.addPass(outputPass);

const gui = new GUI();

const bloomFolder = gui.addFolder('bloom');

bloomFolder.add(params, 'threshold', 0.0, 1.0).onChange(function (value) {
  bloomPass.threshold = Number(value);
});

bloomFolder.add(params, 'strength', 0.0, 3.0).onChange(function (value) {
  bloomPass.strength = Number(value);
});

gui
  .add(params, 'radius', 0.0, 1.0)
  .step(0.01)
  .onChange(function (value) {
    bloomPass.radius = Number(value);
  });

const toneMappingFolder = gui.addFolder('tone mapping');

toneMappingFolder.add(params, 'exposure', 0.1, 2).onChange(function (value) {
  renderer.toneMappingExposure = Math.pow(value, 4.0);
});
animate();
window.addEventListener('resize', onWindowResize);

function addCubes(scene) {
  // let texture = new THREE.TextureLoader().load('./sky.png');
  // var geometry = new THREE.BoxGeometry(4, 4, 4);
  var material = new THREE.MeshBasicMaterial({
    // map: texture,
    color: 'red',
  });

  const points = [];
  points.push(new THREE.Vector3(-100, 0, 0));
  points.push(new THREE.Vector3(0, 100, 0));
  points.push(new THREE.Vector3(300, 0, 0));

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const line = new THREE.Line(geometry, material);
  scene.add(line);
  mixer = new THREE.AnimationMixer(line);
}

function onWindowResize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
  composer.setSize(width, height);
}

function animate() {
  requestAnimationFrame(animate);
  stats.update();
  composer.render();
}
