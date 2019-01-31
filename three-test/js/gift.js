var gifts=[]
var giftsNum=[1,2,3,4,5,6,7]
var giftsName=["gift1","gift2","gift3","gift4"]
function addGift(){
	console.log("加个礼物")
	for (var i = 0; i < giftsNum[level]; i++) {
		//var gN=[objs.gift1.clone(),objs.gift2.clone(),objs.gift3.clone(),objs.gift4.clone()]
		//var _agift=gN[parseInt(Math.random()*4)]

		var _agift=objs.gift4.clone()
		_agift.scale.set(.1,.1,.1)
		scene.add(_agift)
		meshes.push(_agift)
		var _giftShape=new CANNON.Box(new CANNON.Vec3(1,1,1))
		var _giftBody=new CANNON.Body({mass:1,shape:_giftShape})
		world.add(_giftBody)
		bodies.push(_giftBody)
	};
}

function aniDone(){
	console.log("完成")
}