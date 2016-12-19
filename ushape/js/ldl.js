var Store = {};
var uid = null;
var pc = null;
var _FullStep = 0;
var _taskOverDate = {};
var debug = true;
var _startDate = new Date();

_startDate.setMonth(11);

_startDate.setDate(13);

_startDate.setHours(0);

_startDate.setMinutes(0);

_startDate.setSeconds(0);

_startDate.setMilliseconds(0);

var days = 5;

console.log(_startDate);

taskData = [
  {
    startDate: _startDate,
    endDate: new Date(_startDate.getTime() + 10 * 24 * 60 * 60 * 1000)
  }
];

var GetStep = function(startD) {
  var data;
  data = JSON.stringify({
    startDate: parseInt(startD / 1000),
    endDate: parseInt((startD + 24 * 60 * 60 * 1000) / 1000)
  });
  return ldl.callNativeTmp("getDailyStatsWithData", data, 4000).done(function(d) {
    var dailystats, res, steps;
    res = JSON.parse(d);
    dailystats = res.DailyStats[0];
    steps = dailystats ? parseInt(dailystats.steps) : 0;
    _taskOverDate[new Date(startD).getDate()] = steps;
    console.log("steps:", steps);
    _FullStep += steps;
    return UpdateFullStep();
  }).fail(function(err) {
    return alert("获取步数失败:" + err);
  });
};

var _Max = 0;

var UpdateFullStep = function() {
  _Max++;
  if (_Max >= days) {
    return updateStep(_FullStep);
  }
};
var updateStep = function(steps) {
  step = steps;
  checkState();
  return true;
};
var runInApp = function(msg) {
  var k, results;
  console.log(msg);
  uid = ldl.userData.uid;
  pc = ldl.userData.pc;
  results = [];
  for (i = k = 0; k < days; i = ++k) {
    results.push(GetStep(_startDate.getTime() + i * 24 * 60 * 60 * 1000));
  }
  return results;
};

$(document).ready(function() {
  if (ldl.isApp) {
    ldl.getUserDataInapp().done(runInApp).fail(function(err) {
      return ldl.gTip.show(JSON.stringify(err), 0);
    });
    ldl.shareBy('app', {
      image_url: "http://h5.ledongli.cn/statics/xiandai/img/share.jpg",
      link_url: location.href,
      title: "优形邀您“暴走”一下 开启性感战役",
      content: "再不健身,你就输了!",
      shared_to: 3
    });
  } else {
    console.log("not ledongli");
    $("#page0").show();
    $('#download-btn').on('click', ldl.checkOs);
    return false;
  }
});