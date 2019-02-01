var gifts=[]
var giftsNum=[1,2,3,4,5,6,7]
var gift1,gift2,gift3,gift4
function setGifts(){
	//=====硬币
	gift1=objs.gift1.clone()
	var gift1map=objs.gift1.material.map
	//console.log(pig.material.map)
	//var pigMat=new THREE.MeshToonMaterial({map:pigmap,envMap:environment,reflectivity:0.2})
	//var pigMat=new THREE.MeshToonMaterial({map:pigmap,envMap:environment,reflectivity:0,shininess:10,specular:0xff3388})//normalMap:pigmap,normalMapType:THREE.ObjectSpaceNormalMap
	var gift1Mat=new THREE.MeshToonMaterial({color:0xf2c64d,envMap:environment,reflectivity:0,emissive:0xf2c64d,emissiveIntensity:.1})
	//var pigMat=new THREE.MeshStandardMaterial({map:pigmap,emissive:0xffffff,envMap:environment,emissiveIntensity:0.5,roughness:0.4,metalness:.5})
	gift1.material=gift1Mat

	//=====金条
	gift2=objs.gift2.clone()
	var gift2map=objs.gift2.material.map
	//console.log(pig.material.map)
	//var pigMat=new THREE.MeshToonMaterial({map:pigmap,envMap:environment,reflectivity:0.2})
	//var pigMat=new THREE.MeshToonMaterial({map:pigmap,envMap:environment,reflectivity:0,shininess:10,specular:0xff3388})//normalMap:pigmap,normalMapType:THREE.ObjectSpaceNormalMap
	var gift2Mat=new THREE.MeshToonMaterial({color:0xf2c64d,envMap:environment,reflectivity:0,emissive:0xf2c64d,emissiveIntensity:.1})
	//var pigMat=new THREE.MeshStandardMaterial({map:pigmap,emissive:0xffffff,envMap:environment,emissiveIntensity:0.5,roughness:0.4,metalness:.5})
	gift2.material=gift2Mat

	//=====元宝
	gift3=objs.gift3.clone()
	var gift3map=objs.gift3.material.map
	//console.log(pig.material.map)
	//var pigMat=new THREE.MeshToonMaterial({map:pigmap,envMap:environment,reflectivity:0.2})
	//var pigMat=new THREE.MeshToonMaterial({map:pigmap,envMap:environment,reflectivity:0,shininess:10,specular:0xff3388})//normalMap:pigmap,normalMapType:THREE.ObjectSpaceNormalMap
	var gift3Mat=new THREE.MeshToonMaterial({color:0xf2c64d,envMap:environment,reflectivity:0,emissive:0xf2c64d,emissiveIntensity:.1})
	//var pigMat=new THREE.MeshStandardMaterial({map:pigmap,emissive:0xffffff,envMap:environment,emissiveIntensity:0.5,roughness:0.4,metalness:.5})
	gift3.material=gift3Mat

	//=====红包
	gift4=objs.gift4.clone()
	var gift4map=objs.gift4.material.map
	//console.log(pig.material.map)
	//var pigMat=new THREE.MeshToonMaterial({map:pigmap,envMap:environment,reflectivity:0.2})
	//var pigMat=new THREE.MeshToonMaterial({map:pigmap,envMap:environment,reflectivity:0,shininess:10,specular:0xff3388})//normalMap:pigmap,normalMapType:THREE.ObjectSpaceNormalMap
	var gift4Mat=new THREE.MeshBasicMaterial({map:gift4map,envMap:environment,reflectivity:0})
	//var pigMat=new THREE.MeshStandardMaterial({map:pigmap,emissive:0xffffff,envMap:environment,emissiveIntensity:0.5,roughness:0.4,metalness:.5})
	gift4.material=gift4Mat
}

var nowGiftType=parseInt(Math.random()*4)
function addGift(){
	console.log("加个礼物")
	for (var i = 0; i < giftsNum[level]; i++) {
		//var gN=[objs.gift1.clone(),objs.gift2.clone(),objs.gift3.clone(),objs.gift4.clone()]
		//var _agift=gN[parseInt(Math.random()*4)]
		var giftType=nowGiftType//parseInt(Math.random()*4)
		
		nowGiftType++
		if (nowGiftType==4) {nowGiftType=0};

		var giftA=[gift1,gift2,gift3,gift4]
		var _agift=giftA[giftType].clone()//Math.random()*4
		_agift.scale.set(.1,.1,.1)
		scene.add(_agift)
		meshes.push(_agift)
		TweenMax.from(_agift.scale,2,{x:0,y:0,z:0,ease:Elastic.easeOut,delay:i*.1})




		switch(giftType){
			case 0:
				var	_giftShape=new CANNON.Cylinder(3,3,.5,12)//硬币
			break;
			case 1:
				var	_giftShape=new CANNON.Sphere(2.5)//元宝
			break;
			case 2:
				var	_giftShape=new CANNON.Box(new CANNON.Vec3(4.5,1.3,1.5))//金条
			break;
			case 3:
				var	_giftShape=new CANNON.Box(new CANNON.Vec3(3,4.5,.5))//金条
			break;
		}

		
		var _giftBody=new CANNON.Body({mass:10,position:new CANNON.Vec3(0,0,0)})//type:CANNON.Body.KINEMATIC
		_giftBody.addShape(_giftShape)
		

		_giftBody.position.set(pigBody.position.x-level/2*5+i*5,pigBody.position.y-20,pigBody.position.z)
		_giftBody.angularVelocity=new CANNON.Vec3(Math.random()*4-2,Math.random()*4-2,Math.random()*4-2)//随机旋转
		_giftBody.velocity=new CANNON.Vec3(Math.random()*4-2,Math.random()*4-2,Math.random()*4-2)//随机旋转

		world.add(_giftBody)
		bodies.push(_giftBody)

		
		//console.log(pigBody.position)

	};

	console.log("bodies",bodies,"meshes",meshes)
}

function aniDone(){
	console.log("完成")
}



