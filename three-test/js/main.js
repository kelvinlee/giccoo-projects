
var scene=new THREE.Scene();

var camera= new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

var renderer = new THREE.WebGLRenderer()


var geometry= new THREE.CubeGeometry(5000,50,5000)
var material=new THREE.MeshLambertMaterial({color:0xffffff})
var cube=new THREE.Mesh(geometry,material)

var loader=new THREE.OBJLoader()

initAll()
function initAll () {
	console.log("111")
	renderer.setSize(window.innerWidth,window.innerHeight)
	document.body.appendChild(renderer.domElement)


	scene.add(cube)
	camera.position.z=1000
	cube.position.set(0,-300,0)
	cube.receiveShadow=true



	var plight=new THREE.PointLight(0xee0000,.5,10000)
	plight.position.set(-500,-500,200)

	var dlight=new THREE.DirectionalLight(0xffffff,1)
	dlight.position.set(0,1,0)


	renderer.shadowMapEnabled=true;
	renderer.shadowMapSoft=true;

	scene.add(dlight)

	dlight.castShadow=true
	//plight.castShadow=true

	TweenMax.to(plight.position,1,{x:500,repeat:10000,yoyo:true})
	TweenMax.to(plight.position,2,{y:500,repeat:10000,yoyo:true})
	loadMod()
	

}

function render(){
	requestAnimationFrame(render)
	mesh.rotation.y+=.01
	cube.rotation.y+=.01
	renderer.render(scene,camera)
}
var mesh
function loadMod(){
	loader.load('mod/test.obj', function(obj) {
    mesh = obj; //储存到全局变量中
    scene.add(mesh);
    	render()
    	mesh.position.y=-100
    	mesh.castShadow=true
    	//mesh.receiveShadow=true
	});
}



