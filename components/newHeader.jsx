import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useEffect } from 'react';

export default function NewHeader({currentLanguage}) {

    useEffect(() => {
        const canvas = document.querySelector('#webgl');
        const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
        renderer.setSize(window.innerWidth, window.innerHeight);

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1b191f);

        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 4);

        const loader = new GLTFLoader();
        loader.load('/images/copyright.glb', function(gltf) {scene.add(gltf.scene);})

        const light = new THREE.PointLight(0xffffff, 20, 100);
        light.position.set(50, 30, 50);
        scene.add(light);

        const light2 = new THREE.AmbientLight(0xffffff, 0.2);
        scene.add(light2);

        renderer.render(scene, camera);

        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }

        animate();
    }, []);



    return (
        <section className="header">
            <canvas id="webgl"></canvas>
        </section>
    )
}