var _CDN = "./";
// var _CDN = "//image.giccoo.com/projects/YearOfThePig/";
var imageList = [
	_CDN+"img/pig-hand-last.png"
]
var buildUGC = function () {
	console.log("app",this,this.opts.w,this.opts.h)
	this.stage.addChild(new Spr(_CDN+"img/pig-hand-last.png"))
}