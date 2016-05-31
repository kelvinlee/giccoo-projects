
$(document).ready(function load (){
	loadStart()
	// ani0()
	// function ani0(){
	// 	var t1=$("#p1t1")
	// 	var t2=$("#p1t2")
	// 	var t3=$("#p1t3")
	// 	var t4=$("#p1t4")
	// 	var t5=$("#p1t5")
	// 	TweenMax.to(t1,0,{"transform":"translate3d(-50%,-50%,0)","-webkit-transform":"translate3d(-50%,-50%,0)"})
	// 	TweenMax.to(t2,0,{"transform":"translate3d(-50%,-50%,0)","-webkit-transform":"translate3d(-50%,-50%,0)"})
	// 	TweenMax.to(t5,0,{"transform":"translate3d(-50%,-50%,0)","-webkit-transform":"translate3d(-50%,-50%,0)"})
	// 	TweenMax.to(t4,0,{"transform":"translate3d(-50%,-50%,0)","-webkit-transform":"translate3d(-50%,-50%,0)"})
	// 	TweenMax.to(t3,0,{"transform":"translate3d(-50%,-50%,0)","-webkit-transform":"translate3d(-50%,-50%,0)"})


	// }

	loadWechatConfig();
 	 wx.ready(function() {
   	 var AppMShareContent, TimelineShareContent;
   	 isWechat = true;
  	  AppMShareContent = {
    	title: "舒适空间自由启程，快来体验二代瑞风M5的7重舒适！",
		desc: "致敬时代驱动力",
		link: "http://m.giccoo.com/jac/",
		imgUrl: "http://m.giccoo.com/jac/img/ico.jpg",
		success: function() {},
		cancel: function() {}
  	  };
  	  TimelineShareContent = {
   	   title: "舒适空间自由启程，快来体验二代瑞风M5的7重舒适！",
    	  desc: "致敬时代驱动力",
    	  link: "http://m.giccoo.com/jac/",
   		  imgUrl: "http://m.giccoo.com/jac/img/ico.jpg",
  	    success: function() {},
  	    cancel: function() {}
   	 };
   	 wx.onMenuShareTimeline(TimelineShareContent);
  	  wx.onMenuShareAppMessage(AppMShareContent);
 	   wx.onMenuShareQQ(AppMShareContent);
	    return wx.onMenuShareWeibo(TimelineShareContent);
	  });
 	function loadWechatConfig() {
	  var hm, s, url;
	  url = encodeURIComponent(window.location.href.split("#")[0]);
	  hm = document.createElement('script');
	  hm.src = "http://api.giccoo.com/config?url=" + url;
	  s = document.getElementsByTagName('script')[0];
	  s.parentNode.insertBefore(hm, s);
	};


	function loadingLine(){
		var lineA=[$("#line1"),$("#line2"),$("#line3"),$("#line4"),$("#line5"),$("#line6")]
		for (var i = 0; i < lineA.length; i++) {
			lineA[i].css({"width":43.3+2*i+"%","opacity": 1-i*.2})
			TweenLite.to(lineA[i],1,{width:43.3+2*(i+1)+"%",opacity:1-(i+1)*.2,ease:Linear.easeNone})
		};
		TweenLite.to(this,1,{onComplete:loadingLine})//记得加loading结束去循环
	}


	
	function page1Line(){
		var lineA1=[$("#p1line1"),$("#p1line2"),$("#p1line3"),$("#p1line4"),$("#p1line5"),$("#p1line6")]
		for (var i = 0; i < lineA1.length; i++) {
			lineA1[i].css({"width":100+6*i+"%","opacity": 1-i*.2,"top":75-i*.2+"%"})
			//TweenLite.to(lineA1[i],.5,{width:100+6*(i+1)+"%",opacity:1-(i+1)*.2,top:75-(i+1)*.2+"%",ease:Linear.easeNone})
		};
		//TweenLite.to(this,.5,{onComplete:page1Line})
	}

	var nowPage = 0;
	function setSlide(){
		$(".goend").click(function(){
			nowPage=10
			goPage()
		})
		$("#btnShare").click(function(){
			$("#shareLayer").css({"display":"block"})
			TweenLite.to($("#shareLayer"),1,{opacity:1})
			$("#logo").css({"opacity":.5})
		})
		$("#shareLayer").click(function(){
			TweenLite.to($("#shareLayer"),1,{opacity:0,display:"none"})
		})

		$("#doneLayer").click(function(){
			TweenLite.to($("#doneLayer"),1,{opacity:0,display:"none"})
			setTimeout("$('#doneLayer').css({'opacity':0,'display':'none'})",500)

		})
		var startY = 0;
		var startScrollTop;
		var pageUpDown =0
		var sliderA=[$('#starter'),$('#starter1'),$('#starter2'),$('#page1'),$('#page2'),$('#page3'),$('#page4'),$('#page5'),$('#page6'),$('#page7'),$('#page8')]

		for (var i = 1; i < sliderA.length; i++) {
			TweenLite.set(sliderA[i],{yPercent:100})
		};


		$('body')[0].addEventListener('touchstart',startTouch,false)
		$('body')[0].addEventListener('touchmove',moveTouch,false)
		$('body')[0].addEventListener('touchend',endTouch,false)

		function startTouch(event){
			startY=event.touches[0].clientY
			pageUpDown=0
		}
		function moveTouch(event){
			var nowY=event.touches[0].clientY
			event.preventDefault();
			if (nowY-startY>80&&nowPage!=0) {
				pageUpDown=1
			}else if (nowY-startY< -80&&nowPage!=10) {
				pageUpDown=-1
			}else{
				pageUpDown=0
			};	
		}
		function endTouch(event){

			if (pageUpDown == 1) {
				//alert("上一页")
				nowPage--
				goPage()
			}else if (pageUpDown == -1) {
				//alert("下一页")
				nowPage++
				goPage()
			}else if (pageUpDown==0) {
				//alert("不翻页")
			};	
		} 
		function goPage(){
			 for (var i = 0; i < sliderA.length; i++) {
			 	if (i<nowPage) {
			 		TweenLite.to(sliderA[i],.5,{yPercent:-100})
			 	};
			 	if (i==nowPage) {
			 		TweenLite.to(sliderA[i],.5,{yPercent:0})
			 		if (i==0) {ani1()};
			 		if (i==1) {ani2()};
			 		if (i==2) {ani3()};
			 		if (i>2&&i<10) {pageAni1(i-3)};
			 	};
			 	if (i>nowPage) {
			 		TweenLite.to(sliderA[i],.5,{yPercent:100})
			 	};
			 }
		}
	
	}



	// var container=$('body')
	// TweenMax.set(container, {perspective:500})

	function ani1(){
		var t1=$("#p1t1")
		var t2=$("#p1t2")
		var t3=$("#p1t3")
		var t4=$("#p1t4")
		var t5=$("#p1t5")
		// t1.css({'opacity':0,"transform":"translate3d(-50%,-30%,0)","-webkit-transform":"translate3d(-50%,-30%,0)"})
		// t2.css({'opacity':0,"transform":"translate3d(-50%,-30%,0)","-webkit-transform":"translate3d(-50%,-30%,0)"})
		// t3.css({'opacity':0,"transform":"translate3d(-50%,-30%,0)","-webkit-transform":"translate3d(-50%,-30%,0)"})
		// t4.css({'opacity':0,"transform":"translate3d(-50%,-30%,0)","-webkit-transform":"translate3d(-50%,-30%,0)"})
		// t5.css({'opacity':0,"transform":"translate3d(-50%,-30%,0)","-webkit-transform":"translate3d(-50%,-30%,0)"})

		// TweenMax.to(t1,1.8,{"transform":"translate3d(-50%,-50%,0)","-webkit-transform":"translate3d(-50%,-50%,0)",opacity:1,ease:Back.easeOut,delay:.5})
		// TweenMax.to(t2,1.8,{"transform":"translate3d(-50%,-50%,0)","-webkit-transform":"translate3d(-50%,-50%,0)",opacity:1,ease:Back.easeOut,delay:.6})
		// TweenMax.to(t5,1,{"transform":"translate3d(-50%,-50%,0)","-webkit-transform":"translate3d(-50%,-50%,0)",opacity:1,ease:Back.easeOut,delay:1.6+.05})
		// TweenMax.to(t4,1,{"transform":"translate3d(-50%,-50%,0)","-webkit-transform":"translate3d(-50%,-50%,0)",opacity:1,ease:Back.easeOut,delay:1.6+.05*2})
		// TweenMax.to(t3,1,{"transform":"translate3d(-50%,-50%,0)","-webkit-transform":"translate3d(-50%,-50%,0)",opacity:1,ease:Back.easeOut,delay:1.6+.05*3})
		// t1.css({'opacity':0,"transform":"translate3d(-50%,-30%,0)","-webkit-transform":"translate3d(-50%,-30%,0)"})
		// t2.css({'opacity':0,"transform":"translate3d(-50%,-30%,0)","-webkit-transform":"translate3d(-50%,-30%,0)"})
		// t3.css({'opacity':0,"transform":"translate3d(-50%,-30%,0)","-webkit-transform":"translate3d(-50%,-30%,0)"})
		// t4.css({'opacity':0,"transform":"translate3d(-50%,-30%,0)","-webkit-transform":"translate3d(-50%,-30%,0)"})
		// t5.css({'opacity':0,"transform":"translate3d(-50%,-30%,0)","-webkit-transform":"translate3d(-50%,-30%,0)"})

		TweenLite.set(t1,{opacity:0,xPercent:-50,yPercent:-50,y:100});
		TweenLite.set(t2,{opacity:0,xPercent:-50,yPercent:-50,y:100});
		TweenLite.set(t3,{opacity:0,xPercent:-50,yPercent:-50,y:50});
		TweenLite.set(t4,{opacity:0,xPercent:-50,yPercent:-50,y:50});
		TweenLite.set(t5,{opacity:0,xPercent:-50,yPercent:-50,y:50});

		TweenLite.to(t1,1,{opacity:1,y:0,ease:Back.easeOut,delay:1});
		TweenLite.to(t2,1,{opacity:1,y:0,ease:Back.easeOut,delay:2});
		TweenLite.to(t3,.5,{opacity:1,y:0,ease:Back.easeOut,delay:3});
		TweenLite.to(t4,.5,{opacity:1,y:0,ease:Back.easeOut,delay:3.5});
		TweenLite.to(t5,.5,{opacity:1,y:0,ease:Back.easeOut,delay:4});

		// TweenMax.to(t1,1.8,{"transform":"translate3d(-50%,-50%,0)","-webkit-transform":"translate3d(-50%,-50%,0)",opacity:1,ease:Back.easeOut,delay:.5})
		// TweenMax.to(t2,1.8,{"transform":"translate3d(-50%,-50%,0)","-webkit-transform":"translate3d(-50%,-50%,0)",opacity:1,ease:Back.easeOut,delay:.6})
		// TweenMax.to(t5,1,{"transform":"translate3d(-50%,-50%,0)","-webkit-transform":"translate3d(-50%,-50%,0)",opacity:1,ease:Back.easeOut,delay:1.6+.05})
		// TweenMax.to(t4,1,{"transform":"translate3d(-50%,-50%,0)","-webkit-transform":"translate3d(-50%,-50%,0)",opacity:1,ease:Back.easeOut,delay:1.6+.05*2})
		// TweenMax.to(t3,1,{"transform":"translate3d(-50%,-50%,0)","-webkit-transform":"translate3d(-50%,-50%,0)",opacity:1,ease:Back.easeOut,delay:1.6+.05*3})
	}

	function ani2(){
		
       	var t1=$("#p2t1")
		var t2=$("#p2t2")
		var t3=$("#p2t3")
		var t4=$("#p2t4")
		// t1.css({'opacity':0,'top':'85%'})
		// t2.css({'opacity':0,'top':'85%'})
		// t3.css({'opacity':0,'top':'85%'})
		// t4.css({'opacity':0,'top':'85%'})
		// TweenLite.to(t1,1,{top:'75%',opacity:1,ease:Back.easeOut,delay:.5+.05})
		// TweenLite.to(t2,1,{top:'75%',opacity:1,ease:Back.easeOut,delay:.5+.05*2})
		// TweenLite.to(t3,1,{top:'75%',opacity:1,ease:Back.easeOut,delay:.5+.05*3})
		// TweenLite.to(t4,1,{top:'75%',opacity:1,ease:Back.easeOut,delay:.5+.05*4})

		t1.css({'opacity':1})
		t2.css({'opacity':1})
		t3.css({'opacity':1})
		t4.css({'opacity':1})
		TweenLite.from(t1,1,{opacity:1,rotationY:-90,ease:Back.easeOut,delay:.5+.05})
		TweenLite.from(t2,1,{opacity:1,rotationY:-90,ease:Back.easeOut,delay:.5+.05*2})
		TweenLite.from(t3,1,{opacity:1,rotationY:-90,ease:Back.easeOut,delay:.5+.05*3})
		TweenLite.from(t4,1,{opacity:1,rotationY:-90,ease:Back.easeOut,delay:.5+.05*4})

	}

	
	function ani3(){
		
       	var t1=$("#p3t1")
		var t2=$("#p3t2")
		// t1.css({'opacity':0,'top':'80%'})
		// t2.css({'opacity':0,'top':'80%'})
		// TweenLite.to(t1,1,{top:'70%',opacity:1,ease:Back.easeOut,delay:.5+.05})
		// TweenLite.to(t2,1,{top:'70%',opacity:1,ease:Back.easeOut,delay:.5+.05*2})

		t1.css({'opacity':1})
		t2.css({'opacity':1})
		TweenLite.from(t1,1,{opacity:0,rotationY:-90,ease:Back.easeOut,delay:.5+.05})
		TweenLite.from(t2,1,{opacity:0,rotationY:-90,ease:Back.easeOut,delay:.5+.05*2})
	}

	//pageAni1()
	function pageAni1(i){
		var bigN=[$("#num1"),$("#num2"),$("#num3"),$("#num4"),$("#num5"),$("#num6"),$("#num7")];
		var sq=[$("#m1t0"),$("#m2t0"),$("#m3t0"),$("#m4t0"),$("#m5t0"),$("#m6t0"),$("#m7t0")];
		// var tA=[
		// [$("#m1t1"),$("#m1t2"),$("#m1t3"),$("#m1t4"),$("#m1t5"),$("#m1t6"),$("#m1t7")],
		// [$("#m2t1"),$("#m2t2"),$("#m2t3"),$("#m2t4"),$("#m2t5"),$("#m2t6")],
		// [$("#m3t1"),$("#m3t2"),$("#m3t3"),$("#m3t4"),$("#m3t5"),$("#m3t6")],
		// [$("#m4t1"),$("#m4t2"),$("#m4t3"),$("#m4t4"),$("#m4t5"),$("#m4t6"),$("#m4t7"),$("#m4t8")],
		// [$("#m5t1"),$("#m5t2"),$("#m5t3"),$("#m5t4"),$("#m5t5"),$("#m5t6")],
		// [$("#m6t1"),$("#m6t2"),$("#m6t3"),$("#m6t4"),$("#m6t5"),$("#m6t6"),$("#m6t7"),$("#m6t8"),$("#m6t9"),$("#m6t10")],
		// [$("#m7t1"),$("#m7t2"),$("#m7t3"),$("#m7t4"),$("#m7t5"),$("#m7t6"),$("#m7t7"),$("#m7t8")],

		// ];
		var tA=[
		[$("#m1t1")],
		[$("#m2t1")],
		[$("#m3t1")],
		[$("#m4t1")],
		[$("#m5t1")],
		[$("#m6t1")],
		[$("#m7t1")],

		];

		var car=[$("#mcar1"),$("#mcar2"),$("#mcar3"),$("#mcar4"),$("#mcar5"),$("#mcar6"),$("#mcar7")];
		var end=[$("#m1_end"),$("#m2_end"),$("#m3_end"),$("#m4_end"),$("#m5_end"),$("#m6_end"),$("#m7_end")];

		//bigN.css({"opacity":0,"left":"0%"})
		//sq[i].css({"opacity":0,"top":"100%"})
		sq[i].css({"opacity":1})
		//car.css({"opacity":0,"top":"100%"})
		//end.css({"opacity":0,"top":"100%"})
		for (var j = 0; j < tA[i].length; j++) {
			
			//TweenLite.from(tA[i][j],1,{opacity:0,rotationY:360*Math.random()-180,rotationX:-180*Math.random()+90,left:100*Math.random()+"%",z:800,ease:Back.easeOut,delay:.5+0.07*j})

			TweenLite.from(tA[i][j],1,{opacity:0,ease:Back.easeOut,delay:.5+0.07*j})
		};
		bigN[i].css({"transform":"translate3d(-100%,0%,0)","-webkit-transform":"translate3d(-100%,0%,0)"})
		//sq[i].css({"transform":"translate3d(-50%,-50%,0)","-webkit-transform":"translate3d(-50%,-50%,0)"})
		//TweenLite.to(bigN,4,{opacity:1,left:"50%",ease:Quint.easeOut})
		TweenLite.to(bigN[i],4,{opacity:1,"transform":"translate3d(0%,0%,0)","-webkit-transform":"translate3d(0%,0%,0)",ease:Quint.easeOut})
		//TweenLite.to(sq[i],2,{opacity:1,top:"95%",ease:Elastic.easeOut,delay:.5-0.05})
		TweenLite.from(sq[i],3,{opacity:0,rotationX:-90,ease:Elastic.easeOut,delay:.5-0.05})
		//TweenLite.from(car[i],2,{opacity:0,left:"60%",ease:Quint.easeOut,delay:.5})
		//TweenLite.from(end[i],4,{opacity:0,ease:Quint.easeOut,delay:.5})

	}


function loadStart() {

	var loadStepOne = [".page1t",".bg","#car1",".page2t",".page3t",".p12pic",".numberPic",".mcar"]//

var _loadNum = 0
var _loadMax = 0
	for (var i = 0; i< loadStepOne.length;i++) {
		_loadMax += $(loadStepOne[i]+" [data-src]").length;
	}
	console.log(_loadMax);
	for (var i = 0; i< loadStepOne.length;i++) {
		$(loadStepOne[i]+" [data-src]").each(function(){
			var img = new Image();
			img.onload = function(){
				_loadNum++;
				// console.log(parseInt(_loadNum/_loadMax*100));
				$("#loading-text").text(parseInt(_loadNum/_loadMax*82+18));
				if (_loadNum>=_loadMax) {
					//alert(_loadMax)
					setTimeout(function(){
						loadEnd();
					},500)

					//loadEnd()
				}
			}
			img.src = $(this).attr("data-src");
			if (loadStepOne[i]==".bg") {img.style="width:100%;height:100%;";}else{img.style="width:100%;";};
			
			$(this).after(img);
			$(this).remove();
		})
	}
	// setTimeout(function(){
	// 	loadEnd();
	// },500)
}
function loadEnd() {
	// loadjscssfile("css/main.css","css");
	//loadingLine()
	setSlide();
	 //page1Line();
	 ani1();
	 
	console.log("load end")
	$(".loading").addClass("fadeOut animated");
	setTimeout(function(){
		$(".loading").remove()
	},500)

}

});
// function loadStep(nums) {
// 	alert(22222)
// 	if ($("#part"+nums+" [data-src]").length <= 0) {
// 		return false;
// 	}
// 	$("#part"+nums+" [data-src]").each(function(){
// 		var img = new Image();
// 		img.src = $(this).attr("data-src");
// 		$(this).after(img);
// 		$(this).remove();
// 	})
// }


// JavaScript Document
// function loadjscssfile(filename,filetype){

//     if(filetype == "js"){
//         var fileref = document.createElement('script');
//         fileref.setAttribute("type","text/javascript");
//         fileref.setAttribute("src",filename);
//     }else if(filetype == "css"){
    
//         var fileref = document.createElement('link');
//         fileref.setAttribute("rel","stylesheet");
//         fileref.setAttribute("type","text/css");
//         fileref.setAttribute("href",filename);
//     }
//    if(typeof fileref != "undefined"){
//         document.getElementsByTagName("head")[0].appendChild(fileref);
//     }
    
// }




//var loadStepOne = [".popUpLayer",".btnBack","#part1","#part2 .page:eq(0)","#part3 .page:eq(0)","#part4 .page:eq(0)","#part5 .page:eq(0)"]

