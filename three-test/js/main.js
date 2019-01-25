
//============================初始化

var scene=new THREE.Scene();
var camera= new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,100000);
//视角，宽高比，近剪切面，远剪切面
var renderer = new THREE.WebGLRenderer({antialias:true,alpha:false})//抗锯齿
var modNum=0 // 总数
var modLoadedNum=0 // 已加载输
var objs = {} // 模型
var stats = null
var world = new CANNON.World()

var rootPoint,rootPointBody//总固定点
var pigShape,pigBody


initAll()
function initAll () {
	renderer.setClearColor(0xffffff)//设置背景颜色
	renderer.setSize(window.innerWidth,window.innerHeight)//设置宽高
	renderer.shadowMapEnabled=true
	renderer.shandowMapSoft=true

	document.body.appendChild(renderer.domElement)
	

	loadingMods('mod/pig2.glb',"pig")//模型加载
	loadingMods('mod/foot.glb',"foot")//模型加载

	//render()
	//animate()//===动画
	clickFunc()
	set_envMap()
}
//============================每帧渲染：更新物理+画面

var cannonDebugRenderer=new THREE.CannonDebugRenderer(scene,world)//===物理引擎辅助
var meshes=[],bodies=[]
function animate() {
	stats.begin()
  requestAnimationFrame( animate );
  updatePhysics();
  render();
  stats.end()
}

function updatePhysics(){
  world.step(1/60);
  for(var i=0; i !== meshes.length; i++){
    meshes[i].position.copy(bodies[i].position);//========meshes[]里放THREE模型，bodies[]里放物理CANNON的 body模型
    meshes[i].quaternion.copy(bodies[i].quaternion);
  }
  //cannonDebugRenderer.update()
}

