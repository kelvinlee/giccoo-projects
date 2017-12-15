
var result27A=[0,0,0,0,0,
0,0,0,0,0,
0,0,0,0,0,
0,0,0,0,0,
0,0,0,0,0,
0,0]//总结果

var userResultA=[0,0,0,0,0,
0,0,0,0,0,
0,0,0,0,0,
0,0,0,0,0,
0,0,0,0,0,
0,0]//选择结果

var checkA=[$("#check1"),$("#check2"),$("#check3"),$("#check4"),$("#check5"),$("#check6"),$("#check7"),$("#check8"),$("#check9"),$("#check10"),
$("#check11"),$("#check12"),$("#check13"),$("#check14"),$("#check15"),$("#check16"),$("#check17"),$("#check18"),$("#check19"),$("#check20"),
$("#check21"),$("#check22"),$("#check23"),$("#check24"),$("#check25"),$("#check26"),$("#check27")]


var q1A=[$("#check1"),$("#check2")]
var q2A=[$("#check3"),$("#check4")]
var q3A=[$("#check5"),$("#check6")]
var q4A=[$("#check7"),$("#check8"),$("#check9"),$("#check10")]
var q5A=[$("#check11"),$("#check12"),$("#check13"),$("#check14"),$("#check15"),$("#check16"),$("#check17"),$("#check18")]
var q6A=[$("#check19"),$("#check20"),$("#check21"),$("#check22"),$("#check23"),$("#check24"),$("#check25"),$("#check26"),$("#check27")]

var result1A=[0,0]
var result2A=[0,0]
var result3A=[0,0]
var result4A=[0,0,0,0]
var result5A=[0,0,0,0,0,0,0,0]
var result6A=[0,0,0,0,0,0,0,0,0]

$(document).ready(function load (){
	loadWechatConfig();
  	wx.ready(function() {
    var shareContent;
    shareContent = {
      title: "全民换新调查",
      desc: "全民换新调查",
      link: "http://m.giccoo.com/intel_form/",
      imgUrl: "http://m.giccoo.com/intel_form/img/ico.jpg",
      success: function() {},
      cancel: function() {}
    };
    wx.onMenuShareTimeline(shareContent);
    wx.onMenuShareAppMessage(shareContent);
    wx.onMenuShareQQ(shareContent);
    return wx.onMenuShareWeibo(shareContent);
  });

    getStart()



});

//$('body')[0].addEventListener('touchmove', function (event) {event.preventDefault();}, false);//阻止了浏览器默认的下拉事件
var screenW
var screenH

screenW=document.body.offsetWidth 
screenH=document.body.offsetHeight

var loadWechatConfig = function() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "http://api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};

var numberA=[$("#number1"),$("#number2"),$("#number3"),$("#number4"),$("#number5"),
$("#number6"),$("#number7"),$("#number8"),$("#number9"),$("#number10"),
$("#number11"),$("#number12"),$("#number13"),$("#number14"),$("#number15"),
$("#number16"),$("#number17"),$("#number18"),$("#number19"),$("#number20"),
$("#number21"),$("#number22"),$("#number23"),$("#number24"),$("#number25"),
$("#number26"),$("#number27")]

var barA=[$("#bar1"),$("#bar2"),$("#bar3"),$("#bar4"),$("#bar5"),
$("#bar6"),$("#bar7"),$("#bar8"),$("#bar9"),$("#bar10"),
$("#bar11"),$("#bar12"),$("#bar13"),$("#bar14"),$("#bar15"),
$("#bar16"),$("#bar17"),$("#bar18"),$("#bar19"),$("#bar20"),
$("#bar21"),$("#bar22"),$("#bar23"),$("#bar24"),$("#bar25"),
$("#bar26"),$("#bar27")]

var yA=[545,582, 690,727, 835,872, 980,1017,1054,1091, 1197,1233,1269,1305,1341,1377,1413,1449, 1558,1594,1630,1666,1702,1738,1774,1810,1846]

