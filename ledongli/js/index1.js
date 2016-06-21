$(function() {
	var app = function() {
		var $firstScreen = $('.firstScreen'),
			$bnJoin 	= $firstScreen.find('.bn.join'),
			$taskScreen = $('.tasksScreen'),
			$tasks 		= $taskScreen.find('.task'),
			$taskName 	= $taskScreen.find('h3.title'),
			$taskGoal 	= $taskScreen.find('.taskGoal'),
			$bn			= $taskScreen.find('.bn.join'),
			$bns		= $taskScreen.find('.bottomBns>span'),
			$tips 		= $taskScreen.find('.tips');

		var taskData = [{
				name:'钥匙勋章',
				msg: '本周内，单日步数达 10220步 即可点亮勋章',
				count: 1
			}, {
				name:'车标勋章',
				msg: '本周内，3天单日步数达 10220步 即可点亮勋章',
				count: 3
			}, {
				name:'旗帜勋章',
				msg: '本周内，5天单日步数达 10220步  即可点亮勋章',
				count: 5
			}, {
				name:'动力勋章',
				msg: '本周内，7天单日步数达 10220步  即可点亮勋章',
				count: 7
			}];

		var uid, pc;

		// 弹窗相关
		var popupUlity = function() {
			var $userinfo = $tips.find('.userinfo');

			var that = {
				show: function(type) {
					switch (type) {
						case 'rules' :
							$tips.show().find('.mod').hide().filter('.rules').show();
							break;
						case 'submit' :
							$tips.show().find('.mod').hide().filter('.userinfo').show();
							break;
						case 'drawLottery' :
							$tips.show().find('.mod').hide().filter('.joinMsg').show();
					}
				},
				hide: function() {
					$tips.hide();
				}
			};

			// 填入资料
			$userinfo.on('click', '.bns>span', function() {
				var $this = $(this);
				if ($this.hasClass('cancel')) {
					//取消
					that.hide();
				} else if ($this.hasClass('confirm')) {
					//submit
					var params 	= {
							uid: uid, 
							pc: pc
						},
						$inputs = $userinfo.find('input'),
						valid 	= 0;

					$inputs.each(function() {
						var $this = $(this),
							val = $this.val().trim();

						if (val.indexOf('请输入')>-1) return;

						if (val.length == 0) {
							$this.val('请输入您的'+$this.closest('.formItem').find('.tit').text());
						} else if ($this.attr('name') == 'mobile') {
							if (/^(0|86|17951)?(1[0-9]{2})[0-9]{8}$/.test(val)) {
								valid ++;
							} else $this.val('请输入有效手机号码');
						} else {
							valid ++;
						}

						params[$this.attr('name')] = $this.val().trim();
					});

					if (valid == 3) {
						ldl.getData(ldl.urlPrefix + '/submit_information', params)
							.done(function(d) {
								if (d.errorCode == 0) {
									that.hide();
								} else {
									ldl.gTip.show('信息提交出错,请重试');
								}
							})
							.fail(errorHandler)
					}
				}
			}).find('input').on('focus', function() {
				this.select();
			});

			$tips.find('.rules').on('click', '.bn', that.hide );

			$tips.find('.joinMsg').on('click', '.confirm', that.hide);

			return that;
		}();

		var prizeGot = 0,
			curWeekIndex = -1,
			startTime,
			endTime,
			now,
			notStart,
			outDated;

		if (ldl.curEnv == 'prod') {
			startTime    = +new Date('2016/4/25'), // todo test
			endTime      = startTime + (7 * 1000 * 60 * 60 * 24) * 4,
			now          = +new Date,
			notStart     = now < startTime,
			outDated     = now > endTime;
		} else {
			var search = ldl.getUrlObj().search,
				debug = search.debug,
				testTime = debug==1 ? decodeURIComponent(search.now) : '';

			startTime 	  = +new Date('2016/3/28'), // todo test
			endTime       = startTime + (7 * 1000 * 60 * 60 * 24) * 4,
			now           = testTime ? +new Date(testTime) : +new Date,
			notStart 	  = now < startTime,
			outDated 	  = now > endTime;
		}

		return {
			run: function() {
		        ldl.gModalTip.show('载入中...', 0);

				if (!ldl.userData.isLogin) {
					$('.firstScreen').show();
					return ldl.gTip.show('请先登录', 0);
				}

				uid = ldl.userData.uid, pc = ldl.userData.pc;


		        // 计算 curWeekIndex
				if (now >= startTime) {
					var tmp = startTime;
			        while (tmp < now && curWeekIndex < 4) {
			        	tmp += 7 * 1000 * 60 * 60 * 24;
			        	curWeekIndex ++;
			        }
				}

				if (outDated) {
					$bn.text('活动已经结束');
				} else if (notStart) {
					$bn.text('活动尚未开始');
				}

		        //是否已经加入活动
				isJoined()
					.done(function() {
						//已经加入
						renderJoin(false);
					})
					.fail(function(flag) {
						if (flag == 'not joined') {
							//没有加入
							if (outDated) {
								$firstScreen.show();
								$bnJoin.text('活动已经结束')
							} else {
								$firstScreen.show();
								$bnJoin.on('click', join).addClass('on');
							}
								ldl.gModalTip.hide();
						} else if (flag == 'auth fail') {
							ldl.gModalTip.show('授权失败', 0);
						} else if (flag == 'err') {
							//出错
							ldl.gModalTip.show('出错了', 0);
							errorHandler();
						}
					});
			}
		};

		function isJoined() {
			// var joined = localStorage.carad_joined,
			var deferred = $.Deferred();
			// return deferred.reject('not joined')

			// if (joined == uid) {
			// 	ldl.gModalTip.hide();
			// 	return deferred.resolve();
			// }

			ldl.getData(ldl.urlPrefix + '/is_join', {
					uid: uid,
					pc: pc
				})
				.done(function(d) {
					if (d.errorCode === 0) {
						if (d.ret) {
							// localStorage.carad_joined = uid;
							ldl.gModalTip.hide();
							return deferred.resolve();
						} else {
							return deferred.reject('not joined');
						}
					} else {
						return deferred.reject(d.errorCode == -10001 ? 'auth fail' : 'err');
					}
				})
				.fail(function() {
					return deferred.reject('err');
				});

			return deferred.promise();
		}

		function join() {
			return ldl.getData(ldl.urlPrefix + '/join_event', {
				uid: uid,
				pc: pc
			}).done(function(d) {
				d.errorCode == 0 ? renderJoin(true) : errorHandler();
			});
		}

		function renderJoin(isFirst) {
			if (isFirst) {
				// 第一次加入需要显示游戏规则
				popupUlity.show('rules');
				$tips.find('.rules').one('click', '.bn', function() {
					setTimeout(function() {
						popupUlity.show('submit')
					}, 10);
				})
			}

			$firstScreen.remove();
			$taskScreen.show();
			$('body').addClass('joined');

			$bns.on('click', function() {
				if ($(this).hasClass('prize')) {
					//todo
					// location.href = 'prizeInfo.html';
					getLotteryData()
						.done(function(d) {
							if (d.errorCode == 0 && d.ret.self_lottery && d.ret.self_lottery.length) {
								location.href = 'prizeInfo.html';
							} else {
								ldl.gTip.show('您还未参与抽奖')
							};
						})
						.fail(function() {
							ldl.gTip.show('出错了')
						})
				} else if ($(this).hasClass('rules')) {
					popupUlity.show('rules');
				} else if ($(this).hasClass('share')) {
					//share
					ldl.app.tapShare(JSON.stringify({
						image_url: 'http://h5.ledongli.cn/walk/images/logo.jpg',
						link_url: location.href,
						title: '超越之路，就在脚下',
						content: '十代CIVIC携手乐动力，邀您参加活力挑战赛。健康走出来，奖品走到手',
						shared_to: 3
					}))
				}
			});

			updateTaskState(curWeekIndex);
		}

		function updateTaskState(index) {
			if (index < 0) return;

			if (index < 4) {
				$tasks.removeClass('ing').eq(index).addClass('ing');
				$taskName.find('span').text(taskData[index].name);
				$taskGoal.text(taskData[index].msg);
			} else {
				$taskName.css('visibility', 'hidden');
				$taskGoal.hide();
			}

			updateTasks(index > 3 ? 3 : index);
		}

		function updateTasks(to) {
			var weekIndex = 0;
			while (weekIndex <= to) {
				var count = taskData[weekIndex].count,
					fromTime = startTime + weekIndex * 7 * 1000 * 60 * 60 * 24;

				checkSteps(count, weekIndex, fromTime)
					.done(function(index) {
						$tasks.eq(index).addClass('done');
						prizeGot ++;
						if (index == to && !outDated) {
							//可以抽奖
							checkLottery(index)
								.done(function() {
									// 拿到4块奖章可以多抽一次
									if (prizeGot == 4) {
										checkLottery(4)
											.done(function() {
												$bn.off().removeClass('on').text('抽奖次数已经用完');
											})
											.fail(function() {
												$bn.addClass('on').text('抽奖').off().on('click', function() {
													drawLottery(4);
												});
											})

									} else {
										$bn.off().removeClass('on').text('本周您已参与过抽奖');
									}
								})
								.fail(function(err) {
									if (err == 'err') $bn.off().removeClass('on').text('获取抽奖信息失败');
									else {
										$bn.addClass('on').text('抽奖').on('click', function() {
											drawLottery(curWeekIndex)
										});
									}
								})
						}
					})
					.fail(function(index) {
						console.log('week ' + (index+1) + ' not done');
					});

				weekIndex++;
			}

		}

		function checkSteps(targetCount, weekIndex, fromTime) {
			var deferred = $.Deferred(),
				i = 0, count = 0, steps = 0,
				_check = function() {
					if (deferred.state() == 'pending') {
						if (i < 7 && fromTime <= now) {
							ldl.app.getDailyStatsWithData(JSON.stringify({
								startDate: parseInt(fromTime / 1000),
								endDate: parseInt(fromTime + 1000 * 60 * 60 * 24) / 1000
							}))
								.done(function(res) {
                                    var re = JSON.parse(res),
                                        dailystats = re.DailyStats[0];

                                    steps = dailystats ? parseInt(dailystats.steps) : 0;

									if (steps >= ldl.targetSteps) {
										count ++;
										if (count >= targetCount) deferred.resolve(weekIndex);
									} else if ((6-i) + count < targetCount) {
										deferred.reject(weekIndex);
									}

								})
								.fail(function() {
									console.error('get steps error')
								})
								.always(function() {
									i++;
									fromTime += 1000 * 60 * 60 * 24;
									_check();
								});

						} else {
							deferred.reject(weekIndex);
						}
					}
				};

			_check();

			return deferred.promise();
		}

		function getLotteryData() {
			return ldl.getData(ldl.urlPrefix + '/open_lottery', {uid: uid, pc: pc})
					.fail(errorHandler);
		}

		function checkLottery(weekIndex) {
			var deferred = $.Deferred();

			getLotteryData()
				.done(function(d) {
					if (d.errorCode == 0) {
						var valid = d.ret.self_lottery.every(function(v) {
							if (v.lottery_id == weekIndex) {
								return false;
							}
							return true;
						});

						valid ? deferred.reject() : deferred.resolve();
					} else {
						deferred.reject('err');
					}
				})

			return deferred.promise();
		}

		function drawLottery(index) {
			ldl.getData(ldl.urlPrefix + '/draw_lottery', {uid: uid, pc: pc, lottery_id: index})
				.done(function(d) {
					if (d.errorCode == 0) {
						var lottery = d.ret;
						popupUlity.show('drawLottery');
						$tips.find('.number').text(lottery);
						$bn.off().removeClass('on').text('本周您已参与过抽奖');
					} else {
						ldl.gTip.show('抽奖出错,请重试');
					}
				})
				.fail(errorHandler);
		}

		function errorHandler() {
			console.log('error')
		}
	}();

	if (ldl.isApp) {
		ldl.getUserDataInapp()
			.done(app.run)
			.fail(function() {
				ldl.gTip.show('请在乐动力中浏览', 0);
			});
	} else if (ldl.isWeixin) {
		$('.firstScreen').show().find('.bn').text('下载乐动力参加活动').addClass('on').on('click', ldl.checkOs);
	}
});