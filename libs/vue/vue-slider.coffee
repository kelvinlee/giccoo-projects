Vue.component "slider",
  template:'
    <div @touchstart="start" @touchmove.passive="move" @touchend="end">
      <div class="slider-content">
        <slot name="outside" :slideNumber="slideNumber"></slot>
        <div :id="\'slider-\'+id" class="slider" :style="{transitionDuration: duration+\'s\',transform:\'translate3d(\'+x+\'px,0,0)\'}">
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
  props:
    arrow:
      default: false
    arrowtop:
      default: false
  methods:
    setSlideNumber: (offset)->
      if @moved
        round = if offset then (if @offset.deltaX < 0 then 'ceil' else 'floor') else 'round'
        slideNumber = Math[round](@x / (@offset.scrollableArea / @.count))
        slideNumber += offset
        slideNumber = Math.min(slideNumber, 0)
        @slideNumber = Math.max(-(@.count - 1), slideNumber) % @.count

    start: (evt)->
      touch = evt.touches[0]
      @startTime = +new Date
      @duration = 0
      @moved = false
      @offset.w = @.slider.clientWidth
      @offset.x = touch.pageX
      @offset.y = touch.pageY
      @offset.lastw = @x
      @offset.lastSlide = -(@.count - 1)
      @offset.scrollableArea = @offset.w * @.count
      @setSlideNumber 0
    move: (evt)->
      touch = evt.touches[0]
      @offset.deltaX = touch.pageX - (@offset.x)
      pageX = touch.pageX
      @x = @offset.deltaX / @offset.resistance + @offset.lastw
      @offset.resistance = if @slideNumber == 0 and @offset.deltaX > 0 then pageX / @offset.w + 1.25 else if @slideNumber == @offset.lastSlide and @offset.deltaX < 0 then (@offset.w - Math.abs(pageX)) / @offset.w + 1.25 else 1
      @moved = true
    end: (evt)->
      if @moved
        oldslideNumber = @slideNumber
        @setSlideNumber if +new Date - (@startTime) < 1000 and Math.abs(@offset.deltaX) > 15 then (if @offset.deltaX < 0 then -1 else 1) else 0
        @x = @slideNumber * @offset.w
        @duration = 0.2
  mounted: ->
    @.slider = document.getElementById "slider-"+@.id
    @.count = @.slider.childElementCount
    # console.log @.$el

    # @.$el.addEventListener "touchstart", @.start.bind(@)
    # @.$el.addEventListener "touchmove", @.move.bind(@)
    # @.$el.addEventListener "touchend", @.end.bind(@)
