import * as THREE from 'three';
import { DEFAULT_MESH_COLOR } from '../../constants/three-config';

const renderCube = (scene: THREE.Scene) => {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: DEFAULT_MESH_COLOR });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  cube.position.x = -2;

  return scene;
};

export default renderCube;
