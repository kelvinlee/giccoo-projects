Sprite = PIXI.Sprite
loader = PIXI.loader
res = PIXI.loader.resources

# star
class stars
  app: null
  moving: true
  stars: []
  loop: (detail)->
    return false if not @.moving or main.pageIndex isnt 1
    for star in @.stars
      if star.valpha >= 1
        star.alpha += 0.01 * detail 
      if star.valpha <= -1
        star.alpha -= 0.01 * detail 
      if star.alpha <= 0
        star.valpha = 1
      if star.alpha >= 1
        star.valpha = -1
  build: ->
    load.progressOn = 100
    console.log "bg all loaded"
    for i in [1...12]
      star = new Sprite res["img/page-1-star-#{i%4+1}.png"].texture
      star.x = Math.random()*(640-star.width)
      star.y = Math.random()*(420-star.width)+100
      star.alpha = Math.random()*1
      star.valpha = [1,-1][Math.floor(Math.random()*2)]
      if i%4+1 is 4
        random = Math.random()*0.5+0.2
        star.scale.x = random
        star.scale.y = random
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
      "img/page-1-star-4.png"
      "img/page-4-rain-1.png"
      "img/page-4-rain-2.png"
      "img/page-4-rain-3.png"
      "img/page-4-rain-4.png"
      "img/page-7-dog-1.png"
      "img/page-7-dog-2.png"
      "img/page-7-dog-3.png"
      "img/page-7-dog-4.png"
      "img/page-7-dog-5.png"
      "img/page-6-cloud-1.png"
      "img/page-6-cloud-2.png"
      "img/page-6-cloud-3.png"
    ]).load(@.build.bind(@))

# rain
class rain
  app: null
  moving: true
  rains: []
  loop: (detail)->
    return false if not @.moving or main.pageIndex isnt 4
    for rain in @.rains
      rain.x += 1 * detail
      rain.y += rain.vy * detail
      if rain.y > 1138
        rain.y = -rain.height
        rain.x = rain.vx

  build: ->
    for i in [1...50]
      rain = new Sprite res["img/page-4-rain-#{i%4+1}.png"].texture
      rain.x = (640-rain.width*1.5) - Math.random()*640
      rain.vx = rain.x
      rain.y = Math.random()*(1138-rain.width)
      rain.vy = Math.random()*4+7
      if i%4+1 is 4
        random = Math.random()*0.5+0.2
        rain.scale.x = random
        rain.scale.y = random
      @.rains.push rain
      @.app.stage.addChild rain

    @.app.ticker.add @.loop.bind @
  init: ->
    @app = new PIXI.Application
      width: 640
      height: 1138
      transparent: true
      preserveDrawingBuffer: true
    document.getElementById('rain').appendChild @.app.view
    PIXI.loader.add([
    ]).load(@.build.bind(@))

# cloud
class cloud
  app: null
  moving: true
  clouds: []
  loop: (detail)->
    return false if not @.moving or main.pageIndex isnt 6
    for cloud in @.clouds
      cloud.x -= cloud.vx * detail
      if cloud.x < -cloud.width
        cloud.x = 640
  build: ->
    for i in [1...4]
      cloud = new Sprite res["img/page-6-cloud-#{i%3+1}.png"].texture
      cloud.x = Math.random() * (640 - cloud.width)
      cloud.vx = 0.2 + 0.2*i
      cloud.alpha = 0.2 + Math.random()*0.3
      cloud.y = Math.random()*60 + i*80
      @.clouds.push cloud
      @.app.stage.addChild cloud

    @.app.ticker.add @.loop.bind @

  init: ->
    @app = new PIXI.Application
      width: 640
      height: 1138
      transparent: true
      preserveDrawingBuffer: true
    document.getElementById('cloud').appendChild @.app.view
    PIXI.loader.add([
    ]).load(@.build.bind(@))

# dog
class dog
  app: null
  moving: true
  dogs: []
  frame: 5
  loop: (detail)->
    return false if not @.moving or main.pageIndex isnt 7
    for n in [0...@.dogs.length*2]
      i = n%(@.dogs.length)
      dog = @.dogs[i]
      if dog.alpha is 1
        dog.vf -= detail
        if dog.vf <= 0
          dog.alpha = 0
          dog.vf = @.frame
          if n > i
            next = i - 1
          else
            next = i+1
          next = 0 if next >= @.dogs.length
          @.dogs[next].alpha = 1
        break


  build: ->
    for i in [1...5]
      dog = new Sprite res["img/page-7-dog-#{i}.png"].texture
      dog.alpha = 0
      dog.vf = @.frame
      @.dogs.push dog
      @.app.stage.addChild dog
    @.dogs[0].alpha = 1
    @.app.ticker.add @.loop.bind @
  init: ->
    @app = new PIXI.Application
      width: 640
      height: 1138
      transparent: true
      preserveDrawingBuffer: true
    document.getElementById('dog').appendChild @.app.view
    PIXI.loader.add([
    ]).load(@.build.bind(@))
# ugc

class UGC
  app: null
  moving: true
  saveUGC: null
  qr: null
  mark: null
  random: 1
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
    
    title = new Sprite res["img/ugc-title.png"].texture
    @.app.stage.addChild title

    text = new Sprite res["img/ugc-#{@.id}-#{@.random}.png"].texture
    @.app.stage.addChild text

    @.app.stage.addChild qr
    @.app.renderer.render @.app.stage
    @.saveUGC = @.app.view.toDataURL()
    @.ugc()

    qr.x = mark.x + 20
    qr.y = mark.y + mark.height - qr.height - 20
    @.app.stage.addChildAt mark,3
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
    @.random = Math.floor Math.random()*4+1
    PIXI.loader.add([
      "img/page-#{@.id}-bg.jpg"
      "img/ugc-qr.png"
      "img/mark.png"
      "img/long-save.png"
      "img/save-text.png"
      "img/ugc-title.png"
      "img/ugc-#{@.id}-#{@.random}.png"
    ]).load(@.build.bind(@))
