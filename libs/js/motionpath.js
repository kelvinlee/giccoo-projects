"use strict";function _classCallCheck(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,a){for(var e=0;e<a.length;e++){var n=a[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(a,e,n){return e&&t(a.prototype,e),n&&t(a,n),a}}(),motionPath;motionPath=function(){var t=function(){function t(a){_classCallCheck(this,t);var e;this.opts={el:"main",path:"img/path.png",w:640,h:640,count:100,class:"",fillColor:6737151},this.opts=Object.assign(this.opts,a),this.image=e=new Image,e.src=this.opts.path,e.onload=this.readPath.bind(this)}return _createClass(t,[{key:"readPath",value:function t(){var a,e,n;return a=document.createElement("canvas"),e=a.getContext("2d"),e.drawImage(this.image,0,0,this.image.width,this.image.height),n=e.getImageData(1,1,1,1).data,console.log(n)}}]),t}();return t.prototype.path=[],t}.call(void 0);