import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import {
  ASPECT, FAR, FOV, NEAR, W_HEIGHT, W_WIDTH,
} from '../../constants/three-config';
import renderCube from '../Meshes/Cube';
import renderLines, { setLinesRotation } from '../Meshes/Lines';
import './Canvas.css';

const Canvas = () => {
  let renderer: THREE.WebGLRenderer;
  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let container: HTMLDivElement;
  let light: THREE.AmbientLight;
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  let cubeMesh: THREE.Mesh;
  let linesMesh: THREE.Line;

  const [cubeRotate, setCubeRotate] = useState<boolean>(true);
  const [cubeRotateBy, setCubeRotateBy] = useState<number>(0);

  useEffect(() => {
    init();
    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener('mousedown', onMouseDown, false);
    window.addEventListener('mouseup', onMouseUp, false);
    return () => {
      window.removeEventListener('resize', onWindowResize, false);
      window.removeEventListener('mousedown', onMouseDown, false);
      window.removeEventListener('mouseup', onMouseUp, false);
    };
  }, []);

  const animate = () => {
    raycaster.setFromCamera(mouse, camera);
    requestAnimationFrame(animate);
    cubeMesh.rotation.y += cubeRotateBy;
    cubeMesh.rotation.z += cubeRotateBy;
    renderer.render(scene, camera);
  };

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  const onMouseDown = (event: MouseEvent) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    const intersects = raycaster.intersectObjects(scene.children);
    if (intersects.length > 0) {
      if (intersects[0].object.name.includes('cube')) {
        const value: number = cubeRotate ? 0.01 : 0;
        setCubeRotateBy(value);
        setCubeRotate(!cubeRotate);
      } else {
        setLinesRotation(linesMesh);
      }
    }
    for (let i = 0; i < intersects.length; i += 1) {
      (intersects[i] as any).object.material.color.set(0xff0000);
    }
  };

  const onMouseUp = (event: MouseEvent) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    const intersects = raycaster.intersectObjects(scene.children);
    for (let i = 0; i < intersects.length; i += 1) {
      (intersects[i] as any).object.material.color.set(0x00ff00);
    }
  };

  const init = () => {
    light = new THREE.AmbientLight(0xffffff);
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(FOV, ASPECT, NEAR, FAR);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(W_WIDTH, W_HEIGHT);
    container = document.getElementById('root') as HTMLDivElement;
    container.appendChild(renderer.domElement);
    camera.position.set(0, 0, 20);
    camera.lookAt(0, 0, 0);
    cubeMesh = renderCube();
    linesMesh = renderLines();
    scene.add(cubeMesh);
    scene.add(linesMesh);
    scene.add(light);
    animate();
  };

  return (
    <>
    </>
  );
};

export default Canvas;
