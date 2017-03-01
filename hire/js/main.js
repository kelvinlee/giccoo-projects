
$(document).ready(function load (){
	setSlide();
	setup();
});

var nowPage = 0;
var startY = 0;
var startScrollTop;
var pageUpDown =0
var sliderA=[$('#page0'),$('#page1'),$('#page2'),$('#page3'),$('#page4'),$('#page5'),$('#page6'),$('#page7')]

var colorBG=$('#colorBG')
var colorA=['#f2de4e','#eaeaea','#bababa','#eaeaea','#80a7ce','#4888b7','#f2de4e','#80a7ce']

var arrowDown=$('#arrowDown')

var p1_t=$('#p1_t')
var p2_t=$('#p2_t')
var p3_full=$('#p3_full')

var p4_t=$('#p4_t')
var p4pic1=$('#p4pic1')
var p4pic2=$('#p4pic2')


var p5_t=$('#p5_t')
var p5b=$('#p5b')
var p5c=$('#p5c')
var p5d=$('#p5d')

var p6_t=$('#p6_t')
var p6b=$('#p6b')
var p6c=$('#p6c')
var p6d=$('#p6d')

var p7_t=$('#p7_t')
var p7b=$('#p7b')
var p7c=$('#p7c')

var btnBack=$("#btnBack")

var p0pic1=$("#p0pic1")
var p0pic2=$("#p0pic1")
var p0pic3=$("#p0pic1")
var p0pic4=$("#p0pic1")

function setup(){
	goPage();
	setMotion();
};

function setMotion(){
	if (window.DeviceMotionEvent) {
		window.addEventListener("devicemotion", motionHandler, false);
	} 
	if (window.DeviceOrientationEvent) {
		window.addEventListener("deviceorientation", orientationHandler, false);
	}
}
function orientationHandler(event) {
// document.getElementById("alpha").innerHTML = event.alpha;
// document.getElementById("beta").innerHTML = event.beta;
//===document.getElementById("gamma").innerHTML = event.gamma;
p0pic1.css(	{'-webkit-transform': 'translate3d('+event.gamma/2+'%,0,  0)','transform': 'translate3d('+event.gamma+'%,0,  0)'})
p0pic2.css(	{'-webkit-transform': 'translate3d('+event.gamma/2.5+'%,0,  0)','transform': 'translate3d('+event.gamma+'%,0,  0)'})
p0pic3.css(	{'-webkit-transform': 'translate3d('+event.gamma/3+'%,0,  0)','transform': 'translate3d('+event.gamma+'%,0,  0)'})
p0pic4.css(	{'-webkit-transform': 'translate3d('+event.gamma/3.5+'%,0,  0)','transform': 'translate3d('+event.gamma+'%,0,  0)'})
// document.getElementById("heading").innerHTML = event.webkitCompassHeading;
// document.getElementById("accuracy").innerHTML = event.webkitCompassAccuracy;

}


function motionHandler(event) {
// document.getElementById("interval").innerHTML = event.interval;
// var acc = event.acceleration;
// document.getElementById("x").innerHTML = acc.x;
// document.getElementById("y").innerHTML = acc.y;
// document.getElementById("z").innerHTML = acc.z;
// var accGravity = event.accelerationIncludingGravity;
// document.getElementById("xg").innerHTML = accGravity.x;
// document.getElementById("yg").innerHTML = accGravity.y;
// document.getElementById("zg").innerHTML = accGravity.z;
// var rotationRate = event.rotationRate;
// document.getElementById("Ralpha").innerHTML = rotationRate.alpha;
// document.getElementById("Rbeta").innerHTML = rotationRate.beta;
// document.getElementById("Rgamma").innerHTML = rotationRate.gamma;
}

function pageAni(){
	// $(pageA[nowPage]).css({display:'block'})
}
//按钮 

$('#btn1').click(function(){
	nowPage=1;
	goPage();
})

$('#btn2').click(function(){
	window.location.href="https://inad.com"
})

$('#btn3').click(function(){
	window.location.href="mailto:hr@inad.com"
})

$('#btnBack4').click(function(){
	nowPage=0;
	goPage();
})
//============翻页动画＝＝＝＝＝＝＝＝

