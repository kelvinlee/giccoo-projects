	//====给速度
	_Body.velocity.set(10,0,0);

	//=====加物理外形
	//var pigShape=new CANNON.Cube(1,1,1)
	pigBody=new CANNON.Body({//====猪
		mass:5,
		position:new CANNON.Vec3(0,20,0),
		//shape:pigShape
	})
	setMeshPhy(objs.pig,pigBody,0.1)//=====加物理外形
	world.add(pigBody)
	setMeshPhy(_mesk,_body,_scale)

	//====网格
	var grid=new THREE.GridHelper(50,10,0xffff00,0x888888)//网格辅助(格子尺寸，格子细分数，中线颜色，网格线颜色)
	scene.add(grid)

	//====坐标轴
	var axes = new THREE.AxesHelper(10);//轴辅助
	scene.add(axes)

	//====立方体
	var cubeGeo=new THREE.BoxGeometry(1,1,1)
	var cubeMaterial=new THREE.MeshLambertMaterial({color:0xff0000})
	cube=new THREE.Mesh(cubeGeo,cubeMaterial)
	cube.castShadow=true
	cube.material=new THREE.MeshLambertMaterial({color:0xffff00})
	scene.add(cube)

	//====聚光灯
	var spotLight=new THREE.SpotLight(0xffffff,1,1000,Math.PI/180*30,0,0)
	//颜色，强度，范围，光散角度，光锥衰减（光斑边缘模糊1，不模糊0） https://threejs.org/docs/index.html#api/zh/lights/SpotLight
	spotLight.position.set(-10,40,20)
	spotLight.target=cube//默认0,0,0,指定其他物体必须add到scene上
	spotLight.castShadow=true
	//spotLight.shadow.mapSize.width=2048
	//spotLight.shadow.mapSize.height=2048
	var spotLightHelper=new THREE.SpotLightHelper(spotLight)
	scene.add(spotLight)
	scene.add(spotLightHelper)

	//====雾
	scene.fog = new THREE.Fog( 0x000000, 5, 10000 );


	//======摄像机移动
	TweenMax.to(camera.position,2,{y:100,repeat:10000,ease:Linear.easeNone,yoyo:true,onUpdate:function(){
		camera.lookAt(scene.position)
	}})

	//======加载纹理
	var texture = new THREE.TextureLoader().load( 'img/pig.jpg' );