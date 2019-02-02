
//============================初始化

var scene=new THREE.Scene();
//var camera= new THREE.PerspectiveCamera(90,window.innerWidth/window.innerHeight,0.1,200);//OrthographicCamera
var camera= new THREE.OrthographicCamera(window.innerWidth/window.innerHeight*80/-2,window.innerWidth/window.innerHeight*80/2,40,-40,0.1,200);
//视角，宽高比，近剪切面，远剪切面
var renderer = new THREE.WebGLRenderer({antialias:true,alpha:false})//抗锯齿
var modNum=0 // 总数
var modLoadedNum=0 // 已加载输
var objs = {} // 模型
var stats = null
var world = new CANNON.World()

var rootPoint,rootPointBody//总固定点
var pigShape,pigBody

var ifFirsTime=true

function initAll () {
	if(ifFirsTime==true){
		ifFirsTime=false
		console.log("啦啦啦啦啦")
		renderer.setClearColor(0xfff5d0)//设置背景颜色
		renderer.setSize(window.innerWidth,window.innerHeight)//设置宽高
		renderer.shadowMap.type=THREE.PCFSoftShadowMap//.BasicShadowMap.PCFShadowMap.PCFSoftShadowMap
		renderer.setPixelRatio(2)
		renderer.shadowMapEnabled=true
		//renderer.shadowMapSoft=true
		// document.body.appendChild()
		loadingMods('mod/pig4.glb',["pig"],"addScene")//模型加载
		loadingMods('mod/foot.glb',["foot"])//模型加载
		loadingMods('mod/gift1.glb',["gift1"])
		loadingMods('mod/gift2.glb',["gift2"])
		loadingMods('mod/gift3.glb',["gift3"])
		loadingMods('mod/gift4.glb',["gift4"])
		//render()
		//animate()//===动画
		clickFunc()
		//set_envMap()

		return renderer.domElement
	}
	

}
//============================每帧渲染：更新物理+画面

var cannonDebugRenderer=new THREE.CannonDebugRenderer(scene,world)//===物理引擎辅助
var meshes=[],bodies=[]
function animate() {
	//stats.begin()
  requestAnimationFrame( animate );
  updatePhysics();
  render();
  //stats.end()
}

function updatePhysics(){
  world.step(3/60);
  for(var i=0; i !== meshes.length; i++){
    meshes[i].position.copy(bodies[i].position);//========meshes[]里放THREE模型，bodies[]里放物理CANNON的 body模型
    meshes[i].quaternion.copy(bodies[i].quaternion);
  }
  //cannonDebugRenderer.update()//======物理线框Gird
}

function render() {
	updateArmLegs()
  renderer.render(scene, camera);
}



//============================环境贴图

// var environment
// function set_envMap(){
// 	environment = new THREE.CubeTextureLoader()
// 	.setPath( 'img/' )
// 	.load( [
// 		'px.jpg',
// 		'nx.jpg',
// 		'py.jpg',
// 		'ny.jpg',
// 		'pz.jpg',
// 		'nz.jpg'
// 	] );
// }



//============================OrbitControls/datGUI 测试设置

var controls,guiControls,datGUI
function setTest(){
	//====OrbitControls
	controls=new THREE.OrbitControls(camera,renderer.domElement)	
	controls.enabled=false;
	// //====stats.js 性能测试
	// stats = new Stats()
	// stats.showPanel(1)// 0: fps, 1: ms, 2: mb, 3+: custom
	// // console.log(stats);
	// document.body.appendChild(stats.domElement)
	// stats.domElement.className = "fps"

	//====datGUI
	guiControls	=	new function(){//存放有所有需要改变的属性的对象
		this.X	=	0
		this.Y	=	150
		this.Z	=	0
		this.ifTrue = true
		this.func=function(){console.log("一个函数")}
		this.target	=	rootPointBody
	}

	// datGUI=new dat.GUI()//创建dat.GUI，传递并设置属性
	// // datGUI.add(guiControls,"rotationX",0.1)//输入框
	// // datGUI.add(guiControls,"rotationX",0,Math.PI*2).step(Math.PI/180)//滑杆，步长
	// // datGUI.add(guiControls,"rotationX").min(0).max(19)//大小
	// // datGUI.add(guiControls,"rotationX",{aaa:0,bbb:90,ccc:180})//选项
	// // datGUI.add(guiControls,"ifTrue",true)
	// // datGUI.add(guiControls,"func")
	// //http://www.hangge.com/blog/cache/detail_1785.html 其他使用方法

	// datGUI.add(guiControls,"X",-100,100).step(1).onChange(function(value){		rootPointBody.position.x=value	})
	// datGUI.add(guiControls,"Y",		0,200).step(1).onChange(function(value){		rootPointBody.position.y=value	})
	// datGUI.add(guiControls,"Z",-100,100).step(1).onChange(function(value){		rootPointBody.position.z=value	})
}



