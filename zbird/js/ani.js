var logo=$("#logo")

function ani1 () {
  TweenLite.to(logo,.5,{opacity:0})
  p1title.y=221/1000*stageH
  p1title.x=320


  TweenLite.set(p1Lhand,{x:320,y:550/1000*stageH,regX:320,regY:287.5})
  TweenLite.set(p1Rhand,{x:320,y:550/1000*stageH,regX:320,regY:287.5,scaleX:-1})
  TweenLite.set(p1box,{x:320,y:573/1000*stageH,regX:320,regY:190,alpha:3})

  p1logo.y=stageH-163
  TweenLite.set(p1logo,{x:320,y:stageH-116/1000*stageH,regX:320,regY:47})

  
  var handT=1
  TweenLite.from(p1Lhand,2.5,{x:320-30,y:(550-150)/1000*stageH,alpha:0,ease:Back.easeOut,delay:handT+0.0})
  TweenLite.from(p1Rhand,2.5,{x:320+30,y:(550-150)/1000*stageH,alpha:0,ease:Back.easeOut,delay:handT+0.05})
  TweenLite.from(p1box,2.5,{scale:.9,x:320,y:(573-150)/1000*stageH,alpha:0,ease:Back.easeOut,delay:handT+0})


  for (var i = 0; i < 8 ; i++) {
    TweenLite.from(p1titleA[i],1.5,{scale:1.2,x:p1titleA[i].x+Math.random()*0-0,y:p1titleA[i].y+Math.random()*160-80,alpha:0,ease:Back.easeOut,delay:0.1*i})
  };
  TweenLite.from(p1title_e,1.5,{alpha:0,y:"+=20",delay:2.5})
  TweenLite.from(p1title_line,1.5,{alpha:0,y:"+=20",delay:2})

  TweenLite.to(arrowDown,.5,{alpha:1})
  TweenLite.set(step1Lbtn,{display:"none"})
  TweenLite.set(step1Rbtn,{display:"none"})
  TweenLite.set(step1Nextbtn,{display:"none"})
  TweenLite.set(step1Backbtn,{display:"none"})
  
}

function ani2(){
  resetPage2()
  TweenLite.to(logo,.5,{opacity:1})

  TweenLite.to(p2hand,1,{scale:1,x:320,y:(460+0)/1000*stageH,delay:.3})
  TweenLite.to(p2title,1,{alpha:1,regX:320,regY:56,scale:1,x:320,y:(215+0)/1000*stageH,delay:.1})
  p2tLoop()
  TweenLite.to(arrowDown,.5,{alpha:1})
  TweenLite.set(step1Lbtn,{display:"none"})
  TweenLite.set(step1Rbtn,{display:"none"})
  TweenLite.set(step1Nextbtn,{display:"none"})
  TweenLite.set(step1Backbtn,{display:"none"})
}

var ifFirstSetpage3=1
var step1Lbtn=$("#step1Lbtn")
var step1Rbtn=$("#step1Rbtn")
var step1Nextbtn=$("#step1Nextbtn")
var step1Backbtn=$("#step1Backbtn")

function ani3(){
  console.log("ani3")
  TweenLite.to(arrowDown,.5,{alpha:0})
  if(ifFirstSetpage3==1){
    setPage3()
    ifFirstSetpage3=0
  }
  TweenLite.set(step1Lbtn,{display:"block"})
  TweenLite.set(step1Rbtn,{display:"block"})
  TweenLite.set(step1Nextbtn,{display:"block"})
  TweenLite.set(step1Backbtn,{display:"none"})

  goStep1()
}



step1Lbtn.click(function(){
  if(nowStep==1){    step1L()  }
  if(nowStep==2){    step2L()  }
  if(nowStep==3){    step3L()  }
})

step1Rbtn.click(function(){
  if(nowStep==1){    step1R()  }
  if(nowStep==2){    step2R()  }
  if(nowStep==3){    step3R()  }
})
//================step1 左右按钮
var rlX//=150
function step1L(){
  nowDiamond--
  if(nowDiamond==-1){
    nowDiamond=3
  }
  rlX=150
  setDiamond()
}
function step1R(){
  nowDiamond++
  if(nowDiamond==4){
    nowDiamond=0
  }
  rlX=-150
  setDiamond()
}
//================step2 左右按钮
function step2L(){
  nowRing--
  if(nowRing==-1){
    nowRing=ringNum[nowDiamond]-1
  }
  rlX=150
  setRing()
}
function step2R(){
  nowRing++
  if(nowRing==ringNum[nowDiamond]){
    nowRing=0
  }
  rlX=-150
  setRing()
}
//================step3 左右按钮
function step3L(){
  nowWord--
  if(nowWord==-1){
    nowWord=7
  }
  rlX=150
  setWord()
}
function step3R(){
  nowWord++
  if(nowWord==8){
    nowWord=0
  }
  rlX=-150
  setWord()
}

