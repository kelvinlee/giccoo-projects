// Generated by CoffeeScript 1.12.7
var IsPC;

window.onload = function() {
  if (!IsPC()) {
    return window.location.href = "http://m.giccoo.com/esteelauder/";
  }
};

IsPC = function() {
  var Agents, flag, userAgentInfo, v;
  userAgentInfo = navigator.userAgent;
  Agents = new Array('Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod');
  flag = true;
  v = 0;
  while (v < Agents.length) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
    v++;
  }
  return flag;
};