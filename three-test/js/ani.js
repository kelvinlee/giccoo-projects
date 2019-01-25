
var pigScale=0.1
var footLinearDamping=0.2
var handLinearDamping=0.2
var footAngularDamping=0.2
var handAngularDamping=0.2
//====================================左脚
var leftFoot
function setLeftFoot(){
	leftFoot=objs.foot
	objs.foot.scale.set(pigScale,pigScale,pigScale)
	objs.foot.position.set(0,0,0)
	objs.foot.castShadow=true
	var footmap=objs.foot.material.map
	var footMat=new THREE.MeshBasicMaterial({map:footmap,envMap:environment,reflectivity:0})

	objs.foot.material=footMat


	var leftFootJointGeo=new THREE.BoxGeometry(1,1,1)
	var leftFootJointMaterial=new THREE.MeshBasicMaterial({color:0xffff00})
	leftFootJoint=new THREE.Mesh(leftFootJointGeo,leftFootJointMaterial)
	//scene.add(leftFootJoint)
	setLeftFootPhy()
}
var leftFootBody,leftFootJointBody,leftLegGeo,leftLegMat,leftLeg//leftFootCurve
function setLeftFootPhy(){
	//=====左脚
	leftFootShap=new CANNON.Sphere(20*pigScale)//=====加物理外形
	leftFootBody=new CANNON.Body({
		mass:5,
		position:new CANNON.Vec3(20*pigScale,0,0),
		shape:leftFootShap,
		linearDamping:footLinearDamping,
		angularDamping:footAngularDamping
	})
	world.add(leftFootBody)
	meshes.push(objs.foot)
	bodies.push(leftFootBody)

	//=====左膝盖
	leftFootJointBody=new CANNON.Body({
		mass:1,
		position:new CANNON.Vec3(20*pigScale,50*pigScale,10*pigScale),
		linearDamping:footLinearDamping,
		angularDamping:footAngularDamping
	})
	world.add(leftFootJointBody)
	meshes.push(leftFootJoint)
	bodies.push(leftFootJointBody)
	//=====膝盖链接身子
	//var leftFootJoint_bodyConstraint = new CANNON.PointToPointConstraint(leftFootJointBody, new CANNON.Vec3(0,0,0), pigBody, new CANNON.Vec3(20*pigScale,-114.6146*pigScale/1.2,30*pigScale),100);
	var leftFootJoint_bodyConstraint = new CANNON.ConeTwistConstraint(leftFootJointBody, pigBody,{
		pivotA:	new CANNON.Vec3(0,0,0),
		pivotB: new CANNON.Vec3(20*pigScale,-114.6146*pigScale/1.2,30*pigScale),
		axisA: CANNON.Vec3.UNIT_Y,
		axisB: CANNON.Vec3.UNIT_Y,
    angle: Math.PI / 100,
    twistAngle: 0,
		maxForce:100
	});

	world.addConstraint(leftFootJoint_bodyConstraint);

	//=====脚链接膝盖
	//var foot_leftFootJointConstraint = new CANNON.PointToPointConstraint(leftFootBody, new CANNON.Vec3(0,50*pigScale/1.2,0), leftFootJointBody, new CANNON.Vec3(0,0,0),100);
	var foot_leftFootJointConstraint = new CANNON.ConeTwistConstraint(leftFootBody, leftFootJointBody,{
		pivotA:	new CANNON.Vec3(0,50*pigScale/1.2,0),
		pivotB: new CANNON.Vec3(0,0,0),
		axisA: CANNON.Vec3.UNIT_Y,
		axisB: CANNON.Vec3.UNIT_Y,
    angle: Math.PI / 100,
    twistAngle: 0,
		maxForce:100
	});
	world.addConstraint(foot_leftFootJointConstraint);

	//=====画线
	leftFootCurve= new THREE.CatmullRomCurve3([new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0)])
	leftLegGeo = new THREE.TubeBufferGeometry( leftFootCurve, 20, 3*pigScale, 8, false );
	leftLegGeo.attributes.position.needsUpdate = true
	leftLegMat = new THREE.MeshBasicMaterial( { color: 0xe2989b } );
	leftLeg = new THREE.Mesh( leftLegGeo, leftLegMat );
	scene.add( leftLeg );
	
}
//====================================右脚
var rightFoot
function setRightFoot(){
	rightFoot=objs.foot.clone()
	scene.add(rightFoot)
	rightFoot.scale.set(pigScale,pigScale,pigScale)
	rightFoot.position.set(0,0,0)
	rightFoot.castShadow=true
	var footmap=rightFoot.material.map
	var footMat=new THREE.MeshBasicMaterial({map:footmap,envMap:environment,reflectivity:0})

	rightFoot.material=footMat


	var rightFootJointGeo=new THREE.BoxGeometry(1,1,1)
	var rightFootJointMaterial=new THREE.MeshBasicMaterial({color:0xffff00})
	rightFootJoint=new THREE.Mesh(rightFootJointGeo,rightFootJointMaterial)
	//scene.add(rightFootJoint)
	setRightFootPhy()
}
var rightFootBody,rightFootJointBody,rightLegGeo,rightLegMat,rightLeg//rightFootCurve
function setRightFootPhy(){
	//=====右脚
	rightFootShap=new CANNON.Sphere(20*pigScale)//=====加物理外形
	rightFootBody=new CANNON.Body({
		mass:5,
		position:new CANNON.Vec3(-20*pigScale,0,0),
		shape:rightFootShap,
		linearDamping:footLinearDamping,
		angularDamping:footAngularDamping
	})
	console.log(rightFootBody.linearDamping)
	world.add(rightFootBody)
	meshes.push(rightFoot)
	bodies.push(rightFootBody)

	//=====右膝盖
	rightFootJointBody=new CANNON.Body({
		mass:1,
		position:new CANNON.Vec3(-20*pigScale,50*pigScale,30*pigScale),
		linearDamping:footLinearDamping,
		angularDamping:footAngularDamping
	})
	world.add(rightFootJointBody)
	meshes.push(rightFootJoint)
	bodies.push(rightFootJointBody)

	//=====膝盖链接身子
	var rightFootJoint_bodyConstraint = new CANNON.ConeTwistConstraint(rightFootJointBody, pigBody,{
		pivotA:	new CANNON.Vec3(0,0,0),
		pivotB:new CANNON.Vec3(-20*pigScale,-114.6146*pigScale/1.2,30*pigScale),
		axisA: CANNON.Vec3.UNIT_Y,
		axisB: CANNON.Vec3.UNIT_Y,
    angle: Math.PI / 100,
    twistAngle: 0,
		maxForce:100
	});
	world.addConstraint(rightFootJoint_bodyConstraint);

	//=====脚链接膝盖
	var foot_rightFootJointConstraint = new CANNON.ConeTwistConstraint(rightFootBody, rightFootJointBody,{
		pivotA:	new CANNON.Vec3(0,50*pigScale/1.2,0),
		pivotB: new CANNON.Vec3(0,0,0),
		axisA: CANNON.Vec3.UNIT_Y,
		axisB: CANNON.Vec3.UNIT_Y,
    angle: Math.PI / 100,
    twistAngle: 0,
		maxForce:100
	});
	world.addConstraint(foot_rightFootJointConstraint);

	//=====画线
	rightFootCurve= new THREE.CatmullRomCurve3([new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0)])
	rightLegGeo = new THREE.TubeBufferGeometry( rightFootCurve, 20, 3*pigScale, 8, false );
	rightLegGeo.attributes.position.needsUpdate = true
	rightLegMat = new THREE.MeshBasicMaterial( { color: 0xe2989b } );
	rightLeg = new THREE.Mesh( rightLegGeo, rightLegMat );
	scene.add( rightLeg );
	
}

