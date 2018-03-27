var $_GET, ANIMATION_END_NAME, ANIMATION_END_NAMES, TRANSITION_END_NAME, TRANSITION_END_NAMES, VENDORS, _CDN, _imgurl, css3Prefix, getRandom, global, i, init, l, len, load, loadWechatConfig, mTestElement, main, music_list, name_list, neteaseShare, noteText, post_url, pre, runLongTexts, stopWebViewScroll, sys, topic_list, updateShare;

VENDORS = ["Moz", 'webkit', 'ms', 'O'];

TRANSITION_END_NAMES = {
  "Moz": "transitionend",
  "webkit": "webkitTransitionEnd",
  "ms": "MSTransitionEnd",
  "O": "oTransitionEnd"
};

ANIMATION_END_NAMES = {
  "Moz": "animationend",
  "webkit": "webkitAnimationEnd",
  "ms": "MSAnimationEnd",
  "O": "oAnimationEnd"
};

mTestElement = document.createElement("div");

for (l = 0, len = VENDORS.length; l < len; l++) {
  i = VENDORS[l];
  css3Prefix = i;
  if ((css3Prefix + "Transition") in mTestElement.style) {
    break;
  }
  css3Prefix = false;
}

if (css3Prefix) {
  TRANSITION_END_NAME = TRANSITION_END_NAMES[css3Prefix];
  ANIMATION_END_NAME = ANIMATION_END_NAMES[css3Prefix];
}

