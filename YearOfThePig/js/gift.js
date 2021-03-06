var gifts=[]
var giftsNum=[1,3,5,7,9,16,20,50]//[1,2,3,4,5,6,7]
var gift1,gift2,gift3,gift4

function setGifts(){
	//=====硬币

	gift1=objs.gift1.clone()
	var gift1map=objs.gift1.material.map
	//console.log(pig.material.map)
	//var pigMat=new THREE.MeshToonMaterial({map:pigmap,envMap:environment,reflectivity:0.2})
	//var pigMat=new THREE.MeshToonMaterial({map:pigmap,shininess:10,specular:0xff3388})//normalMap:pigmap,normalMapType:THREE.ObjectSpaceNormalMap
	var gift1Mat=new THREE.MeshToonMaterial({color:0xeeb041,emissive:0xeeb041,emissiveIntensity:.1})
	//var pigMat=new THREE.MeshStandardMaterial({map:pigmap,emissive:0xffffff,envMap:environment,emissiveIntensity:0.5,roughness:0.4,metalness:.5})
	gift1.material=gift1Mat
	//TweenMax.to(gift1.material,.5,{emissiveIntensity:0.05,repeat:1000000,yoyo:true})


	//=====金条
	gift2=objs.gift2.clone()
	var gift2map=objs.gift2.material.map
	//console.log(pig.material.map)
	//var pigMat=new THREE.MeshToonMaterial({map:pigmap,envMap:environment,reflectivity:0.2})
	//var pigMat=new THREE.MeshToonMaterial({map:pigmap,shininess:10,specular:0xff3388})//normalMap:pigmap,normalMapType:THREE.ObjectSpaceNormalMap
	var gift2Mat=new THREE.MeshToonMaterial({color:0xf2c64d,emissive:0xf2c64d,emissiveIntensity:.1})
	//var pigMat=new THREE.MeshStandardMaterial({map:pigmap,emissive:0xffffff,envMap:environment,emissiveIntensity:0.5,roughness:0.4,metalness:.5})
	gift2.material=gift2Mat
	//TweenMax.to(gift2.material,.5,{emissiveIntensity:0.05,repeat:1000000,yoyo:true})


	//=====元宝
	gift3=objs.gift3.clone()
	var gift3map=objs.gift3.material.map
	//console.log(pig.material.map)
	//var pigMat=new THREE.MeshToonMaterial({map:pigmap,envMap:environment,reflectivity:0.2})
	//var pigMat=new THREE.MeshToonMaterial({map:pigmap,shininess:10,specular:0xff3388})//normalMap:pigmap,normalMapType:THREE.ObjectSpaceNormalMap
	var gift3Mat=new THREE.MeshToonMaterial({color:0xf2c64d,emissive:0xf2c64d,emissiveIntensity:.1})
	//var pigMat=new THREE.MeshStandardMaterial({map:pigmap,emissive:0xffffff,envMap:environment,emissiveIntensity:0.5,roughness:0.4,metalness:.5})
	gift3.material=gift3Mat
	//TweenMax.to(gift3.material,.5,{emissiveIntensity:0.05,repeat:1000000,yoyo:true})


	//=====红包
	gift4=objs.gift4.clone()
	var gift4map=objs.gift4.material.map
	//console.log(pig.material.map)
	//var pigMat=new THREE.MeshToonMaterial({map:pigmap,envMap:environment,reflectivity:0.2})
	//var pigMat=new THREE.MeshToonMaterial({map:pigmap,shininess:10,specular:0xff3388})//normalMap:pigmap,normalMapType:THREE.ObjectSpaceNormalMap
	var gift4Mat=new THREE.MeshBasicMaterial({map:gift4map,reflectivity:0})
	//var pigMat=new THREE.MeshStandardMaterial({map:pigmap,emissive:0xffffff,envMap:environment,emissiveIntensity:0.5,roughness:0.4,metalness:.5})
	gift4.material=gift4Mat
}

var nowGiftType=parseInt(Math.random()*4)
var giftScale=1
var ifCanTouch=true
function addGift(){
	console.log("加个礼物")
	
	if(level==7){
		for (var i = 0; i < giftsNum[level]; i++) {
				setTimeout(addAGift,30*i)
		};
		//removeJointConstraint();
		renderer.domElement.removeEventListener("touchstart",onDocumentTouchStart,false)
		renderer.domElement.removeEventListener("touchmove",onDocumentTouchMove,{passive: false})
		renderer.domElement.removeEventListener("touchend",onDocumentTouchEnd,false)
		TweenMax.to(rootPointBody.position,2.2,{y:130,onComplete:moveCamera})
		ifCanTouch=false

		SOUND.end()
		main.gameOver()
	}else{
		for (var i = 0; i < giftsNum[level]; i++) {
				setTimeout(addAGift,60*i)
		};
		main.runGift()
	}
	removeJointConstraint();
}

function moveCamera(){
	scene.remove(objs.pig)
	setTimeout(pixiStart,1000)
	TweenMax.to(camera.position, 3, {
      y: 25,
      ease: Power2.easeInOut,
      onUpdate: function onUpdate(v) {
          camera.updateProjectionMatrix();
      }
  });
  TweenMax.to(camera, 3, {
      zoom: 0.8,
      ease: Power2.easeInOut,
      onUpdate: function onUpdate(v) {
          camera.updateProjectionMatrix();
      },
      onComplete:endThree

  });
}

function endThree(){
	ifThreePlay=false
}

function addAGift(){
		// if(sound.isPlaying){
		// 	sound.stop();
		// }
		// sound.play();
		var giftType=nowGiftType
		
		nowGiftType++
		if (nowGiftType==4) {nowGiftType=0};

		var giftA=[gift1,gift2,gift3,gift4]
		var _agift=giftA[giftType].clone()//Math.random()*4
		_agift.scale.set(.1*giftScale,.1*giftScale,.1*giftScale)
		_agift.castShadow=true

		//_agift.receiveShadow=true
		scene.add(_agift)
		meshes.push(_agift)
		TweenMax.from(_agift.scale,2,{x:0.01,y:0.01,z:0.01,ease:Elastic.easeOut})




		switch(giftType){
			case 0:
				var	_giftShape=new CANNON.Cylinder(3*giftScale,3*giftScale,.5*giftScale,12)//硬币
			break;
			case 1:
				var	_giftShape=new CANNON.Sphere(2.5*giftScale)//元宝
			break;
			case 2:
				var	_giftShape=new CANNON.Box(new CANNON.Vec3(4.5*giftScale,1.3*giftScale,1.5*giftScale))//金条
			break;
			case 3:
				var	_giftShape=new CANNON.Box(new CANNON.Vec3(3*giftScale,4.5*giftScale,.5*giftScale))//红包
			break;
		}

		
		var _giftBody=new CANNON.Body({mass:10,position:new CANNON.Vec3(0,0,0)})//type:CANNON.Body.KINEMATIC
		_giftBody.addShape(_giftShape)

		_agift.userData.body=_giftBody
		_agift.userData.isGift=true

		_giftBody.position.set(pigBody.position.x,pigBody.position.y-20,pigBody.position.z)

		_giftBody.angularVelocity=new CANNON.Vec3(Math.random()*4-2,Math.random()*4-2,Math.random()*4-2)//随机旋转
		_giftBody.velocity=new CANNON.Vec3(Math.random()*4-2,Math.random()*4-2,Math.random()*4-2)//随机速度

		world.add(_giftBody)
		bodies.push(_giftBody)

		SOUND.gift.play()
		main.shaked = true

}

function aniDone(){
	console.log("完成")
}



