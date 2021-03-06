
//============================初始化

var scene=new THREE.Scene();
var camera= new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,2000);
//视角，宽高比，近剪切面，远剪切面
var renderer = new THREE.WebGLRenderer({antialias:true,alpha:false})//抗锯齿
var modNum=0 // 总数
var modLoadedNum=0 // 已加载输
var objs = {} // 模型
var stats = null
var world = new CANNON.World()

var rootPoint,rootPointBody//总固定点
var carShape,carBody


initAll()

function initAll () {
	renderer.setClearColor(0x67bbde)//设置背景颜色
	renderer.setSize(window.innerWidth,window.innerHeight)//设置宽高
	renderer.shadowMap.type=THREE.PCFShadowMap//.BasicShadowMap.PCFShadowMap.PCFSoftShadowMap
	renderer.setPixelRatio(2)
	renderer.shadowMapEnabled=true
	renderer.gammaOutput = true;
	//renderer.toneMapping=THREE.NoToneMapping
	console.log("==========toneMapping",renderer.toneMapping)
	//renderer.shadowMapSoft=true
	

	document.body.appendChild(renderer.domElement)
	

	//loadingMods('mod/car.glb',["car"],"addScene")//模型加载
	// loadingMods('mod/car.gltf',["car"])//模型加载
	// loadingMods('mod/car_wheel.gltf',["car_wheel"])//模型加载
	// loadingMods('mod/island.gltf',["island"],"addScene")
	// loadingMods('mod/waterfall.gltf',["waterfall"])
	// loadingMods('mod/fire.gltf',["fire"],"addScene")

	loadingMods('mod/test.gltf',["island"],"addScene")
	// loadingMods('mod/foot.glb',["foot"])//模型加载
	// loadingMods('mod/gift1.glb',["gift1"])
	// loadingMods('mod/gift2.glb',["gift2"])
	// loadingMods('mod/gift3.glb',["gift3"])
	// loadingMods('mod/gift4.glb',["gift4"])

	//render()
	//animate()//===动画
	clickFunc()
	
	//animateDof()
	//set_envMap()

	// postprocessing
				//composer = new THREE.EffectComposer( renderer );
				//composer.addPass( new THREE.RenderPass( scene, camera ) );
				// var effect = new THREE.ShaderPass( THREE.DotScreenShader );
				// effect.uniforms[ 'scale' ].value = 4;
				// composer.addPass( effect );
				// var effect = new THREE.ShaderPass( THREE.RGBShiftShader );
				// effect.uniforms[ 'amount' ].value = 0.0015;
				// effect.renderToScreen = true;
				// composer.addPass( effect );


				
				//

}

//============================每帧渲染：更新物理+画面

var cannonDebugRenderer=new THREE.CannonDebugRenderer(scene,world)//===物理引擎辅助
var meshes=[],bodies=[]
function animate() {
	stats.begin()
  requestAnimationFrame( animate );
  render();
  //renderDof()
  //shaderUpdate()
  //composer.render();
  stats.end()
}


var prevTime = Date.now();
function render() {
  renderer.render(scene, camera);
  if ( mixer ) {
					var time = Date.now();
					mixer.update( ( time - prevTime ) * 0.001 );
					prevTime = time;
				}

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
	document.addEventListener("touchstart",onDocumentTouchStart,false)
	document.addEventListener("touchmove",onDocumentTouchMove,false)
	document.addEventListener("touchend",onDocumentTouchEnd,false)
}
function onDocumentTouchStart(_e){
	//_e.preventDefault()

	mouse.x=(_e.touches[0].clientX/window.innerWidth)*2-1
	mouse.y=-(_e.touches[0].clientY/window.innerHeight)*2+1//donElement

	raycaster.setFromCamera(mouse,camera)
	intersects = []
	//intersects = raycaster.intersectObjects( scene.children )
	raycaster.intersectObjects( meshes ,false,intersects)

	if(intersects.length>0){
		
	}
}


function onDocumentTouchMove(_e){
	
}

function onDocumentTouchEnd(_e){
	controls.enabled = true;
	//world.addConstraint(body_rootConstraint);
}







