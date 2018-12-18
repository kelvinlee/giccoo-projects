var _CDN = "./";
// var _CDN = "//image.giccoo.com/projects/emoji/";
var imageList = [
	_CDN+"img/p1bg.jpg",
	_CDN+"img/bg_top.png",
	_CDN+"img/bg_down.png",
	_CDN+"img/p1logo.png",

	_CDN+"img/xman.png",

	_CDN+"img/p1t1.png",
	_CDN+"img/p1t2.png",
	_CDN+"img/p1t3.png",
	_CDN+"img/p1t5a.png",
	_CDN+"img/p1t5b.png",

	_CDN+"img/p1t4a.png",
	_CDN+"img/p1t4b.png",
	_CDN+"img/p1t4c.png",
	_CDN+"img/p1t4d.png",

	_CDN+"img/p1line1.png",
	_CDN+"img/p1line2.png",
	_CDN+"img/p1line3.png",
	_CDN+"img/p1line4.png",
	_CDN+"img/p1line5.png",
	_CDN+"img/p1line6.png",
	_CDN+"img/p1line7.png",

	_CDN+"img/p2line1.png",
	_CDN+"img/p2line2.png",
	_CDN+"img/p2line3.png",
	_CDN+"img/p2line4.png",

	_CDN+"img/p1snow.png",

	_CDN+"img/e1.png",
	_CDN+"img/e2.png",
	_CDN+"img/e3.png",
	_CDN+"img/e4.png",
	_CDN+"img/e5.png",
	_CDN+"img/e6.png",
	_CDN+"img/e7.png",
	_CDN+"img/e8.png",
	_CDN+"img/e9.png",
	_CDN+"img/e10.png",
	_CDN+"img/e11.png",
	_CDN+"img/e12.png",
	_CDN+"img/e13.png",
	_CDN+"img/e14.png",

	_CDN+"img/btn_next.png",

	_CDN+"img/q1bg.png",
	_CDN+"img/q2bg.png",

	_CDN+"img/q11.png",
	_CDN+"img/q12.png",
	_CDN+"img/q13.png",
	_CDN+"img/q14.png",

	_CDN+"img/q21.png",
	_CDN+"img/q22.png",
	_CDN+"img/q23.png",
	_CDN+"img/q24.png",

	_CDN+"img/q31.png",
	_CDN+"img/q32.png",
	_CDN+"img/q33.png",
	_CDN+"img/q34.png",

	_CDN+"img/q41.png",
	_CDN+"img/q42.png",
	_CDN+"img/q43.png",
	_CDN+"img/q44.png",

	_CDN+"img/mark11.png",
	_CDN+"img/mark12.png",
	_CDN+"img/mark13.png",
	_CDN+"img/mark14.png",

	_CDN+"img/mark21.png",
	_CDN+"img/mark22.png",
	_CDN+"img/mark23.png",
	_CDN+"img/mark24.png",

	_CDN+"img/mark31.png",
	_CDN+"img/mark32.png",
	_CDN+"img/mark33.png",
	_CDN+"img/mark34.png",

	_CDN+"img/mark41.png",
	_CDN+"img/mark42.png",
	_CDN+"img/mark43.png",
	_CDN+"img/mark44.png",

	_CDN+"img/q1title.png",
	_CDN+"img/q2title.png",
	_CDN+"img/q3title.png",
	_CDN+"img/q4title.png",

	_CDN+"img/end_bg1.png",
	_CDN+"img/end_bg2.png",
	_CDN+"img/end_bg3.png",
	_CDN+"img/end_bg4.png",

	_CDN+"img/end_bg1b.png",
	_CDN+"img/end_bg2b.png",
	_CDN+"img/end_bg3b.png",
	_CDN+"img/end_bg4b.png",

	_CDN+"img/end_title1.png",
	_CDN+"img/end_title2.png",
	_CDN+"img/end_title3.png",
	_CDN+"img/end_title4.png",

	_CDN+"img/end_t11.png",
	_CDN+"img/end_t12.png",
	_CDN+"img/end_t13.png",
	_CDN+"img/end_t14.png",

	_CDN+"img/end_t21.png",
	_CDN+"img/end_t22.png",
	_CDN+"img/end_t23.png",
	_CDN+"img/end_t24.png",

	_CDN+"img/end_t31.png",
	_CDN+"img/end_t32.png",
	_CDN+"img/end_t33.png",
	_CDN+"img/end_t34.png",

	_CDN+"img/end_tbg.png",

	_CDN+"img/endbtnbg.png",
	_CDN+"img/endbtn1.png",
	_CDN+"img/endbtn2.png",

	_CDN+"img/qr.png",
	_CDN+"img/logo.png",
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
	
}


function getStart(){
	setPage1()
	console.log("?111")
}

