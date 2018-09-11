////////////////////////////////////////////////////////////////////////////////////////////////////////===============part1 开头音乐
var part1=new PIXI.Container()
var p1pic=new pSprite("img/part1pic.png")
var btnPlay=new pSprite("img/btn-play.png")
var btnStop=new pSprite("img/btn-pause.png")
var bgm=$("#bgm")[0]

function setPart1 () {
	main.addChild(part1)
	part1.addChild(p1pic,btnPlay,btnStop)
	btnPlay.y=btnStop.y=413
	btnStop.alpha=0
	btnStop.interactive=true
	btnStop.touchstart=goBGM
}
function goBGM(){
	if(btnStop.alpha==0){
		btnStop.alpha=1
		bgm.play()
	}else{
		btnStop.alpha=0
		bgm.pause()
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////===============part2 基因按钮
var part2=new PIXI.Container()
var gene=new pSprite("img/btn-gene.png")
var geneFP=new pSprite("img/gene-fp.png")
var geneFP2=new pSprite("img/gene-fp2.png")
var geneMask=new pSprite("img/gene-mask.png")
var geneLine=new PIXI.Graphics()
var muiscA=[]
function setPart2(){
	main.addChild(part2)
	part2.y=1372
	part2.addChild(geneLine,gene,geneFP2,geneFP,geneMask)
	geneLine.y=78
	geneFP.mask=geneMask
	geneFP.y=-2
	TweenMax.to(geneMask,1.5,{y:213,repeat:10000,ease:Linear.easeNone})
	//geneFP2.alpha=.5
  setMusicLine()

  gene.x=320
  gene.pivot.x=151
  gene.interactive=true
  gene.touchstart=goH5
}
var pointA=[]
var pointXA=[0,57,68,79,90,101,122,133,144,155,496,507,518,529,540,551,562,573,584,640]
function setMusicLine(){
	for (var i = 0; i < 20; i++) {
		var _point=new PIXI.Point(0,0)
		pointA.push(_point)
		_point.x=pointXA[i]
		if(i!=0&&i!=1&&i!=9&&i!=10&&i!=18&&i!=19){
			TweenMax.to(_point,1,{y:Math.random()*78*Math.pow(-1,i),onComplete:pointLoop,onCompleteParams:[_point]})
		}
		
	};
	renderer.ticker.add(function(){
		geneLine.clear()
		geneLine.beginFill(0x000000,0)
  	geneLine.lineStyle(6,0x5fa00b,1,1)
  	geneLine.drawPolygon(pointA)
	})
}

function pointLoop(_tar){
	if(_tar.y>=0){
		TweenMax.to(_tar,Math.random()*.1+.2,{y:-Math.random()*78,onComplete:pointLoop,onCompleteParams:[_tar],ease:Linear.easeNone})
	}else{
		TweenMax.to(_tar,Math.random()*.1+.2,{y:Math.random()*78,onComplete:pointLoop,onCompleteParams:[_tar],ease:Linear.easeNone})
	}
}
function goH5(){
	console.log("跳转h5")
	window.location.href='http://m.giccoo.com/soupdaren/'
}

////////////////////////////////////////////////////////////////////////////////////////////////////////===============part2 歌单部分
var part3=new PIXI.Container()
var p3title=new pSprite("img/part3title.png")
var p3bottom=new pSprite("img/part3bottom.png")
var p3btn1=new PIXI.Container()
var p3btn2=new PIXI.Container()
var p3btn3=new PIXI.Container()
var p3btn4=new PIXI.Container()
function setPart3(){
	main.addChild(part3)
	part3.y=1688
}