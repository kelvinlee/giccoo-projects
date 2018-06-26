# @codekit-prepend "../../libs/coffee/pixi-base"

class musicScore
  default:
    date: new Date().getTime()
    x: 0
    y: 0
    max: 10
    up: true
    running: true
  constructor: (arg)->
    @.opts =
      el: "main"
      w: 640
      h: 640
      count: 4
      alpha: 0.2
      speed: 0.1
      lineHeight: 20
      defaultShow: true
      class: ""
      fillColor: 0x66CCFF
    @.opts = Object.assign @.opts,arg
    @.default.h = document.documentElement.clientHeight
    @.default.w = document.documentElement.clientWidth
    @.default.ratio = @.opts.w / @.default.w
    @app = new PIXI.Application
      width: @.opts.w
      height: @.opts.h
      transparent: true
      preserveDrawingBuffer: true
    @.app.view.className = @.opts.class if @.opts.class? and @.opts.class isnt ""
    @.stage = @.app.stage
    document.getElementById(@.opts.el).appendChild @.app.view
    PIXI.loader.add([
    ]).load(@.build.bind(@))
  build: ->
    grap = @.grap = new Graphics()
    grap.lineStyle(4, 0xFFFFFF, 1)
    for i in [0...@.opts.count]
      y = 100+(i*@.opts.lineHeight)
      grap.moveTo(0, y)
      grap.bezierCurveTo(0, y, 160, y-40, 320, y+@.opts.lineHeight*1.5)
      y2 = y+@.opts.lineHeight*1.5
      y3 = y2+@.opts.lineHeight*1.5
      grap.moveTo(320, y2)
      grap.bezierCurveTo(320, y2, 480, y3+40, 640, y3)
    grap.alpha = @.opts.alpha
    @.stage.addChild grap
    @.app.ticker.add @.loop.bind @
  loop: (detail)->
    return false if not @.default.running
    grap = @.grap
    grap.clear()
    grap.lineStyle(4, 0xFFFFFF, 1)
    if @.default.up
      @.default.x += @.opts.speed*detail
      @.default.y += @.opts.speed*detail
      @.default.up = false if @.default.x > @.default.max
    else
      @.default.x -= @.opts.speed*detail
      @.default.y -= @.opts.speed*detail
      @.default.up = true if Math.abs(@.default.x) > @.default.max
    x = 0 - Math.abs(@.default.x)
    xend = 640 + Math.abs(@.default.x)
    for i in [0...@.opts.count]
      y = 100+(i*@.opts.lineHeight) + @.default.y * 0.5
      grap.moveTo(x, y)
      grap.bezierCurveTo(x, y, 160+@.default.x, y-40+@.default.y, xend/2, y+@.opts.lineHeight*1.5)
      y2 = y+@.opts.lineHeight*1.5
      y3 = y2+@.opts.lineHeight*1.5
      grap.moveTo(xend/2, y2)
      grap.bezierCurveTo(xend/2, y2, 480+@.default.x, y3+40+@.default.y, xend, y3)

  