function getStart(){
   TweenLite.set($("#btn"),{y:1907/640*screenW})
   TweenLite.set($("#hint1"),{y:1907/640*screenW})
   TweenLite.set($("#hint2"),{y:1907/640*screenW})
   TweenLite.set($("#hint3"),{y:1907/640*screenW})
   TweenLite.set($("#hint4"),{y:1907/640*screenW})
   TweenLite.set($("#hint5"),{y:1907/640*screenW})
   TweenLite.set($("#hint6"),{y:1907/640*screenW})

   TweenLite.set($("#btn1"),{y:2029/640*screenW,height:230/640*screenW})
   TweenLite.set($("#btn2"),{y:(2029+230)/640*screenW,height:230/640*screenW})


for (var i = 0; i < 27; i++) {
  TweenLite.set(checkA[i],{y:yA[i]/640*screenW})
  TweenLite.set(numberA[i],{y:yA[i]/640*screenW})
  TweenLite.set(barA[i],{y:(yA[i]+12)/640*screenW,width:0,height:10/640*screenW})
};




  // for (var i = 0; i < 27; i++) {
  //   TweenLite.set(numberA[i],{y:checkA[i].y})
  // };


  checkNum()
}

$("#btn1").click(function(){
  window.location.href = "https://www.intel.cn/content/www/cn/zh/business/small-business/overview.html"
})

$("#btn2").click(function(){
  window.location.href = "https://sale.jd.com/act/lezftNCZF0K.html?cpdad=1DLSUE"
})

function checkNum(){
    $.get("http://api.giccoo.com/count/get/intel0",function(msg){if (msg.recode == 200) {result27A[0]= msg.info[0].count}})
    $.get("http://api.giccoo.com/count/get/intel1",function(msg){if (msg.recode == 200) {result27A[1]= msg.info[0].count}})
    $.get("http://api.giccoo.com/count/get/intel2",function(msg){if (msg.recode == 200) {result27A[2]= msg.info[0].count}})
    $.get("http://api.giccoo.com/count/get/intel3",function(msg){if (msg.recode == 200) {result27A[3]= msg.info[0].count}})
    $.get("http://api.giccoo.com/count/get/intel4",function(msg){if (msg.recode == 200) {result27A[4]= msg.info[0].count}})

    $.get("http://api.giccoo.com/count/get/intel5",function(msg){if (msg.recode == 200) {result27A[5]= msg.info[0].count}})
    $.get("http://api.giccoo.com/count/get/intel6",function(msg){if (msg.recode == 200) {result27A[6]= msg.info[0].count}})
    $.get("http://api.giccoo.com/count/get/intel7",function(msg){if (msg.recode == 200) {result27A[7]= msg.info[0].count}})
    $.get("http://api.giccoo.com/count/get/intel8",function(msg){if (msg.recode == 200) {result27A[8]= msg.info[0].count}})
    $.get("http://api.giccoo.com/count/get/intel9",function(msg){if (msg.recode == 200) {result27A[9]= msg.info[0].count}})

    $.get("http://api.giccoo.com/count/get/intel10",function(msg){if (msg.recode == 200) {result27A[10]= msg.info[0].count}})
    $.get("http://api.giccoo.com/count/get/intel11",function(msg){if (msg.recode == 200) {result27A[11]= msg.info[0].count}})
    $.get("http://api.giccoo.com/count/get/intel12",function(msg){if (msg.recode == 200) {result27A[12]= msg.info[0].count}})
    $.get("http://api.giccoo.com/count/get/intel13",function(msg){if (msg.recode == 200) {result27A[13]= msg.info[0].count}})
    $.get("http://api.giccoo.com/count/get/intel14",function(msg){if (msg.recode == 200) {result27A[14]= msg.info[0].count}})

    $.get("http://api.giccoo.com/count/get/intel15",function(msg){if (msg.recode == 200) {result27A[15]= msg.info[0].count}})
    $.get("http://api.giccoo.com/count/get/intel16",function(msg){if (msg.recode == 200) {result27A[16]= msg.info[0].count}})
    $.get("http://api.giccoo.com/count/get/intel17",function(msg){if (msg.recode == 200) {result27A[17]= msg.info[0].count}})
    $.get("http://api.giccoo.com/count/get/intel18",function(msg){if (msg.recode == 200) {result27A[18]= msg.info[0].count}})
    $.get("http://api.giccoo.com/count/get/intel19",function(msg){if (msg.recode == 200) {result27A[19]= msg.info[0].count}})

    $.get("http://api.giccoo.com/count/get/intel20",function(msg){if (msg.recode == 200) {result27A[20]= msg.info[0].count}})
    $.get("http://api.giccoo.com/count/get/intel21",function(msg){if (msg.recode == 200) {result27A[21]= msg.info[0].count}})
    $.get("http://api.giccoo.com/count/get/intel22",function(msg){if (msg.recode == 200) {result27A[22]= msg.info[0].count}})
    $.get("http://api.giccoo.com/count/get/intel23",function(msg){if (msg.recode == 200) {result27A[23]= msg.info[0].count}})
    $.get("http://api.giccoo.com/count/get/intel24",function(msg){if (msg.recode == 200) {result27A[24]= msg.info[0].count}})

    $.get("http://api.giccoo.com/count/get/intel25",function(msg){if (msg.recode == 200) {result27A[25]= msg.info[0].count}})
    $.get("http://api.giccoo.com/count/get/intel26",function(msg){if (msg.recode == 200) {result27A[26]= msg.info[0].count}})






}

