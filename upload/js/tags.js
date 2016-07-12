
riot.tag2('input-upload-image', '<div class="input-upload"> <input type="file" name="{filename}" id="{filename}" onchange="{changeImage}" class="{opts.classname}"> <input type="text" id="{opts.name}" name="{opts.name}" style="display:none"> </div>', '', '', function(opts) {
var createObjectURLfun, self;

self = this;

this.filename = opts.name + "-file";

createObjectURLfun = function(file) {
  if ((window.webkitURL != null) || window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1) {
    return window.webkitURL.createObjectURL(file);
  } else {
    return window.URL.createObjectURL(file);
  }
};

this.changeImage = function(evt) {
  var blob, img;
  img = document.getElementById(self.filename);
  blob = createObjectURLfun(img.files[0]);
  return self.passImage(blob);
};

this.passImage = function(src) {
  var drawCanvasImage, image, normalImage;
  image = new Image();
  drawCanvasImage = function() {
    console.log("canvas image");
    self.image = image;
    return normalImage();
  };
  normalImage = function() {
    var canvas, ctx, h, w, x, y;
    canvas = document.createElement("canvas");
    w = image.width;
    h = image.height;
    canvas.width = w;
    canvas.height = h;
    ctx = canvas.getContext("2d");
    x = 0;
    y = 0;
    ctx.clearRect(-10000, -10000, 50000, 50000);
    ctx.drawImage(image, x, y, w, h);
    return self.init(canvas);
  };
  image.onload = drawCanvasImage;
  return image.src = src;
};

this.init = function(canvas) {
  var cache;
  cache = canvas.toDataURL("image/png");
  return $("#" + opts.name).val(cache);
};
}, '{ }');