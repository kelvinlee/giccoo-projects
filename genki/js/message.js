"use strict";var apiLink,closeVideo,closelive,getDefaultMessages,getMessages,likeMessage,messageList,openInAPP,openLive,openLive1,openMusic,openVideo,sendMessage;apiLink="//g.giccoo.com/active/message",$(document).ready(function(){return console.log("loaded"),$(".pop .close").click(function(){return closelive()}),$("#popvideo .close").click(function(){return closeVideo()})}),closelive=function e(){return $("#livesteam").hide(),$("#livesteam iframe").attr("src",""),$("#livesteam1").hide(),$("#livesteam1 iframe").attr("src","")},openLive=function e(){return $("#livesteam iframe").attr("src","http://shangzhibo.tv/watch/568113?player"),$("#livesteam").show()},openLive1=function e(){return $("#livesteam1 iframe").attr("src","http://shangzhibo.tv/watch/4342920?player"),$("#livesteam1").show()},closeVideo=function e(){return $("#popvideo").hide(),$("#popvideo video")[0].pause()},openVideo=function e(t,n){// $("#popvideo video")[0].play()
return $("#popvideo video").attr("src",t),$("#popvideo video").attr("poster",n),$("#popvideo").show()},// 获取留言列表
// getDefaultMessages(1,function(list,counts){ console.log(list) })
// page 是第几页(每页20条) callback 为回调函数
getDefaultMessages=function e(t,n){var i=0<arguments.length&&void 0!==t?t:1,s=1<arguments.length&&void 0!==n?n:function(){};return axios.get("".concat(apiLink,"/list/type/genkidefault/page/").concat(i,"/size/10/sort/like/"),{}).then(function(e){var t,n,i,o,a;// callback
for(t=0,i=(a=e.data.list).length;t<i;t++)n=a[t],localStorage.getItem("id-".concat(n.id))?n.liked=!0:n.liked=!1;return o=e.data.list,s(o,e.data.counts)}).catch(function(e){return alert("列表获取失败")})},messageList=[],// 获取留言列表
// getMessages(1,function(list,counts){ console.log(list) })
// page 是第几页(每页20条) callback 为回调函数
getMessages=function e(t,n){var i=0<arguments.length&&void 0!==t?t:1,a=1<arguments.length&&void 0!==n?n:function(){};return axios.get("".concat(apiLink,"/list/type/genki/page/").concat(i,"/size/50"),{}).then(function(e){var t,n,i,o;// callback
for(t=0,i=(o=e.data.list).length;t<i;t++)n=o[t],localStorage.getItem("id-".concat(n.id))?n.liked=!0:n.liked=!1;return messageList=e.data.list,a(messageList,e.data.counts)}).catch(function(e){return alert("列表获取失败")})},// 发布留言
// sendMessage("content","musicname",function(){ console.log("success") })
// message 留言内容, nickname 音乐名称, 成功回调函数
sendMessage=function e(t,n,i,o){var a=2<arguments.length&&void 0!==i?i:"",s=3<arguments.length&&void 0!==o?o:function(){},c;return c={message:t,nickname:n,note1:a,type:"genki"},axios.post("".concat(apiLink,"/insert"),c).then(function(e){return 200===e.data.code?(alert("留言成功"),s()):alert(e.data.reason)}).catch(function(e){return alert("留言失败，请重试")})},// 留言点赞
// likeMessage(1)
// id 留言的id。
likeMessage=function e(t){var n,i;return null!=(i=localStorage.getItem("id-".concat(t)))?alert("已经赞过这个留言"):(localStorage.setItem("id-".concat(t),1),n={id:t},axios.post("".concat(apiLink,"/like"),n).then(function(e){return console.log(e.data)}).catch(function(e){return console.log("err:",e)}))},openInAPP=function e(t){return CloudMusic.open(t)},openMusic=function e(t){return CloudMusic.isInApp()?CloudMusic.playlist(t):window.location.href="https://music.163.com/#/playlist?id=".concat(t)};
//# sourceMappingURL=message.js.map