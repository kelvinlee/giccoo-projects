"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),Bump=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?PIXI:arguments[0];if(_classCallCheck(this,t),void 0===e)throw new Error("Please assign a rendering engine in the constructor before using bump.js");this.renderer="pixi"}return _createClass(t,[{key:"addCollisionProperties",value:function t(e){"pixi"===this.renderer&&(void 0===e.gx&&Object.defineProperty(e,"gx",{get:function t(){return e.getGlobalPosition().x},enumerable:!0,configurable:!0}),void 0===e.gy&&Object.defineProperty(e,"gy",{get:function t(){return e.getGlobalPosition().y},enumerable:!0,configurable:!0}),void 0===e.centerX&&Object.defineProperty(e,"centerX",{get:function t(){return e.x+e.width/2},enumerable:!0,configurable:!0}),void 0===e.centerY&&Object.defineProperty(e,"centerY",{get:function t(){return e.y+e.height/2},enumerable:!0,configurable:!0}),void 0===e.halfWidth&&Object.defineProperty(e,"halfWidth",{get:function t(){return e.width/2},enumerable:!0,configurable:!0}),void 0===e.halfHeight&&Object.defineProperty(e,"halfHeight",{get:function t(){return e.height/2},enumerable:!0,configurable:!0}),void 0===e.xAnchorOffset&&Object.defineProperty(e,"xAnchorOffset",{get:function t(){return void 0!==e.anchor?e.width*e.anchor.x:0},enumerable:!0,configurable:!0}),void 0===e.yAnchorOffset&&Object.defineProperty(e,"yAnchorOffset",{get:function t(){return void 0!==e.anchor?e.height*e.anchor.y:0},enumerable:!0,configurable:!0}),e.circular&&void 0===e.radius&&Object.defineProperty(e,"radius",{get:function t(){return e.width/2},enumerable:!0,configurable:!0})),e._bumpPropertiesAdded=!0}},{key:"hitTestPoint",value:function t(e,i){i._bumpPropertiesAdded||this.addCollisionProperties(i);var o=void 0,r=void 0,n=void 0,h=void 0,d=void 0,s=void 0,a=void 0,f=void 0,c=void 0;if(o=i.radius?"circle":"rectangle","rectangle"===o&&(r=i.x-i.xAnchorOffset,n=i.x+i.width-i.xAnchorOffset,h=i.y-i.yAnchorOffset,d=i.y+i.height-i.yAnchorOffset,c=e.x>r&&e.x<n&&e.y>h&&e.y<d),"circle"===o){var l=e.x-i.x-i.width/2+i.xAnchorOffset,y=e.y-i.y-i.height/2+i.yAnchorOffset;c=Math.sqrt(l*l+y*y)<i.radius}return c}},{key:"hitTestCircle",value:function t(e,i){var o=!(arguments.length<=2||void 0===arguments[2])&&arguments[2];e._bumpPropertiesAdded||this.addCollisionProperties(e),i._bumpPropertiesAdded||this.addCollisionProperties(i);var r=void 0,n=void 0,h=void 0,d=void 0,s=void 0;return o?(r=i.gx+i.width/2-i.xAnchorOffset-(e.gx+e.width/2-e.xAnchorOffset),n=i.gy+i.width/2-i.yAnchorOffset-(e.gy+e.width/2-e.yAnchorOffset)):(r=i.x+i.width/2-i.xAnchorOffset-(e.x+e.width/2-e.xAnchorOffset),n=i.y+i.width/2-i.yAnchorOffset-(e.y+e.width/2-e.yAnchorOffset)),h=Math.sqrt(r*r+n*n),d=e.radius+i.radius,s=h<d}},{key:"circleCollision",value:function t(e,i){var o=!(arguments.length<=2||void 0===arguments[2])&&arguments[2],r=!(arguments.length<=3||void 0===arguments[3])&&arguments[3];e._bumpPropertiesAdded||this.addCollisionProperties(e),i._bumpPropertiesAdded||this.addCollisionProperties(i);var n=void 0,h=void 0,d=void 0,s=void 0,a=void 0,f=void 0,c=void 0,l={},y=!1;if(r?(s=i.gx+i.width/2-i.xAnchorOffset-(e.gx+e.width/2-e.xAnchorOffset),a=i.gy+i.width/2-i.yAnchorOffset-(e.gy+e.width/2-e.yAnchorOffset)):(s=i.x+i.width/2-i.xAnchorOffset-(e.x+e.width/2-e.xAnchorOffset),a=i.y+i.width/2-i.yAnchorOffset-(e.y+e.width/2-e.yAnchorOffset)),n=Math.sqrt(s*s+a*a),h=e.radius+i.radius,n<h){y=!0,d=h-n;var v=.3;d+=.3,f=s/n,c=a/n,e.x-=d*f,e.y-=d*c,o&&(l.x=a,l.y=-s,this.bounceOffSurface(e,l))}return y}},{key:"movingCircleCollision",value:function t(e,i){var o=!(arguments.length<=2||void 0===arguments[2])&&arguments[2];e._bumpPropertiesAdded||this.addCollisionProperties(e),i._bumpPropertiesAdded||this.addCollisionProperties(i);var r=void 0,n=void 0,h=void 0,d=void 0,s={},a={},f={},c={},l={},y=!1;if(e.mass=e.mass||1,i.mass=i.mass||1,o?(s.vx=i.gx+i.radius-i.xAnchorOffset-(e.gx+e.radius-e.xAnchorOffset),s.vy=i.gy+i.radius-i.yAnchorOffset-(e.gy+e.radius-e.yAnchorOffset)):(s.vx=i.x+i.radius-i.xAnchorOffset-(e.x+e.radius-e.xAnchorOffset),s.vy=i.y+i.radius-i.yAnchorOffset-(e.y+e.radius-e.yAnchorOffset)),s.magnitude=Math.sqrt(s.vx*s.vx+s.vy*s.vy),r=e.radius+i.radius,s.magnitude<r){y=!0,n=r-s.magnitude,n+=.3,s.dx=s.vx/s.magnitude,s.dy=s.vy/s.magnitude,s.vxHalf=Math.abs(s.dx*n/2),s.vyHalf=Math.abs(s.dy*n/2),h=e.x>i.x?1:-1,d=e.y>i.y?1:-1,e.x=e.x+s.vxHalf*h,e.y=e.y+s.vyHalf*d,i.x=i.x+s.vxHalf*-h,i.y=i.y+s.vyHalf*-d,s.lx=s.vy,s.ly=-s.vx;var v=e.vx*s.dx+e.vy*s.dy;a.x=v*s.dx,a.y=v*s.dy;var x=e.vx*(s.lx/s.magnitude)+e.vy*(s.ly/s.magnitude);f.x=x*(s.lx/s.magnitude),f.y=x*(s.ly/s.magnitude);var u=i.vx*s.dx+i.vy*s.dy;c.x=u*s.dx,c.y=u*s.dy;var g=i.vx*(s.lx/s.magnitude)+i.vy*(s.ly/s.magnitude);l.x=g*(s.lx/s.magnitude),l.y=g*(s.ly/s.magnitude),e.bounce={},e.bounce.x=f.x+c.x,e.bounce.y=f.y+c.y,i.bounce={},i.bounce.x=a.x+l.x,i.bounce.y=a.y+l.y,e.vx=e.bounce.x/e.mass,e.vy=e.bounce.y/e.mass,i.vx=i.bounce.x/i.mass,i.vy=i.bounce.y/i.mass}return y}},{key:"multipleCircleCollision",value:function t(e){for(var i=!(arguments.length<=1||void 0===arguments[1])&&arguments[1],o=0;o<e.length;o++)for(var r=e[o],n=o+1;n<e.length;n++){var h=e[n];this.movingCircleCollision(r,h,i)}}},{key:"rectangleCollision",value:function t(e,i){var o=!(arguments.length<=2||void 0===arguments[2])&&arguments[2],r=arguments.length<=3||void 0===arguments[3]||arguments[3];e._bumpPropertiesAdded||this.addCollisionProperties(e),i._bumpPropertiesAdded||this.addCollisionProperties(i);var n=void 0,h=void 0,d=void 0,s=void 0,a=void 0,f=void 0,c=void 0;return r?(f=e.gx+Math.abs(e.halfWidth)-e.xAnchorOffset-(i.gx+Math.abs(i.halfWidth)-i.xAnchorOffset),c=e.gy+Math.abs(e.halfHeight)-e.yAnchorOffset-(i.gy+Math.abs(i.halfHeight)-i.yAnchorOffset)):(f=e.x+Math.abs(e.halfWidth)-e.xAnchorOffset-(i.x+Math.abs(i.halfWidth)-i.xAnchorOffset),c=e.y+Math.abs(e.halfHeight)-e.yAnchorOffset-(i.y+Math.abs(i.halfHeight)-i.yAnchorOffset)),h=Math.abs(e.halfWidth)+Math.abs(i.halfWidth),d=Math.abs(e.halfHeight)+Math.abs(i.halfHeight),Math.abs(f)<h&&Math.abs(c)<d&&(s=h-Math.abs(f),a=d-Math.abs(c),s>=a?(c>0?(n="top",e.y=e.y+a):(n="bottom",e.y=e.y-a),o&&(e.vy*=-1)):(f>0?(n="left",e.x=e.x+s):(n="right",e.x=e.x-s),o&&(e.vx*=-1))),n}},{key:"hitTestRectangle",value:function t(e,i){var o=!(arguments.length<=2||void 0===arguments[2])&&arguments[2];e._bumpPropertiesAdded||this.addCollisionProperties(e),i._bumpPropertiesAdded||this.addCollisionProperties(i);var r=void 0,n=void 0,h=void 0,d=void 0,s=void 0;return r=!1,o?(d=e.gx+Math.abs(e.halfWidth)-e.xAnchorOffset-(i.gx+Math.abs(i.halfWidth)-i.xAnchorOffset),s=e.gy+Math.abs(e.halfHeight)-e.yAnchorOffset-(i.gy+Math.abs(i.halfHeight)-i.yAnchorOffset)):(d=e.x+Math.abs(e.halfWidth)-e.xAnchorOffset-(i.x+Math.abs(i.halfWidth)-i.xAnchorOffset),s=e.y+Math.abs(e.halfHeight)-e.yAnchorOffset-(i.y+Math.abs(i.halfHeight)-i.yAnchorOffset)),n=Math.abs(e.halfWidth)+Math.abs(i.halfWidth),h=Math.abs(e.halfHeight)+Math.abs(i.halfHeight),r=Math.abs(d)<n&&Math.abs(s)<h}},{key:"hitTestCircleRectangle",value:function t(e,i){var o=!(arguments.length<=2||void 0===arguments[2])&&arguments[2];i._bumpPropertiesAdded||this.addCollisionProperties(i),e._bumpPropertiesAdded||this.addCollisionProperties(e);var r=void 0,n=void 0,h=void 0,d=void 0,s=void 0,a=void 0;if(o?(h=e.gx,d=e.gy,s=i.gx,a=i.gy):(h=e.x,d=e.y,s=i.x,a=i.y),"topMiddle"===(r=d-e.yAnchorOffset<a-Math.abs(i.halfHeight)-i.yAnchorOffset?h-e.xAnchorOffset<s-1-Math.abs(i.halfWidth)-i.xAnchorOffset?"topLeft":h-e.xAnchorOffset>s+1+Math.abs(i.halfWidth)-i.xAnchorOffset?"topRight":"topMiddle":d-e.yAnchorOffset>a+Math.abs(i.halfHeight)-i.yAnchorOffset?h-e.xAnchorOffset<s-1-Math.abs(i.halfWidth)-i.xAnchorOffset?"bottomLeft":h-e.xAnchorOffset>s+1+Math.abs(i.halfWidth)-i.xAnchorOffset?"bottomRight":"bottomMiddle":h-e.xAnchorOffset<s-Math.abs(i.halfWidth)-i.xAnchorOffset?"leftMiddle":"rightMiddle")||"bottomMiddle"===r||"leftMiddle"===r||"rightMiddle"===r)n=this.hitTestRectangle(e,i,o);else{var f={};switch(r){case"topLeft":f.x=s-i.xAnchorOffset,f.y=a-i.yAnchorOffset;break;case"topRight":f.x=s+i.width-i.xAnchorOffset,f.y=a-i.yAnchorOffset;break;case"bottomLeft":f.x=s-i.xAnchorOffset,f.y=a+i.height-i.yAnchorOffset;break;case"bottomRight":f.x=s+i.width-i.xAnchorOffset,f.y=a+i.height-i.yAnchorOffset}n=this.hitTestCirclePoint(e,f,o)}return n?r:n}},{key:"hitTestCirclePoint",value:function t(e,i){var o=!(arguments.length<=2||void 0===arguments[2])&&arguments[2];return e._bumpPropertiesAdded||this.addCollisionProperties(e),i.diameter=1,i.width=i.diameter,i.radius=.5,i.centerX=i.x,i.centerY=i.y,i.gx=i.x,i.gy=i.y,i.xAnchorOffset=0,i.yAnchorOffset=0,i._bumpPropertiesAdded=!0,this.hitTestCircle(e,i,o)}},{key:"circleRectangleCollision",value:function t(e,i){var o=!(arguments.length<=2||void 0===arguments[2])&&arguments[2],r=!(arguments.length<=3||void 0===arguments[3])&&arguments[3];i._bumpPropertiesAdded||this.addCollisionProperties(i),e._bumpPropertiesAdded||this.addCollisionProperties(e);var n=void 0,h=void 0,d=void 0,s=void 0,a=void 0,f=void 0;if(r?(d=e.gx,s=e.gy,a=i.gx,f=i.gy):(d=e.x,s=e.y,a=i.x,f=i.y),"topMiddle"===(n=s-e.yAnchorOffset<f-Math.abs(i.halfHeight)-i.yAnchorOffset?d-e.xAnchorOffset<a-1-Math.abs(i.halfWidth)-i.xAnchorOffset?"topLeft":d-e.xAnchorOffset>a+1+Math.abs(i.halfWidth)-i.xAnchorOffset?"topRight":"topMiddle":s-e.yAnchorOffset>f+Math.abs(i.halfHeight)-i.yAnchorOffset?d-e.xAnchorOffset<a-1-Math.abs(i.halfWidth)-i.xAnchorOffset?"bottomLeft":d-e.xAnchorOffset>a+1+Math.abs(i.halfWidth)-i.xAnchorOffset?"bottomRight":"bottomMiddle":d-e.xAnchorOffset<a-Math.abs(i.halfWidth)-i.xAnchorOffset?"leftMiddle":"rightMiddle")||"bottomMiddle"===n||"leftMiddle"===n||"rightMiddle"===n)h=this.rectangleCollision(e,i,o,r);else{var c={};switch(n){case"topLeft":c.x=a-i.xAnchorOffset,c.y=f-i.yAnchorOffset;break;case"topRight":c.x=a+i.width-i.xAnchorOffset,c.y=f-i.yAnchorOffset;break;case"bottomLeft":c.x=a-i.xAnchorOffset,c.y=f+i.height-i.yAnchorOffset;break;case"bottomRight":c.x=a+i.width-i.xAnchorOffset,c.y=f+i.height-i.yAnchorOffset}h=this.circlePointCollision(e,c,o,r)}return h?n:h}},{key:"circlePointCollision",value:function t(e,i){var o=!(arguments.length<=2||void 0===arguments[2])&&arguments[2],r=!(arguments.length<=3||void 0===arguments[3])&&arguments[3];return e._bumpPropertiesAdded||this.addCollisionProperties(e),i.diameter=1,i.width=i.diameter,i.radius=.5,i.centerX=i.x,i.centerY=i.y,i.gx=i.x,i.gy=i.y,i.xAnchorOffset=0,i.yAnchorOffset=0,i._bumpPropertiesAdded=!0,this.circleCollision(e,i,o,r)}},{key:"bounceOffSurface",value:function t(e,i){e._bumpPropertiesAdded||this.addCollisionProperties(e);var o=void 0,r=void 0,n={},h={},d={},s=e.mass||1;i.lx=i.y,i.ly=-i.x,i.magnitude=Math.sqrt(i.x*i.x+i.y*i.y),i.dx=i.x/i.magnitude,i.dy=i.y/i.magnitude,o=e.vx*i.dx+e.vy*i.dy,n.vx=o*i.dx,n.vy=o*i.dy,r=e.vx*(i.lx/i.magnitude)+e.vy*(i.ly/i.magnitude),h.vx=r*(i.lx/i.magnitude),h.vy=r*(i.ly/i.magnitude),h.vx*=-1,h.vy*=-1,d.x=n.vx+h.vx,d.y=n.vy+h.vy,e.vx=d.x/s,e.vy=d.y/s}},{key:"contain",value:function t(e,i){var o=!(arguments.length<=2||void 0===arguments[2])&&arguments[2],r=arguments.length<=3||void 0===arguments[3]?void 0:arguments[3];e._bumpPropertiesAdded||this.addCollisionProperties(e),void 0===i.xAnchorOffset&&(i.xAnchorOffset=0),void 0===i.yAnchorOffset&&(i.yAnchorOffset=0),void 0===e.parent.gx&&(e.parent.gx=0),void 0===e.parent.gy&&(e.parent.gy=0);var n=new Set;return e.x-e.xAnchorOffset<i.x-e.parent.gx-i.xAnchorOffset&&(o&&(e.vx*=-1),e.mass&&(e.vx/=e.mass),e.x=i.x-e.parent.gx-i.xAnchorOffset+e.xAnchorOffset,n.add("left")),e.y-e.yAnchorOffset<i.y-e.parent.gy-i.yAnchorOffset&&(o&&(e.vy*=-1),e.mass&&(e.vy/=e.mass),e.y=i.y-e.parent.gy-i.yAnchorOffset+e.yAnchorOffset,n.add("top")),e.x-e.xAnchorOffset+e.width>i.width-i.xAnchorOffset&&(o&&(e.vx*=-1),e.mass&&(e.vx/=e.mass),e.x=i.width-e.width-i.xAnchorOffset+e.xAnchorOffset,n.add("right")),e.y-e.yAnchorOffset+e.height>i.height-i.yAnchorOffset&&(o&&(e.vy*=-1),e.mass&&(e.vy/=e.mass),e.y=i.height-e.height-i.yAnchorOffset+e.yAnchorOffset,n.add("bottom")),0===n.size&&(n=void 0),n&&r&&r(n),n}},{key:"outsideBounds",value:function t(e,i,o){var r=i.x,n=i.y,h=i.width,d=i.height,s=new Set;return e.x<r-e.width&&s.add("left"),e.y<n-e.height&&s.add("top"),e.x>h+e.width&&s.add("right"),e.y>d+e.height&&s.add("bottom"),0===s.size&&(s=void 0),s&&o&&o(s),s}},{key:"_getCenter",value:function t(e,i,o){return void 0!==e.anchor?0!==e.anchor[o]?0:i/2:i}},{key:"hit",value:function t(e,i){function o(t,e){var i=void 0!==t.parent,o=void 0!==e.parent;if(i&&o)return t.diameter&&e.diameter?n(t,e):t.diameter&&!e.diameter?d(t,e):h(t,e);if(o&&void 0!==t.x&&void 0!==t.y)return l(t,e);throw new Error("I'm sorry, "+t+" and "+e+" cannot be use together in a collision test.'")}function r(){if(e instanceof Array)var t=[n,r],r=t[0],n=t[1];for(var h=i.length-1;h>=0;h--){var d=i[h];O=o(e,d),O&&c&&c(O,d)}}function n(t,e){return s?t.vx+t.vy!==0&&e.vx+e.vy!==0?x(t,e,f):u(t,e,a,f):v(t,e)}function h(t,e){return s?b(t,e,a,f):y(t,e,f)}function d(t,e){return s?A(t,e,a,f):g(t,e,f)}var s=!(arguments.length<=2||void 0===arguments[2])&&arguments[2],a=!(arguments.length<=3||void 0===arguments[3])&&arguments[3],f=arguments[4],c=arguments.length<=5||void 0===arguments[5]?void 0:arguments[5],l=this.hitTestPoint.bind(this),y=this.hitTestRectangle.bind(this),v=this.hitTestCircle.bind(this),x=this.movingCircleCollision.bind(this),u=this.circleCollision.bind(this),g=this.hitTestCircleRectangle.bind(this),b=this.rectangleCollision.bind(this),A=this.circleRectangleCollision.bind(this),O=void 0,p=void 0!==e.parent,m=void 0!==i.parent;return p&&i instanceof Array||m&&e instanceof Array?r():(O=o(e,i))&&c&&c(O),O}}]),t}();