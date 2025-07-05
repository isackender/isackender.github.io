import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';
import { ShaderMaterial, Vector2 } from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x131313);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('bg'),
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const xRotationGroup = new THREE.Group();
const yRotationGroup = new THREE.Group();
scene.add(yRotationGroup);
yRotationGroup.add(xRotationGroup);

const canvas = renderer.domElement;
const mouse = new THREE.Vector2(0.5, 0.5);
let hoverActive = false;
let isMobile = /Mobi|Android/i.test(navigator.userAgent);
let gyroActive = false;

if (isMobile && window.DeviceOrientationEvent) {
  function handleOrientation(event) {
    gyroActive = true;

    const gamma = event.gamma || 0;
    const beta = event.beta || 0;

    const x = THREE.MathUtils.clamp((gamma + 45) / 90, 0, 1);
    const y = THREE.MathUtils.clamp((beta + 90) / 180, 0, 1);

    mouse.x = x;
    mouse.y = 1.0 - y;
    hoverActive = true;
  }

  if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission().then(response => {
      if (response === 'granted') {
        window.addEventListener('deviceorientation', handleOrientation, true);
      }
    }).catch(console.error);
  } else {
    window.addEventListener('deviceorientation', handleOrientation, true);
  }
}

let lastClientX = 0;
let lastClientY = 0;

function updateMousePositionFromEvent(event) {
  const rect = canvas.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width;
  const y = (event.clientY - rect.top) / rect.height;
  mouse.x = x;
  mouse.y = 1.0 - y;
}

document.addEventListener('mousemove', (event) => {
  hoverActive = true;
  lastClientX = event.clientX;
  lastClientY = event.clientY;
  updateMousePositionFromEvent(event);
});

document.addEventListener('scroll', () => {
  const fakeEvent = { clientX: lastClientX, clientY: lastClientY };
  updateMousePositionFromEvent(fakeEvent);
}, true);

const ringColor = 0x4e4e4e;
const resolution = new THREE.Vector2(window.innerWidth, window.innerHeight);

const baseShaderMaterial = new ShaderMaterial({
  uniforms: {
    u_mouse: { value: mouse.clone() },
    u_resolution: { value: resolution.clone() },
    u_color: { value: new THREE.Color(ringColor) },
    u_active: { value: 0.0 },
  },
  vertexShader: `
    varying vec2 vScreenPos;
    void main() {
      vec4 clipPosition = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      vScreenPos = (clipPosition.xy / clipPosition.w) * 0.5 + 0.5;
      gl_Position = clipPosition;
    }
  `,
  fragmentShader: `
    precision mediump float;

    varying vec2 vScreenPos;
    uniform vec2 u_mouse;
    uniform vec2 u_resolution;
    uniform vec3 u_color;
    uniform float u_active;

    void main() {
      vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);

      vec2 scaledPos = (vScreenPos - u_mouse) * aspect;
      float dist = length(scaledPos);
      float intensity = smoothstep(0.28, 0.16, dist) * u_active;

      vec3 base = u_color;

      vec3 rgbSplit = vec3(
        smoothstep(0.3, 0.1, length((vScreenPos + vec2(0.008, 0.0) - u_mouse) * aspect)),
        smoothstep(0.3, 0.1, length((vScreenPos - u_mouse) * aspect)),
        smoothstep(0.3, 0.1, length((vScreenPos - vec2(0.008, 0.0) - u_mouse) * aspect))
      );

      vec3 finalColor = mix(base, rgbSplit, intensity);
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `,
  transparent: false,
});

const radius = 1.2;
const ringCount = 24;
const shaderMaterials = [];

for (let i = 1; i < ringCount; i++) {
  const angle = (i / ringCount) * Math.PI - Math.PI / 2;
  const y = radius * Math.sin(angle);
  const r = radius * Math.cos(angle);

  const geometry = new THREE.TorusGeometry(r, 0.002, 8, 64);
  const material = baseShaderMaterial.clone();
  shaderMaterials.push(material);

  const torus = new THREE.Mesh(geometry, material);
  torus.rotation.x = Math.PI / 2;
  torus.position.y = y;
  xRotationGroup.add(torus);
}

window.addEventListener('resize', () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);

  resolution.set(w, h);
  shaderMaterials.forEach(mat => {
    mat.uniforms.u_resolution.value.set(w, h);
  });
});

function animate() {
  requestAnimationFrame(animate);

  shaderMaterials.forEach(mat => {
    mat.uniforms.u_mouse.value.copy(mouse);
    mat.uniforms.u_active.value = hoverActive ? 1.0 : 0.0;
  });

  xRotationGroup.rotation.x += 0.003;
  yRotationGroup.rotation.y += 0.002;

  renderer.render(scene, camera);
}

animate();

