function setMode(){(window.navigator.userAgent.indexOf("Weibo")>-1||window.navigator.userAgent.indexOf("Android")>-1||window.navigator.userAgent.indexOf("Adr")>-1)&&(mode=2)}function iniListenSound(){document.addEventListener("WeixinJSBridgeReady",function(){bgm.play(),ifbgm=1,TweenLite.set($("#musicOff"),{opacity:0}),mode=1},!1)}function initAll(){stageW=640,stageH=screenH/screenW*640,document.getElementById("mainCanvas").width=640,document.getElementById("mainCanvas").height=stageH,createjs.Ticker.framerate=60,createjs.Ticker.addEventListener("tick",handleTick),setStage(),setPage1(),setPage2(),setPage3Step1(),ani1(),setSlide()}function handleTick(){stage.update()}function setStage(){stage.addChild(bg),stage.addChild(stage1),stage.addChild(stage2),stage.addChild(stage3),stage2.y=stage3.y=stageH,bg.scaleX=2,bg.scaleY=stageH/500,bar1.graphics.beginFill("#ffc8c8").drawRect(0,0,640,13),bar2.graphics.beginFill("#ffc8c8").drawRect(0,0,13,stageH),bar3.graphics.beginFill("#ffc8c8").drawRect(627,0,640,stageH),bar4.graphics.beginFill("#ffc8c8").drawRect(0,stageH-13,640,stageH),stage.addChild(bar1),stage.addChild(bar2),stage.addChild(bar3),stage.addChild(bar4),stage.addChild(arrowDown),TweenLite.set(arrowDown,{x:320,y:stageH-.042*stageH,regX:320,regY:6})}function setPage1(){stage1.addChild(p1title),flash.addChild(flash1),flash.addChild(flash2),TweenLite.set(flash,{x:332,y:.551*stageH,scale:0,alpha:0}),TweenLite.set(flash2,{x:0,y:0,regX:18.5,regY:18.5,scale:0}),TweenLite.set(flash1,{regX:18.5,regY:18.5,scale:0}),flashLoop1(),flashLoopB1();for(var e=1;e<=8;e++){var t=new createjs.Bitmap("img/p1title"+e+".png");p1titleA.push(t),p1title.addChild(t)}p1title.addChild(p1title_e),p1title.addChild(p1title_line),p1title.regX=320,p1title.regY=83.5,p1title.y=.221*stageH,p1title.x=320,stage1.addChild(p1Rhand),stage1.addChild(p1Lhand),stage1.addChild(p1box),TweenLite.set(p1Lhand,{x:320,y:.55*stageH,regX:320,regY:287.5}),TweenLite.set(p1Rhand,{x:320,y:.55*stageH,regX:320,regY:287.5,scaleX:-1}),TweenLite.set(p1box,{x:320,y:.573*stageH,regX:320,regY:190,alpha:3}),stage1.addChild(p1logo),p1logo.y=stageH-163,TweenLite.set(p1logo,{x:320,y:stageH-.116*stageH,regX:320,regY:47})}function setPage2(){stage2.addChild(p2heart),TweenLite.set(p2heart,{regX:157,regY:135.5,scale:2,x:320,y:.53*stageH}),p2heartLoop1(),stage2.addChild(p2hand),stage2.addChild(p2title);for(var e=1;e<=8;e++){var t=new createjs.Bitmap("img/p2t"+e+".png");stage2.addChild(t),p2tA.push(t),TweenLite.set(t,{regX:320,regY:13,x:320,y:.892*stageH,alpha:0})}}function flashLoop1(){TweenLite.to(flash1,.3,{scale:1.39,rotation:"+=90",onComplete:flashLoop2,delay:0*Math.random()+2,ease:Linear.easeNone})}function flashLoop2(){TweenLite.to(flash1,1.2,{scale:0,rotation:"+=270",onComplete:flashLoop1,ease:Linear.easeNone})}function flashLoopB1(){TweenLite.to(flash2,.3,{scale:1.2,rotation:"-=90",onComplete:flashLoopB2,delay:0*Math.random()+2+.05,ease:Linear.easeNone})}function flashLoopB2(){TweenLite.to(flash2,1.2,{scale:0,rotation:"-=270",onComplete:flashLoopB1,ease:Linear.easeNone})}function p2heartLoop1(){TweenLite.to(p2heart,1,{scale:2.4,onComplete:p2heartLoop2,ease:Linear.easeNone})}function p2heartLoop2(){TweenLite.to(p2heart,1,{scale:2,onComplete:p2heartLoop1,ease:Linear.easeNone})}function p2tLoop(){for(var e=0;e<p2tA.length;e++)TweenLite.killTweensOf(p2tA[e]),TweenLite.set(p2tA[e],{regX:320,regY:13,x:320,y:.892*stageH,alpha:0}),TweenLite.to(p2tA[e],4,{regX:320,regY:13,x:320,y:.7745*stageH,alpha:1,overwrite:0,delay:1.1*e,ease:Sine.easeIn}),e==p2tA.length-1?TweenLite.to(p2tA[e],4,{regX:320,regY:13,x:320,y:.657*stageH,alpha:0,overwrite:0,delay:1.1*e+4,ease:Sine.easeOut,onComplete:p2tLoop}):TweenLite.to(p2tA[e],4,{regX:320,regY:13,x:320,y:.657*stageH,alpha:0,overwrite:0,delay:1.1*e+4,ease:Sine.easeOut})}function resetPage2(){TweenLite.set(p2hand,{regX:320,regY:166,scale:1.5,x:320,y:.81*stageH}),TweenLite.set(p2title,{alpha:0,regX:320,regY:56,scale:1,x:320,y:.365*stageH})}function setPage3Step1(){stage3.addChild(step1),stage3.addChild(step2),stage3.addChild(step3),stage3.addChild(step4),step1.visible=!0,step2.visible=!1,step3.visible=!1,step4.visible=!1,step1.addChild(step1title),TweenLite.set(step1title,{x:320,y:.255*stageH,regX:320,regY:93}),step1.addChild(step1arrow1),step1.addChild(step1arrow2),TweenLite.set(step1arrow1,{x:320,y:.517*stageH,regX:320,regY:57}),TweenLite.set(step1arrow2,{x:320,y:.517*stageH,regX:320,regY:57}),moveArrow();for(var e=1;e<=4;e++){var t=new createjs.Bitmap("img/step1icon"+e+".png");step1.addChild(t),step1iconA.push(t),TweenLite.set(t,{x:320,y:.737*stageH,regX:320,regY:52,alpha:0}),e-1==nowDiamond&&TweenLite.set(t,{alpha:1});var a=new createjs.Bitmap("img/diamond"+e+".png");step1.addChild(a),diamondA.push(a),TweenLite.set(a,{x:320,y:.577*stageH,regX:81.5,regY:73,alpha:0}),e-1==nowDiamond&&TweenLite.set(a,{x:320,y:.527*stageH,regX:81.5,regY:73,alpha:1})}step1.addChild(step1btn),TweenLite.set(step1btn,{x:320,y:.866*stageH,regX:320,regY:44})}function moveArrow(){TweenLite.to(step1arrow1,1,{x:290,onComplete:moveArrow2}),TweenLite.to(step1arrow2,1,{x:350})}function moveArrow2(){TweenLite.to(step1arrow1,1,{x:320,onComplete:moveArrow}),TweenLite.to(step1arrow2,1,{x:320})}function moveStep2Arrow(){TweenLite.to(step2arrow1,1,{x:290,onComplete:moveStep2Arrow2}),TweenLite.to(step2arrow2,1,{x:350})}function moveStep2Arrow2(){TweenLite.to(step2arrow1,1,{x:320,onComplete:moveStep2Arrow}),TweenLite.to(step2arrow2,1,{x:320})}function setSlide(){sliderA=[stage1,stage2,stage3],$("#mainCanvas")[0].addEventListener("touchstart",startTouch,!1),$("#mainCanvas")[0].addEventListener("touchmove",moveTouch,!1),$("#mainCanvas")[0].addEventListener("touchend",endTouch,!1)}function startTouch(e){startY=e.touches[0].clientY,startX=e.touches[0].clientX,pageUpDown=0,pageLeftRight=0}function moveTouch(e){var t=e.touches[0].clientY;e.preventDefault(),pageUpDown=t-startY>80&&0!=nowPage?1:t-startY<-80&&2!=nowPage?-1:0;var a=e.touches[0].clientX;pageLeftRight=a-startX>80?1:a-startX<-80?-1:0}function endTouch(e){1==pageUpDown&&1==ifcanupdown?(nowPage--,goPage()):-1==pageUpDown&&1==ifcanupdown&&(nowPage++,goPage()),1==pageLeftRight?slideR():-1==pageLeftRight&&slideL()}function goPage(){console.log("nowPage=",nowPage);for(var e=0;e<sliderA.length;e++)e<nowPage&&TweenLite.to(sliderA[e],.5,{y:-stageH,alpha:0}),e==nowPage&&TweenLite.to(sliderA[e],1,{y:0,alpha:1}),e>nowPage&&TweenLite.to(sliderA[e],.5,{y:stageH,alpha:0});0==nowPage&&ani1(),1==nowPage&&ani2(),2==nowPage&&ani3()}var shareT=["你站的方向连风吹过来都是暖的。","喜你为疾，药石无医。","海上月是天上月，眼前人是心上人。","我们站着，不说话，就十分美好。","今夜我不关心人类，我只想你。","你是一种感觉，写在夏夜晚风里面。","明天生动而具体，有且只有一个你。","人生苦短，劝你早日弃暗投我。"],shareIcon=["https://m.giccoo.com/zbird/img/icon1.jpg","https://m.giccoo.com/zbird/img/icon2.jpg","https://m.giccoo.com/zbird/img/icon3.jpg"],_n=parseInt(Math.random()*shareT.length),_n2=parseInt(Math.random()*shareIcon.length);$(document).ready(function e(){setMode(),loadWechatConfig(),initAll(),iniListenSound(),wx.ready(function(){var e;return e={title:"520 · 送个大的",desc:shareT[_n],link:"https://m.giccoo.com/zbird/",imgUrl:shareIcon[_n2],success:function(){},cancel:function(){}},wx.onMenuShareTimeline(e),wx.onMenuShareAppMessage(e),wx.onMenuShareQQ(e),wx.onMenuShareWeibo(e)})});var mode=1;$("body")[0].addEventListener("touchmove",function(e){e.preventDefault()},!1);var screenW,screenH;screenW=document.body.offsetWidth,screenH=document.body.offsetHeight;var stageW=640,stageH,loadWechatConfig=function(){var e,t,a;a=encodeURIComponent(window.location.href.split("#")[0]),e=document.createElement("script"),e.src="//api.giccoo.com/api/config?url="+a,t=document.getElementsByTagName("script")[0],t.parentNode.insertBefore(e,t)},ifbgm=0,bgm=$("#bgm")[0];$("#musicOff").click(function(){0==ifbgm?(bgm.play(),TweenLite.set($("#musicOff"),{opacity:0}),"undefined"!=typeof _hmt&&null!==_hmt&&_hmt.push(["_trackEvent","zbird","musicBtn","playMusic","-"])):(bgm.pause(),TweenLite.set($("#musicOff"),{opacity:1}),"undefined"!=typeof _hmt&&null!==_hmt&&_hmt.push(["_trackEvent","zbird","musicBtn","stopMusic","-"])),2==++ifbgm&&(ifbgm=0)});var stage=new createjs.Stage("mainCanvas"),stage1=new createjs.Container,stage2=new createjs.Container,stage3=new createjs.Container,bg=new createjs.Bitmap("img/bg.jpg"),bar1=new createjs.Shape,bar2=new createjs.Shape,bar3=new createjs.Shape,bar4=new createjs.Shape,arrowDown=new createjs.Bitmap("img/v.png"),p1title_e=new createjs.Bitmap("img/p1title_e.png"),p1title_line=new createjs.Bitmap("img/p1title_line.png"),p1titleA=[],p1title=new createjs.Container,p1Lhand=new createjs.Bitmap("img/p1one_hand.png"),p1Rhand=p1Lhand.clone(),p1box=new createjs.Bitmap("img/p1box.png"),p1logo=new createjs.Bitmap("img/p1logo.png"),flash=new createjs.Container,flash1=new createjs.Bitmap("img/flash.png"),flash2=new createjs.Bitmap("img/flash.png"),p2heart=new createjs.Bitmap("img/p2heart.png"),p2hand=new createjs.Bitmap("img/p2hand.png"),p2title=new createjs.Bitmap("img/p2title.png"),p2tA=[],nowDiamond=0,step1=new createjs.Container,step2=new createjs.Container,step3=new createjs.Container,step4=new createjs.Container,step1title=new createjs.Bitmap("img/step1title.png"),step1arrow1=new createjs.Bitmap("img/step12arrow1.png"),step1arrow2=new createjs.Bitmap("img/step12arrow2.png"),step1iconA=[],step1btn=new createjs.Bitmap("img/step1btn.png"),diamondA=[],nowPage=0,startY=0,startX=0,startScrollTop,pageUpDown=0,pageLeftRight=0,sliderA=[],ifnowEnd=0;