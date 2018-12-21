var title1,title2
var part1C=new PIXI.Container()
function setPart1 () {
	// body...
	mainC.addChild(part1C)

	title1=new Sprite(getTe(_CDN+"img/title.png"));//===============标题
	title2=new Sprite(getTe(_CDN+"img/title"+Type+".png"));
	title2.y=196
	part1C.addChild(title1,title2)

	setAni1()
	//setAni2()
	//setAni3()
	//setAni4()
}


function setAni1(){

}