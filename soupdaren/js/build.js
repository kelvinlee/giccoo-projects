// var _CDN = "//image.giccoo.com/projects/Landrover24/"
var _CDN = "./";
var _CDN = "//image.giccoo.com/projects/soupdaren/";
var imageList = [
	_CDN+"img/btn-submit.png",
	_CDN+"img/bg-far.png",
	_CDN+"img/bg-near.png",
	_CDN+"img/fp1.png",
	_CDN+"img/fp2.png",
	// _CDN+"img/hint-t1.png",
	// _CDN+"img/hint-t2.png",
	// _CDN+"img/hint-arrow.png",
	// _CDN+"img/player.png",
	// _CDN+"img/player-needle.png",
	// _CDN+"img/player-dic.png",
	_CDN+"img/flyer.png",
	_CDN+"img/alpha.png",
	_CDN+"img/lamp.png",
	_CDN+"img/lamp-light.png",
	_CDN+"img/p0pic1.png",
	_CDN+"img/p0pic2.png",
	_CDN+"img/pic1.jpg",
	_CDN+"img/pic2.jpg",
	_CDN+"img/pic3.jpg",
	_CDN+"img/pic4.jpg",
	_CDN+"img/pic5.jpg",
	_CDN+"img/pic6.jpg",
	_CDN+"img/layerbg.jpg",
	_CDN+"img/layertitle.png",
	_CDN+"img/layert1a.png",
	_CDN+"img/layert2a.png",
	_CDN+"img/layert3a.png",
	_CDN+"img/layert4a.png",
	_CDN+"img/layert5a.png",
	_CDN+"img/layert6a.png",
	_CDN+"img/layert1b.png",
	_CDN+"img/layert2b.png",
	_CDN+"img/layert3b.png",
	_CDN+"img/layert4b.png",
	_CDN+"img/layert5b.png",
	_CDN+"img/layert6b.png",
	_CDN+"img/layerbtn.jpg",
	_CDN+"img/turn1.png",
	_CDN+"img/turn2.png",
	_CDN+"img/turn3.png",
	_CDN+"img/turn4.png",
	_CDN+"img/namebg.png",
	_CDN+"img/namebtn.png",
	_CDN+"img/endlight.png",
	_CDN+"img/enddisc.png",
	_CDN+"img/endtitle.png",
	_CDN+"img/endt1.png",
	_CDN+"img/endt2.png",
	_CDN+"img/endt3.png",
	_CDN+"img/endt4.png",
	_CDN+"img/endt5.png",
	_CDN+"img/endt6.png",
	_CDN+"img/endpic1.png",
	_CDN+"img/endpic2.png",
	_CDN+"img/endpic3.png",
	_CDN+"img/endpic4.png",
	_CDN+"img/endpic5.png",
	_CDN+"img/endpic6.png",
	_CDN+"img/endttt.png",
	_CDN+"img/endtttt.png",
	// _CDN+"img/btn-wx.png",
	_CDN+"img/btn-wyy1.png",
	_CDN+"img/btn-list1.png",
	_CDN+"img/qr.png",
	_CDN+"img/p0t.png",
	_CDN+"img/hint1.png",
	_CDN+"img/hint2.png",
];
var _NORMAL=PIXI.BLEND_MODES.NORMAL,
    _ADD=PIXI.BLEND_MODES.ADD,
    _MULTIPLY=PIXI.BLEND_MODES.MULTIPLY,
    _SCREEN=PIXI.BLEND_MODES.SCREEN;

var pStage,pApp,bg
var stageH
var theThis
var u = navigator.userAgent
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1

var renderer
var buildUGC = function () {
	console.log("app",this,this.opts.w,this.opts.h)
	// var test = new Sprite(getTe(_CDN+"img/test.png"));
	// var gra = new Graphics();
	// var con = new Container();
	// var ani = new AnimatedSprite();
	stageH=this.opts.h
	pStage=this.stage

	setup()
}

