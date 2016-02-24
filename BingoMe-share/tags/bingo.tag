
<bingo>
  <div class="bingo">
    <div onclick="{checkRight}" class="bingo-img shadow"><img src="http://disk.giccoo.com/BingoMe/{opts.url}"/>
      <div if="{right}" style="top: {like.y}px; left: {like.x}px" class="like bounceIn animated"><img src="http://disk.giccoo.com/projects/BingoMe-share/img/like.png"/></div>
    </div>
    <div class="bingo-info">
      <div class="time">{opts.time}</div>
      <div class="views">{opts.views}</div>
      <div class="bingoone">{opts.bingoone}</div>
    </div>
  </div>
  <script>
    var self = this
    self.right = false
    self.like = {x: 0, y: 0}
    checkRight(evt) {
    	if (self.right) { return false }
    	self.right = true
    	console.log(evt.pageX,evt.pageY,$(".bingo-img",self.root).offset())
    	self.like.x = evt.pageX - $(".bingo-img",self.root).offset().left - 30
    	self.like.y = evt.pageY - $(".bingo-img",self.root).offset().top - 30
    	self.update()
    	setTimeout(function(){
    		//- console.log(riot.tags)
    		download.showQR()
    	},1000);
    }
  </script>
</bingo>