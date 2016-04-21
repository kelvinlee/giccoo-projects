
riot.tag2('build', '<div show="{!submited}" class="build"> <div id="ctrl-image"> <div class="logo"><img src=".//img/logo-mark.png"></div> </div> <div class="title"> <div onclick="{opendSelect}" class="line normal select-arrow"><img src=".//img/build-title.png"> <div class="arrow"><img src=".//img/arrow.png"></div> </div> <div onclick="{opendSelect}" class="line select"><img riot-src=".//img/select-{INDEX}.png"></div> <div show="{selectlist}" class="select-list"> <div onclick="{selectIndex(1)}" class="option {on: (INDEX == 1),not: (INDEX != 1)}"><img src=".//img/select-1.png"></div> <div onclick="{selectIndex(2)}" class="option {on: (INDEX == 2),not: (INDEX != 2)}"><img src=".//img/select-2.png"></div> <div onclick="{selectIndex(3)}" class="option {on: (INDEX == 3),not: (INDEX != 3)}"><img src=".//img/select-3.png"></div> <div onclick="{selectIndex(4)}" class="option {on: (INDEX == 4),not: (INDEX != 4)}"><img src=".//img/select-4.png"></div> </div> <div class="inputname"> <input name="username" type="text" placeholder="您的ID"> </div> </div> <div class="image-slogen"><img src=".//img/image-slogen.png"></div> </div> <div show="{submited}" class="build"><img if="{submited}" riot-src="http://image.giccoo.com/sayno/mfw/{image}"></div>', '', '', function(opts) {
var Number, _first, self;

self = this;

self.data = {};

this.INDEX = INDEX + 1;

this.buildpage = false;

this.activeinfo = false;

this.submited = false;

this.sharedsuccess = false;

this.otherspage = false;

this.lotteryfaild = false;

this.lotterysuccess = false;

this.submitsuccess = false;

this.imagelarge = "";

this.imageInfo = false;

this.posting = false;

this.submiting = false;

this.selectlist = false;

this.lists = [[], []];

if (global.canvas == null) {
  global.build = self;
}

Number = 0;

_first = false;

this.sliderEnd = function(num) {
  var type;
  console.log(num, Number, Number >= 1, !_first);
  if (Number >= 1 && !_first && Math.abs(num) >= 1) {
    _first = true;
    Loader("moreImage", "努力加载中，需要一些时间，不如发表一张作品后再来？", type = "ball", 0, "<a href='http://api.giccoo.com/sayno/momo/' class='more'><img src='http://image.giccoo.com/projects/sayno_momo/img/btn-more.png' /></a>");
  }
  return Number = Math.abs(num);
};

this.opendSelect = function() {
  self.selectlist = true;
  return self.update();
};

this.selectIndex = function(nums) {
  return function() {
    self.selectlist = false;
    self.INDEX = -1 + parseInt(nums);
    global.INDEX = -1 + parseInt(nums);
    return self.update();
  };
};

this.showInfo = function(evt) {
  self.imageInfo = true;
  self.imagelarge = $(evt.target).parent().attr("rel");
  return self.update();
};

this.closeInfo = function() {
  self.imageInfo = false;
  return self.update();
};

this.start = function() {
  this.buildpage = true;
  return setTimeout(function() {
    return $(".noteText", this.root).remove();
  }, 3000);
};

this.showActive = function() {
  return this.activeinfo = true;
};

this.closeactive = function() {
  return this.activeinfo = false;
};

this.submit = function() {
  var val;
  val = $("[name=username]", self.root).val();
  if (val.length <= 0) {
    return SendNote("请先填写您的ID");
  }
  userInfo.name = val;
  if (self.submiting) {
    return SendNote("上传中请稍后");
  }
  self.submiting = true;
  self.update();
  return uploadImage(function(msg) {
    var text;
    self.data = msg;
    self.submiting = false;
    self.image = msg.info.image;
    self.showShare();
    self.tags["ctrl-image"].stopCtrl();
    $("[name=username]", self.root).attr("readonly", "true");
    text = defaultWords[global.INDEX - 1];
    return UpdateShareContent(text, null, "http://m.giccoo.com/sayno_mfw/share.html?id=" + self.data.obj.insertId, "http://image.giccoo.com/sayno/mfw/small-" + self.data.image);
  });
};

this.showShare = function() {
  this.submited = true;
  return this.update();
};

this.share = function() {
  return shareCall();
};

this.openShare = function() {
  self.sharedsuccess = true;
  self.update();
  return self;
};

this.closeOther = function() {
  return this.otherspage = false;
};

this.postLottery = function() {
  var data;
  if (this.posting) {
    return false;
  }
  if (self.data.obj == null) {
    return SendNote("请先上传作品");
  }
  data = {
    nickname: userInfo.name,
    id: self.data.obj.insertId
  };
  Loader("lottery", "正在查询中奖状况");
  this.posting = true;
  return $.post(link + "/sayno/momo/lottery", data, function(msg) {
    if (msg.recode === 200) {
      self.lotterysuccess = true;
      self.lottery = msg.obj;
    } else {
      self.lotteryfaild = true;
    }
    Loader("lottery");
    self.posting = false;
    return self.update();
  });
};

this.showOthers = function() {
  var i, item, ref;
  this.lists = [[], []];
  for (item = i = 0, ref = self.data.list.length; 0 <= ref ? i < ref : i > ref; item = 0 <= ref ? ++i : --i) {
    if (item < 6) {
      this.lists[0].push({
        src: self.data.list[item].image
      });
    } else {
      this.lists[1].push({
        src: self.data.list[item].image
      });
    }
  }
  this.otherspage = true;
  return this.update();
};

this.shareSuccess = function() {};

this.submitLottery = function() {
  var data;
  if (!((self.lottery != null) && (self.lottery.insertId != null))) {
    return SendNote("非法操作,并没有中奖");
  }
  data = {
    nickname: userInfo.name,
    id: self.data.obj.insertId,
    lottery: self.lottery.insertId,
    name: $("#name").val(),
    mobile: $("#mobile").val(),
    adr: $("#adr").val()
  };
  if (data.name.length <= 0) {
    return SendNote("请输入联系人姓名");
  }
  if (data.mobile.length <= 0) {
    return SendNote("请输入联系电话");
  }
  if (data.adr.length <= 0) {
    return SendNote("请输入联系地址");
  }
  if (this.posting) {
    return false;
  }
  this.posting = true;
  return $.post(link + "/sayno/momo/lotteryUpdate", data, function(msg) {
    if (msg.recode === 200) {
      self.submitsuccess = true;
    } else {
      SendNote(msg.reason);
    }
    self.posting = true;
    return self.update();
  });
};

this.restart = function() {
  return window.location.reload();
};

this.on("mount", function() {
  return riot.mount("#ctrl-image", "ctrl-image");
});
}, '{ }');

