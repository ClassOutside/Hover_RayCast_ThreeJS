import * as THREE from 'three';
import { LoadGLTFByPath } from '../helpers/ModelHelper.js'
import { setupRenderer } from '../helpers/RendererHelper.js'
import { getCardObjects, flipCards } from '../helpers/CardHelper.js'
import { checkRayIntersections, getMouseVector2 } from '../helpers/RayCastHelper.js'
import { getFirstCameraInScene, updateCameraAspect } from '../helpers/CameraHelper.js'

const scenePath = './src/models/scene.gltf'

export async function setupScene(canvas) {

	const scene = new THREE.Scene();
	const renderer = setupRenderer();	
	let camera;
	let mousePointer = new THREE.Vector2();
	const raycaster = new THREE.Raycaster();
	const flippedCardsList = [];

	// Load the GLTF model
	await LoadGLTFByPath(scene, scenePath)
		.then(() => {
			camera = getFirstCameraInScene(scene);
			updateCameraAspect(camera);
		})
		.catch((error) => {
			console.error('Error loading JSON scene:', error);
	});

	scene.add(camera);

	//Add listener to call onMouseMove every time the mouse moves in the browser window
	document.addEventListener('mousemove', onMouseMove, false);

	//A function to be called every time the mouse moves
	function onMouseMove(event) {
		mousePointer = getMouseVector2(event, window);

		const getFirstValue = true;

		const intersections = checkRayIntersections(mousePointer, camera, raycaster, scene, getFirstValue);
		
		const cardList = getCardObjects(intersections);
		flipCards(cardList, flippedCardsList);
	}

	// Animate the scene
	function animate() {
		requestAnimationFrame(animate);

		renderer.render(scene, camera);
	}
	animate();
};
