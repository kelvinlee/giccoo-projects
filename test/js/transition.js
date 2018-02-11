
riot.tag2('transition', '<yield></yield>', '', 'class="{data.class}"', function(opts) {
var beforeName, ishow, self;

beforeName = this.opts.name != null ? this.opts.name : false;

ishow = null;

self = this;

this.data = {
  class: {
    [`${beforeName}-enter-active`]: false,
    [`${beforeName}-enter`]: false,
    [`${beforeName}-leave-active`]: false,
    [`${beforeName}-leave-to`]: false
  }
};

this.mixin(riotVUE);

// Css 动画处理
if (beforeName) {
  this.cssAnimate = function() {
    if (this.root.getAttribute("ishow") === ishow) {
      return false;
    }
    ishow = this.root.getAttribute("ishow");
    if (this.root.getAttribute("ishow") === "true") {
      this.root.style.display = null;
      this.data.class[`${beforeName}-enter-active`] = true;
      this.data.class[`${beforeName}-enter`] = true;
      this.data.class[`${beforeName}-leave-active`] = false;
      this.data.class[`${beforeName}-leave-to`] = false;
      return setTimeout(function() {
        return self.data.class[`${beforeName}-enter`] = false;
      }, 1);
    } else {
      this.data.class[`${beforeName}-enter-active`] = false;
      this.data.class[`${beforeName}-enter`] = false;
      this.data.class[`${beforeName}-leave-active`] = true;
      return this.data.class[`${beforeName}-leave-to`] = true;
    }
  };
  this.end = function() {
    if (ishow == null) {
      this.root.style.display = "none";
    }
    this.data.class[`${beforeName}-enter-active`] = false;
    this.data.class[`${beforeName}-enter`] = false;
    this.data.class[`${beforeName}-leave-active`] = false;
    return this.data.class[`${beforeName}-leave-to`] = false;
  };
  this.on("updated", this.cssAnimate);
  this.on("mount", function() {
    ishow = !this.opts.ishow;
    this.root.addEventListener(TRANSITION_END_NAME, this.end.bind(this));
    this.root.addEventListener(ANIMATION_END_NAME, this.end.bind(this));
    if (ishow) {
      return this.root.style.display = "none";
    }
  });
} else {
  // @opts.enter.call()
  // Js  动画处理
  this.enterDone = function() {};
  this.leaveDone = function() {
    return this.root.style.display = "none";
  };
  this.funAnimate = function() {
    if (this.root.getAttribute("ishow") === ishow) {
      return false;
    }
    ishow = this.root.getAttribute("ishow");
    if (this.root.getAttribute("ishow") === "true") {
      this.root.style.display = null;
      return this.opts.enter(this.root, this.enterDone.bind(this));
    } else {
      return this.opts.leave(this.root, this.leaveDone.bind(this));
    }
  };
  this.on("updated", this.funAnimate);
  this.on("mount", function() {
    ishow = !this.opts.ishow;
    if (ishow) {
      return this.root.style.display = "none";
    }
  });
}
});