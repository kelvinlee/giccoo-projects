# @codekit-prepend "../../libs/pixi/voice"
# @codekit-prepend "../../libs/coffee/pixi-base"
_CDN = "./"

test = {}

class animationLine
  default:
    x: 0
    y: 0
    w: 640
    h: 1138
    MaxX: 0
    centerY: 0
    MaxH: 100
    changX: 80
    preX: 0
    ratio: 1
  constructor: (arg)->
    @.default.h = document.documentElement.clientHeight
    @.default.w = document.documentElement.clientWidth
    @.default.ratio = 640 / @.default.w
    @app = new PIXI.Application
      width: 640
      height: 1138
      transparent: true
      preserveDrawingBuffer: true
    @.app.view.className = "ugcCanvas"
    @.stage = @.app.stage
    document.getElementById('main').appendChild @.app.view
    
    @.start = @.start.bind(@)
    @.move = @.move.bind(@)
    @.end = @.end.bind(@)
    # @.app.view.addEventListener "touchstart", @.start, false
    # @.app.view.addEventListener "touchmove", @.move, false
    # @.app.view.addEventListener "touchend", @.end, false

    PIXI.loader.add([
    ]).load(@.build.bind(@))

  build: ->
    line = @.line = new Graphics()
    @.line.speed = 5
    @.line.direction = Math.random()*(Math.PI/2)
    @.line.moveTo 0,@.default.h/2
    @.default.y = @.default.h/2
    @.stage.addChild @.line
    @.default.MaxX = @.default.changX
    @.default.centerY = @.default.h/2
    @.app.ticker.add @.loop.bind @
  loop: (detail)->
    @.default.x += @.line.speed
    @.default.y += Math.cos(@.line.direction) * @.line.speed
    @.line.lineStyle 4,0x99CCFF,1
    @.line.lineTo @.default.x,@.default.y
    if @.default.x >= @.default.MaxX
      @.default.MaxX = @.default.MaxX+@.default.changX
      @.line.direction = Math.random()*(Math.PI)
    if @.default.y >= @.default.centerY+@.default.MaxH 
      @.default.y = @.default.centerY+@.default.MaxH 
    if @.default.y <= @.default.centerY-@.default.MaxH
      @.default.y = @.default.centerY-@.default.MaxH 
    #   @.line.direction = Math.random()*(Math.PI/2)
    # console.log @.default.y+@.default.MaxH,@.default.y
    if @.default.x >= 320
      @.line.x = -(@.default.x - 320)
    # console.log @.default
  start: (evt)->
    # console.log @,evt
    touch = if evt.touches? then evt.touches[0] else evt
    @.default.x = touch.pageX * @.default.ratio
    @.default.y = touch.pageY * @.default.ratio
    @.line.lineStyle 4,0x99CCFF,1
    @.line.moveTo @.default.x,@.default.y
  move: (evt)->
    touch = if evt.touches? then evt.touches[0] else evt
    @.line.lineStyle 4,0x99CCFF,1
    @.line.lineTo touch.pageX * @.default.ratio,touch.pageY * @.default.ratio
  end: (evt)->

  removeTouch: ->
    @.app.view.removeEventListener "touchstart", @.start
    @.app.view.removeEventListener "touchmove", @.move
    @.app.view.removeEventListener "touchend", @.end
    

window.onload = ->
  test = new animationVoice({el: "main",h: 200})