import React, { useEffect } from 'react';
import * as THREE from 'three';
import {
  ASPECT, DEFAULT_MESH_COLOR, FAR, FOV, NEAR,
} from '../../constants/three-config';
import './Canvas.css';

const Canvas = () => {
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(FOV, ASPECT, NEAR, FAR);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: DEFAULT_MESH_COLOR });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  };

  return (
    <>
    </>
  );
};

export default Canvas;