/* Riot v2.3.15, @license MIT, (c) 2015 Muut Inc. + contributors */
(function(e,t){"use strict";var n={version:"v2.3.15",settings:{}},r=0,i=[],o={},f="riot-",u=f+"tag",a="string",s="object",c="undefined",l="function",p=/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,d=["_item","_id","_parent","update","root","mount","unmount","mixin","isMounted","isLoop","tags","parent","opts","trigger","on","off","one"],g=(e&&e.document||{}).documentMode|0;n.observable=function(e){e=e||{};var t={},n=Array.prototype.slice,r=function(e,t){e.replace(/\S+/g,t)},i=function(t,n){Object.defineProperty(e,t,{value:n,enumerable:false,writable:false,configurable:false})};i("on",function(n,i){if(typeof i!="function")return e;r(n,function(e,n){(t[e]=t[e]||[]).push(i);i.typed=n>0});return e});i("off",function(n,i){if(n=="*"&&!i)t={};else{r(n,function(e){if(i){var n=t[e];for(var r=0,o;o=n&&n[r];++r){if(o==i)n.splice(r--,1)}}else delete t[e]})}return e});i("one",function(t,n){function r(){e.off(t,r);n.apply(e,arguments)}return e.on(t,r)});i("trigger",function(i){var o=n.call(arguments,1),f;r(i,function(r){f=n.call(t[r]||[],0);for(var i=0,u;u=f[i];++i){if(u.busy)return;u.busy=1;u.apply(e,u.typed?[r].concat(o):o);if(f[i]!==u){i--}u.busy=0}if(t["*"]&&r!="*")e.trigger.apply(e,["*",r].concat(o))});return e});return e};(function(t){var n=/^.+?\/+[^\/]+/,r="EventListener",i="remove"+r,o="add"+r,f="hasAttribute",u="replace",a="popstate",s="hashchange",c="trigger",l=3,p=typeof e!="undefined"&&e,d=typeof document!="undefined"&&document,g=p&&history,h=p&&(g.location||p.location),v=R.prototype,m=d&&d.ontouchstart?"touchstart":"click",y=false,b=t.observable(),x=false,w,_,N,C,E,L=[],S=0;function T(e){return e.split(/[\/?#]/)}function M(e,t){var n=new RegExp("^"+t[u](/\*/g,"([^/?#]+?)")[u](/\.\./,".*")+"$"),r=e.match(n);if(r)return r.slice(1)}function O(e,t){var n;return function(){clearTimeout(n);n=setTimeout(e,t)}}function A(e){w=O(H,1);p[o](a,w);p[o](s,w);d[o](m,F);if(e)H(true)}function R(){this.$=[];t.observable(this);b.on("stop",this.s.bind(this));b.on("emit",this.e.bind(this))}function $(e){return e[u](/^\/|\/$/,"")}function j(e){return typeof e=="string"}function k(e){return(e||h.href||"")[u](n,"")}function I(e){return _[0]=="#"?(e||h.href||"").split(_)[1]||"":k(e)[u](_,"")}function H(e){var t=S==0;if(l<=S)return;S++;L.push(function(){var t=I();if(e||t!=N){b[c]("emit",t);N=t}});if(t){while(L.length){L[0]();L.shift()}S=0}}function F(e){if(e.which!=1||e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)return;var t=e.target;while(t&&t.nodeName!="A")t=t.parentNode;if(!t||t.nodeName!="A"||t[f]("download")||!t[f]("href")||t.target&&t.target!="_self"||t.href.indexOf(h.href.match(n)[0])==-1)return;if(t.href!=h.href){if(t.href.split("#")[0]==h.href.split("#")[0]||_!="#"&&k(t.href).indexOf(_)!==0||!B(I(t.href),t.title||d.title))return}e.preventDefault()}function B(e,t,n){if(g){e=_+$(e);t=t||d.title;n?g.replaceState(null,t,e):g.pushState(null,t,e);d.title=t;x=false;H();return x}return b[c]("emit",I(e))}v.m=function(e,t,n){if(j(e)&&(!t||j(t)))B(e,t,n||false);else if(t)this.r(e,t);else this.r("@",e)};v.s=function(){this.off("*");this.$=[]};v.e=function(e){this.$.concat("@").some(function(t){var n=(t=="@"?C:E)($(e),$(t));if(typeof n!="undefined"){this[c].apply(null,[t].concat(n));return x=true}},this)};v.r=function(e,t){if(e!="@"){e="/"+$(e);this.$.push(e)}this.on(e,t)};var P=new R;var K=P.m.bind(P);K.create=function(){var e=new R;e.m.stop=e.s.bind(e);return e.m.bind(e)};K.base=function(e){_=e||"#";N=I()};K.exec=function(){H(true)};K.parser=function(e,t){if(!e&&!t){C=T;E=M}if(e)C=e;if(t)E=t};K.query=function(){var e={};var t=h.href||N;t[u](/[?&](.+?)=([^&]*)/g,function(t,n,r){e[n]=r});return e};K.stop=function(){if(y){if(p){p[i](a,w);p[i](s,w);d[i](m,F)}b[c]("stop");y=false}};K.start=function(e){if(!y){if(p){if(document.readyState=="complete")A(e);else p[o]("load",function(){setTimeout(function(){A(e)},1)})}y=true}};K.base();K.parser();t.route=K})(n);var h=function(e){var t="g",r=/\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,i=/"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,o=i.source+"|"+/(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source+"|"+/\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,f={"(":RegExp("([()])|"+o,t),"[":RegExp("([[\\]])|"+o,t),"{":RegExp("([{}])|"+o,t)},u="{ }";var a=["{","}","{","}",/{[^}]*}/,/\\([{}])/g,/\\({)|{/g,RegExp("\\\\(})|([[({])|(})|"+o,t),u,/^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,/(^|[^\\]){=[\S\s]*?}/];var s=e,c,l=[],p;function d(e){return e}function g(e,n){if(!n)n=l;return new RegExp(e.source.replace(/{/g,n[2]).replace(/}/g,n[3]),e.global?t:"")}function h(e){if(e===u)return a;var n=e.split(" ");if(n.length!==2||/[\x00-\x1F<>a-zA-Z0-9'",;\\]/.test(e)){throw new Error('Unsupported brackets "'+e+'"')}n=n.concat(e.replace(/(?=[[\]()*+?.^$|])/g,"\\").split(" "));n[4]=g(n[1].length>1?/{[\S\s]*?}/:a[4],n);n[5]=g(e.length>3?/\\({|})/g:a[5],n);n[6]=g(a[6],n);n[7]=RegExp("\\\\("+n[3]+")|([[({])|("+n[3]+")|"+o,t);n[8]=e;return n}function v(e){return e instanceof RegExp?c(e):l[e]}v.split=function b(e,t,n){if(!n)n=l;var r=[],i,o,u,a,s=n[6];o=u=s.lastIndex=0;while(i=s.exec(e)){a=i.index;if(o){if(i[2]){s.lastIndex=p(e,i[2],s.lastIndex);continue}if(!i[3])continue}if(!i[1]){c(e.slice(u,a));u=s.lastIndex;s=n[6+(o^=1)];s.lastIndex=u}}if(e&&u<e.length){c(e.slice(u))}return r;function c(e){if(t||o)r.push(e&&e.replace(n[5],"$1"));else r.push(e)}function p(e,t,n){var r,i=f[t];i.lastIndex=n;n=1;while(r=i.exec(e)){if(r[1]&&!(r[1]===t?++n:--n))break}return n?e.length:i.lastIndex}};v.hasExpr=function x(e){return l[4].test(e)};v.loopKeys=function w(e){var t=e.match(l[9]);return t?{key:t[1],pos:t[2],val:l[0]+t[3].trim()+l[1]}:{val:e.trim()}};v.hasRaw=function(e){return l[10].test(e)};v.array=function _(e){return e?h(e):l};function m(e){if((e||(e=u))!==l[8]){l=h(e);c=e===u?d:g;l[9]=c(a[9]);l[10]=c(a[10])}s=e}function y(e){var t;e=e||{};t=e.brackets;Object.defineProperty(e,"brackets",{set:m,get:function(){return s},enumerable:true});p=e;m(t)}Object.defineProperty(v,"settings",{set:y,get:function(){return p}});v.settings=typeof n!=="undefined"&&n.settings||{};v.set=m;v.R_STRINGS=i;v.R_MLCOMMS=r;v.S_QBLOCKS=o;return v}();var v=function(){var t={};function n(e,n){if(!e)return e;return(t[e]||(t[e]=i(e))).call(n,r)}n.haveRaw=h.hasRaw;n.hasExpr=h.hasExpr;n.loopKeys=h.loopKeys;n.errorHandler=null;function r(e,t){if(n.errorHandler){e.riotData={tagName:t&&t.root&&t.root.tagName,_riot_id:t&&t._riot_id};n.errorHandler(e)}}function i(e){var t=u(e);if(t.slice(0,11)!=="try{return ")t="return "+t;return new Function("E",t+";")}var o=RegExp(h.S_QBLOCKS,"g"),f=/\x01(\d+)~/g;function u(e){var t=[],n,r=h.split(e.replace(/\u2057/g,'"'),1);if(r.length>2||r[0]){var i,o,u=[];for(i=o=0;i<r.length;++i){n=r[i];if(n&&(n=i&1?c(n,1,t):'"'+n.replace(/\\/g,"\\\\").replace(/\r\n?|\n/g,"\\n").replace(/"/g,'\\"')+'"'))u[o++]=n}n=o<2?u[0]:"["+u.join(",")+'].join("")'}else{n=c(r[1],0,t)}if(t[0])n=n.replace(f,function(e,n){return t[n].replace(/\r/g,"\\r").replace(/\n/g,"\\n")});return n}var a={"(":/[()]/g,"[":/[[\]]/g,"{":/[{}]/g},s=/^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\x01(\d+)~):/;function c(e,t,n){if(e[0]==="=")e=e.slice(1);e=e.replace(o,function(e,t){return e.length>2&&!t?""+(n.push(e)-1)+"~":e}).replace(/\s+/g," ").trim().replace(/\ ?([[\({},?\.:])\ ?/g,"$1");if(e){var r=[],i=0,f;while(e&&(f=e.match(s))&&!f.index){var u,c,l=/,|([[{(])|$/g;e=RegExp.rightContext;u=f[2]?n[f[2]].slice(1,-1).trim().replace(/\s+/g," "):f[1];while(c=(f=l.exec(e))[1])p(c,l);c=e.slice(0,f.index);e=RegExp.rightContext;r[i++]=g(c,1,u)}e=!i?g(e,t):i>1?"["+r.join(",")+'].join(" ").trim()':r[0]}return e;function p(t,n){var r,i=1,o=a[t];o.lastIndex=n.lastIndex;while(r=o.exec(e)){if(r[0]===t)++i;else if(!--i)break}n.lastIndex=i?e.length:o.lastIndex}}var l='"in this?this:'+(typeof e!=="object"?"global":"window")+").",p=/[,{][$\w]+:|(^ *|[^$\w\.])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,d=/^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;function g(e,t,n){var r;e=e.replace(p,function(e,t,n,i,o){if(n){i=r?0:i+e.length;if(n!=="this"&&n!=="global"&&n!=="window"){e=t+'("'+n+l+n;if(i)r=(o=o[i])==="."||o==="("||o==="["}else if(i){r=!d.test(o.slice(i))}}return e});if(r){e="try{return "+e+"}catch(e){E(e,this)}"}if(n){e=(r?"function(){"+e+"}.call(this)":"("+e+")")+'?"'+n+'":""'}else if(t){e="function(v){"+(r?e.replace("return ","v="):"v=("+e+")")+';return v||v===0?v:""}.call(this)'}return e}n.parse=function(e){return e};n.version=h.version="v2.3.21";return n}();var m=function(e){var t=/<yield\s+to=(['"])?@\1\s*>([\S\s]+?)<\/yield\s*>/.source,n={tr:"tbody",th:"tr",td:"tr",col:"colgroup"},r="div";e=e&&e<10;var i=e?p:/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/;function o(e,t){var n=e&&e.match(/^\s*<([-\w]+)/),o=n&&n[1].toLowerCase(),a=Y(r);e=u(e,t||"");if(i.test(o))a=f(a,e,o);else a.innerHTML=e;a.stub=true;return a}function f(e,t,r){var i=r[0]==="o",o=i?"select>":"table>";e.innerHTML="<"+o+t.trim()+"</"+o;o=e.firstChild;if(i){o.selectedIndex=-1}else{var f=n[r];if(f&&o.children.length===1)o=ee(f,o)}return o}function u(e,n){if(!/<yield\b/i.test(e))return e;var r=0;e=e.replace(/<yield\s+from=['"]([-\w]+)['"]\s*(?:\/>|>\s*<\/yield\s*>)/gi,function(e,i){var o=n.match(RegExp(t.replace("@",i),"i"));++r;return o&&o[2]||""});return r?e:e.replace(/<yield\s*(?:\/>|>\s*<\/yield\s*>)/gi,n)}return o}(g);function y(e,t,n){var r={};r[e.key]=t;if(e.pos)r[e.pos]=n;return r}function b(e,t){var n=t.length,r=e.length,i;while(n>r){i=t[--n];t.splice(n,1);i.unmount()}}function x(e,t){Object.keys(e.tags).forEach(function(n){var r=e.tags[n];if(V(r))A(r,function(e){B(e,n,t)});else B(r,n,t)})}function w(e,t,n){var r=e._root,i;e._virts=[];while(r){i=r.nextSibling;if(n)t.insertBefore(r,n._root);else t.appendChild(r);e._virts.push(r);r=i}}function _(e,t,n,r){var i=e._root,o,f=0;for(;f<r;f++){o=i.nextSibling;t.insertBefore(i,n._root);i=o}}function N(e,t,n){$(e,"each");var r=typeof k(e,"no-reorder")!==a||$(e,"no-reorder"),i=q(e),f=o[i]||{tmpl:e.outerHTML},u=p.test(i),s=e.parentNode,c=document.createTextNode(""),l=H(e),d=/^option$/i.test(i),g=[],h=[],m,N=e.tagName=="VIRTUAL";n=v.loopKeys(n);s.insertBefore(c,e);t.one("before-mount",function(){e.parentNode.removeChild(e);if(s.stub)s=t.root}).on("update",function(){var a=v(n.val,t),p=document.createDocumentFragment();if(!V(a)){m=a||false;a=m?Object.keys(a).map(function(e){return y(n,e,a[e])}):[]}a.forEach(function(a,c){var d=r&&a instanceof Object,v=h.indexOf(a),b=~v&&d?v:c,C=g[b];a=!m&&n.key?y(n,a,c):a;if(!d&&!C||d&&!~v||!C){C=new S(f,{parent:t,isLoop:true,hasImpl:!!o[i],root:u?s:e.cloneNode(),item:a},e.innerHTML);C.mount();if(N)C._root=C.root.firstChild;if(c==g.length){if(N)w(C,p);else p.appendChild(C.root)}else{if(N)w(C,s,g[c]);else s.insertBefore(C.root,g[c].root);h.splice(c,0,a)}g.splice(c,0,C);b=c}else C.update(a);if(b!==c&&d){if(N)_(C,s,g[c],e.childNodes.length);else s.insertBefore(C.root,g[c].root);if(n.pos)C[n.pos]=c;g.splice(c,0,g.splice(b,1)[0]);h.splice(c,0,h.splice(b,1)[0]);if(!l&&C.tags)x(C,c)}C._item=a;D(C,"_parent",t)});b(a,g);if(d)s.appendChild(p);else s.insertBefore(p,c);if(l)t.tags[i]=g;h=a.slice()})}var C=function(t){if(!e)return{add:function(){},inject:function(){}};var n=function(){var e=Y("style");I(e,"type","text/css");var t=ee("style[type=riot]");if(t){if(t.id)e.id=t.id;t.parentNode.replaceChild(e,t)}else document.getElementsByTagName("head")[0].appendChild(e);return e}();var r=n.styleSheet,i="";Object.defineProperty(t,"styleNode",{value:n,writable:true});return{add:function(e){i+=e},inject:function(){if(i){if(r)r.cssText+=i;else n.innerHTML+=i;i=""}}}}(n);function E(e,t,n,r){G(e,function(e){if(e.nodeType==1){e.isLoop=e.isLoop||(e.parentNode&&e.parentNode.isLoop||k(e,"each"))?1:0;if(n){var i=H(e);if(i&&!e.isLoop)n.push(P(i,{root:e,parent:t},e.innerHTML,t))}if(!e.isLoop||r)re(e,t,[])}})}function L(e,t,n){function r(e,t,r){if(v.hasExpr(t)){n.push(z({dom:e,expr:t},r))}}G(e,function(e){var n=e.nodeType,i;if(n==3&&e.parentNode.tagName!="STYLE")r(e,e.nodeValue);if(n!=1)return;i=k(e,"each");if(i){N(e,t,i);return false}A(e.attributes,function(t){var n=t.name,i=n.split("__")[1];r(e,t.value,{attr:i||n,bool:i});if(i){$(e,n);return false}});if(H(e))return false})}function S(e,o,f){var u=n.observable(this),l=te(o.opts)||{},p=o.parent,g=o.isLoop,h=o.hasImpl,y=Q(o.item),b=[],x=[],w=o.root,_=e.fn,N=w.tagName.toLowerCase(),C={},S=[],T;if(_&&w._tag)w._tag.unmount(true);this.isMounted=false;w.isLoop=g;w._tag=this;D(this,"_riot_id",++r);z(this,{parent:p,root:w,opts:l,tags:{}},y);A(w.attributes,function(e){var t=e.value;if(v.hasExpr(t))C[e.name]=t});T=m(e.tmpl,f);function M(){var e=h&&g?u:p||u;A(w.attributes,function(t){var n=t.value;l[j(t.name)]=v.hasExpr(n)?v(n,e):n});A(Object.keys(C),function(t){l[j(t)]=v(C[t],e)})}function k(e){for(var t in y){if(typeof u[t]!==c&&Z(u,t))u[t]=e[t]}}function H(){if(!u.parent||!g)return;A(Object.keys(u.parent),function(e){var t=!U(d,e)&&U(S,e);if(typeof u[e]===c||t){if(!t)S.push(e);u[e]=u.parent[e]}})}D(this,"update",function(e){e=Q(e);H();if(e&&typeof y===s){k(e);y=e}z(u,e);M();u.trigger("update",e);O(b,u);oe(function(){u.trigger("updated")});return this});D(this,"mixin",function(){A(arguments,function(e){var t;e=typeof e===a?n.mixin(e):e;if(R(e)){t=new e;e=e.prototype}else t=e;A(Object.getOwnPropertyNames(e),function(e){if(e!="init")u[e]=R(t[e])?t[e].bind(u):t[e]});if(t.init)t.init.bind(u)()});return this});D(this,"mount",function(){M();if(_)_.call(u,l);L(T,u,b);F(true);if(e.attrs||h){W(e.attrs,function(e,t){I(w,e,t)});L(u.root,u,b)}if(!u.parent||g)u.update(y);u.trigger("before-mount");if(g&&!h){u.root=w=T.firstChild}else{while(T.firstChild)w.appendChild(T.firstChild);if(w.stub)u.root=w=p.root}if(g)E(u.root,u.parent,null,true);if(!u.parent||u.parent.isMounted){u.isMounted=true;u.trigger("mount")}else u.parent.one("mount",function(){if(!X(u.root)){u.parent.isMounted=u.isMounted=true;u.trigger("mount")}})});D(this,"unmount",function(e){var n=w,r=n.parentNode,o,f=i.indexOf(u);u.trigger("before-unmount");if(~f)i.splice(f,1);if(this._virts){A(this._virts,function(e){if(e.parentNode)e.parentNode.removeChild(e)})}if(r){if(p){o=K(p);if(V(o.tags[N]))A(o.tags[N],function(e,t){if(e._riot_id==u._riot_id)o.tags[N].splice(t,1)});else o.tags[N]=t}else while(n.firstChild)n.removeChild(n.firstChild);if(!e)r.removeChild(n);else $(r,"riot-tag")}u.trigger("unmount");F();u.off("*");u.isMounted=false;delete w._tag});function F(e){A(x,function(t){t[e?"mount":"unmount"]()});if(!p)return;var t=e?"on":"off";if(g)p[t]("unmount",u.unmount);else p[t]("update",u.update)[t]("unmount",u.unmount)}E(T,this,x)}function T(t,n,r,i){r[t]=function(t){var o=i._parent,f=i._item,u;if(!f)while(o&&!f){f=o._item;o=o._parent}t=t||e.event;if(Z(t,"currentTarget"))t.currentTarget=r;if(Z(t,"target"))t.target=t.srcElement;if(Z(t,"which"))t.which=t.charCode||t.keyCode;t.item=f;if(n.call(i,t)!==true&&!/radio|check/.test(r.type)){if(t.preventDefault)t.preventDefault();t.returnValue=false}if(!t.preventUpdate){u=f?K(o):i;u.update()}}}function M(e,t,n){if(!e)return;e.insertBefore(n,t);e.removeChild(t)}function O(e,t){A(e,function(e,n){var r=e.dom,i=e.attr,o=v(e.expr,t),a=e.dom.parentNode;if(e.bool)o=o?i:false;else if(o==null)o="";if(a&&a.tagName=="TEXTAREA"){o=(""+o).replace(/riot-/g,"");a.value=o}if(e.value===o)return;e.value=o;if(!i){r.nodeValue=""+o;return}$(r,i);if(R(o)){T(i,o,r,t)}else if(i=="if"){var c=e.stub,l=function(){M(c.parentNode,c,r)},p=function(){M(r.parentNode,r,c)};if(o){if(c){l();r.inStub=false;if(!X(r)){G(r,function(e){if(e._tag&&!e._tag.isMounted)e._tag.isMounted=!!e._tag.trigger("mount")})}}}else{c=e.stub=c||document.createTextNode("");if(r.parentNode)p();else(t.parent||t).one("updated",p);r.inStub=true}}else if(/^(show|hide)$/.test(i)){if(i=="hide")o=!o;r.style.display=o?"":"none"}else if(i=="value"){r.value=o}else if(ie(i,f)&&i!=u){if(o)I(r,i.slice(f.length),o)}else{if(e.bool){r[i]=o;if(!o)return}if(o===0||o&&typeof o!==s)I(r,i,o)}})}function A(e,t){var n=e?e.length:0;for(var r=0,i;r<n;r++){i=e[r];if(i!=null&&t(i,r)===false)r--}return e}function R(e){return typeof e===l||false}function $(e,t){e.removeAttribute(t)}function j(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})}function k(e,t){return e.getAttribute(t)}function I(e,t,n){e.setAttribute(t,n)}function H(e){return e.tagName&&o[k(e,u)||e.tagName.toLowerCase()]}function F(e,t,n){var r=n.tags[t];if(r){if(!V(r))if(r!==e)n.tags[t]=[r];if(!U(n.tags[t],e))n.tags[t].push(e)}else{n.tags[t]=e}}function B(e,t,n){var r=e.parent,i;if(!r)return;i=r.tags[t];if(V(i))i.splice(n,0,i.splice(i.indexOf(e),1)[0]);else F(e,t,r)}function P(e,t,n,r){var i=new S(e,t,n),o=q(t.root),f=K(r);i.parent=f;i._parent=r;F(i,o,f);if(f!==r)F(i,o,r);t.root.innerHTML="";return i}function K(e){var t=e;while(!H(t.root)){if(!t.parent)break;t=t.parent}return t}function D(e,t,n,r){Object.defineProperty(e,t,z({value:n,enumerable:false,writable:false,configurable:false},r));return e}function q(e){var t=H(e),n=k(e,"name"),r=n&&!v.hasExpr(n)?n:t?t.name:e.tagName.toLowerCase();return r}function z(e){var t,n=arguments;for(var r=1;r<n.length;++r){if(t=n[r]){for(var i in t){if(Z(e,i))e[i]=t[i]}}}return e}function U(e,t){return~e.indexOf(t)}function V(e){return Array.isArray(e)||e instanceof Array}function Z(e,t){var n=Object.getOwnPropertyDescriptor(e,t);return typeof e[t]===c||n&&n.writable}function Q(e){if(!(e instanceof S)&&!(e&&typeof e.trigger==l))return e;var t={};for(var n in e){if(!U(d,n))t[n]=e[n]}return t}function G(e,t){if(e){if(t(e)===false)return;else{e=e.firstChild;while(e){G(e,t);e=e.nextSibling}}}}function W(e,t){var n,r=/([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;while(n=r.exec(e)){t(n[1].toLowerCase(),n[2]||n[3]||n[4])}}function X(e){while(e){if(e.inStub)return true;e=e.parentNode}return false}function Y(e){return document.createElement(e)}function J(e,t){return(t||document).querySelectorAll(e)}function ee(e,t){return(t||document).querySelector(e)}function te(e){function t(){}t.prototype=e;return new t}function ne(e){return k(e,"id")||k(e,"name")}function re(e,t,n){var r=ne(e),i,o=function(o){if(U(n,r))return;i=V(o);if(!o)t[r]=e;else if(!i||i&&!U(o,e)){if(i)o.push(e);else t[r]=[o,e]}};if(!r)return;if(v.hasExpr(r))t.one("mount",function(){r=ne(e);o(t[r])});else o(t[r])}function ie(e,t){return e.slice(0,t.length)===t}var oe=function(e){var t=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame;if(!t||/iP(ad|hone|od).*OS 6/.test(e.navigator.userAgent)){var n=0;t=function(e){var t=Date.now(),r=Math.max(16-(t-n),0);setTimeout(function(){e(n=t+r)},r)}}return t}(e||{});function fe(e,t,n){var r=o[t],f=e._innerHTML=e._innerHTML||e.innerHTML;e.innerHTML="";if(r&&e)r=new S(r,{root:e,opts:n},f);if(r&&r.mount){r.mount();if(!U(i,r))i.push(r)}return r}n.util={brackets:h,tmpl:v};n.mixin=function(){var e={};return function(t,n){if(!n)return e[t];e[t]=n}}();n.tag=function(e,t,n,r,i){if(R(r)){i=r;if(/^[\w\-]+\s?=/.test(n)){r=n;n=""}else r=""}if(n){if(R(n))i=n;else C.add(n)}o[e]={name:e,tmpl:t,attrs:r,fn:i};return e};n.tag2=function(e,t,n,r,i,f){if(n)C.add(n);o[e]={name:e,tmpl:t,attrs:r,fn:i};return e};n.mount=function(e,t,n){var r,i,f=[];function c(e){var t="";A(e,function(e){if(!/[^-\w]/.test(e))t+=",*["+u+"="+e.trim()+"]"});return t}function l(){var e=Object.keys(o);return e+c(e)}function p(e){var r;if(e.tagName){if(t&&(!(r=k(e,u))||r!=t))I(e,u,t);var i=fe(e,t||e.getAttribute(u)||e.tagName.toLowerCase(),n);if(i)f.push(i)}else if(e.length)A(e,p)}C.inject();if(typeof t===s){n=t;t=0}if(typeof e===a){if(e==="*")e=i=l();else e+=c(e.split(","));r=e?J(e):[]}else r=e;if(t==="*"){t=i||l();if(r.tagName)r=J(t,r);else{var d=[];A(r,function(e){d.push(J(t,e))});r=d}t=0}if(r.tagName)p(r);else A(r,p);return f};n.update=function(){return A(i,function(e){e.update()})};n.Tag=S;if(typeof exports===s)module.exports=n;else if(typeof define===l&&typeof define.amd!==c)define(function(){return n});else e.riot=n})(typeof window!="undefined"?window:void 0);

// @codekit-prepend "coffee/css3Prefix"
// @codekit-prepend "../../libs/js/min/riot.min.js"
// @codekit-prepend "../js/ctrl.js"

// http://api.giccoo.com/sayno/corona
_CDN = "";

_imgurl = "";

global = {};

main = {};

pre = {};

load = {};

post_url = "http://api.giccoo.com/df5008/insert/";

sys = "other";

noteText = "长按识别二维码，\n去往2018年的远方。";

name_list = ["心之所向\n即为吾乡", "淡泊明志\n宁静致远", "愿得浮生\n半日闲", "一屋两人\n三餐四季"];

music_list = [
  {
    name: "平凡之路",
    desc: "朴树",
    src: "http://music.163.com/#/song?id=28815250"
  },
  {
    name: "咖喱咖喱",
    desc: "牛奶咖啡",
    src: "http://music.163.com/#/song?id=476987525"
  },
  {
    name: "边走边喝",
    desc: "黄磊",
    src: "http://music.163.com/#/song?id=92613"
  },
  {
    name: "微笑的仙人掌",
    desc: "彭靖惠",
    src: "http://music.163.com/#/song?id=280668"
  },
  {
    name: "Friends",
    desc: "彭靖惠",
    src: "http://music.163.com/#/song?id=280684"
  },
  {
    name: "国境之南",
    desc: "范逸臣",
    src: "http://music.163.com/#/song?id=4873061"
  },
  {
    name: "下一站，幸福",
    desc: "彭靖惠",
    src: "http://music.163.com/#/song?id=280649"
  },
  {
    name: "环游世界",
    desc: "小旺福",
    src: "http://music.163.com/#/song?id=385640"
  },
  {
    name: "爱是有故事的旅行",
    desc: "李泉",
    src: "http://music.163.com/#/song?id=111801"
  },
  {
    name: "Taipei City，台北城市",
    desc: "陈奕迅",
    src: "http://music.163.com/#/song?id=67829"
  }
];

topic_list = ["点击留下自己的\n心境感悟"];

getRandom = function(length) {
  return parseInt(Math.random() * (length + 1) - 1);
};

window.onload = function() {
  // runAnimate()
  if (window.navigator.userAgent.indexOf("NeteaseMusic") > -1) {
    sys = "NeteaseMusic";
  } else {
    // stopWebViewScroll()
    loadWechatConfig();
    wx.ready(function() {
      var shareContent;
      shareContent = {
        title: "东风-5008",
        desc: " ",
        link: "http://m.giccoo.com/df-5008/",
        imgUrl: "http://m.giccoo.com/df-5008/img/ico.jpg",
        success: function() {},
        // alert "success"
        cancel: function() {}
      };
      // alert "cancel"
      wx.onMenuShareTimeline(shareContent);
      wx.onMenuShareAppMessage(shareContent);
      wx.onMenuShareQQ(shareContent);
      return wx.onMenuShareWeibo(shareContent);
    });
  }
  return init();
};

init = function() {
  return main = new Vue({
    el: "#main",
    data: {
      mount: false,
      loading: false,
      homepageShow: true,
      lastpage: false,
      buildshow: false,
      buildstep: 1,
      buildover: false,
      topic: topic_list[0],
      musicData: {},
      creatEnd: false,
      ugcsrc: null,
      ugc: false,
      qrsrc: null,
      qr: false,
      cacheArea: "",
      musicIndex: 0,
      contentIndex: 0,
      playing: false,
      wechatshare: false,
      audioSRC: music_list[0].src,
      form: {
        username: "",
        mobile: ""
      }
    },
    computed: {
      musicname: function() {
        return music_list[this.musicIndex].name;
      },
      musicdesc: function() {
        return music_list[this.musicIndex].desc;
      }
    },
    methods: {
      start: function() {
        this.buildshow = true;
        return this.homepageShow = false;
      },
      gobuild: function() {
        var len1, m, texts;
        if (this.topic === topic_list[0]) {
          return alert("请输入您自己的心境感悟");
        } else if (this.topic.split("\n").length > 2) {
          return alert("请控制您丰富的感情在 2 行以内的文字.");
        } else if (this.topic.length <= 0) {
          return alert("请输入您自己的心境感悟");
        } else {
          texts = this.topic.split("\n");
          for (m = 0, len1 = texts.length; m < len1; m++) {
            i = texts[m];
            console.log(i.replace(/[^\x00-\xff]/g, "01").length);
            if (i.replace(/[^\x00-\xff]/g, "01").length > 40) {
              return alert("请控制您丰富的感情当行文字不能超过20个中文字符以内");
            }
          }
        }
        return this.buildstep = 2;
      },
      selectContent: function(evt, index) {
        // console.log evt,index
        return this.contentIndex = parseInt(index);
      },
      musicSelectPrev: function() {
        this.musicIndex += -1;
        if (this.musicIndex <= 0) {
          this.musicIndex = 0;
          return false;
        }
        return this.play();
      },
      musicSelectNext: function() {
        this.musicIndex += 1;
        if (this.musicIndex > (music_list.length - 1)) {
          this.musicIndex = music_list.length - 1;
          return false;
        }
        return this.play();
      },
      play: function() {
        this.audioSRC = music_list[this.musicIndex].src;
        document.getElementById("audio-music").addEventListener("play", this.changPlay.bind(this));
        document.getElementById("audio-music").addEventListener("pause", this.changEnd.bind(this));
        document.getElementById("audio-music").addEventListener("end", this.changEnd.bind(this));
        return document.getElementById("audio-music").play();
      },
      changPlay: function() {
        return this.playing = true;
      },
      changEnd: function() {
        return this.playing = false;
      },
      pause: function() {
        return document.getElementById("audio-music").pause();
      },
      buildimage: function() {
        var bg, canvas, ctx, self, writeText;
        if (this.contentIndex < 1 || this.contentIndex > 4) {
          return alert("请选择意愿场景");
        }
        // create canvas
        self = this;
        canvas = document.getElementById("result");
        canvas.width = 640;
        canvas.height = 1138;
        // canvas.className = "topall"
        ctx = canvas.getContext("2d");
        this.buildover = true;
        bg = new Image();
        // bg.onload = (evt)->
        // 	ctx.drawImage(bg, 0, 0, bg.width, bg.height)
        //		writeText()
        // bg.src = "./img/create-bg.jpg"
        writeText = function() {
          var qr;
          ctx.fillStyle = "#fff";
          ctx.textAlign = 'center';
          ctx.font = "56px '微软雅黑'";
          ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
          ctx.shadowBlur = 2;
          runLongTexts(name_list[self.contentIndex - 1], ctx, 320, 370);
          ctx.fillStyle = "#fff";
          ctx.textAlign = 'center';
          ctx.font = "30px '微软雅黑'";
          runLongTexts(self.topic, ctx, 320, 160);
          ctx.font = "30px '微软雅黑' bold";
          ctx.fillText(self.musicname, 320, 960);
          ctx.font = "24px '微软雅黑'";
          ctx.fillText(self.musicdesc, 320, 1000);
          
          // self.onUpload canvas.toDataURL("image/png")
          self.ugc = true;
          self.ugcsrc = canvas.toDataURL("image/png");
          // add logo
          // main.creatEnd = true
          qr = new Image();
          qr.onload = function() {
            ctx.textAlign = 'left';
            ctx.font = "20px '微软雅黑'";
            runLongTexts(noteText, ctx, 100, 1138 - 60);
            ctx.drawImage(qr, 10, 1138 - 80 - 10, 80, 80);
            self.qr = true;
            return self.qrsrc = canvas.toDataURL("image/png");
          };
          return qr.src = "./img/qrcode.png";
        };
        writeText();
        this.buildshow = false;
        this.buildstep = 1;
        this.buildover = true;
        return this.lastpage = true;
      },
      share: function() {
        if (sys === "NeteaseMusic") {
          return neteaseShare();
        } else {
          return this.wechatshare = true;
        }
      },
      closeshare: function() {
        return this.wechatshare = false;
      },
      focusArea: function(evt) {
        if (topic_list.indexOf(this.topic) > -1) {
          this.cacheArea = this.topic + "";
          return this.topic = "";
        }
      },
      blurArea: function(evt) {
        if (this.topic === "") {
          return this.topic = this.cacheArea;
        }
      },
      onSubmit: function(evt) {
        var data, k, ref, reg, url, v;
        if (this.form.username.length < 1) {
          alert('姓名不能为空');
          return false;
        }
        if (this.form.mobile.length < 1) {
          alert('电话不能为空');
          return false;
        }
        reg = /^1\d{10}$/;
        if (!reg.test(this.form.mobile)) {
          alert('电话格式不正确');
          return false;
        }
        url = post_url;
        data = {};
        ref = this.form;
        // add content
        for (k in ref) {
          v = ref[k];
          data[k] = v;
        }
        data['content'] = main.topic;
        data['music'] = music_list[main.musicIndex].name;
        return axios.post(url, data).then(function(msg) {
          if (msg.data.recode === 200) {
            alert("参与成功");
            return main.lastpage = false;
          } else {
            return alert(msg.data.reason);
          }
        });
      }
    },
    mounted: function() {
      return this.mount = true;
    }
  });
};

// canvas 轮训文字
runLongTexts = function(texts, ctx, x, y) {
  var all, list, text;
  all = texts.split('\n');
  if (texts.length > 0) {
    text = all[0];
    ctx.fillText(text.replace(' (可编辑)', ""), x, y);
    list = texts.replace(text + "\n", "");
    list = list.replace(text, "");
    y += parseInt(ctx.font) * 1.4;
    return runLongTexts(list, ctx, x, y);
  }
};

// 修改分享内容
updateShare = function(msg) {
  var id, imgUrl, shareContent;
  imgUrl = `http://image.giccoo.com/sayno/corona/${msg.filename}@!large`;
  if ((msg.info.insertId != null) && msg.info.insertId > 0) {
    id = "?id=" + msg.info.insertId;
  } else {
    id = "";
  }
  if (sys === "NeteaseMusic") {
    return _imgurl = imgUrl;
  } else {
    // neteaseShare id,imgUrl
    // img = new Image()
    // img.onload = ->
    // 	neteaseShare id,imgUrl
    // img.src = imgUrl
    main.shareNote = true;
    shareContent = {
      title: "有没有那么一首歌，让你想起……",
      desc: "",
      link: "http://m.giccoo.com/corona/" + id,
      imgUrl: "http://m.giccoo.com/corona/img/ico.jpg",
      success: function() {
        // alert "success"
        main.shareNote = false;
        return main.showaward(500);
      },
      cancel: function() {}
    };
    // alert "cancel"
    wx.onMenuShareTimeline(shareContent);
    wx.onMenuShareAppMessage(shareContent);
    wx.onMenuShareQQ(shareContent);
    return wx.onMenuShareWeibo(shareContent);
  }
};

neteaseShare = function() {
  var picUrl, redirectUrl, subTitle2, title1, title2;
  title1 = "有没有那么一首歌，让你想起……";
  picUrl = "http://m.giccoo.com/corona/img/ico.jpg";
  redirectUrl = "http://m.giccoo.com/df-5008/";
  title2 = "有没有那么一首歌，让你想起……";
  subTitle2 = "有没有那么一首歌，让你想起……";
  window.location.href = "orpheus://share/" + encodeURIComponent(title1) + "/" + encodeURIComponent(picUrl) + "/" + encodeURIComponent(redirectUrl) + "/" + encodeURIComponent(title2) + "/" + encodeURIComponent(subTitle2);
  // window.location.href = "orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
  return console.log("run after?");
};

loadWechatConfig = function() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "http://api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};

$_GET = (function() {
  var get, j, len1, m, u, url;
  url = window.document.location.href.toString();
  u = url.split('?');
  if (typeof u[1] === 'string') {
    u = u[1].split('&');
    get = {};
    console.log(u);
    for (m = 0, len1 = u.length; m < len1; m++) {
      i = u[m];
      j = i.split('=');
      get[j[0]] = j[1];
    }
    return get;
  } else {
    return {};
  }
})();

stopWebViewScroll = function() {
  var el, len1, m, overscroll, ref, results;
  overscroll = function(el) {
    el.addEventListener('touchstart', function() {
      var currentScroll, top, totalScroll;
      top = el.scrollTop;
      totalScroll = el.scrollHeight;
      currentScroll = top + el.offsetHeight;
      if (top === 0) {
        return el.scrollTop = 1;
      } else if (currentScroll === totalScroll) {
        return el.scrollTop = top - 1;
      }
    });
    // alert el.scrollTop
    return el.addEventListener("touchmove", function(evt) {
      if (el.offsetHeight < el.scrollHeight) {
        return evt._isScroller = true;
      }
    });
  };
  document.addEventListener("touchmove", function(evt) {
    if (!evt._isScroller) {
      return evt.preventDefault();
    }
  });
  ref = document.querySelectorAll(".touch");
  // console.log document.querySelectorAll(".touch")
  results = [];
  for (m = 0, len1 = ref.length; m < len1; m++) {
    el = ref[m];
    results.push(overscroll(el));
  }
  return results;
};
