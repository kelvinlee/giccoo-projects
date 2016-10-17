
$(document).ready(function load (){
	var newsPapper = $('#newsPapper')
	var p1btn = $('#p1btn')
	var nowPage = 1
	var loop1 = 0
	var loop2 = 0
	var loop3 = 0
	var p1line = $('#p1line')
	var bl1 = $('#blackLayer1')
	var p2t1 = $('#p2t1')
	var p2t2 = $('#p2t2')
	var p2t3 = $('#p2t3')

	var bl2 = $('#blackLayer2')
	var screenPic = $('#screenPic')
	var screen2 = $('#screen2')
	var redot = $('#screen3')
	var moveScreen =$('.smallS')

	var p3t1=$('#p3t1')
	var arrow1=$('#arrow1')
	var arrow2=$('#arrow2')
	var arrow3=$('#arrow3')
	var arrow4=$('#arrow4')
	var p3bubble=$('#bubble')

	var btnA1=$('#btnA1')
	var btnA2=$('#btnA2')
	var btnA3=$('#btnA3')
	var btnA4=$('#btnA4')

	var story=0

	var story1=$('#story1')
	var story2=$('#story2')
	var story3=$('#story3')
	var story4=$('#story4')
	var storyA=[story1,story2,story3,story4]

	var sp1=$('#sStory1')
	// var sp2=$('#sStory2')
	// var sp3=$('#sStory3')
	// var sp4=$('#sStory4')

	var lockT = $('#lock')

	page1ani1();
	
	function page1ani1(){
		$('#page1').css({display:'block'})
		TweenLite.from(newsPapper,1,{rotation:-720,scale:5})
		TweenLite.from(p1btn,1,{top:'100%',ease:Back.easeOut,delay:.5,onComplete:page1loop})

		function page1loop(){
			if (nowPage==1&& loop1==0) {
				TweenLite.to(p1btn,.5,{scale:.9,onComplete:page1loop})
				loop1=1
			}else if (nowPage==1&& loop1==1) {
				loop1=0
				TweenLite.to(p1btn,.5,{scale:1,onComplete:page1loop})
			};
		}

		p1btn.click(function(){
			nowPage=2
			bl1.css({display:'block'})
			TweenLite.to(bl1,1,{opacity:.7,onComplete:goPage2})
			TweenLite.to(p1btn,1,{display:'none',opacity:0})
			TweenLite.to(newsPapper,1,{display:'none',opacity:0})
			TweenLite.to(p1line,1,{display:'none',opacity:0})
		})
	}

	function goPage2(){
		p2t1.css({display:'block'})
		p2t2.css({display:'block'})
		p2t3.css({display:'block'})
		TweenLite.from(p2t1,1.5,{y:+10,opacity:0,delay:0})
		TweenLite.from(p2t2,1.5,{y:+10,opacity:0,delay:1})
		TweenLite.from(p2t3,1.5,{y:+10,opacity:0,delay:2,onComplete:hidePage2})
		function hidePage2(){
			TweenLite.to(bl1,.2,{opacity:1,delay:1})
			TweenLite.to(p2t1,.2,{opacity:0,delay:1.7})
			TweenLite.to(p2t2,.2,{opacity:0,delay:1.6})
			TweenLite.to(p2t3,.2,{opacity:0,delay:1.5,onComplete:goPage3})//最后挑时间，。2-》2
		}
	}

	function goPage3(){
		nowPage=3
		$('#page1').css({display:'none'})
		$('#page3').css({display:'block'})

		p3t1.css({display:'none',opacity:0})
		arrow1.css({display:'none',opacity:0})
		arrow2.css({display:'none',opacity:0})
		arrow3.css({display:'none',opacity:0})
		arrow4.css({display:'none',opacity:0})
		p3bubble.css({display:'none',opacity:0})

		redot.css({opacity:0})
		bl2.css({display:'block',opacity:1})
		TweenLite.set(screen2,{scaleY:.02})
		TweenLite.set(screenPic,{scaleY:.02})
		TweenLite.from(screen2,.5,{scaleX:0,opacity:0,delay:0,onComplete:fullscreen})
		TweenLite.from(screenPic,.5,{scaleX:0,opacity:0,delay:0.2})
		

		function fullscreen(){//屏幕展开后
			TweenLite.to(screen2,.5,{scaleY:1,opacity:1,delay:0,onComplete:screenLoop})
			TweenLite.to(screenPic,.5,{scaleY:1,opacity:1,delay:0.2,onComplete:redotLoop})
			TweenLite.to(bl2,2,{opacity:0,display:'block',delay:1})
			p3t1.css({display:'block',opacity:1})
			arrow1.css({display:'block',opacity:1})
			arrow2.css({display:'block',opacity:1})
			arrow3.css({display:'block',opacity:1})
			arrow4.css({display:'block',opacity:1})
			p3bubble.css({display:'block',opacity:1})

			TweenLite.from(p3bubble,2,{scale:0.5,opacity:0,ease:Back.easeOut,delay:.5})
			TweenLite.from(p3t1,2,{y:+20,opacity:0,ease:Back.easeOut,delay:1})
			TweenLite.from(arrow1,1.5,{opacity:0,x:+30,ease:Elastic.easeOut,delay:1.1})
			TweenLite.from(arrow2,1.5,{opacity:0,x:+30,ease:Elastic.easeOut,delay:1.2})
			TweenLite.from(arrow3,1.5,{opacity:0,x:-30,ease:Elastic.easeOut,delay:1.3})
			TweenLite.from(arrow4,1.5,{opacity:0,x:-30,ease:Elastic.easeOut,delay:1.4})

			btnA1.click(function(){
				story=1
				goNext()
			})
			btnA2.click(function(){
				story=2
				goNext()
			})
			btnA3.click(function(){
				story=3
				goNext()
			})
			btnA4.click(function(){
				story=4
				goNext()
			})

			function goNext(){
				// alert(story)
				$('#page3').css({display:'none'})
				nowPage=4
				startSearch()
			}
		}

		function screenLoop(){//展开循环
			if (nowPage==3&& loop3==0) {
				var xx1=Math.random()*20-10
				var yy1=Math.random()*10-5
				TweenLite.to(moveScreen,1+Math.random()*.5,{opacity:.6,x:xx1,y:yy1,onComplete:screenLoop})
				loop3=1
			}else if (nowPage==3&& loop3==1) {
				var xx1=Math.random()*20-10
				var yy1=Math.random()*10-5
				TweenLite.to(moveScreen,.5+Math.random(),{opacity:.9,x:xx1,y:yy1,onComplete:screenLoop})
				loop3=0
			};
		}
		function redotLoop(){
			if (nowPage==3&& loop2==0) {
				TweenLite.to(redot,.5,{opacity:1,onComplete:redotLoop})
				loop2=1
			}else if (nowPage==3&& loop2==1) {
				TweenLite.to(redot,.8,{opacity:0,onComplete:redotLoop})
				loop2=0
			};
		}

	}

	function startSearch(){//搜索
		$('#page4').css({display:'block'})
		story1.css({display:'none'})
		story2.css({display:'none'})
		story3.css({display:'none'})
		story4.css({display:'none'})
		lockT.css({display:'none'})
		storyA[story-1].css({display:'block'})
		if (story==1) {
			// sp1.css({left:0,bottom:0})
			//TweenLite.set(sp1,{'transform':'translate3d(-50%,-50%,0)','-webkit-transform':'translate3d(-50%,-50%,0)',overwrite:0})
			//sp1.css({'transform':'translate3d(-31.65%,-50%,0)','-webkit-transform':'translate3d(-31.65%,-50%,0)','transition':'all 1s','-webkit-transition':'all 1s'})//18.35
			TweenLite.set(sp1,{left:'-21%',overwrite:0})
			TweenLite.set(sp1,{left:'79%',delay:1,overwrite:0})
			TweenLite.set(sp1,{left:'26%',top:'85%',delay:2,overwrite:0})
			TweenLite.set(sp1,{left:'13%',top:'120%',delay:3,scale:2,overwrite:0})

			TweenLite.set(lockT,{display:'block',opacity:1})
			TweenLite.from(lockT,1,{opacity:0,scale:2,ease:Elastic.easeOut,delay:3,onComplete:hidePage4})



		}else if (story==2){

		}else if (story==3){

		}else if (story==4){

		}
	}

	function hidePage4(){
		TweenLite.set($('#page4'),{display:'none',delay:.5,onComplete:goPage5})
	}
	function goPage5(){
		
	}
	

});