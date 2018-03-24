
riot.tag2('player', '<div class="transition" data-is="transition" leave="{leave}" enter="{enter}" ishow="{data.show}" onclick="{check}"> <div class="text">{parent.data.text}</div> </div> <button onclick="{check}">click me</button>', '', '', function(opts) {
var self;

self = this;

this.data = {
  text: "Player",
  show: true
};

this.BD();

this.check = function() {
  this.data.show = !this.data.show;
  return SendNote("haha");
};

this.enter = function(el, done) {
  console.log("enter", el, done);
  return done();
};

this.leave = function(el, done) {
  console.log("leave", el, done);
  return done();
};

this.on("mount", function() {
  return console.log("mounted", this);
});
});