define(function(){var e=Dom7,n=NmTemplate,r={loadTpl:function(n){var r=e("#"+n).html();return r},renderRemoteTpl:function(r,t,l){r=r||"",e.get("page/"+r+".tpl.html",function(e){var r=n.compile(e),o=r(t);l(o)})},renderTpl:function(e,r){var t=n.compile(e),l=t(r);return l},renderTplById:function(e,r){var t=this.loadTpl(e),l=n.compile(t),o=l(r);return o}};return r});