riot.tag2('ctrl-image', '<div id="previewImage" class="image-content"> <canvas id="imageCtrl" width="{width}" height="{height}"></canvas> <div show="{!uploaded &amp;&amp; !stop}" onclick="{selectImage}" class="image-input"> <input id="imageInput" if="{!_selectImage}" type="file" onchange="{changeImage}"> </div> <div show="{uploaded &amp;&amp; !stop}" onclick="{restart}" class="icon icon-restart"></div> <div show="{noted}" onclick="{hideNote}" class="mask-note fadeIn animated"></div> </div><yield></yield>', '', '', function(opts) {
var createObjectURLfun, defaultOrin, defaultType, logOrin, logSize, self;

self = this;

this.width = opts.width != null ? opts.width : 640;

this.height = opts.height != null ? opts.height : 640;

this.stop = false;

this._selectImage = false;

this.uploaded = false;

this.noted = false;

this.image = null;

this.info = null;

this.frame = {
  x: 0,
  y: 0,
  w: 640,
  h: 640
};

defaultOrin = [];

defaultType = null;

logOrin = {
  x: self.frame.x,
  y: self.frame.y
};

logSize = {
  w: self.frame.w,
  h: self.frame.h
};

if (opts.selectimage != null) {
  this._selectImage = opts.selectimage;
}

$(self.root).addClass("ctrl-image");

if (global.canvas == null) {
  global.canvas = self;
}

createObjectURLfun = function(file) {
  if ((window.webkitURL != null) || window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1) {
    return window.webkitURL.createObjectURL(file);
  } else {
    return window.URL.createObjectURL(file);
  }
};

this.setDefault = function(x, y, w, h) {
  self.frame.x = x;
  self.frame.y = y;
  self.frame.w = w;
  self.frame.h = h;
  console.log("default:", self.frame);
  logOrin = {
    x: self.frame.x,
    y: self.frame.y
  };
  logSize = {
    w: self.frame.w,
    h: self.frame.h
  };
  console.log("default:", logSize);
  return self.frame;
};

this.selectImage = function(evt) {
  if (self._selectImage && (self._selectImage != null)) {
    return eval(self._selectImage + ".call(self)");
  } else {
    return true;
  }
};

this.changeImage = function(evt) {
  var blob, img;
  img = document.getElementById("imageInput");
  blob = createObjectURLfun(img.files[0]);
  return self.passImage(blob);
};

this.passImage = function(src) {
  var drawCanvasImage, image, normalImage, orienImage;
  image = new Image();
  drawCanvasImage = function() {
    console.log("canvas image");
    self.image = image;
    EXIF.getData(image, function() {
      var info;
      info = EXIF.getTag(image, "Orientation");
      self.info = info;
      if (info === 6) {
        return orienImage();
      } else {
        return normalImage();
      }
    });
    return true;
  };
  orienImage = function() {
    var canvas, ctx, h, w, x, y;
    canvas = document.getElementById("imageCtrl");
    ctx = canvas.getContext("2d");
    w = image.width;
    h = image.height;
    if (w > h) {
      w = w * (canvas.height / h);
      h = h * (canvas.height / h);
    } else if (w / h > canvas.width / canvas.height) {
      h = h * (canvas.height / w);
      w = w * (canvas.height / w);
    } else if (w > canvas.width) {
      w = w * (canvas.width / h);
      h = h * (canvas.width / h);
    } else if (w === h) {
      h = h * (canvas.height / h);
      w = w * (canvas.width / w);
    }
    x = -(w - canvas.height) / 2;
    y = -(h - canvas.width) / 2;
    ctx.clearRect(-10000, -10000, 50000, 50000);
    ctx.rotate(Math.PI / 2);
    ctx.drawImage(image, y, -h, w, h);
    self.setDefault(y, -h, w, h);
    return self.init();
  };
  normalImage = function() {
    var canvas, ctx, h, w, x, y;
    canvas = document.getElementById("imageCtrl");
    ctx = canvas.getContext("2d");
    w = image.width;
    h = image.height;
    if (w > h) {
      w = w * (canvas.height / h);
      h = h * (canvas.height / h);
    } else if (w / h > canvas.width / canvas.height) {
      w = w * (canvas.height / h);
      h = h * (canvas.height / h);
    } else if (w > canvas.width) {
      h = h * (canvas.width / w);
      w = w * (canvas.width / w);
    } else if (w === h) {
      h = h * (canvas.height / h);
      w = w * (canvas.width / w);
    }
    x = -(w - canvas.width) / 2;
    y = -(h - canvas.height) / 2;
    ctx.clearRect(-10000, -10000, 50000, 50000);
    ctx.drawImage(image, x, y, w, h);
    self.setDefault(x, y, w, h);
    return self.init();
  };
  image.onload = drawCanvasImage;
  return image.src = src;
};

this.init = function() {
  self.uploaded = true;
  self.noted = true;
  self.update();
  console.log(self.uploaded);
  self.target = document.getElementById("imageCtrl");
  document.getElementById("imageCtrl").addEventListener("touchstart", self.start.bind(self));
  document.getElementById("imageCtrl").addEventListener("touchmove", self.move.bind(self));
  document.getElementById("imageCtrl").addEventListener("touchend", self.end.bind(self));
  return setTimeout(function() {
    self.hideNote();
    return console.log(self.uploaded);
  }, 2000);
};

this.hideNote = function() {
  self.noted = false;
  return self.update();
};

this.upload = function() {
  var cache;
  return cache = canvas.toDataURL("image/png");
};

this.restart = function() {
  var canvas, ctx;
  canvas = document.getElementById("imageCtrl");
  ctx = canvas.getContext("2d");
  ctx.clearRect(-10000, -10000, 50000, 50000);
  self.uploaded = false;
  return self.noted = false;
};

this.getContent = function() {
  var canvas;
  if (self.uploaded) {
    canvas = document.getElementById("imageCtrl");
    return canvas.toDataURL("image/png");
  } else {
    return false;
  }
};

this.stopCtrl = function() {
  this.stop = true;
  this.noted = false;
  return this.update();
};

this.start = function(evt) {
  var i, j, ref, touch;
  if (this.stop) {
    return false;
  }
  touch = evt.touches;
  defaultType = touch.length;
  for (i = j = 0, ref = touch.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
    defaultOrin[i] = {
      x: touch[i].clientX,
      y: touch[i].clientY
    };
  }
  return console.log("start", defaultType, defaultOrin, self.frame, logSize);
};

this.move = function(evt) {
  var ctx, lineN, lineO, moveX, moveY, s, touch, x1, x2, y1, y2;
  if (this.stop) {
    return false;
  }
  touch = evt.touches;
  ctx = self.target.getContext("2d");
  evt.preventDefault();
  if (defaultType === 1) {
    moveX = touch[0].clientX - defaultOrin[0].x;
    moveY = touch[0].clientY - defaultOrin[0].y;
    logOrin.x = self.frame.x + moveX;
    logOrin.y = self.frame.y + moveY;
    if (self.info === 6) {
      logOrin.x = self.frame.x + moveY;
      logOrin.y = self.frame.y - moveX;
    }
    ctx.clearRect(-10000, -10000, 50000, 50000);
    ctx.drawImage(self.image, logOrin.x, logOrin.y, self.frame.w, self.frame.h);
  }
  if (defaultType === 2) {
    console.log("scale");
    x1 = defaultOrin[0].x;
    y1 = defaultOrin[0].y;
    x2 = defaultOrin[1].x;
    y2 = defaultOrin[1].y;
    lineO = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    x1 = touch[0].clientX;
    y1 = touch[0].clientY;
    x2 = touch[1].clientX;
    y2 = touch[1].clientY;
    lineN = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    s = (lineN - lineO) / 640;
    logSize.w = self.frame.w * (1 + s);
    logSize.h = self.frame.h * (1 + s);
    ctx.clearRect(-10000, -10000, 50000, 50000);
    return ctx.drawImage(self.image, self.frame.x, self.frame.y, logSize.w, logSize.h);
  }
};

this.end = function(evt) {
  var i, j, ref, touch;
  if (this.stop) {
    return false;
  }
  touch = evt.touches;
  defaultType = touch.length;
  for (i = j = 0, ref = touch.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
    defaultOrin[i] = {
      x: touch[i].clientX,
      y: touch[i].clientY
    };
  }
  self.frame.x = logOrin.x;
  self.frame.y = logOrin.y;
  self.frame.w = logSize.w;
  self.frame.h = logSize.h;
  return console.log("end", logSize, self.frame);
};
}, '{ }');

