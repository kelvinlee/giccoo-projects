
$(document).ready(function load (){
	var p1title=$('#p1title')
	var p1copy=$('#p1copy')
	var p1btn=$('#p1btn')
	var p1=$('#p1')
	var p2=$('#p2')
	var p3=$('#p3')
	var p4=$('#p4')
	var p5=$('#p5')
	var p6=$('#p6')
	var p7=$('#p7')
	var p8=$('#p8')
	// var itemP1=[p1title,p1copy,p1,p2,p3,p4,p5,p6,p7,p8,p1btn]
	var itemP1=[p1,p2,p3,p4,p5,p6,p7,p8]
	var loopNum=0
	var page1=$('#page1')
	var page2=$('#page2')
	var page3=$('#page3')
	var page4=$('#page4')
	var page5=$('#page5')

	var p2btn2=$('#p2btn2')
	var p3barMove=$('#p3barMove')
	var p3barFix=$('#p3barFix')

	var p4barMove=$('#p4barMove')
	var p4barFix=$('#p4barFix')

	var btn1=$('#btn1')
	var btn2=$('#btn2')

	var back1=$('#back1')
	var back2=$('#back2')
	var back3=$('#back3')


	showP1()
	function showP1(){
		page1.css({display:'block'})
		for (var i = 0; i < itemP1.length; i++) {
			itemP1[i].css({display:"none"})
		};
		p1title.css({display:"block",top:'15%'})
		p1copy.css({display:"block"})
		p1btn.css({display:"block"})
		TweenLite.from(p1title,2,{scale:1,y:"-=50",opacity:0,delay:0})
		TweenLite.from(p1copy,2,{y:"+=0",opacity:0,delay:.2*8+1+.5})
		TweenLite.from(p1btn,2,{x:"+=50",opacity:0,delay:.2*8+1+1,ease:Elastic.easeOut,onComplete:setLoop})
		for (var i = 0; i < itemP1.length; i++) {
			itemP1[i].css({display:"block"})
			TweenLite.from(itemP1[i],.3,{scale:4,y:"-=0",opacity:0,delay:.2*i+.5})
		};
		for (var i = 0; i < itemP1.length; i++) {
			TweenLite.to(itemP1[i],1,{top:'72%',delay:.2*8+1,overwrite:0})
		};
		TweenLite.to(p1title,1,{top:'0%',delay:.2*8+1,overwrite:0})

		function setLoop(){
			for (var i = 0; i < itemP1.length; i++) {
				//itemP1[i].css({opacity:0})
				TweenLite.to(itemP1[i],1,{opacity:0,delay:2})
			};
			loopNum++;
			if (loopNum==8) {loopNum=0};
			TweenLite.to(itemP1[loopNum],1,{opacity:1,delay:2,onComplete:setLoop})
		}
	}

	p1btn.click(function(){
		page1.css({display:'none'})
		showP2()
	});
	p2btn2.click(function(){
		page2.css({display:'none'})
		showP3()
	});

	function showP2(){
		page2.css({display:'block'})
		
	}
	function showP3(){
		page3.css({display:'block'})
	}

	btn1.click(function(){
		page3.css({display:'none'})
		page4.css({display:'block'})
	});
	btn2.click(function(){
		page4.css({display:'none'})
		page5.css({display:'block'})
	});

	back1.click(function(){
		page3.css({display:'none'})
		page2.css({display:'block'})
	});
	back2.click(function(){
		page4.css({display:'none'})
		page3.css({display:'block'})
	});
	back3.click(function(){
		page5.css({display:'none'})
		page4.css({display:'block'})
	});


	window.requestAnimFrame = (function(){
  		return  window.requestAnimationFrame       ||
          		window.webkitRequestAnimationFrame ||
         		 window.mozRequestAnimationFrame    ||
         		 function( callback ){
            		window.setTimeout(callback, 1000 / 60);
         		 };
	})();

	var func = function(){
		if(p3barMove.offset().top<0){
			p3barFix.css({display:'block'})
		}else{
			p3barFix.css({display:'none'})
		}
		if(p4barMove.offset().top<0){
			p4barFix.css({display:'block'})
		}else{
			p4barFix.css({display:'none'})
		}
		window.requestAnimFrame(func)	
	}
	func()
});