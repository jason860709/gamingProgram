/////////////////////////////////////////////////////////
// global variables
var camera, renderer;
var agent;
var hit = 0;
// program starts here ...
init();
animate();

function init() {

  initThree();
  
  //scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 5000);
  camera.position.z = 500;
  camera.position.y = 400;


  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x888888);

  let controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);

  /////////////////////////////////////////////////////////////////////

  
  // scene grid [-400,400]x[-400,400]
  var gridXZ = new THREE.GridHelper(800, 80, 'red', 'white');
  scene.add(gridXZ);

  // in scene.js
  sceneFromJSON ( );  // using LevelDesigner
  
  //////////////////////////////////////////////////////////////////////////	
  	let size = 10; // halfsize of agent
//    agent = new Agent(new THREE.Vector3(-400 + 400 * Math.random(), 0, -400 + 400 * Math.random()), mesh);
    agent = new Agent(new THREE.Vector3(50,0,-50), size);

}

function startTimer(display) {
    var timer = 0, minutes, seconds;
	var star = null;
	var countTime = function (){
		if (scene.targets.length > 0) {
			console.log(scene.targets.length);
			if(hit === 1){
				timer += 5;
				hit += 1;
			}
			timer++;
		}
		else {
			console.log("stop")
			alert("Cost " + minutes + ":" + seconds + " time!!" + "The score is " + agent.score);
			clearInterval(star);
		}
		minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
    };
    star = setInterval(countTime, 1000);
	
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(display);
};


function animate() {

  agent.update(0.01)
  
  // check agent crossing obstacles ...
  scene.obstacles.forEach ( function (obs) { obs.checkCollision (agent)} );
  
  	requestAnimationFrame(animate);


  render();
}

function render() {
  renderer.render(scene, camera);
}