//=============step1 下一步按钮
var ifcanupdown=1
step1Nextbtn.click(function(){
  //step1.visible=false
  //step2.visible=true
  ifcanupdown=0
  nowStep++
  setStep()
})
step1Backbtn.click(function(){
  //step1.visible=false
  //step2.visible=true
  ifcanupdown=0
  nowStep--
  setStep()
})
//===============step123左右滑
var nowStep=1
function slideL(){
  if(nowStep==1){    step1L()  }
  if(nowStep==2){    step2L()  }
}

function slideR(){
  if(nowStep==1){    step1R()  }
  if(nowStep==2){    step2R()  }
}

function setDiamond(){
  for (var i = 0; i < 4; i++) {
    if(i==nowDiamond){
      TweenLite.set(step1iconA[i],{alpha:1})
      TweenLite.set(diamondA[i],{x:320+rlX,y:527/1000*stageH,alpha:0})
      TweenLite.to(diamondA[i],.75,{x:320,y:527/1000*stageH,alpha:1,ease:Back.easeOut})
    }else{
      TweenLite.set(step1iconA[i],{alpha:0})
      TweenLite.set(diamondA[i],{alpha:0})
    }
  };
}


//============setStep

function setStep(){
  step1.visible=false
  step2.visible=false
  step3.visible=false
  step4.visible=false
  switch(nowStep){
    case 1:
      console.log("111")
      step1.visible=true
      step1.alpha=0
      TweenLite.to(step1,1,{alpha:1})
      goStep1()
    break;
    case 2:
      console.log("222")
      step2.visible=true
      step2.alpha=0
      TweenLite.to(step2,1,{alpha:1})
      goStep2()
    break;
    case 3:
      console.log("333")
      step3.visible=true
      step3.alpha=0
      TweenLite.to(step3,1,{alpha:1})
      goStep3()
    break;
    case 4:
      console.log("444")
      step4.visible=true
      step4.alpha=0
      TweenLite.to(step4,1,{alpha:1})
      goStep4()
    break;
  }
}

function goStep1(){
  TweenLite.set(step1Nextbtn,{left:"35%",display:"block"})
  TweenLite.set(step1Backbtn,{display:"none"})
  theRing.visible=false
  TweenLite.set(step1Lbtn,{width:"20%",height:"40%",top:"30%",display:"block"})
  TweenLite.set(step1Rbtn,{width:"20%",height:"40%",top:"30%",display:"block"})
}
function goStep2(){
  TweenLite.set(step1Nextbtn,{left:"50%",display:"block"})
  TweenLite.set(step1Backbtn,{display:"block"})
  theRing.visible=true
  rlX=0
  if(nowRing>=ringNum[nowDiamond]){
    nowRing=0
  }
  setRing()
  TweenLite.set(step1Lbtn,{width:"20%",height:"40%",top:"30%",display:"block"})
  TweenLite.set(step1Rbtn,{width:"20%",height:"40%",top:"30%",display:"block"})
  TweenLite.to(theRing,.5,{y:(530)/1000*stageH})
}
function goStep3(){
  TweenLite.set(step1Nextbtn,{left:"50%",display:"block"})
  TweenLite.set(step1Backbtn,{display:"block"})
  theRing.visible=true

  TweenLite.set(step1Lbtn,{width:"50%",height:"60%",top:"20%",display:"block"})
  TweenLite.set(step1Rbtn,{width:"50%",height:"60%",top:"20%",display:"block"})
  TweenLite.to(theRing,.5,{y:(530)/1000*stageH})
  nowBG=parseInt(Math.random()*4)
  setBG()
  
}
function setBG(){
    for (var j = 1; j <= 4; j++) {

    
    if((j-1)==nowBG){
      console.log(nowBG)
      TweenLite.set(bgA[j-1],{alpha:.5})
    }else{
      TweenLite.set(bgA[j-1],{alpha:0})
    }
  };
}
function setBG2(){
  for (var j = 1; j <= 4; j++) {

    
    if((j-1)==nowBG){
      console.log(nowBG)
      TweenLite.set(endbgA[j-1],{alpha:1})
    }else{
      TweenLite.set(endbgA[j-1],{alpha:0})
    }
  };
}
function goStep4(){
  TweenLite.set(step1Nextbtn,{display:"none"})
  TweenLite.set(step1Backbtn,{display:"none"})
  TweenLite.set(step1Lbtn,{display:"none"})
  TweenLite.set(step1Rbtn,{display:"none"})
  TweenLite.to(theRing,.5,{y:(530+145)/1000*stageH})
  TweenLite.set(step4bar,{alpha:1,delay:0.45})
  TweenLite.set(endBtn,{display:"block"})
  TweenLite.set(step4bar,{alpha:1,delay:0.55,onComplete:savePic})
  setEndWord()
  setBG2()
}
function savePic(){
  
  document.getElementById("pngHolder").appendChild(convertCanvasToImage($("#mainCanvas")[0]));
  TweenLite.set(step4bar,{alpha:0})
  TweenLite.set($("#pngHolder"),{display:"block",opacity:0})
  
  TweenLite.set($("#endBtn1"),{display:"block"})
  TweenLite.set($("#endBtn2"),{display:"block"})
  TweenLite.set($("#endBtn3"),{display:"block"})
}
$("#endBtn1").click(function(){
  nowStep=1
  setStep()
  nowDiamond=0
  nowRing=0
  nowWord=3//ddd
  nowBG=parseInt(Math.random()*4)
  goStep1()
  TweenLite.set($("#endBtn1"),{display:"none"})
  TweenLite.set($("#endBtn2"),{display:"none"})
  TweenLite.set($("#endBtn3"),{display:"none"})
  TweenLite.set(endBtn,{display:"none"})
  document.getElementById('pngHolder').innerHTML = '';
  TweenLite.set($("#pngHolder"),{display:"none"})

})
$("#endBtn2").click(function(){
  
  TweenLite.set($("#shareHint"),{display:"block",opacity:0})
  TweenLite.to($("#shareHint"),.5,{display:"block",opacity:.8})
})

