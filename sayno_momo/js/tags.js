
riot.tag2('ctrl-image', '<div id="previewImage" class="image-content"> <canvas id="imageCtrl" width="{width}" height="{height}"></canvas> <div show="{!uploaded}" onclick="{selectImage}" class="image-input"> <input id="imageInput" if="{!_selectImage}" type="file" onchange="{changeImage}"> </div> <div show="{uploaded}" onclick="{restart}" class="icon icon-restart"></div> <div show="{noted}" onclick="{hideNote}" class="mask-note"></div> </div><yield></yield>', '', '', function(opts) {
var createObjectURLfun, defaultOrin, defaultType, logOrin, logSize, self;

self = this;

this.width = opts.width != null ? opts.width : 640;

this.height = opts.height != null ? opts.height : 640;

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

global.canvas = this;

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
  self.target = document.getElementById("imageCtrl");
  document.getElementById("imageCtrl").addEventListener("touchstart", self.start.bind(this));
  document.getElementById("imageCtrl").addEventListener("touchmove", self.move.bind(this));
  document.getElementById("imageCtrl").addEventListener("touchend", self.end.bind(this));
  return setTimeout(function() {
    return self.hideNote();
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

this.start = function(evt) {
  var i, j, ref, touch;
  console.log(evt);
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

this.end = function(e) {};

allClass = "riot-up riot-up-active riot-up-leave riot-down riot-down-active riot-down-leave riot-left riot-left-active  riot-left-leave riot-right riot-right-active  riot-right-leave";

this.passpage = function(direction) {
  var select;
  select = $(this.nowPage).attr(direction);
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