riot.tag2('homepage', '<div show="{!buildpage}" class="show-page"> <div class="bg flipInY animated delay-7"><img src="http://image.giccoo.com/projects/sayno/img/homepage-bg.png"></div> <div class="text-1 fadeInDown animated delay-5"><img src="http://image.giccoo.com/projects/sayno/img/homepage-text-1.png"></div> <div class="text-2 bounceIn animated delay-9"><img src="http://image.giccoo.com/projects/sayno/img/homepage-text-2.png"></div> <div onclick="{start}" class="start fadeInUp animated delay-11"><img src="http://image.giccoo.com/projects/sayno/img/homepage-start.png"></div> <div onclick="{showActive}" class="active fadeInUp animated delay-12">活动细则</div> </div> <div show="{buildpage}" class="build-page fadeIn animated"> <div class="build"> <ctrl-image selectimage="selectFiles"> <div class="logo"><img src="http://image.giccoo.com/projects/sayno/img/logo-mark.png"></div> </ctrl-image> <div class="title"> <div class="line normal"><img src="http://image.giccoo.com/projects/sayno/img/build-title.png"></div> <div class="line input"> <input id="title" type="text" name="title"> <div class="bg"><img riot-src="http://image.giccoo.com/projects/sayno/img/build-title-bg-{INDEX}.png"></div> <div class="noteText fadeInRight animated">< 点击修改</div> </div> </div> <div class="image-slogen"><img src="http://image.giccoo.com/projects/sayno/img/image-slogen.png"></div> </div> <div id="submit" show="{!submited}" onclick="{submit}" class="submit"><img src="http://image.giccoo.com/projects/sayno/img/submit.png"></div> <div show="{submited}" class="share-box"> <div class="bg"><img src="http://image.giccoo.com/projects/sayno/img/phone.png?v=1"></div> <div onclick="{share}" class="btn btn-share"><img src="http://image.giccoo.com/projects/sayno/img/btn-share.png"></div> <div onclick="{showOthers}" class="btn btn-others"><img src="http://image.giccoo.com/projects/sayno/img/btn-others.png"></div> </div> </div> <div show="{sharedsuccess}" class="pop share-success fadeIn animated"> <h2>分享成功!</h2> <div class="line"></div> <div onclick="{postLottery}" class="btn btn-lottery"><img src="http://image.giccoo.com/projects/sayno/img/btn-lottery.png"></div> </div> <div show="{otherspage}" class="pop other-page fadeIn animated"> <div class="other-box"> <div onclick="{closeOther}" class="close"><img src="http://image.giccoo.com/projects/sayno/img/btn-close.png"></div> <slider callback="{sliderEnd}"> <ul each="{items in parent.lists}" class="slide"> <li each="{item in items}" onclick="{parent.parent.parent.showInfo}" rel="http://image.giccoo.com/sayno/momo/{item.src}@!large"><img riot-src="http://image.giccoo.com/sayno/momo/small-{item.src}@!medium"></li> </ul> </slider> <div class="line">向左滑动换一批》</div> </div> </div> <div show="{lotteryfaild}" class="pop lottery-faild fadeIn animated"> <div class="content"> <div class="title"><img src="http://image.giccoo.com/projects/sayno/img/lottery-faild-title.jpg"></div> <div class="body"> <p>但是你还有机会继续抽奖<br>赢取荣耀7i手机！</p> <div class="product"><img src="http://image.giccoo.com/projects/sayno/img/phone.jpg?v=1"></div> <div onclick="{restart}" class="btn btn-goback"><img src="http://image.giccoo.com/projects/sayno/img/btn-goback.jpg"></div> </div> <div class="footer"></div> </div> </div> <div show="{lotterysuccess}" class="pop lottery-success fadeIn animated"> <div class="content"> <div class="title"><img src="http://image.giccoo.com/projects/sayno/img/lottery-success-title.png"></div> <div class="body"> <div show="{submitsuccess}" class="success-note"> <p>提交成功,请耐心等待奖品.</p> <div onclick="{restart}" class="btn btn-goback"><img src="http://image.giccoo.com/projects/sayno/img/btn-goback.jpg"></div> </div> <form name="register" show="{!submitsuccess}" class="form"> <div class="form-group"> <input id="name" type="text" name="name" placeholder="请输入用户名"> </div> <div class="form-group"> <input id="mobile" type="text" name="mobile" placeholder="请输入手机号"> </div> <div class="form-group"> <input id="adr" type="text" name="adr" placeholder="请输入联系地址"> </div> <div onclick="{submitLottery}" class="btn btn-submit"><img src="http://image.giccoo.com/projects/sayno/img/btn-submit.jpg"></div> </form> </div> <div class="footer"></div> </div> </div> <div show="{activeinfo}" class="pop active-info fadeIn animated"> <div class="title">活动形式</div> <div onclick="{closeactive}" class="close"><img src="http://image.giccoo.com/projects/sayno/img/btn-close.png"></div> <div class="content"> <div class="content-text"> <p>活动形式：</p> <p>点击进入活动页面，在荣耀logo模板下，上传图片并发表「异见」；</p> <p>发布作品之后分享给好友或者分享到社交平台。</p> <p>*如发现参与者恶意上传重复作品，与主题无关作品或者经举报、投诉发现参与者上传违法内容或侵犯第三人权利作品，将在未进行通知情况下屏蔽其作品。</p> <p> </p> <p>活动时间：</p> <p>2016年4月22日至2016年5月12日24:00止。</p> <p> </p> <p>活动规则：</p> <p>本次活动主办方为华为终端（东莞）有限公司。</p> <p>所有参与用户完全有权自愿选择是否参加本次活动，一旦参与本次活动的任何一个环节或全部，即视为已完全了解并完全接受包括本细则及其解释在内的各项条款。</p> <p>·主办方拥有无限制使用本次活动产生的全部资料、照片等的授权。</p> <p>活动参与用户同意并授予活动主办方无偿使用活动参与用户信息用于活动宣传的权利，参与用户信息包括但不限于用户头像、昵称、文字、图片等，包括但不限于将用户信息用于网络媒体、平面媒体、印刷品、 影展、零售店、路演等活动宣传当中，活动主办方据此使用参与活动的用户信息时不需要再另行通知活动参与用户或征得活动参与者的同意。</p> <p>如果发现有参加者在活动中使用任何不正当的手段参加活动，活动主办方有权在不事先通知的前提下取消其参加活动的资格。</p> <p>主办方不对因网络传输原因而导致参与用户提交的信息错误或延误承担任何责任。如遇不可抗力因素，活动主办方拥有终止或取消本次活动的权利。</p> <p>参与者如出现下列任一情况的，主办方有权在不予通知情况下屏蔽其作品：</p> <p>1)内容违法或唆使违法、唆使虐待及自残等行为的动机</p> <p>2)内容带有歧视、涉及政治、宗教等</p> <p>3)内容扰乱社会公共秩序</p> <p>4)侵犯他人或机构的著作权、专利权或商标权等相关知识产权</p> <p>5)侵犯他人肖像权或隐私</p> <p>6)损害他人名誉、信用，导致他人不快等内容</p> <p>法律责任声明：</p> <p>活动参与用户承诺参与活动作品内容健康、拥有参与活动作品的完整版权、著作权、及其他合法权利，保证不侵犯任何第三方合法权利； </p> <p>活动参与用户承诺遵守中华人民共和国相关法律法规，不得发表上传反动、色情、暴力、恐怖等任何形式的违法信息。对于违反国家法律、法规的作品，或是主办方收到投诉、举报认为有违反公共秩序、社会风气的作品，将被取消参与资格。</p> <p>由活动参与用户承担所有责任，并赔偿主办方华为因此遭受的所有损失。</p> <p>活动主办方尽最大努力审查相关参与者上传文字及内容，但不能避免活动参与用户上传的照片及文字故意或过失侵犯第三人合法权利或违反相关法律，参与者的任何言论不代表主办方观点，如发生违法或侵权行为由参与者承担所有法律责任，并赔偿主办方因此遭受的所有损失。</p> <p>因参与本活动引起的或者与本活动有关的争议，应本着友好合作精神协商解决，若自开始协商之日起15日内协商不成的，双方同意将争议提交深圳市龙岗区人民法院解决。</p> </div> </div> </div> <div show="{imageInfo}" class="pop image-info fadeIn animated"> <div onclick="{closeInfo}" class="close"><img src="http://image.giccoo.com/projects/sayno/img/btn-close.png"></div> <div class="content"><img riot-src="{imagelarge}"></div> </div>', '', '', function(opts) {
var Number, _first, self;

self = this;

self.data = {};

this.INDEX = INDEX + 1;

this.buildpage = false;

this.activeinfo = false;

this.submited = false;

this.sharedsuccess = false;

this.otherspage = false;

this.lotteryfaild = false;

this.lotterysuccess = false;

this.submitsuccess = false;

this.imagelarge = "";

this.imageInfo = false;

this.posting = false;

this.submiting = false;

this.lists = [[], []];

if (global.canvas == null) {
  global.homepage = self;
}

Number = 0;

_first = false;

this.sliderEnd = function(num) {
  var type;
  console.log(num, Number, Number >= 1, !_first);
  if (Number >= 1 && !_first && Math.abs(num) >= 1) {
    _first = true;
    Loader("moreImage", "努力加载中，需要一些时间，不如发表一张作品后再来？", type = "ball", 0, "<a href='http://api.giccoo.com/sayno/momo/' class='more'><img src='http://image.giccoo.com/projects/sayno_momo/img/btn-more.png' /></a>");
  }
  return Number = Math.abs(num);
};

this.showInfo = function(evt) {
  self.imageInfo = true;
  self.imagelarge = $(evt.target).parent().attr("rel");
  return self.update();
};

this.closeInfo = function() {
  self.imageInfo = false;
  return self.update();
};

this.start = function() {
  this.buildpage = true;
  return setTimeout(function() {
    return $(".noteText", this.root).remove();
  }, 3000);
};

this.showActive = function() {
  return this.activeinfo = true;
};

this.closeactive = function() {
  return this.activeinfo = false;
};

this.submit = function() {
  if (self.submiting) {
    return SendNote("上传中请稍后");
  }
  self.submiting = true;
  self.update();
  return uploadImage(function(msg) {
    var text;
    self.data = msg;
    self.submiting = false;
    self.showShare();
    self.tags["ctrl-image"].stopCtrl();
    $("#title", self.root).attr("readonly", "true");
    text = null;
    if ($("#title", self.root).val().length > 0) {
      text = "谁说" + $("#title", self.root).val() + " 我有异见！";
    }
    return UpdateShareContent(text, null, "http://api.giccoo.com/sayno/momo/?id=" + self.data.obj.insertId, "http://image.giccoo.com/sayno/momo/small-" + self.data.image);
  });
};

this.showShare = function() {
  this.submited = true;
  return this.update();
};

this.share = function() {
  return shareCall();
};

this.openShare = function() {
  self.sharedsuccess = true;
  self.update();
  return self;
};

this.closeOther = function() {
  return this.otherspage = false;
};

this.postLottery = function() {
  var data;
  if (this.posting) {
    return false;
  }
  if (self.data.obj == null) {
    return SendNote("请先上传作品");
  }
  data = {
    nickname: userInfo.name,
    id: self.data.obj.insertId
  };
  Loader("lottery", "正在查询中奖状况");
  this.posting = true;
  return $.post(link + "/sayno/momo/lottery", data, function(msg) {
    if (msg.recode === 200) {
      self.lotterysuccess = true;
      self.lottery = msg.obj;
    } else {
      self.lotteryfaild = true;
    }
    Loader("lottery");
    self.posting = false;
    return self.update();
  });
};

this.showOthers = function() {
  var i, item, ref;
  this.lists = [[], []];
  for (item = i = 0, ref = self.data.list.length; 0 <= ref ? i < ref : i > ref; item = 0 <= ref ? ++i : --i) {
    if (item < 6) {
      this.lists[0].push({
        src: self.data.list[item].image
      });
    } else {
      this.lists[1].push({
        src: self.data.list[item].image
      });
    }
  }
  this.otherspage = true;
  return this.update();
};

this.shareSuccess = function() {};

this.submitLottery = function() {
  var data;
  if (!((self.lottery != null) && (self.lottery.insertId != null))) {
    return SendNote("非法操作,并没有中奖");
  }
  data = {
    nickname: userInfo.name,
    id: self.data.obj.insertId,
    lottery: self.lottery.insertId,
    name: $("#name").val(),
    mobile: $("#mobile").val(),
    adr: $("#adr").val()
  };
  if (data.name.length <= 0) {
    return SendNote("请输入联系人姓名");
  }
  if (data.mobile.length <= 0) {
    return SendNote("请输入联系电话");
  }
  if (data.adr.length <= 0) {
    return SendNote("请输入联系地址");
  }
  if (this.posting) {
    return false;
  }
  this.posting = true;
  return $.post(link + "/sayno/momo/lotteryUpdate", data, function(msg) {
    if (msg.recode === 200) {
      self.submitsuccess = true;
    } else {
      SendNote(msg.reason);
    }
    self.posting = true;
    return self.update();
  });
};

this.restart = function() {
  return window.location.reload();
};
}, '{ }');

