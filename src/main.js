import * as THREE from '../node_modules/three/build/three.module.js';
// console.log(THREE)

// 创建一个场景
const scene = new THREE.Scene();
//  创建照相机（透视摄像机）
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//  创建渲染器（）
const renderer = new THREE.WebGLRenderer();
// 设置渲染的区域
renderer.setSize(window.innerWidth, window.innerHeight);
// 将渲染元素添加到dom元素中
document.body.appendChild(renderer.domElement);


// 创建一个立方体对象 vertices(点)和faces（面）
const geometry = new THREE.BoxGeometry(1, 1, 1);
// 设置立方体的材质
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;
//  此时还没有进行渲染（页面看不到任何东西）

// 创建渲染循环（render loop ）或者动画循环（animate loop）
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
// 进行渲染
animate();