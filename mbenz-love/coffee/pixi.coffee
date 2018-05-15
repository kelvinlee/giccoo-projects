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
    console.log @.stars
    for i in [1...10]
      star = new Sprite res["img/page-1-star-#{i%3+1}.png"].texture
      star.x = Math.random()*(640-star.width)
      star.y = Math.random()*(420-star.width)+100
      star.alpha = Math.random()*1
      star.valpha = [1,-1][Math.floor(Math.random()*2)]
      @.stars.push star
      @.app.stage.addChild star
    console.log @.stars
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