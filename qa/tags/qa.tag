
<qa>
  <!-- - var images = "img"-->
  <div class="question"><img src="http://disk.giccoo.com/projects/qa/img/question.png"/>
    <div class="num">{question.id}</div>
    <div class="count"><span class="num">{question.id}</span>/{questions.length}</div>
    <div class="text">{question.question}</div>
  </div>
  <div class="answers">
    <ul>
      <li each="{item in question.answers}" onclick="{selectAnswer(item)}"><span class="check"><img src="http://disk.giccoo.com/projects/qa/img/check.png"/></span>{item}</li>
    </ul>
  </div>
  <div class="btns">
    <div if="{now != questions.length-1}" onclick="{nextQuestion}" class="next"><img src="http://disk.giccoo.com/projects/qa/img/btn-next.png"/></div>
    <div if="{now == questions.length-1}" onclick="{restart}" class="restart"><img src="http://disk.giccoo.com/projects/qa/img/btn-restart.png"/></div>
    <div if="{now == questions.length-1}" onclick="{done}" class="done"><img src="http://disk.giccoo.com/projects/qa/img/btn-done.png"/></div>
  </div><a href="{question.link}" class="banner"><img src="{question.banner}"/></a>
  <script>
    var self = this
    this.questions = _QUESTION
    this.now = 0
    this.question = this.questions[this.now]
    this.selected = -1
    this.answer = []
    
    selectAnswer(item) {
    	//- console.log($(evt.target).parent("li"))
    	return function() {
    		//- console.log()
    		var n = self.question.answers.indexOf(item)
    		self.selected = n
    		$(".answers li",self.root).removeClass("on")
    		$(".answers li",self.root).eq(n).addClass("on")
    	}
    }
    
    nextQuestion() {
    	if (self.selected < 0) {
    		return SendNote("请选择本题答案")
    	}
    	this.answer.push(self.selected)
    	self.selected = -1
    	self.now++
    	//- if (self.now >= )
    	self.question = self.questions[self.now]
    	self.update()
    	$(".answers li",self.root).removeClass("on")
    }
    
    restart() {
    	self.selected = -1
    	self.now = 0
    	self.answer = []
    	self.question = self.questions[self.now]
    	self.update()
    	$(".answers li",self.root).removeClass("on")
    }
    
    done() {
    	if (confirm("提交后不能修改答案,确定要提交吗?")) {
    		//- 
    		this.answer.push(self.selected)
    		POST(self.answer)
    	}
    }
  </script>
</qa>