class motionPath
  path: []
  constructor: (arg)->
    @.opts =
      el: "main"
      path: "img/path.png"
      w: 640
      h: 640
      count: 100
      class: ""
      fillColor: 0x66CCFF
    @.opts = Object.assign @.opts,arg
    # @image = image = new Image()
    # image.src = @.opts.path
    # image.onload = @.readPath.bind @
    @app = new PIXI.Application
      width: @.opts.w
      height: @.opts.h
      transparent: true
      preserveDrawingBuffer: true
    @.app.view.className = @.opts.class if @.opts.class? and @.opts.class isnt ""
    @.stage = @.app.stage
    document.getElementById(@.opts.el).appendChild @.app.view
    PIXI.loader.add([
      @.opts.path
    ]).load(@.build.bind(@))
  build: ->
    canvas = document.createElement("canvas")
    path = new Sprite resources[@.opts.path].texture
    image = path._texture.baseTexture.source
    canvas.width = image.width
    canvas.height = image.height
    ctx = canvas.getContext "2d"
    ctx.drawImage image, 0, 0, image.width, image.height
    # imageData = ctx.getImageData(0, 0, @.image.width, @.image.height).data
    for x in [0..image.width]
      for y in [0..image.height]
        imageData = ctx.getImageData(x, y, 1, 1).data
        if imageData[0] isnt 0
          @.path.push {x: x,y: y}

    
    # # 冒泡排序
    # paths = []
    # paths.push @.path[0]
    # clonePath = @.path.concat()
    # for i in [1...@.path.length]
    #   last = paths[paths.length-1]
    #   start = paths.length
    #   for j in [0...clonePath.length-1]
    #     # console.log Math.abs( (clonePath[j].x+clonePath[j].y) - (last.x+last.y) )
    #     if Math.abs(clonePath[j].x - last.x) <= 3 and Math.abs(clonePath[j].y - last.y) <= 3
    #     # if Math.abs( (clonePath[j].x+clonePath[j].y) - (last.x+last.y) ) <= 5
    #       paths.push clonePath[j]
    #       clonePath.splice j,1
    #       break
    # console.log paths
    # @.path = paths
    # # 对比排序
    # @.path.sort (a,b)->
    #   return a.y - b.y if Math.abs(a.x-b.x) <= 1 and Math.abs(a.y-b.y) <= 1
    #   return a.x - b.x

    grap = new Graphics()
    grap.beginFill(@.opts.fillColor)
    grap.lineStyle(2, @.opts.fillColor, 1)
    grap.moveTo @.path[0].x, @.path[0].y
    for i in [1...@.path.length]
      grap.lineTo @.path[i].x,@.path[i].y

    @.stage.addChild grap
    @.app.renderer.render @.app.stage

    # path = new Sprite resources[@.opts.path].texture
    # @.stage.addChild path
    # @.app.renderer.render @.app.stage
    # pixels = @.app.renderer.plugins.extract.pixels()
    
    # for i in [0...(640*640)]
    #   r = pixels[4*i+0]
    #   g = pixels[4*i+1]
    #   b = pixels[4*i+2]
    #   if r isnt 0
    #     @.path.push {x: i%640,y: Math.floor(i/640)}

    # console.log start
    # next = true
    # while next
    #   n = @.path.length-1
    #   prev = @.path[n]
    #   out = false
    #   for x in [-1..1]
    #     for y in [-1..1]
    #       imageData = ctx.getImageData(prev.x+x, prev.y+y, 1, 1).data
    #       if imageData[0] isnt 0 and prev.x isnt prev.x+x and prev.y isnt prev.y+y
    #         @.path.push {x: prev.x+x, y: prev.y+y}
    #         out = true
    #         break
    #     break if out
    #   if n >= (@.path.length - 1) or @.path.length > 2000
    #     next = false

    console.log "end",@.path
    # @.path.sort (a,b)->
    #   return a.x < b.x
    #   m = a.x+a.y
    #   n = b.x+b.y
    #   return not Math.abs(m-n) > 5
    #   return Math.abs(a.x+a.y-b.x-b.y) > 5
    # @.writeLine()
  writeLine: ->
    @.n = 0
    for i in [0...@.path.length-1]
      m = @.path[i].x + @.path[i].y
      n = @.path[i+1].x + @.path[i+1].y
      if Math.abs(m-n) > 5
        console.log i,@.path[i],@.path[i+1]
