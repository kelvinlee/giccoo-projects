////////////////////////////////////////////////////////////////////////////////////////////////////////===============part1 开头音乐
var part1=new PIXI.Container()
var p1pic=new pSprite("img/part1pic.png")
var p1pic2=new pSprite("img/part1pic2.png")
var p1pic3=new pSprite("img/part1pic3.png")
var p1pic4=new pSprite("img/part1pic4.png")
var btnPlay=new pSprite("img/btn-play.png")
var btnStop=new pSprite("img/btn-pause.png")
var bgm=$("#bgm")[0]

function setPart1 () {
	main.addChild(part1)
	part1.addChild(p1pic,p1pic3,p1pic2,btnPlay,p1pic4,btnStop)
	btnPlay.y=btnStop.y=413
	btnStop.alpha=0
	btnStop.interactive=true
	btnStop.tap=goBGM

	p1pic3.pivot.set(258,258)
	p1pic3.position.set(320,494)
	TweenMax.to(p1pic3,.7,{rotation:Math.PI*2,repeat:10000,ease:Linear.easeNone})
	p1pic3.alpha=.5
	p1pic3.visible=false

	p1pic4.blendMode=_ADD
	TweenMax.to(p1pic4,2,{alpha:0,repeat:10000,yoyo:true})
}
function goBGM(){
	if(btnStop.alpha==0){
		btnStop.alpha=1
		bgm.play()
		p1pic3.visible=true
	}else{
		btnStop.alpha=0
		bgm.pause()
		p1pic3.visible=false
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
	part3.y=1688-300
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
	p1pic3.visible=false
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
var p4title1=new pSprite("img/part4title1.png")
var p4title2=new pSprite("img/part4title2.png")
var p4light1=new pSprite("img/part4light1.png")
var p4light2=new pSprite("img/part4light2.png")

var p4t1=new pSprite("img/p4t1.png")
var p4t2=new pSprite("img/p4t2.png")
var theNewNowHeight=1100
var nowHeightA=[]
var endBtn=new pSprite("img/endbtn.png")

function setPart4(_list){
	main.addChild(part4)
	part4.y=2980-300
	part4.addChild(p4title1,p4light1,p4light2,p4title2,p4t1,p4t2,endBtn)
	p4t1.y=1040

	p4light1.pivot.set(313/2,297/2)
	p4light2.pivot.set(313/2,297/2)
	p4light1.position.set(320,297/2)
	p4light2.position.set(320,297/2)

	p4light1.scale.x=p4light1.scale.y=p4light2.scale.x=p4light2.scale.y=.8
	TweenMax.to(p4light1.scale,.5,{x:1.3,y:1.3,repeat:10000,yoyo:true,ease:Linear.easeNone})
	TweenMax.to(p4light2.scale,.5,{x:1.3,y:1.3,repeat:10000,yoyo:true,ease:Linear.easeNone,delay:.5})

	var i,j
	for ( i = 0; i < 10; i++) {
			message(_list[i].message,_list[i].nickname,_list[i].like,_list[i].liked,_list[i].id)
	};
	console.log("_list",_list[1])

	p4t2.y=nowHeight+20

	nowHeight+=84
	

	setUserForm()
	theNewNowHeight=nowHeight

	

	getMessages(1,setPart4b)
	

}
////////////////////////////////////////////////////////////////////////////////////////////////////////===============part4 留言板部分BBBB
function setPart4b(_list){
	console.log("_listBBBBBBB",_list)
	var i,j,temp=0
	for (var j = 0; j < 10; j++) {
		nowHeight=theNewNowHeight
		for ( i = 0; i < 5; i++) {
			if(_list[j*5+i]){
				message(_list[j*5+i].message,_list[j*5+i].nickname,_list[j*5+i].like,_list[j*5+i].liked,_list[j*5+i].id)
			}else{
				message(commitA[temp%17],"歌名-未填写",parseInt(Math.random()*20),true,parseInt(Math.random()*10000000))
				temp++
			}
			
		};
		nowHeightA.push(nowHeight)
	};

	//console.log(messageA.length)
	showPage(0)
	endBtn.y=nowHeight+50
	endBtn.interactive=true
	endBtn.tap=goEnd
	setPagebtn()
}

////////////////////////////////////////////////////////////////////////////////////////////////////////===============part4 留言板翻页
var pageBtnStyle1={
		fill:'#006837',
		fontSize: 22,
		align: 'left'
	}
var pageBtnStyle2={
		fill:'#ffffff',
		fontSize: 22,
		align: 'left'
	}
var pageBtnA=[]
var nextPageBtn=new PIXI.Text("下一页 >>",pageBtnStyle1)
var prePageBtn=new PIXI.Text("<< 上一页",pageBtnStyle1)
function setPagebtn(){
	for (var i = 0; i < 10; i++) {
		var _pageBtn=new PIXI.Text(i+1,pageBtnStyle1)
		if(i==0){_pageBtn.style=pageBtnStyle2}
		pageBtnA.push(_pageBtn)
		part4.addChild(_pageBtn)
		_pageBtn.x=320+((i-5)*20)+40
		_pageBtn.y=nowHeight
		_pageBtn.interactive=true
		_pageBtn.tap=changePage
	};
	part4.addChild(nextPageBtn,prePageBtn)
	nextPageBtn.y=prePageBtn.y=nowHeight
	nextPageBtn.x=640-80-nextPageBtn.width+40
	prePageBtn.x=80+40

	nextPageBtn.interactive=true
	nextPageBtn.touchstart=goNextPage
	prePageBtn.interactive=true
	prePageBtn.touchstart=goPrePage
}
var nowPage=0
function changePage(_e){
	var i
	for (i = 0; i < 10; i++) {
		pageBtnA[i].style=pageBtnStyle1
		if(_e.target==pageBtnA[i]){
			showPage(i)
			nowHeight=nowHeightA[i]
			pageBtnA[i].style=pageBtnStyle2
			nowPage=i
		}
	};

	for (i = 0; i < 10; i++) {//====重设高度
		pageBtnA[i].y=nowHeight
	};
	endBtn.y=nowHeight+50
	nextPageBtn.y=prePageBtn.y=nowHeight
}

function goNextPage(_e){
	var i
	nowPage++
	if(nowPage==10){nowPage=0}
	for (i = 0; i < 10; i++) {
		pageBtnA[i].style=pageBtnStyle1
		if(i==nowPage){
			showPage(i)
			nowHeight=nowHeightA[i]
			pageBtnA[i].style=pageBtnStyle2
		}
	};

	for (i = 0; i < 10; i++) {//====重设高度
		pageBtnA[i].y=nowHeight
	};
	endBtn.y=nowHeight+50
	nextPageBtn.y=prePageBtn.y=nowHeight
}

function goPrePage(_e){
	var i
	nowPage--
	if(nowPage==-1){nowPage=9}
	for (i = 0; i < 10; i++) {
		pageBtnA[i].style=pageBtnStyle1
		if(i==nowPage){
			showPage(i)
			nowHeight=nowHeightA[i]
			pageBtnA[i].style=pageBtnStyle2
		}
	};

	for (i = 0; i < 10; i++) {//====重设高度
		pageBtnA[i].y=nowHeight
	};
	endBtn.y=nowHeight+50
	nextPageBtn.y=prePageBtn.y=nowHeight
}

function goEnd(){
	console.log("最后跳转按钮")
}

function showPage(_page){
	nowHeight=nowHeightA[_page]
	for (var i = 10; i < messageA.length; i++) {
		if(i>=10+_page*5&&i<10+_page*5+5){
			messageA[i][0].visible=true
		}else{
			messageA[i][0].visible=false
		}
		
	};


}
