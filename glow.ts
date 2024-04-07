import * as THREE from 'three';

import CameraSync from './utils/CameraSync.js';
import utils from './utils/Utils.js';

import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from './utils/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import accessToken from './accessToken.js';

mapboxgl.accessToken = accessToken;
var map = new mapboxgl.Map({
  container: 'container',
  style: 'mapbox://styles/mapbox/dark-v9',
  zoom: 10,
  pitch: 0,
  center: [121.45485566448343, 31.16],
});

const params = {
  threshold: 0,
  strength: 0.3,
  radius: 0,
  exposure: 0.1,
};

map.on('style.load', function () {
  let camera,
    scene,
    renderer,
    composer,
    line,
    bloomComposer,
    mesh,
    container,
    program,
    positionLocation,
    texcoordLocation,
    resolutionLocation,
    positionBuffer,
    texcoordBuffer,
    texture,
    bloomContainer;
  let group = new THREE.Group();
  const BLOOM_SCENE = 1;
  const bloomLayer = new THREE.Layers();
  bloomLayer.set(BLOOM_SCENE);

  const darkMaterial = new THREE.MeshBasicMaterial({ color: 'black' });
  const materials = {};
  map.addLayer({
    id: 'custom_layer',
    type: 'custom',
    onAdd: function (map, gl) {
      container = map.getCanvas();
      const w = container.clientWidth;
      const h = container.clientHeight;
      const mapContainer = map.getContainer();
      bloomContainer = mapContainer.querySelector('#_THREE_EFFECTS_CONTAINER_');
      if (!bloomContainer) {
        bloomContainer = document.createElement('canvas');
        bloomContainer.id = '_THREE_EFFECTS_CONTAINER_';
        bloomContainer.style.position = 'absolute';
        bloomContainer.style.zIndex = '99999';
        bloomContainer.style.pointerEvents = 'none';
        bloomContainer.style.width = '100%';
        bloomContainer.style.height = '100%';
        bloomContainer.width = w;
        bloomContainer.height = h;
        // mapContainer.appendChild(bloomContainer);
      }

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        canvas: bloomContainer,
      });

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.shadowMap.enabled = true;
      renderer.autoClear = false;
      renderer.setClearAlpha(0.0);
      // renderer.outputEncoding = THREE.SRGBEncoding;
      // renderer.setClearAlpha(0)
      // renderer.toneMapping = THREE.ReinhardToneMapping;

      // renderer.setClearColor(0xffffff);
      // Do not set the near parameter of PerspectiveCamera to 0, and also do not set far to infinity.
      // Otherwise, it will lead to NaN values in camera.projectionMatrix and camera.projectionMatrixInverse,
      // causing the direction property of the ray in the raycaster to become NaN and resulting in failure to hit objects with intersectObjects
      camera = new THREE.PerspectiveCamera(map.transform.fov, w / h, 0.1, 1e21);
      scene = new THREE.Scene();
      // scene.background = new THREE.Color(0x00000000);
      scene.add(group);
      scene.add(new THREE.AmbientLight(0xcccccc));

      // camera sync
      new CameraSync(map, camera, group);

      //add line
      line = createLine2({
        color: 0x00bfff,
        width: 4,
        opacity: 1,
        containerWidth: w,
        containerHeight: h,
      });
      group.add(line);

      //add mesh
      const mesh = createMesh();
      group.add(mesh);

      //add cube
      const cube = createCube();
      group.add(cube);

      // You can control whether graphics enable bloom effect through layers.
      mesh.layers.enable(BLOOM_SCENE);
      line.layers.enable(BLOOM_SCENE);
      cube.layers.enable(BLOOM_SCENE);

      function onWindowResize() {
        const width = container.width / window.devicePixelRatio;
        const height = container.height / window.devicePixelRatio;
        renderer.setSize(width, height);
        bloomComposer.setSize(width, height);
        composer.setSize(width, height);
        line.material.resolution.set(width, height);
      }

      const renderScene = new RenderPass(scene, camera);

      const bloomPass = new UnrealBloomPass(new THREE.Vector2(w, h), params.strength, params.radius, params.threshold);
      bloomComposer = new EffectComposer(renderer);
      bloomComposer.renderToScreen = false;
      bloomComposer.addPass(renderScene);
      bloomComposer.addPass(bloomPass);
      const mixPass = new ShaderPass(
        new THREE.ShaderMaterial({
          uniforms: {
            baseTexture: { value: null },
            bloomTexture: { value: bloomComposer.renderTarget2.texture },
          },
          // @ts-ignore
          vertexShader: document.getElementById('vertexshader').textContent,
          // @ts-ignore
          fragmentShader: document.getElementById('fragmentshader').textContent,
          defines: {},
        }),
        'baseTexture',
      );
      mixPass.needsSwap = true;

      const outputPass = new OutputPass();

      composer = new EffectComposer(renderer);
      // composer.renderToScreen = false;
      composer.addPass(renderScene);
      composer.addPass(mixPass);
      composer.addPass(outputPass);

      window.addEventListener('resize', onWindowResize);
      onWindowResize();

      //-----------------
      const vertexShaderSource = `
          attribute vec2 a_position;
          attribute vec2 a_texCoord;
          uniform vec2 u_resolution;
          varying vec2 v_texCoord;
          void main() {
              vec2 zeroToOne = a_position / u_resolution;
              vec2 zeroToTwo = zeroToOne * 2.0;
              vec2 clipSpace = zeroToTwo - 1.0;
              gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
              v_texCoord = a_texCoord;
          }
      `;
      const fragmentShaderSource = `
          #ifdef GL_ES
          precision mediump float;
          #endif
          uniform sampler2D u_image;
          varying vec2 v_texCoord;
          void main() {
              gl_FragColor = texture2D(u_image, v_texCoord);
          }
      `;

      const vertexShader = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(vertexShader, vertexShaderSource);
      gl.compileShader(vertexShader);
      if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(vertexShader));
        gl.deleteShader(vertexShader);
        return;
      }

      const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(fragmentShader, fragmentShaderSource);
      gl.compileShader(fragmentShader);
      if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(fragmentShader));
        gl.deleteShader(fragmentShader);
        return;
      }

      program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        return;
      }

      // attrib
      positionLocation = gl.getAttribLocation(program, 'a_position');
      texcoordLocation = gl.getAttribLocation(program, 'a_texCoord');
      resolutionLocation = gl.getUniformLocation(program, 'u_resolution');

      // buffer
      positionBuffer = gl.createBuffer();
      texcoordBuffer = gl.createBuffer();

      // texture
      texture = gl.createTexture();
      //-----------------
    },
    render: function (gl, matrix) {
      scene.traverse(darkenNonBloomed);
      bloomComposer.render();
      scene.traverse(restoreMaterial);
      composer.render();
      renderer.resetState();
      renderer.render(scene, camera);

      gl.useProgram(program);

      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      setRectangle(gl, 0, 0, container.width, container.height);

      gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0]),
        gl.STATIC_DRAW,
      );

      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, bloomContainer);

      gl.enableVertexAttribArray(positionLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      gl.enableVertexAttribArray(texcoordLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
      gl.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0);

      gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    },
  });

  function setRectangle(gl, x, y, width, height) {
    const x1 = x;
    const x2 = x + width;
    const y1 = y;
    const y2 = y + height;
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([x1, y1, x2, y1, x1, y2, x1, y2, x2, y1, x2, y2]), gl.STATIC_DRAW);
  }

  function darkenNonBloomed(obj) {
    if (obj.isMesh && bloomLayer.test(obj.layers) === false) {
      materials[obj.uuid] = obj.material;
      obj.material = darkMaterial;
    }
  }

  function restoreMaterial(obj) {
    if (materials[obj.uuid]) {
      obj.material = materials[obj.uuid];
      delete materials[obj.uuid];
    }
  }

  var raycaster = new THREE.Raycaster();
  var mouse = new THREE.Vector2();

  function onMouseClick(event) {
    const w = container.width / window.devicePixelRatio;
    const h = container.height / window.devicePixelRatio;

    mouse.x = (event.clientX / w) * 2 - 1;
    mouse.y = -(event.clientY / h) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0) {
      console.log('Object clicked!');
      intersects[0].object.material.color.set(0xff0000);
    }
  }

  window.addEventListener('click', onMouseClick, false);
});

