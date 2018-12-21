var title1,title2
var part1C=new PIXI.Container()
function setPart1 () {
	// body...
	mainC.addChild(part1C)
	title1=new Sprite(getTe(_CDN+"img/title.png"));
	title2=new Sprite(getTe(_CDN+"img/title"+Type+".png"));

	part1C.addChild(title1,title2)
	title2.y=196
}