riot.tag2('loader', '<div class="loader-icon"> <div if="{type == \'ball\'}" class="loader-inner ball-spin-fade-loader"> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> </div> <div if="{type == \'pacman\'}" class="loader-inner pacman"> <div></div> <div></div> <div></div> <div></div> <div></div> </div> </div> <div if="{opts.title != \'\'}" class="loader-text">{opts.title}</div><yield></yield>', '', '', function(opts) {
var self;

self = this;

this.type = opts.type != null ? opts.type : "ball";

_loader[opts.id] = self;

$(this.root).addClass("loader fadeIn animated");

this.loadend = function() {
  $(self.root).removeClass("fadeIn animated");
  $(self.root).addClass("fadeOut animated");
  return setTimeout(function() {
    return self.unmount();
  }, 500);
};
}, '{ }');

riot.tag2('note', '<div class="note-box"> <div class="note-content {animated:true,fadeInUp:!close,fadeOutUp:close}"> <div class="note-text"> <div class="icon-form"><img src="http://disk.giccoo.com/projects/showman/img/icon-alert-note.png"></div> {title} </div> </div> </div>', '', '', function(opts) {
var self;

self = this;

this.title = opts.title;

this.close = false;

this.time = opts.time != null ? parseInt(opts.time) : 3000;

$(this.root).addClass("note");

this.on("mount", function() {
  setTimeout(function() {
    return self.unmount();
  }, self.time);
  return setTimeout(function() {
    self.close = true;
    return self.update();
  }, self.time - 500);
});
}, '{ }');

