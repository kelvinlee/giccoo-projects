function setP1title(){p1titleSheet=new createjs.SpriteSheet({images:p1titleA,frames:{height:301,width:640},animations:{shake:[0,2,,.1]}}),p1title=new createjs.Sprite(p1titleSheet),stage1.addChild(p1title)}function setP1btn(){p1goSheet=new createjs.SpriteSheet({images:p1goA,frames:{height:188,width:640},animations:{shake:[0,2,,.2]}}),p1go=new createjs.Sprite(p1goSheet),stage1.addChild(p1go)}function setuserMark(){userMarkSheet1=new createjs.SpriteSheet({images:userMarkA,frames:{height:51,width:640},animations:{end:[7],goEnd:[0,7,"end",.6]}}),userMarkSheet2=new createjs.SpriteSheet({images:userMarkA,frames:{height:51,width:640},animations:{end:[7],goEnd:[0,7,"end",.6]}}),userMarkSheet3=new createjs.SpriteSheet({images:userMarkA,frames:{height:51,width:640},animations:{end:[7],goEnd:[0,7,"end",.6]}}),userMarkSheet4=new createjs.SpriteSheet({images:userMarkA,frames:{height:51,width:640},animations:{end:[7],goEnd:[0,7,"end",.6]}}),userMark1=new createjs.Sprite(userMarkSheet1),userMark2=new createjs.Sprite(userMarkSheet2),userMark3=new createjs.Sprite(userMarkSheet3),userMark4=new createjs.Sprite(userMarkSheet4),userMarkA=[userMark1,userMark2,userMark3,userMark4],stage3.addChild(userMark1),stage3.addChild(userMark2),stage3.addChild(userMark3),stage3.addChild(userMark4)}function setLoadingBar(){stage1.addChild(loadingBg),stage1.addChild(loadingBar),TweenLite.set(loadingBg,{regX:320,regY:150.5,x:320,y:.4255*stageH}),loadingBar.graphics.beginFill("#ffffff").drawRect(0,285,358,4),TweenLite.set(loadingBar,{regX:0,regY:150.5,x:132,y:.4255*stageH,scaleX:0}),TweenLite.to(loadingBar,1.5,{scaleX:1,ease:Linear.easeNone,onComplete:loadingDone})}function loadingDone(){TweenLite.to(loadingBar,.5,{alpha:0}),TweenLite.to(loadingBg,.5,{alpha:0}),showP1()}function setP1pic(){stage1.addChild(p1pic);for(var e=1;e<=10;e++){var t=new createjs.Bitmap("img/start"+e+".png");p1picA.push(t),p1pic.addChild(t),TweenLite.set(t,{y:stageH-643,overwrite:0,alpha:0}),TweenLite.set(t,{overwrite:0,alpha:1,delay:1+.2*e}),TweenLite.set(t,{overwrite:0,alpha:0,delay:1+.2*e+.2}),TweenLite.set(t,{overwrite:0,alpha:1,delay:1+.1*(30-e)+.2})}}function setLogo(){stage.addChild(logoB),stage.addChild(logoW)}function logo(e){"black"==e?(TweenLite.set(logoB,{alpha:1}),TweenLite.set(logoW,{alpha:0})):(TweenLite.set(logoB,{alpha:0}),TweenLite.set(logoW,{alpha:1})),stage.addChild(logoB),stage.addChild(logoW)}function setUserPic(){TweenLite.set(userUGC,{delay:1,display:"block",width:169/640*screenW,height:.39375*screenW,x:61/640*screenW,y:screenH-443/640*screenW}),console.log(screenH-443/640*screenW)}function setPage3(){stage.addChild(stage3),stage3.addChild(p3bg),TweenLite.set(p3bg,{regY:384,y:.086*stageH}),setTimer(),stage3.addChild(p3btn),TweenLite.set(p3btn,{regY:72,y:stageH-112}),setP3title(),setP3btn(),setP3Q()}function setTimer(){stage3.addChild(timeT1),TweenLite.set(timeT1,{regY:14.5,y:.043*stageH}),stage3.addChild(timeT),TweenLite.set(timeT,{x:250,regY:14.5,y:.043*stageH}),t1000=setInterval(setTimeT,1e3)}function setTimeT(){timeLeft--;var e=parseInt(timeLeft/60),t=timeLeft-60*e,a=t;a<10&&(a="0"+t.toString()),timeT.text="0:0"+e+":"+a,90==timeLeft&&3==nowPage&&(clearInterval(t1000),TweenLite.set($("#hint2"),{display:"block",opacity:0}),TweenLite.to($("#hint2"),1,{display:"block",opacity:1})),0==timeLeft&&3==nowPage&&(alert("交卷啦"),clearInterval(t1000),goSubmit())}function setP3title(){stage3.addChild(p3title),p3title.addChild(p3titleT),TweenLite.set(p3title,{regY:52,y:.243*stageH}),p3typeT=new createjs.Bitmap("img/type"+wlType+"_"+examType+".png"),p3title.addChild(p3typeT);for(var e=0;e<10;e++){var t=new createjs.Bitmap("img/count"+e+".png");p3title.addChild(t),t.visible=!1,nowQ==e&&(t.visible=!0),p3QnumA.push(t)}}function setP3btn(){TweenLite.set($("#nextBtn"),{display:"block",height:.11875*screenW,y:screenH-.290625*screenW}),TweenLite.set($("#backBtn"),{display:"block",height:.11875*screenW,y:screenH-.290625*screenW}),TweenLite.set($("#submitBtn"),{display:"block",height:.11875*screenW,y:screenH-.16875*screenW}),setuserMark();for(var e=0;e<4;e++)TweenLite.set(btnABCD[e],{width:"100%",height:31/640*screenW,y:(.5475*stageH-93.5+60*e)/640*screenW,display:"block"}),TweenLite.set(userMarkA[e],{width:"100%",height:31/640*screenW,y:.5475*stageH-93.5+60*e-12,alpha:0}),userMarkA[e].gotoAndPlay("goEnd")}function changeMark(){for(var e=0;e<4;e++)TweenLite.set(userMarkA[e],{alpha:0}),userAnswer[nowQ]-1==e&&0!=userAnswer[nowQ]&&(TweenLite.set(userMarkA[e],{alpha:1}),userMarkA[e].gotoAndPlay("goEnd"))}function setP3Q(){stage3.addChild(nowQMC),stage3.addChild(lastQMC),stage3.addChild(fy),nowQMask.graphics.beginFill("#ff0000").drawRect(0,.09*stageH,640,stageH),lastQMask.graphics.beginFill("#ff0000").drawRect(0,.09*stageH,640,stageH),fyMask.graphics.beginFill("#ff0000").drawRect(0,.09*stageH,640,stageH),stage3.addChildAt(nowQMask,0),stage3.addChildAt(lastQMask,0),stage3.addChildAt(fyMask,0),nowQMC.mask=nowQMask,lastQMC.mask=lastQMask,fy.mask=fyMask,TweenLite.set(fy,{scaleY:.01*stageH,y:.09*stageH,x:-640});for(var e=0;e<10;e++){var t=new createjs.Bitmap("img/"+examType+"/"+wl[wlType][e]+".png"),a=new createjs.Bitmap("img/"+examType+"/"+wl[wlType][e]+".png");nowQMC.addChild(t),lastQMC.addChild(a),nowQA.push(t),lastQA.push(a),TweenLite.set(t,{regY:192.5,y:.5475*stageH}),TweenLite.set(a,{regY:192.5,y:.5475*stageH}),t.visible=!1,a.visible=!1,0==e&&(t.visible=!0,a.visible=!0)}}function changeQ(){console.log("第"+nowQ+"题");for(var e=0;e<10;e++)nowQA[e].visible=!1,lastQA[e].visible=!1,p3QnumA[e].visible=!1,nowQ==e&&(p3QnumA[e].visible=!0,nowQA[e].visible=!0),lastQ==e&&(lastQA[e].visible=!0);var t=.5;switch(stage3.addChild(fys),"next"==fyType?(console.log("刚刚点击下一题"),TweenLite.set(lastQMask,{scaleX:1,x:0}),TweenLite.set(nowQMask,{scaleX:0,x:640}),TweenLite.to(lastQMask,1,{scaleX:0,x:0}),TweenLite.to(nowQMask,1,{scaleX:1,x:0}),TweenLite.set(fys,{y:.089*stageH,scaleY:.01*stageH,x:640}),TweenLite.to(fys,1,{x:0}),TweenLite.set(fy,{x:0}),TweenLite.to(fy,1,{x:-640}),TweenLite.set(fyMask,{scaleX:0,x:640}),TweenLite.to(fyMask,1,{scaleX:.75,x:-480})):(t=.2,console.log("刚刚点击上一题"),TweenLite.set(lastQMask,{scaleX:1,x:0}),TweenLite.set(nowQMask,{scaleX:0,x:0}),TweenLite.to(lastQMask,1,{scaleX:0,x:640}),TweenLite.to(nowQMask,1,{scaleX:1,x:0}),TweenLite.set(fys,{y:.089*stageH,scaleY:.01*stageH,x:0}),TweenLite.to(fys,1,{x:640}),TweenLite.set(fy,{x:-640}),TweenLite.to(fy,1,{x:0}),TweenLite.set(fyMask,{scaleX:.75,x:-480}),TweenLite.to(fyMask,1,{scaleX:0,x:640})),btnType[wlType][examType][nowQ]){case 0:for(var e=0;e<4;e++)TweenLite.set(btnABCD[e],{width:"100%",height:31/640*screenW,y:(.5475*stageH-93.5+60*e)/640*screenW,display:"block"}),TweenLite.set(userMarkA[e],{width:"100%",height:31/640*screenW,y:.5475*stageH-93.5+60*e-12,display:"block",delay:t});break;case 1:for(var e=0;e<4;e++)TweenLite.set(btnABCD[e],{width:"100%",height:31/640*screenW,y:(.5475*stageH-93.5+60*e+69)/640*screenW,display:"block"}),TweenLite.set(userMarkA[e],{width:"100%",height:31/640*screenW,y:.5475*stageH-93.5-12+60*e+69,display:"block",delay:t});break;case 2:for(var e=0;e<4;e++)TweenLite.set(btnABCD[e],{width:"100%",height:31/640*screenW,y:(.5475*stageH-93.5+60*e+61)/640*screenW,display:"block"}),TweenLite.set(userMarkA[e],{width:"100%",height:31/640*screenW,y:.5475*stageH-93.5-12+60*e+61,display:"block",delay:t});break;case 3:TweenLite.set(btnABCD[0],{width:"100%",height:31/640*screenW,y:(.5475*stageH-93.5)/640*screenW,display:"block"}),TweenLite.set(btnABCD[1],{width:"100%",height:31/640*screenW,y:(.5475*stageH-93.5+81)/640*screenW,display:"block"}),TweenLite.set(btnABCD[2],{width:"100%",height:31/640*screenW,y:(.5475*stageH-93.5+142)/640*screenW,display:"block"}),TweenLite.set(btnABCD[3],{width:"100%",height:31/640*screenW,y:(.5475*stageH-93.5+224)/640*screenW,display:"block"}),TweenLite.set(userMarkA[0],{width:"100%",height:31/640*screenW,y:.5475*stageH-93.5-12,display:"block",delay:t}),TweenLite.set(userMarkA[1],{width:"100%",height:31/640*screenW,y:.5475*stageH-93.5-12+81,display:"block",delay:t}),TweenLite.set(userMarkA[2],{width:"100%",height:31/640*screenW,y:.5475*stageH-93.5-12+142,display:"block",delay:t}),TweenLite.set(userMarkA[3],{width:"100%",height:31/640*screenW,y:.5475*stageH-93.5-12+224,display:"block",delay:t});break}for(var a=0;a<4;a++)TweenLite.set(userMarkA[a],{alpha:0,delay:t}),userAnswer[nowQ]-1==a&&0!=userAnswer[nowQ]&&TweenLite.set(userMarkA[a],{alpha:1,delay:t})}function goSubmit(){console.log("交卷");for(var e=0;e<10;e++)userAnswer[e]==allAnswer[wlType][examType][e]&&(userScore[e]=1);finalScore[0]=userScore[0]+userScore[1],finalScore[1]=userScore[2]+userScore[3],finalScore[2]=userScore[4]+userScore[5],finalScore[3]=userScore[6]+userScore[7]+userScore[8]+userScore[9],finalScore[4]=finalScore[0]+finalScore[1]+finalScore[2]+finalScore[3],console.log("语文"+75*finalScore[0]+"数学"+75*finalScore[1]+"英语"+75*finalScore[2]+"综合"+75*finalScore[3]+"总分"+75*finalScore[4]),stage3.visible=!1,stage2.visible=!1,clearInterval(t1000),goP4()}var p1title,p1titleA=["img/title1.png","img/title2.png","img/title3.png"],p1titleSheet,p1go,p1goA=["img/p1btn1.jpg","img/p1btn2.jpg","img/p1btn3.jpg"],p1goSheet,userMark,userMarkA=["img/circle/0.png","img/circle/1.png","img/circle/2.png","img/circle/3.png","img/circle/4.png","img/circle/5.png","img/circle/6.png","img/circle/7.png"],userMarkSheet1,userMarkSheet2,userMarkSheet3,userMarkSheet4,userMark1,userMark2,userMark3,userMark4,userMarkA,loadingBg=new createjs.Bitmap("img/bar.png"),loadingBar=new createjs.Shape,p1picA=[],p1pic=new createjs.Container,logoB=new createjs.Bitmap("img/logob.png"),logoW=new createjs.Bitmap("img/logow.png");type1btn.click(function(){wlType=0,TweenLite.set(typeMark,{alpha:1,y:stageH-225-6,x:441})}),type2btn.click(function(){wlType=1,TweenLite.set(typeMark,{alpha:1,y:stageH-225-6,x:512})});var UserInput;p2start.click(function(){UserInput=document.getElementById("UserTextarea"),""==UserInput.value?alert("考试前记得写名字哟"):3==wlType?alert("请选择考生类型喔"):(console.log("下一步"),TweenLite.set($(".icon-restart"),{display:"none"}),TweenLite.set($(".icon-rotation"),{display:"none"}),TweenLite.set(p2start,{display:"none"}),TweenLite.set(type1btn,{display:"none"}),TweenLite.set(type2btn,{display:"none"}),TweenLite.set(userUGC,{display:"none"}),TweenLite.set($("#userName"),{display:"none"}),TweenLite.set($("#hint1"),{display:"block",opacity:0}),TweenLite.to($("#hint1"),.5,{display:"block",opacity:1}),setPage3())}),$("#hint1").click(function(){TweenLite.set($("#hint1"),{display:"none"}),goP3()});var userUGC=$("#userUGC"),stage3=new createjs.Container,p3bg=new createjs.Bitmap("img/p3bg.png"),p3btn=new createjs.Bitmap("img/p3btn.png"),timeT1=new createjs.Bitmap("img/timetoend.png"),timeT=new createjs.Text("0:03:00","29px Arial","#ffffff"),timeLeft=180,t1000,nowPage=3;$("#hint2").click(function(){TweenLite.set($("#hint2"),{display:"none",delay:1}),TweenLite.to($("#hint2"),1,{opacity:0}),t1000=setInterval(setTimeT,1e3)});var p3title=new createjs.Container,p3titleT=new createjs.Bitmap("img/p3title.png"),p3typeT,p3QnumA=[],btnYA=[0,0,0],btnA=$("#btnA"),btnB=$("#btnB"),btnC=$("#btnC"),btnD=$("#btnD"),btnABCD=[btnA,btnB,btnC,btnD],fyType="next";btnA.click(function(){userAnswer[nowQ]=1,changeMark(),console.log(userAnswer)}),btnB.click(function(){userAnswer[nowQ]=2,changeMark(),console.log(userAnswer)}),btnC.click(function(){userAnswer[nowQ]=3,changeMark(),console.log(userAnswer)}),btnD.click(function(){userAnswer[nowQ]=4,changeMark(),console.log(userAnswer)}),$("#nextBtn").click(function(){fyType="next",lastQ=nowQ,nowQ++,10==nowQ&&(nowQ=0),changeQ()}),$("#backBtn").click(function(){fyType="back",lastQ=nowQ,nowQ--,-1==nowQ&&(nowQ=9),changeQ()}),$("#submitBtn").click(function(){goSubmit()});var nowQMC=new createjs.Container,lastQMC=new createjs.Container,nowQA=[],lastQA=[],nowQMask=new createjs.Shape,lastQMask=new createjs.Shape,fys=new createjs.Bitmap("img/fys.png"),fy=new createjs.Bitmap("img/fy.png"),fyMask=new createjs.Shape,wl=[[0,1,2,3,4,5,6,7,8,9,10],[0,1,2,3,4,5,10,11,12,13]],userScore=[0,0,0,0,0,0,0,0,0,0],finalScore=[0,0,0,0,0];