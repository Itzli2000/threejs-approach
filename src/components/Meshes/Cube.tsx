/* eslint-disable no-param-reassign */
import * as THREE from 'three';
import { DEFAULT_MESH_COLOR } from '../../constants/three-config';

export const setCubeRotation = (cube: THREE.Mesh) => {
  cube.rotation.x += 0.1;
};

const renderCube = () => {
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshBasicMaterial({ color: DEFAULT_MESH_COLOR });
  const cube = new THREE.Mesh(geometry, material);
  cube.name = 'first cube';
  cube.position.y = -2;

  return cube;
};

export default renderCube;
