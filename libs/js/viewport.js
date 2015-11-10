// Generated by CoffeeScript 1.9.1
var adaptUILayout;

adaptUILayout = (function() {
  var adapt, regulateScreen;
  regulateScreen = (function() {
    var _, add, cache, cal, check, defSize, del, ver;
    cache = {};
    defSize = {
      width: window.screen.width,
      height: window.screen.height
    };
    ver = window.navigator.appVersion;
    _ = null;
    check = function(key) {
      if (key.constructor === String) {
        return ver.indexOf(key) > -1;
      } else {
        return ver.test(key);
      }
    };
    add = function(name, key, size) {
      if (name && key) {
        return cache[name] = {
          key: key,
          size: size
        };
      }
    };
    del = function(name) {
      if (cache[name]) {
        return delete cache[name];
      }
    };
    cal = function() {
      var i, len, name;
      if (_ !== null) {
        return _;
      }
      for (i = 0, len = cache.length; i < len; i++) {
        name = cache[i];
        if (check(cache[name].key)) {
          _ = cache[name].size;
          break;
        }
      }
      if (_ === null) {
        _ = defSize;
      }
      return _;
    };
    return {
      add: add,
      del: del,
      cal: cal
    };
  })();
  adapt = function(uiWidth) {
    var android, devicePixelRatio, deviceWidth, head, initialContent, isAndroidUp, isiOS, targetDensitydpi, ua, userscalable, version, viewport;
    ua = navigator.userAgent.toLowerCase();
    android = ua.split('android');
    isAndroidUp = false;
    if (android.length > 1) {
      android = android[1].split(';');
      version = android[0].split('.');
      version = parseInt(version.join(''));
      if (version < 100) {
        version = parseInt(version + '0');
      }
      if (version >= 420) {
        isAndroidUp = true;
      }
    }
    isiOS = ua.indexOf('ipad') > -1 || ua.indexOf('iphone') > -1 || ua.indexOf('chrome') > -1;
    devicePixelRatio = window.devicePixelRatio;
    deviceWidth = regulateScreen.cal().width;
    targetDensitydpi = uiWidth / deviceWidth * devicePixelRatio * 160;
    userscalable = "user-scalable=no";
    initialContent = isiOS || isAndroidUp ? 'width=' + uiWidth + ', ' + userscalable : 'target-densitydpi=' + targetDensitydpi + ', width=device-width, ' + userscalable;
    head = document.getElementsByTagName('head');
    viewport = document.createElement('meta');
    viewport.name = 'viewport';
    viewport.content = initialContent;
    return head.length > 0 && head[head.length - 1].appendChild(viewport);
  };
  return {
    regulateScreen: regulateScreen,
    adapt: adapt
  };
})();

adaptUILayout.adapt(640);
