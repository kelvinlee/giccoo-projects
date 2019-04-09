

// MORPHS
var morph,morphs=[],mixer, animGroups = [];
var ANIMATION_GROUPS = 25;//

function addMorph( _obj, clip, speed, duration, x, y, z, fudgeColor, massOptimization ) {
	
	_obj=_obj.clone()
	console.log(_obj)
	var _sk=new THREE.SkeletonUtils()

	//var bone = _obj.children[0].clone()
	//var mesh = _obj.children[1].clone()
	//var skeleton=new THREE.Skeleton(bone)

	//mesh.skeleton=skeleton
	//mesh.add(bone)
	//mesh.bind(skeleton)
	//mesh.bind(new THREE.)

	//console.log("bone",bone,"mesh",mesh,"_obj_sk",_obj,_obj.children[1].skeleton)

	 //mesh.material = mesh.material.clone();
	// if ( fudgeColor ) {
	// 	mesh.material.color.offsetHSL( 0, Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25 );
	// }
	// //mesh.speed = speed;
	// 			play();
	// 			setDuration( duration ).
	// 			startAt( - duration * phase ).
	// 		mixer.clipAction( clip, animGroup ).
	// 		play();
	// 		setDuration( duration ).
	// 		startAt( - duration * Math.random() ).
	// 		var phase = ( index + randomness ) / ANIMATION_GROUPS;
	// 		var randomness = 0.6 * Math.random() - 0.3;
	// 	//console.log("这里没问题")
	// 	animGroup.add( mesh );
	// 	if ( ! mixer.existingAction( clip, animGroup ) ) {
	// 	mixer.clipAction( clip, mesh ).
	// 	var animGroup = animGroups[ index ];
	// 	var index = Math.floor( Math.random() * ANIMATION_GROUPS )
	// 	}
	// if ( massOptimization ) {
	// }
	// } else {
	//mesh.position.set( x, y, z );
	
	//bone.scale.set(1,1,1)
	//console.log("mesh.scale",mesh.scale)

	//mesh.rotation.y = Math.PI / 2;
	//mesh.castShadow = true;
	//mesh.receiveShadow = true;
	//scene.add( bone );
	//scene.add( _obj );
	//morphs.push( obj3d );
}


