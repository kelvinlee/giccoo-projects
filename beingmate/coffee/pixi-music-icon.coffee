# @codekit-prepend "../../libs/coffee/pixi-base"

class musicIcon
  list: []
  default:
    w: 320
    h: 160
    running: true
  constructor: (arg)->
    @.opts =
      el: "main"
      w: 640
      h: 400
      count: 6
      speed: 1
      alpha: 0.8
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
      _CDN+"img/music-icon-1.png",
      _CDN+"img/music-icon-2.png"
    ]).load(@.build.bind(@))
  build: ->
    for i in [0...@.opts.count]
      icon = new Sprite resources[_CDN+"img/music-icon-#{i%2+1}.png"].texture
      icon.x = Math.random()*@.opts.w
      icon.y = Math.random()*(@.opts.h - icon.height)
      icon.turnSpeed = Math.random() - 0.8
      icon.direction = Math.random() * Math.PI * 2
      icon.speed = @.opts.speed + Math.random() * @.opts.speed
      icon.alpha = Math.random()*0.3 + 0.2
      scale = Math.random()*0.5+0.3
      icon.scale.set(scale,scale)
      @.list.push icon
      @.stage.addChild icon
    @.app.ticker.add @.loop.bind @
    @.opts.callback() if @.opts.callback?
  loop: (detail)->
    return false if not @.default.running
    for icon in @.list
      icon.direction += icon.turnSpeed * 0.005
      icon.x += Math.sin(icon.direction) * icon.speed * detail
      # icon.y += Math.cos(icon.direction) * icon.speed
      if icon.x > @.opts.w
        icon.x = 0
        icon.y = Math.random()*(@.opts.h - icon.height)
      if icon.x < -icon.width
        icon.x = @.opts.w
        icon.y = Math.random()*(@.opts.h - icon.height)

class musicIconCD
  list: []
  default:
    w: 320
    h: 160
    running: true
  constructor: (arg)->
    @.opts =
      el: "main"
      w: 640
      h: 640
      list: [
        {x: 250,y: 480}
        {x: 190,y: 440}
        {x: 130,y: 380}
        {x: 80,y: 440}
        {x: 20,y: 360}
      ]
      speed: 1
      alpha: 0.8
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
    for i in [0...@.opts.list.length]
      icon = new Sprite resources[_CDN+"img/music-icon-#{i%2+1}.png"].texture
      icon.x = @.opts.list[i].x
      icon.dx = @.opts.list[i].x
      icon.y = @.opts.list[i].y
      icon.dy = @.opts.list[i].y
      icon.turnSpeed = Math.random() + 0.2
      icon.direction = Math.PI * 2
      icon.speed = @.opts.speed + Math.random() * @.opts.speed
      icon.alpha = Math.random()*0.5 + 0.5
      icon.scale.set(0.5+(i%5*0.1),0.5+(i%5*0.1))
      @.list.push icon
      @.stage.addChild icon
    @.app.ticker.add @.loop.bind @
    
  loop: (detail)->
    return false if not @.default.running
    for icon in @.list
      icon.direction += icon.turnSpeed * 0.005
      icon.x -= Math.sin(icon.direction * 10) *0.5 * detail
      icon.y -= Math.cos(icon.direction) * 0.2 * detail
      icon.alpha -= 0.003 * detail
      if icon.alpha <= 0 or icon.x <= -icon.width or icon.y <= -icon.height or icon.x > @.opts.w or icon.y > @.opts.h
        icon.direction = Math.PI * 2
        icon.x = icon.dx
        icon.y = icon.dy
        icon.alpha = 1

