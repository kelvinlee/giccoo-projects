Vue.component "slider",
  template:'
    <div @mousedown="start" @mousemove="move" @mouseup="end" @touchstart="start" @touchmove.passive="move" @touchend="end">
      <div class="slider-content">
        <slot name="outside" :slideNumber="slideNumber"></slot>
        <div :id="\'slider-\'+id" class="slider" :style="{transitionDuration: duration+\'s\',transform:\'translate3d(\'+x+\'px,0,0)\'}">
          <slot v-if="repeat" :slideNumber="slideNumber"></slot>
          <slot v-if="repeat" :slideNumber="slideNumber"></slot>
          <slot :slideNumber="slideNumber"></slot>
        </div>
      </div>
      <slot name="points" :slideNumber="slideNumber"></slot>
    </div>
    '
  data: ->
    return
      id: Math.ceil Math.random()*100000+99999
      duration: 0
      x: 0
      y: 0
      moved: false
      startTime: 0
      offset: 
        resistance: 1
        lastSlide: 1
        scrollableArea: 320
        isScrolling: false
        lastw: 0
        w: 320
        x: 0
        y: 0
        deltaX: 0
        deltaY: 0
      slider: {}
      count: 0
      slideNumber: 0
      cache: null
  props:
    repeat:
      default: false
    auto:
      default: false
    runtime:
      default: 3000
    arrow:
      default: false
    arrowtop:
      default: false
  methods:
    setSlideNumber: (offset)->
      if @moved
        len = @.count
        len = (@.count * 3) if @repeat
        round = if offset then (if @offset.deltaX < 0 then 'ceil' else 'floor') else 'round'
        slideNumber = Math[round](@x / (@offset.scrollableArea / len))
        slideNumber += offset
        slideNumber = Math.min(slideNumber, 0)
        @slideNumber = Math.max(-(len - 1), slideNumber) % @.count
        @.$emit "number", @slideNumber if offset isnt 0


    start: (evt)->
      clearTimeout @.cache
      if evt.type is "mousedown"
        touch = evt
      else
        touch = evt.touches[0]
      @.count = @.slider.childElementCount
      @startTime = +new Date
      @duration = 0
      @moved = true
      @offset.w = @.slider.clientWidth
      @offset.x = touch.pageX
      @offset.y = touch.pageY
      if @repeat and @x is 0
        @x = -@.count * @offset.w
      @offset.lastw = @x
      @offset.lastSlide = -(@.count - 1)
      @offset.scrollableArea = @offset.w * @.count
      if @repeat
        @offset.scrollableArea = @offset.w * @.count * 3
      @setSlideNumber 0
      # console.log @slideNumber
    move: (evt)->
      return false unless @moved
      if evt.type is "mousemove"
        touch = evt
        evt.preventDefault();
      else
        touch = evt.touches[0]
      @offset.deltaX = touch.pageX - (@offset.x)
      pageX = touch.pageX
      if @repeat
        @x = @offset.deltaX + @offset.lastw
      else
        @x = @offset.deltaX / @offset.resistance + @offset.lastw
        @offset.resistance = if @slideNumber == 0 and @offset.deltaX > 0 then pageX / @offset.w + 1.25 else if @slideNumber == @offset.lastSlide and @offset.deltaX < 0 then (@offset.w - Math.abs(pageX)) / @offset.w + 1.25 else 1
      @moved = true

    end: (evt)->
      if @moved and Math.abs(@offset.deltaX) > 5
        oldslideNumber = @slideNumber
        @setSlideNumber if +new Date - (@startTime) < 1000 and Math.abs(@offset.deltaX) > 15 then (if @offset.deltaX < 0 then -1 else 1) else 0
        @x = @slideNumber * @offset.w
        @duration = 0.2
        @moved = false
        @offset.deltaX = 0
        if @slideNumber == 0 and oldslideNumber == -(@.count - 1)
          @x = (oldslideNumber - 1) * @offset.w
        if oldslideNumber == 0 and @slideNumber == -(@.count - 1)
          @x = 1 * @offset.w
        if @repeat
          @x -= @.count * @offset.w
        else if @slideNumber == 0
          @x = 0
        else
          # console.log @x,@slideNumber
          @x = - Math.abs @x
        @.autoRun() if @.auto
    autoRun: ->
      @.cache = setTimeout =>
        @offset.w = @.slider.clientWidth
        @x = -(@.count * @offset.w) if @x is 0
        @offset.lastw = @x
        @slideNumber--
        # @setSlideNumber 1
        @slideNumber = 0 if Math.abs(@slideNumber) >= @.count
        @x -= @offset.w
        @duration = 0.2
        @.$emit "number", @slideNumber % @.count
        @.autoRun()
      , @.runtime
    transition: ->
      if @x < -((@.count * 2 - 1) * @offset.w)
        @x = -@.count * @offset.w
        @duration = 0
        @slideNumber = 0
      if @x > -(@.count * @offset.w)
        @x = -(@.count * 2 - 1) * @offset.w
        @duration = 0
        @slideNumber = -(@.count - 1)
    next: ->
      @.count = @.slider.childElementCount
      @.offset.w = @.slider.clientWidth
      @slideNumber--
      if @slideNumber > 0
        @slideNumber = 0
        return false 
      if @slideNumber < -(@.count-1)
        @slideNumber = -(@.count-1)
        return false 
      @duration = 0.2
      @x = @slideNumber * @offset.w
      @x = 0 if @x >= 0
      @x = - (@.count * @offset.w) if @x <= - (@.count * @offset.w)

    prev: ->
      @.count = @.slider.childElementCount
      @.offset.w = @.slider.clientWidth
      @slideNumber++
      if @slideNumber > 0
        @slideNumber = 0
        return false 
      if @slideNumber < -(@.count-1)
        @slideNumber = -(@.count-1)
        return false 
      @duration = 0.2
      @x = @slideNumber * @offset.w
      @x = 0 if @x >= 0
      @x = - (@.count * @offset.w) if @x <= - (@.count * @offset.w)


        
  mounted: ->
    @.slider = document.getElementById "slider-"+@.id
    @.count = @.slider.childElementCount
    # console.log "count:",@.count,@.slider,@.slider.childElement,@.slider.childElementCount
    # @setSlideNumber 0
    if @repeat
      @.count = @.count/3
      @.slider.addEventListener TRANSITION_END_NAME, @transition.bind(this)
      setTimeout =>
        @offset.w = @.slider.clientWidth
        @offset.scrollableArea = @.count * @offset.w
        @duration = 0
        @x = -(@.count * @offset.w)
      ,1000
    # console.log @x
    @.autoRun() if @.auto
      
    # @.$el.addEventListener "touchstart", @.start.bind(@)
    # @.$el.addEventListener "touchmove", @.move.bind(@)
    # @.$el.addEventListener "touchend", @.end.bind(@)