function render() {

	//startP=new CANNON.Vec3(2,-11.46146,0).vadd(pigBody.position)
	var antiRot=pigBody.quaternion//.inverse()
	startP=antiRot.vmult(new CANNON.Vec3(2,-9,0)).vadd(pigBody.position)
	//startP=pigBody.position
	
	var leftFootCurve = new THREE.CatmullRomCurve3( [
		vec3toVector3(startP),vec3toVector3(leftFootJointBody.position),vec3toVector3(leftFootBody.position)
	] );
	leftLegGeo.copy( new THREE.TubeBufferGeometry( leftFootCurve, 20, 1.3, 8, false ))


	
  renderer.render(scene, camera);
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
		this.X	=	0
		this.Y	=	150
		this.Z	=	0
		this.ifTrue = true
		this.func=function(){console.log("一个函数")}
		this.target	=	rootPointBody
	}

	datGUI=new dat.GUI()//创建dat.GUI，传递并设置属性
	// datGUI.add(guiControls,"rotationX",0.1)//输入框
	// datGUI.add(guiControls,"rotationX",0,Math.PI*2).step(Math.PI/180)//滑杆，步长
	// datGUI.add(guiControls,"rotationX").min(0).max(19)//大小
	// datGUI.add(guiControls,"rotationX",{aaa:0,bbb:90,ccc:180})//选项
	// datGUI.add(guiControls,"ifTrue",true)
	// datGUI.add(guiControls,"func")
	//http://www.hangge.com/blog/cache/detail_1785.html 其他使用方法

	datGUI.add(guiControls,"X",-100,100).step(1).onChange(function(value){		rootPointBody.position.x=value	})
	datGUI.add(guiControls,"Y",		0,200).step(1).onChange(function(value){		rootPointBody.position.y=value	})
	datGUI.add(guiControls,"Z",-100,100).step(1).onChange(function(value){		rootPointBody.position.z=value	})
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
			// TweenMax.set(objs.pig.rotation,{x:Math.PI/180*Math.random()*360,y:Math.PI/180*Math.random()*360,z:Math.PI/180*Math.random()*360})
			// TweenMax.set(objs.pig.position,{y:20})
			// TweenMax.to(objs.pig.rotation,2,{x:Math.PI/2,y:0,z:0,ease:Elastic.easeOut})
			// TweenMax.to(objs.pig.position,2,{x:0,y:20,z:0,ease:Bounce.easeOut})


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
function ModLoaded(){//加载模型完成
	getStart()
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
	var cubeGeo=new THREE.BoxGeometry(1,1,1)
	var cubeMaterial=new THREE.MeshBasicMaterial({color:0xffff00})
	rootPoint=new THREE.Mesh(cubeGeo,cubeMaterial)
	scene.add(rootPoint)

	// ====环境光
	var ambientLight=new THREE.AmbientLight(0xffffff,.5)
	scene.add(ambientLight)

	//====平行光
	var dLight=new THREE.DirectionalLight(0xffffff,.5)
	dLight.position.set(0,50,0)
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

	// TweenMax.to(dLight.position,2,{x:100,repeat:100000,yoyo:true,ease:Sine.easeInOut,delay:1})//光源旋转
	// TweenMax.to(dLight.position,2,{z:100,repeat:100000,yoyo:true,ease:Sine.easeInOut})
	scene.add(dLight)


	//====平面
	var planeGeo=new THREE.PlaneGeometry(600,600,60)
	var planeMaterial=new THREE.MeshLambertMaterial({color:0xffffff})
	var plane=new THREE.Mesh(planeGeo,planeMaterial)
	plane.rotation.x=-Math.PI/2
	plane.position.y=-10
	plane.receiveShadow=true
	scene.add(plane)

	//====摄像机
	camera.position.set(40,40,40)
	camera.lookAt(scene.position)

	//====猪位置
	objs.pig.position.y=10
	objs.pig.scale.set(.1,.1,.1)
	objs.pig.castShadow=true

	var pigmap=objs.pig.material.map
	//console.log(pig.material.map)
	//var pigMat=new THREE.MeshToonMaterial({map:pigmap,envMap:environment,reflectivity:0.2})
	//var pigMat=new THREE.MeshToonMaterial({map:pigmap,envMap:environment,reflectivity:0,shininess:10,specular:0xff3388})//normalMap:pigmap,normalMapType:THREE.ObjectSpaceNormalMap
	var pigMat=new THREE.MeshBasicMaterial({map:pigmap,envMap:environment,reflectivity:0})
	//var pigMat=new THREE.MeshStandardMaterial({map:pigmap})
	objs.pig.material=pigMat
	//TweenMax.set(pig.scale,{x:.105,y:.105,z:.095})
	//TweenMax.to(pig.scale,1.25,{x:.12,y:.12,z:.08,repeat:1000000,yoyo:true,ease:Sine.easeInOut})

	setPhy()
	setLeftFoot()
	animate()
}



//============================物理引擎

function setPhy(){
	
	//====设置世界
	world.gravity.set(0, -40, 0)
	world.broadphase = new CANNON.NaiveBroadphase()//NaiveBroadphase

	//====总固定点
	rootPointBody=new CANNON.Body({
		mass:0,
		position:new CANNON.Vec3(0,150,0)
	})
	world.add(rootPointBody)
	meshes.push(rootPoint)
	bodies.push(rootPointBody)

	//====猪
	pigBody=new CANNON.Body({
		mass:5,
		position:new CANNON.Vec3(0,20,0),
		//shape:pigShape
	})
	setMeshPhy(objs.pig,pigBody,0.1)//=====加物理外形
	world.add(pigBody)
	meshes.push(objs.pig)
	bodies.push(pigBody)


	//=====链接猪和起始点(pigBody+rootPointBody)
	// var v1=new CANNON.Vec3(0,130,0).vsub(pigBody.position)
	// var antiRot=pigBody.quaternion.inverse()
	// var pivot=antiRot.vmult(v1)
	//body_rootConstraint = new CANNON.PointToPointConstraint(pigBody, pivot, rootPointBody, new CANNON.Vec3(0,0,0),10);
	body_rootConstraint = new CANNON.PointToPointConstraint(pigBody, new CANNON.Vec3(0,130,0), rootPointBody, new CANNON.Vec3(0,0,0),10);
	world.addConstraint(body_rootConstraint);



	groundShape=new CANNON.Plane()//====地面
	groundBody=new CANNON.Body({
		mass:0,
		shape:groundShape
	})
	groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2)
	groundBody.position.set(0,-10,0)
	world.add(groundBody)
	
}

