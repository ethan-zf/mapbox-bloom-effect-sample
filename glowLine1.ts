// 单像素的线基于three.js并且lnglatsToWorld加载ok

import * as THREE from 'three';

import CameraSync from './utils/CameraSync.js';
// import CameraSync from './utils/CameraSync-old.js';
import utils from './utils/Utils.js';

import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';

// 创建场景
const scene = new THREE.Scene();

// 创建相机
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1e21);
camera.position.x = -342944.2435853424;
camera.position.y = -93378.98559417523;
camera.position.z = 500;
// scene.add(new THREE.AmbientLight(0xffffff));

// 创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
const container = document.getElementById('container') as HTMLElement;
container.appendChild(renderer.domElement);



// 创建线的几何体
// const line = createLine();
const line = createLine2({
  color: 0xffffff,
  width: 4,
  opacity: 1,
});
// 将线添加到场景
scene.add(line);

// 创建动画循环
function animate() {
  requestAnimationFrame(animate);

  // // 旋转线条
  // line.rotation.x += 0.01;
  // line.rotation.y += 0.01;

  // 渲染场景
  renderer.render(scene, camera);
}

// 运行动画循环
animate();

function createLine2(obj) {
  // obj = utils._validate(obj, Objects.prototype._defaults.line);
  obj.geometry = [
    [120.35539813547194, 31.167008537160598, 0],
    [120.6784178452819, 31.25767648523754, 0],
    [120.95376724549493, 31.149351652408555, 0],
  ];
  // Geometry
  var straightProject = utils.lnglatsToWorld(obj.geometry);
  console.error('straightProject', straightProject);
  // var normalized = utils.normalizeVertices(straightProject);
  // var flattenedArray = utils.flattenVectors(normalized.vertices);
  // var geometry = new LineGeometry();
  // geometry.setPositions(flattenedArray);
  // Material
  // let matLine = new LineMaterial({
  //   color: obj.color,
  //   linewidth: obj.width, // in pixels
  //   dashed: false,
  //   opacity: obj.opacity,
  // });

  // matLine.resolution.set(window.innerWidth, window.innerHeight);
  // matLine.isMaterial = true;
  // matLine.transparent = true;
  // matLine.depthWrite = false;

  // Mesh
  // let line = new Line2(geometry, matLine);
  // line.position.copy(normalized.position);
  // line.computeLineDistances();

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(straightProject);

  // 创建材质
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });

  // 创建线的网格
  const line = new THREE.Line(lineGeometry, lineMaterial);
  return line;
}

function createLine() {
  const points = [];
  points.push(new THREE.Vector3(-2000, 0, 0));
  points.push(new THREE.Vector3(0, 2000, 0));
  points.push(new THREE.Vector3(2000, 0, 0));

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  // 创建材质
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });

  // 创建线的网格
  const line = new THREE.Line(lineGeometry, lineMaterial);
  return line;
}
