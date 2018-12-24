
var scene=new THREE.Scene();

var camera= new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

var renderer = new THREE.WebGLRenderer()


var geometry= new THREE.CubeGeometry(1,1,1)
var material=new THREE.MeshLambertMaterial({color:0xffffff})
var cube=new THREE.Mesh(geometry,material)

var loader=new THREE.OBJLoader()

initAll()
function initAll () {
	console.log("111")
	renderer.setSize(window.innerWidth,window.innerHeight)
	document.body.appendChild(renderer.domElement)


	//scene.add(cube)
	camera.position.z=500

	



	var plight=new THREE.PointLight(0xee0000,.5,10000)
	plight.position.set(-500,-500,200)

	var dlight=new THREE.DirectionalLight(0x9999ff,1)
	dlight.position.set(1,1,1)


	scene.add(plight,dlight)

	TweenMax.to(plight.position,1,{x:500,repeat:10000,yoyo:true})
	TweenMax.to(plight.position,2,{y:500,repeat:10000,yoyo:true})
	loadMod()
	

}

function render(){
	requestAnimationFrame(render)
	mesh.rotation.y+=.01
	//mesh.rotation.y+=.01
	renderer.render(scene,camera)
}
var mesh
function loadMod(){
	loader.load('mod/test.obj', function(obj) {
    mesh = obj; //储存到全局变量中
    scene.add(obj);
    	render()
    	mesh.position.y=-100
	});
}



