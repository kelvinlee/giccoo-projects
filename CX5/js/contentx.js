
riot.tag2('contentx', '<h2>{headline}<br>{subheadline}</h2> <div class="text-box" each="{item in contents}"> <div class="title {fontsmall: item.title.length &gt; 19,fontsmallsmall: item.title.length &gt; 24,fontbig: item.title.length &lt; 5}">{item.title}</div> <div class="lists" each="{list in item.lists}"><a class="list {fontsmall: list.text.length &gt; 19,fontsmallsmall: list.text.length &gt; 24,fontbig: list.text.length &lt; 5}" href="{list.link}">{list.text}</a></div><a class="more" href="{item.more}">+查看更多回答</a> </div>', '', '', function(opts) {
var self;

self = this;

Store.contentx = self;

self.headline = "Hello";

self.subheadline = "World";

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

this.updateContents = function(headline, subheadline, contents) {
  self.headline = headline;
  self.subheadline = subheadline;
  self.contents = contents;
  return self.update();
};
});