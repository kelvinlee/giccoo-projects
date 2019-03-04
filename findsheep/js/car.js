var carC=new THREE.Group()
function setCar () {
	objs.car.position.set(0,0,0)
	objs.car.scale.set(.1,.1,.1)
	objs.car.castShadow=true
	objs.car.receiveShadow=true

	objs.car_wheel.scale.set(.1,.1,.1)
	objs.car_wheel.castShadow=true

	carC.add(objs.car,objs.car_wheel)
	scene.add(carC)
	carC.position.set(-60,5,130)
	carC.scale.set(.4,.4,.4)
	//carC.rotation.y=Math.PI*-.5


	objs.car.material.emissive=new THREE.Color( 0xffffff );//发光
	//TweenMax.to(objs.car.material,1,{emissiveIntensity:0,repeat:100000})
	//objs.car.material.flatShading=true

	objs.car_wheel.scale.set(.1,.1,.1)
	objs.car_wheel.castShadow=true

	TweenMax.to(objs.car.position,.2,{y:.8,repeat:10000,yoyo:true})
	TweenMax.to(objs.car.scale,.2,{z:.095,repeat:10000,yoyo:true,delay:.3})

	moveCar()
}

var carPath=[
	[42,114,14],
	[3,110,38],
	[-77,109,-7],
	[-37,73,-133],
	[24,46,-141],
	[100,49,-98],
	[115,26,87],
	[55,23,161],
	[9,11,182],
	[-27,4,171],

	[-59,4,178],
	[-82,4,171],
	[-82,5,142],
	[-41,4.5,138],

	[-27,4,171],
	[9,11,182],
	[55,23,161],
	[115,26,87],
	[100,49,-98],
	[24,46,-141],
	[-37,73,-133],
	[-77,109,-7],
	[3,110,38],
	[42,114,14]]
var carLastPos=new THREE.Vector3(0,0,0)//{x:carPath[0][0],y:carPath[0][1],z:carPath[0][2]}

var lastLookat=new THREE.Vector3(0,0,0)

var carSpeed=50
function  moveCar () {
	var tcar=new TimelineMax({repeat:10000,delay:0})

	carC.position.set(carPath[0][0],carPath[0][1],carPath[0][2])

	carLastPos.copy(carC.position)
	tcar.add(TweenMax.to(carC.position,2,{}))
	for (var i = 0; i < carPath.length-1; i++) {
		var _t
		var _start=new THREE.Vector3(carPath[i][0],carPath[i][1],carPath[i][2])
		var _end=new THREE.Vector3(carPath[i+1][0],carPath[i+1][1],carPath[i+1][2])
		_t=_start.distanceTo(_end)/carSpeed

		
		tcar.add(TweenMax.to(carC.position,_t,{x:carPath[i+1][0],y:carPath[i+1][1],z:carPath[i+1][2],ease:Linear.easeNone,onUpdate:function(){
			if(carLastPos.x==carC.position.x&&carLastPos.y==carC.position.y&&carLastPos.z==carC.position.z){

			}else{

				var nextPos=new THREE.Vector3(carC.position.x*2-carLastPos.x*1,carC.position.y*2-carLastPos.y*1,carC.position.z*2-carLastPos.z*1)
				var q1=carC.quaternion.clone()
				carC.lookAt(nextPos)
				var q2=carC.quaternion.clone()
				carC.quaternion.slerp( q1, .92 )
				carLastPos.copy(carC.position)
			}
		}}))
	};

}