//============================互动 点击

var raycaster=new THREE.Raycaster()
var mouse=new THREE.Vector2()
var intersects=[]
var mouseConstraint = void 0;
function clickFunc(){
	renderer.domElement.addEventListener("touchstart",onDocumentTouchStart,false)
	renderer.domElement.addEventListener("touchmove",onDocumentTouchMove,{passive: false})
	renderer.domElement.addEventListener("touchend",onDocumentTouchEnd,false)
}
var lastX,lastY,lastDirX,lastDirY,entropy=0
var MIN_DISTANCE_PER_SHAKE=20
var ENTROPY_PER_SHAKE=1
var MAX_ENTROPY=[1,2,3,4,6,8,16,16]
var level=0
function onDocumentTouchStart(_e){
	_e.preventDefault()

	mouse.x=(_e.touches[0].clientX/window.innerWidth)*2-1
	mouse.y=-(_e.touches[0].clientY/window.innerHeight)*2+1//donElement

	raycaster.setFromCamera(mouse,camera)
	intersects = []
	//intersects = raycaster.intersectObjects( scene.children )
	raycaster.intersectObjects( meshes ,false,intersects)

	if(intersects.length>0){
		//console.log(intersects[0])
		//console.log(intersects[0].object)
		// if(intersects[0].object==objs.pig){
		// 	// TweenMax.set(objs.pig.rotation,{x:Math.PI/180*Math.random()*360,y:Math.PI/180*Math.random()*360,z:Math.PI/180*Math.random()*360})
		// 	// TweenMax.set(objs.pig.position,{y:20})
		// 	// TweenMax.to(objs.pig.rotation,2,{x:Math.PI/2,y:0,z:0,ease:Elastic.easeOut})
		// 	// TweenMax.to(objs.pig.position,2,{x:0,y:20,z:0,ease:Bounce.easeOut})


		// }
		//world.removeConstraint(body_rootConstraint);
		//world.gravity.set(0,0,0)

		lastX=_e.touches[0].clientX
		lastY=_e.touches[0].clientY


		console.log("intersects[0].object.userData.body",intersects[0].object.userData.body)
		var body=intersects[0].object.userData.body
		if(!body) return;
		if(intersects[0].object.userData.isGift){
			body.angularVelocity=new CANNON.Vec3(Math.random()*4-2,Math.random()*4-2,Math.random()*4-2)//随机旋转
			body.velocity=new CANNON.Vec3(Math.random()*20-10,Math.random()*30,-Math.random()*45)//随机速度

		}else{
			controls.enabled=false;
			var pos = body.position;
			pickingPlane.position.copy(pos)
			pickingPlane.quaternion.copy(camera.quaternion)
			addMouseConstraint(pos.x,pos.y,pos.z,body)
			eyeBlink()
			SOUND.runRandomHit()
			return;
		}
		
	}
}
function onDocumentTouchMove(_e){
	_e.preventDefault()
	mouse.x=(_e.touches[0].clientX/window.innerWidth)*2-1
	mouse.y=-(_e.touches[0].clientY/window.innerHeight)*2+1//donElement
  if (mouseConstraint) {

                var deltaX = _e.touches[0].clientX - lastX;
                var deltaY = _e.touches[0].clientY - lastY;
                var dirX = deltaX < 0 ? -1 : 1;
                var dirY = deltaY < 0 ? -1 : 1;

               	
                if (Math.abs(deltaX) >= MIN_DISTANCE_PER_SHAKE && dirX !== 0 && lastDirX !== dirX) {
                    lastDirX = dirX;
                    entropy += ENTROPY_PER_SHAKE;
                    //console.log(entropy)
                    
                }
                if (Math.abs(deltaY) >= MIN_DISTANCE_PER_SHAKE && dirY !== 0 && lastDirY !== dirY) {
                    lastDirY = dirY;
                    entropy += ENTROPY_PER_SHAKE;
                }
                lastX = _e.touches[0].clientX;
                lastY = _e.touches[0].clientY;
                // if (this.entropy > HIDE_HINT_ENTROPY) {
                //     this.hideHint();
                // }
                if(level==8){
                	aniDone()
                }else if (entropy > MAX_ENTROPY[level]) {
                    addGift();
                    entropy = 0;
                    level++
                }
                raycaster.setFromCamera(mouse, camera);
                intersects.length = 0;
                raycaster.intersectObject(pickingPlane, false, intersects);
                //console.log(pickingPlane)

                if (intersects.length) {
                    var pos = intersects[0].point;

                    //this.dust.emitter && (this.dust.emitter.position.value = pos);
                    moveJointToPoint(pos.x, pos.y, pos.z);
                }
                return false;
            }
}
function onDocumentTouchEnd(_e){
	controls.enabled = false;
	removeJointConstraint();
	//world.addConstraint(body_rootConstraint);
}
function removeJointConstraint() {
  world.removeConstraint(mouseConstraint);
  mouseConstraint = false;
  

  leftFootBody.linearDamping=rightFootBody.linearDamping=leftFootJointBody.linearDamping=rightFootJointBody.linearDamping=footLinearDamping
	leftHandBody.linearDamping=rightHandBody.linearDamping=leftHandJointBody.linearDamping=rightHandJointBody.linearDamping=handLinearDamping
	leftFootBody.angularDamping=rightFootBody.angularDamping=leftFootJointBody.angularDamping=rightFootJointBody.angularDamping=footAngularDamping
	leftHandBody.angularDamping=rightHandBody.angularDamping=leftHandJointBody.angularDamping=rightHandJointBody.angularDamping=handAngularDamping
}
function moveJointToPoint(x, y, z) {
  y = Math.max( - 20, y);
  jointBody.position.set(x, y, z);
  mouseConstraint && mouseConstraint.update();
}