$("#shareHint").click(function(){
  TweenLite.to($("#shareHint"),.5,{display:"none",opacity:0})
})
$("#endBtn3").click(function(){
  window.location.href="http://www.zbird.com/"
})
function convertCanvasToImage(canvas) {
  var image = new Image();
  //image.crossOrigin="Anonymous"
  image.src = canvas.toDataURL("image/png");
  return image;
}

function setPage3(){
  setStep2()
  setStep3()
  setStep4()
}
var theRing=new createjs.Container()
var step2title=new createjs.Bitmap("img/step2title.png")
var step2arrow=new createjs.Bitmap("img/step12arrow.png")
var step2btn=new createjs.Bitmap("img/step2btn.png")
var ringA=[[],[],[],[]]
var ringNum=[6,4,4,5]
var nowRing=0
var step2taA=[[],[],[],[]]
var step2tbA=[[],[],[],[]]
function setStep2(){
  stage3.addChild(theRing)
  theRing.x=320
  theRing.y=530/1000*stageH
  step2.addChild(step2title)
  TweenLite.set(step2title,{x:320,y:255/1000*stageH,regX:320,regY:93})

  step2.addChild(step2arrow)
  TweenLite.set(step2arrow,{x:320,y:517/1000*stageH,regX:320,regY:57})

  step2.addChild(step2btn)
  TweenLite.set(step2btn,{x:320,y:866/1000*stageH,regX:320,regY:44})

  for (var i = 1; i <= 4; i++) {
    for (var j = 1; j <= ringNum[i-1]; j++) {
      var ring=new createjs.Bitmap("img/ring"+i+"_"+j+".png")
      ringA[i-1].push(ring)
      TweenLite.set(ring,{regX:320,regY:128.5})
      theRing.addChild(ring)

      //console.log("img/ring"+i+"_"+j+".png")

      var step2ta=new createjs.Bitmap("img/t"+i+"_"+j+"a.png")
      step2taA[i-1].push(step2ta)
      TweenLite.set(step2ta,{regX:320,regY:51.5,x:320,y:736.5/1000*stageH})
      step2.addChild(step2ta)

      var step2tb=new createjs.Bitmap("img/t"+i+"_"+j+"b.png")
      step2tbA[i-1].push(step2tb)
      TweenLite.set(step2tb,{regX:320,regY:51.5,x:320,y:736.5/1000*stageH})
      step2.addChild(step2tb)

      if((i-1)==nowDiamond&&(j-1)==nowRing){
        ring.alpha=1
        step2ta.alpha=1
        step2tb.alpha=1
      }else{
        ring.alpha=0
        step2ta.alpha=0
        step2tb.alpha=0

      }
    };
  };
}

