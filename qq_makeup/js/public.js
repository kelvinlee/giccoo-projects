
//===============第一页

var p1circle=new createjs.Bitmap("img/p1cricle.png")
var p1cA=[]
var p1title1=new createjs.Bitmap("img/p1title1.png")
var p1title2=new createjs.Bitmap("img/p1title2.png")
var p1qMark=new createjs.Bitmap("img/p1qmark.png")
var p1copy=new createjs.Bitmap("img/p1copy.png")
var blackScreen=new createjs.Shape()
var pinkScreen=new createjs.Shape()
function setPage1 () {
    //====黑屏幕
  pinkScreen.graphics.beginFill("#ffacc6").drawRect(0,0,640,screenH);
  stage_1.addChild(pinkScreen)

  blackScreen.graphics.beginFill("#000000").drawRect(0,0,640,screenH);
  stage_1.addChild(blackScreen)


  //====化妆品们
  for (var i = 1; i <= 16; i++) {
    var p1c=new createjs.Bitmap("img/p1c"+i+".png")
    p1cA.push(p1c)
    stage_1.addChild(p1c)
    p1c.x=320
    p1c.y=331
    p1c.regX=p1c.regY=320
    if(i==10||i==11){
      p1c.regX=p1c.regY=373
    }
    p1c.scale=.3
    p1c.alpha=0
  };

  //====大圆
  stage_1.addChild(p1circle)
  p1circle.x=320
  p1circle.y=331  
  p1circle.regX=321.5
  p1circle.regY=321.5
  p1circle.alpha=0
  p1circle.scale=1.2

  //====文案+“?”
  stage_1.addChild(p1title1)
  stage_1.addChild(p1title2)
  stage_1.addChild(p1qMark)

  p1title1.x=p1title2.x=320
  p1title1.y=p1title2.y=227.5
  p1title1.regX=p1title2.regX=147
  p1title1.regY=p1title2.regY=45.5

  p1qMark.x=320
  p1qMark.y=386
  p1qMark.regX=66
  p1qMark.regY=90.5 

  //====气泡
  stage_1.addChild(p1copy)
  p1copy.x=585
  p1copy.y=screenH-94
  p1copy.regX=490
  p1copy.regY=255
  p1copy.scale=0

}
//==================第一页 问题出现
function ani1_showQ(){
  p1qMark.scale=0
  p1title1.scale=p1title2.scale=1.5
  p1title1.y=p1title2.y=227.5+100+50
  p1title1.alpha=p1title2.alpha=0
  TweenLite.to(p1title1,1,{y:227.5+100,alpha:1,delay:1,overwrite:0})
  TweenLite.to(p1title2,1,{y:227.5+100,alpha:1,delay:1.1,overwrite:0,onComplete:ani1_showQ2})
}
function ani1_showQ2(){
  var _t=.5
  TweenLite.set(p1title1,{y:227.5+60,scale:1.3,delay:_t})
  TweenLite.set(p1title2,{y:227.5+60,scale:1.3,delay:_t+.03})

  TweenLite.to(p1title1,1.8,{y:227.5,scale:1,delay:_t,ease:Elastic.easeOut})
  TweenLite.to(p1title2,1.8,{y:227.5,scale:1,delay:_t+.03,ease:Elastic.easeOut})

  TweenLite.to(p1qMark,1.8,{scale:1,delay:_t+.06,ease:Elastic.easeOut})
  TweenLite.to(p1circle,1.8,{scale:1,alpha:1,delay:_t,ease:Elastic.easeOut})

  

  for (var i = 0; i < p1cA.length; i++) {
    TweenLite.set(p1cA[i],{alpha:1,delay:_t+.1})
    TweenLite.to(p1cA[i],2,{scale:1,ease:Elastic.easeOut,delay:_t+.1+i*.07})
    
  };
  TweenLite.to(blackScreen,.5,{y:screenH,alpha:1,delay:_t+.1})

  TweenLite.to(p1copy,.9,{scale:1,delay:_t+1,ease:Back.easeOut})

}
//==========p1遮罩
var p1Mask=new createjs.Shape()
function addMask(){
  p1Mask.graphics.beginFill("#ff0000").drawCircle(0,0,screenH)//.drawRect(0,0,640,screenH);
  stage.addChildAt(p1Mask,0)
  p1Mask.x=320
  p1Mask.y=331
  stage_1.mask=p1Mask
}

//===============钥匙飞
var aKey=new createjs.Bitmap("img/p1keyb.png")
var keyA=[]
var ifkey=1
function setFlyKey(){
  var _n=30
  for (var i = 0; i < _n; i++) {
    var key=aKey.clone()
    keyA.push(key)
    stage_1.addChildAt(key,1)
    key.regX=35
    key.regY=75
    key.x=Math.random()*640
    key.y=screenH+Math.random()*150
    TweenLite.to(key,1+Math.random()*1.5,{y:screenH-500+Math.random()*200,scale:0,alpha:0,onComplete:resetkey,onCompleteParams:[key]})
  };



  //createjs.Ticker.addEventListener("tick",keyFly);
}

function resetkey(_tar){
  if(ifkey==1){
    _tar.x=Math.random()*640
    _tar.y=screenH+300
    _tar.scale=(Math.random()*Math.random()*.5+.75)*.75
    _tar.alpha=1
    _tar.rotation=0
    TweenLite.to(_tar,2+Math.random()*2,{delay:Math.random(),rotation:Math.random()*0-0,alpha:0,y:screenH-600+Math.random()*200,onComplete:resetkey,onCompleteParams:[_tar]})
  }
}

//================底部按钮
var btn_arrow=$("#btn_arrow")
var nowPage=1
function showBtn(_t){
  TweenLite.set(btn_arrow,{display:"block",opacity:0,delay:_t})
  TweenLite.to(btn_arrow,1,{opacity:1,delay:_t})
}