function addMouseConstraint(x,y,z,body){
	var constrainedBody = body;
  var v1 = new CANNON.Vec3(x, y, z).vsub(constrainedBody.position);
  var antiRot = constrainedBody.quaternion.inverse();
  var pivot = antiRot.vmult(v1);
  jointBody.position.set(x, y, z);
  mouseConstraint = new CANNON.PointToPointConstraint(constrainedBody, pivot, jointBody, new CANNON.Vec3(0, 0, 0), 800);


  //mouseConstraint = new CANNON.PointToPointConstraint(constrainedBody, new CANNON.Vec3(0, 0, 0), jointBody, new CANNON.Vec3(0, 0, 0), 800);
  world.addConstraint(mouseConstraint);
  



	leftFootBody.linearDamping=leftFootBody.angularDamping=0
  rightFootBody.linearDamping=rightFootBody.angularDamping=0
  leftHandBody.linearDamping=leftHandBody.angularDamping=0
  rightHandBody.linearDamping=rightHandBody.angularDamping=0

  leftFootJointBody.linearDamping=leftFootJointBody.angularDamping=0
  rightFootJointBody.linearDamping=rightFootJointBody.angularDamping=0
  leftHandJointBody.linearDamping=leftHandJointBody.angularDamping=0
  rightHandJointBody.linearDamping=rightHandJointBody.angularDamping=0

	
}



//============================模型加载函数 loadingMods('mod/pig2.glb',"pig")