var ifSubmit=0


$("#btn").click(function(){
  if((result1A[0]+result1A[1])==0){
    TweenLite.set($(".hint"),{opacity:0})
    TweenLite.set($("#hint1"),{opacity:1})
  }else if((result2A[0]+result2A[1])==0){
    TweenLite.set($(".hint"),{opacity:0})
    TweenLite.set($("#hint2"),{opacity:1})
  }else if((result3A[0]+result3A[1])==0){
    TweenLite.set($(".hint"),{opacity:0})
    TweenLite.set($("#hint3"),{opacity:1})
  }else if((result4A[0]+result4A[1]+result4A[2]+result4A[3])==0){
    TweenLite.set($(".hint"),{opacity:0})
    TweenLite.set($("#hint4"),{opacity:1})
  }else if((result5A[0]+result5A[1]+result5A[2]+result5A[3]+result5A[4]+result5A[5]+result5A[6]+result5A[7])==0){
    TweenLite.set($(".hint"),{opacity:0})
    TweenLite.set($("#hint5"),{opacity:1})
  }else if((result6A[0]+result6A[1]+result6A[2]+result6A[3]+result6A[4]+result6A[5]+result6A[6]+result6A[7]+result6A[8])==0){
    TweenLite.set($(".hint"),{opacity:0})
    TweenLite.set($("#hint6"),{opacity:1})
  }else{
    TweenLite.set($(".hint"),{opacity:0})
    TweenLite.set($("#btn"),{opacity:1})
    if(ifSubmit==0){
      goSubmit()
      ifSubmit=1
    }
  }
})



function goSubmit(){
  userResultA[0]=result1A[0]
  userResultA[1]=result1A[1]

  userResultA[2]=result2A[0]
  userResultA[3]=result2A[1]

  userResultA[4]=result3A[0]
  userResultA[5]=result3A[1]

  userResultA[6]=result4A[0]
  userResultA[7]=result4A[1]
  userResultA[8]=result4A[2]
  userResultA[9]=result4A[3]

  userResultA[10]=result5A[0]
  userResultA[11]=result5A[1]
  userResultA[12]=result5A[2]
  userResultA[13]=result5A[3]
  userResultA[14]=result5A[4]
  userResultA[15]=result5A[5]
  userResultA[16]=result5A[6]
  userResultA[17]=result5A[7]

  userResultA[18]=result6A[0]
  userResultA[19]=result6A[1]
  userResultA[20]=result6A[2]
  userResultA[21]=result6A[3]
  userResultA[22]=result6A[4]
  userResultA[23]=result6A[5]
  userResultA[24]=result6A[6]
  userResultA[25]=result6A[7]
  userResultA[26]=result6A[8]


  for (var i = 0; i < userResultA.length; i++) {
    
    if(userResultA[i]==1){
        var _id="intel"+parseInt(i)
        result27A[i]++
        $.post("http://api.giccoo.com/count/update", {id: _id},function(msg){
          if (msg.recode == 200) {}else{}
        })
    }


      
  };

  console.log(result27A)
  setResult()
}

