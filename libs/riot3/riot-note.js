
riot.tag2('note', '<div class="note-box"> <div class="note-content {animated:true,fadeInUp:!close,fadeOutUp:close}"> <div class="note-text"> <div class="icon-form"><img src="http://disk.giccoo.com/projects/showman/img/icon-alert-note.png"></div> {title} </div> </div> </div>', 'note,[data-is="note"]{ position: fixed; top: 0px; left: 0px; bottom: 0px; right: 0px; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.6); z-index: 9999; } note .note-box,[data-is="note"] .note-box{ text-align: center; position: absolute; top: 50%; left: 0px; width: 100%; } note .note-box .note-content,[data-is="note"] .note-box .note-content{ display: inline-block; padding: 10px 11px 10px 10px; background-color: rgba(0, 0, 0, 0.7); color: #fff; border-radius: 5px; max-width: 90%; -webkit-box-sizing: border-box; box-sizing: border-box; } note .note-box .icon-form,[data-is="note"] .note-box .icon-form,note .note-box .note-text,[data-is="note"] .note-box .note-text{ display: inline-block; vertical-align: top; line-height: 25px; } note .note-box .icon-form,[data-is="note"] .note-box .icon-form{ width: 1.1rem; height: 1.1rem; vertical-align: middle; } note .note-box .note-text,[data-is="note"] .note-box .note-text{ font-size: 0.8rem; line-height: 1.4em; letter-spacing: 2px; } @media only screen and (min-width: 321px) and (max-width: 399px) { note .note-box .note-text,[data-is="note"] .note-box .note-text{ font-size: 0.88rem; } } @media only screen and (min-width: 321px) and (max-device-width: 375px) and (max-width: 399px) { note .note-box .note-text,[data-is="note"] .note-box .note-text{ font-size: 0.88rem; } } @media only screen and (min-width: 399px) and (max-width: 767px) { note .note-box .note-text,[data-is="note"] .note-box .note-text{ font-size: 0.96rem; } } @media only screen and (min-width: 399px) and (max-width: 768px) and (max-device-width: 768px) { note .note-box .note-text,[data-is="note"] .note-box .note-text{ font-size: 0.96rem; } }', '', function(opts) {
var self;

self = this;

this.title = opts.title;

this.close = false;

this.time = opts.time != null ? parseInt(opts.time) : 3000;

this.on("mount", function() {
  setTimeout(function() {
    return self.unmount();
  }, self.time);
  return setTimeout(function() {
    self.close = true;
    return self.update();
  }, self.time - 500);
});
});