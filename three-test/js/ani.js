
function setLeftFoot(){
	objs.foot.scale.set(.1,.1,.1)
	objs.foot.position.set(0,0,0)
	objs.foot.castShandow=true
	var footmap=objs.foot.material.map
	//console.log(pig.material.map)
	//var pigMat=new THREE.MeshToonMaterial({map:pigmap,envMap:environment,reflectivity:0.2})
	//var pigMat=new THREE.MeshToonMaterial({map:pigmap,envMap:environment,reflectivity:0,shininess:10,specular:0xff3388})//normalMap:pigmap,normalMapType:THREE.ObjectSpaceNormalMap
	var footMat=new THREE.MeshBasicMaterial({map:footmap,envMap:environment,reflectivity:0})
	//var pigMat=new THREE.MeshStandardMaterial({map:pigmap})
	objs.foot.material=footMat


	var leftFootJointGeo=new THREE.BoxGeometry(1,1,1)
	var leftFootJointMaterial=new THREE.MeshBasicMaterial({color:0xffff00})
	leftFootJoint=new THREE.Mesh(leftFootJointGeo,leftFootJointMaterial)
	//scene.add(leftFootJoint)





	setLeftFootPhy()
}
var leftFootBody,startP,leftFootJointBody,leftLegGeo,leftLegMat,leftLeg//leftFootCurve
function setLeftFootPhy(){

	leftFootShap=new CANNON.Sphere(2)
	leftFootBody=new CANNON.Body({
		mass:5,
		position:new CANNON.Vec3(2,0,0),
		shape:leftFootShap
	})
	world.add(leftFootBody)
	meshes.push(objs.foot)
	bodies.push(leftFootBody)
	//setMeshPhy(objs.foot,leftFootBody,0.1)//=====加物理外形

	leftFootJointBody=new CANNON.Body({
		mass:1,
		position:new CANNON.Vec3(2,5,1)
	})
	world.add(leftFootJointBody)
	meshes.push(leftFootJoint)
	bodies.push(leftFootJointBody)
	//=====膝盖链接身子
	var leftFootJoint_bodyConstraint = new CANNON.PointToPointConstraint(leftFootJointBody, new CANNON.Vec3(0,0,0), pigBody, new CANNON.Vec3(2,-11.46146,0),100);
	world.addConstraint(leftFootJoint_bodyConstraint);

	//=====脚链接膝盖
	var foot_leftFootJointConstraint = new CANNON.PointToPointConstraint(leftFootBody, new CANNON.Vec3(0,5,0), leftFootJointBody, new CANNON.Vec3(0,0,0),100);
	world.addConstraint(foot_leftFootJointConstraint);

	//=====画线
	//setTimeout(drawLine,3000)
	//drawLine()

	//=====画线
	
	startP=new CANNON.Vec3(2,-11.46146,0).vadd(pigBody.position)
	leftFootCurve = new THREE.CatmullRomCurve3( [
		vec3toVector3(startP),vec3toVector3(leftFootJointBody.position),vec3toVector3(leftFootBody.position)
	] );
	//console.log(leftFootBody.position)
	// leftFootCurve = new THREE.CatmullRomCurve3( [
	// 	new THREE.Vector3(0,0,0),
	// 	new THREE.Vector3(10,10,10),
	// 	new THREE.Vector3(10,20,10)
	// ] );

	leftLegGeo = new THREE.TubeBufferGeometry( leftFootCurve, 20, 0.3, 8, false );
	leftLegGeo.attributes.position.needsUpdate = true
	leftLegMat = new THREE.MeshBasicMaterial( { color: 0xDE8E8E } );
	leftLeg = new THREE.Mesh( leftLegGeo, leftLegMat );
	scene.add( leftLeg );
	
}
