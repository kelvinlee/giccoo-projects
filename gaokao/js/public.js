//=======================标题 抖动
var p1title
var p1titleA=["img/title1.png","img/title2.png","img/title3.png"]

var p1titleSheet

function setP1title(){
  // var str
  // for (var i = 1; i <=2 ; i++) {//站起来 0-69--70
  //   if(i<10){str="//image.giccoo.com/projects/your_own_way/img/standup/man000"+i+".png"}else{str="//image.giccoo.com/projects/your_own_way/img/standup/man00"+i+".png"}
  //   boyA.push(str)
  // };


  p1titleSheet= new createjs.SpriteSheet({
    "images":p1titleA,
    "frames":{"height":301,"width":640},
    "animations":{
      shake :[0,2,,.1],
    }
  });

  p1title = new createjs.Sprite(p1titleSheet)
  stage1.addChild(p1title)


}
//=======================btn 抖动
var p1go
var p1goA=["img/p1btn1.jpg","img/p1btn2.jpg","img/p1btn3.jpg"]

var p1goSheet

function setP1btn(){
  p1goSheet= new createjs.SpriteSheet({
    "images":p1goA,
    "frames":{"height":188,"width":640},
    "animations":{
      shake :[0,2,,.2],
    }
  });

  p1go = new createjs.Sprite(p1goSheet)
  stage1.addChild(p1go)


}
//=======================选择画圈
var userMark
var userMarkA=["img/circle/0.png","img/circle/1.png","img/circle/2.png","img/circle/3.png","img/circle/4.png","img/circle/5.png","img/circle/6.png","img/circle/7.png"]

var userMarkSheet1
var userMarkSheet2
var userMarkSheet3
var userMarkSheet4

var userMark1
var userMark2
var userMark3
var userMark4
var userMarkA

function setuserMark(){
  userMarkSheet1= new createjs.SpriteSheet({
    "images":userMarkA,
    "frames":{"height":51,"width":640},
    "animations":{
      end:[7],
      goEnd :[0,7,"end",.6]
    }
  });
  userMarkSheet2= new createjs.SpriteSheet({
    "images":userMarkA,
    "frames":{"height":51,"width":640},
    "animations":{
      end:[7],
      goEnd :[0,7,"end",.6]
    }
  });
  userMarkSheet3= new createjs.SpriteSheet({
    "images":userMarkA,
    "frames":{"height":51,"width":640},
    "animations":{
      end:[7],
      goEnd :[0,7,"end",.6]
    }
  });
  userMarkSheet4= new createjs.SpriteSheet({
    "images":userMarkA,
    "frames":{"height":51,"width":640},
    "animations":{
      end:[7],
      goEnd :[0,7,"end",.6]
    }
  });

  userMark1 = new createjs.Sprite(userMarkSheet1)
  userMark2 = new createjs.Sprite(userMarkSheet2)
  userMark3 = new createjs.Sprite(userMarkSheet3)
  userMark4 = new createjs.Sprite(userMarkSheet4)
  userMarkA=[userMark1,userMark2,userMark3,userMark4]
  stage3.addChild(userMark1)
  stage3.addChild(userMark2)
  stage3.addChild(userMark3)
  stage3.addChild(userMark4)
}

//=====================loading条
var loadingBg=new createjs.Bitmap("img/bar.png")
var loadingBar=new createjs.Shape()
function setLoadingBar(){
  stage1.addChild(loadingBg)
  stage1.addChild(loadingBar)
  TweenLite.set(loadingBg,{regX:320,regY:150.5,x:320,y:425.5/1000*stageH})

  loadingBar.graphics.beginFill("#ffffff").drawRect(0, 285, 358, 4);
  TweenLite.set(loadingBar,{regX:0,regY:150.5,x:132,y:425.5/1000*stageH,scaleX:0})

  TweenLite.to(loadingBar,1.5,{scaleX:1,ease:Linear.easeNone,onComplete:loadingDone})//======loading时间
}