btn_arrow.click(function(){
  console.log(nowPage)
  nowPage++
  TweenLite.set(btn_arrow,{display:"none"})
  switch (nowPage){
    case 2:
      ani1end()
      break;
    case 3:
      ani3end()
      break;
    case 4:
      ani4end()
      break;
    case 5:
      ani5end()
      break;
  }
})

//=====第二页
var stage_2=new createjs.Container()
var p2title=new createjs.Bitmap("img/p2title.png")
var p2bg=new createjs.Bitmap("img/p2bg.jpg")

var p2q=new createjs.Container()
var p2q1=new createjs.Bitmap("img/p2q1.png")
var p2q2=new createjs.Bitmap("img/p2q2.png")
var p2q3=new createjs.Bitmap("img/p2q3.png")
var p2qA=[p2q1,p2q2,p2q3]


var p2btn1=new createjs.Container()
var p2btn2=new createjs.Container()
var p2btn3=new createjs.Container()

var p2btnA=[]//p2btnA=[p2btn1,p2btn2,p2btn3]

var p2btn_temp1=new createjs.Bitmap("img/p2btn.png")
var p2btn_temp2=new createjs.Bitmap("img/p2btn.png")
var p2btn_temp3=new createjs.Bitmap("img/p2btn.png")

var p2rightA=[]
var p2wrongA=[]

var p2a_1A=[]
var p2a_2A=[]
var p2a_3A=[]

var p2aA=[]//p2aA=[p2a_1A,p2a_2A,p2a_3A]

var btnA=$("#btnA")
var btnB=$("#btnB")
var btnC=$("#btnC")
var btnABC=[]

function setPage2(){
  stage.addChild(stage_2)
  stage.addChild(stage_1)
  //====背景
  stage_2.addChild(p2bg)
  p2bg.scaleY=screenH/1000
  //====标题
  stage_2.addChild(p2title)
  p2title.regX=320
  p2title.regY=280
  p2title.x=320
  p2title.y=280+40
  //====问题
  stage_2.addChild(p2q)
  p2q.regX=320
  p2q.regY=23
  p2q.x=320
  p2q.y=495+40
  p2q.addChild(p2q1)
  p2q.addChild(p2q2)
  p2q.addChild(p2q3)
  p2q1.alpha=1
  p2q2.alpha=0
  p2q3.alpha=0
  //===按钮
  stage_2.addChild(p2btn1)
  stage_2.addChild(p2btn2)
  stage_2.addChild(p2btn3)

  p2btn1.addChild(p2btn_temp1)
  p2btn2.addChild(p2btn_temp2)
  p2btn3.addChild(p2btn_temp3)

  p2btn1.x=p2btn2.x=p2btn3.x=320
  p2btn1.y=583+40
  p2btn2.y=583+40+100
  p2btn3.y=583+40+200
  p2btn1.regX=p2btn2.regX=p2btn3.regX=320
  p2btn1.regY=p2btn2.regY=p2btn3.regY=32

  p2btnA=[p2btn1,p2btn2,p2btn3]
  p2aA=[p2a_1A,p2a_2A,p2a_3A]
  btnABC=[btnA,btnB,btnC]

  for (var i = 1; i <= 3; i++) {
    //====按钮_对错
    var p2right=new createjs.Bitmap("img/p2right.png")
    p2rightA.push(p2right)
    p2btnA[i-1].addChild(p2right)
    p2right.regX=18.5
    p2right.regY=17
    p2right.x=125
    p2right.y=32+27
    p2right.scale=0

    var p2wrong=new createjs.Bitmap("img/p2wrong.png")
    p2wrongA.push(p2wrong)
    p2btnA[i-1].addChild(p2wrong)
    p2wrong.regX=18.5
    p2wrong.regY=17
    p2wrong.x=125
    p2wrong.y=32+27
    p2wrong.scale=0
    //====按钮_文案
    var p2a_a=new createjs.Bitmap("img/p2_"+i+"a.png")
    var p2a_b=new createjs.Bitmap("img/p2_"+i+"b.png")
    var p2a_c=new createjs.Bitmap("img/p2_"+i+"c.png")

    p2aA[i-1].push(p2a_a)
    p2aA[i-1].push(p2a_b)
    p2aA[i-1].push(p2a_c)//===========p2aA[ [1a,1b,1c] , [2a,2b,2c] , [3a,3b,3c] ]

    p2btnA[0].addChild(p2a_a)
    p2btnA[1].addChild(p2a_b)
    p2btnA[2].addChild(p2a_c)

    if(i!=1){
      p2a_a.alpha=p2a_b.alpha=p2a_c.alpha=0
    }  
    //====按钮_divBtn

    TweenLite.set(btnABC[i-1],{height:screenW/640*70,y:screenW/640*(615+(i-1)*100),display:"block",delay:1})
  };
}