function ani1(){
	TweenLite.set(p1_t,{scaleX:0,scaleY:0,y:-200})
	TweenLite.to(p1_t,.5,{scaleX:1,scaleY:1,y:0,ease:Back.easeOut,delay:.25})
}
function ani2(){
	TweenLite.set(p2_t,{scaleX:0,scaleY:0,y:+200})
	TweenLite.to(p2_t,.5,{scaleX:1,scaleY:1,y:0,ease:Back.easeOut,delay:.25})
	TweenLite.to(p3_full,.5,{y:300,opacity:0})
}
function ani3(){
	TweenLite.set(p3_full,{y:300,opacity:0})
	TweenLite.to(p3_full,.5,{y:0,opacity:1,delay:.25})
}
function ani4(){
	TweenLite.set(p4_t,{y:300,opacity:0})
	TweenLite.to(p4_t,.5,{y:0,opacity:1,ease:Back.easeOut,delay:.25})

	TweenLite.set(p4pic1,{y:300,opacity:0})
	TweenLite.to(p4pic1,.5,{y:0,opacity:1,ease:Back.easeOut,delay:.35})

	TweenLite.set(p4pic2,{y:300,opacity:0})
	TweenLite.to(p4pic2,.5,{y:0,opacity:1,ease:Back.easeOut,delay:.3})
}
function ani5(){
	TweenLite.set(p5_t,{y:300,opacity:0})
	TweenLite.to(p5_t,.5,{y:0,opacity:1,ease:Back.easeOut,delay:.25})

	TweenLite.set(p5b,{y:300,opacity:0})
	TweenLite.to(p5b,.5,{y:0,opacity:1,ease:Back.easeOut,delay:.35})

	TweenLite.set(p5c,{y:300,opacity:0})
	TweenLite.to(p5c,.5,{y:0,opacity:1,ease:Back.easeOut,delay:.3})

	TweenLite.set(p5d,{y:300,opacity:0})
	TweenLite.to(p5d,.5,{y:0,opacity:1,ease:Back.easeOut,delay:.4})
}

function ani6(){
	TweenLite.set(p6_t,{y:300,opacity:0})
	TweenLite.to(p6_t,.5,{y:0,opacity:1,ease:Back.easeOut,delay:.25})

	TweenLite.set(p6b,{y:300,opacity:0})
	TweenLite.to(p6b,.5,{y:0,opacity:1,ease:Back.easeOut,delay:.35})

	TweenLite.set(p6c,{y:300,opacity:0})
	TweenLite.to(p6c,.5,{y:0,opacity:1,ease:Back.easeOut,delay:.3})

	TweenLite.set(p6d,{y:300,opacity:0})
	TweenLite.to(p6d,.5,{y:0,opacity:1,ease:Back.easeOut,delay:.4})
}
function ani7(){
	TweenLite.set(p7_t,{y:300,opacity:0})
	TweenLite.to(p7_t,.5,{y:0,opacity:1,ease:Back.easeOut,delay:.25})

	TweenLite.set(p7b,{y:300,opacity:0})
	TweenLite.to(p7b,.5,{y:0,opacity:1,ease:Back.easeOut,delay:.35})

	TweenLite.set(p7c,{y:300,opacity:0})
	TweenLite.to(p7c,.5,{y:0,opacity:1,ease:Back.easeOut,delay:.3})


}
//=====================翻页＝＝＝＝＝＝＝＝＝＝＝ 



function setSlide(){
	$('.content')[0].addEventListener('touchstart',startTouch,false)
	$('.content')[0].addEventListener('touchmove',moveTouch,false)
	$('.content')[0].addEventListener('touchend',endTouch,false)
}

	
function startTouch(event){
			startY=event.touches[0].clientY
			pageUpDown=0
		}
		function moveTouch(event){
			var nowY=event.touches[0].clientY
			event.preventDefault();
			if (nowY-startY>80&&nowPage!=0) {
				pageUpDown=1
			}else if (nowY-startY< -80&&nowPage!=7) {
				pageUpDown=-1
			}else{
				pageUpDown=0
			};	
		}
		function endTouch(event){
			if (pageUpDown == 1) {
				//alert("上一页")
				nowPage--
				goPage()
			}else if (pageUpDown == -1) {
				//alert("下一页")
				nowPage++
				goPage()
			}else if (pageUpDown==0) {
				//alert("不翻页")
			};	
		} 
		function goPage(){
			 for (var i = 0; i < sliderA.length; i++) {
			 	if (i<nowPage) {
			 		TweenLite.to(sliderA[i],.5,{top:"-100%",display:'none'})//,ease:Back.easeOut
			 	};
			 	if (i==nowPage) {
			 		TweenLite.to(sliderA[i],.5,{top:"0%",display:'block'})
			 		TweenLite.set(colorBG,{'background-color':colorA[i]})
			 		if (i==0||i==7) {arrowDown.css({'display':'none'})}else{arrowDown.css({'display':'block'})};
			 		if (i!=0) {btnBack.css({'display':'block'})}else{btnBack.css({'display':'none'})};
			 		 if (i==1) {ani1()};
			 		 if (i==2) {ani2()};
			 		 if (i==3) {ani3()};
			 		 if (i==4) {ani4()};
			 		 if (i==5) {ani5()};
			 		 if (i==6) {ani6()};
			 		 if (i==7) {ani7()};
			 		// if (i>2&&i<10) {pageAni1(i-3)};
			 	};
			 	if (i>nowPage) {
			 		TweenLite.to(sliderA[i],.5,{top:"100%",display:'none'})
			 	};
			 }
		}

//=====================翻页＝＝＝＝＝＝＝＝＝＝＝


