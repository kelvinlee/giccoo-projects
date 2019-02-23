
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
var composer
function initAll () {
	renderer.setClearColor(0xfff5d0)//设置背景颜色
	renderer.setSize(window.innerWidth,window.innerHeight)//设置宽高
	renderer.shadowMap.type=THREE.BasicShadowMap//.BasicShadowMap.PCFShadowMap.PCFSoftShadowMap
	renderer.setPixelRatio(2)
	renderer.shadowMapEnabled=true
	renderer.gammaOutput = true;
	//renderer.toneMapping=THREE.NoToneMapping
	console.log("==========toneMapping",renderer.toneMapping)
	//renderer.shadowMapSoft=true
	

	document.body.appendChild(renderer.domElement)
	

	//loadingMods('mod/car.glb',["car"],"addScene")//模型加载
	loadingMods('mod/car.gltf',["car"],"addScene")//模型加载
	loadingMods('mod/car_wheel.gltf',["car_wheel"],"addScene")//模型加载
	// loadingMods('mod/foot.glb',["foot"])//模型加载
	// loadingMods('mod/gift1.glb',["gift1"])
	// loadingMods('mod/gift2.glb',["gift2"])
	// loadingMods('mod/gift3.glb',["gift3"])
	// loadingMods('mod/gift4.glb',["gift4"])

	//render()
	//animate()//===动画
	clickFunc()
	//set_envMap()

	// postprocessing
				composer = new THREE.EffectComposer( renderer );
				composer.addPass( new THREE.RenderPass( scene, camera ) );
				var effect = new THREE.ShaderPass( THREE.DotScreenShader );
				effect.uniforms[ 'scale' ].value = 4;
				composer.addPass( effect );
				var effect = new THREE.ShaderPass( THREE.RGBShiftShader );
				effect.uniforms[ 'amount' ].value = 0.0015;
				effect.renderToScreen = true;
				composer.addPass( effect );
				//

}
//============================每帧渲染：更新物理+画面

var cannonDebugRenderer=new THREE.CannonDebugRenderer(scene,world)//===物理引擎辅助
var meshes=[],bodies=[]
function animate() {
	stats.begin()
  requestAnimationFrame( animate );
  //render();
  composer.render();
  stats.end()
}



function render() {
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

function getStart(){
	console.log("getStart!")
	// //====网格
	// var grid=new THREE.GridHelper(50,10,0xffff00,0x888888)//网格辅助(格子尺寸，格子细分数，中线颜色，网格线颜色)
	// scene.add(grid)

	// //====坐标轴
	// var axes = new THREE.AxesHelper(10);//轴辅助
	// scene.add(axes)

	//scene.fog = new THREE.Fog(0xfff5d0, 80, 180);

	//====立方体
	var cubeGeo=new THREE.BoxGeometry(1,1,1)
	var cubeMaterial=new THREE.MeshBasicMaterial({color:0xffff00})
	rootPoint=new THREE.Mesh(cubeGeo,cubeMaterial)
	scene.add(rootPoint)

	// ====环境光
	var ambientLight=new THREE.AmbientLight(0xffffff,.1)
	scene.add(ambientLight)

	//====半球光
	var hemlight = new THREE.HemisphereLight( 0xffffff, 0x38a4e8,1 );//0x38a4e8
	hemlight.position.set( 0, 10, 0 );
	//scene.add( hemlight );

	//====平行光
	var dLight=new THREE.DirectionalLight(0xffffff,.1)
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

	//TweenMax.to(dLight.position,2,{x:100,repeat:100000,yoyo:true,ease:Sine.easeInOut,delay:1})//光源旋转
	// TweenMax.to(dLight.position,2,{z:100,repeat:100000,yoyo:true,ease:Sine.easeInOut})

	// TweenMax.to(dLight.position,4,{z:100,repeat:100000,yoyo:false,ease:Sine.easeInOut})
	// TweenMax.to(dLight,2,{intensity:0.3,repeat:100000,yoyo:true,ease:Sine.easeInOut,delay:2})
	// TweenMax.to(ambientLight,2,{intensity:1.2,repeat:100000,yoyo:true,ease:Sine.easeInOut,delay:2})
	scene.add(dLight)


	//====平面
	var planeGeo=new THREE.PlaneGeometry(600,600,60)
	var planeMaterial=new THREE.MeshLambertMaterial({color:0xfff5d0})
	var plane=new THREE.Mesh(planeGeo,planeMaterial)
	plane.rotation.x=-Math.PI/2
	plane.position.y=0
	plane.receiveShadow=true
	scene.add(plane)

	//====摄像机
	camera.position.set(0,20,80)
	camera.lookAt(scene.position)

	//====猪位置
	objs.car.position.y=0
	objs.car.scale.set(.1,.1,.1)
	objs.car.castShadow=true

	//var uvs = objs.car.geometry.attributes.uv.array;
	//objs.car.addAttribute( 'uv2', new THREE.BufferAttribute( uvs, 2 ) );
	//console.log(objs.car)

	//====透明
	// var car_alpha=new THREE.TextureLoader().load("tex/car_Opacity.png",)
	// objs.car.material.alphaMap=car_alpha
	// objs.car.material.side=THREE.DoubleSide


	objs.car.material.emissive=new THREE.Color( 0xffffff );//发光
	//TweenMax.to(objs.car.material,1,{emissiveIntensity:0,repeat:100000})
	//objs.car.material.flatShading=true

	console.log(objs.car.material.flatShading)

	objs.car_wheel.scale.set(.1,.1,.1)
	objs.car_wheel.castShadow=true

	TweenMax.to(objs.car.position,.2,{y:.8,repeat:10000,yoyo:true})
	TweenMax.to(objs.car.scale,.2,{z:.095,repeat:10000,yoyo:true,delay:.3})

	//TweenMax.to(objs.car.material.map.offset,2,{x:1,repeat:10000})


	//var carmap=objs.car.material.map
	//console.log(car.material.map)
	//var carMat=new THREE.MeshToonMaterial({map:carmap,envMap:environment,reflectivity:0.2})
	//var carMat=new THREE.MeshToonMaterial({map:carmap,envMap:environment,reflectivity:0,shininess:10,specular:0xff3388})//normalMap:carmap,normalMapType:THREE.ObjectSpaceNormalMap
	// var car_alpha=new THREE.TextureLoader().load("tex/car_Opacity.png")
	// var car_ao=new THREE.TextureLoader().load("tex/car_Mixed_AO.png")
	// var carMat=new THREE.MeshToonMaterial({map:carmap,alphaMap:car_alpha,aoMap:car_ao,reflectivity:0})
	// //var carMat=new THREE.MeshStandardMaterial({map:carmap,emissive:0xffffff,envMap:environment,emissiveIntensity:0.5,roughness:0.4,metalness:.5})
	// objs.car.material=carMat
	//TweenMax.set(car.scale,{x:.105,y:.105,z:.095})
	//TweenMax.to(car.scale,1.25,{x:.12,y:.12,z:.08,repeat:1000000,yoyo:true,ease:Sine.easeInOut})


	animate()

}