function loadingDone(){
  TweenLite.to(loadingBar,.5,{alpha:0})
  TweenLite.to(loadingBg,.5,{alpha:0})
  showP1()
}
//========p1pic 各种尺子笔
var p1picA=[]
var p1pic=new createjs.Container()
function setP1pic(){
  stage1.addChild(p1pic)
  for (var i = 1; i <= 10; i++) {
    var _p1pic=new createjs.Bitmap("img/start"+i+".png")
    p1picA.push(_p1pic)
    p1pic.addChild(_p1pic)
    TweenLite.set(_p1pic,{y:stageH-643,overwrite:0,alpha:0})

    TweenLite.set(_p1pic,{overwrite:0,alpha:1,delay:1+i*.2})

    TweenLite.set(_p1pic,{overwrite:0,alpha:0,delay:1+i*.2+.2})

    TweenLite.set(_p1pic,{overwrite:0,alpha:1,delay:1+(30-i)*.1+.2})
  };
}
//==========logo===
var logoB=new createjs.Bitmap("img/logob.png")
var logoW=new createjs.Bitmap("img/logow.png")
function setLogo(){
  stage.addChild(logoB)
  stage.addChild(logoW)
}

function logo(_str){
  if(_str=="black"){
    TweenLite.set(logoB,{alpha:1})
    TweenLite.set(logoW,{alpha:0})
  }else{
    TweenLite.set(logoB,{alpha:0})
    TweenLite.set(logoW,{alpha:1})
  }
  stage.addChild(logoB)
  stage.addChild(logoW)
}

//==========p2 按钮们

type1btn.click(function(){
  wlType=0
  TweenLite.set(typeMark,{alpha:1,y:stageH-225-6,x:441})
})

type2btn.click(function(){
  wlType=1
  TweenLite.set(typeMark,{alpha:1,y:stageH-225-6,x:512})
})
var UserInput
p2start.click(function(){
  UserInput=document.getElementById("UserTextarea");
  
  if(UserInput.value==""){
    alert("考试前记得写名字哟")
  }else if(wlType==3){
    alert("请选择考生类型喔")
  }else{
    console.log("下一步")
    TweenLite.set($(".icon-restart"),{display:"none"})
    TweenLite.set($(".icon-rotation"),{display:"none"})
    TweenLite.set(p2start,{display:"none"})
    TweenLite.set(type1btn,{display:"none"})
    TweenLite.set(type2btn,{display:"none"})
    TweenLite.set(userUGC,{display:"none"})
    TweenLite.set($("#userName"),{display:"none"})
    TweenLite.set($("#hint1"),{display:"block",opacity:0})
    TweenLite.to($("#hint1"),.5,{display:"block",opacity:1})
    setPage3()
  }

})

$("#hint1").click(function(){
  TweenLite.set($("#hint1"),{display:"none"})
  goP3()
})
//========传照片
var userUGC=$("#userUGC")
function setUserPic(){
  //TweenLite.set(userUGC,{delay:1,display:"block",width:169/640*screenW,height:252/640*screenW,x:61/640*screenW,y:screenH-(196+249-2)/640*screenW})
  TweenLite.set(userUGC,{delay:0.4,display:"block",width:169/640*screenW,height:240/640*screenW,x:60.5/640*screenW,y:screenH-(196+249-2)/640*screenW})
  console.log(screenH-(196+249-2)/640*screenW)
}

//=========考试页
var stage3=new createjs.Container()
var p3bg=new createjs.Bitmap("img/p3bg.png")
var p3btn=new createjs.Bitmap("img/p3btn.png")

function setPage3(){
  stage.addChild(stage3)
  stage3.addChild(p3bg)
  TweenLite.set(p3bg,{regY:384,y:86/1000*stageH})
  setTimer()
  
  stage3.addChild(p3btn)
  TweenLite.set(p3btn,{regY:72,y:stageH-112})

  setP3title()

  setP3btn()

  setP3Q()
}

//======计时器
var timeT1=new createjs.Bitmap("img/timetoend.png")
var timeT=new createjs.Text("0:03:00","29px Arial", "#ffffff")
var timeLeft=180
var t1000
function setTimer(){
  stage3.addChild(timeT1)
  TweenLite.set(timeT1,{regY:14.5,y:43/1000*stageH})
  stage3.addChild(timeT)
  TweenLite.set(timeT,{x:250,regY:14.5,y:43/1000*stageH})
  t1000=setInterval(setTimeT,1000)
}
var nowPage=3
function setTimeT(){
  timeLeft--
  var min=parseInt(timeLeft/60)
  var _sec=timeLeft-min*60
  var sec=_sec
  if(sec<10){
    sec="0"+_sec.toString()
  }
  timeT.text="0:0"+min+":"+sec
  if(timeLeft==90&&nowPage==3){
    clearInterval(t1000)
    TweenLite.set($("#hint2"),{display:"block",opacity:0})
    TweenLite.to($("#hint2"),1,{display:"block",opacity:1})
  }
  if(timeLeft==0&&nowPage==3){
    alert("交卷啦")
    clearInterval(t1000)
    goSubmit()
  }
}
$("#hint2").click(function(){
  TweenLite.set($("#hint2"),{display:"none",delay:2})
  TweenLite.to($("#hint2"),1,{opacity:0,delay:1})
  t1000=setInterval(setTimeT,1000)
})

