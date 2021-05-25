// New scene from THREE object
const scene = new THREE.Scene();

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "0xff0000" });
// You can call this "cube" if you're making more than one object
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
