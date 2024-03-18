// 未结合地图的带宽度线

import * as THREE from 'three';

import CameraSync from './utils/CameraSync.js';
import utils from './utils/Utils.js';

import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';

import { EffectComposer } from './utils/postprocessing/EffectComposer.js';
import { RenderPass } from './utils/postprocessing/RenderPass.js';
import { UnrealBloomPass } from './utils/postprocessing/UnrealBloomPass.js';
import { OutputPass } from './utils/postprocessing/OutputPass.js';

mapboxgl.accessToken = 'pk.eyJ1IjoienRvcCIsImEiOiJjanZhamkzOWwxY3VsNGFtZWxiMXhiODlpIn0.2c34LZm8wtcAkfJBMOGYMw';
var map = new mapboxgl.Map({
  container: 'container',
  style: 'mapbox://styles/mapbox/dark-v9',
  zoom: 10,
  pitch: 0,
  center: [120.35539813547194, 31.167008537160598],
});

const params = {
  threshold: 0,
  strength: 1,
  radius: 0,
  exposure: 1,
};

map.on('style.load', function () {
  let camera, scene, renderer, stats, composer, clock, finalComposer, controls, line;
  let group = new THREE.Group();
  map.addLayer({
    id: 'custom_layer',
    type: 'custom',
    onAdd: function (map, gl) {
      const container = map.getCanvas();
      // const bloomContainer = document.createElement('canvas');
      const bloomContainer = document.getElementById('three');
      bloomContainer.width = container.width;
      bloomContainer.height = container.height;
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        canvas: bloomContainer,
      });

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.shadowMap.enabled = true;
      renderer.autoClear = false;

      // renderer.setClearColor(0xffffff);

      camera = new THREE.PerspectiveCamera(28, window.innerWidth / window.innerHeight, 0.000000000001, Infinity);

      // 创建场景
      scene = new THREE.Scene();
      // scene.background = new THREE.Color(0x00000000);
      scene.add(group);
      scene.add(new THREE.AmbientLight(0xcccccc));

      new CameraSync(map, camera, group);
      // const line = createLine();
      line = createLine2({
        color: 0x00ff00,
        width: 4,
        opacity: 1,
        containerWidth: container.width,
        containerHeight: container.height,
      });
      group.add(line);

      function onWindowResize() {
        const width = container.width;
        const height = container.height;
        renderer.setSize(width, height);
        composer.setSize(width, height);
        // material的宽度是世界坐标的size.Line2随着窗口变化宽度会变化，因此需要同步resolution
        line.material.resolution.set(width, height);
      }

      const renderScene = new RenderPass(scene, camera);

      const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
      bloomPass.threshold = params.threshold;
      bloomPass.strength = params.strength;
      bloomPass.radius = params.radius;

      const outputPass = new OutputPass();

      // const renderTarget = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight);

      composer = new EffectComposer(renderer);
      composer.addPass(renderScene);
      composer.addPass(bloomPass);
      composer.addPass(outputPass);
      window.addEventListener('resize', onWindowResize);
      onWindowResize();
    },
    render: function (gl, matrix) {
      composer.render();
      renderer.resetState();
      renderer.render(scene, camera);
    },
  });
});

function createLine2(obj) {
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

  matLine.resolution.set(obj.containerWidth, obj.containerHeight);
  matLine.isMaterial = true;
  matLine.transparent = true;
  matLine.depthWrite = false;

  // Mesh
  let line = new Line2(geometry, matLine);
  line.position.copy(normalized.position);
  line.computeLineDistances();
  return line;
}