function loadingMods(_url,_target,_ifAddScene){
	modNum++
	var loader = new THREE.GLTFLoader();

	loader.load(_url,
		function ( gltf ) {		// called when the resource is loaded
			modLoadedNum++
			console.log(gltf.scene)

			// objs[_target]=gltf.scene.children[0]
			// if(_ifAddScene){
			// 	scene.add(objs[_target])
			// }

			for (var i = 0; i < gltf.scene.children.length; i++) {
				objs[_target[i]]=gltf.scene.children[i]
				if(_ifAddScene){
					scene.add(objs[_target[i]])
				}
				console.log(_target[i])
			};

			
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
	loading.updateMax(modLoadedNum)
	if(modNum==modLoadedNum){
		console.log("模型加载完成",modLoadedNum,"/",modNum)
	}else{
		console.log("模型加载中",modLoadedNum,"/",modNum)
	}
}
var ifFirsTime2=true
function ModLoaded(){//加载模型完成
	if(ifFirsTime2==true){
		ifFirsTime2=false
		getStart()
	}
	
}



//===========================开始
var eyeGroup=new THREE.Group()
var eye1,eye2,eye3,eye4
function getStart(){
	// //====网格
	// var grid=new THREE.GridHelper(50,10,0xffff00,0x888888)//网格辅助(格子尺寸，格子细分数，中线颜色，网格线颜色)
	// scene.add(grid)

	// //====坐标轴
	// var axes = new THREE.AxesHelper(10);//轴辅助
	// scene.add(axes)

	scene.fog = new THREE.Fog(0xfff5d0, 80, 180);

	//====立方体
	var cubeGeo=new THREE.BoxGeometry(1,1,1)
	var cubeMaterial=new THREE.MeshBasicMaterial({color:0xffff00})
	rootPoint=new THREE.Mesh(cubeGeo,cubeMaterial)
	//scene.add(rootPoint)

	// ====环境光
	var ambientLight=new THREE.AmbientLight(0xffffff,.7)
	scene.add(ambientLight)

	//====平行光
	var dLight=new THREE.DirectionalLight(0xffffff,.3)
	dLight.position.set(0,30,0)
	//dLight.target=scene
	dLight.castShadow=true
	dLight.shadow.mapSize.width = 2048;  // default
	dLight.shadow.mapSize.height = 2048; // default
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
	var planeMaterial=new THREE.MeshLambertMaterial({color:0xfff5d0})
	var plane=new THREE.Mesh(planeGeo,planeMaterial)
	plane.rotation.x=-Math.PI/2
	plane.position.y=-20
	plane.receiveShadow=true
	scene.add(plane)

	//====摄像机
	camera.position.set(0,10,60)
	//camera.lookAt(scene.position)
	camera.lookAt(new THREE.Vector3(0,5,0))
	//====猪位置
	
	
	objs.pig.position.y=10
	objs.pig.scale.set(.1,.1,.1)
	objs.pig.castShadow=true

	//====猪眼
	scene.add(eyeGroup)
	var eyeGeo=new THREE.SphereGeometry(1.2,12,12)
	var eyeGeo2=new THREE.SphereGeometry(.5,12,12)
	eye1=new THREE.Mesh(eyeGeo,new THREE.MeshBasicMaterial({color:0xffffff}))
	eye2=new THREE.Mesh(eyeGeo,new THREE.MeshBasicMaterial({color:0xffffff}))

	eye3=new THREE.Mesh(eyeGeo2,new THREE.MeshBasicMaterial({color:0x000000}))
	eye4=new THREE.Mesh(eyeGeo2,new THREE.MeshBasicMaterial({color:0x000000}))

	eyeGroup.add(eye1,eye2,eye3,eye4)
	eye1.scale.y=.7
	eye2.scale.y=.7
	eye1.position.set(-3,1.6,6)
	eye2.position.set(3,1.6,6)

	eye3.scale.y=.7
	eye4.scale.y=.7
	eye3.scale.z=.3
	eye4.scale.z=.3
	eye3.position.set(-3,1.8,7.1)
	eye4.position.set(3,1.8,7.1)
	

	var pigmap=objs.pig.material.map
	//console.log(pig.material.map)
	//var pigMat=new THREE.MeshToonMaterial({map:pigmap,envMap:environment,reflectivity:0.2})
	//var pigMat=new THREE.MeshToonMaterial({map:pigmap,envMap:environment,reflectivity:0,shininess:10,specular:0xff3388})//normalMap:pigmap,normalMapType:THREE.ObjectSpaceNormalMap
	var pigMat=new THREE.MeshBasicMaterial({map:pigmap,reflectivity:0})
	//var pigMat=new THREE.MeshStandardMaterial({map:pigmap,emissive:0xffffff,envMap:environment,emissiveIntensity:0.5,roughness:0.4,metalness:.5})
	objs.pig.material=pigMat
	//TweenMax.set(pig.scale,{x:.105,y:.105,z:.095})
	//TweenMax.to(pig.scale,1.25,{x:.12,y:.12,z:.08,repeat:1000000,yoyo:true,ease:Sine.easeInOut})

	addPickingPlane()

	setPhy()
	setLeftFoot()
	setRightFoot()
	setRightHand()
	setLeftHand()
	setHeadLine()
	setGifts()
	animate()

}
//======猪眨眼
function eyeBlink(){
	console.log("眨眼")
	// eye1.material.color.set(0x000000)
	// eye2.material.color.set(0x000000)
	// setTimeout(function(){
	// 	eye1.material.color.set(0xffffff)
	// 	eye2.material.color.set(0xffffff)
	// },80)
	TweenMax.set(eye1.scale,{y:0})
	TweenMax.set(eye2.scale,{y:0})
	TweenMax.to(eye1.scale,.2,{y:.7})
	TweenMax.to(eye2.scale,.2,{y:.7})
}


var pickingPlane
function addPickingPlane(){
	var planeGeo = new THREE.PlaneGeometry(4000, 2000);
	pickingPlane = new THREE.Mesh(planeGeo, new THREE.MeshBasicMaterial({
    color: 0xff0000,
    transparent: true,
    opacity: 0
  }));
  scene.add(pickingPlane);
}



//============================物理引擎
var spring,isRunningSpring=1,jointBody,groundShape,groundBody,leftFootJoint,leftFootShap,leftFootCurve,rightFootJoint,rightFootShap,rightFootCurve,rightHandJoint,rightHandShap,rightHandCurve,leftHandJoint,leftHandShap,leftHandCurve
function setPhy(){
	
	//====设置世界
	world.gravity.set(0, -10, 0)
	world.broadphase = new CANNON.NaiveBroadphase()//NaiveBroadphase
	
	//====定义鼠标跟随点
	var shape = new CANNON.Sphere(0.1);
  jointBody = new CANNON.Body({
                mass: 0
            });
  jointBody.addShape(shape);
  jointBody.collisionFilterGroup = 0;
  jointBody.collisionFilterMask = 0;
  world.add(jointBody)

	//====总固定点
	rootPointBody=new CANNON.Body({
		mass:0,
		position:new CANNON.Vec3(0,20,0)
	})
	world.add(rootPointBody)
	meshes.push(rootPoint)
	bodies.push(rootPointBody)

	//====猪
	var pigShape=new CANNON.Sphere(8)
	pigBody=new CANNON.Body({
		mass:5,
		position:new CANNON.Vec3(0,20,0),
		shape:pigShape
	})
	//setMeshPhy(objs.pig,pigBody,0.1)//=====加物理外形
	world.add(pigBody)
	meshes.push(objs.pig)
	bodies.push(pigBody)
	objs.pig.userData.body=pigBody
	//console.log("======",pigGroup.userData.body)

	//=====链接猪和起始点(pigBody+rootPointBody)

	
	// body_rootConstraint = new CANNON.PointToPointConstraint(pigBody, new CANNON.Vec3(0,130,0), rootPointBody, new CANNON.Vec3(0,0,0),100000);
	// world.addConstraint(body_rootConstraint);

	//console.log(pigBody,rootPointBody)
	
	spring = new CANNON.Spring(pigBody,rootPointBody,{
		localAnchorA: new CANNON.Vec3(0, 2, 0),
    localAnchorB: new CANNON.Vec3(0, 0, 0),
    restLength: 1,
    stiffness: 110,
    damping: 0.1
	})

	spring.applyForce();

	world.addEventListener("postStep",
            function(event) {
                if (isRunningSpring) {
                    spring.applyForce();
                }
            });
	



	groundShape=new CANNON.Plane()//====地面
	groundBody=new CANNON.Body({
		mass:0,
		shape:groundShape
	})
	groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2)
	groundBody.position.set(0,-20,0)
	world.add(groundBody)
	
}