//======p3标题
var p3title=new createjs.Container()
var p3titleT=new createjs.Bitmap("img/p3title.png")
var p3typeT
var p3QnumA=[]
function setP3title(){
  stage3.addChild(p3title)
  p3title.addChild(p3titleT)
  TweenLite.set(p3title,{regY:52,y:243/1000*stageH})
  p3typeT=new createjs.Bitmap("img/type"+wlType+"_"+examType+".png")
  p3title.addChild(p3typeT)

  for (var i = 0; i <10; i++) {
    var p3Qnum=new createjs.Bitmap("img/count"+i+".png")
    p3title.addChild(p3Qnum)
    p3Qnum.visible=false
    if(nowQ==i){
      p3Qnum.visible=true
    }
    p3QnumA.push(p3Qnum)
  };
}
//======p3按钮
var btnYA=[0,0,0]//++60
var btnA=$("#btnA")
var btnB=$("#btnB")
var btnC=$("#btnC")
var btnD=$("#btnD")
var btnABCD=[btnA,btnB,btnC,btnD]
function setP3btn(){
  TweenLite.set($("#nextBtn"),{display:"block",height:76/640*screenW,y:screenH-(110+76)/640*screenW})
  TweenLite.set($("#backBtn"),{display:"block",height:76/640*screenW,y:screenH-(110+76)/640*screenW})
  TweenLite.set($("#submitBtn"),{display:"block",height:76/640*screenW,y:screenH-(32+76)/640*screenW})

  setuserMark()
  // TweenLite.set(userMark,{width:"100%",height:31/640*screenW,y:((547.5-93.5-15+60)/1000*stageH),display:"block"})
  // userMark.gotoAndPlay("goEnd")

  for (var i = 0; i < 4 ; i++) {//====设置按钮/圈圈位置
    TweenLite.set(btnABCD[i],{width:"100%",height:31/640*screenW,y:((547.5)/1000*stageH-93.5+60*i)/640*screenW,display:"block"}) 
    TweenLite.set(userMarkA[i],{width:"100%",height:31/640*screenW,y:((547.5)/1000*stageH-93.5+60*i-12),alpha:0})
    userMarkA[i].gotoAndPlay("goEnd")
  };
  



}

function changeMark(){//=====画圈圈
  //TweenLite.set(userMark,{width:"100%",height:31/640*screenW,y:((547.5-93.5-15+60)/1000*stageH),display:"block"})
  //userMark.gotoAndPlay("goEnd")
  //userMarkA[userAnswer[nowQ-1]].alpha=1
  //userMarkA[userAnswer[nowQ-1]].gotoAndPlay("goEnd")
  for(var j=0;j<4;j++){
    TweenLite.set(userMarkA[j],{alpha:0})
    if(userAnswer[nowQ]-1==j&&userAnswer[nowQ]!=0){
      TweenLite.set(userMarkA[j],{alpha:1})
      userMarkA[j].gotoAndPlay("goEnd")
    }
  }
}

var fyType="next"

btnA.click(function(){
  userAnswer[nowQ]=1
  changeMark()
  console.log(userAnswer)
})
btnB.click(function(){
  userAnswer[nowQ]=2
  changeMark()
  console.log(userAnswer)
})
btnC.click(function(){
  userAnswer[nowQ]=3
  changeMark()
  console.log(userAnswer)
})
btnD.click(function(){
  userAnswer[nowQ]=4
  changeMark()
  console.log(userAnswer)
})



$("#nextBtn").click(function(){
  fyType="next"
  lastQ=nowQ
  nowQ++
  if(nowQ==10){
    nowQ=0
  }
  changeQ()
})

$("#backBtn").click(function(){
  fyType="back"
  lastQ=nowQ
  nowQ--
  if(nowQ==-1){
    nowQ=9
  }
  changeQ()
})


