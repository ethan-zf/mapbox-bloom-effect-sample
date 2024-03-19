// 未结合地图的带宽度线

import * as THREE from 'three';

import CameraSync from './utils/CameraSync.js';
import utils from './utils/Utils.js';

import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';

import Stats from 'three/examples/jsm/libs/stats.module.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { EffectComposer } from './utils/postprocessing/EffectComposer.js';
// import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { RenderPass } from './utils/postprocessing/RenderPass.js';
// import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { UnrealBloomPass } from './utils/postprocessing/UnrealBloomPass.js';
// import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from './utils/postprocessing/ShaderPass.js';
import { OutputPass } from './utils/postprocessing/OutputPass.js';

mapboxgl.accessToken = 'pk.eyJ1IjoienRvcCIsImEiOiJjanZhamkzOWwxY3VsNGFtZWxiMXhiODlpIn0.2c34LZm8wtcAkfJBMOGYMw';
var map = new mapboxgl.Map({
  container: 'container',
  style: 'mapbox://styles/mapbox/dark-v9',
  zoom: 10,
  pitch: 0,
  center: [120.35539813547194, 31.167008537160598],
});

map.on('style.load', function () {
  let camera, scene, renderer, bloomComposer, finalComposer, threeRender;
  const params = {
    threshold: 0,
    strength: 1,
    radius: 0,
    exposure: 1,
  };
  let group = new THREE.Group();
  map.addLayer({
    id: 'custom_layer',
    type: 'custom',
    onAdd: function (map, gl) {
      const container = map.getCanvas();
      const bloomContainer = document.createElement('canvas');
      bloomContainer.width = container.width;
      bloomContainer.height = container.height;
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        canvas: container,
        context: gl,
      });

      renderer.shadowMap.enabled = true;
      renderer.autoClear = false;

      renderer.setClearColor(0xffffff);

      camera = new THREE.PerspectiveCamera(28, window.innerWidth / window.innerHeight, 0.000000000001, Infinity);

      // 创建场景
      scene = new THREE.Scene();
      scene.add(group);
      scene.add(new THREE.AmbientLight(0xcccccc));

      new CameraSync(map, camera, group);
      // const line = createLine();
      const line = createLine2({
        color: 0x00ff00,
        width: 4,
        opacity: 1,
      });
      group.add(line);

      const BLOOM_SCENE = 1;

      const bloomLayer = new THREE.Layers();
      bloomLayer.set(BLOOM_SCENE);

      const darkMaterial = new THREE.MeshBasicMaterial({ color: 'black' });
      const materials = {};

      const renderScene = new RenderPass(scene, camera);

      const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
      bloomPass.threshold = params.threshold;
      bloomPass.strength = params.strength;
      bloomPass.radius = params.radius;

      const outputPass = new OutputPass();

      // const renderTarget = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight);

      bloomComposer = new EffectComposer(renderer);
      bloomComposer.addPass(renderScene);
      bloomComposer.addPass(bloomPass);
      // bloomComposer.addPass(outputPass);// change

      const mixPass = new ShaderPass(
        new THREE.ShaderMaterial({
          uniforms: {
            baseTexture: { value: null },
            bloomTexture: { value: bloomComposer.renderTarget2.texture },
          },
          vertexShader: document.getElementById('vertexshader').textContent,
          fragmentShader: document.getElementById('fragmentshader').textContent,
          defines: {},
        }),
        'baseTexture',
      );
      mixPass.needsSwap = true;

      finalComposer = new EffectComposer(renderer);
      finalComposer.addPass(renderScene);
      finalComposer.addPass(mixPass);
      finalComposer.addPass(outputPass);

      threeRender = function () {
        // scene.traverse(darkenNonBloomed);
        bloomComposer.render();
        // scene.traverse(restoreMaterial);

        // render the entire scene, then render bloom scene on top
        // finalComposer.render();
      };
      // setupScene();
      // controls = new OrbitControls(camera, renderer.domElement);
      // const gui = new GUI();

      // const bloomFolder = gui.addFolder('bloom');

      // bloomFolder.add(params, 'threshold', 0.0, 1.0).onChange(function (value) {
      //   bloomPass.threshold = Number(value);
      // });

      // bloomFolder.add(params, 'strength', 0.0, 3.0).onChange(function (value) {
      //   bloomPass.strength = Number(value);
      // });

      // gui
      //   .add(params, 'radius', 0.0, 1.0)
      //   .step(0.01)
      //   .onChange(function (value) {
      //     bloomPass.radius = Number(value);
      //   });

      // const toneMappingFolder = gui.addFolder('tone mapping');

      // toneMappingFolder.add(params, 'exposure', 0.1, 2).onChange(function (value) {
      //   renderer.toneMappingExposure = Math.pow(value, 4.0);
      // });

      // function setupScene() {
      //   scene.traverse(disposeMaterial);
      //   scene.children.length = 0;

      //   const geometry = new THREE.IcosahedronGeometry(1, 15);

      //   for (let i = 0; i < 50; i++) {
      //     const color = new THREE.Color();
      //     color.setHSL(Math.random(), 0.7, Math.random() * 0.2 + 0.05);

      //     const material = new THREE.MeshBasicMaterial({ color: color });
      //     const sphere = new THREE.Mesh(geometry, material);
      //     sphere.position.x = Math.random() * 10 - 5;
      //     sphere.position.y = Math.random() * 10 - 5;
      //     sphere.position.z = Math.random() * 10 - 5;
      //     sphere.position.normalize().multiplyScalar(Math.random() * 4.0 + 2.0);
      //     sphere.scale.setScalar(Math.random() * Math.random() + 0.5);
      //     scene.add(sphere);

      //     if (Math.random() < 0.25) sphere.layers.enable(BLOOM_SCENE);
      //   }

      //   // threeRender();
      // }

      // function disposeMaterial(obj) {
      //   if (obj.material) {
      //     obj.material.dispose();
      //   }
      // }

      // function darkenNonBloomed(obj) {
      //   if (obj.isMesh && bloomLayer.test(obj.layers) === false) {
      //     materials[obj.uuid] = obj.material;
      //     obj.material = darkMaterial;
      //   }
      // }

      // function restoreMaterial(obj) {
      //   if (materials[obj.uuid]) {
      //     obj.material = materials[obj.uuid];
      //     delete materials[obj.uuid];
      //   }
      // }
    },
    render: function (gl, matrix) {
      // finalComposer.render();
      // renderer.resetState();
      // renderer.render(scene, camera);

      //------------------------
      threeRender && threeRender();
      //------------------------

      // stats.update();
      // controls.update();

      // map.triggerRepaint();

      // 手动清除颜色缓冲区和深度缓冲区
      // gl.clear(gl.COLOR_BUFFER_BIT);

      // 渲染正常场景
      // renderer.render(scene, camera);

      // 将 render target 设置为 active target，保留深度缓冲区
      // bloomComposer.render();
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