function createLine2(obj) {
  obj.geometry = [
    [121.45485566448343, 31.303623092438414],
    [121.45939232455689, 31.303527856342946],
    [121.46391802798969, 31.3032423780654],
    [121.46842184480208, 31.302767347072614],
    [121.47289289826932, 31.302103910611752],
    [121.47732039138224, 31.301253670918765],
    [121.4816936331083, 31.300218681320175],
    [121.4860020643872, 31.29900144123772],
    [121.4902352837959, 31.297604890108545],
    [121.49438307281976, 31.29603240023603],
    [121.4984354206659, 31.294287768589303],
    [121.50238254855769, 31.292375207571684],
    [121.50621493345018, 31.29029933478143],
    [121.50992333110725, 31.288065161790037],
    [121.51349879848435, 31.28567808196628],
    [121.51693271536115, 31.28314385737633],
    [121.52021680517153, 31.280468604792315],
    [121.5233431549801, 31.277658780844423],
    [121.52630423455645, 31.274721166353135],
    [121.52909291450176, 31.27166284988064],
    [121.53170248338338, 31.268491210541946],
    [121.53412666383736, 31.265213900118333],
    [121.53635962760018, 31.26183882451731],
    [121.53839600943475, 31.258374124624563],
    [121.54023091991796, 31.254828156595337],
    [121.54185995706065, 31.251209471633295],
    [121.5432792167334, 31.24752679530675],
    [121.54448530187452, 31.243789006452655],
    [121.54547533046065, 31.240005115720166],
    [121.54624694222198, 31.236184243805717],
    [121.54679830408904, 31.232335599432993],
    [121.5471281143593, 31.22846845713109],
    [121.54723560557686, 31.22459213486466],
    [121.5471205461202, 31.22071597157043],
    [121.54678324049678, 31.21684930465416],
    [121.5462245283465, 31.213001447502325],
    [121.54544578215875, 31.20918166706268],
    [121.54444890371123, 31.20539916154749],
    [121.5432363192414, 31.201663038312876],
    [121.54181097336456, 31.19798229196724],
    [121.54017632175574, 31.194365782760897],
    [121.53833632261474, 31.190822215308536],
    [121.53629542693726, 31.187360117695054],
    [121.53405856761732, 31.183987821014423],
    [121.53163114740852, 31.18071343938992],
    [121.52901902577523, 31.177544850523187],
    [121.52622850466607, 31.174489676817867],
    [121.52326631324536, 31.171555267122443],
    [121.52013959162004, 31.168748679135202],
    [121.51685587360156, 31.16607666251257],
    [121.5134230685452, 31.163545642720646],
    [121.50984944230996, 31.161161705667567],
    [121.50614359738528, 31.158930583152856],
    [121.50231445223179, 31.15685763916746],
    [121.49837121988533, 31.15494785707681],
    [121.49432338587486, 31.15320582771645],
    [121.49018068550637, 31.151635738428208],
    [121.48595308056623, 31.150241363062126],
    [121.4816507354987, 31.14902605296771],
    [121.47728399311309, 31.147992728995156],
    [121.47286334987737, 31.147143874525224],
    [121.46839943085583, 31.14648152954388],
    [121.46390296434869, 31.146007285775486],
    [121.45938475629296, 31.14572228288574],
    [121.45485566448343, 31.14562720576321],
    [121.4503265726739, 31.14572228288574],
    [121.44580836461817, 31.146007285775486],
    [121.44131189811104, 31.14648152954388],
    [121.43684797908949, 31.147143874525224],
    [121.43242733585379, 31.147992728995156],
    [121.42806059346816, 31.14902605296771],
    [121.42375824840065, 31.150241363062126],
    [121.41953064346049, 31.151635738428208],
    [121.415387943092, 31.15320582771645],
    [121.41134010908154, 31.15494785707681],
    [121.40739687673506, 31.15685763916746],
    [121.40356773158157, 31.158930583152856],
    [121.39986188665691, 31.161161705667567],
    [121.39628826042167, 31.163545642720646],
    [121.39285545536531, 31.16607666251257],
    [121.38957173734684, 31.168748679135202],
    [121.3864450157215, 31.171555267122443],
    [121.38348282430081, 31.174489676817867],
    [121.38069230319165, 31.177544850523187],
    [121.37808018155836, 31.18071343938992],
    [121.37565276134954, 31.183987821014423],
    [121.3734159020296, 31.187360117695054],
    [121.37137500635212, 31.190822215308536],
    [121.36953500721114, 31.194365782760897],
    [121.36790035560229, 31.19798229196724],
    [121.36647500972546, 31.201663038312876],
    [121.36526242525564, 31.20539916154749],
    [121.36426554680811, 31.20918166706268],
    [121.36348680062038, 31.213001447502325],
    [121.36292808847008, 31.21684930465416],
    [121.36259078284665, 31.22071597157043],
    [121.36247572339002, 31.22459213486466],
    [121.36258321460757, 31.22846845713109],
    [121.36291302487781, 31.232335599432993],
    [121.36346438674488, 31.236184243805717],
    [121.36423599850623, 31.240005115720166],
    [121.36522602709236, 31.243789006452655],
    [121.36643211223348, 31.24752679530675],
    [121.36785137190621, 31.251209471633295],
    [121.36948040904892, 31.254828156595337],
    [121.37131531953213, 31.258374124624563],
    [121.37335170136669, 31.26183882451731],
    [121.3755846651295, 31.265213900118333],
    [121.37800884558348, 31.268491210541946],
    [121.38061841446512, 31.27166284988064],
    [121.3834070944104, 31.274721166353135],
    [121.38636817398677, 31.277658780844423],
    [121.38949452379534, 31.280468604792315],
    [121.39277861360571, 31.28314385737633],
    [121.39621253048253, 31.28567808196628],
    [121.39978799785962, 31.288065161790037],
    [121.4034963955167, 31.29029933478143],
    [121.40732878040916, 31.292375207571684],
    [121.41127590830095, 31.294287768589303],
    [121.41532825614709, 31.29603240023603],
    [121.41947604517097, 31.297604890108545],
    [121.42370926457967, 31.29900144123772],
    [121.42801769585854, 31.300218681320175],
    [121.43239093758464, 31.301253670918765],
    [121.43681843069756, 31.302103910611752],
    [121.44128948416478, 31.302767347072614],
    [121.44579330097717, 31.3032423780654],
    [121.45031900440996, 31.303527856342946],
    [121.45485566448343, 31.303623092438414],
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
    linewidth: obj.width,
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
  // line.computeLineDistances();
  return line;
}

function createMesh() {
  const points = [
    [121.47540519609203, 31.068403408422398],
    [121.40293459353683, 30.980240693209183],
    [121.57515884902091, 30.979997036822525],
  ];

  var straightProject = utils.lnglatsToWorld(points);
  var normalized = utils.normalizeVertices(straightProject);
  var flattenedArray = utils.flattenVectors(normalized.vertices);
  const verticesArray = new Float32Array(flattenedArray);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(verticesArray, 3));
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(normalized.position.x, normalized.position.y, normalized.position.z);
  return mesh;
}

function createCube() {
  const center = [121.10987446056618, 31.18596578115384];
  var straightProject = utils.projectToWorld(center);
  var geometry = new THREE.BoxGeometry(200, 200, 200);
  var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  var cube = new THREE.Mesh(geometry, material);

  cube.position.set(straightProject.x, straightProject.y, straightProject.z);
  return cube;
}