//=================显示选择题页
var p2A=[p2q,p2btn1,p2btn2,p2btn3]
function showPage2(){
  
  TweenLite.from(p2title,.5,{y:"+=1000",delay:.2})
  for (var i = 0; i < p2A.length; i++) {
    TweenLite.from(p2A[i],2,{alpha:0,y:"+=100",ease:Elastic.easeOut,delay:.5+.05*i})
  };

}
//========选择题按钮
var userAnswer=0
var nowQ=0
var Answer=[[0,1,0],[0,1,0],[0,0,1]]
var ifAllright=1
btnA.click(function(){
  console.log("选A")
  userAnswer=0
  TweenLite.set(btnA,{display:"none"})
  goCheck()
})
btnB.click(function(){
  console.log("选B")
  userAnswer=1
  TweenLite.set(btnB,{display:"none"})
  goCheck()
})
btnC.click(function(){
  console.log("选C")
  userAnswer=2
  TweenLite.set(btnC,{display:"none"})
  if(nowQ<3){
    goCheck()
  }else{
    ani2end()//===问答结束
  }
  
})
//=======判断对错
function goCheck(){
  if(Answer[nowQ][userAnswer]==1){
    nowQ++
    console.log("答对了")
    TweenLite.set(btnA,{display:"none"})
    TweenLite.set(btnB,{display:"none"})
    TweenLite.set(btnC,{display:"none"})
    if(nowQ<3){
      TweenLite.set(btnA,{display:"block",delay:1})
      TweenLite.set(btnB,{display:"block",delay:1})
      TweenLite.set(btnC,{display:"block",delay:1})
    }
    
    TweenLite.to(p2rightA[userAnswer],1,{scale:1.5,ease:Elastic.easeOut})
    TweenLite.to(p2btnA[userAnswer],1,{scale:1.1,ease:Elastic.easeOut,onComplete:nextQ})
  }else{
    console.log("答错了")
    ifAllright=0
    
    TweenLite.to(p2wrongA[userAnswer],1.5,{scale:1,ease:Elastic.easeOut})
    TweenLite.from(p2btnA[userAnswer],1.5,{x:320+100,ease:Elastic.easeOut})

  }
}
//=====问题切换
function nextQ(){
  if(nowQ<3){
    for (var i = 0; i < p2A.length; i++) {
      TweenLite.set(p2A[i],{alpha:0,scale:1,x:320,y:"+=100",delay:0})
      TweenLite.to(p2A[i],2,{alpha:1,scale:1,x:320,y:"-=100",ease:Elastic.easeOut,delay:0+i*.05})
    };
    for (var j = 0; j < 3; j++) {
      TweenLite.set(p2wrongA[j],{scale:0})
      TweenLite.set(p2rightA[j],{scale:0})

      if(j==nowQ){
        p2qA[j].alpha=1
      }else{
        p2qA[j].alpha=0
      }

      for (var k = 0; k < 3; k++) {
        if(j==nowQ){
          p2aA[j][k].alpha=1
        }else{
          p2aA[j][k].alpha=0
        }
      };

    };
  }else{
    console.log("问题结束！")
    TweenLite.set(p2wrongA[2],{scale:0})
    TweenLite.set(p2rightA[2],{scale:0})
    for (var i = 0; i < p2A.length; i++) {
      TweenLite.to(p2A[i],.5,{alpha:0,scale:1,x:320,y:"+=100",delay:.2-i*.05})
    };
    setTimeout(endQ,700)
  }
}

var endQ_a=new createjs.Bitmap("img/p2_endbtn.png")
var p2q4=new createjs.Bitmap("img/p2q4.png")
var p2q4b=new createjs.Bitmap("img/p2q4b.png")
function endQ(){
  TweenLite.set(btnC,{display:"block",delay:1})
  
  TweenLite.set(p2btn3,{y:"-=100",scale:0.5})
  TweenLite.to(p2btn3,1.5,{alpha:1,scale:1,ease:Elastic.easeOut,delay:.2})
  p2aA[2][2].alpha=0

  p2btn3.addChild(endQ_a)
  TweenLite.set(p2q,{y:"-=100"})
  TweenLite.to(p2q,.5,{alpha:1})
  if(ifAllright==1){
    p2q.addChild(p2q4b)
  }else{
    p2q.addChild(p2q4)
  }
  
  p2q3.alpha=0
}

//=============第三页 设置
var stage_3=new createjs.Container()
var p3bg=new createjs.Bitmap("img/p3bg.jpg")
var p3mirrowMC=new createjs.Container()
var p3mirrow=new createjs.Bitmap("img/p3mirrow.png")
var p3t=new createjs.Bitmap("img/p3t.png")
var p3shandow=new createjs.Bitmap("img/p3mirrow_s.png")

function setPage3(){
  stage.addChild(blackScreen)
  stage.addChild(stage_3)

  blackScreen.alpha=1
  blackScreen.x=0
  blackScreen.y=0

  //====背景
  stage_3.addChild(p3bg)
  p3bg.scaleY=screenH/1000
  //====镜子
  stage_3.addChild(p3mirrowMC)
  p3mirrowMC.addChild(p3shandow)
  p3mirrowMC.addChild(p3mirrow)
  p3mirrowMC.addChild(p3t)

  p3mirrowMC.regX=257
  p3mirrowMC.regY=192
  p3mirrowMC.x=333
  p3mirrowMC.y=517

  p3shandow.x=-80
  p3shandow.y=-40
  
}
//======p3浮动文字
var p3tA=[]
var p3t1=new createjs.Bitmap("img/p3t1.png")
var p3t2=new createjs.Bitmap("img/p3t2.png")
var p3t3=new createjs.Bitmap("img/p3t3.png")
var p3t4=new createjs.Bitmap("img/p3t4.png")