function setResult(){



  var all=result27A[0]+result27A[1]
   for (var i = 0; i < result27A.length; i++) {
      var prst=result27A[i]/all*100
      numberA[i][0].innerHTML=parseInt(prst)+"%("+parseInt(result27A[i])+"人)"
      TweenLite.to(barA[i],1.5,{y:(yA[i]+12)/640*screenW,width:result27A[i]/all*200/640*screenW,height:10/640*screenW})     
  };
  TweenLite.set($(".theNumber"),{opacity:1})
  TweenLite.set($(".theBar1"),{opacity:1})
  TweenLite.set($(".theBar2"),{opacity:1})
}

q1A[0].click(function(){
  for (var i = 0; i < q1A.length; i++) {    TweenLite.set(q1A[i],{opacity:0})  }
  TweenLite.set(q1A[0],{opacity:1})
  result1A=[1,0]
})

q1A[1].click(function(){
  for (var i = 0; i < q1A.length; i++) {    TweenLite.set(q1A[i],{opacity:0})  }
  TweenLite.set(q1A[1],{opacity:1})
  result1A=[0,1]
})
//==========================================
q2A[0].click(function(){
  for (var i = 0; i < q2A.length; i++) {    TweenLite.set(q2A[i],{opacity:0})  }
  TweenLite.set(q2A[0],{opacity:1})
  result2A=[1,0]
})

q2A[1].click(function(){
  for (var i = 0; i < q2A.length; i++) {    TweenLite.set(q2A[i],{opacity:0})  }
  TweenLite.set(q2A[1],{opacity:1})
  result2A=[0,1]
})
//==========================================
q3A[0].click(function(){
  for (var i = 0; i < q3A.length; i++) {    TweenLite.set(q3A[i],{opacity:0})  }
  TweenLite.set(q3A[0],{opacity:1})
  result3A=[1,0]
})

q3A[1].click(function(){
  for (var i = 0; i < q3A.length; i++) {    TweenLite.set(q3A[i],{opacity:0})  }
  TweenLite.set(q3A[1],{opacity:1})
  result3A=[0,1]
})
//==========================================
q4A[0].click(function(){
  for (var i = 0; i < q4A.length; i++) {    TweenLite.set(q4A[i],{opacity:0})  }
  TweenLite.set(q4A[0],{opacity:1})
  result4A=[1,0,0,0]
})

q4A[1].click(function(){
  for (var i = 0; i < q4A.length; i++) {    TweenLite.set(q4A[i],{opacity:0})  }
  TweenLite.set(q4A[1],{opacity:1})
  result4A=[0,1,0,0]
})

q4A[2].click(function(){
  for (var i = 0; i < q4A.length; i++) {    TweenLite.set(q4A[i],{opacity:0})  }
  TweenLite.set(q4A[2],{opacity:1})
  result4A=[0,0,1,0]
})

q4A[3].click(function(){
  for (var i = 0; i < q4A.length; i++) {    TweenLite.set(q4A[i],{opacity:0})  }
  TweenLite.set(q4A[3],{opacity:1})
  result4A=[0,0,0,1]
})
//==========================================
q5A[0].click(function(){
  for (var i = 0; i < q5A.length; i++) {    TweenLite.set(q5A[i],{opacity:0})  }
  TweenLite.set(q5A[0],{opacity:1})
  result5A=[1,0,0,0,0,0,0,0]
})

q5A[1].click(function(){
  for (var i = 0; i < q5A.length; i++) {    TweenLite.set(q5A[i],{opacity:0})  }
  TweenLite.set(q5A[1],{opacity:1})
  result5A=[0,1,0,0,0,0,0,0]
})

