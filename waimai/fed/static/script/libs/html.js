define(["text"],function(e){var r={};return{load:function(n,t,s,i){var a=this,c=n,l=c.split("/");-1==l[l.length-1].lastIndexOf(".")&&(c+=".html"),e.get(t.toUrl(c),function(t){for(var c in i.config.html)c in a.transform&&(t=a.transform[c](i.config.html[c],t));i.isBuild&&(r[n]=e.jsEscape(t)),s(t)},s.error)},write:function(e,n,t){if(r.hasOwnProperty(n)){var s="'"+e+"!"+n+"'",i="function () {return '"+r[n]+"';}";t("define("+s+", "+i+");\n")}},transform:{comments:function(e,r){return"strip"===e?r.replace(/<!--(.|[\n\r])*?-->/gm,""):r
},whitespaceBetweenTags:function(e,r){var n=/>[\n\r\s]+</gm;return"strip"===e?r.replace(n,"><"):"collapse"===e?r.replace(n,"> <"):r},whitespaceBetweenTagsAndText:function(e,r){var n=/>[\n\r\s]+/gm,t=/[\n\r\s]+</gm;return"strip"===e?r.replace(n,">").replace(t,"<"):"collapse"===e?r.replace(n,"> ").replace(t," <"):r},whitespaceWithinTags:function(e,r){if("collapse"===e){for(var n,t,s=/<([^>"']*?|"[^"]*?"|'[^']*?')+>/g,i=/([^\0\n\r\s"'>\/=]+)(?:\s*(=)\s*([^\n\r\s"'=><`]+|"[^"]*"|'[^']*'))?/gi,a=0,c="";null!==(n=s.exec(r));){if(c+=r.substring(a,n.index),t=n[0],/^<[^\/]/.test(t)){var l=t.match(i),o=l.shift(),f=/\/>$/.test(t)?"/>":">";
c+=o+l.map(function(e){return e.replace(i," $1$2$3")}).join("")+f}else c+=t.replace(/[\n\r\s]+/g,"");a=s.lastIndex}return c+r.substring(a)}return r}}}});