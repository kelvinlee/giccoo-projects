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
	btnStop.tap=goBGM
}
function goBGM(){
	if(btnStop.alpha==0){
		btnStop.alpha=1
		bgm.play()
	}else{
		btnStop.alpha=0
		bgm.pause()
	}

	for (var i = 0; i < 4; i++) {
		TweenMax.to(p3btnA[i],.5,{y:271+i*132})
		musicA[i].pause()
	};
	nowSong=0
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
  gene.tap=goH5
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

////////////////////////////////////////////////////////////////////////////////////////////////////////===============part3 歌单部分
var part3=new PIXI.Container()
var p3title=new pSprite("img/part3title.png")
var p3bottom=new pSprite("img/part3bottom.png")
var p3btn1=new PIXI.Container()
var p3btn2=new PIXI.Container()
var p3btn3=new PIXI.Container()
var p3btn4=new PIXI.Container()
var p3dic1=new pSprite("img/part3disc.png")
var p3dic2=new pSprite("img/part3disc.png")
var p3dic3=new pSprite("img/part3disc.png")
var p3dic4=new pSprite("img/part3disc.png")
var p3song1=new pSprite("img/song1.png")
var p3song2=new pSprite("img/song2.png")
var p3song3=new pSprite("img/song3.png")
var p3song4=new pSprite("img/song4.png")
var p3dicA=[p3dic1,p3dic2,p3dic3,p3dic4]
var p3songA=[p3song1,p3song2,p3song3,p3song4]
var p3btnA=[p3btn1,p3btn2,p3btn3,p3btn4]
var p3t=new pSprite("img/part3t.png")
var p3arrow=new pSprite("img/part3arrow.png")
function setPart3(){
	main.addChild(part3)
	part3.y=1688
	part3.addChild(p3title)
	part3.scale.x=part3.scale.y=1.2
	part3.x=-64

	for (var i = 0; i < 4; i++) {
		p3btnA[i].addChild(p3dicA[i],p3songA[i])
		p3songA[i].x=320-256/2+10
		p3btnA[i].y=271+i*132
		p3dicA[i].x=126
		part3.addChild(p3btnA[i])
		p3songA[i].interactive=true
		p3songA[i].tap=playSong
	};

	part3.addChild(p3bottom,p3t,p3arrow)
	p3t.position.set(261,926)
	p3arrow.x=-10
	TweenMax.to(p3arrow,1,{x:5,repeat:10000,yoyo:true})
	p3t.interactive=true
	p3t.tap=goList
}
function goList(){
	console.log("去歌单")
}
var nowSong=0
var musicA=[$("#music1")[0],$("#music2")[0],$("#music3")[0],$("#music4")[0]]
function playSong(_e){
	bgm.pause()
	btnStop.alpha=0
	for (var i = 0; i < 4; i++) {
		TweenMax.to(p3btnA[i],.5,{y:271+i*132})
		musicA[i].pause()
		if(_e.target==p3songA[i]&&nowSong!=i+1){
			console.log("song---",i)
			TweenMax.to(p3btnA[i],.5,{y:271+i*132-20,ease:Back.easeOut})
			nowSong=i+1
			musicA[i].play()
		}else if(_e.target==p3songA[i]&&nowSong==i+1){
			musicA[i].pause()
			nowSong=999
		}
	};
}

////////////////////////////////////////////////////////////////////////////////////////////////////////===============part4 留言板部分
var part4=new PIXI.Container()
var p4title=new pSprite("img/part4title.png")
var p4t1=new pSprite("img/p4t1.png")
var p4t2=new pSprite("img/p4t2.png")
var theNewNowHeight=1100

function setPart4(){
	main.addChild(part4)
	part4.y=2980
	part4.addChild(p4title,p4t1,p4t2)
	p4t1.y=1040
	message("尊敬的所有乘客您好：您所乘坐的列车已抵达终点站。下车前，请记得回头再看一眼，将每个人的脸庞铭记于心。未来的人生中，我们将是彼此的红日，勇往直前，生生不息","歌名-哈哈哈",99999,0,19283751)
	message("尊敬的所终点站。下车前，请们将是彼此的红日，勇往直前，生生不息","歌名-哈哈哈",199,0,19283752)
	message("尊敬的所有乘客您好：您所乘坐的列车已脸日，勇往直前，生生不息","歌名-哈哈哈",0,0,19283753)
	message("尊敬的所有乘客您好：您所乘坐的列车已记于心。未来的人生中，我们将是彼此的红日，勇往直前，生生不息","歌名-哈哈哈",199,0,19283754)
	message("尊敬客您好：您所。下车前，请记得回头再看一眼，将每个人的脸庞铭记于心。未来的人生中，我们将是彼此的红日，勇往直前，生生不息","歌名-哈哈哈",99999,0,19283751)
	message("尊敬的所有乘客您彼此的红日，勇往直前，生生不息","歌名-哈哈哈",199,0,19283752)
	message("下车前，请记得回头再看一眼，将每个人的脸日，勇往直前，生生不息","歌名-哈哈哈",0,0,19283753)
	message("生生不息","歌名-哈哈哈",199,0,19283754)
	message("下车前，请记得回头再看一眼，将每个人的脸日，勇往直前，生生不息","歌名-哈哈哈",0,0,19283753)
	message("生生不息","歌名-哈哈哈",199,0,19283754)

	p4t2.y=nowHeight+20

	nowHeight+=84
	

	setUserForm()
	theNewNowHeight=nowHeight

	message("尊敬的所有乘日，勇往直前，生生不息","歌名-哈哈哈",99999,0,19283751)
	message("尊敬的所有乘客您好：您所乘坐的列车已抵达终点站。下车前，请们将是彼此的红日，勇往直前，生生不息","歌名-哈哈哈",199,0,19283752)
	message("尊敬的所有日，勇往直前，生生不息","歌名-哈哈哈",0,0,19283753)
	message("尊敬的所有乘，我们将是彼此的红日，勇往直前，生生不息","歌名-哈哈哈",199,0,19283754)
	message("尊敬的所有乘客您好：您所乘坐的列车已抵达终点站。下车前，请记得回头再看一眼，将每个人的脸庞铭记于心。未来的人生中，我们将是彼此的红日，勇往直前，生生不息","歌名-哈哈哈",99999,0,19283751)
	message("尊敬站。下车前，请们将是彼此的红日，勇往直前，生生不息","歌名-哈哈哈",199,0,19283752)
	message("尊敬的所，将每个人的脸日，勇往直前，生生不息","歌名-哈哈哈",0,0,19283753)
	message("生生不息","歌名-哈哈哈",199,0,19283754)
	message("尊敬的所，将每个人的脸日，勇往直前，生生不息","歌名-哈哈哈",0,0,19283753)
	message("生生不息","歌名-哈哈哈",199,0,19283754)
	message("尊敬的所有乘日，勇往直前，生生不息","歌名-哈哈哈",99999,0,19283751)
	message("尊敬的所有乘客您好：您所乘坐的列车已抵达终点站。下车前，请们将是彼此的红日，勇往直前，生生不息","歌名-哈哈哈",199,0,19283752)
	message("尊敬的所有日，勇往直前，生生不息","歌名-哈哈哈",0,0,19283753)
	message("尊敬的所有乘，我们将是彼此的红日，勇往直前，生生不息","歌名-哈哈哈",199,0,19283754)
	message("尊敬的所有乘客您好：您所乘坐的列车已抵达终点站。下车前，请记得回头再看一眼，将每个人的脸庞铭记于心。未来的人生中，我们将是彼此的红日，勇往直前，生生不息","歌名-哈哈哈",99999,0,19283751)
	message("尊敬站。下车前，请们将是彼此的红日，勇往直前，生生不息","歌名-哈哈哈",199,0,19283752)
	message("尊敬的所，将每个人的脸日，勇往直前，生生不息","歌名-哈哈哈",0,0,19283753)
	message("生生不息","歌名-哈哈哈",199,0,19283754)
	message("尊敬的所，将每个人的脸日，勇往直前，生生不息","歌名-哈哈哈",0,0,19283753)
	message("生生不息","歌名-哈哈哈",199,0,19283754)
	message("尊敬的所有乘日，勇往直前，生生不息","歌名-哈哈哈",99999,0,19283751)
	message("尊敬的所有乘客您好：您所乘坐的列车已抵达终点站。下车前，请们将是彼此的红日，勇往直前，生生不息","歌名-哈哈哈",199,0,19283752)
	message("尊敬的所有日，勇往直前，生生不息","歌名-哈哈哈",0,0,19283753)
	message("尊敬的所有乘，我们将是彼此的红日，勇往直前，生生不息","歌名-哈哈哈",199,0,19283754)
	message("尊敬的所有乘客您好：您所乘坐的列车已抵达终点站。下车前，请记得回头再看一眼，将每个人的脸庞铭记于心。未来的人生中，我们将是彼此的红日，勇往直前，生生不息","歌名-哈哈哈",99999,0,19283751)
	message("尊敬站。下车前，请们将是彼此的红日，勇往直前，生生不息","歌名-哈哈哈",199,0,19283752)
	message("尊敬的所，将每个人的脸日，勇往直前，生生不息","歌名-哈哈哈",0,0,19283753)
	message("生生不息","歌名-哈哈哈",199,0,19283754)
	message("尊敬的所，将每个人的脸日，勇往直前，生生不息","歌名-哈哈哈",0,0,19283753)
	message("生生不息","歌名-哈哈哈",199,0,19283754)

	

	//message("addsfasdf asdfasdfas fasdfasdfasdfasdfa sdfsadfasdfasd fasdfasdf sadf","歌名-哈哈哈",199)
	//addReturn("尊敬的所有乘客您好：\n您所乘坐的列车已抵达终点站。下车前，请记得回头再看一眼，将每个人的脸庞铭记于心。未来的人生中，我们将是彼此的红日，勇往直前，生生不息")
}

