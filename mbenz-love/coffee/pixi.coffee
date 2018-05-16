Sprite = PIXI.Sprite
loader = PIXI.loader
res = PIXI.loader.resources

# star
class stars
  app: null
  moving: true
  stars: []
  loop: (detail)->
    return false unless @.moving
    for star in @.stars
      if star.valpha >= 1
        star.alpha += 0.02 * detail 
      if star.valpha <= -1
        star.alpha -= 0.02 * detail 
      if star.alpha <= 0
        star.valpha = 1
      if star.alpha >= 1
        star.valpha = -1
  build: ->

    for i in [1...10]
      star = new Sprite res["img/page-1-star-#{i%3+1}.png"].texture
      star.x = Math.random()*(640-star.width)
      star.y = Math.random()*(420-star.width)+100
      star.alpha = Math.random()*1
      star.valpha = [1,-1][Math.floor(Math.random()*2)]
      @.stars.push star
      @.app.stage.addChild star

    @.app.ticker.add @.loop.bind @
  init: ->
    @app = new PIXI.Application
      width: 640
      height: 1138
      transparent: true
      preserveDrawingBuffer: true
    document.getElementById('stars').appendChild @.app.view
    PIXI.loader.add([
      "img/page-1-star-1.png"
      "img/page-1-star-2.png"
      "img/page-1-star-3.png"
    ]).load(@.build.bind(@))

# rain

class UGC
  app: null
  moving: true
  saveUGC: null
  qr: null
  mark: null
  loop: (detail)->
    return false unless @.moving

  constructor: (options)->
    {@id,@bg,@wy,@background,@ugc} = options
    @.init()
  get: ->
    
    @.qr.x = 20
    @.qr.y = 1138 + 4 - 20 - @.qr.height
    setTimeout =>
      @.saveUGC = @.app.view.toDataURL()
      @.ugc()
    ,100

  build: ->
    console.log res["img/page-#{@.id}-bg.jpg"].texture
    bg = new Sprite res["img/page-#{@.id}-bg.jpg"].texture
    @.app.stage.addChild bg

    if @bg?
      animate = new Sprite PIXI.Texture.fromCanvas @bg
      @.app.stage.addChild animate

    @.mark = mark = new Sprite res["img/mark.png"].texture
    mark.x = (640 - mark.width)/2
    mark.y = (1138 - mark.height)/2
    qr = @.qr = new Sprite res["img/ugc-qr.png"].texture
    @.qr.x = 20
    @.qr.y = 1138 + 4 - 20 - @.qr.height
    
    @.app.stage.addChild qr
    @.app.renderer.render @.app.stage
    @.saveUGC = @.app.view.toDataURL()
    @.ugc()

    qr.x = mark.x + 20
    qr.y = mark.y + mark.height - qr.height - 20
    @.app.stage.addChildAt mark,1
    saveText = "img/long-save.png"
    if @wy? and @wy
      saveText = "img/save-text.png"
    save = new Sprite res[saveText].texture
    save.x = 640 - mark.x - save.width - 20
    save.y = mark.y + mark.height - save.height - 20
    @.app.stage.addChild save

    # @.over()
  init: ->
    @app = new PIXI.Application
      width: 640
      height: 1138
      transparent: true
      preserveDrawingBuffer: true
    document.getElementById('ugc').appendChild @.app.view
    PIXI.loader.add([
      "img/page-#{@.id}-bg.jpg"
      "img/ugc-qr.png"
      "img/mark.png"
      "img/long-save.png"
      "img/save-text.png"
    ]).load(@.build.bind(@))
