
riot.tag2('box', '<div if="{type == \'topten\'}" class="list"><a each="{item in list}" href="{item.link}" class="item"> <div class="img"><img riot-src="http://image.giccoo.com/Active/{item.image}@!small"> </div> <div class="like"> <div class="heart"></div><span>{item.like}</span> </div> <p class="name">{item.name}</p></a></div> <div if="{type == \'topsix\'}" class="list"><a each="{item in list}" href="{item.link}" class="item"> <div class="box"> <div class="img"><img riot-src="http://image.giccoo.com/Active/{item.image}@!medium"> </div> <div class="description"> <div class="avatar"><img riot-src="http://image.giccoo.com/Active/{item.avatar}@!small"> </div> <div class="text"> <p>{item.typename}</p> <p>{item.name}</p> <p><span class="like"></span><span>{item.like}</span></p> </div> </div> </div></a></div>', '', '', function(opts) {
var self;

self = this;

this.type = opts.type;

this.list = [];

console.log("abcd");

this.on("mount", function() {
  return $.get(opts.src, {}, function(msg) {
    if (msg.recode === 200) {
      self.list = msg.info;
      return self.update();
    } else {
      return SendNote("请求列表失败,请刷新页面重试");
    }
  });
});
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