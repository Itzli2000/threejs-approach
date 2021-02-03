import React, { useEffect } from 'react';
import * as THREE from 'three';
import {
  ASPECT, FAR, FOV, NEAR, W_HEIGHT, W_WIDTH,
} from '../../constants/three-config';
import renderCube from '../Meshes/Cube';
import renderLines from '../Meshes/Lines';
import './Canvas.css';

const Canvas = () => {
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(FOV, ASPECT, NEAR, FAR);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(W_WIDTH, W_HEIGHT);
    const container = document.getElementById('root') as HTMLDivElement;
    container.appendChild(renderer.domElement);
    camera.position.set(0, 0, 50);
    camera.lookAt(0, 0, 0);
    renderCube(scene);
    renderLines(scene);
    const animate = () => {
      requestAnimationFrame(animate);
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
