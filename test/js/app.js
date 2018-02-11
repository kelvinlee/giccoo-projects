
riot.tag2('app', '<yield></yield> <button onclick="{showFun}">{data.showme}</button> <div data-is="transition" name="page-animation" ishow="{data.showme}"> <div class="page">Show my??</div> </div>', 'app button,[data-is="app"] button{ color: #000; }', '', function(opts) {
// @codekit-prepend "../../libs/coffee/riot-vue"
this.data = {
  showme: false
};

this.mixin(riotVUE);

global.test = this;

this.showFun = function() {
  return this.data.showme = !this.data.showme;
};

this.enter = function(el, done) {
  console.log(el, "enter function");
  return done();
};

this.leave = function(el, done) {
  return done();
};

this.on("mount", function() {
  console.log(this.tags);
  return console.log(this.data.showme);
});

// console.log @tags.transition.opts?,@tags.transition.opts.animated
// @tags.transition.opts.animated = true
// console.log @tags.transition.opts.animated
});