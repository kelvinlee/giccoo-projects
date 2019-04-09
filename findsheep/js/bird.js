
//var birdFly_ani
//var birdA=[]
function setBird () {
	// body...
	//console.log("00dd99d",anis.bird)
	// birdFly_ani=new THREE.AnimationMixer(objs.bird)
	// birdFly_ani.clipAction(anis.bird[0]).setDuration(1).play()

	// objs.bird.position.y=250
	// objs.bird.children[1].castShadow=true
	// objs.bird.children[1].material.flatShading=true
	// console.log("objs.bird",objs.bird)

	// var _abird=objs.bird.clone()
	// console.log("_abird",_abird)
	//scene.add(_abird)

	loadBird()


	//birdMove()

}

var aniloader = new THREE.GLTFLoader();
function loadBird(){
	mixer = new THREE.AnimationMixer( scene );
	for ( var i = 0; i !== ANIMATION_GROUPS; ++ i ) {
		var group = new THREE.AnimationObjectGroup();
		animGroups.push( group );
	}

	aniloader.load( "mod/bird.gltf", function ( gltf ) {

	var obj = gltf.scene.children[ 0 ]//.children[1];
	//var obj3d = gltf.scene.children[0]
	var clip = gltf.animations[ 0 ];
	//console.log("mesh",mesh)
	for ( var i = 0; i < 1; i ++ ) {
			addMorph( obj, clip, 550, 1, i, 250, i, false, false );
			//scene.add(mesh)
		}
	} );
}


function updateBird(){
	var delta = clock.getDelta();
				if ( mixer ) mixer.update( delta );
				// for ( var i = 0; i < morphs.length; i ++ ) {
				// 	morph = morphs[ i ];
					
				// }

	//console.log("ok")
}

function birdMove(){

}