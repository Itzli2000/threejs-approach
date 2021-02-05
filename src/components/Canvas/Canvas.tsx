import React, { useEffect } from 'react';
import * as THREE from 'three';
import {
  ASPECT, FAR, FOV, NEAR, W_HEIGHT, W_WIDTH,
} from '../../constants/three-config';
import renderCube from '../Meshes/Cube';
import renderLines from '../Meshes/Lines';
import './Canvas.css';

const Canvas = () => {
  let renderer: THREE.WebGLRenderer;
  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let container: HTMLDivElement;

  useEffect(() => {
    init();
    window.addEventListener('resize', onWindowResize, false);
    return () => window.removeEventListener('resize', onWindowResize, false);
  }, []);

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  const init = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(FOV, ASPECT, NEAR, FAR);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(W_WIDTH, W_HEIGHT);
    container = document.getElementById('root') as HTMLDivElement;
    container.appendChild(renderer.domElement);
    camera.position.set(0, 0, 50);
    camera.lookAt(0, 0, 0);
    renderCube(scene);
    renderLines(scene);
    animate();
  };

  return (
    <>
    </>
  );
};

export default Canvas;
