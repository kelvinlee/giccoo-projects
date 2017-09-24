
riot.tag2('list', '<div class="loading" hide="{loaded}"> <div class="loader-inner ball-spin-fade-loader"> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> </div> </div> <div class="question-list" show="{contents.length &gt; 0}"> <div class="question-box {on: parent.contents.indexOf(question) &gt;= 5}" each="{question in contents}" show="{question.question}"> <div class="title"><span class="icon"></span> <h2>{question.question}</h2> <p class="numbs">{question.answers}个回答&nbsp;&nbsp;&nbsp;{question.focus}个关注</p><span class="icon-more"></span> </div> <div class="answer-box"> <div class="answer answer-1" if="{question.answer1 &amp;&amp; question.answer1by}"><span class="by">@{question.answer1by}</span><span class="answer-text">{question.answer1}</span></div> <div class="answer answer-2" if="{question.answer2 &amp;&amp; question.answer2by}"><span class="by">@{question.answer2by}</span><span class="answer-text">{question.answer2}</span></div> <div class="answer answer-3" if="{question.answer3 &amp;&amp; question.answer3by}"><span class="by">@{question.answer3by}</span><span class="answer-text">{question.answer3}</span></div> </div><a class="outlink" href="{question.link}" show="{question.link}"><img src="./img/outlink.png"></a> </div> </div>', '', '', function(opts) {
var self;

self = this;

self.contents = [];

self.loaded = false;

this.on("mount", function() {
  console.log("starting load questions");
  return $.ajax({
    type: "get",
    url: "http://api.giccoo.com/friso/list/",
    dataType: 'json',
    data: null,
    success: function(msg) {
      console.log(msg);
      self.contents = msg.list;
      self.loaded = true;
      return self.update();
    },
    error: function(error) {}
  });
});
});