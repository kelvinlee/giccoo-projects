var cloudC=new THREE.Group()
var _far=.8
function setCloud () {
	// body...
	scene.add(cloudC)

	addACloud(150*_far,250,144*_far,100*_far,-100*_far,'img/cloud/cloud000.png')
	addACloud(0*_far,210,-180*_far,60*_far,60*_far,'img/cloud/cloud001.png')
	addACloud(-150*_far,230,144*_far,80*_far,80*_far,'img/cloud/cloud002.png')


	//addACloud(-0,200,-0,50,50)
}

function addACloud(_x,_y,_z,_width,_height,_url){
	var cloudMap=new THREE.TextureLoader().load(_url)
	var cloudMat=new THREE.SpriteMaterial({map:cloudMap,color:0x999999})
	var aCloud=new THREE.Sprite(cloudMat)

	// var cloudMap = new THREE.TextureLoader().load( 'img/cloud.png' );
	// cloudAni = new TextureAnimator( cloudMap, 4, 4, 16, 55 ); // texture, #horiz, #vert, #total, duration.
	// var cloudMat = new THREE.SpriteMaterial( { map: cloudMap ,color:0xffffff} );
	// aCloud = new THREE.Sprite( cloudMat );
	// cloudC.add(aCloud);



	cloudC.add(aCloud)
	var _color=new THREE.Color(0x999999)
	var _endColor=new THREE.Color(0xffffff)
	TweenMax.to(_color,aDay/2,{r:_endColor.r,g:_endColor.g,b:_endColor.b,ease:Sine.easeInOut,repeat:10000,yoyo:true,onUpdate:function(){
		aCloud.material.color=_color
	}})

	aCloud.scale.set(_width*1.3,_height*1.3,1)
	aCloud.position.set(_x-50,_y,_z)

	TweenMax.to(aCloud.position,3,{y:"-=40",repeat:10000,yoyo:true,ease:Sine.easeInOut,delay:Math.random()*3})


}
var clock = new THREE.Clock();
function updateCloud(){
	var delta = clock.getDelta(); 

	cloudAni.update(1000 * delta);
}


function TextureAnimator(texture, tilesHoriz, tilesVert, numTiles, tileDispDuration) 
{	
	// note: texture passed by reference, will be updated by the update function.
		
	this.tilesHorizontal = tilesHoriz;
	this.tilesVertical = tilesVert;
	// how many images does this spritesheet contain?
	//  usually equals tilesHoriz * tilesVert, but not necessarily,
	//  if there at blank tiles at the bottom of the spritesheet. 
	this.numberOfTiles = numTiles;
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping; 
	texture.repeat.set( 1 / this.tilesHorizontal, 1 / this.tilesVertical );

	// how long should each image be displayed?
	this.tileDisplayDuration = tileDispDuration;

	// how long has the current image been displayed?
	this.currentDisplayTime = 0;

	// which image is currently being displayed?
	this.currentTile = 0;
		
	this.update = function( milliSec )
	{
		this.currentDisplayTime += milliSec;
		while (this.currentDisplayTime > this.tileDisplayDuration)
		{
			this.currentDisplayTime -= this.tileDisplayDuration;
			this.currentTile++;
			if (this.currentTile == this.numberOfTiles)
				this.currentTile = 0;
			var currentColumn = this.currentTile % this.tilesHorizontal;
			texture.offset.x = currentColumn / this.tilesHorizontal;
			var currentRow = Math.floor( this.currentTile / this.tilesHorizontal );
			texture.offset.y = currentRow / this.tilesVertical;
		}
	};
}		