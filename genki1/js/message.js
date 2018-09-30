"use strict";

var apiLink, closeVideo, closelive, getDefaultMessages, getMessages, likeMessage, messageList, openInAPP, openLive, openMusic, openVideo, sendMessage;
apiLink = "//g.giccoo.com/active/message";
$(document).ready(function () {
  console.log("loaded");
  $("#livesteam .close").click(function () {
    return closelive();
  });
  return $("#popvideo .close").click(function () {
    return closeVideo();
  });
});

closelive = function closelive() {
  return $("#livesteam").hide();
};

openLive = function openLive() {
  $("#livesteam iframe").attr("src", "http://shangzhibo.tv/watch/568113?player");
  return $("#livesteam").show();
};

closeVideo = function closeVideo() {
  return $("#popvideo").hide();
};

openVideo = function openVideo(url) {
  $("#popvideo video").attr("src", url);
  return $("#popvideo").show();
}; // 获取留言列表
// getDefaultMessages(1,function(list,counts){ console.log(list) })
// page 是第几页(每页20条) callback 为回调函数


getDefaultMessages = function getDefaultMessages() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  return axios.get("".concat(apiLink, "/list/type/genkidefault/page/").concat(page, "/size/10/sort/like/"), {}).then(function (vals) {
    var i, item, len, messageList, ref;
    ref = vals.data.list; // callback

    for (i = 0, len = ref.length; i < len; i++) {
      item = ref[i];

      if (localStorage.getItem("id-".concat(item.id))) {
        item.liked = true;
      } else {
        item.liked = false;
      }
    }

    messageList = vals.data.list;
    return callback(messageList, vals.data.counts);
  }).catch(function (err) {
    return alert("列表获取失败");
  });
};

messageList = []; // 获取留言列表
// getMessages(1,function(list,counts){ console.log(list) })
// page 是第几页(每页20条) callback 为回调函数

getMessages = function getMessages() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  return axios.get("".concat(apiLink, "/list/type/genki/page/").concat(page, "/size/50"), {}).then(function (vals) {
    var i, item, len, ref;
    ref = vals.data.list; // callback

    for (i = 0, len = ref.length; i < len; i++) {
      item = ref[i];

      if (localStorage.getItem("id-".concat(item.id))) {
        item.liked = true;
      } else {
        item.liked = false;
      }
    }

    messageList = vals.data.list;
    return callback(messageList, vals.data.counts);
  }).catch(function (err) {
    return alert("列表获取失败");
  });
}; // 发布留言
// sendMessage("content","musicname",function(){ console.log("success") })
// message 留言内容, nickname 音乐名称, 成功回调函数


sendMessage = function sendMessage(message, nickname) {
  var note1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
  var data;
  data = {
    message: message,
    nickname: nickname,
    note1: note1,
    type: "genki"
  };
  return axios.post("".concat(apiLink, "/insert"), data).then(function (vals) {
    if (vals.data.code === 200) {
      alert("留言成功");
      return callback();
    } else {
      return alert(vals.data.reason);
    }
  }).catch(function (err) {
    return alert("留言失败，请重试");
  });
}; // 留言点赞
// likeMessage(1)
// id 留言的id。


likeMessage = function likeMessage(id) {
  var data, saveID;
  saveID = localStorage.getItem("id-".concat(id));

  if (saveID != null) {
    return alert("已经赞过这个留言");
  }

  localStorage.setItem("id-".concat(id), 1);
  data = {
    id: id
  };
  return axios.post("".concat(apiLink, "/like"), data).then(function (vals) {
    return console.log(vals.data);
  }).catch(function (err) {
    return console.log("err:", err);
  });
};

openInAPP = function openInAPP(url) {
  return CloudMusic.open(url);
};

openMusic = function openMusic(id) {
  if (CloudMusic.isInApp()) {
    return CloudMusic.playlist(id);
  } else {
    return window.location.href = "https://music.163.com/#/playlist?id=".concat(id);
  }
};

//# sourceMappingURL=message.js.map
