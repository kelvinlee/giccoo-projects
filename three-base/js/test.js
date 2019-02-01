function addSphere(_x,_y,_z){
	console.log("加个球")
	var _sphereShap=new CANNON.Sphere(5)
	var _sphereBody=new CANNON.Body({mass:1,shape:_sphereShap})
	_sphereBody.position.set(_x,_y,_z)
	world.add(_sphereBody)

}

function addBox(_x,_y,_z){
	console.log("方块")
	var _boxShap=new CANNON.Box(new CANNON.Vec3(3,4,5))
	var _boxBody=new CANNON.Body({mass:1,shape:_boxShap})
	_boxBody.position.set(_x,_y,_z)
	world.add(_boxBody)
}