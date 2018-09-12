"use strict";

// apiLink = "//g.giccoo.com/active/message"
var apiLink, getMessages, likeMessage, messageList, sendMessage;

apiLink = "//localhost:3000/active/message";

messageList = [];

// 获取留言列表
// getMessages(1,function(list){ console.log(list) })
// page 是第几页(每页20条) callback 为回调函数
getMessages = function getMessages() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  return axios.get(apiLink + "/list/type/genki/page/" + page, {}).then(function (vals) {
    var i, item, len, ref;
    ref = vals.data.list;
    // callback
    for (i = 0, len = ref.length; i < len; i++) {
      item = ref[i];
      if (localStorage.getItem("id-" + item.id)) {
        item.liked = true;
      }
    }
    messageList = vals.data.list;
    return callback(messageList);
  }).catch(function (err) {
    return alert("列表获取失败");
  });
};

// 发布留言
// sendMessage("content","musicname",function(){ console.log("success") })
// message 留言内容, nickname 音乐名称, 成功回调函数
sendMessage = function sendMessage(message, nickname) {
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var data;
  data = {
    message: message,
    nickname: nickname,
    type: "genki"
  };
  return axios.post(apiLink + "/insert", data).then(function (vals) {
    if (vals.data.code === 200) {
      alert("留言成功");
      return callback();
    } else {
      return alert(vals.data.reason);
    }
  }).catch(function (err) {
    return alert("留言失败，请重试");
  });
};

// 留言点赞
// likeMessage(1)
// id 留言的id。
likeMessage = function likeMessage(id) {
  var data, saveID;
  saveID = localStorage.getItem("id-" + id);
  if (saveID != null) {
    return alert("已经赞过这个留言");
  }
  localStorage.setItem("id-" + id, 1);
  data = {
    id: id
  };
  return axios.post(apiLink + "/like", data).then(function (vals) {
    return console.log(vals.data);
  }).catch(function (err) {
    return console.log("err:", err);
  });
};