var p3tMCA=[]
function setP3t(){
  p3tA=[p3t1,p3t2,p3t3,p3t4]
  for (var i = 0; i < p3tA.length; i++) {
    var p3tMC=new createjs.Container()
    stage_3.addChildAt(p3tMC,1)
    p3tMC.addChild(p3tA[i])

    p3tMCA.push(p3tMC)
    p3tMCA[i].regX=163.5
    p3tMCA[i].regY=40
    p3tMCA[i].x=333+50
    p3tMCA[i].y=517
    p3tMCA[i].scale=0
    p3tMCA[i].alpha=16
    TweenLite.to(p3tMCA[i],3,{alpha:0,scale:1,x:"-=60",y:"-=400",onComplete:p3tLoop,onCompleteParams:[p3tMCA[i]],delay:.75*i,ease:Linear.easeNone})
    TweenLite.to(p3tA[i],1,{x:"-=100",onComplete:p3tLoopX,onCompleteParams:[p3tA[i]],delay:1*i,ease:Sine.easeInOut})
  };
}
var ifp3t=1
function p3tLoop(_tar){
  if(ifp3t==1){
    TweenLite.set(_tar,{alpha:16,scale:0,x:"+=60",y:"+=400"})
    TweenLite.to(_tar,3,{alpha:0,scale:1,x:"-=60",y:"-=400",onComplete:p3tLoop,onCompleteParams:[_tar],ease:Linear.easeNone})
  }
  
}
function p3tLoopX(_tar){
  if(ifp3t==1){
    TweenLite.to(_tar,1,{x:"+=100",onComplete:p3tLoopX2,onCompleteParams:[_tar],ease:Sine.easeInOut})
  }
}
function p3tLoopX2(_tar){
  TweenLite.to(_tar,1,{x:"-=100",onComplete:p3tLoopX,onCompleteParams:[_tar],ease:Sine.easeInOut})
}
//==========p3遮罩
var p3Mask=new createjs.Shape()
function p3addMask(){
  p3Mask.graphics.beginFill("#ff0000").drawCircle(0,0,169)//.drawRect(0,0,640,screenH);
  stage.addChildAt(p3Mask,0)
  //p3Mask.regX=p3Mask.regY=169
  p3Mask.x=-333
  p3Mask.y=-517
  stage_3.mask=p3Mask
  p3maskAni()
}
function p3maskAni(){
  var _t=1
  p3mirrowMC.alpha=0
  TweenLite.set(p3Mask,{x:-169*1.5,y:450,scale:1.5,delay:.5})
  TweenLite.to(p3Mask,_t,{x:640+169*1.5,y:450,overwrite:0,delay:.5,ease:Linear.easeNone})
  TweenLite.set(p3Mask,{scale:1,x:640+169,y:screenH+169,overwrite:0,delay:.5+_t})

  TweenLite.to(p3mirrowMC,_t,{alpha:1,delay:.5+_t})
  
  TweenLite.to(p3Mask,_t,{x:333-180,y:517-130,overwrite:0,delay:.5+_t,ease:Sine.easeIn})
  TweenLite.to(p3Mask,_t/2,{x:333+20,y:517-30,overwrite:0,delay:.5+_t+_t,ease:Sine.easeOut})
  TweenLite.to(p3Mask,_t/2,{x:333,y:517,overwrite:0,delay:.5+_t+_t/2+_t})
  TweenLite.to(p3Mask,.8,{scale:5,overwrite:0,delay:.5+_t+_t/2+_t/2+_t+.5,onComplete:P3run})

  //====p3t
  //setP3t()
  setTimeout(setP3t,2000)
}
function P3run(){
  //====p3t
  //setP3t()
  //====p3镜子
  setP3mirrow()
}

//=========镜子
function setP3mirrow(){
  TweenLite.to(p3mirrowMC,2,{y:"+=30",ease:Sine.easeInOut,onComplete:p3mirrowLoop})

  p3mirrow.regX=257
  p3mirrow.regY=192
  p3mirrow.x=257
  p3mirrow.y=192

  
  p3shandow.regX=257
  p3shandow.regY=192
  p3shandow.x=257-80
  p3shandow.y=192-40

  TweenLite.to(p3mirrow,3,{rotation:"-=15",ease:Sine.easeInOut,onComplete:p3mirrowRLoop})//p3shandow
  TweenLite.to(p3shandow,3,{rotation:"-=15",ease:Sine.easeInOut})//
}

function p3mirrowLoop(){
  if(ifp3t==1){
    TweenLite.to(p3mirrowMC,3,{y:"-=60",ease:Sine.easeInOut,onComplete:p3mirrowLoop2})
  }
  
}
function p3mirrowLoop2(){
  TweenLite.to(p3mirrowMC,3,{y:"+=60",ease:Sine.easeInOut,onComplete:p3mirrowLoop})
}

function p3mirrowRLoop(){
  if(ifp3t==1){
    TweenLite.to(p3mirrow,3,{rotation:"+=15",ease:Sine.easeInOut,onComplete:p3mirrowRLoop2})
    TweenLite.to(p3shandow,3,{rotation:"+=15",ease:Sine.easeInOut})
  }
  
}
function p3mirrowRLoop2(){
  TweenLite.to(p3mirrow,3,{rotation:"-=15",ease:Sine.easeInOut,onComplete:p3mirrowRLoop})
  TweenLite.to(p3shandow,3,{rotation:"-=15",ease:Sine.easeInOut})
} 

//==========第四页
var stage_4=new createjs.Container()
var p4t1=new createjs.Bitmap("img/p4t1.png")
var p4t2=new createjs.Bitmap("img/p4t2.png")
var p4t3=new createjs.Bitmap("img/p4t3.png")
var p4t4=new createjs.Bitmap("img/p4t4.png")
var p4tA=[]

var nowP4=0

var p4arrowL=new createjs.Bitmap("img/p4arrow.png")
var p4arrowR=new createjs.Bitmap("img/p4arrow.png")
var p4bg=new createjs.Bitmap("img/p4bg.png")
var p4mcA=[]
var p4maskA=[]
var p4bgA=[]
var p4border=new createjs.Bitmap("img/p4border.png")

var p4anibg=new createjs.Bitmap("img/p4anibg.jpg")
function setPage4(){
  stage.addChild(stage_4)
  //====背景
  stage_4.addChild(p4bg)
  //p4bg.scaleY=screenH/1000
  stage_4.addChild(p4anibg)

  p4tA=[p4t1,p4t2,p4t3,p4t4]
  for (var i = 0; i < p4tA.length; i++) {
    stage_4.addChild(p4tA[i])
    p4tA[i].y=screenH-297
    if(i!=nowP4){
      p4tA[i].alpha=0
    }

    

    var p4mc=new createjs.Container()
    p4mcA.push(p4mc)
    p4mc.regX=p4mc.regY=160
    stage_4.addChild(p4mc)

    var p4Mask=new createjs.Shape()
    p4Mask.graphics.beginFill("#ff0000").drawRect(0,0,320,320);
    stage_4.addChildAt(p4Mask,0)
    p4Mask.regX=p4Mask.regY=160
    p4maskA.push(p4Mask)
    p4mc.mask=p4Mask

    var p4bg_s=new createjs.Shape()
    p4mc.addChild(p4bg_s)
    p4bgA.push(p4bg_s)
  };
  
  TweenLite.set(p4mcA[0],{x:160,y:160})
  TweenLite.set(p4mcA[1],{x:160+320,y:160})
  TweenLite.set(p4mcA[2],{x:160,y:160+320})
  TweenLite.set(p4mcA[3],{x:160+320,y:160+320})
  TweenLite.set(p4maskA[0],{x:160,y:160})
  TweenLite.set(p4maskA[1],{x:160+320,y:160})
  TweenLite.set(p4maskA[2],{x:160,y:160+320})
  TweenLite.set(p4maskA[3],{x:160+320,y:160+320})
  p4bgA[0].graphics.beginFill("#3cd3b6").drawRect(0,0,320,320);
  p4bgA[1].graphics.beginFill("#ffb4b3").drawRect(0,0,320,320);
  p4bgA[2].graphics.beginFill("#f9dd9f").drawRect(0,0,320,320);
  p4bgA[3].graphics.beginFill("#ff6565").drawRect(0,0,320,320);

  stage_4.addChild(p4border)

  stage_4.addChild(p4arrowL)
  stage_4.addChild(p4arrowR)
  p4arrowR.scaleX=-1
  p4arrowL.y=p4arrowR.y=(screenH-640)/2+640
  p4arrowL.x=0
  p4arrowR.x=640
  
  p4change()
  p4setAni1() 
  p4setAni2()
  p4setAni3()
  p4setAni4()
}