//============================模型加载函数 loadingMods('mod/car2.glb',"car")
var mixer
var gltfAni
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
				
				
				gltfAni=gltf.animations[ 0 ]
				console.log("mixer",gltfAni)
				//mixer = new THREE.AnimationMixer( gltf.scene.children[0] );
				//mixer.clipAction( gltf.animations[ 0 ] ).setDuration( 1 ).play();

				console.log("=====",_target[i])
			};

			
			loadingCheck()
			//car.material=new THREE.MeshLambertMaterial({color:0xffff00})
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

		var params = {
			color: '#67bbde',//'#12b9c0'
			scale: .8,
			flowX: -1,
			flowY: -.5
		};
		var carC=new THREE.Group()

function getStart(){
	console.log("getStart!")
	//====网格
	var grid=new THREE.GridHelper(50,10,0xffff00,0x888888)//网格辅助(格子尺寸，格子细分数，中线颜色，网格线颜色)
	scene.add(grid)

	//====坐标轴
	var axes = new THREE.AxesHelper(10);//轴辅助
	scene.add(axes)

	//scene.fog = new THREE.Fog(0xfff5d0, 80, 180);

	//====立方体
	var cubeGeo=new THREE.BoxGeometry(.1,.1,.1)
	var cubeMaterial=new THREE.MeshBasicMaterial({color:0xffff00})
	rootPoint=new THREE.Mesh(cubeGeo,cubeMaterial)
	//scene.add(rootPoint)

	//====环境光
	var ambientLight=new THREE.AmbientLight(0xffffff,.1)
	scene.add(ambientLight)

	//====半球光
	var hemlight = new THREE.HemisphereLight( 0xffffff, 0x0088ff,1 );//0x38a4e8
	hemlight.position.set( 0, 10, 0 );
	scene.add( hemlight );

	//====平行光
	var dLight=new THREE.DirectionalLight(0xffa70d,1)
	dLight.position.set(-30,30,-100)
	//dLight.target=scene
	dLight.castShadow=true
	dLight.shadow.mapSize.width = 1024;  // default
	dLight.shadow.mapSize.height = 1024; // default
	dLight.shadow.camera.near = 0.5;    // default
	dLight.shadow.camera.far = 1000;     // default
	dLight.shadow.camera.left = -100;    // default
	dLight.shadow.camera.right = 100; 
	dLight.shadow.camera.bottom = -100;    // default
	dLight.shadow.camera.top = 100; 

	TweenMax.to(dLight.position,8,{x:100,repeat:100000,yoyo:true,ease:Sine.easeInOut,delay:4})//光源旋转
	TweenMax.to(dLight.position,8,{z:100,repeat:100000,yoyo:true,ease:Sine.easeInOut})

	// TweenMax.to(dLight.position,4,{z:100,repeat:100000,yoyo:false,ease:Sine.easeInOut})
	// TweenMax.to(dLight,2,{intensity:0.3,repeat:100000,yoyo:true,ease:Sine.easeInOut,delay:2})
	// TweenMax.to(ambientLight,2,{intensity:1.2,repeat:100000,yoyo:true,ease:Sine.easeInOut,delay:2})
	scene.add(dLight)


	//====平面
	// var planeGeo=new THREE.PlaneGeometry(600,600,60)
	// var planeMaterial=new THREE.MeshLambertMaterial({color:0xfff5d0})
	// var plane=new THREE.Mesh(planeGeo,planeMaterial)
	// plane.rotation.x=-Math.PI/2
	// plane.position.y=0
	// plane.receiveShadow=true
	// scene.add(plane)

	//====摄像机
	camera.position.set(0,20,80)
	camera.lookAt(scene.position)

	// //====篝火
	// objs.fire.position.set(-60,4,160)
	// objs.fire.scale.set(.1,.1,.1)
	// objs.fire.castShadow=true
	// objs.fire.receiveShadow=true

	// //====车位置
	// objs.car.position.set(0,0,0)
	// objs.car.scale.set(.1,.1,.1)
	// objs.car.castShadow=true
	// objs.car.receiveShadow=true

	// objs.car_wheel.scale.set(.1,.1,.1)
	// objs.car_wheel.castShadow=true

	// carC.add(objs.car,objs.car_wheel)
	// scene.add(carC)
	// carC.position.set(-150,-20,100)
	// //====透明
	// // var car_alpha=new THREE.TextureLoader().load("tex/car_Opacity.png",)
	// // objs.car.material.alphaMap=car_alpha
	// // objs.car.material.side=THREE.DoubleSide


	// objs.car.material.emissive=new THREE.Color( 0xffffff );//发光
	// //TweenMax.to(objs.car.material,1,{emissiveIntensity:0,repeat:100000})
	// //objs.car.material.flatShading=true

	// objs.car_wheel.scale.set(.1,.1,.1)
	// objs.car_wheel.castShadow=true

	// TweenMax.to(objs.car.position,.2,{y:.8,repeat:10000,yoyo:true})
	// TweenMax.to(objs.car.scale,.2,{z:.095,repeat:10000,yoyo:true,delay:.3})

	// //TweenMax.to(objs.car.material.map.offset,2,{x:1,repeat:10000})

	// //====岛
	objs.island.position.y=0
	objs.island.scale.set(1,1,1)
	objs.island.castShadow=true
	objs.island.receiveShadow=true

	console.log(objs.island.children[1].material.skinning)
	console.log("-----",objs.island.children[0].children[0])
	//TweenMax.to(objs.island.children[0].children[0].rotation,2,{x:5,repeat:100000,yoyo:true})

	mixer = new THREE.AnimationMixer( objs.island );
	mixer.clipAction( gltfAni ).clampWhenFinished=true
	mixer.clipAction( gltfAni ).setDuration( 1 ).play();
	console.log("-===---===-",mixer.clipAction( gltfAni ))

	//var mixer=new THREE.AnimationMixer(objs.island.children[1])
	//mixer.clipAction(objs.island.animations[0]).setDuration( 1 ).play();



	// //objs.island.material=new THREE.MeshToonMaterial()
	// objs.island.material.flatShading=true
	// objs.island.material.clipShadows=true
	// objs.island.castShadow=true
	// objs.island.receiveShadow=true

	// //====水
	// objs.waterfall.position.y=1
	// objs.waterfall.scale.set(1.1,1.1,1.1)
	// //var water_alpha=new THREE.TextureLoader().load("tex/water_Opacity.png",)

	// //objs.water.material.alphaMap=water_alpha
	// //objs.water.material.side=THREE.DoubleSide
	// // objs.water.material.transparent=true
	// // objs.water.material.opacity=0.5
	// // TweenMax.to(objs.water.material.map.offset,5,{y:-1,repeat:10000,ease:Linear.easeNone})
	// // TweenMax.to(objs.water.material.map.offset,2,{x:.1,repeat:10000,yoyo:true,ease:Sine.easeInOut})
	// console.log("99999",objs.waterfall)
	// //scene.remove(objs.water)

	// // 瀑布
	// 		var waterfallGeometry = objs.waterfall.geometry
	// 		waterfall = new THREE.Water( waterfallGeometry, {
	// 			color: params.color,
	// 			scale: params.scale,
	// 			flowDirection: new THREE.Vector2( params.flowX, params.flowY ),
	// 			textureWidth: 1024,
	// 			textureHeight: 1024,
	// 			reflectivity:0.02,
	// 			//flowMap:new THREE.TextureLoader().load( 'mod/waterfall_Base_Color.png' )
	// 		} );
	// 		//waterfall.position.y = 1;
	// 		waterfall.scale.set(1.1,1.1,1.1)
	// 		//waterfall.rotation.x = Math.PI *  -0.5;
	// 		scene.add( waterfall );
	// // 		//waterfall.material.opacity=.5


	// // water
	// 		var water2Geometry = new THREE.PlaneBufferGeometry( 2000, 2000 );
	// 		water2 = new THREE.Water( water2Geometry, {
	// 			color: params.color,
	// 			scale: params.scale,
	// 			flowDirection: new THREE.Vector2( params.flowX, params.flowY ),
	// 			textureWidth: 1024,
	// 			textureHeight: 1024
	// 		} );
	// 		water2.position.y = 1;
	// 		water2.rotation.x = Math.PI * - 0.5;
	// 		scene.add( water2 );

	// // water.castShadow=true
	// // water.receiveShadow=true

	// //var uvs = objs.car.geometry.attributes.uv.array;
	// //objs.car.addAttribute( 'uv2', new THREE.BufferAttribute( uvs, 2 ) );
	// //console.log(objs.car)

	


	


	animate()

}


