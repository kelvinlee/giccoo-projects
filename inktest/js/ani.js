var page1=new PIXI.Container()
var apic=new pSprite("img/pen.png")

function  startAll (argument) {
	// body...
	console.log("111")
	startDarg()
	pStage.addChild(page1)
	console.log(drawBezier(.5,{x:0,y:0},{x:0,y:640},{x:0,y:640},{x:640,y:640}))
}

function startDarg(){
	for (var i = 0; i < 2000; i++) {
		var _apic=new pSprite("img/pen2.png")
		_apic.x=drawBezier(i*1/2000,{x:0,y:0},{x:320,y:0},{x:320,y:640},{x:640,y:440}).x
		_apic.y=drawBezier(i*1/2000,{x:0,y:0},{x:320,y:0},{x:320,y:640},{x:640,y:440}).y
		page1.addChild(_apic)
		_apic.alpha=Math.random()*.1
		//_apic.blendMode=_MULTIPLY
		//TweenMax.set(_apic.scale,{x:.15+Math.random()*.15,y:Math.random()*1+1.5})
		TweenMax.set(_apic.scale,{x:.1+Math.random()*.15})
		TweenMax.set(_apic,{height:(300-_apic.y)/2})
		TweenMax.set(_apic,{rotation:Math.random()*1.5-.75})
	};
}



// function drawBezier(_x1,_y1,_x2,_y2,_xa,_ya,_xb,_yb){

// }

function drawBezier( t, p0, p1, p2, p3) {
        var point = {};
        var temp = 1 - t;
        point.x = p0.x * temp * temp * temp + 3 * p1.x * t * temp * temp + 3 * p2.x * t * t * temp + p3.x * t * t * t;
        point.y = p0.y * temp * temp * temp + 3 * p1.y * t * temp * temp + 3 * p2.y * t * t * temp + p3.y * t * t * t;
        return point;
}