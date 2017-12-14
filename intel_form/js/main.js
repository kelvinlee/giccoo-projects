
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

$('body')[0].addEventListener('touchmove', function (event) {event.preventDefault();}, false);//阻止了浏览器默认的下拉事件
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
var checkA=[$("#check1"),$("#check2"),$("#check3"),$("#check4"),$("#check5"),$("#check6"),$("#check7"),$("#check8"),$("#check9"),$("#check10"),
$("#check11"),$("#check12"),$("#check13"),$("#check14"),$("#check15"),$("#check16"),$("#check17"),$("#check18"),$("#check19"),$("#check20"),
$("#check21"),$("#check22"),$("#check23"),$("#check24"),$("#check25"),$("#check26"),$("#check27"),]


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

function getStart(){
   TweenLite.set($("#btn"),{y:1907/640*screenW})
   TweenLite.set($("#hint1"),{y:1907/640*screenW})
   TweenLite.set($("#hint2"),{y:1907/640*screenW})
   TweenLite.set($("#hint3"),{y:1907/640*screenW})
   TweenLite.set($("#hint4"),{y:1907/640*screenW})
   TweenLite.set($("#hint5"),{y:1907/640*screenW})
   TweenLite.set($("#hint6"),{y:1907/640*screenW})


  TweenLite.set(checkA[0],{y:545/640*screenW})
  TweenLite.set(checkA[1],{y:(545+37)/640*screenW})

  TweenLite.set(checkA[2],{y:(545+145)/640*screenW})
  TweenLite.set(checkA[3],{y:(545+37+145)/640*screenW})

  TweenLite.set(checkA[4],{y:(545+145+145)/640*screenW})
  TweenLite.set(checkA[5],{y:(545+37+145+145)/640*screenW})

  TweenLite.set(checkA[6],{y:(545+145+145+145)/640*screenW})
  TweenLite.set(checkA[7],{y:(545+37+145+145+145)/640*screenW})
  TweenLite.set(checkA[8],{y:(545+145+145+145+37+37)/640*screenW})
  TweenLite.set(checkA[9],{y:(545+37+145+145+145+37+37)/640*screenW})

  TweenLite.set(checkA[10],{y:(545+36*2+145*4)/640*screenW})
  TweenLite.set(checkA[11],{y:(545+36*3+145*4)/640*screenW})
  TweenLite.set(checkA[12],{y:(545+36*4+145*4)/640*screenW})
  TweenLite.set(checkA[13],{y:(545+36*5+145*4)/640*screenW})
  TweenLite.set(checkA[14],{y:(545+36*6+145*4)/640*screenW})
  TweenLite.set(checkA[15],{y:(545+36*7+145*4)/640*screenW})
  TweenLite.set(checkA[16],{y:(545+36*8+145*4)/640*screenW})
  TweenLite.set(checkA[17],{y:(545+36*9+145*4)/640*screenW})

  TweenLite.set(checkA[18],{y:(545+36*2+145*5+36*6)/640*screenW})
  TweenLite.set(checkA[19],{y:(545+36*3+145*5+36*6)/640*screenW})
  TweenLite.set(checkA[20],{y:(545+36*4+145*5+36*6)/640*screenW})
  TweenLite.set(checkA[21],{y:(545+36*5+145*5+36*6)/640*screenW})
  TweenLite.set(checkA[22],{y:(545+36*6+145*5+36*6)/640*screenW})
  TweenLite.set(checkA[23],{y:(545+36*7+145*5+36*6)/640*screenW})
  TweenLite.set(checkA[24],{y:(545+36*8+145*5+36*6)/640*screenW})
  TweenLite.set(checkA[25],{y:(545+36*9+145*5+36*6)/640*screenW})
  TweenLite.set(checkA[26],{y:(545+36*10+145*5+36*6)/640*screenW})


  checkNum()
   console.log(result27A)
}


var result27A=[0,0,0,0,0,
0,0,0,0,0,
0,0,0,0,0,
0,0,0,0,0,
0,0,0,0,0,
0,0]//总结果
function checkNum(){
  for (var i = 0; i < 27; i++) {
    var url="http://api.giccoo.com/count/get/intel"+parseInt(i)
    $.get(url,function(msg){
        if (msg.recode == 200) {
          result27A[i]=msg.info[0].count
        }else{

        }
    })
  };
  console.log(result27A)
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

var userResultA=[0,0,0,0,0,
0,0,0,0,0,
0,0,0,0,0,
0,0,0,0,0,
0,0,0,0,0,
0,0]//选择结果

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
