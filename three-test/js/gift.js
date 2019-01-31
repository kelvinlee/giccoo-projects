var gifts=[]
var giftsNum=[1,2,3,4,5,6,7]
function addGift(){
	console.log("加个礼物")
	for (var i = 0; i < giftsNum[level]; i++) {
		var _agift=objs.gift1.clone()
		scene.add(_agift)
		meshes.push(_agift)
	};
}

function aniDone(){
	console.log("完成")
}