$("#p4L").click(function(){
  nowP4--
  if(nowP4==-1){    nowP4=3  }
  p4change()
})
$("#p4R").click(function(){
  nowP4++
  if(nowP4==4){    nowP4=0  }
  p4change()
})

function p4change(){
  console.log(nowP4)
  for (var i = 0; i < 4; i++) {
    if(i!=nowP4){
      p4tA[i].alpha=0
      p4mcA[i].alpha=0
    }else{
      p4tA[i].alpha=1
      p4mcA[i].alpha=1
    }
    
  };
}


//====p4 第一个动画
var p4ani1hand=new createjs.Bitmap("img/p4ani1a.png")
function p4setAni1(){
  p4mcA[0].addChild(p4ani1hand)
  TweenLite.set(p4ani1hand,{regX:107,regY:352,x:107,y:352})
  TweenLite.to(p4ani1hand,1,{rotation:15,onComplete:p4ani1loop,ease:Linear.easeNone})
  setFlyAge()
}
function p4ani1loop(){
  TweenLite.to(p4ani1hand,1,{rotation:0,onComplete:p4ani1loop2,ease:Linear.easeNone})
}
function p4ani1loop2(){
  TweenLite.to(p4ani1hand,1,{rotation:15,onComplete:p4ani1loop,ease:Linear.easeNone})
}
//===============00s飞
var aAge=new createjs.Bitmap("img/p495s.png")
//var aAgeb=new createjs.Bitmap("img/p400s.png")
var ageA=[]
function setFlyAge(){
  var _n=30
  for (var i = 0; i < _n; i++) {
    if(i>_n/2){
      var age=aAge.clone()
    }else{
      var age=aAge.clone()
    }
    
    ageA.push(age)
    p4mcA[0].addChildAt(age,1)
    age.regX=28
    age.regY=19.5
    age.x=Math.random()*320
    age.y=320+Math.random()*50
    TweenLite.to(age,1+Math.random()*1.5,{y:160+Math.random()*100-50,scale:0,alpha:0,onComplete:resetAge,onCompleteParams:[age]})
  };
}

function resetAge(_tar){
  if(1==1){
    _tar.x=Math.random()*320
    _tar.y=320+Math.random()*50
    _tar.scale=(Math.random()*Math.random()*.5+.75)*1.5
    _tar.alpha=1
    _tar.rotation=0
    TweenLite.to(_tar,1+Math.random()*1.5,{y:160+Math.random()*100-100,scale:0,alpha:0,onComplete:resetAge,onCompleteParams:[_tar]})
  }
}
//====p4第二个动画
var p4ani2girl=new createjs.Bitmap("img/p4ani2girl.png")
var p4ani2hand=new createjs.Bitmap("img/p4ani2hand.png")
var p4ani2flash=new createjs.Bitmap("img/p4ani2flash.png")
var p4ani2flash2=new createjs.Bitmap("img/p4ani2flash2.png")
function p4setAni2(){
  p4mcA[1].addChild(p4ani2girl)
  p4mcA[1].addChild(p4ani2flash2)
  p4mcA[1].addChild(p4ani2hand)
  p4mcA[1].addChild(p4ani2flash)

  p4ani2hand.y=50

  p4setAni2Start()
}
function p4setAni2Start(){
  p4ani2hand.alpha=0
  p4ani2flash.alpha=0
  p4ani2flash2.alpha=0
  TweenLite.from(p4ani2flash,.75,{alpha:1,delay:0})
  TweenLite.from(p4ani2flash2,1.25,{alpha:1.5,delay:0})
  TweenLite.to(p4ani2hand,1,{y:0,alpha:1,delay:1.25,onComplete:p4setAni2End,ease:Back.easeOut})
}
function p4setAni2End(){
  //TweenLite.to(p4ani2hand,.5,{y:50,alpha:-1,delay:.75,onComplete:p4setAni2Start})
  TweenLite.set(p4ani2hand,{y:50,alpha:0,delay:.75,onComplete:p4setAni2Start})
}
//====p4第三个动画
var p4ani3hand=new createjs.Bitmap("img/p4ani3hand.png")
var p4ani3phone=new createjs.Bitmap("img/p4ani3phone.png")
var p4ani3papper=new createjs.Bitmap("img/p4ani3papper.png")
var p4ani3Mask=new createjs.Shape()
function p4setAni3(){
  console.log("ddddd")
  p4ani3Mask.graphics.beginFill("#ff0000").drawRect(0,0,45,85);
  p4mcA[2].addChildAt(p4ani3Mask,0)
  p4ani3Mask.x=162
  p4ani3Mask.y=33

  p4ani3papper.mask=p4ani3Mask
  p4mcA[2].addChild(p4ani3hand)
  p4mcA[2].addChild(p4ani3phone)
  p4mcA[2].addChild(p4ani3papper)
  p4ani3papper.x=162
  p4ani3papper.y=33



  TweenLite.to(p4ani3hand,1,{x:"-=27",onComplete:p4ani3loop})
}


