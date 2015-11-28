
<timer>
  <div style="transform: rotate({hour_deg}deg); -webkit-transform: rotate({hour_deg}deg)" class="hour">{hour}</div>
  <div style="transform: rotate({mint_deg}deg); -webkit-transform: rotate({mint_deg}deg)" class="mint">{mint}</div>
  <div style="transform: rotate({sec_deg}deg); -webkit-transform: rotate({sec_deg}deg)" class="sec">{sec}</div>
  <script>
    var self = this
    this.root.className = "timer-box"
    
    init() {
    	self.hour = new Date().getHours()
    	self.mint = new Date().getMinutes()
    	self.sec = new Date().getSeconds()
    	self.hour_deg = 360/12 * self.hour
    	self.mint_deg = 360/60 * self.mint
    	self.sec_deg = 360/60 * self.sec
    	self.update()
    	setTimeout(function(){
    		self.init()
    	},500)
    }
    self.init()
  </script>
</timer>