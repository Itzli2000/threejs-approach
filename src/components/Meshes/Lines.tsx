/* eslint-disable no-param-reassign */
import * as THREE from 'three';

export const setLinesRotation = (lines: THREE.Line) => {
  lines.rotation.x += 0.1;
};

const renderLines = () => {
  const points = [];
  points.push(new THREE.Vector3(-10, 0, 0));
  points.push(new THREE.Vector3(0, 10, 0));
  points.push(new THREE.Vector3(10, 0, 0));
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
  const line = new THREE.Line(geometry, material);
  line.name = 'Lines meshes';

  return line;
};

export default renderLines;
