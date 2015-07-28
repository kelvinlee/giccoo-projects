<!DOCTYPE html>
<html lang="en" ng-app="kelvin" class="no-js">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
    <title>三个火枪手</title>
    <link rel="stylesheet" href="/ThreeMusketeers/css/base.css">
    <script>
      function showLoad() {
      	 document.getElementsByClassName('loading-logo-bg')[0].style.display = 'block';
      }
      
    </script>
  </head>
  <body>
    <div class="wechat-share-hide">
    </div>
    <div ng-controller="MainController" class="wrap">
      <div class="hideView"></div>
      <div ng-view class="view-animate"></div>
      <div id="loading" class="loading loaded">
        <div class="loading-logo">
          <div style="display:none" class="loading-logo-bg"></div><img src="../libs/img/loading.png" onload="showLoad()">
        </div>
      </div>
    </div>
    <script src="http://game.giccoo.com/socket.io/socket.io.js" type="text/javascript"></script>
    <script src="/libs/js/min/Zepto.min.js" type="text/javascript"></script>
    <script src="/libs/js/angular.js" type="text/javascript"></script>
    <script src="/libs/js/angular-route.js" type="text/javascript"></script>
    <script src="/libs/js/angular-touch.js" type="text/javascript"></script>
    <script src="/libs/js/angular-animate.js" type="text/javascript"></script>
    <script src="/libs/js/min/easeljs-0.8.0.min.js" type="text/javascript"></script>
    <script src="/libs/js/min/tweenjs-0.6.0.min.js" type="text/javascript"></script>
    <script src="/libs/js/min/preloadjs-0.4.1.min.js" type="text/javascript"></script>
    <script src="/ThreeMusketeers/js/base.js" type="text/javascript"></script>
    <script type="text/ng-template" id="home.html">
      <my-canvas id="GameCanvas" width="640" height="300"></my-canvas>
      <div class="gameCtrl">
        <move-box class="moveBox">
          <div ng-show="point" class="point"></div>
        </move-box>
        <attack-box class="attackBox"></attack-box>
      </div>
    </script>
    <script>
      var _hmt = _hmt || [];
      (function() {
      var hm = document.createElement("script");
      hm.src = "//hm.baidu.com/hm.js?54c76cfc457022758fa6779bf3fa02a4";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
      })();
    </script>
  </body>
</html>