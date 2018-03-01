'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var ANIMATION_END_NAME, ANIMATION_END_NAMES, TRANSITION_END_NAME, TRANSITION_END_NAMES, VENDORS, css3Prefix, i, j, len, mTestElement, riotVUE, riots;

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

// @codekit-prepend "coffee/css3Prefix"
// @codekit-prepend "../../libs/coffee/riot-vue"
riot.mixin(riotVUE);

riots = {};