//====================================右手
var rightHand
function setRightHand(){
	rightHand=objs.foot.clone()
	scene.add(rightHand)
	rightHand.scale.set(pigScale,pigScale,pigScale)
	rightHand.position.set(0,0,0)
	rightHand.castShadow=true
	var handmap=rightHand.material.map
	var handMat=new THREE.MeshBasicMaterial({map:handmap,envMap:environment,reflectivity:0})

	rightHand.material=handMat


	var rightHandJointGeo=new THREE.BoxGeometry(1,1,1)
	var rightHandJointMaterial=new THREE.MeshBasicMaterial({color:0xffff00})
	rightHandJoint=new THREE.Mesh(rightHandJointGeo,rightHandJointMaterial)
	//scene.add(rightHandJoint)
	setRightHandPhy()
}
var rightHandBody,rightHandJointBody,rightArmGeo,rightArmMat,rightArm//rightHandCurve
function setRightHandPhy(){
	//=====右手
	rightHandShap=new CANNON.Sphere(20*pigScale)//=====加物理外形
	rightHandBody=new CANNON.Body({
		mass:5,
		position:new CANNON.Vec3(-20*pigScale,0,0),
		shape:rightHandShap,
		linearDamping:handLinearDamping,
		angularDamping:handAngularDamping
	})
	world.add(rightHandBody)
	meshes.push(rightHand)
	bodies.push(rightHandBody)

	//=====右肘
	rightHandJointBody=new CANNON.Body({
		mass:1,
		position:new CANNON.Vec3(-20*pigScale,50*pigScale,30*pigScale),
		linearDamping:handLinearDamping,
		angularDamping:handAngularDamping
	})
	world.add(rightHandJointBody)
	meshes.push(rightHandJoint)
	bodies.push(rightHandJointBody)

	//=====肘链接身子
	var rightHandJoint_bodyConstraint = new CANNON.ConeTwistConstraint(rightHandJointBody, pigBody,{
		pivotA:	new CANNON.Vec3(0,0,0),
		pivotB:new CANNON.Vec3(-60*pigScale,-60*pigScale/1.5,10*pigScale),
		axisA: CANNON.Vec3.UNIT_Y,
		axisB: CANNON.Vec3.UNIT_Y,
    angle: Math.PI / 100,
    twistAngle: 0,
		maxForce:100
	});
	world.addConstraint(rightHandJoint_bodyConstraint);

	//=====手链接肘
	var hand_rightHandJointConstraint = new CANNON.ConeTwistConstraint(rightHandBody, rightHandJointBody,{
		pivotA:	new CANNON.Vec3(0,50*pigScale/1.5,0),
		pivotB: new CANNON.Vec3(0,0,0),
		axisA: CANNON.Vec3.UNIT_Y,
		axisB: CANNON.Vec3.UNIT_Y,
    angle: Math.PI / 100,
    twistAngle: 0,
		maxForce:100
	});
	world.addConstraint(hand_rightHandJointConstraint);

	//=====画线
	rightHandCurve= new THREE.CatmullRomCurve3([new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0)])
	rightArmGeo = new THREE.TubeBufferGeometry( rightHandCurve, 20, 3*pigScale, 8, false );
	rightArmGeo.attributes.position.needsUpdate = true
	rightArmMat = new THREE.MeshBasicMaterial( { color: 0xe2989b } );
	rightArm = new THREE.Mesh( rightArmGeo, rightArmMat );
	scene.add( rightArm );
	
}