function p4ani3loop(){
  TweenLite.to(p4ani3hand,1,{x:"+=27",onComplete:p4ani3loop2})
  TweenLite.set(p4ani3papper,{y:33})
  TweenLite.to(p4ani3papper,1,{y:33-85})
}
function p4ani3loop2(){
  TweenLite.to(p4ani3hand,1,{x:"-=27",onComplete:p4ani3loop})
  //TweenLite.set(p4ani3papper,{y:33})
}

//====p4第四个动画
var p4ani4bg=new createjs.Bitmap("img/p4ani4bg.png")
var p4ani4screen=new createjs.Bitmap("img/p4ani4screen.png")
var p4ani4finger=new createjs.Bitmap("img/p4ani4finger.png")
var p4ani4hand=new createjs.Bitmap("img/p4ani4hand.png")
var p4ani4heart1=new createjs.Bitmap("img/p4ani4heart1.png")
var p4ani4heart2=new createjs.Bitmap("img/p4ani4heart2.png")
var p4ani4heart3=new createjs.Bitmap("img/p4ani4heart3.png")
var p4ani4Mask=new createjs.Shape()
function p4setAni4(){
  p4ani4Mask.graphics.beginFill("#ff0000").drawRect(0,0,61,108);
  p4mcA[3].addChildAt(p4ani4Mask,0)
  p4ani4Mask.x=60
  p4ani4Mask.y=59

  p4ani4screen.mask=p4ani4Mask
  p4mcA[3].addChild(p4ani4bg)
  p4mcA[3].addChild(p4ani4screen)
  p4mcA[3].addChild(p4ani4finger)
  p4mcA[3].addChild(p4ani4heart1)
  p4mcA[3].addChild(p4ani4heart2)
  p4mcA[3].addChild(p4ani4heart3)
  p4mcA[3].addChild(p4ani4hand)
  p4ani4screen.x=60
  p4ani4screen.y=59

  p4ani4start()

  p4ani4heart1.alpha=0
  p4ani4heart2.alpha=0
  p4ani4heart3.alpha=0

  TweenLite.to(p4ani4heart1,1.2,{alpha:1,delay:0,onComplete:ani4heartLoop,onCompleteParams:[p4ani4heart1]})
  TweenLite.to(p4ani4heart2,1.2,{alpha:1,delay:0.4,onComplete:ani4heartLoop,onCompleteParams:[p4ani4heart2]})
  TweenLite.to(p4ani4heart3,1.2,{alpha:1,delay:0.8,onComplete:ani4heartLoop,onCompleteParams:[p4ani4heart3]})
}
function ani4heartLoop(_tar){
  TweenLite.to(_tar,1.2,{alpha:0,delay:0,onComplete:ani4heartLoop2,onCompleteParams:[_tar]})
}
function ani4heartLoop2(_tar){
  TweenLite.to(_tar,1.2,{alpha:1,delay:0,onComplete:ani4heartLoop,onCompleteParams:[_tar]})
}
function p4ani4start(){
  TweenLite.set(p4ani4hand,{scale:1})
  TweenLite.to(p4ani4hand,1,{y:-50+20,onComplete:p4ani4end,ease:Linear.easeNone})
  TweenLite.set(p4ani4screen,{y:59})
  TweenLite.to(p4ani4screen,2,{y:59-108})


}
function p4ani4end(){
  TweenLite.set(p4ani4hand,{scale:1.02})
  TweenLite.to(p4ani4hand,1,{scale:1,y:0+20,onComplete:p4ani4start})
}


//=========第五页
var p5bg=new createjs.Bitmap("img/p5bg.jpg")
var p5light1=new createjs.Bitmap("img/p5light1.png")
var p5light2=new createjs.Bitmap("img/p5light2.png")

function setPage5(){
  stage_5.addChild(p5bg)
  stage_5.addChild(p5light1)
  stage_5.addChild(p5light2)
  p5lightLoop()
  setFlyQm()
  p5q1ani()
}
var p5bubble1=new createjs.Bitmap("img/p5bubble1.png")
var p5bubble2=new createjs.Bitmap("img/p5bubble2.png")
var p5bubble3=new createjs.Bitmap("img/p5bubble3.png")

var p5q1=new createjs.Bitmap("img/p5q1.png")
var p5q2=new createjs.Bitmap("img/p5q2.png")
var p5q3=new createjs.Bitmap("img/p5q3.png")
function p5q1ani(){
  stage_5.addChild(p5bubble1)
  stage_5.addChild(p5bubble2)
  stage_5.addChild(p5bubble3)
  TweenLite.set(p5bubble1,{y:screenH,x:640,regX:640,regY:341,alpha:1,scale:0})
  TweenLite.set(p5bubble2,{y:screenH,x:640,regX:640,regY:341,alpha:0})
  TweenLite.set(p5bubble3,{y:screenH,x:640,regX:640,regY:341,alpha:0})

  stage_5.addChild(p5q1)
  stage_5.addChild(p5q2)
  stage_5.addChild(p5q3)
  TweenLite.set(p5q1,{y:screenH-131,x:320,regX:320,regY:30,scale:1})
  TweenLite.set(p5q2,{y:screenH-131,x:320,regX:320,regY:30,scale:0})
  TweenLite.set(p5q3,{y:screenH-131,x:320,regX:320,regY:30,scale:0})

  TweenLite.to(p5bubble1,1,{scale:1,ease:Sine.easeOut,delay:.05})
  TweenLite.to(p5q1,1,{scale:1,ease:Back.easeOut,delay:.5,onComplete:p5q2ani})
}
function p5q2ani(){
  TweenLite.set(p5bubble1,{alpha:0,delay:.05})
  TweenLite.set(p5bubble2,{alpha:1,delay:.05})
  TweenLite.to(p5q1,.5,{y:"-=76",ease:Back.easeOut,delay:.05})
  TweenLite.to(p5q2,1,{scale:1,ease:Back.easeOut,delay:.05,onComplete:p5q3ani})
}
function p5q3ani(){
  TweenLite.set(p5bubble2,{alpha:0,delay:.05})
  TweenLite.set(p5bubble3,{alpha:1,delay:.05})
  TweenLite.to(p5q1,.5,{y:"-=76",ease:Back.easeOut,delay:.05})
  TweenLite.to(p5q2,.5,{y:"-=76",ease:Back.easeOut,delay:.05})
  TweenLite.to(p5q3,1,{scale:1,ease:Back.easeOut,delay:.05})
  showBtn(0)
}

