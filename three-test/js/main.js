
//============================初始化
var scene=new THREE.Scene();
var camera= new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
//视角，宽高比，近剪切面，远剪切面
var renderer = new THREE.WebGLRenderer({antialias:true,alpha:false})//抗锯齿
var modNum=0 // 总数
var modLoadedNum=0 // 已加载输
var objs = {} // 模型
var stats = null
var world = new CANNON.World()

var pigShape,pigBody

initAll()
function initAll () {
	renderer.setClearColor(0x000000)//设置背景颜色
	renderer.setSize(window.innerWidth,window.innerHeight)//设置宽高
	renderer.shadowMapEnabled=true
	renderer.shandowMapSoft=true

	document.body.appendChild(renderer.domElement)
	

	loadingMods('mod/pig2.glb',"pig")//模型加载

	//render()
	clickFunc()
	set_envMap()
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
//============================OrbitControls/datGUI 测试设置
var controls,guiControls,datGUI
function setTest(){
	//====OrbitControls
	controls=new THREE.OrbitControls(camera,renderer.domElement)	
	// //====stats.js 性能测试
	stats = new Stats()
	stats.showPanel(1)// 0: fps, 1: ms, 2: mb, 3+: custom
	// console.log(stats);
	document.body.appendChild(stats.domElement)
	stats.domElement.className = "fps"

	//====datGUI
	guiControls	=	new function(){//存放有所有需要改变的属性的对象
		this.rotationX	=	90
		this.ifTrue = true
		this.func=function(){console.log("一个函数")}
		this.target	=	objs.pig
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
		objs.pig.rotation.x=value*Math.PI/180
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
		if(intersects[0].object==objs.pig){
			TweenMax.set(objs.pig.rotation,{x:Math.PI/180*Math.random()*360,y:Math.PI/180*Math.random()*360,z:Math.PI/180*Math.random()*360})
			TweenMax.set(objs.pig.position,{y:20})
			TweenMax.to(objs.pig.rotation,2,{x:Math.PI/2,y:0,z:0,ease:Elastic.easeOut})
			TweenMax.to(objs.pig.position,2,{x:0,y:20,z:0,ease:Bounce.easeOut})
		}
	}

}

//============================模型加载函数 loadingMods('mod/pig2.glb',"pig")
function loadingMods(_url,_target){
	modNum++
	var loader = new THREE.GLTFLoader();

	loader.load(_url,
		function ( gltf ) {		// called when the resource is loaded
			modLoadedNum++
			console.log(gltf.scene)
			objs[_target]=gltf.scene.children[0]
			scene.add(objs[_target])
			loadingCheck()
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
			console.log( 'An error happened', error );
		}
	);
}
function loadingCheck(){
	if(modNum==modLoadedNum){
		console.log("模型加载完成",modLoadedNum,"/",modNum)
		setTest()
		ModLoaded()	
	}else{
		console.log("模型加载中",modLoadedNum,"/",modNum)
	}
}

//====模型加载完成
var newMap
function ModLoaded(){//加载模型完成
	getStart()
	setPhy()
}

//===========================开始
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
	// var spotLight=new THREE.SpotLight(0xffffff,1,1000,Math.PI/180*30,0,0)
	// //颜色，强度，范围，光散角度，光锥衰减（光斑边缘模糊1，不模糊0） https://threejs.org/docs/index.html#api/zh/lights/SpotLight
	// spotLight.position.set(-10,40,20)
	// spotLight.target=cube//默认0,0,0,指定其他物体必须add到scene上
	// spotLight.castShadow=true
	// //spotLight.shadow.mapSize.width=2048
	// //spotLight.shadow.mapSize.height=2048
	// var spotLightHelper=new THREE.SpotLightHelper(spotLight)
	//scene.add(spotLight)
	// scene.add(spotLightHelper)

	// ====环境光
	var ambientLight=new THREE.AmbientLight(0xffffff,.2)
	scene.add(ambientLight)

	//====平行光
	var dLight=new THREE.DirectionalLight(0xffffff,.8)
	dLight.position.set(-100,50,-100)
	//dLight.target=scene
	dLight.castShadow=true
	dLight.shadow.mapSize.width = 4096;  // default
	dLight.shadow.mapSize.height = 4096; // default
	dLight.shadow.camera.near = 0.5;    // default
	dLight.shadow.camera.far = 1000;     // default
	dLight.shadow.camera.left = -100;    // default
	dLight.shadow.camera.right = 100; 
	dLight.shadow.camera.bottom = -100;    // default
	dLight.shadow.camera.top = 100; 
	//dLight.shadowCameraVisible=true
	dLight.radius=1
	//dLight.shadowDarkness=1
	TweenMax.to(dLight.position,2,{x:100,repeat:100000,yoyo:true,ease:Sine.easeInOut,delay:1})
	TweenMax.to(dLight.position,2,{z:100,repeat:100000,yoyo:true,ease:Sine.easeInOut})
	//TweenMax.to(dLight.position,8,{y:200,repeat:100000,yoyo:true,ease:Sine.easeInOut})
	scene.add(dLight)


	//====平面
	var planeGeo=new THREE.PlaneGeometry(60,60,60)
	var planeMaterial=new THREE.MeshLambertMaterial({color:0xffffff})
	var plane=new THREE.Mesh(planeGeo,planeMaterial)
	plane.rotation.x=-Math.PI/2
	plane.position.y=0
	plane.receiveShadow=true
	scene.add(plane)

	//cube,plane
	camera.position.set(40,40,40)
	camera.lookAt(scene.position)



	objs.pig.position.y=10
	objs.pig.scale.x=.1
	objs.pig.scale.y=.1
	objs.pig.scale.z=.1
	objs.pig.castShadow=true
	// //======摄像机移动
	// TweenMax.to(camera.position,2,{y:100,repeat:10000,ease:Linear.easeNone,yoyo:true,onUpdate:function(){
	// 	camera.lookAt(scene.position)
	// }})
	
	//var texture = new THREE.TextureLoader().load( 'img/pig.jpg' );


	var pigmap=objs.pig.material.map
	//console.log(pig.material.map)
	//var pigMat=new THREE.MeshToonMaterial({map:pigmap,envMap:environment,reflectivity:0.2})
	//var pigMat=new THREE.MeshToonMaterial({map:pigmap,envMap:environment,reflectivity:0,shininess:10,specular:0xff3388})//normalMap:pigmap,normalMapType:THREE.ObjectSpaceNormalMap
	var pigMat=new THREE.MeshBasicMaterial({map:pigmap,envMap:environment,reflectivity:0})
	//var pigMat=new THREE.MeshStandardMaterial({map:pigmap})
	objs.pig.material=pigMat
	//TweenMax.set(pig.scale,{x:.105,y:.105,z:.095})
	//TweenMax.to(pig.scale,1.25,{x:.12,y:.12,z:.08,repeat:1000000,yoyo:true,ease:Sine.easeInOut})
}


