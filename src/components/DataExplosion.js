import React, { Component } from 'react';
import * as THREE from 'three';
import SlideTitle from './SlideTitle';
import './DataExplosion.scss';

export default class DataExplosion extends Component {

   constructor(props) {
        
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

        function createCanvasMaterial(colour, size) {
            var matCanvas = document.createElement('canvas');
            matCanvas.width = matCanvas.height = size;
            var matContext = matCanvas.getContext('2d');
            // create exture object from canvas.
            var texture = new THREE.Texture(matCanvas);
            // Draw a circle
            var center = size / 2;
            matContext.globalAlpha = 0.8;
            matContext.beginPath();
            matContext.arc(center, center, size / 2, 0, 2 * Math.PI, false);
            matContext.closePath();
            matContext.fillStyle = colour;
            matContext.fill();
            // need to set needsUpdate
            texture.needsUpdate = true;

            return texture;
        }

        function animate() {

            requestAnimationFrame(animate);
            rendr();
        }

        function rendr() {
            var time = Date.now() * 0.00005;
            for (i = 0; i < scene.children.length; i++) {
                var object = scene.children[i];
                if (object instanceof THREE.Points) {
                    object.rotation.x = time * -1;
                }
            }
            renderer.render(scene, camera);
        }

        var container;
        var camera, scene, renderer, particles, geometry, materials = [], colours, i, h, colour, size;
        var mouseX = 0, mouseY = 0;

        var windowHalfX = window.innerWidth / 2;
        var windowHalfY = window.innerHeight / 2;

        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 3000);
        camera.position.z = 1000;

        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x000000, 0.0007);

        geometry = new THREE.Geometry();

        for (i = 0; i < 4000; i++) {

            var vertex = new THREE.Vector3();
            vertex.x = Math.random() * 2000 - 1000;
            vertex.y = Math.random() * 2000 - 1000;
            vertex.z = Math.random() * 2000 - 1000;

            geometry.vertices.push(vertex);

        }

        colours = [
            [[1, 0, 0.8]],
            [[1, 0, 0.7]],
            [[1, 0, 0.6]],
            [[1, 0, 0.5]],
            [[1, 0, 0.4]],
        ];

        for (i = 0; i < colours.length; i++) {

            colour = colours[i][0];
            size = 2;

            var hexColour = new THREE.Color(colour[0], colour[1], colour[2]).getHexString();
            materials[i] = new THREE.PointsMaterial({
                size: 2,
                map: createCanvasMaterial('#' + hexColour, 256),
                transparent: true,
                depthWrite: false
            });

            particles = new THREE.Points(geometry, materials[i]);

            particles.rotation.x = Math.random() * 20;
            particles.rotation.y = Math.random() * 20;
            particles.rotation.z = Math.random() * 20;

            scene.add(particles);

        }

        renderer = new THREE.WebGLRenderer({canvas: this.canvas});
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        animate();
    }

	render() {
		return (
			<div className="slide data-explosion">
                <canvas ref={c=> this.canvas = c}></canvas>
                <SlideTitle value="The Data Explosion" showTimeout="1500" />
			</div>
		);
	}
}
