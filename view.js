var width = 600; // Set your desired width
var height = 380;

var scene = new THREE.Scene();

// Your Three.js code goes here
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

// var geometry = new THREE.BoxGeometry();
// var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// var cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

camera.position.z = 5;

var animate = function () {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
};

animate();

const form = document.querySelector('form');
form.addEventListener('change', function (e) {
    console.log('called to change')
    e.preventDefault()
    const xbox1 = document.getElementById('xAxis').value
    const ybox1 = document.getElementById('yAxis').value
    const zbox1 = document.getElementById('zAxis').value
    const xScale = document.getElementById('xScale').value
    const yScale = document.getElementById('yScale').value
    const zScale = document.getElementById('zScale').value

    if (xbox1 && ybox1 && zbox1) {
        var geometry = new THREE.BoxGeometry();
        var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        var cube1 = new THREE.Mesh(geometry, material);
        cube1.position.x = xbox1
        cube1.position.y = ybox1
        cube1.position.z = zbox1
        scene.add(cube1)
    }

    animate()
});

document.getElementById('snapX').onclick = function(e) {
    e.preventDefault()
    console.log('snap x')

}

document.getElementById('snapX').onclick = function(e) {
    e.preventDefault()
    console.log('snap y')

}

document.getElementById('snapX').onclick = function(e) {
    e.preventDefault()
    console.log('snap z')

}

document.getElementById('snapXY').onclick = function(e) {
    e.preventDefault()
    console.log('snap Xy')

}

document.getElementById('snapXY').onclick = function(e) {
    e.preventDefault()
    console.log('snap Yz')

}

document.getElementById('snapXZ').onclick = function(e) {
    e.preventDefault()
    console.log('snap xz')

}

// const textSpan = document.getElementById('hoverText');

// Event listener for mouse enter
// textSpan.addEventListener('mouseenter', function (event) {
//     // "Blacken" the text
//     event.target.classList.add('blacked');
// });

// // Event listener for mouse leave
// textSpan.addEventListener('mouseleave', function (event) {
//     // Remove "blacken" effect
//     event.target.classList.remove('blacked');
// });

// // Event listener for click
// textSpan.addEventListener('click', function (event) {
//     // Retrieve the text content
//     const text = event.target.textContent;
//     console.log("Text:", text);
// });


// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     // Handle the received message
//     console.log("Received view message:", message);

//     var verticesArray = new Uint8Array(message);

//     // Convert Uint8Array to Float32Array
//     var float32VerticesArray = new Float32Array(verticesArray.buffer);

//     // Create BufferGeometry and set vertices
//     var geometry = new THREE.BufferGeometry();
//     geometry.setAttribute('position', new THREE.BufferAttribute(float32VerticesArray, 3));
//     // Create material for the mesh
//     var material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Example material, you can change properties as needed

//     // Create mesh by combining geometry and material
//     var mesh = new THREE.Mesh(geometry, material);
//     console.log('mesh = ', mesh)
//     // Do whatever you want with the received data
//     scene.add(mesh);
//     animate();
// });