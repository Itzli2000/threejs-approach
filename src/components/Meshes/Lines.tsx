import * as THREE from 'three';
// import { DEFAULT_MESH_COLOR } from '../../constants/three-config';

const renderLines = (scene: THREE.Scene) => {
  const points = [];
  points.push(new THREE.Vector3(-10, 0, 0));
  points.push(new THREE.Vector3(0, 10, 0));
  points.push(new THREE.Vector3(10, 0, 0));
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
  const line = new THREE.Line(geometry, material);
  scene.add(line);

  return scene;
};

export default renderLines;