//====================================左手
var leftHand
function setLeftHand(){
	leftHand=objs.foot.clone()
	scene.add(leftHand)
	leftHand.scale.set(pigScale,pigScale,pigScale)
	leftHand.position.set(0,0,0)
	leftHand.castShandow=true
	var handmap=leftHand.material.map
	var handMat=new THREE.MeshBasicMaterial({map:handmap,envMap:environment,reflectivity:0})

	leftHand.material=handMat


	var leftHandJointGeo=new THREE.BoxGeometry(1,1,1)
	var leftHandJointMaterial=new THREE.MeshBasicMaterial({color:0xffff00})
	leftHandJoint=new THREE.Mesh(leftHandJointGeo,leftHandJointMaterial)
	//scene.add(leftHandJoint)
	setLeftHandPhy()
}
var leftHandBody,leftHandJointBody,leftArmGeo,leftArmMat,leftArm//leftHandCurve
function setLeftHandPhy(){
	//=====左手
	leftHandShap=new CANNON.Sphere(20*pigScale)//=====加物理外形
	leftHandBody=new CANNON.Body({
		mass:5,
		position:new CANNON.Vec3(20*pigScale,0,0),
		shape:leftHandShap,
		linearDamping:handLinearDamping,
		angularDamping:handAngularDamping
	})
	leftHand.castShadow=true
	world.add(leftHandBody)
	meshes.push(leftHand)
	bodies.push(leftHandBody)

	//=====左肘
	leftHandJointBody=new CANNON.Body({
		mass:1,
		position:new CANNON.Vec3(20*pigScale,50*pigScale,30*pigScale),
		linearDamping:handLinearDamping,
		angularDamping:handAngularDamping
	})
	world.add(leftHandJointBody)
	meshes.push(leftHandJoint)
	bodies.push(leftHandJointBody)

	//=====肘链接身子
	var leftHandJoint_bodyConstraint = new CANNON.ConeTwistConstraint(leftHandJointBody, pigBody,{
		pivotA:	new CANNON.Vec3(0,0,0),
		pivotB:new CANNON.Vec3(60*pigScale,-60*pigScale/1.5,10*pigScale),
		axisA: CANNON.Vec3.UNIT_Y,
		axisB: CANNON.Vec3.UNIT_Y,
    angle: Math.PI / 100,
    twistAngle: 0,
		maxForce:100
	});
	world.addConstraint(leftHandJoint_bodyConstraint);

	//=====手链接肘
	var hand_leftHandJointConstraint = new CANNON.ConeTwistConstraint(leftHandBody, leftHandJointBody,{
		pivotA:	new CANNON.Vec3(0,50*pigScale/1.5,0),
		pivotB: new CANNON.Vec3(0,0,0),
		axisA: CANNON.Vec3.UNIT_Y,
		axisB: CANNON.Vec3.UNIT_Y,
    angle: Math.PI / 100,
    twistAngle: 0,
		maxForce:100
	});
	world.addConstraint(hand_leftHandJointConstraint);

	//=====画线
	leftHandCurve= new THREE.CatmullRomCurve3([new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0)])
	leftArmGeo = new THREE.TubeBufferGeometry( leftHandCurve, 20, 3*pigScale, 8, false );
	leftArmGeo.attributes.position.needsUpdate = true
	leftArmMat = new THREE.MeshBasicMaterial( { color: 0xe2989b } );
	leftArm = new THREE.Mesh( leftArmGeo, leftArmMat );
	//leftArm.castShadow=true
	scene.add( leftArm );
	
}