$("#submitBtn").click(function(){
  goSubmit()
})
//=======p3题
var nowQMC=new createjs.Container()
var lastQMC=new createjs.Container()

var nowQA=[]
var lastQA=[]

var nowQMask=new createjs.Shape()
var lastQMask=new createjs.Shape()

var fys=new createjs.Bitmap("img/fys.png")
var fy=new createjs.Bitmap("img/fy.png")
var fyMask=new createjs.Shape()

var wl=[[0,1,2,3,4,5,6,7,8,9,10],[0,1,2,3,4,5,10,11,12,13]]

function setP3Q(){
  stage3.addChild(nowQMC)
  stage3.addChild(lastQMC)
  stage3.addChild(fy)

  nowQMask.graphics.beginFill("#ff0000").drawRect(0, 90/1000*stageH, 640, stageH);
  lastQMask.graphics.beginFill("#ff0000").drawRect(0, 90/1000*stageH, 640, stageH);
  fyMask.graphics.beginFill("#ff0000").drawRect(0, 90/1000*stageH, 640, stageH);

  stage3.addChildAt(nowQMask,0)
  stage3.addChildAt(lastQMask,0)
  stage3.addChildAt(fyMask,0)

  nowQMC.mask=nowQMask
  lastQMC.mask=lastQMask
  fy.mask=fyMask

  TweenLite.set(fy,{scaleY:10/1000*stageH,y:90/1000*stageH,x:-640})

  for (var i = 0; i < 10; i++) {
    var Q1=new createjs.Bitmap("img/"+examType+"/"+wl[wlType][i]+".png")
    var Q2=new createjs.Bitmap("img/"+examType+"/"+wl[wlType][i]+".png")

    nowQMC.addChild(Q1)
    lastQMC.addChild(Q2)

    nowQA.push(Q1)
    lastQA.push(Q2)

    TweenLite.set(Q1,{regY:192.5,y:547.5/1000*stageH})
    TweenLite.set(Q2,{regY:192.5,y:547.5/1000*stageH})
    Q1.visible=false
    Q2.visible=false

    if(i==0){
      Q1.visible=true
      Q2.visible=true
    }
  };
}


//=======变换题



