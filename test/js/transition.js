
riot.tag2('transition', '<yield></yield>', '', 'class="{data.class}"', function(opts) {
var beforeName, ishow, self;

beforeName = this.opts.name != null ? this.opts.name : false;

ishow = null;

self = this;

this.data = {
  class: {}
};

this.data.class[beforeName + "-enter-active"] = false;

this.data.class[beforeName + "-enter"] = false;

this.data.class[beforeName + "-leave-active"] = false;

this.data.class[beforeName + "-leave-to"] = false;

console.log(beforeName, this.data);

this.BD();

// Css 动画处理
if (beforeName) {
  this.cssAnimate = function() {
    if (this.root.getAttribute("ishow") === ishow) {
      return false;
    }
    ishow = this.root.getAttribute("ishow");
    if (this.root.getAttribute("ishow") === "true") {
      this.root.style.display = null;
      this.data.class[beforeName + "-enter-active"] = true;
      this.data.class[beforeName + "-enter"] = true;
      this.data.class[beforeName + "-leave-active"] = false;
      this.data.class[beforeName + "-leave-to"] = false;
      return setTimeout(function() {
        return self.data.class[beforeName + "-enter"] = false;
      }, 0);
    } else {
      this.data.class[beforeName + "-enter-active"] = false;
      this.data.class[beforeName + "-enter"] = false;
      this.data.class[beforeName + "-leave-active"] = true;
      return setTimeout(function() {
        return self.data.class[beforeName + "-leave-to"] = true;
      }, 0);
    }
  };
  this.end = function() {
    if (ishow == null) {
      this.root.style.display = "none";
    }
    this.data.class[beforeName + "-enter-active"] = false;
    this.data.class[beforeName + "-enter"] = false;
    this.data.class[beforeName + "-leave-active"] = false;
    return this.data.class[beforeName + "-leave-to"] = false;
  };
  this.on("updated", this.cssAnimate);
  this.on("mount", function() {
    ishow = !this.opts.ishow;
    if (ishow) {
      // @root.addEventListener TRANSITION_END_NAME, @end.bind @
      // @root.addEventListener ANIMATION_END_NAME, @end.bind @
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
      // @root.removeAttribute("style") if @root.style.length <= 0
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