//=====灯亮
function p5lightLoop(){
  TweenLite.set(p5light1,{alpha:-1})
  TweenLite.set(p5light2,{alpha:1})
  TweenLite.to(p5light1,1,{alpha:1,onComplete:p5lightLoop2})
  TweenLite.to(p5light2,1,{alpha:-1,ease:Sine.easeIn})
}
function p5lightLoop2(){
  TweenLite.set(p5light1,{alpha:1})
  TweenLite.set(p5light2,{alpha:-1})
  TweenLite.to(p5light1,1,{alpha:-1,onComplete:p5lightLoop,ease:Sine.easeIn})
  TweenLite.to(p5light2,1,{alpha:1})
}

//===============问号飞
var aQm=new createjs.Bitmap("img/p5qm.png")
var QmA=[]

function setFlyQm(){
  var _n=30
  for (var i = 0; i < _n; i++) {
    var Qm=aQm.clone()
    QmA.push(Qm)
    stage_5.addChildAt(Qm,1)
    Qm.regX=35
    Qm.regY=75
    Qm.x=Math.random()*640
    Qm.y=screenH+Math.random()*150
    TweenLite.to(Qm,1+Math.random()*1.5,{y:screenH-500+Math.random()*200,scale:0,alpha:0,onComplete:resetQm,onCompleteParams:[Qm]})
  };
}

function resetQm(_tar){
  if(1==1){
    _tar.x=Math.random()*640
    _tar.y=screenH+300
    _tar.scale=(Math.random()*Math.random()*.5+.75)*.75
    _tar.alpha=1
    _tar.rotation=0
    TweenLite.to(_tar,2+Math.random()*2,{delay:Math.random(),rotation:Math.random()*0-0,alpha:0,y:screenH-600+Math.random()*200,onComplete:resetQm,onCompleteParams:[_tar]})
  }
}
///============第六页 锦囊
var p6bg=new createjs.Bitmap("img/p6bg.jpg")
var p6bag=new createjs.Bitmap("img/p6bag.png")
var p6t=new createjs.Bitmap("img/p6t.png")


var p6Mask=new createjs.Shape()



function setPage6(){
  p6Mask.graphics.beginFill("#ff0000").drawCircle(0,0,160)//.drawRect(0,0,640,screenH);
  stage.addChildAt(p6Mask,0)
  p6Mask.x=320
  p6Mask.y=500
  stage_6.mask=p6Mask



  stage_6.addChild(p6bg)
  stage_6.addChild(p6bag)
  stage_6.addChild(p6t)
  p6bg.scaleY=screenH/1000

  TweenLite.set(p6bag,{x:320,y:screenH/2,regX:125.5,regY:151.5})
  TweenLite.set(p6t,{x:320,y:screenH/2+173,regX:320,regY:76})

  p6bag.scale=0

}

function ani6(){
  p6Mask.scale=0
  TweenLite.to(p6Mask,1,{scale:1.1,ease:Back.easeOut,onComplete:showP6})

  TweenLite.to(p6bag,1,{scale:1,ease:Elastic.easeOut,delay:.5})

  TweenLite.from(p6t,1,{y:"+=50",alpha:0,delay:2,onComplete:bagEffect})
  TweenLite.set($("#btnBag"),{display:"block"})
}
function showP6(){
  TweenLite.to(p6Mask,.5,{scale:6,ease:Back.easeIn,delay:.02})
}
function bagEffect(){
  stage.removeChild(stage_5)
  TweenLite.to(p6bag,1,{y:"-=20",ease:Sine.easeInOut,onComplete:p6bagLoop})
}
function p6bagLoop(){
  TweenLite.to(p6bag,2,{y:"+=40",ease:Sine.easeInOut,onComplete:p6bagLoop2})
}
function p6bagLoop2(){
  TweenLite.to(p6bag,2,{y:"-=40",ease:Sine.easeInOut,onComplete:p6bagLoop})
}

$("#btnBag").click(function(){
  TweenLite.set($("#btnBag"),{display:"none"})
  ani6end()
})
//=======最后按钮
var case1btn1=$("#case1btn1")
var case1btn2=$("#case1btn2")

var case2btn1=$("#case2btn1")
var case2btn2=$("#case2btn2")
var case2btn3=$("#case2btn3")

var case3btn1=$("#case3btn1")
var case3btn2=$("#case3btn2")

var case4btn1=$("#case4btn1")

var casebtnDivA=[[],[case1btn1,case1btn2],[],[case2btn1,case2btn2,case2btn3],[],[case3btn1,case3btn2],[],[case4btn1],[]]

