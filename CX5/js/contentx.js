
riot.tag2('contentx', '<h2>{headline}</h2> <div class="text-box" each="{item in contents}"> <div class="title">{item.title}</div> <div class="lists" each="{list in item.lists}"><a class="list" href="{list.link}">{list.text}</a></div><a class="more" href="{item.more}">+查看更多回答</a> </div>', '', '', function(opts) {
var self;

self = this;

Store.contentx = self;

self.contents = [
  {
    title: "h1",
    more: "more-a-link",
    lists: [
      {
        text: "a",
        link: "a-link"
      }
    ]
  }, {
    title: "h2",
    more: "more-a-link",
    lists: [
      {
        text: "b",
        link: "b-link"
      }
    ]
  }
];

this.updateContents = function(contents) {
  self.contents = contents;
  return self.update();
};
});