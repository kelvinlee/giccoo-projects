var fire=new THREE.Group()
function setFire(){
	objs.fire.scale.set(.1,.1,.1)
	// objs.fire.children[0].castShadow=true
	// objs.fire.children[0].receiveShadow=true
	objs.fire.children[1].castShadow=true
	objs.fire.children[1].receiveShadow=true
	objs.fire.children[2].castShadow=true
	objs.fire.children[2].receiveShadow=true
	scene.add(fire)
	fire.add(objs.fire)
	fire.position.set(-60,4,160)

	fire.scale.set(.5,.5,.5)

	for (var i = 0; i <30; i++) {
		addAfire()
	};

	var firelight=new THREE.PointLight(0xff2200,4,80,3)
	firelight.position.y=10
	//firelight.castShadow=true
	fire.add(firelight)

}

function addAfire(){
	var fireMat=new THREE.SpriteMaterial({color:0xff3c00})
	var aFire=new THREE.Sprite(fireMat)

	aFire.scale.set(3.5,3.5,1)
	aFire.material.transparent=true
	fire.add(aFire)
	//aFire.material.opacity=1
	//aFire.material.blending = THREE.MultiplyBlending;//'NoBlending', 'NormalBlending', 'AdditiveBlending', 'SubtractiveBlending', 'MultiplyBlending' 


	var lifetime=2
	var delayT=Math.random()*2
	//var _FireColor={color:0xffffff}
	//TweenMax.to(_FireColor,lifetime,{hexColors:0xff0000,repeat:10000})

	var _color=new THREE.Color(0xff0000)
	var _endColor=new THREE.Color(0xffff88)
	TweenMax.to(_color,lifetime,{r:_endColor.r,g:_endColor.g,b:_endColor.b,repeat:10000,delay:delayT+.05,onUpdate:function(){
		aFire.material.color=_color
		//console.log(_color.color)
	}})
	//TweenMax.to(this,lifetime,{hexColors:{_FireColor:0xff0000},repeat:10000})
	aFire.position.set(Math.random()*8-4,0,Math.random()*10-5)

	

	TweenMax.to(aFire.position,lifetime,{y:20+Math.random()*10,repeat:10000,delay:delayT})
	TweenMax.to(aFire.scale,lifetime,{x:6,y:6,repeat:10000,delay:delayT})
	TweenMax.to(aFire.material,lifetime,{opacity:0,repeat:10000,delay:delayT})
	TweenMax.to(aFire.position,lifetime*(Math.random()+1),{x:Math.random()*16-8,z:Math.random()*16-8,yoyo:true,repeat:10000,delay:delayT,ease:Sine.easeInOut})
	
	TweenMax.to(aFire.material,lifetime,{rotation:Math.PI*(Math.random()*4-2),repeat:10000})
	//TweenMax.to(aFire.material,lifetime,{color:0xff0000,repeat:10000})
	
}



// //==粒子
// var clock = new THREE.Clock(),tick=0
// var options, spawnerOptions, particleSystem;
// function setPartical(){
// 	//粒子
// 	particleSystem = new THREE.GPUParticleSystem( {
// 				maxParticles: 25000//00
// 			} );
// 			scene.add( particleSystem );
	

// 	// options passed during each spawned
// 	options = {
// 				position: new THREE.Vector3(-60,4,160),
// 				positionRandomness: 5,
// 				velocity: new THREE.Vector3(0,1,0),
// 				velocityRandomness: .5,
// 				color: 0xff0000,
// 				colorRandomness: .2,
// 				turbulence: 0.2,//.5
// 				lifetime: 2,
// 				size: 20,
// 				sizeRandomness: 5
// 			};
// 	spawnerOptions = {
// 				spawnRate: 15000,
// 				horizontalSpeed: 0,
// 				verticalSpeed: 0,
// 				timeScale: 1
// 			};
// }

// function renderPartical(){
// 	var delta = clock.getDelta() * spawnerOptions.timeScale;
// 			tick += delta;
// 			if ( tick < 0 ) tick = 0;
// 			if ( delta > 0 ) {
// 				// options.position.x = Math.sin( tick * spawnerOptions.horizontalSpeed ) * 20;
// 				// options.position.y = Math.sin( tick * spawnerOptions.verticalSpeed ) * 10;
// 				// options.position.z = Math.sin( tick * spawnerOptions.horizontalSpeed + spawnerOptions.verticalSpeed ) * 5;
// 				for ( var x = 0; x < spawnerOptions.spawnRate * delta; x ++ ) {
// 					// Yep, that's really it.	Spawning particles is super cheap, and once you spawn them, the rest of
// 					// their lifecycle is handled entirely on the GPU, driven by a time uniform updated below
// 					particleSystem.spawnParticle( options );
// 				}
// 			}
// 			particleSystem.update( tick );
// }