riot.tag2('parallax', '<yield></yield>', '', '', function(opts) {
var _store, allClass, begin, self;

console.log("parallax");

_store = {
  can: true
};

self = this;

Store.parallax = this;

this.nowPage = null;

begin = true;

this.defaultPoint = {
  x: 0,
  y: 0,
  returnTranN: true,
  returnTranO: true
};

this.start = function(evt) {
  var touch;
  if (self.nowPage === null) {
    self.nowPage = $(".page", self.root)[0];
    Store.nowPage = self.nowPage;
  }
  if (!_store.can) {
    return false;
  }
  console.log("start");
  touch = evt.touches[0];
  this.defaultPoint.x = touch.pageX;
  this.defaultPoint.y = touch.pageY;
  return true;
};

this.move = function(evt) {
  var gone, touch;
  if (!_store.can) {
    return false;
  }
  touch = evt.touches[0];
  gone = this.defaultPoint.y - touch.pageY;
  evt.preventDefault();
  if (gone > 50) {
    _store.can = false;
    this.passpage.bind(this)("up");
  }
  if (gone < -50) {
    _store.can = false;
    this.passpage.bind(this)("down");
  }
  return true;
};

this.end = function(e) {
  if (!_store.can) {
    return false;
  }
  console.log($(this.nowPage), $(this.nowPage).attr("up") === null);
  if ($(this.nowPage).attr("up") === null && $(this.nowPage).attr("down") === null) {
    console.log("remove event");
    _store.can = false;
    self.root.removeEventListener("touchstart", self.start);
    self.root.removeEventListener("touchmove", self.move);
    return self.root.removeEventListener("touchend", self.end);
  }
};

allClass = "riot-up riot-up-active riot-up-leave riot-down riot-down-active riot-down-leave riot-left riot-left-active  riot-left-leave riot-right riot-right-active  riot-right-leave";

this.passpage = function(direction) {
  var select;
  select = $(this.nowPage).attr(direction);
  console.log(direction, select, typeof select);
  if (select) {
    return self.animate(select);
  } else {
    return _store.can = true;
  }
};

this.animate = function(select) {
  var direction, newpage, oldpage;
  oldpage = self.nowPage;
  self.oldpage = oldpage;
  self.nowPage = $(".page." + select, self.root)[0];
  if (oldpage === self.nowPage) {
    return false;
  }
  self.nowPage;
  newpage = self.nowPage;
  direction = "up";
  if ($(oldpage).index() > $(newpage).index()) {
    direction = "down";
  }
  oldpage.addEventListener(TRANSITION_END_NAME, self.oldpageFinished);
  self.defaultPoint.returnTranN = true;
  newpage.addEventListener(TRANSITION_END_NAME, self.newpageFinished);
  self.defaultPoint.returnTranO = true;
  $(newpage).hide().removeClass(allClass).addClass("riot-" + direction);
  $(newpage).show();
  $(oldpage).removeClass(allClass);
  setTimeout(function() {
    $(oldpage).addClass("riot-" + direction + "-leave");
    return $(newpage).removeClass(allClass).addClass("riot-" + direction + "-active");
  }, 100);
  return self.update();
};

this.newpageFinished = function(evt) {
  if (self.defaultPoint.returnTranN) {
    self.defaultPoint.returnTranN = false;
  }
  self.newpage && self.newpage.removeEventListener(TRANSITION_END_NAME, self.newpageFinished);
  self.newpage && self.newpage.removeEventListener(TRANSITION_END_NAME, self.oldpageFinished);
  $(self.newpage).removeClass(allClass);
  return _store.can = true;
};

this.oldpageFinished = function(evt) {
  if (self.defaultPoint.returnTranO) {
    self.defaultPoint.returnTranO = false;
    $(self.oldpage).hide();
  }
  self.oldpage && self.oldpage.removeEventListener(TRANSITION_END_NAME, self.newpageFinished);
  self.oldpage && self.oldpage.removeEventListener(TRANSITION_END_NAME, self.oldpageFinished);
  $(self.oldpage).removeClass(allClass);
  return _store.can = true;
};

this.on("mount", function() {});

console.log(this.root);

this.root.addEventListener("touchstart", this.start.bind(this));

this.root.addEventListener("touchmove", this.move.bind(this));

this.root.addEventListener("touchend", this.end.bind(this));
});

