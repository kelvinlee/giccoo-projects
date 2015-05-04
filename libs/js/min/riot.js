(function(e){var t={version:"v2.0.15",settings:{}},n=h();t.observable=function(e){e=e||{};var t={},n=0;e.on=function(i,r){if(typeof r=="function"){r._id=typeof r._id=="undefined"?n++:r._id;i.replace(/\S+/g,function(e,n){(t[e]=t[e]||[]).push(r);r.typed=n>0})}return e};e.off=function(n,i){if(n=="*")t={};else{n.replace(/\S+/g,function(e){if(i){var n=t[e];for(var r=0,o;o=n&&n[r];++r){if(o._id==i._id){n.splice(r,1);r--}}}else{t[e]=[]}})}return e};e.one=function(t,n){function i(){e.off(t,i);n.apply(e,arguments)}return e.on(t,i)};e.trigger=function(n){var i=[].slice.call(arguments,1),r=t[n]||[];for(var o=0,u;u=r[o];++o){if(!u.busy){u.busy=1;u.apply(e,u.typed?[n].concat(i):i);if(r[o]!==u){o--}u.busy=0}}if(t.all&&n!="all"){e.trigger.apply(e,["all",n].concat(i))}return e};return e};(function(e,t,n){if(!n)return;var i=n.location,r=e.observable(),o=n,u=false,f;function a(){return i.href.split("#")[1]||""}function c(e){return e.split("/")}function l(e){if(e.type)e=a();if(e!=f){r.trigger.apply(null,["H"].concat(c(e)));f=e}}var s=e.route=function(e){if(e[0]){i.hash=e;l(e)}else{r.on("H",e)}};s.exec=function(e){e.apply(null,c(a()))};s.parser=function(e){c=e};s.stop=function(){if(!u)return;o.removeEventListener?o.removeEventListener(t,l,false):o.detachEvent("on"+t,l);r.off("*");u=false};s.start=function(){if(u)return;o.addEventListener?o.addEventListener(t,l,false):o.attachEvent("on"+t,l);u=true};s.start()})(t,"hashchange",e);var i=function(e,n,i){return function(r){n=t.settings.brackets||e;if(i!=n)i=n.split(" ");return r&&r.test?n==e?r:RegExp(r.source.replace(/\{/g,i[0].replace(/(?=.)/g,"\\")).replace(/\}/g,i[1].replace(/(?=.)/g,"\\")),r.global?"g":""):i[r]}}("{ }");var r=function(){var t={},n=/(['"\/]).*?[^\\]\1|\.\w*|\w*:|\b(?:(?:new|typeof|in|instanceof) |(?:this|true|false|null|undefined)\b|function *\()|([a-z_$]\w*)/gi;return function(e,n){return e&&(t[e]=t[e]||r(e))(n)};function r(e,t){e=(e||i(0)+i(1)).replace(i(/\\{/g),"￰").replace(i(/\\}/g),"￱");t=f(e,a(e,i(/{/),i(/}/)));return new Function("d","return "+(!t[0]&&!t[2]&&!t[3]?o(t[1]):"["+t.map(function(e,t){return t%2?o(e,true):'"'+e.replace(/\n/g,"\\n").replace(/"/g,'\\"')+'"'}).join(",")+'].join("")').replace(/\uFFF0/g,i(0)).replace(/\uFFF1/g,i(1))+";")}function o(e,t){e=e.replace(/\n/g," ").replace(i(/^[{ ]+|[ }]+$|\/\*.+?\*\//g),"");return/^\s*[\w- "']+ *:/.test(e)?"["+a(e,/["' ]*[\w- ]+["' ]*:/,/,(?=["' ]*[\w- ]+["' ]*:)|}|$/).map(function(e){return e.replace(/^[ "']*(.+?)[ "']*: *(.+?),? *$/,function(e,t,n){return n.replace(/[^&|=!><]+/g,u)+'?"'+t+'":"",'})}).join("")+'].join(" ").trim()':u(e,t)}function u(t,i){t=t.trim();return!t?"":"(function(v){try{v="+(t.replace(n,function(t,n,i){return i?"(d."+i+"===undefined?"+(typeof e=="undefined"?"global.":"window.")+i+":d."+i+")":t})||"x")+"}finally{return "+(i===true?'!v&&v!==0?"":v':"v")+"}}).call(d)"}function f(e,t){var n=[];t.map(function(t,i){i=e.indexOf(t);n.push(e.slice(0,i),t);e=e.slice(i+t.length)});return n.concat(e)}function a(e,t,n){var i,r=0,o=[],u=new RegExp("("+t.source+")|("+n.source+")","g");e.replace(u,function(t,n,u,f){if(!r&&n)i=f;r+=n?1:-1;if(!r&&u!=null)o.push(e.slice(i,f+u.length))});return o}}();function o(e){var t={val:e},n=e.split(/\s+in\s+/);if(n[1]){t.val=i(0)+n[1];n=n[0].slice(i(0).length).trim().split(/,\s*/);t.key=n[0];t.pos=n[1]}return t}function u(e,t,n){var i={};i[e.key]=t;if(e.pos)i[e.pos]=n;return i}function f(e,t,n){v(e,"each");var i=e.outerHTML,f=e.previousSibling,a=e.parentNode,c=[],s=[],p;n=o(n);function d(e,t,n){c.splice(e,0,t);s.splice(e,0,n)}t.one("update",function(){a.removeChild(e)}).one("premount",function(){if(a.stub)a=t.root}).on("update",function(){var e=r(n.val,t);if(!e)return;if(!Array.isArray(e)){var o=JSON.stringify(e);if(o==p)return;p=o;g(s,function(e){e.unmount()});c=[];s=[];e=Object.keys(e).map(function(t){return u(n,t,e[t])})}g(c,function(t){if(t instanceof Object){if(e.indexOf(t)>-1){return}}else{var n=T(e,t),i=T(c,t);if(n.length>=i.length){return}}var r=c.indexOf(t),o=s[r];if(o){o.unmount();c.splice(r,1);s.splice(r,1);return false}});var v=[].indexOf.call(a.childNodes,f)+1;g(e,function(r,o){var f=e.indexOf(r,o),g=c.indexOf(r,o);f<0&&(f=e.lastIndexOf(r,o));g<0&&(g=c.lastIndexOf(r,o));if(!(r instanceof Object)){var m=T(e,r),h=T(c,r);if(m.length>h.length){g=-1}}var b=a.childNodes;if(g<0){if(!p&&n.key)var y=u(n,r,f);var w=new l({tmpl:i},{before:b[v+f],parent:t,root:a,item:y||r});w.mount();d(f,r,w);return true}if(n.pos&&s[g][n.pos]!=f){s[g].one("update",function(e){e[n.pos]=f});s[g].update()}if(f!=g){a.insertBefore(b[v+g],b[v+(f>g?f+1:f)]);return d(f,c.splice(g,1)[0],s.splice(g,1)[0])}});c=e.slice()})}function a(e,t,n){w(e,function(e){if(e.nodeType==1){if(e.parentNode&&e.parentNode.isLoop)e.isLoop=1;if(e.getAttribute("each"))e.isLoop=1;var i=E(e);if(i&&!e.isLoop){var r=new l(i,{root:e,parent:t},e.innerHTML),o=i.name,u=t,f;while(!E(u.root)){if(!u.parent)break;u=u.parent}r.parent=u;f=u.tags[o];if(f){if(!Array.isArray(f))u.tags[o]=[f];u.tags[o].push(r)}else{u.tags[o]=r}e.innerHTML="";n.push(r)}g(e.attributes,function(n){if(/^(name|id)$/.test(n.name))t[n.value]=e})}})}function c(e,t,n){function r(e,t,r){if(t.indexOf(i(0))>=0){var o={dom:e,expr:t};n.push(m(o,r))}}w(e,function(e){var n=e.nodeType;if(n==3&&e.parentNode.tagName!="STYLE")r(e,e.nodeValue);if(n!=1)return;var i=e.getAttribute("each");if(i){f(e,t,i);return false}g(e.attributes,function(t){var n=t.name,i=n.split("__")[1];r(e,t.value,{attr:i||n,bool:i});if(i){v(e,n);return false}});if(E(e))return false})}function l(e,n,i){var o=t.observable(this),u=C(n.opts)||{},f=y(e.tmpl),l=n.parent,s=[],p=[],v=n.root,h=n.item,b=e.fn,w=v.tagName.toLowerCase(),L={},O;if(b&&v._tag){v._tag.unmount(true)}v._tag=this;this._id=~~((new Date).getTime()*Math.random());m(this,{parent:l,root:v,opts:u,tags:{}},h);g(v.attributes,function(e){L[e.name]=e.value});if(f.innerHTML&&!/select/.test(w))f.innerHTML=x(f.innerHTML,i);function T(){g(Object.keys(L),function(e){u[e]=r(L[e],l||o)})}this.update=function(e,t){m(o,e,h);T();o.trigger("update",h);d(s,o,h);o.trigger("updated")};this.mount=function(){T();b&&b.call(o,u);N(true);c(f,o,s);if(!o.parent)o.update();o.trigger("premount");if(b){while(f.firstChild)v.appendChild(f.firstChild)}else{O=f.firstChild;v.insertBefore(O,n.before||null)}if(v.stub)o.root=v=l.root;o.trigger("mount")};this.unmount=function(e){var t=b?v:O,n=t.parentNode;if(n){if(l){if(Array.isArray(l.tags[w])){g(l.tags[w],function(e,t){if(e._id==o._id)l.tags[w].splice(t,1)})}else delete l.tags[w]}else{while(t.firstChild)t.removeChild(t.firstChild)}if(!e)n.removeChild(t)}o.trigger("unmount");N();o.off("*");v._tag=null};function N(e){g(p,function(t){t[e?"mount":"unmount"]()});if(l){var t=e?"on":"off";l[t]("update",o.update)[t]("unmount",o.unmount)}}a(f,this,p)}function s(t,n,i,r,o){i[t]=function(t){t=t||e.event;t.which=t.which||t.charCode||t.keyCode;t.target=t.target||t.srcElement;t.currentTarget=i;t.item=o;if(n.call(r,t)!==true&&!/radio|check/.test(i.type)){t.preventDefault&&t.preventDefault();t.returnValue=false}var u=o?r.parent:r;u.update()}}function p(e,t,n){if(e){e.insertBefore(n,t);e.removeChild(t)}}function d(e,t,n){g(e,function(e,i){var o=e.dom,u=e.attr,f=r(e.expr,t),a=e.dom.parentNode;if(f==null)f="";if(a&&a.tagName=="TEXTAREA")f=f.replace(/riot-/g,"");if(e.value===f)return;e.value=f;if(!u)return o.nodeValue=f;v(o,u);if(typeof f=="function"){s(u,f,o,t,n)}else if(u=="if"){var c=e.stub;if(f){c&&p(c.parentNode,c,o)}else{c=e.stub=c||document.createTextNode("");p(o.parentNode,o,c)}}else if(/^(show|hide)$/.test(u)){if(u=="hide")f=!f;o.style.display=f?"":"none"}else if(u=="value"){o.value=f}else if(u.slice(0,5)=="riot-"){u=u.slice(5);f?o.setAttribute(u,f):v(o,u)}else{if(e.bool){o[u]=f;if(!f)return;f=u}if(typeof f!="object")o.setAttribute(u,f)}})}function g(e,t){for(var n=0,i=(e||[]).length,r;n<i;n++){r=e[n];if(r!=null&&t(r,n)===false)n--}return e}function v(e,t){e.removeAttribute(t)}function m(e,t,n){t&&g(Object.keys(t),function(n){e[n]=t[n]});return n?m(e,n):e}function h(){if(e){var t=navigator.userAgent;var n=t.indexOf("MSIE ");if(n>0){return parseInt(t.substring(n+5,t.indexOf(".",n)),10)}else{return 0}}}function b(e,t){var n=document.createElement("option"),i=/value=[\"'](.+?)[\"']/,r=/selected=[\"'](.+?)[\"']/,o=t.match(i),u=t.match(r);n.innerHTML=t;if(o){n.value=o[1]}if(u){n.setAttribute("riot-selected",u[1])}e.appendChild(n)}function y(e){var t=e.trim().slice(1,3).toLowerCase(),i=/td|th/.test(t)?"tr":t=="tr"?"tbody":"div",r=document.createElement(i);r.stub=true;if(t==="op"&&n&&n<10){b(r,e)}else{r.innerHTML=e}return r}function w(e,t){if(e){if(t(e)===false)w(e.nextSibling,t);else{e=e.firstChild;while(e){w(e,t);e=e.nextSibling}}}}function x(e,t){return e.replace(/<(yield)\/?>(<\/\1>)?/gim,t||"")}function L(e,t){t=t||document;return t.querySelectorAll(e)}function O(e,t){return e.filter(function(e){return t.indexOf(e)<0})}function T(e,t){return e.filter(function(e){return e===t})}function C(e){function t(){}t.prototype=e;return new t}var N=[],A={};function E(e){return A[e.getAttribute("riot-tag")||e.tagName.toLowerCase()]}function _(e){var t=document.createElement("style");t.innerHTML=e;document.head.appendChild(t)}function j(e,t,n){var i=A[t],r=e.innerHTML;e.innerHTML="";if(i&&e)i=new l(i,{root:e,opts:n},r);if(i&&i.mount){i.mount();N.push(i);return i.on("unmount",function(){N.splice(N.indexOf(i),1)})}}t.tag=function(e,t,n,i){if(typeof n=="function")i=n;else if(n)_(n);A[e]={name:e,tmpl:t,fn:i};return e};t.mount=function(e,t,n){var i,r=function(e){e=Object.keys(A).join(", ");e.split(",").map(function(t){e+=', *[riot-tag="'+t.trim()+'"]'});return e},o=[];if(typeof t=="object"){n=t;t=0}if(typeof e=="string"){if(e=="*"){e=r(e)}i=L(e)}else i=e;if(t=="*"){t=r(e);if(i.tagName){i=L(t,i)}else{var u=[];g(i,function(e){u=L(t,e)});i=u}t=0}function f(e){var i=t||e.getAttribute("riot-tag")||e.tagName.toLowerCase(),r=j(e,i,n);if(r)o.push(r)}if(i.tagName)f(e);else g(i,f);return o};t.update=function(){return g(N,function(e){e.update()})};t.mountTo=t.mount;t.util={brackets:i,tmpl:r};if(typeof exports==="object")module.exports=t;else if(typeof define==="function"&&define.amd)define(function(){return t});else e.riot=t})(typeof window!="undefined"?window:undefined);