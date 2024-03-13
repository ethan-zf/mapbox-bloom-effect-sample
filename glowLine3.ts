// 未结合地图的带宽度线

import * as THREE from 'three';

import CameraSync from './utils/CameraSync.js';
import utils from './utils/Utils.js';

import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';

mapboxgl.accessToken = 'pk.eyJ1IjoienRvcCIsImEiOiJjanZhamkzOWwxY3VsNGFtZWxiMXhiODlpIn0.2c34LZm8wtcAkfJBMOGYMw';
var map = new mapboxgl.Map({
  container: 'container',
  style: 'mapbox://styles/mapbox/dark-v9',
  zoom: 10,
  pitch: 0,
  center: [120.35539813547194, 31.167008537160598],
});

let camera, scene, renderer;
map.on('style.load', function () {
  let group = new THREE.Group();
  map.addLayer({
    id: 'custom_layer',
    type: 'custom',
    onAdd: function (map, gl) {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        canvas: map.getCanvas(),
        context: gl,
      });

      renderer.shadowMap.enabled = true;
      renderer.autoClear = false;

      camera = new THREE.PerspectiveCamera(28, window.innerWidth / window.innerHeight, 0.000000000001, Infinity);

      // 创建场景
      scene = new THREE.Scene();
      scene.add(group);
      scene.add(new THREE.AmbientLight(0xcccccc));

      new CameraSync(map, camera, group);
      const line = createLine2({
        color: 0xffffff,
        width: 4,
        opacity: 1,
      });

      group.add(line);
    },
    render: function (gl, matrix) {
      renderer.resetState();
      renderer.render(scene, camera);
    },
  });
});

function createLine2(obj) {
  // obj = utils._validate(obj, Objects.prototype._defaults.line);
  obj.geometry = [
    [120.35539813547194, 31.167008537160598, 0],
    [120.6784178452819, 31.25767648523754, 0],
    [120.95376724549493, 31.149351652408555, 0],
  ];
  // Geometry
  var straightProject = utils.lnglatsToWorld(obj.geometry);
  var normalized = utils.normalizeVertices(straightProject);
  var flattenedArray = utils.flattenVectors(normalized.vertices);
  var geometry = new LineGeometry();
  geometry.setPositions(flattenedArray);
  // Material
  let matLine = new LineMaterial({
    color: obj.color,
    linewidth: obj.width, // in pixels
    dashed: false,
    opacity: obj.opacity,
  });

  matLine.resolution.set(window.innerWidth, window.innerHeight);
  matLine.isMaterial = true;
  matLine.transparent = true;
  matLine.depthWrite = false;

  // Mesh
  let line = new Line2(geometry, matLine);
  line.position.copy(normalized.position);
  line.computeLineDistances();
  return line;
}
