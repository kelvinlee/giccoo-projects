
var loaderTween;
var clickNum=0;
var answer0=["低到令人发指","不尽人意","勉强能够应敌","寐力四射","简直无人能敌"];
var answer1=["行走的黑眼圈，人人都知道","经常发现，早已不足为奇","隔三差五被人提","偶有发现","前所未有，完全看不出"];
var answer2=["数羊数到天荒地老","辗转反侧到深更","昏昏沉沉难入眠","入睡的时间刚好够暖床","简直秒睡"];
var answer3=["简直会被飘雪的声音吵醒","惊弓之鸟，常被惊醒","时好时坏","偶尔会惊醒","雷打不动"];
var answer4=["几乎每天都是","几乎每天都是","几乎每天都是","睡到鸡鸣起","神清气爽的自然醒"];
var answer5=["焦虑到不行","焦虑到不行","有些担心","那都不是事儿","我是寐力小公举，完全不担心"];
var answer6=["日子简直没法过","日子简直没法过","受到些影响","偶尔才会意识到没睡好","我是江湖人称小睡神，完全不影响"];
var qaNum = 0;
var score = 0;
var resultTitle;

jQuery(document).ready(function($) {
	
	
});
window.onload = function(){
	setTimeout(function(){
		var loader = $(".loader")[0];
		var moon = $(".loader-content");
		var gamePage = $('.game');
		var mirror = $(".mirror-board");
		var startBar = $(".startBtton");
		var testBar = $(".testBtton");
		var intro = $("#intro");
		var intro1 = $("#intro1");
		var intro2 = $("#intro2");
		var testtxt = $("#testtxt");
		var chat = $("#chat");
		// loader.className = "loader fadeout";//使用渐隐的方法淡出loading page
		TweenLite.to(moon, 1, {opacity:0});
		// derTween.kill();
		setTimeout(function(){
			loader.style.display="none";
			$(".game").css('display','block');
			TweenLite.from(gamePage, 1, {opacity:0});
			TweenLite.from(mirror, 1, {opacity:0,delay:0.6});
			TweenLite.from(intro1, 2, {opacity:0,delay:2});
			TweenLite.from(intro2, 2, {opacity:0,delay:4});
			TweenLite.from(startBar, 1, {opacity:0,top:"100%",delay:5});

			startBar.click(function(){
				TweenLite.to(intro, 0.6, {opacity:0});
				
				TweenLite.to(startBar, 1, {opacity:0,top:"100%",onComplete:hideIntroHandle});
				function hideIntroHandle(){
					testBar.css('display','block');
					TweenLite.from(testBar, 0.6, {opacity:0,top:"100%"});
					startBar.hide();
					intro.hide();
					// $("#testtxt").innerhtml = "真是傲娇的魔镜，你问吧。";
				}
			});
			// 点击事件
			testBar.bind("click", tagClick);

			function tagClick(){
				chat.css('display','block');
				clickNum += 1;
				switch(clickNum){
					case 1:
						testBar.unbind("click", tagClick);
						$("#chat1").css('display','block');
						setTimeout(function(){
							testBar.bind("click", tagClick);
							$("#chat2").css('display','block');
							$("#testtxt").html("真是傲娇的魔镜，你问吧。");
							
						},1000);
					break;
					case 2:
						testBar.unbind("click", tagClick);
						$("#chat3").css('display','block');
						setTimeout(function(){
							testBar.bind("click", tagClick);
							TweenLite.to(chat, 0.4, {top:-60});
							$("#chat4").css('display','block');
							$("#testtxt").html("好的，开始吧！");
						},1000);
					break;
					case 3:
						testBar.unbind("click", tagClick);
						TweenLite.to(chat, 0.4, {top:-126});
						$("#chat5").css('display','block');
						setTimeout(function(){
							TweenLite.to(testBar, 0.6, {opacity:0,top:"100%"});
							TweenLite.to(chat, 0.6, {opacity:0,onComplete:hideChatHandle});
							function hideChatHandle(){
								chat.css('display','none');
								testBar.css('display','none');
								gameStart();
							}
						},1000);
					break;
				}
			}
			
		},1000);

		},1000);//强制显示loading page 1s

		// 开始游戏！
		var qaBar = $(".qaBtton");
		var qa = $("#qa");
		var btn = $('.btn');
		var logo = $("#logo");
		var result = $(".result");

		function gameStart(){
			$(".result1").css('display','none');
			$(".result2").css('display','none');
			$(".result3").css('display','none');
			$(".result4").css('display','none');
			// console.log('foo');
			qaBar.css('display','block');
			qa.css('display','block');
			$(".q0").css('display','block');
			TweenLite.from(qaBar, 0.6, {opacity:0,top:"100%"});
			TweenLite.from(qa, 0.4, {opacity:0,top:"25%"});

			btn.bind("click", btnsClick);
		}
		function btnsClick (){
			
			console.log(qaNum);

			$(".a").css('display','block');
			btn.unbind("click", btnsClick);
			var index = $(this).index();
			switch(qaNum){
				case 0:
					$(".answer").html(answer0[index]);
				break;
				case 1:
					$(".answer").html(answer1[index]);
				break;
				case 2:
					$(".answer").html(answer2[index]);
				break;
				case 3:
					$(".answer").html(answer3[index]);
				break;
				case 4:
					$(".answer").html(answer4[index]);
				break;
				case 5:
					$(".answer").html(answer5[index]);
				break;
				case 6:
					$(".answer").html(answer6[index]);
				break;
			}
			addScore(index);
			console.log("你的得分=="+score);
			setTimeout(function(){
				TweenLite.to(qa, 1, {opacity:0,onComplete:showNext});
				function showNext(){
					$(".q"+qaNum).css('display','none');
					$(".q"+(qaNum+1)).css('display','block');
					TweenLite.to(qa, 1, {opacity:1});
					$(".a").css('display','none');

					if(qaNum<7){
						qaNum+=1;
						btn.bind("click", btnsClick);
					}
					if(qaNum==7){
						endGame();
					}
					
				}
			},1000);
		}
		function endGame(){
			if(score<=7){
				showResult(1);
				resultTitle = "睡神考拉";
			}else if (score>=8 && score<=14){
				showResult(2);
				resultTitle = "小牧羊童";
			}else if (15<=score<=21){
				showResult(3);
				resultTitle = "资深熊猫";
			}else if (22<=score<=28){
				showResult(4);
				resultTitle = "德古拉伯爵";
			}
			console.log(resultTitle);
		}
		function showResult(_num){
			TweenLite.to(qaBar, 1, {opacity:0,top:"100%"});
			TweenLite.to(logo, 1, {opacity:0,onComplete:showReult});
			function showReult(){
				result.css('display','block');
				qaBar.css('display','none');
				$(".shareBtton").css('display','block');
				$(".result"+_num).css('display','block');
				TweenLite.from($(".shareBtton"), 1, {opacity:0,top:"100%"});
				TweenLite.from(result, 1, {opacity:0});
			}
		}
		function addScore(index){
			switch(index){
				case 0:
					score += 4;
				break;
				case 1:
					score += 3;
				break;
				case 2:
					score += 2;
				break;
				case 3:
					score += 1;
				break;
				case 4:
					score += 0;
				break;
			}
			
		}
		$(".shareBtton").click(function(){
			$(".sharePage").show();
		});
		$(".sharePage").click(function(){
			$(".sharePage").hide();
		});
		$(".lessonBtn").click(function(){
			
			$(".lesson").show();
		});
		$("#close").click(function(){
			$(".lesson").hide();
		});

		// 音乐开关控制
		$("#audio_btn").click(function(){
    var music = document.getElementById("music");
    if(music.paused){
        music.play();
        $(".music").css('-webkit-animation-play-state','running');
        $("#music_btn").attr("src","img/play.png");
    }else{
        music.pause();
        $("#music_btn").attr("src","img/pause.png");
        $(".music").css('-webkit-animation-play-state','paused');
	}
		});
};