var texture1=PIXI.Texture.fromImage('img/bg-far.png');
var texture2=PIXI.Texture.fromImage('img/bg-near.png');
var bgMove
var loadingText="音乐，就像是每个人生活中隐形的伙伴，\n我们用音乐消化所有心情的同时，\n也从中汲取着不断前行的动力。\n欢迎来到初心音乐放映馆，\n在这里，\n我们将通过你最不经意的方式走进你，\n用音乐解读你的内在，\n给予你不断前行的动力，愿你不虚此行……\n也许你会发现神秘惊喜！"
var loadingT
var bgFar
var bgNear,bgNear2
var speed=.4
function setup(){
	bgFar=new PIXI.extras.TilingSprite(texture1,640*2,1300)
	bgNear=new PIXI.extras.TilingSprite(texture2,640,1300)
	bgNear2=new PIXI.extras.TilingSprite(texture2,640*3,1300)
	pStage.addChild(bgFar,bgNear,bgNear2)
	bgFar.pivot.y=bgNear.pivot.y=bgNear2.pivot.y=650
	bgFar.y=bgNear.y=bgNear2.y=stageH/2
	bgNear.x=640
	bgNear2.x=640
	bgMove=TweenMax.to(bgFar,.4*speed,{x:-64,repeat:100000,ease:Linear.easeNone})
	//TweenMax.to(bgNear,4,{x:-640*2,repeat:10000,ease:Linear.easeNone})
	bgMove.pause()
	
	setFootprint()
	setLoading()

	setPage0()
	setPage12345()
	setLayer()
	setPage2()
}

function setCenter(_array){
	for (var i = 0; i < _array.length; i++) {
		_array[i].pivot.set(_array[i].width/2,_array[i].height/2)
		_array[i].position.set(320,stageH/2)
	};
}

function showT(_text,_style,_lineHeight,_aglin,_t1,_dt,_dy){
//   _text：文字“\n”换行   _style：文字样式   _lineHeight：行高(包含字的高度) _aglin：对齐方式  _t1：出现时间   _dt：每行时间间隔   _dy:出现长度
	var textGroup=new PIXI.Container()
	if(!_t1){_t1=1}
	if(!_dt){_dt=.1}
	if(!_dy){_dy=50}
	if(!_aglin){_aglin="left"}
	var textA=[]
	textA=_text.split("\n")

	var testT=new PIXI.Text(_text,_style)
	var Twidth=testT.width

	for (var i = 0; i < textA.length; i++) {
		var t=new PIXI.Text(textA[i],_style)
		textGroup.addChild(t)
		t.y=i*_lineHeight+_dy
		t.alpha=0

		if(_aglin=="center"){
			t.x=Twidth/2-t.width/2
		}
		if(_aglin=="right"){
			t.x=Twidth-t.width
		}

		TweenMax.to(t,_t1,{y:i*_lineHeight,delay:_dt*i,alpha:1})
	};
	return(textGroup)
}

function hideT(_container,_delayT,_t1,_dt,_dy){
	if(!_t1){_t1=1}
	if(!_dt){_dt=.05}
	if(!_dy){_dy=30}
	if(!_delayT){_delayT=0}
	
 	setTimeout(function(){
 		for (var i = 0; i < _container.children.length; i++) {
 			TweenMax.to(_container.children[i],_t1,{y:_container.children[i].y-_dy,alpha:0,delay:i*_dt})
 		};
 	},_delayT*1000)

 	setTimeout(function(){
 		_container.visible=false
 	},(_container.children.length*_dt+_t1+_delayT)*1000)
}

function showGroup(_array){
	for (var i = 0; i < _array.length; i++) {
		TweenMax.from(_array[i],1,{y:"+=50",alpha:0,delay:.1*i})
	};
}

var fps=new PIXI.Container()
var fpA=[]
function setFootprint(){
	pStage.addChild(fps)
	fps.alpha=0
	var leftRight=1
	for (var i = 0; i <=4 ; i++) {
		var afp
		if(leftRight==1){ afp=new Sprite(getTe(_CDN+"img/fp1.png")) }
		if(leftRight==-1){ afp=new Sprite(getTe(_CDN+"img/fp2.png")) }
		leftRight*=-1
		fps.addChild(afp)
		afp.pivot.y=500
		afp.position.set(320,stageH/2)
		afp.alpha=.6
		var fpMove=TweenMax.to(afp,1,{x:0,repeat:100000,delay:1/4*i,ease:Linear.easeNone,alpha:0})
		fpA.push(fpMove)
	};
}

function fpPause(){
	for (var i = 0; i < fpA.length; i++) {
		fpA[i].pause()
	};//脚印暂停
}

function fpPlay(){
	for (var i = 0; i < fpA.length; i++) {
		fpA[i].play()
	};//脚印继续
}

