"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,e){for(var s=0;s<e.length;s++){var a=e[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,s,a){return s&&t(e.prototype,s),a&&t(e,a),e}}(),Game;Game=function(){var t=function(){function t(e){_classCallCheck(this,t);var s;this.opts={el:"main",w:750,h:1333,count:6,speed:1,alpha:.8,defaultShow:!0,class:"",fillColor:6737151},this.opts=Object.assign(this.opts,e),this.default.h=document.documentElement.clientHeight,this.default.w=document.documentElement.clientWidth,this.default.ratio=this.opts.w/this.default.w,this.app=new PIXI.Application({width:this.opts.w,height:this.opts.h,transparent:!0,preserveDrawingBuffer:!0}),null!=this.opts.class&&""!==this.opts.class&&(this.app.view.className=this.opts.class),this.stage=this.app.stage,document.getElementById(this.opts.el).appendChild(this.app.view),firstCache||(s=[]),PIXI.loader.add(s).load(this.build.bind(this))}return _createClass(t,[{key:"build",value:function t(){}}]),t}();return t.prototype.default={w:320,h:160,running:!0},t}.call(void 0);