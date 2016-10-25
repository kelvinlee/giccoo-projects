
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

	var end1=$('#end1')
	var end2=$('#end2')
	var end3=$('#end3')
	var end4=$('#end4')
	var endA=[end1,end2,end3,end4]

	var sp1=$('#sStory1')
	var sp2=$('#sStory2')
	var sp3=$('#sStory3')
	var sp4=$('#sStory4')

	var lockT = $('#lock')


	setTimeout(function(){
		page1ani1()
	},1000)

	//page1ani1();
	
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
			TweenLite.to(bl1,2,{opacity:1,delay:.5})
			TweenLite.to(p2t1,1,{opacity:0,delay:1.2})
			TweenLite.to(p2t2,1,{opacity:0,delay:1.1})
			TweenLite.to(p2t3,1,{opacity:0,delay:1.0,onComplete:goPage3})//最后挑时间，。2-》2
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

		//screen2.css({'transform':''})
		//screen2.css({'top':'40%','left': '50%','width': '100%',	'transform':'translate3d(-50%,-50%,0)',	'-webkit-transform':'translate3d(-50%,-50%,0)',opacity:1})

		// TweenLite.set(screen2,{scaleY:.02,opacity:1})
		// TweenLite.set(screenPic,{scaleY:.02,opacity:1})
		// TweenLite.from(screen2,.5,{scaleX:0,opacity:0,delay:0,onComplete:fullscreen})
		// TweenLite.from(screenPic,.5,{scaleX:0,opacity:0,delay:0.2})

		TweenLite.set(screen2,{scale:0,opacity:1})
		TweenLite.set(screenPic,{scale:0,opacity:1})
		TweenLite.from(screen2,.5,{opacity:0,delay:0,onComplete:fullscreen})
		TweenLite.from(screenPic,.5,{opacity:0,delay:0.2})
		


		function fullscreen(){//屏幕展开后
			TweenLite.to(screen2,.5,{scale:1,opacity:1,delay:0,onComplete:screenLoop})
			TweenLite.to(screenPic,.5,{scale:1,opacity:1,delay:0.2,onComplete:redotLoop})
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
		$('#p4error').css({display:'none'})
		$('#page4').css({display:'block'})
		story1.css({display:'none'})
		story2.css({display:'none'})
		story3.css({display:'none'})
		story4.css({display:'none'})
		lockT.css({display:'none'})
		storyA[story-1].css({display:'block'})
		if (story==1) {
			TweenLite.set(sp1,{left:'121%',top:'15%',scale:1,overwrite:0})//对车
			TweenLite.set(sp1,{left:'-76.5%',top:'80%',delay:1,overwrite:0})//对人
			TweenLite.set($('#p4error'),{display:'block',delay:2,overwrite:0})
			TweenLite.set($('#p4error'),{display:'none',delay:4,overwrite:0})
			TweenLite.set(sp1,{left:'-141%',top:'90%',delay:2,scale:1.5,overwrite:0})//放大
			TweenLite.set(sp1,{left:'-76.5%',top:'80%',delay:3.5,scale:1,overwrite:0})//缩小
			TweenLite.set(sp1,{left:'60%',top:'120%',delay:4,overwrite:0})
			TweenLite.set(sp1,{left:'65.5%',top:'150%',delay:5,scale:1.5,overwrite:0})
		}else if (story==2){
			TweenLite.set(sp2,{left:'-11.56%',top:'50%',delay:0,scale:1,overwrite:0})//对车
			TweenLite.set(sp2,{left:'43.75%',top:'50%',delay:1,overwrite:0})//对人
			TweenLite.set($('#p4error'),{display:'block',delay:2,overwrite:0})
			TweenLite.set($('#p4error'),{display:'none',delay:4,overwrite:0})
			TweenLite.set(sp2,{left:'42.48%',top:'31.25%',delay:2,scale:1.5,overwrite:0})//放大
			TweenLite.set(sp2,{left:'43.75%',top:'50%',delay:3.5,scale:1,overwrite:0})//缩小
			TweenLite.set(sp2,{left:'111.4%',top:'50%',delay:4,overwrite:0})
			TweenLite.set(sp2,{left:'222%',top:'23%',delay:5,scale:2,overwrite:0})
		}else if (story==3){
			TweenLite.set(sp3,{left:'147.1875%',top:'33.68%',delay:0,scale:1,overwrite:0})//对车
			TweenLite.set(sp3,{left:'58.28125%',top:'33.68%',delay:1,overwrite:0})//对人
			TweenLite.set($('#p4error'),{display:'block',delay:2,overwrite:0})
			TweenLite.set($('#p4error'),{display:'none',delay:4,overwrite:0})
			TweenLite.set(sp3,{left:'57.75%',top:'28.646%',delay:2,scale:1.5,overwrite:0})//放大
			TweenLite.set(sp3,{left:'58.28125%',top:'33.68%',delay:3.5,scale:1,overwrite:0})//缩小
			TweenLite.set(sp3,{left:'-46.875%',top:'33.68%',delay:4,overwrite:0})
			TweenLite.set(sp3,{left:'-104.46%',top:'28.646%',delay:5,scale:1.5,overwrite:0})
		}else if (story==4){
			TweenLite.set(sp4,{left:'50%',top:'43.4%',delay:0,scale:1,overwrite:0})//对车
			TweenLite.set(sp4,{left:'106.25%',top:'43.4%',delay:1,overwrite:0})//对人
			TweenLite.set($('#p4error'),{display:'block',delay:2,overwrite:0})
			TweenLite.set($('#p4error'),{display:'none',delay:4,overwrite:0})
			TweenLite.set(sp4,{left:'136.85%',top:'23.7%',delay:2,scale:1.5,overwrite:0})//放大
			TweenLite.set(sp4,{left:'106.25%',top:'43.4%',delay:3.5,scale:1,overwrite:0})//缩小
			TweenLite.set(sp4,{left:'-16.1%',top:'43.4%',delay:4,overwrite:0})
			TweenLite.set(sp4,{left:'-56.56%',top:'27.86%',delay:5,scale:1.5,overwrite:0})
		}

		// TweenLite.set(lockT,{display:'block',opacity:1,scale:1})
		// TweenLite.from(lockT,.5,{opacity:0,scale:1.5,delay:5,onComplete:hidePage4})
		// TweenLite.set(lockT,{display:'block',opacity:1,overwrite:0})
		// TweenLite.from(lockT,.5,{opacity:0,delay:5,onComplete:hidePage4,overwrite:0})
		lockT.css({display:'block',opacity:0})
		TweenLite.to(lockT,.5,{opacity:1,delay:5,onComplete:hidePage4})
	}
	 function hidePage4(){
	 	TweenLite.set($('#page4'),{display:'none',delay:.5,onComplete:goPage5})
	 }
	 function goPage5(){
	 	$('#page5').css({display:'block'})
	 	end1.css({display:'none'})
		end2.css({display:'none'})
		end3.css({display:'none'})
		end4.css({display:'none'})
		endA[story-1].css({display:'block'})
		$('#btnBack1234').css({display:'none'})
		$('#btnGO1234').css({display:'none'})

		if (story==1) {

			TweenLite.from($('#Apic1'),1,{opacity:0})
			TweenLite.from($('#At1'),1,{y:+5,opacity:0,delay:.5})//感叹
			TweenLite.from($('#At2'),1,{opacity:0,scale:.5,ease:Back.easeOut,delay:2.5})//等等！

			TweenLite.from($('#Apic2'),.5,{opacity:0,delay:4})//开始笑
			TweenLite.from($('#smile1'),1,{scaleY:0,ease:Back.easeOut,delay:5})//笑

			TweenLite.from($('#bubble1'),1,{opacity:0,scale:0,ease:Back.easeOut,delay:5,onComplete:setBtn})//气泡
			TweenLite.from($('.p5down'),1,{opacity:0,delay:6})//底边
			TweenLite.from($('#At3'),1,{opacity:0,delay:6})//底边
		}else if (story==2){
			TweenLite.from($('#Bpic1'),1,{opacity:0})
			TweenLite.from($('#Bt1'),1,{y:+5,opacity:0,delay:.5})//感叹
			TweenLite.from($('#Bt2'),1,{opacity:0,scale:.5,ease:Back.easeOut,delay:2.5})//等等！

			TweenLite.from($('#Bpic2'),.5,{opacity:0,delay:4})//开始笑
			TweenLite.from($('#smile2'),1,{scaleY:0,ease:Back.easeOut,delay:5})//笑

			TweenLite.from($('#bubble2'),1,{opacity:0,scale:0,ease:Back.easeOut,delay:5,onComplete:setBtn})//气泡
			TweenLite.from($('.p5down'),1,{opacity:0,delay:6})//底边
			TweenLite.from($('#Bt3'),1,{opacity:0,delay:6})//底边
		}else if (story==3){
			TweenLite.from($('#Cpic1'),1,{opacity:0})
			TweenLite.from($('#Ct1'),1,{y:+5,opacity:0,delay:.5})//感叹
			TweenLite.from($('#Ct2'),1,{opacity:0,scale:.5,ease:Back.easeOut,delay:2.5})//等等！

			TweenLite.from($('#Cpic2'),.5,{opacity:0,delay:4})//开始笑
			TweenLite.from($('#smile3'),1,{scaleY:0,ease:Back.easeOut,delay:5})//笑

			TweenLite.from($('#bubble3'),1,{opacity:0,scale:0,ease:Back.easeOut,delay:5,onComplete:setBtn})//气泡
			TweenLite.from($('.p5down'),1,{opacity:0,delay:6})//底边
			TweenLite.from($('#Ct3'),1,{opacity:0,delay:6})//底边
			
		}else if (story==4){
			TweenLite.from($('#Dpic1'),1,{opacity:0})
			TweenLite.from($('#Dt1'),1,{y:+5,opacity:0,delay:.5})//感叹
			TweenLite.from($('#Dt2'),1,{opacity:0,scale:.5,ease:Back.easeOut,delay:2.5})//等等！

			TweenLite.from($('#Dpic2'),.5,{opacity:0,delay:4})//开始笑
			TweenLite.from($('#smile4'),1,{scaleY:0,ease:Back.easeOut,delay:5})//笑

			TweenLite.from($('#bubble4'),1,{opacity:0,scale:0,ease:Back.easeOut,delay:5,onComplete:setBtn})//气泡
			TweenLite.from($('.p5down'),1,{opacity:0,delay:6})//底边
			TweenLite.from($('#Dt3'),1,{opacity:0,delay:6})//底边
			
		}

		function setBtn(){
			$('#btnBack1234').css({display:'block'})
			$('#btnGO1234').css({display:'block'})
		}

		$('#btnBack1234').click(function(){
			$('#page1').css({display:'none'})
			$('#page3').css({display:'none'})
			$('#page4').css({display:'none'})
			$('#page5').css({display:'none'})
			story=0
			goPage3();
		})

		$('#btnGO1234').click(function(){
			if (story==1) {window.location.href="https://promotion.zhihu.com/p/19701044"};
			if (story==2) {};
			if (story==3) {window.location.href="http://h5.ledongli.cn/statics/xiandai/"};
			if (story==4) {};
		})

	 }

	

});