function changeQ(){
  //userMark.gotoAndPlay("goEnd")
  console.log("第"+nowQ+"题")
  //=====改题号
  for (var i = 0; i <10; i++) {
    nowQA[i].visible=false
    lastQA[i].visible=false
    p3QnumA[i].visible=false
    if(nowQ==i){
      p3QnumA[i].visible=true
      nowQA[i].visible=true
    
    }
    if(lastQ==i){
      lastQA[i].visible=true
    }
  };

  //=====翻页
  var delayT=.5
  stage3.addChild(fys)
  if(fyType=="next"){
    console.log("刚刚点击下一题")
    TweenLite.set(lastQMask,{scaleX:1,x:0})
    TweenLite.set(nowQMask,{scaleX:0,x:640})

    TweenLite.to(lastQMask,1,{scaleX:0,x:0})
    TweenLite.to(nowQMask,1,{scaleX:1,x:0})

    TweenLite.set(fys,{y:89/1000*stageH,scaleY:10/1000*stageH,x:640})
    TweenLite.to(fys,1,{x:0})

    TweenLite.set(fy,{x:0})
    TweenLite.to(fy,1,{x:-640})
    TweenLite.set(fyMask,{scaleX:0,x:640})
    TweenLite.to(fyMask,1,{scaleX:.75,x:-480})
  }else{
    delayT=.2
    console.log("刚刚点击上一题")
    TweenLite.set(lastQMask,{scaleX:1,x:0})
    TweenLite.set(nowQMask,{scaleX:0,x:0})

    TweenLite.to(lastQMask,1,{scaleX:0,x:640})
    TweenLite.to(nowQMask,1,{scaleX:1,x:0})

    TweenLite.set(fys,{y:89/1000*stageH,scaleY:10/1000*stageH,x:0})
    TweenLite.to(fys,1,{x:640})

    TweenLite.set(fy,{x:-640})
    TweenLite.to(fy,1,{x:0})
    TweenLite.set(fyMask,{scaleX:.75,x:-480})
    TweenLite.to(fyMask,1,{scaleX:0,x:640})
  }



  //======设置按钮位置
  switch(btnType[wlType][examType][nowQ]){
    case 0:
      for (var i = 0; i < 4 ; i++) {//====设置按钮位置
        TweenLite.set(btnABCD[i],{width:"100%",height:31/640*screenW,y:((547.5)/1000*stageH-93.5+60*i)/640*screenW,display:"block"}) 
        TweenLite.set(userMarkA[i],{width:"100%",height:31/640*screenW,y:((547.5)/1000*stageH-93.5+60*i-12),display:"block",delay:delayT})
        //userMark.gotoAndPlay("goEnd")
      };
    break;
    case 1:
      for (var i = 0; i < 4 ; i++) {//====设置按钮位置
        TweenLite.set(btnABCD[i],{width:"100%",height:31/640*screenW,y:((547.5)/1000*stageH-93.5+60*i+69)/640*screenW,display:"block"}) 
        TweenLite.set(userMarkA[i],{width:"100%",height:31/640*screenW,y:((547.5)/1000*stageH-93.5-12+60*i+69),display:"block",delay:delayT})
      };
    break;
    case 2:
      for (var i = 0; i < 4 ; i++) {//====设置按钮位置
        TweenLite.set(btnABCD[i],{width:"100%",height:31/640*screenW,y:((547.5)/1000*stageH-93.5+60*i+61)/640*screenW,display:"block"}) 
        TweenLite.set(userMarkA[i],{width:"100%",height:31/640*screenW,y:((547.5)/1000*stageH-93.5-12+60*i+61),display:"block",delay:delayT})
      };
    break;
    case 3:
      
      TweenLite.set(btnABCD[0],{width:"100%",height:31/640*screenW,y:((547.5)/1000*stageH-93.5)/640*screenW,display:"block"}) 
      TweenLite.set(btnABCD[1],{width:"100%",height:31/640*screenW,y:((547.5)/1000*stageH-93.5+81)/640*screenW,display:"block"})
      TweenLite.set(btnABCD[2],{width:"100%",height:31/640*screenW,y:((547.5)/1000*stageH-93.5+142)/640*screenW,display:"block"})
      TweenLite.set(btnABCD[3],{width:"100%",height:31/640*screenW,y:((547.5)/1000*stageH-93.5+224)/640*screenW,display:"block"}) 

      TweenLite.set(userMarkA[0],{width:"100%",height:31/640*screenW,y:((547.5)/1000*stageH-93.5-12),display:"block",delay:delayT})
      TweenLite.set(userMarkA[1],{width:"100%",height:31/640*screenW,y:((547.5)/1000*stageH-93.5-12+81),display:"block",delay:delayT})
      TweenLite.set(userMarkA[2],{width:"100%",height:31/640*screenW,y:((547.5)/1000*stageH-93.5-12+142),display:"block",delay:delayT})
      TweenLite.set(userMarkA[3],{width:"100%",height:31/640*screenW,y:((547.5)/1000*stageH-93.5-12+224),display:"block",delay:delayT})
      
    break;
  }

  //===设置圈圈显示
  for(var j=0;j<4;j++){
    TweenLite.set(userMarkA[j],{alpha:0,delay:delayT})
    if(userAnswer[nowQ]-1==j&&userAnswer[nowQ]!=0){
      TweenLite.set(userMarkA[j],{alpha:1,delay:delayT})
    }
  }

}
//======交卷
var userScore=[0,0,0,0,0,0,0,0,0,0]
var finalScore=[0,0,0,0,0]
function goSubmit(){

  console.log("交卷")
  for (var i = 0; i <10; i++) {
    if(userAnswer[i]==allAnswer[wlType][examType][i]){
      userScore[i]=1
    }
  };
  finalScore[0]=  userScore[0]+userScore[1]
  finalScore[1]=  userScore[2]+userScore[3]
  finalScore[2]=  userScore[4]+userScore[5]
  finalScore[3]=  userScore[6]+userScore[7]+userScore[8]+userScore[9]
  finalScore[4]=  finalScore[0]+finalScore[1]+finalScore[2]+finalScore[3]
  console.log("语文"+finalScore[0]*75+"数学"+finalScore[1]*75+"英语"+finalScore[2]*75+"综合"+finalScore[3]*75+"总分"+finalScore[4]*75)
  stage3.visible=false
  stage2.visible=false
  clearInterval(t1000)
  goP4()
}