//============================物理引擎

function setPhy(){
	console.log("objs.pig.geometry",objs.pig.geometry)
	//console.log("objs.pig.BufferAttribute",objs.pig)
	
	world.gravity.set(0, -10, 0)
	world.broadphase = new CANNON.NaiveBroadphase()//NaiveBroadphase

	pigShape=new CANNON.Sphere(10)//====猪
	pigBody=new CANNON.Body({
		mass:5,
		position:new CANNON.Vec3(0,10,0),
		shape:pigShape
	})
	world.add(pigBody)

	groundShape=new CANNON.Plane()//====地面
	groundBody=new CANNON.Body({
		mass:0,
		shape:groundShape
	})
	groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2)
	world.add(groundBody)
	render()
}
//============================每帧渲染
var cannonDebugRenderer=new THREE.CannonDebugRenderer(scene,world)//===物理引擎辅助
function render(){
	stats.begin()
	
	requestAnimationFrame(render)
	renderer.render(scene,camera)
	if(world){
		world.step(1/60)
	}
	if(objs.pig){
	 objs.pig.position.copy(pigBody.position)
	 objs.pig.quaternion.copy(pigBody.quaternion)

		// objs.pig.position=pigBody.position
		// objs.pig.quaternion=pigBody.quaternion
	}
	cannonDebugRenderer.update()

	stats.end()
}