q5A[2].click(function(){
  for (var i = 0; i < q5A.length; i++) {    TweenLite.set(q5A[i],{opacity:0})  }
  TweenLite.set(q5A[2],{opacity:1})
  result5A=[0,0,1,0,0,0,0,0]
})

q5A[3].click(function(){
  for (var i = 0; i < q5A.length; i++) {    TweenLite.set(q5A[i],{opacity:0})  }
  TweenLite.set(q5A[3],{opacity:1})
  result5A=[0,0,0,1,0,0,0,0]
})

q5A[4].click(function(){
  for (var i = 0; i < q5A.length; i++) {    TweenLite.set(q5A[i],{opacity:0})  }
  TweenLite.set(q5A[4],{opacity:1})
  result5A=[0,0,0,0,1,0,0,0]
})

q5A[5].click(function(){
  for (var i = 0; i < q5A.length; i++) {    TweenLite.set(q5A[i],{opacity:0})  }
  TweenLite.set(q5A[5],{opacity:1})
  result5A=[0,0,0,0,0,1,0,0]
})

q5A[6].click(function(){
  for (var i = 0; i < q5A.length; i++) {    TweenLite.set(q5A[i],{opacity:0})  }
  TweenLite.set(q5A[6],{opacity:1})
  result5A=[0,0,0,0,0,0,1,0]
})

q5A[7].click(function(){
  for (var i = 0; i < q5A.length; i++) {    TweenLite.set(q5A[i],{opacity:0})  }
  TweenLite.set(q5A[7],{opacity:1})
  result5A=[0,0,0,0,0,0,0,1]
})

//==========================================
q6A[0].click(function(){
  for (var i = 0; i < q6A.length; i++) {    TweenLite.set(q6A[i],{opacity:0})  }
  TweenLite.set(q6A[0],{opacity:1})
  result6A=[1,0,0,0,0,0,0,0,0]
})

q6A[1].click(function(){
  for (var i = 0; i < q6A.length; i++) {    TweenLite.set(q6A[i],{opacity:0})  }
  TweenLite.set(q6A[1],{opacity:1})
  result6A=[0,1,0,0,0,0,0,0,0]
})

q6A[2].click(function(){
  for (var i = 0; i < q6A.length; i++) {    TweenLite.set(q6A[i],{opacity:0})  }
  TweenLite.set(q6A[2],{opacity:1})
  result6A=[0,0,1,0,0,0,0,0,0]
})

q6A[3].click(function(){
  for (var i = 0; i < q6A.length; i++) {    TweenLite.set(q6A[i],{opacity:0})  }
  TweenLite.set(q6A[3],{opacity:1})
  result6A=[0,0,0,1,0,0,0,0,0]
})

q6A[4].click(function(){
  for (var i = 0; i < q6A.length; i++) {    TweenLite.set(q6A[i],{opacity:0})  }
  TweenLite.set(q6A[4],{opacity:1})
  result6A=[0,0,0,0,1,0,0,0,0]
})

q6A[5].click(function(){
  for (var i = 0; i < q6A.length; i++) {    TweenLite.set(q6A[i],{opacity:0})  }
  TweenLite.set(q6A[5],{opacity:1})
  result6A=[0,0,0,0,0,1,0,0,0]
})

q6A[6].click(function(){
  for (var i = 0; i < q6A.length; i++) {    TweenLite.set(q6A[i],{opacity:0})  }
  TweenLite.set(q6A[6],{opacity:1})
  result6A=[0,0,0,0,0,0,1,0,0]
})

q6A[7].click(function(){
  for (var i = 0; i < q6A.length; i++) {    TweenLite.set(q6A[i],{opacity:0})  }
  TweenLite.set(q6A[7],{opacity:1})
  result6A=[0,0,0,0,0,0,0,1,0]
})

q6A[8].click(function(){
  for (var i = 0; i < q6A.length; i++) {    TweenLite.set(q6A[i],{opacity:0})  }
  TweenLite.set(q6A[8],{opacity:1})
  result6A=[0,0,0,0,0,0,0,0,1]
})
