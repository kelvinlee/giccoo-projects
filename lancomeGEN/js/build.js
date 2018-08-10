var _CDN = "./"
var imageList = [
	_CDN+"img/test.png"
];
var _NORMAL=PIXI.BLEND_MODES.NORMAL,
    _ADD=PIXI.BLEND_MODES.ADD,
    _MULTIPLY=PIXI.BLEND_MODES.MULTIPLY,
    _SCREEN=PIXI.BLEND_MODES.SCREEN;
    
var buildUGC = function () {
	console.log("app",this,this.opts.w,this.opts.h)
	var test = new Sprite(getTe(_CDN+"img/test.png"));
	var gra = new Graphics();
	var con = new Container();
	// var ani = new AnimatedSprite();
	this.stage.addChild(test,gra,con);
}