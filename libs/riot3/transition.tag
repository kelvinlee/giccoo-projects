//- must use data-is
transition(class="{data.class}")
  <yield/>
  
  script(type="text/coffeescript").
    beforeName = if @opts.name? then @opts.name else false

    ishow = null
    self = @
    @data = {
      class: {}
    }
    @data.class[beforeName+"-enter-active"] = false
    @data.class[beforeName+"-enter"] = false
    @data.class[beforeName+"-leave-active"] = false
    @data.class[beforeName+"-leave-to"] = false
    console.log beforeName,@data
    @BD()
    
    # Css 动画处理
    if beforeName
      @cssAnimate = ->
        if @root.getAttribute("ishow") == ishow
          return false
        ishow = @root.getAttribute("ishow")
        if @root.getAttribute("ishow") is "true"
          @root.style.display = null
          @data.class[beforeName+"-enter-active"] = true
          @data.class[beforeName+"-enter"] = true
          @data.class[beforeName+"-leave-active"] = false
          @data.class[beforeName+"-leave-to"] = false
          setTimeout ->
            self.data.class[beforeName+"-enter"] = false
          ,0
        else
          @data.class[beforeName+"-enter-active"] = false
          @data.class[beforeName+"-enter"] = false
          @data.class[beforeName+"-leave-active"] = true
          setTimeout ->
            self.data.class[beforeName+"-leave-to"] = true
          ,0
      @end = ->
        @root.style.display = "none" unless ishow?
        @data.class[beforeName+"-enter-active"] = false
        @data.class[beforeName+"-enter"] = false
        @data.class[beforeName+"-leave-active"] = false
        @data.class[beforeName+"-leave-to"] = false

      @on "updated", @cssAnimate

      @on "mount", -> 
        ishow = not @opts.ishow
        # @root.addEventListener TRANSITION_END_NAME, @end.bind @
        # @root.addEventListener ANIMATION_END_NAME, @end.bind @
        @root.style.display = "none" if ishow
          
    # Js  动画处理
    else
      # @opts.enter.call()
      @enterDone = ->
      @leaveDone = ->
        @root.style.display = "none"
      @funAnimate = ->
        if @root.getAttribute("ishow") == ishow
          return false
        ishow = @root.getAttribute("ishow")
        if @root.getAttribute("ishow") is "true"
          @root.style.display = null
          # @root.removeAttribute("style") if @root.style.length <= 0
          @opts.enter @root,@enterDone.bind @
        else
          @opts.leave @root,@leaveDone.bind @

      @on "updated", @funAnimate
      @on "mount", -> 
        ishow = not @opts.ishow
        if ishow
          @root.style.display = "none"
