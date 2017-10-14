
riot.tag2('list', '<div class="question-list"> <div class="question-box {on: parent.contents.indexOf(question) &gt;= 5}" each="{question in contents}" id="q-{question.id}" show="{question.question}"> <div class="title"><span class="icon"></span> <h2>{question.question}</h2> <p class="numbs">{question.answers}个回答&nbsp;&nbsp;&nbsp;{question.focus}个关注</p><span class="icon-more"></span> </div> <div class="answer-box"> <div class="answer answer-1" if="{question.answer1 &amp;&amp; question.answer1by}"> <div class="likeanswer likeanswer-1" rel="1"><span class="icon"><img src="./img/heart-off.png"></span><span class="likeanswer-text">{question.answer1like}</span></div><span class="by">@{question.answer1by}</span><span class="answer-text"><img if="{question.answer1img}" riot-src="http://image.giccoo.com/Active/{question.answer1img}@!medium">{question.answer1}</span> </div> <div class="answer answer-2" if="{question.answer2 &amp;&amp; question.answer2by}"> <div class="likeanswer likeanswer-2" rel="2"><span class="icon"><img src="./img/heart-off.png"></span><span class="likeanswer-text">{question.answer2like}</span></div><span class="by">@{question.answer2by}</span><span class="answer-text"><img if="{question.answer2img}" riot-src="http://image.giccoo.com/Active/{question.answer2img}@!medium">{question.answer2}</span> </div> <div class="answer answer-3" if="{question.answer3 &amp;&amp; question.answer3by}"> <div class="likeanswer likeanswer-3" rel="3"><span class="icon"><img src="./img/heart-off.png"></span><span class="likeanswer-text">{question.answer3like}</span></div><span class="by">@{question.answer3by}</span><span class="answer-text"><img if="{question.answer3img}" riot-src="http://image.giccoo.com/Active/{question.answer3img}@!medium">{question.answer3}</span> </div> </div><a class="outlink" href="{question.link}" show="{question.link}"><img src="./img/outlink.png"></a> </div> </div>', '', '', function(opts) {
var self;

self = this;

self.contents = defaultInfo;

self.loaded = false;

Store.friso = self;

self.updateContents = function(contents) {
  self.contents = contents;
  return self.update();
};
});