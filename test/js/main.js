'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var ANIMATION_END_NAME, ANIMATION_END_NAMES, SendNote, TRANSITION_END_NAME, TRANSITION_END_NAMES, VENDORS, css3Prefix, i, j, len, mTestElement, riotVUE, riots;

VENDORS = ["Moz", 'webkit', 'ms', 'O'];

TRANSITION_END_NAMES = {
  "Moz": "transitionend",
  "webkit": "webkitTransitionEnd",
  "ms": "MSTransitionEnd",
  "O": "oTransitionEnd"
};

ANIMATION_END_NAMES = {
  "Moz": "animationend",
  "webkit": "webkitAnimationEnd",
  "ms": "MSAnimationEnd",
  "O": "oAnimationEnd"
};

mTestElement = document.createElement("div");

for (j = 0, len = VENDORS.length; j < len; j++) {
  i = VENDORS[j];
  css3Prefix = i;
  if (css3Prefix + "Transition" in mTestElement.style) {
    break;
  }
  css3Prefix = false;
}

if (css3Prefix) {
  TRANSITION_END_NAME = TRANSITION_END_NAMES[css3Prefix];
  ANIMATION_END_NAME = ANIMATION_END_NAMES[css3Prefix];
}

riotVUE = {
  arrayMethods: Object.create(Array.prototype),
  newArrProto: [],
  init: function init(opts) {
    var self;
    self = this;
    if (typeof riots !== "undefined" && riots !== null) {
      if (riots[this.root.localName] == null) {
        riots[this.root.localName] = [];
      }
      if (riots[this.root.localName] != null) {
        riots[this.root.localName].push(this);
      }
    }
    // 设置数组变更通知
    return ["pop", "push", "reverse", "shift", "unshift", "slice", "splice", "sort", "filter", "forEach"].forEach(function (method) {
      var original;
      original = self.arrayMethods[method];
      return self.newArrProto[method] = function () {
        var run;
        run = function run(who, args) {
          original.apply(who, args);
          self.eachAll(self, who);
          self.update();
        };
        return run(this, arguments);
      };
    });
  },
  // 给 data 内的所有属性绑定监控
  // @eachAll this,this.data
  // @eachAll this,this.opts
  // 设置 $set 和 $delete .
  BD: function BD() {
    this.eachAll(this, this.data);
    return console.log(this.data);
  },
  eachAll: function eachAll(self, data) {
    var key, results;
    results = [];
    for (key in data) {
      this.createProperty(self, data, key, data[key]);
      if (Array.isArray(data[key])) {
        data[key].__proto__ = self.newArrProto;
        this.eachAll(self, data[key]);
      }
      if (_typeof(data[key]) === "object") {
        results.push(this.eachAll(self, data[key]));
      } else {
        results.push(void 0);
      }
    }
    return results;
  },
  createProperty: function createProperty(parent, data, pro, val) {
    var temp;
    temp = val;
    return Object.defineProperty(data, pro, {
      configurable: true,
      enumerable: true,
      get: function get() {
        return temp;
      },
      set: function set(value) {
        if (value === temp || temp !== temp && value !== value) {
          return false;
        }
        temp = value;
        return parent.update();
      }
    });
  }
};

riot.tag2('note', '<div class="note-box"> <div class="note-content {animated:true,fadeInUp:!close,fadeOutUp:close}"> <div class="note-text"> <div class="icon-form"><img src="http://disk.giccoo.com/projects/showman/img/icon-alert-note.png"></div> {title} </div> </div> </div>', 'note,[data-is="note"]{ position: fixed; top: 0px; left: 0px; bottom: 0px; right: 0px; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.6); z-index: 9999; } note .note-box,[data-is="note"] .note-box{ text-align: center; position: absolute; top: 50%; left: 0px; width: 100%; } note .note-box .note-content,[data-is="note"] .note-box .note-content{ display: inline-block; padding: 10px 11px 10px 10px; background-color: rgba(0, 0, 0, 0.7); color: #fff; border-radius: 5px; max-width: 90%; -webkit-box-sizing: border-box; box-sizing: border-box; } note .note-box .icon-form,[data-is="note"] .note-box .icon-form,note .note-box .note-text,[data-is="note"] .note-box .note-text{ display: inline-block; vertical-align: top; line-height: 25px; } note .note-box .icon-form,[data-is="note"] .note-box .icon-form{ width: 1.1rem; height: 1.1rem; vertical-align: middle; } note .note-box .note-text,[data-is="note"] .note-box .note-text{ font-size: 0.8rem; line-height: 1.4em; letter-spacing: 2px; } @media only screen and (min-width: 321px) and (max-width: 399px) { note .note-box .note-text,[data-is="note"] .note-box .note-text{ font-size: 0.88rem; } } @media only screen and (min-width: 321px) and (max-device-width: 375px) and (max-width: 399px) { note .note-box .note-text,[data-is="note"] .note-box .note-text{ font-size: 0.88rem; } } @media only screen and (min-width: 399px) and (max-width: 767px) { note .note-box .note-text,[data-is="note"] .note-box .note-text{ font-size: 0.96rem; } } @media only screen and (min-width: 399px) and (max-width: 768px) and (max-device-width: 768px) { note .note-box .note-text,[data-is="note"] .note-box .note-text{ font-size: 0.96rem; } }', '', function (opts) {
  var self;

  self = this;

  this.title = opts.title;

  this.close = false;

  this.time = opts.time != null ? parseInt(opts.time) : 3000;

  this.on("mount", function () {
    setTimeout(function () {
      return self.unmount();
    }, self.time);
    return setTimeout(function () {
      self.close = true;
      return self.update();
    }, self.time - 500);
  });
});

// @codekit-prepend "../coffee/riot-vue"
// @codekit-prepend "./riot-note.js"
riot.mixin(riotVUE);

riots = {};

SendNote = function SendNote(msg) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;

  var noteDom;
  noteDom = document.createElement("note");
  noteDom.title = msg;
  noteDom.setAttribute("time", time);
  document.body.appendChild(noteDom);
  return riot.mount("note");
};

// @codekit-prepend "coffee/css3Prefix"
// @codekit-prepend "../../libs/riot3/base"
