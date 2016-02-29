
<note>
  <div class="note-box">
    <div class="note-content {animated:true,fadeInUp:!close,fadeOutUp:close}">
      <div class="note-text">
        <div class="icon-form"><img src="http://disk.giccoo.com/projects/showman/img/icon-alert-note.png"/></div> {title}
      </div>
    </div>
  </div>
  <script>
    var self = this
    this.title = opts.title
    this.close = false
    this.time = opts.time?parseInt(opts.time):3000
    $(this.root).addClass("note")
    //- 
    this.on("mount",function(){
    	setTimeout(function(){
    		self.unmount()
    	},self.time)
    	setTimeout(function(){
    		self.close = true
    		self.update()
    	},self.time-500)
    })
  </script>
</note>