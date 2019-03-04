var cloudC=new THREE.Group()
var _far=2
function setCloud () {
	// body...
	scene.add(cloudC)

	addACloud(150*_far,220*_far/2,144*_far,100*_far,100*_far)
	addACloud(0*_far,180*_far/2,-180*_far,60*_far,60*_far)
	addACloud(-150*_far,200*_far/2,144*_far,80*_far,80*_far)
	//addACloud(-0,200,-0,50,50)
}

function addACloud(_x,_y,_z,_width,_height){
	var cloudMap=new THREE.TextureLoader().load('img/cloud/cloud000.png')
	var cloudMat=new THREE.SpriteMaterial({map:cloudMap,color:0x999999})
	var aCloud=new THREE.Sprite(cloudMat)
	cloudC.add(aCloud)
	//aCloud.material.lights.set(true)
	var _color=new THREE.Color(0x999999)
	var _endColor=new THREE.Color(0xffffff)
	TweenMax.to(_color,aDay/2,{r:_endColor.r,g:_endColor.g,b:_endColor.b,ease:Sine.easeInOut,repeat:10000,yoyo:true,onUpdate:function(){
		aCloud.material.color=_color
		//console.log(_color.color)
	}})

	aCloud.scale.set(_width,_height,1)
	aCloud.position.set(_x,_y,_z)

	TweenMax.to(aCloud.position,3,{y:"-=80",repeat:10000,yoyo:true,ease:Sine.easeInOut,delay:Math.random()*3})


}