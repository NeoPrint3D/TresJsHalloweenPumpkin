<template></template>

<script setup lang="ts">
import {
  AmbientLight,
  BoxGeometry,
  Mesh,
  MeshPhongMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Points,
  PointsMaterial,
  SphereGeometry,
  TextureLoader,
  Vector3,
} from "three";
// @ts-ignore
import { patchShaders } from "gl-noise/build/glNoise.m";
import CustomShaderMaterial from "three-custom-shader-material/vanilla";
import fragmentShader from "./fragment.glsl?raw";
import vertexShader from "./vertex.glsl?raw";

const context = useTresContext();

context.scene.value.add(new AmbientLight(0x404040));

// add a box

useGLTF("/pumpkin.glb").then((logo) => {
  console.log(logo);
  // convert object3d to geometry

  logo.nodes.Pumpkin.geometry?.scale(0.025, 0.025, 0.025);

  const pointsParentGeometry = logo.nodes.Pumpkin.geometry?.clone();

  const baseMaterial = new PointsMaterial({
    color: "#ffffff",
    size: 0.00625,
    sizeAttenuation: true,
  });

  // const customShader = new

  const shaderMaterial = new CustomShaderMaterial({
    baseMaterial,
    vertexShader: patchShaders(vertexShader),
    fragmentShader: patchShaders(fragmentShader),
    uniforms: {
      uTime: { value: 0 },
      // get the window size
      uResolution: {
        value: new Vector3(window.innerWidth, window.innerHeight, 1),
      },
    },
  });

  const points = new Points(pointsParentGeometry, shaderMaterial);

  context.scene.value.add(points);

  const light = new PointLight(0xffffff, 1, 100, 1);

  context.scene.value.add(light);

  const { onLoop } = useRenderLoop();

  onLoop(({ elapsed }) => {
    points.rotation.y += 0.005;

    points.position.y = Math.sin(elapsed * 0.75) * 0.125;
    shaderMaterial.uniforms.uTime.value += 0.001;
  });
});
</script>