//==========手脚连线渲染

function updateArmLegs(){
	//=====左脚
	var leftLegStart=pigBody.quaternion.vmult(new CANNON.Vec3(20*pigScale,-90*pigScale,30*pigScale)).vadd(pigBody.position)
	leftFootCurve = new THREE.CatmullRomCurve3( [		vec3toVector3(leftLegStart),vec3toVector3(leftFootJointBody.position),vec3toVector3(leftFootBody.position)	] );
	leftLegGeo.copy( new THREE.TubeBufferGeometry( leftFootCurve, 20, 15*pigScale, 8, false ))

	//=====右脚
	var rightLegStart=pigBody.quaternion.vmult(new CANNON.Vec3(-20*pigScale,-90*pigScale,30*pigScale)).vadd(pigBody.position)
	rightFootCurve = new THREE.CatmullRomCurve3( [		vec3toVector3(rightLegStart),vec3toVector3(rightFootJointBody.position),vec3toVector3(rightFootBody.position)	] );
	rightLegGeo.copy( new THREE.TubeBufferGeometry( rightFootCurve, 20, 15*pigScale, 8, false ))

	//=====右手
	var rightArmStart=pigBody.quaternion.vmult(new CANNON.Vec3(-30*pigScale,-30*pigScale,30*pigScale)).vadd(pigBody.position)
	rightHandCurve = new THREE.CatmullRomCurve3( [		vec3toVector3(rightArmStart),vec3toVector3(rightHandJointBody.position),vec3toVector3(rightHandBody.position)	] );
	rightArmGeo.copy( new THREE.TubeBufferGeometry( rightHandCurve, 20, 15*pigScale, 8, false ))

	//=====左手
	var leftArmStart=pigBody.quaternion.vmult(new CANNON.Vec3(30*pigScale,-30*pigScale,30*pigScale)).vadd(pigBody.position)
	leftHandCurve = new THREE.CatmullRomCurve3( [		vec3toVector3(leftArmStart),vec3toVector3(leftHandJointBody.position),vec3toVector3(leftHandBody.position)	] );
	leftArmGeo.copy( new THREE.TubeBufferGeometry( leftHandCurve, 20, 15*pigScale, 8, false ))
}


