var bgTA=["社畜","火锅","冰淇淋","硬核","孤独","引人入胜","文艺复兴","现实主义","猫","乌合之众","单向度的人","成熟","大人","努力加餐饭","身不由己","吃瓜群众","散文诗","小鲜肉","zqsg","确认过眼神","小仙女","锦鲤","真香","skr","失望","丧","艰难","大猪蹄子","微笑","弱小但能吃","C位出道","社会人","正能量","官宣","求生欲","无","小老弟","凉凉","钱","安排","快乐肥宅","？？？","在边缘试探","皮一下","告别"]
var bgTC=new PIXI.Container()
function setBGT(){
	mainC.addChild(bgTC)
	for (var i = 0; i < bgTA.length; i++) {
		var fs=Math.random()*30+5
		var _t=new PIXI.Text(bgTA[i],{
			fontSize:fs,
			fill:0x1a1a1a,
			breakWords:true,
			wordWrap:true,
			wordWrapWidth:1
		})
		bgTC.addChild(_t)
		_t.x=Math.random()*640
		_t.y=Math.random()*stageH-50
		_t.alpha=0//.2+Math.random()*.2
		var _dt=Math.random()*2+2
		TweenMax.to(_t,_dt,{y:"+=100",repeat:100000,ease:Linear.easeNone})
		TweenMax.to(_t,_dt/2,{alpha:.2+Math.random()*.2,repeat:100000,yoyo:true,ease:Linear.easeNone})
		console.log("_t")
	};
}