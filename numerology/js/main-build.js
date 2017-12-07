"use strict";function loadingAni(){$("#loadingPG").css({display:"block"});var e=0;TweenLite.set($("#loadingC1"),{x:"-50%",y:"-50%"}),TweenLite.set($("#loadingC2"),{x:"-50%",y:"-50%"}),TweenLite.to($("#loadingC1"),10,{rotation:720,ease:Linear.easeOut}),TweenLite.to($("#loadingC2"),6,{rotation:-720,ease:Linear.easeIn,onUpdate:function t(){e+=Math.random()+.1,e>=100&&(e=100),$("#loadingT").text(parseInt(e)+"%")},onComplete:page1in}),iniListenSound();for(var t=0;t<loadingTA.length;t++)TweenLite.set(loadingTA[t],{width:"100%",x:"-50%",y:"-50%"}),TweenLite.from(loadingTA[t],2,{y:"+=50",opacity:0,delay:.5*t})}function iniListenSound(){document.addEventListener("WeixinJSBridgeReady",function(){loadingSound.play()},!1)}function page1in(){loadingSound.pause(),bgm.play(),$("#loadingPG").css({display:"none"}),$("#page1").css({display:"block"}),TweenLite.from($("#p1title"),1,{opacity:0,y:"+=80",ease:Back.easeOut,delay:0}),TweenLite.from($("#p1t1"),1,{opacity:0,y:"+=80",ease:Back.easeOut,delay:.1}),TweenLite.from($("#p1btns"),1,{opacity:0,y:"+=80",ease:Back.easeOut,delay:.2}),TweenLite.from($("#p1t2"),1,{opacity:0,y:"+=80",ease:Back.easeOut,delay:0+.1*3}),TweenLite.from($("#p1BG"),1,{opacity:0,scale:1.2,ease:Back.easeOut,delay:0}),TweenLite.from($("#p1light"),1,{opacity:0,delay:1,onComplete:lightLoop})}function lightLoop(){TweenLite.to($("#p1light"),2,{opacity:0,onComplete:lightLoop1})}function lightLoop1(){TweenLite.to($("#p1light"),4,{opacity:1,onComplete:lightLoop})}function goGameHint(){TweenLite.set(blurA[0],{display:"none",rotation:0,scale:1,x:"-50%",y:"-50%"}),TweenLite.set(blurA[1],{display:"none",rotation:0,scale:1,x:"-50%",y:"-50%"}),TweenLite.set(blurA[2],{display:"none",rotation:0,scale:1,x:"-50%",y:"-50%"}),TweenLite.set(blurA[nowGame],{display:"block"}),TweenLite.set($("#goGameAni"),{display:"block"}),TweenLite.from($("#goGameBG"),1,{opacity:0}),TweenLite.set($("#page1"),{display:"none",delay:1}),TweenLite.from(blurA[nowGame],1.5,{scale:.5,overwrite:0,opacity:0,ease:Elastic.easeOut}),TweenLite.to(blurA[nowGame],2.5,{rotation:2880,overwrite:0,ease:Cubic.easeOut}),TweenLite.to(blurA[nowGame],1,{scale:8,opacity:0,delay:1.5}),TweenLite.set($("#goGameAni"),{display:"none",delay:2,opacity:1}),TweenLite.set($("#gameHint"),{display:"block",delay:1.5}),TweenLite.set(hintA[0],{display:"none",opacity:1}),TweenLite.set(hintA[1],{display:"none",opacity:1}),TweenLite.set(hintA[2],{display:"none",opacity:1}),TweenLite.set(hintA[nowGame],{display:"block"}),TweenLite.from($("#gameHint"),2,{opacity:0,delay:1}),TweenLite.set(gameA[nowGame],{display:"block"})}function setMusicGif(){TweenLite.set($("#gif1"),{opacity:musicStateA[0]}),TweenLite.set($("#gif2"),{opacity:musicStateA[1]}),TweenLite.set($("#gif3"),{opacity:musicStateA[2]})}function game3(){ifPlayingGame3=1,topline=screenW/640*360,downline=screenW/640*787,setInt=window.setInterval(setFireSize,50),createjs.Ticker.framerage=30,createjs.Ticker.addEventListener("tick",handleTick),Time=new Date,lastTime=Time.getTime(),TweenLite.set($("#g3BG2"),{display:"none"}),TweenLite.set($("#theGif"),{display:"block",opacity:0}),TweenLite.set(this,{delay:6,onComplete:game3fail})}function game3fail(){1==ifPlayingGame3&&(ifPlayingGame3=0,gameStateA[2]=2,gameEnd())}function handleTick(e){stage.update()}function setFireSize(){fireSize-=.025,fireSize=Math.max(fireSize,0),TweenLite.set(fire,{scale:fireSize,x:"-50%",y:"-50%",left:.4875*screenW,top:.890625*screenW}),fireSize>=2&&(TweenLite.set($("#g3BG2"),{display:"block"}),TweenLite.set($("#g3btn"),{display:"block",y:1.308*screenW}),TweenLite.to(fire,1,{scale:4,x:"-50%",y:"-50%",left:.4875*screenW,top:.890625*screenW,opacity:0,onComplete:game3done}),TweenLite.set($("#theGif"),{display:"none"}),$("#video")[0].play(),window.clearInterval(setInt),TweenLite.set($("#mainCanvas"),{display:"none"}),ifPlayingGame3=0)}function game3done(){TweenLite.set($("#bigfire"),{display:"none"}),gameStateA[2]=1,TweenLite.set($("#theGif"),{display:"block",x:.0375*screenW,y:.40625*screenW,width:.9375*screenW,height:.6125*screenW,opacity:1}),TweenLite.to(fire,11.5,{onComplete:gameEnd})}function addFire(e,t){var n=new createjs.Bitmap("img/littleFire.png");stage.addChild(n),TweenLite.set(n,{width:100*Math.random(),height:100*Math.random(),scale:0,rotation:360*Math.random()}),n.x=640*e/screenW,n.y=1028*t/screenH,TweenLite.to(n,.5,{scale:1.5*Math.random()+.5,overwrite:0}),TweenLite.to(n,.25,{alpha:0,delay:.25})}function showShare(){TweenLite.set($("#shareLayer"),{display:"block",opacity:1}),TweenLite.from($("#shareLayer"),.5,{opacity:0})}function nextGame(){0==gameStateA[0]?(nowGame=0,g1Sound.play(),showGame()):0==gameStateA[1]?(nowGame=1,g2Sound.play(),showGame()):0==gameStateA[2]?(nowGame=2,g3Sound.play(),showGame()):goPrize()}function showGame(){TweenLite.to($("#resultPage"),.5,{opacity:0}),TweenLite.set($("#resultPage"),{display:"none",delay:.5}),TweenLite.set(gameA[0],{display:"none"}),TweenLite.set(gameA[1],{display:"none"}),TweenLite.set(gameA[2],{display:"none"}),TweenLite.set(gameA[nowGame],{display:"block"}),TweenLite.set($("#gameHint"),{display:"block",opacity:1,overwrite:0,scale:1}),TweenLite.set(hintA[0],{display:"none",opacity:1}),TweenLite.set(hintA[1],{display:"none",opacity:1}),TweenLite.set(hintA[2],{display:"none",opacity:1}),TweenLite.set(hintA[nowGame],{display:"block"}),TweenLite.from($("#gameHint"),.5,{opacity:0})}function gameEnd(){TweenLite.set(rtA[0],{display:"none"}),TweenLite.set(rtA[1],{display:"none"}),TweenLite.set(rtA[2],{display:"none"}),TweenLite.set(wtA[0],{display:"none"}),TweenLite.set(wtA[1],{display:"none"}),TweenLite.set(wtA[2],{display:"none"}),TweenLite.set($("#resultPage"),{display:"block",opacity:1}),TweenLite.from($("#resultPage"),1,{opacity:0}),1==gameStateA[nowGame]?(TweenLite.set($("#rightBG"),{display:"block"}),TweenLite.set($("#wrongBG"),{display:"none"}),TweenLite.set(rtA[nowGame],{display:"block"}),ask_update(nowGame)):(TweenLite.set($("#rightBG"),{display:"none"}),TweenLite.set($("#wrongBG"),{display:"block"}),failSound.play(),TweenLite.set(wtA[nowGame],{display:"block"}));for(var e=0;e<3;e++)1==gameStateA[e]?(TweenLite.set(icoA[e],{display:"block"}),TweenLite.to(icoA[e],.5,{opacity:1,delay:1.2})):TweenLite.set(icoA[e],{display:"none",opacity:0})}function goPrize(){openAward()}$(document).ready(function e(){loadWechatConfig(),wx.ready(function(){var e;return e={title:"奇门遁甲",desc:"乾坤万象，其乐无穷，12.15日，燃情上映！",link:"http://m.giccoo.com/numerology/",imgUrl:"http://m.giccoo.com/numerology/img/ico.jpg",success:function e(){ask_update(3)},cancel:function e(){}},wx.onMenuShareTimeline(e),wx.onMenuShareAppMessage(e),wx.onMenuShareQQ(e),wx.onMenuShareWeibo(e)}),loadingAni()});var loadingTA=[$("#loadingT11"),$("#loadingT22"),$("#loadingT33"),$("#loadingT44"),$("#loadingT55"),$("#loadingT66"),$("#loadingT77")];$("body")[0].addEventListener("touchmove",function(e){e.preventDefault()},!1);var bgm=document.getElementById("bgm"),fireSound=document.getElementById("fireSound"),g1Sound=document.getElementById("g1Sound"),g2Sound=document.getElementById("g2Sound"),g3Sound=document.getElementById("g3Sound"),failSound=document.getElementById("failSound"),loadingSound=document.getElementById("loadingSound");$("#ruleBtn").click(function(){TweenLite.set($("#rule"),{display:"block",opacity:1}),TweenLite.from($("#rule"),.5,{opacity:0,scale:1.2})}),$("#rule").click(function(){TweenLite.to($("#rule"),.5,{opacity:0,display:"none"})});var nowGame=999;$("#p1btn1").click(function(){nowGame=0,g1Sound.play(),goGameHint()}),$("#p1btn2").click(function(){nowGame=1,g2Sound.play(),goGameHint()}),$("#p1btn3").click(function(){nowGame=2,g3Sound.play(),goGameHint()});var blurA=[$("#blur1"),$("#blur2"),$("#blur3")],hintA=[$("#hint1"),$("#hint2"),$("#hint3")],gameA=[$("#game1"),$("#game2"),$("#game3")],icoA=[$("#rightIco1"),$("#rightIco2"),$("#rightIco3")];$(".hint").click(function(){TweenLite.to($("#gameHint"),1,{display:"none",opacity:0,scale:1.5}),2==nowGame&&game3()});var gameStateA=[0,0,0];$("#g1btn1").click(function(){gameStateA[0]=1,gameEnd()}),$("#g1btn2").click(function(){gameStateA[0]=2,gameEnd()}),$("#g1btn3").click(function(){gameStateA[0]=2,gameEnd()});var musicStateA=[0,0,0];$("#g2btn1").click(function(){gameStateA[1]=2,gameEnd(),audio1.pause(),audio2.pause(),audio3.pause(),musicStateA=[0,0,0],setMusicGif()}),$("#g2btn2").click(function(){gameStateA[1]=2,gameEnd(),audio1.pause(),audio2.pause(),audio3.pause(),musicStateA=[0,0,0],setMusicGif()}),$("#g2btn3").click(function(){gameStateA[1]=1,gameEnd(),audio1.pause(),audio2.pause(),audio3.pause(),musicStateA=[0,0,0],setMusicGif()});var audio1=document.getElementById("audio1"),audio2=document.getElementById("audio2"),audio3=document.getElementById("audio3");$("#musicBtn1").click(function(){0==musicStateA[0]?(audio1.play(),audio2.pause(),audio3.pause(),musicStateA=[1,0,0]):(audio1.pause(),audio2.pause(),audio3.pause(),musicStateA=[0,0,0]),setMusicGif()}),$("#musicBtn2").click(function(){0==musicStateA[1]?(audio1.pause(),audio2.play(),audio3.pause(),musicStateA=[0,1,0]):(audio1.pause(),audio2.pause(),audio3.pause(),musicStateA=[0,0,0]),setMusicGif()}),$("#musicBtn3").click(function(){0==musicStateA[2]?(audio1.pause(),audio2.pause(),audio3.play(),musicStateA=[0,0,1]):(audio1.pause(),audio2.pause(),audio3.pause(),musicStateA=[0,0,0]),setMusicGif()});var screenW,screenH;screenW=document.body.offsetWidth,screenH=document.body.offsetHeight;var oldX,oldY,nowX,nowY,ifPlayingGame3=0,fire=$("#bigfire"),fireSize=0;$("#g3btn").click(function(){window.location.href="http://www.baidu.com"}),$("body").on("touchstart",function(e){oldX=e.originalEvent.touches[0].pageX,oldY=e.originalEvent.touches[0].pageY,nowX=e.originalEvent.touches[0].pageX,nowY=e.originalEvent.touches[0].pageY,1==ifPlayingGame3&&fireSound.play()}).on("touchmove",function(e){oldX=nowX,oldY=nowY,nowX=e.originalEvent.touches[0].pageX,nowY=e.originalEvent.touches[0].pageY,1==ifPlayingGame3&&nowY<downline&&nowY>topline&&(fireSize+=Math.sqrt((nowY-oldY)*(nowY-oldY)+(nowX-oldX)*(nowX-oldX))/Math.sqrt(screenW*screenW+screenH*screenH)/2,Time=new Date,(nowTime=Time.getTime())-lastTime>10&&(addFire(nowX,nowY),lastTime=nowTime))}).on("touchend",function(){fireSound.pause()});var setInt,topline=360,downline=787,stage=new createjs.Stage("mainCanvas"),Time=new Date,lastTime,nowTime;$("#btnAgain").click(function(){TweenLite.to($("#resultPage"),.5,{opacity:0}),TweenLite.set($("#resultPage"),{display:"none",delay:.5}),2==nowGame&&(ifPlayingGame3=1,setInt=window.setInterval(setFireSize,50))}),$("#btnShare1").click(function(){showShare()}),$("#btnShare2").click(function(){showShare()}),$("#shareLayer").click(function(){TweenLite.to($("#shareLayer"),.5,{opacity:0}),TweenLite.set($("#shareLayer"),{display:"none",delay:.5})}),$("#btnPrize1").click(function(){goPrize()}),$("#btnPrize2").click(function(){goPrize()}),$("#btnNext1").click(function(){nextGame()}),$("#btnNext2").click(function(){nextGame()});var rtA=[$("#r1t"),$("#r2t"),$("#r3t")],wtA=[$("#w1t"),$("#w2t"),$("#w3t")],loadWechatConfig=function e(){var t,n,i;i=encodeURIComponent(window.location.href.split("#")[0]),t=document.createElement("script"),t.src="http://api.giccoo.com/api/config?url="+i,n=document.getElementsByTagName("script")[0],n.parentNode.insertBefore(t,n)};