function setCaseBtn(){
  casebtnDivA=[[],[case1btn1,case1btn2],[],[case2btn1,case2btn2,case2btn3],[],[case3btn1,case3btn2],[],[case4btn1],[]]
  // TweenLite.set(case1btn1,{height:35*screenW/640,width:103*screenW/640,left:360*screenW/640,top:765*screenW/640})
  // TweenLite.set(case1btn2,{height:35*screenW/640,width:106*screenW/640,left:484*screenW/640,top:765*screenW/640})

  // TweenLite.set(case2btn1,{height:35*screenW/640,width:149*screenW/640,left:212*screenW/640,top:770*screenW/640})
  // TweenLite.set(case2btn2,{height:35*screenW/640,width:92*screenW/640,left:382*screenW/640,top:770*screenW/640})
  // TweenLite.set(case2btn3,{height:35*screenW/640,width:95*screenW/640,left:495*screenW/640,top:770*screenW/640})

  // TweenLite.set(case3btn1,{height:35*screenW/640,width:150*screenW/640,left:318*screenW/640,top:802*screenW/640})
  // TweenLite.set(case3btn2,{height:35*screenW/640,width:100*screenW/640,left:490*screenW/640,top:802*screenW/640})

  // TweenLite.set(case4btn1,{height:35*screenW/640,width:105*screenW/640,left:486*screenW/640,top:745*screenW/640})

  TweenLite.set(case1btn1,{height:71*screenW/640,width:640*screenW/640,left:0*screenW/640,top:406*screenW/640})
  TweenLite.set(case1btn2,{height:71*screenW/640,width:640*screenW/640,left:0*screenW/640,top:506*screenW/640})

  TweenLite.set(case2btn1,{height:71*screenW/640,width:640*screenW/640,left:0*screenW/640,top:406*screenW/640})
  TweenLite.set(case2btn2,{height:71*screenW/640,width:640*screenW/640,left:0*screenW/640,top:506*screenW/640})
  TweenLite.set(case2btn3,{height:71*screenW/640,width:640*screenW/640,left:0*screenW/640,top:606*screenW/640})

  TweenLite.set(case3btn1,{height:71*screenW/640,width:640*screenW/640,left:0*screenW/640,top:406*screenW/640})
  TweenLite.set(case3btn2,{height:71*screenW/640,width:640*screenW/640,left:0*screenW/640,top:506*screenW/640})

  TweenLite.set(case4btn1,{height:71*screenW/640,width:640*screenW/640,left:0*screenW/640,top:406*screenW/640})
}

case1btn1.click(function(){
  showCaseFuc($("#case1_1"))
})
case1btn2.click(function(){
  showCaseFuc($("#case1_2"))
})

case2btn1.click(function(){
  showCaseFuc($("#case2_1"))
})
case2btn2.click(function(){
  showCaseFuc($("#case2_2"))
})
case2btn3.click(function(){
  showCaseFuc($("#case2_3"))
})

case3btn1.click(function(){
  showCaseFuc($("#case3_1"))
})
case3btn2.click(function(){
  showCaseFuc($("#case3_2"))
})

case4btn1.click(function(){
  showCaseFuc($("#case4_1"))
})

function showCaseFuc(_tar){
  TweenLite.set(_tar,{display:"block",opacity:0})
  TweenLite.to(_tar,.5,{opacity:1})
  $(".closeBtn").css({display:"block"})
  $('body')[0].removeEventListener('touchmove', function (event) {event.preventDefault();}, false);//阻止了浏览器默认的下拉事件
}

$(".closeBtn").click(function(){
  $(".casePage").css({display:"none"})
  $(".closeBtn").css({display:"none"})
  $('body')[0].addEventListener('touchmove', function (event) {event.preventDefault();}, false);//阻止了浏览器默认的下拉事件
})

//=====================翻页＝＝＝＝＝＝＝＝＝＝＝ 

var nowCase = 0;
var startY = 0;
var startScrollTop;
var pageUpDown =0
var sliderA=[]
var ifnowEnd=0

function setSlide(){
  sliderA=[case1,case1b,case2,case2b,case3,case3b,case4,case4b,caseEnd]
  // $('.content')[0].addEventListener('touchstart',startTouch,false)
  // $('.content')[0].addEventListener('touchmove',moveTouch,false)
  // $('.content')[0].addEventListener('touchend',endTouch,false)
  $('#mainCanvas')[0].addEventListener('touchstart',startTouch,false)
  $('#mainCanvas')[0].addEventListener('touchmove',moveTouch,false)
  $('#mainCanvas')[0].addEventListener('touchend',endTouch,false)
  
}

  
function startTouch(event){
      startY=event.touches[0].clientY
      pageUpDown=0
    }
    function moveTouch(event){
      var nowY=event.touches[0].clientY
      event.preventDefault();
      if (nowY-startY>80&&nowCase!=0) {
        pageUpDown=1
      }else if (nowY-startY< -80&&nowCase!=8) {
        pageUpDown=-1
      }else{
        pageUpDown=0
      };  
    }
    function endTouch(event){
      if (pageUpDown == 1) {
        //alert("上一页")
        if(ifnowEnd==1){
          nowCase--
          goPage()
        }else{

        }
        
      }else if (pageUpDown == -1) {
        //alert("下一页")
        if(ifnowEnd==1){
          nowCase++
          goPage()
        }else if(btn_arrow.css("display")=="block"){
          nowPage++
        TweenLite.set(btn_arrow,{display:"none"})
          switch (nowPage){
            case 2:
              ani1end()
              break;
            case 3:
              ani3end()
              break;
            case 4:
              ani4end()
              break;
            case 5:
              ani5end()
              break;
          }
        }
      }else if (pageUpDown==0) {
        //alert("不翻页")
      };  
    } 
    function goPage(){
       for (var i = 0; i < sliderA.length; i++) {
        if (i<nowCase) {
          TweenLite.to(sliderA[i],.5,{y:-screenH})//,ease:Back.easeOut
        };
        if (i==nowCase) {
          TweenLite.to(sliderA[i],.5,{y:0})
          if(i==8){TweenLite.set($("#end_arrow"),{display:"none"})}else{TweenLite.set($("#end_arrow"),{display:"block"})}
          


        };
        if (i>nowCase) {
          TweenLite.to(sliderA[i],.5,{y:screenH})
        };
        for (var j = 0; j < casebtnDivA[i].length; j++) {
          if (i==nowCase){
            TweenLite.set(casebtnDivA[i][j],{display:"block"})
          }else{
            TweenLite.set(casebtnDivA[i][j],{display:"none"})
          } 
        };
       // console.log(casebtnDivA[2].length)




       }


       
    }

//=====================翻页＝＝＝＝＝＝＝＝＝＝＝