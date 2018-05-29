class animationVoice
  default:
    x: 0
    y: 0
    w: 640
    h: 1138
    preX: 0
    ratio: 1
    date: new Date().getTime()
  voice:
    x: 0
    y: 0
    w: 4
    MaxH: 100
  voices: []
  moved: false
  constructor: (arg)->
    @.opts =
      el: "main"
      w: 640
      h: 1138
      count: 100
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
    for i in [0...@.opts.count+3]
      @.add(i)
    @.app.ticker.add @.loop.bind @
  add: (i)->
    grap = new Graphics()
    grap.beginFill(@.opts.fillColor)
    h = Math.random() * @.opts.h*0.95 + @.opts.h*0.05
    w = @.opts.w/(@.opts.count*2)
    y = (@.opts.h - h)/2
    grap.drawRect(0, y, w, h)
    grap.x = -w*2 * i
    if @.opts.defaultShow
      grap.x = w*2 * i

    @.voices.push grap
    @.stage.addChild grap
    return grap
  rebuild: (grap)->
    grap.clear()
    grap.beginFill(@.opts.fillColor)
    grap.alpha = 1
    h = Math.random() * @.opts.h*0.95 + @.opts.h*0.05
    w = @.opts.w/(@.opts.count*2)
    y = (@.opts.h - h)/2
    grap.drawRect(0, y, w, h)
  rebuildAll: ->
    for i in [0...@.voices.length]
      grap = @.voices[i]
      @.rebuild grap
      w = @.opts.w/(@.opts.count*2)
      grap.x = -w*2 * i

  clear: ->
    @.grap.clear()
    @.grap.x = 0
    @.default.x = 0
  stop: ->
    @.clear()
    @.moved = false
  pause: ->
    @.moved = false
  play: ->
    @.moved = true
  loop: (detail)->
    return false unless @.moved
    for grap in @.voices
      grap.x += @.opts.w/(@.opts.count*3) * detail
      if (@.opts.w - grap.x)/@.opts.w*100 <= 30
        grap.alpha -= 0.01 * detail
      if grap.x > @.opts.w
        grap.x = 0
        @.rebuild grap
