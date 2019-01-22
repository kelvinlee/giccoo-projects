
//============================初始化
var scene=new THREE.Scene();
var camera= new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
//视角，宽高比，近剪切面，远剪切面
var renderer = new THREE.WebGLRenderer({antialias:true,alpha:false})//抗锯齿



initAll()
function initAll () {
	renderer.setClearColor(0xdddddd)//设置背景颜色
	renderer.setSize(window.innerWidth,window.innerHeight)//设置宽高
	renderer.shadowMapEnabled=true
	renderer.shandowMapSoft=true

	document.body.appendChild(renderer.domElement)
	render()

	getStart()
	clickFunc()
}
//============================每帧渲染
function render(){
	requestAnimationFrame(render)
	renderer.render(scene,camera)
}
//============================互动 点击
var raycaster=new THREE.Raycaster()
var mouse=new THREE.Vector2()
function clickFunc(){
	document.addEventListener("touchstart",onDocumentTouchStart,false)
}
function onDocumentTouchStart(_e){
	//_e.preventDefault()

	mouse.x=(_e.touches[0].clientX/window.innerWidth)*2-1
	mouse.y=-(_e.touches[0].clientY/window.innerHeight)*2+1//donElement

	raycaster.setFromCamera(mouse,camera)

	var intersects = raycaster.intersectObjects( scene.children )

	if(intersects.length>0){
		//console.log(intersects[0])
		//console.log(intersects[0].object)
		if(intersects[0].object==egg){
			TweenMax.set(egg.rotation,{x:Math.PI/180*Math.random()*360,y:Math.PI/180*Math.random()*360,z:Math.PI/180*Math.random()*360})
			TweenMax.set(egg.position,{y:20})
			TweenMax.to(egg.rotation,2,{x:Math.PI/2,y:0,z:0,ease:Elastic.easeOut})
			TweenMax.to(egg.position,2,{x:0,y:0,z:0,ease:Bounce.easeOut})
		}
	}

}

// var geometry= new THREE.CubeGeometry(5000,50,5000)
// var material=new THREE.MeshLambertMaterial({color:0xffffff})
// var cube=new THREE.Mesh(geometry,material)

//var loader=new THREE.OBJLoader()

var egg

function getStart(){
	
	//====网格
	var grid=new THREE.GridHelper(50,10,0xffff00,0x888888)//网格辅助(格子尺寸，格子细分数，中线颜色，网格线颜色)
	scene.add(grid)

	//====坐标轴
	var axes = new THREE.AxesHelper(10);//轴辅助
	scene.add(axes)

	//====立方体
	var cubeGeo=new THREE.BoxGeometry(5,5,5)
	var cubeMaterial=new THREE.MeshLambertMaterial({color:0xff0000})
	var cube=new THREE.Mesh(cubeGeo,cubeMaterial)
	cube.castShadow=true
	cube.material=new THREE.MeshLambertMaterial({color:0xffff00})
	//scene.add(cube)

	//====聚光灯
	var spotLight=new THREE.SpotLight(0xffffff,1,1000,Math.PI/180*30,1,0)
	//颜色，强度，范围，光散角度，光锥衰减（光斑边缘模糊1，不模糊0） https://threejs.org/docs/index.html#api/zh/lights/SpotLight
	spotLight.position.set(-10,40,20)
	spotLight.target=cube//默认0,0,0,指定其他物体必须add到scene上
	spotLight.castShadow=true
	//spotLight.shadow.mapSize.width=2048
	//spotLight.shadow.mapSize.height=2048
	var spotLightHelper=new THREE.SpotLightHelper(spotLight)
	scene.add(spotLightHelper)


	//====平面
	var planeGeo=new THREE.PlaneGeometry(60,60,60)
	var planeMaterial=new THREE.MeshLambertMaterial({color:0xffffff})
	var plane=new THREE.Mesh(planeGeo,planeMaterial)
	plane.rotation.x=-Math.PI/2
	plane.position.y=-2.5
	plane.receiveShadow=true
	scene.add(plane)

	scene.add(spotLight)//cube,plane
	camera.position.set(40,40,40)
	camera.lookAt(scene.position)


	var loader = new THREE.GLTFLoader();

	loader.load(
	// resource URL
	'mod/egg.glb',
	// called when the resource is loaded
	function ( gltf ) {
		console.log(gltf.scene)
		egg=gltf.scene.children[2]
		scene.add( gltf.scene.children[2] );

		ModLoaded()
		//egg.material=new THREE.MeshLambertMaterial({color:0xffff00})

		// gltf.animations; // Array<THREE.AnimationClip>
		// gltf.scene; // THREE.Scene
		// gltf.scenes; // Array<THREE.Scene>
		// gltf.cameras; // Array<THREE.Camera>
		// gltf.asset; // Object

	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);




}


function ModLoaded(){
	egg.scale.x=.05
	egg.scale.y=.05
	egg.scale.z=.05
	egg.castShadow=true
	//======摄像机移动
	// TweenMax.to(camera.position,2,{y:100,repeat:10000,ease:Linear.easeNone,yoyo:true,onUpdate:function(){
	// 	camera.lookAt(scene.position)
	// }})
	
	
}


// var mesh
// function loadMod(){
// 	loader.load('mod/test.obj', function(obj) {
//     mesh = obj; //储存到全局变量中
//     scene.add(mesh);
    	
//     	mesh.position.y=-100
//     	mesh.castShadow=true
//     	//mesh.receiveShadow=true
// 	});
// }