function setRing(){
  console.log("nowDiamond=",nowDiamond,"nowRing=",nowRing)
  for (var i = 1; i <= 4; i++) {
    for (var j = 1; j <= ringNum[i-1]; j++) {
      //console.log(i,j)

      if((i-1)==nowDiamond&&(j-1)==nowRing){
        TweenLite.set(ringA[i-1][j-1],{alpha:1})
        TweenLite.set(theRing,{alpha:0,x:320+rlX})
        TweenLite.to(theRing,1,{alpha:1,x:320,ease:Back.easeOut})
        TweenLite.set(step2taA[i-1][j-1],{alpha:0,y:(736.5+50)/1000*stageH})
        TweenLite.set(step2tbA[i-1][j-1],{alpha:0,y:(736.5+50)/1000*stageH})

        TweenLite.to(step2taA[i-1][j-1],1.5,{alpha:1,y:(736.5)/1000*stageH,ease:Back.easeOut,delay:0})
        TweenLite.to(step2tbA[i-1][j-1],1.5,{alpha:1,y:(736.5)/1000*stageH,ease:Back.easeOut,delay:0.1})

        console.log("nowDiamond=",nowDiamond,"nowRing=",nowRing)
      }else{
        TweenLite.set(ringA[i-1][j-1],{alpha:0})
        TweenLite.set(step2taA[i-1][j-1],{alpha:0})
        TweenLite.set(step2tbA[i-1][j-1],{alpha:0})

      }
    };
  };


}

var step3title=new createjs.Bitmap("img/step3title.png")
var step3arrow=new createjs.Bitmap("img/step3arrow.png")
var step3btn=new createjs.Bitmap("img/step2btn.png")
var nowWord=0
var nowBG=0
var wordA=[]
var bgA=[]
var endbgA=[]
function setStep3(){
  console.log("setStep3")
  nowWord=parseInt(Math.random()*8)
  nowBG=parseInt(Math.random()*4)

  for (var j = 1; j <= 4; j++) {
    var _bg=new createjs.Bitmap("img/bg"+j+".png")
    step3.addChild(_bg)
    bgA.push(_bg)
    if((j-1)==nowBG){
      console.log(nowBG)
      TweenLite.set(_bg,{alpha:.5})
    }else{
      TweenLite.set(_bg,{alpha:0})
    }
  };

  step3.addChild(step3title)
  TweenLite.set(step3title,{x:320,y:366.5/1000*stageH,regX:320,regY:180.5})

  step3.addChild(step3arrow)
  TweenLite.set(step3arrow,{x:320,y:717.5/1000*stageH,regX:320,regY:57})

  step3.addChild(step3btn)
  TweenLite.set(step3btn,{x:320,y:866/1000*stageH,regX:320,regY:44})

  for (var i = 1; i <= 8; i++) {
    var word=new createjs.Bitmap("img/step3t"+i+".png")
    step3.addChild(word)
    TweenLite.set(word,{x:320,y:717.5/1000*stageH,regX:320,regY:57})
    wordA.push(word)
    if((i-1)==nowWord){
      TweenLite.set(word,{alpha:1})
    }else{
      TweenLite.set(word,{alpha:0})
    }
  };


}

function setWord(){
  console.log(nowWord)
    for (var i = 0; i < 8; i++) {

      if(i==nowWord){
        TweenLite.set(wordA[i],{x:320,y:(717.5-20)/1000*stageH,alpha:0})
        TweenLite.to(wordA[i],.5,{x:320,y:717.5/1000*stageH,alpha:1})
      }else{
        TweenLite.set(wordA[i],{alpha:0})
      }
  };
}

function setEndWord(){
  console.log(nowWord)
  for (var i = 1; i <= 8; i++) {
    if((i-1)==nowWord){
      TweenLite.set(endTA[i-1],{alpha:1})
    }else{
      TweenLite.set(endTA[i-1],{alpha:0})
    }
  };
}

var step4bar=new createjs.Bitmap("img/endbar.png")//504
var endT=new createjs.Container()
var endTA=[]
function setStep4(){
  for (var j = 1; j <= 4; j++) {
    var _bg=new createjs.Bitmap("img/bg"+j+".png")
    step4.addChild(_bg)
    endbgA.push(_bg)
    if((j-1)==nowBG){
      TweenLite.set(_bg,{alpha:1})
    }else{
      TweenLite.set(_bg,{alpha:0})
    }
  };


  stage.addChild(step4bar)
  TweenLite.set(step4bar,{x:320,y:stageH,regX:320,regY:177,alpha:0})

  step4.addChild(endT)
  for (var i = 1; i <= 8; i++) {
    var endt=new createjs.Bitmap("img/endt"+i+".png")
    endT.addChild(endt)
    endTA.push(endt)
    TweenLite.set(endt,{x:0,y:0,regX:320,regY:79})
    if((i-1)==nowWord){
      TweenLite.set(endt,{alpha:1})
    }else{
      TweenLite.set(endt,{alpha:0})
    }
  };
  TweenLite.set(endT,{x:320,y:500/1000*stageH})

  console.log(504/1000*stageH)
}