riot.tag2('slider', '<div riot-style="-webkit-transition-duration: {duration}s;transition-duration: {duration}s; -webkit-transform: translate3d({x}px,0,0); transform: translate3d({x}px,0,0);" class="slider"><yield></yield> </div>', '', '', function(opts) {
var self, slider;

self = this;

this.duration = 0.2;

this.offset = {
  resistance: 1,
  lastSlide: 1,
  scrollableArea: 320,
  isScrolling: false,
  lastw: 0,
  w: 320,
  x: 0,
  y: 0,
  deltaX: 0,
  deltaY: 0
};

this.slideNumber = 0;

this.x = 0;

this.y = 0;

slider = $(".slider", this.root);

this.moved = false;

this.setNumber = function(i) {
  self.duration = 0;
  self.x = -($(".slider", self.root).width() * i);
  return self.update();
};

this.setSlideNumber = function(offset) {
  var round, slideNumber;
  console.log(offset);
  if (this.moved) {
    round = offset ? (this.offset.deltaX < 0 ? "ceil" : "floor") : "round";
    slideNumber = Math[round](this.x / (this.offset.scrollableArea / slider.find(".slide").length));
    slideNumber += offset;
    slideNumber = Math.min(slideNumber, 0);
    this.slideNumber = Math.max(-(slider.find(".slide").length - 1), slideNumber);
    return opts.callback && opts.callback(this.slideNumber);
  }
};

this.touchstart = function(evt) {
  var touch;
  touch = evt.touches[0];
  slider = $(".slider", this.root);
  this.duration = 0;
  this.moved = false;
  this.startTime = +new Date();
  this.offset.w = slider.width();
  this.offset.x = touch.pageX;
  this.offset.y = touch.pageY;
  this.offset.lastw = this.x;
  this.offset.lastSlide = -(slider.find(".slide").length - 1);
  this.offset.scrollableArea = this.offset.w * slider.find(".slide").length;
  this.setSlideNumber(0);
  return this.update();
};

this.touchmove = function(evt) {
  var pageX, touch;
  touch = evt.touches[0];
  this.offset.deltaX = touch.pageX - this.offset.x;
  pageX = touch.pageX;
  if (this.isScrolling === null) {
    this.offset.isScrolling = Math.abs(this.offset.deltaX) > Math.abs(this.offset.deltaX);
  }
  if (this.offset.isScrolling) {
    return "";
  }
  this.x = this.offset.deltaX / this.offset.resistance + this.offset.lastw;
  this.offset.resistance = this.slideNumber === 0 && this.offset.deltaX > 0 ? pageX / this.offset.w + 1.25 : (this.slideNumber === this.offset.lastSlide && this.offset.deltaX < 0 ? (this.offset.w - Math.abs(pageX)) / this.offset.w + 1.25 : 1);
  evt.preventDefault();
  this.moved = true;
  return this.update();
};

this.touchend = function(evt) {
  if (this.offset.isScrolling) {
    return "";
  }
  console.log(this.moved);
  if (this.moved) {
    this.setSlideNumber(+(new Date) - this.startTime < 1000 && Math.abs(this.offset.deltaX) > 15 ? (this.offset.deltaX < 0 ? -1 : 1) : 0);
    this.x = this.slideNumber * this.offset.w;
    this.duration = 0.2;
    this.update();
  }
  return this.moved = false;
};

this.on("mount", function() {
  slider = $(".slider", this.root);
  slider[0].addEventListener("touchstart", this.touchstart.bind(this));
  slider[0].addEventListener("touchmove", this.touchmove.bind(this));
  slider[0].addEventListener("touchend", this.touchend.bind(this));
  return opts.end && opts.end(this);
});
}, '{ }');