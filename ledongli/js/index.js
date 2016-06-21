$(function() {
	var taskData = [{
		nextgoal: '下一个目标:木萝卜',
		needsteps: '步行5000步即可获得',
		drawLotteryUrl: 'http://walk.ledongli.cn/v2/rest/reward/?dbredirect=http%3A%2F%2Fwww.duiba.com.cn%2FturntableNew%2Findex%2F1416066'
	}, {
		nextgoal: '下一个目标:银萝卜',
		needsteps: '步行10000步即可获得',
		drawLotteryUrl: 'http://walk.ledongli.cn/v2/rest/reward/?dbredirect=http%3A%2F%2Fwww.duiba.com.cn%2FturntableNew%2Findex%2F1416075'
	}, {
		nextgoal: '下一个目标:金萝卜',
		needsteps: '步行20000步即可获得',
		drawLotteryUrl: 'http://walk.ledongli.cn/v2/rest/reward/?dbredirect=http%3A%2F%2Fwww.duiba.com.cn%2FturntableNew%2Findex%2F1416079'
	}];

	var giftArr = ['images/领取保卫萝卜.png', 'images/终极大礼包.png'];
    var completeArr = ['images/再多抽奖.png', 'images/今天领完了.png'];

	var uid, data;

	//	if (ldl.curEnv == 'prod') {
	//		startTime = +new Date('2016/6/16'), // todo test
	//			endTime = startTime + (3 * 1000 * 60 * 60 * 24),
	//			now = +new Date,
	//			notStart = now < startTime,
	//			outDated = now > endTime;
	//	} else {
	//		var search = ldl.getUrlObj().search,
	//			debug = search.debug,
	//			testTime = debug == 1 ? decodeURIComponent(search.now) : '';
	//	}

	function init() {
		var lotteryLevel = 0;
		var today = new Date();
		today.setHours(0);
		today.setMinutes(0);
		today.setSeconds(0);
		today.setMilliseconds(0);
		if(Date.parse(today) > data.lastDate) {data.lastDate = Date.parse(today);data.lotteryCount = 0;data.lotteryLevel=0;}
		// 获取截止到今天为止的步数.
		ldl.app.getDailyStatsWithData(JSON.stringify({
				startDate: Date.parse(today) / 1000,
				endDate: Date.parse(new Date()) / 1000
			})).done(function(d) {
				var imgSrcArr = ['images/木萝卜.png', 'images/银萝卜.png', 'images/金萝卜.png', 'images/完成.png'];
				res = JSON.parse(d);
				var dailystats = res.DailyStats[0];
				var steps = dailystats ? parseInt(dailystats.steps) : 0;
			      // var steps = 0;
				$('#currentsteps-num')[0].innerHTML = steps;
				lotteryLevel = steps < 15000 ? parseInt(steps / 5000) : (parseInt(steps / 5000) - 1 <= 3 ? parseInt(steps / 5000) - 1 : 3);
				lotteryLevel = lotteryLevel?lotteryLevel:1;
				$('#content-img')[0].src = imgSrcArr[lotteryLevel];
				$('#challenge-btn').hide();
				$('#text-div').show();
				
				data.lotteryLevel = lotteryLevel;
				updateBtn(lotteryLevel);
			})
			.fail(function() {
				ldl.gTip.show('获取步数失败', 0)
			});
	}

	function updateBtn(lotteryLevel) {
		data.joinFlag = true;
		localStorage.setItem(uid, JSON.stringify(data));
		checkLottery(lotteryLevel);
	}

	function drawLottery(url) {
		if(data.lotteryLevel === data.lotteryCount){
			$('#lottery')[0].src = completeArr[parseInt(data.lotteryCount / 3)];
		}else{
			data.lotteryCount = data.lotteryLevel;
		localStorage.setItem(uid, JSON.stringify(data));
		var drawLotteryUrl = taskData
		location.href = url;
		}
	}

	function checkLottery(lotteryLevel) {
		$('#lottery')[0].style.visibility = "visible";
		if (lotteryLevel === data.lotteryCount) {
			$('#lottery')[0].src = completeArr[parseInt(data.lotteryCount / 3)];
		} else {
			$('#lottery')[0].src = giftArr[parseInt(lotteryLevel / 3)]
			$('#lottery').on('click', function() {
				drawLottery(taskData[lotteryLevel - 1].drawLotteryUrl);
			});
		}
	}

	function runInApp() {
		ldl.gModalTip.show('载入中...', 2000);
		uid = ldl.userData.uid;
		data = JSON.parse(localStorage.getItem(uid));
		var today = new Date();
		today.setHours(0);
		today.setMinutes(0);
		today.setSeconds(0);
		today.setMilliseconds(0);
		now = Date.parse(today);
		if (!data) {
			data = {
				'joinFlag': false,
				'lotteryCount': 0,
				'lotteryLevel': 1,
				'lastDate':now
			};
		}
		if (data.joinFlag) {
			init();
		}

		$('#challenge-btn').on('click', function(){
		uid = ldl.userData.uid;
		init();
		});
			

		$('#rules').on('click', function() {
			$('#content-div')[0].style.backgroundColor = 'rgba(0,0,0,.75)';
			$('#rules-detail').show();
			$('#challenge-div').hide();
		});

		$('#close').on('click', function() {
			$('#content-div')[0].style.backgroundColor = 'rgba(0,0,0,.65)';
			$('#challenge-div').show();
			$('#rules-detail').hide();
		});

		$('#detail').on('click', function() {
			location.href = ldl.isAndroid ? 'http://luobo3.qq.com/m/index-media.shtml?media=10021903' : 'https://itunes.apple.com/cn/app/id1001855348';
		});

		$('#share').on('click', function() {
			ldl.app.tapShare(JSON.stringify({
				image_url: 'http://h5.ledongli.cn/walk/images/logo.jpg',
				link_url: location.href,
				title: '保卫萝卜3萌翻上线，乐动一夏！',
				content: '保卫萝卜3携手乐动力，带来最萌万步挑战赛，健康游戏，乐动一夏！',
				shared_to: 3
			}));
		});

		$('#download-btn').on('click', ldl.checkOs);
		
		if (!ldl.userData.isLogin) {
			ldl.gModalTip.hide();
			ldl.gModalTip.show('请先登录', 2000, ldl.app.login);

			setTimeout(
				function(){
					$('#challenge-btn').hide();
					$('#alreadyLogin').show().on('click',function(){ 
						 location.reload();
				});
				},3000);
		}

	}

	if (!ldl.isApp) {
		console.log(ldl.isWeixin);
		$('#content-div').hide();
		$('#share-div').show().find('.bn').on('click', ldl.checkOs);
		$('title').text('参加活动');
	} else {
		ldl.loadAppJs().done(function() {
			$('#content-div').show();
			ldl.getUserDataInapp()
				.done(runInApp)
				.fail(function() {
					ldl.gTip.show('请在乐动力中浏览', 0);
				});
		})
	}
});