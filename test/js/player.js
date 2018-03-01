
riot.tag2('player', '<transition name="page-animation" ishow="{data.show}" onclick="{check}"> <div class="text">{parent.data.text}</div> </transition>', '', '', function(opts) {
var self;

self = this;

this.data = {
  text: "Player",
  show: true
};

this.BD();

this.check = function() {
  return this.data.show = !this.data.show;
};

this.on("mount", function() {
  return console.log("mounted", this);
});
});