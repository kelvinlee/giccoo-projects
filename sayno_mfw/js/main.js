
$(document).ready(function load(){
	var page1=$('#page1');

	var t1a=$('#title1a');
	var t1b=$('#title1b');
	var t21=$('#title21');
	var t2a=$('#title2a');
	var t2b=$('#title2b');
	var t2c=$('#title2c');
	var btnStart=$('#btnStart');
	var btnRule=$('#btnRule');
	var rule=$('#rule');
	var closeRule=$('#closeBtn');

	var page2=$('#page2');
	page2.css({'display':'none'});
	ani1();


	btnStart.click(function(){
		ani2()
	});
	
	function ani2(){//========第一页消失＋第二页出场动画
		TweenLite.to(page1,.5,{opacity:0,onComplete:hidePage1});
		page2.css({'display':'block','opacity':'0'});
		TweenLite.to(page2,.5,{opacity:1,delay:.5});

		function hidePage1(){//隐藏page1
			page1.css({'display':'none'})
		}
	}


	rule.css({'display':'none'})//==========活动细则
	btnRule.click(function(){//显示活动细则
		rule.css({'display':'block','opacity':'0'});
		TweenLite.to(rule,1,{opacity:1})
	});
	closeRule.click(function(){
		TweenLite.to(rule,.5,{opacity:0,onComplete:hideRule});
		function hideRule(){//隐藏活动细则
			rule.css({'display':'none','opacity':'0'})
		}
	});

	function ani1(){//========第一页出场动画
		t1a.css({'top':'50%','left':'-10%','opacity':'0'})
		t1b.css({'top':'50%','left':'10%','opacity':'0'})

		t21.css({'top':'50%','opacity':'0','width':'400%','left':'-100%'})
		t2a.css({'top':'55%','opacity':'0'})
		t2b.css({'top':'55%','opacity':'0'})
		t2c.css({'top':'55%','opacity':'0'})

		btnStart.css({'bottom':'-5%','opacity':'0'})
		btnRule.css({'bottom':'-5%','opacity':'0'})

		TweenLite.to(t1a, .8, {top:'50%',left:'0%',opacity:1,overwrite:0});
		TweenLite.to(t1b, .8, {top:'50%',left:'0%',opacity:1,overwrite:0});

		TweenLite.to(t1a, 1, {top:'18%',opacity:1,delay:1.7});
		TweenLite.to(t1b, 1, {top:'18%',opacity:1,delay:1.75});

		TweenLite.to(t21,1,{left:'0%',opacity:1,width:'100%',ease:Bounce.easeOut,delay:1.7})

		TweenLite.to(t2a,1,{top:'50%',opacity:1,delay:2.5})
		TweenLite.to(t2b,1,{top:'50%',opacity:1,delay:2.6})
		TweenLite.to(t2c,1,{top:'50%',opacity:1,delay:2.7})

		TweenLite.to(btnStart,1,{opacity:1,bottom:'0%',delay:3})
		TweenLite.to(btnRule,1,{opacity:1,bottom:'0%',delay:3.1})
	}




});