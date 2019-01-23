
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
	setTest()
	render()

	getStart()
	clickFunc()
	set_envMap()
}
//============================每帧渲染
function render(){
	requestAnimationFrame(render)
	renderer.render(scene,camera)
}
//============================OrbitControls/datGUI 测试设置
var controls,guiControls,datGUI

function setTest(){
	controls=new THREE.OrbitControls(camera,renderer.domElement)	

	guiControls	=	new function(){//存放有所有需要改变的属性的对象
		this.rotationX	=	90
		this.ifTrue = true
		this.func=function(){console.log("一个函数")}
		this.target	=	pig
	}

	datGUI=new dat.GUI()//创建dat.GUI，传递并设置属性
	// datGUI.add(guiControls,"rotationX",0.1)//输入框
	// datGUI.add(guiControls,"rotationX",0,Math.PI*2).step(Math.PI/180)//滑杆，步长
	// datGUI.add(guiControls,"rotationX").min(0).max(19)//大小
	// datGUI.add(guiControls,"rotationX",{aaa:0,bbb:90,ccc:180})//选项
	// datGUI.add(guiControls,"ifTrue",true)
	// datGUI.add(guiControls,"func")
	//http://www.hangge.com/blog/cache/detail_1785.html 其他使用方法

	datGUI.add(guiControls,"rotationX",0,360).step(1).onChange(function(value){
		pig.rotation.x=value*Math.PI/180
	})
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
		if(intersects[0].object==pig){
			TweenMax.set(pig.rotation,{x:Math.PI/180*Math.random()*360,y:Math.PI/180*Math.random()*360,z:Math.PI/180*Math.random()*360})
			TweenMax.set(pig.position,{y:20})
			TweenMax.to(pig.rotation,2,{x:Math.PI/2,y:0,z:0,ease:Elastic.easeOut})
			TweenMax.to(pig.position,2,{x:0,y:0,z:0,ease:Bounce.easeOut})
		}
	}

}
//============================环境贴图

var environment
function set_envMap(){
	environment = new THREE.CubeTextureLoader()
	.setPath( 'img/' )
	.load( [
		'px.jpg',
		'nx.jpg',
		'py.jpg',
		'ny.jpg',
		'pz.jpg',
		'nz.jpg'
	] );
}


//============================模型

var pig,bag,pigG

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
	var spotLight=new THREE.SpotLight(0xffffff,1,1000,Math.PI/180*30,0,0)
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
	//scene.add(plane)

	scene.add(spotLight)//cube,plane
	camera.position.set(40,40,40)
	camera.lookAt(scene.position)


	//====模型
	var loader = new THREE.GLTFLoader();

	loader.load(
	// resource URL
	'mod/pig.glb',
		// called when the resource is loaded
		function ( gltf ) {
			console.log(gltf.scene)
			pig=gltf.scene.children[0]
			scene.add(pig)
			pig.position.y=10

			//scene.add( gltf.scene );

			ModLoaded()
			//pig.material=new THREE.MeshLambertMaterial({color:0xffff00})

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
	// pig.scale.x=.5
	// pig.scale.y=.5
	// pig.scale.z=.5
	// pig.castShadow=true

	pig.scale.x=.1
	pig.scale.y=.1
	pig.scale.z=.1
	pig.castShadow=true
	//======摄像机移动
	// TweenMax.to(camera.position,2,{y:100,repeat:10000,ease:Linear.easeNone,yoyo:true,onUpdate:function(){
	// 	camera.lookAt(scene.position)
	// }})

	var pigmap=pig.material.map
	//console.log(pig.material.map)
	//var pigMat=new THREE.MeshToonMaterial({map:pigmap,envMap:environment,reflectivity:0.2})
	var pigMat=new THREE.MeshToonMaterial({map:pigmap,envMap:environment,reflectivity:0})
	pig.material=pigMat
}






