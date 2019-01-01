/*
function sceneDesign() {

  // add obstacles to the scene
  scene.obstacles = [];
  scene.obstacles.push ( new Obstacle (new THREE.Vector3(150,0,150), 50) )
  scene.obstacles.push ( new Obstacle (new THREE.Vector3(-100,0,200), 30) )
  scene.obstacles.push ( new Obstacle (new THREE.Vector3(0,0,-100), 60) )
    
  scene.targets = [];
  scene.targets.push (new Target (1, new THREE.Vector3 (300,0,300) ));
  scene.targets.push (new Target (2, new THREE.Vector3 (-200,0,150) ));
  scene.targets.push (new Target (3, new THREE.Vector3 (250,0,-200) ));
  scene.targets.push (new Target (4, new THREE.Vector3 (0,0,-200) ));

}
*/

function sceneFromJSON () {
const JSONStr = '{"obstacles":[{"center":{"x":-91.30045414388076,"y":3.489260339393748e-14,"z":-157.14231564292334},"size":20},{"center":{"x":-154.7691506311132,"y":-3.669291634170455e-14,"z":165.2502043636374},"size":20},{"center":{"x":108.24876514474819,"y":4.798631668939338e-14,"z":295.88884203876535},"size":20},{"center":{"x":240.12644248813814,"y":2.172517254197676e-14,"z":-97.84147896460627},"size":20},{"center":{"x":21.042071631996603,"y":1.0127156934043821e-13,"z":55.91339805517714},"size":20},{"center":{"x":-281.4377080779595,"y":-1.2415268381171738e-14,"z":55.91339805514974},"size":20},{"center":{"x":-17.732542559850994,"y":5.3894799184615425e-14,"z":269.27940247495826},"size":20},{"center":{"x":196.3903020339872,"y":7.771582866956942e-14,"z":161.99902296293783},"size":20},{"center":{"x":86.63101161918371,"y":1.5437611709149303e-13,"z":-183.24822340815206},"size":20},{"center":{"x":-214.00445439669875,"y":1.75543741070387e-14,"z":-79.05787268718177},"size":20}],"targets":[{"id":0,"pos":{"x":293.8949377566764,"y":9.790246746097215e-14,"z":71.0864840241137}},{"id":1,"pos":{"x":-103.46688378156642,"y":1.291944753015418e-13,"z":-69.84019082635041}},{"id":2,"pos":{"x":-158.12997958267,"y":-5.857638765775393e-14,"z":263.8045976281703}},{"id":3,"pos":{"x":171.99701084848346,"y":4.6267034768463265e-14,"z":303.63179945721106}}]}'
  
  let myScene = JSON.parse (JSONStr);
  
  scene.obstacles = []
  myScene.obstacles.forEach (function (obs) {
  	scene.obstacles.push (new Obstacle (new THREE.Vector3 (obs.center.x, obs.center.y, obs.center.z), 30))
  })
  
  scene.targets = []
  myScene.targets.forEach (function (tt) {
  	scene.targets.push (new Target (tt.id, new THREE.Vector3 (tt.pos.x, tt.pos.y, tt.pos.z) ))
  })

}