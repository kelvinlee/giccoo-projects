# @codekit-prepend "../../libs/coffee/pixi-base"
_CDN = "./"
UGCTITLE = parseInt Math.random()*5+1
images = [
  _CDN+"img/that-girl.png"
  _CDN+"img/cloud-1.png"
  _CDN+"img/cloud-2.png"
  _CDN+"img/cloud-3.png"
  _CDN+"img/icon-symbol-1.png"
  _CDN+"img/icon-symbol-2.png"
  _CDN+"img/icon-symbol-3.png"
  _CDN+"img/icon-symbol-4.png"
  _CDN+"img/icon-symbol-5.png"
  _CDN+"img/point.png"
  _CDN+"img/product-border.png"
  _CDN+"img/product-item.png"
  _CDN+"img/product.png"
  _CDN+"img/product-light-1.png"
  _CDN+"img/product-light-2.png"
  _CDN+"img/product-bg.jpg"
  _CDN+"img/product-bg-end.jpg"
  _CDN+"img/page-1-title.png"
  _CDN+"img/page-1-title-null.png"
  _CDN+"img/page-2-title-null.png"
  _CDN+"img/page-2-title.png"
  _CDN+"img/page-3-title-null.png"
  _CDN+"img/page-3-title.png"
  _CDN+"img/page-4-title.png"
  _CDN+"img/page-4-title-null.png"
  _CDN+"img/page-5-title.png"
  _CDN+"img/page-6-title.png"
  _CDN+"img/moon.png"
  _CDN+"img/arrow.png"
  _CDN+"img/cd.png"
  _CDN+"img/cd-pointer.png"
  _CDN+"img/ball.png"
  _CDN+"img/phone.png"
  _CDN+"img/qrcode.png"
  _CDN+"img/star-1.png"
  _CDN+"img/star-2.png"
  _CDN+"img/light-1.png"
  _CDN+"img/light-2.png"
  _CDN+"img/light-3.png"
  _CDN+"img/ugc-1.png"
  _CDN+"img/ugc-2.png"
  _CDN+"img/ugc-2-1.png"
  _CDN+"img/ugc-3-1.png"
  _CDN+"img/ugc-4.png"
  _CDN+"img/ugc-4-1.png"
  _CDN+"img/ugc-4-2.png"
  _CDN+"img/ugc-5.png"
  _CDN+"img/ugc-5-1.png"
  _CDN+"img/ugc-5-2.png"
  _CDN+"img/ugc-5-3.png"
  _CDN+"img/ugc-title-#{UGCTITLE}.png"
]
page1Images = [
  _CDN+"img/that-girl.png"
  _CDN+"img/point.png"
  _CDN+"img/product-border.png"
  _CDN+"img/product-item.png"
  _CDN+"img/page-1-title-null.png"
  _CDN+"img/cloud-1.png"
  _CDN+"img/cloud-2.png"
  _CDN+"img/cloud-3.png"
  _CDN+"img/star-1.png"
  _CDN+"img/star-2.png"
]

# iphone x 适配

lastDate = null
lastTime = null
lastName = null
shareName = null
# 

class sulwhasoo
  list: []
  loadCount: 0
  animation: false
  Index: 0
  ugcIndex: 1
  progress: 0
  maxProgress: 0
  starLoad: false
  cloudTime: 1.2
  default:
    w: 750
    h: 1333
    canvasH: 510
    running: true
  constructor: (arg)->
    TrueH = document.documentElement.clientHeight
    TrueW = document.documentElement.clientWidth
    @.truew = TrueW
    @.trueh = TrueH
    @.opts =
      el: "main"
      w: 750
      h: 1333
      speed: 1
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
      _CDN+"img/icon-loading.png"
      _CDN+"img/star.png"
    ]).load(@.build.bind(@))
    
  loaded: (name)->
    @.loadCount++
    count = if main.wy then images.length else page1Images.length
    @.maxProgress = Math.ceil @.loadCount/count*100
    unless main.wy
      @.loadText.text = "Loading...#{@.maxProgress}%"
      if @.maxProgress >= 100
        @.loadEnd()
      return false
    unless @.starLoad
      @.starLoad = true
      @.loadProgress()
  loadEnd: ->
    _public.note = false
    _tar = @.loading
    _tar.scaleS = 1
    # console.log @.loading.scale = 1.5
    TweenLite.to(_tar,1.5,{
      alpha: 0
      onComplete: =>
        @.app.ticker.remove @._loopLoading
        @.page1()
      onUpdateParams:[_tar]
    })
  loadProgress: ->
    timein = setInterval =>
      @.progress += 3
      @.progress = @.maxProgress if @.progress >= @.maxProgress
      @.loadText.text = "Loading...#{@.progress}%"
      if @.progress >= 100
        clearInterval timein
        setTimeout =>
          @.loadEnd()
        ,1000
    ,1000/10
  # loading page
  build: ->
    @.default.canvasH = canvasH = document.getElementById(@.opts.el).clientHeight
    console.log "created",canvasH, canvasH < @.default.h
    main.biger = true if canvasH < @.default.h
    bg = new Graphics()
    bg.beginFill 0x1e2c3b
    bg.drawRect 0,0,750,1333
    @.stage.addChild bg
    @.loading = new Container()
    @.icon = icon = new Sprite getTe _CDN+"img/icon-loading.png"
    icon.anchor.set(0.5,0.5)
    icon.x = 750/2
    icon.y = 1333/2 - 100
    icon.rotation = 0
    
    @.stars = []
    for i in [0...18]
      star = new Sprite getTe _CDN+"img/star.png"
      star.anchor.set(0.5,0.5)
      star.x = 750/2 - icon.width/2 + Math.random()*icon.width
      star.y = 1333/2 - 100 + Math.random() * 200
      star.alpha = Math.random()*0.5+0.2
      star.speed = Math.random()*2 + 1
      size = Math.random()*0.5+0.5
      star.scale.set(size,size)
      @.loading.addChild star
      @.stars.push star

    @.loading.addChild icon
    @.stage.addChild @.loading
    @._loopLoading = @.loopLoading.bind @
    @.app.ticker.add @._loopLoading
    # @.app.ticker.add @.tween
    @.loadText = new Text "Loading...0",{fontFamily : 'Arial', fontSize: 24, fill : 0xffffff, align : 'center'}
    @.loadText.x = 750/2-@.loadText.width/2
    @.loadText.y = 1100
    @.loading.addChild @.loadText
    @.opts.callback() if @.opts.callback?
    # @.app.ticker.remove @._loopLoading
    unless main.wy
      PIXI.loader.add(page1Images).use(@.loaded.bind(@)).load(@.build.bind(@))
    else
      PIXI.loader.add(images).use(@.loaded.bind(@)).load(@.build.bind(@))
    @.animation = true
  # page 1
  page1: ->
    @.Index = 1
    @.stage.removeChild @.loading
    @.cloud = new Container()
    @.cloud.alpha = 0
    @.page = new Container()
    @.page2 = new Container()
    @.page2.alpha = @.page.alpha = 0
    @.page2.x = @.page.x = 20
    @.page2.y = @.page.y = 20

    @.clouds = []
    xylist = [
      {x: 750/2-100, y: 200}
      {x: 750/2+100, y: 420}
      {x: 750/2-100, y: 780}
      {x: 750/2+100, y: 1150}
      {x: 750/2-100, y: 1200}
    ]
    for i in [0...5]
      cloud = new Sprite getTe _CDN+"img/cloud-#{i%3+1}.png"
      cloud.anchor.set(0.5,0.5)
      cloud.x = cloud.dex = xylist[i].x
      cloud.y = cloud.dey = xylist[i].y
      cloud.direction = if Math.random() > 0.5 then true else false
      if i is 3
        cloud.scale.set(1.3,1.3)
      if i is 2
        cloud.scale.set(0.8,0.8)
      @.cloud.addChild cloud
      @.clouds.push cloud

    woman = new Sprite getTe _CDN+"img/that-girl.png"
    @.page.addChild woman
    point = new Sprite getTe _CDN+"img/point.png"
    point.x = 350
    point.y = 800
    point.alpha = 0
    @.page.addChild point
    productBorder = new Sprite getTe _CDN+"img/product-border.png"
    productBorder.scale.set(0.7,0.7)
    productBorder.x = 420
    productBorder.y = 760
    productBorder.alpha = 0
    @.page.addChild productBorder
    product = new Sprite getTe _CDN+"img/product-item.png"
    product.scale.set(0.7,0.7)
    product.x = 420
    product.y = 760 - 4
    product.alpha = 0
    product.buttonMode = true
    product.interactive = true
    product.touchstart = product.click = ()=>
      console.log "click product",@.animation
      return false if @.animation
      unless main.wy
        return window.location.href = "https://m.music.163.com/m/applink/?scheme=orpheus%3A%2F%2Fopenurl%3Furl%3Dhttps%3A%2F%2Factivity.music.163.com%2Fsulwhasoo%2F%26thirdfrom%3Dwx"
      @.page1Out()
    @.page.addChild product
    # title = new Sprite getTe _CDN+"img/page-1-title.png"
    unless main.wy
      title = new Sprite getTe _CDN+"img/page-1-title-null.png"
    else
      title = new Sprite getTe _CDN+"img/page-1-title.png"
    title.y = 200
    title.alpha = 0
    @.page.addChild title
    @.bg = bg = new Container()
    for i in [0...50]
      star = new Sprite getTe _CDN+"img/star-#{i%2+1}.png"
      star.x = Math.random()*(750 - star.width)
      star.y = Math.random()*(1333 - star.height)
      star.scale.set(0.2,0.2)
      star.alpha = 0.5 + Math.random()*0.5
      @.bg.addChild star
    for i in [0...20]
      star = new Sprite getTe _CDN+"img/star-#{i%2+1}.png"
      star.x = Math.random()*(750 - star.width)
      star.y = Math.random()*(1333 - star.height)
      star.scale.set(0.3,0.3)
      star.alpha = 0.5 + Math.random()*0.5
      @.bg.addChild star
    @.largeStars = []
    for i in [0...10]
      star = new Sprite getTe _CDN+"img/star-#{i%2+1}.png"
      star.x = Math.random()*(750 - star.width)
      star.y = Math.random()*(1333 - star.height)
      size = Math.random()*0.2
      star.scale.set(0.4+size,0.4+size)
      star.direction = true
      star.speed = 0.2 + Math.random() * 0.8
      star.wait = 1+Math.random()*1
      @.bg.addChild star
      @.largeStars.push star

    @.stage.addChild @.bg
    @.stage.addChild @.page
    @.stage.addChild @.page2
    @.stage.addChild @.cloud

    TweenLite.to(@.cloud,.5,{
      alpha: 1,
      onComplete: =>
        TweenLite.to @.page,2.5, 
          x:0,
          y:0,
          alpha: 1,
          ease: Cubic.linear
          onComplete: =>
            @.app.ticker.add @.loopCloud.bind(@)
            time = 0.5
            TweenLite.to point,time,
              x: 475, 
              ease: Circ.easeIn, 
              onComplete: =>
                TweenLite.to point,time,
                  x: 590, 
                  ease: Circ.easeOut,
                  # onComplete: =>
                  #   TweenLite.to point,time,
                  #     x: 475, 
                  #     ease: Circ.easeIn, 
                  #     onComplete: =>
                  #       TweenLite.to point,time,
                  #         x: 350, 
                  #         ease: Circ.easeOut

            TweenLite.to point,time, 
              y: 680, 
              ease: Circ.easeOut, 
              onComplete:=> 
                TweenLite.to point,time, 
                  y: 800, 
                  ease: Circ.easeIn, 
                  onComplete: =>
                    TweenLite.to point,time, 
                      y: 900,
                      alpha: 0,
                      ease: Circ.easeOut, 
                      onComplete: =>
                        TweenLite.to productBorder,time*3, {alpha: 0.8}
                        @.animation = false
                        # TweenLite.to point,time, 
                        #   y: 800, 
                        #   alpha: 0,
                        #   ease: Circ.easeIn,
                        #   onComplete: =>
                        TweenLite.to product,time*3, 
                          alpha: 1, 
                          onComplete: => 
                            @.productLight(productBorder)
                        TweenLite.to title,time*3, {alpha: 1,y: 1333/2 - title.height/2 - 120}
        TweenLite.to point,1,{alpha: 1,delay: 1}
        @.showCloud()
    })
    @.app.ticker.add @.loopBgStar.bind(@)
  # 产品发光
  productLight: (item)->
    return false unless @.page.visible
    TweenLite.to item, .3, 
      alpha: 0.2, 
      onComplete: =>
        TweenLite.to item, .6, 
          alpha: 1,
          onComplete: =>
            @.productLight item
  # page 1 移除
  page1Out: ->
    @.hideCloud()
    # 跳过中间页
    @.page2build()
    # @.page5build()
    TweenLite.to @.page,.7,
      alpha: 0,
      x: 20,
      y: 20,
      onComplete: => 
        # @.page.removeChildren()
        @.page.visible = false
  # page 2
  page2build: ->
    # @.page2
    # unless lastDate?
    #   return @.page3build()
    @.Index = 2
    @.animation = true
    moon = new Sprite getTe _CDN+"img/moon.png"
    moon.anchor.set(0.5,0.01)
    moon.x = 750/2
    moon.scale.set(1.01,1.01)
    @.page2.addChild moon
    title = new Container()
    title.alpha = 0
    unless lastDate?
      titleBG = new Sprite getTe _CDN+"img/page-2-title-null.png"
    else
      titleBG = new Sprite getTe _CDN+"img/page-2-title.png"
      date = new Text lastDate,{fontFamily : 'Arial', fontSize: 44, fill : 0x2a985d, align : 'left'}
      date.y = 142
      time = new Text lastTime,{fontFamily : 'Arial', fontSize: 44, fill : 0x2a985d, align : 'left'}
      time.y = 195
      title.addChild time
      title.addChild date
    title.x = 190
    title.y = 750
    title.addChild titleBG
    
    @.page2.addChild title
    btn = @.nextBtn()
    @.page2.addChild btn
    @.page2.buttonMode = true
    @.page2.interactive = true
    @.page2.touchstart = @.page2.click = (data)=>
      return false if @.animation
      @.page2Out()


    TweenLite.to @.page2,@.cloudTime,
      x: 0
      y: 0
      alpha: 1,
      delay: .7
      onComplete: =>
        @.showCloud()
        @.moonswing moon
        TweenLite.to title, 1.6, {alpha: 1}
        @.animation = false
        btnRun()
    self = @
    btnRun = ->
      return false unless self.page2.visible
      y = btn.y
      TweenLite.to btn,1.8,
        y: y+10
        alpha: 0
        onComplete: =>
          btn.alpha = 1
          btn.y = y
          btnRun()

  # 月亮摇摆
  moonswing: (moon)->
    # moon.rotation
    return false unless @.page2.visible
    TweenLite.to moon,1.5,
      rotation: 0.005
      onComplete: =>
        TweenLite.to moon,1.5,
          rotation: -0.005
          onComplete: =>
            @.moonswing moon
  # page 2 out
  page2Out: ->
    @.hideCloud()
    # 跳过中间页
    @.page3build()
    TweenLite.to @.page2,.7, 
      alpha: 0,
      x: 20,
      y: 20,
      onComplete: => 
        @.page2.removeChildren()
        @.page2.visible = false
  # page 3
  page3build: ->
    # unless lastName?
    #   return @.page4build()
    @.Index = 3
    @.animation = true
    @.page3 = new Container()
    @.page3.alpha = 0
    @.page3.x = 20
    @.page3.y = 20

    cd = new Sprite getTe _CDN+"img/cd.png"
    cd.anchor.set(0.5,0.5)
    cd.x = 750/2
    cd.y = cd.height - 120
    @.page3.addChild cd

    cdPointer = new Sprite getTe _CDN+"img/cd-pointer.png"
    cdPointer.anchor.set(1,0)
    cdPointer.x = 750-100
    cdPointer.y = 0
    cdPointer.rotation = 0.7
    @.page3.addChild cdPointer

    title = new Container()
    unless lastName?
      titleText= new Sprite getTe _CDN+"img/page-3-title-null.png"
    else
      titleText= new Sprite getTe _CDN+"img/page-3-title.png"
      name = new Text "《#{lastName}》",{fontFamily : 'Arial', fontSize: 44, fill : 0x2a985d, align : 'center'}
      # name.width = titleText.width
      name.y = 138
      name.x = titleText.width/2 - name.width/2
      title.addChild name
    title.x = 750/2 - titleText.width/2
    title.y = cd.height + 230
    title.addChild titleText
    @.page3.addChild title

    btn = @.nextBtn()
    @.page3.addChild btn

    @.stage.addChildAt @.page3,2
    @.page3.buttonMode = true
    @.page3.interactive = true
    @.page3.touchstart = @.page3.click = (data)=>
      return false if @.animation
      @.page3Out()

    TweenLite.to @.page3,@.cloudTime,
      x: 0
      y: 0
      alpha: 1,
      delay: .7
      onComplete: =>
        @.showCloud()
        btnRun()
        @.animation = false
        TweenLite.to cdPointer,1.7,
          rotation: 0
          onComplete: ->
            runCD()
    self = @
    runCD = ->
      return false unless self.page3.visible
      cd.rotation = 0
      TweenLite.to cd, 6,
        rotation: Math.PI * 2
        onComplete: =>
          runCD()
    btnRun = ->
      return false unless self.page3.visible
      y = btn.y
      TweenLite.to btn,1.8,
        y: y+10
        alpha: 0
        onComplete: =>
          btn.alpha = 1
          btn.y = y
          btnRun()
  page3Out: ->
    @.hideCloud()
    # 跳过中间页
    @.page4build()
    TweenLite.to @.page3,.7, 
      alpha: 0,
      x: 20,
      y: 20,
      onComplete: => 
        @.page3.removeChildren()
        @.page3.visible = false
  page4build: ->
    # unless shareName?
    #   return @.page5build()
    @.Index = 4
    @.animation = true
    @.page4 = new Container()
    @.page4.alpha = 0
    @.page4.x = 20
    @.page4.y = 20

    ball = new Container()
    item = new Sprite getTe _CDN+"img/ball.png"
    phone = new Sprite getTe _CDN+"img/phone.png"
    item.x = phone.x = 0
    item.y = phone.y = 0
    ball.x = 270
    ball.y = 750
    ball.width = item.width
    ball.height = item.height
    ball.addChild phone
    ball.addChild item

    @.page4.addChild ball

    title = new Container()
    unless shareName?
      titleText= new Sprite getTe _CDN+"img/page-4-title-null.png"
    else
      titleText= new Sprite getTe _CDN+"img/page-4-title.png"
      name = new Text "《#{shareName}》",{fontFamily : 'Arial', fontSize: 42, fill : 0x2a985d, align : 'left'}
      # name.width = titleText.width
      name.y = 238
      name.x = 58
      title.addChild name
    title.x = 30
    title.y = 630
    title.alpha = 0
    title.addChild titleText
    @.page4.addChild title

    btn = @.nextBtn()
    @.page4.addChild btn

    @.stage.addChildAt @.page4,2
    @.page4.buttonMode = true
    @.page4.interactive = true
    @.page4.touchstart = @.page4.click = (data)=>
      console.log "page 4"
      return false if @.animation
      @.page4Out()

    TweenLite.to @.page4,@.cloudTime,
      x: 0
      y: 0
      alpha: 1,
      delay: .7
      onComplete: =>
        @.showCloud()
        btnRun()
        @.animation = false
        TweenLite.to title, 0.7,
          alpha: 1,
          delay: 2.7
        TweenLite.to ball, 3,
          x: 300,
          ease: Cubic.easeIn,
          onComplete: =>
            # runBall()
        TweenLite.to ball, 3,
          y: 100,
          ease: Cubic.easeOut,
          onComplete: =>
            TweenLite.to item, 12,
              y: - item.height - 100
        # TweenLite.to ball,3,
        #   ease: Elastic.easeOut


    self = @
    btnRun = ->
      return false unless self.page4.visible
      y = btn.y
      TweenLite.to btn,1.8,
        y: y+10
        alpha: 0
        onComplete: =>
          btn.alpha = 1
          btn.y = y
          btnRun()
    runBall = ->
      TweenLite.to ball,2,
        y: 280,
        ease: Cubic.easeIn
      TweenLite.to ball,2,
        x: 290,
        ease: Cubic.easeOut,
        onComplete: =>
          TweenLite.to ball,1.5,
            y: 300,
            ease: Cubic.easeOut
          TweenLite.to ball,1.5,
            x: 300,
            ease: Cubic.easeIn,
            onComplete: =>
              runBall()
  page4Out: ->
    @.hideCloud()
    # 跳过中间页
    @.page5build()
    TweenLite.to @.page4,.7, 
      alpha: 0,
      x: 20,
      y: 20,
      onComplete: => 
        @.page4.removeChildren()
        @.page4.visible = false
  page5build: ->
    @.Index = 5
    @.animation = true
    @.page5 = new Container()
    @.page5.alpha = 0
    @.page5.x = 0
    @.page5.y = 0
    step = 0
    # btn = @.nextBtn()
    # @.page5.addChild btn

    @.stage.addChildAt @.page5,2
    @.page5.buttonMode = true
    @.page5.interactive = true
    @.page5.touchstart = @.page5.click = (data)=>
      console.log "page 5 click"
      if step is 1
        page5ShowStep2()
      return false if @.animation
      @.page5Out()

    TweenLite.to @.page5,@.cloudTime,
      x: 0
      y: 0
      alpha: 1,
      delay: .7
      onComplete: =>
        @.showCloud()
        page5ShowStep1()

    self = @
    title = new Sprite getTe _CDN+"img/page-5-title.png"
    title.anchor.set(0.5,0.5)
    title.x = 750/2
    title.y = 1333/2 + 100
    title.alpha = 0
    @.page5.addChild title

    icons = []
    for i in [0...5]
      icon = new Sprite getTe _CDN+"img/icon-symbol-#{i+1}.png"
      icon.anchor.set(0.5,0.5)
      icon.x = 750/2 + 20 + 50 + (i%2)*-100
      icon.y = - 100 * (i+1)
      icons.push icon
      @.page5.addChild icon

    lightS = new Sprite getTe _CDN+"img/product-light-1.png"
    lightS.anchor.set(0.5,1)
    lightL = new Sprite getTe _CDN+"img/product-light-2.png"
    lightL.anchor.set(0.5,1)
    lightL.alpha = lightS.alpha = 0
    lightS.x = lightL.x = 750/2
    lightS.y = lightL.y = 1333/2 - 76
    lightS.scaleX = 1
    lightL.scaleX = 0.8
    lightL.scale.set(0.8,0.8)
    @.page5.addChild lightS,lightL

    productBG = new Sprite getTe _CDN+"img/product-bg.jpg"
    productBG.alpha = 0
    @.page5.addChild productBG

    light1 = new Sprite getTe _CDN+"img/light-1.png"
    light1.anchor.set(0.5,0.5)
    light1.x = 750/2
    light1.y = light1.height/2
    light1.scale.set(0,0)
    light2 = new Sprite getTe _CDN+"img/light-2.png"
    light2.anchor.set(0.5,0)
    light2.x = 750/2
    light2.scale.set(1,0)
    light3 = new Sprite getTe _CDN+"img/light-3.png"
    light3.anchor.set(0.5,0)
    light3.x = 750/2
    light3.y = 1333/2-170
    light3.scale.set(0,0)
    light1.alpha = light2.alpha = light3.alpha = 0
    @.page5.addChild light1,light2,light3
    # white bg

    product = new Sprite getTe _CDN+"img/product.png"
    # product.anchor.set(0.5,0)
    # product.x = 750/2
    # product.y = 1333/2 - 80
    product.alpha = 0
    # product.scale.set(0.99,0.99)
    @.page5.addChild product

    productBGEnd = new Sprite getTe _CDN+"img/product-bg-end.jpg"
    productBGEnd.alpha = 0
    @.page5.addChild productBGEnd

    titleLarge = new Sprite getTe _CDN+"img/page-6-title.png"
    titleLarge.anchor.set(0.5,1)
    titleLarge.alpha = 0
    titleLarge.y = 100 + titleLarge.height
    titleLarge.x = 750/2
    scaleX = 1-(1333-@.trueh*2)/1333
    if scaleX < 1
      titleLarge.scale.set(scaleX,scaleX)
    @.page5.addChild titleLarge
    
    btn = @.nextBtn()
    btn.alpha = 0
    @.page5.addChild btn
    # @.page5.touchstart = @.page5.click = (data)=>
    #   console.log "page 5"
    #   return false if @.animation
    #   @.page5Out()

    iconTimes = 0
    page5ShowStep1 = =>
      TweenLite.to title,0.7,
        alpha: 1
        delay: 0.7
        y: 1333/2
        onComplete: =>
          btn.alpha = 1
          step = 1
    page5ShowStep2 = =>
      step = 2
      runSLlight()
      btn.alpha = 0
      for cloud in @.clouds
        TweenLite.to cloud, 0.5, {alpha: 0}
      TweenLite.to title,0.7, 
        alpha: 0
        y: 1333/2 - 100
        onComplete: =>
          TweenLite.to lightL,1.2,
            alpha: 1
            delay: 1.7
          TweenLite.to lightS,1.2,
            alpha: 1
            delay: 1.7
          TweenLite.to product,0.7,
            alpha: 1
            onComplete: =>
              for i in [0...5]
                icon = icons[i]
                icon.y = -(100 * (i+1))
                TweenLite.to icon, 3,
                  y: 1333/2 - 40
                  onComplete: =>
                    iconTimes++
                    page5ShowStep3()
                TweenLite.to icon, 0.7,
                  alpha: 0
                  delay: 2.3
    page5ShowStep3 = =>
      return false if iconTimes < 5
      step = 3
      console.log "run"
      for icon in icons
        icon.visible = false

      TweenLite.to productBG,1,
        alpha: 1
        delay: 0.2
      TweenLite.to light2,1,
        alpha: 1
        onUpdate: =>
          light2.scale.set(1,light2.alpha)
      TweenLite.to light1,0.7,
        alpha: 1
        delay: 0.4
        onUpdate: =>
          light1.scale.set(light1.alpha,light1.alpha)
      TweenLite.to light3,0.5,
        alpha: 1
        delay: 0.8
        onUpdate: =>
          light3.scale.set(light3.alpha,light3.alpha)
      TweenLite.to product,1,
        alpha: 0
        delay: 0.2
      TweenLite.to productBGEnd,0.6,
        alpha: 1,
        delay: 1.2,
        onComplete: =>
          TweenLite.to btn,0.6,
            alpha: 1
          TweenLite.to titleLarge,0.6,
            alpha: 1
            onComplete: =>
              @.animation = false
            #   setTimeout =>
            #     @.page5Out()
            #   ,2000

    runSLlight = ->
      TweenLite.to lightS,0.7,
        scaleX: 0.8
        onUpdate: ->
          lightS.scale.set(lightS.scaleX,lightS.scaleX)
        onComplete: ->
          TweenLite.to lightS,0.7,
            scaleX: 1
            onUpdate: ->
              lightS.scale.set(lightS.scaleX,lightS.scaleX)
      TweenLite.to lightL,0.7,
        scaleX: 1
        onUpdate: ->
          lightL.scale.set(lightL.scaleX,lightL.scaleX)
        onComplete: ->
          TweenLite.to lightL,0.7,
            scaleX: 0.8
            onUpdate: ->
              lightL.scale.set(lightL.scaleX,lightL.scaleX)
            onComplete: ->
              runSLlight()
  page5Out: ->
    @.hideCloud()
    @.page6build()
    TweenLite.to @.page5,.7, 
      alpha: 0,
      x: 20,
      y: 20,
      onComplete: => 
        @.page5.removeChildren()
        @.page5.visible = false
  page6build: ->
    @.Index = 6
    @.animation = true
    @.page6 = new Container()
    @.page6.alpha = 0
    @.page6.x = 0
    @.page6.y = 0

    # btn = @.nextBtn()
    # @.page6.addChild btn

    @.stage.addChildAt @.page6,2

    setTimeout =>
      @.showCloud()
    ,1700
    TweenLite.to @.page6,@.cloudTime,
      x: 0
      y: 0
      alpha: 1,
      delay: 1.7
      onComplete: =>
        
        @.animation = false
        setTimeout ->
          main.ugcBtn = true
        ,1000

    FixSize = 70
    @.ugc1 = ugc1 = new Container()
    ugc1BG = new Sprite getTe _CDN+"img/ugc-1.png"
    ugc1BG.anchor.set(0.5,0.5)
    ugc1BG.x = 750/2
    ugc1BG.y = 1333/2 + FixSize
    ugc1BG.rotation = 0
    ugc1.addChild ugc1BG
    ugc1.alpha = 1
    ugc1Icons = []
    for i in [0...3]
      icon = new Sprite getTe _CDN+"img/icon-symbol-#{i+1}.png"
      icon.anchor.set(0.5,0.5)
      icon.x = icon.dx = 750/2 + 150 + ( i%2 * icon.width / (i%2+1) )
      icon.y = icon.dy = 1333/2 + 100 - Math.random() * 100 + FixSize
      icon.speed = 1/3 + Math.random() * 2
      icon.direction = true
      icon.alpha = Math.random() * 0.5
      ugc1.addChild icon
      ugc1Icons.push icon
    runUGC1BG = =>
      TweenLite.to ugc1BG,4,
        rotation: 0.05
        onComplete: =>
          TweenLite.to ugc1BG,4,
            rotation: -0.05
            onComplete: =>
              runUGC1BG()
    runUGC1BG()
    @.app.ticker.add @.symbolRun.bind(@,ugc1Icons)
    @.page6.addChild ugc1

    @.ugc2 = ugc2 = new Container()
    ugc2BG = new Sprite getTe _CDN+"img/ugc-2.png"
    ugc2BG.y = (1333 - ugc1BG.height)/2 + 150 + FixSize
    ugc2.addChild ugc2BG
    ugc2Item = new Sprite getTe _CDN+"img/ugc-2-1.png"
    ugc2Item.anchor.set(0.5,1)
    ugc2Item.x = 750/2 - 80
    ugc2Item.y = 1333/2 + 120 + 150 + FixSize
    ugc2Item.direction = true
    ugc2.addChild ugc2Item
    ugc2.alpha = 0
    runUGC2Item = =>
      TweenLite.to ugc2Item,0.5,
        alpha: 0
        delay: 2
        onComplete: =>
          ugc2Item.y = 1333/2
          ugc2Item.x = 750/2 - 80
          ugc2Item.rotation = 0.4
          TweenLite.to ugc2Item,1.5,
            alpha: 1
            x: 750/2
            rotation: -0.2
            y: 1333/2 + 120 + FixSize
            onComplete: =>
              TweenLite.to ugc2Item,1.5,
                x: 750/2 - 80
                rotation: 0
                y: 1333/2 + 120 + 150 + FixSize
                onComplete: =>
                  runUGC2Item()
    runUGC2Item()

    @.page6.addChild ugc2

    @.ugc3 = ugc3 = new Container()
    ugc3BG = new Sprite getTe _CDN+"img/cd.png"
    ugc3BG.anchor.set(0.5,0.5)
    ugc3BG.x = 750/2
    ugc3BG.y = 1333/2 + FixSize*2
    ugc3BG.scale.set(0.9,0.9)
    ugc3.addChild ugc3BG
    ugc3Item = new Sprite getTe _CDN+"img/ugc-3-1.png"
    ugc3Item.anchor.set(1,0.5)
    ugc3Item.x = 800
    ugc3Item.y = 1333/2 - 80 + FixSize*2
    ugc3.addChild ugc3Item
    ugc3.alpha = 0
    runUGC3BG = =>
      ugc3BG.rotation = 0
      TweenLite.to ugc3BG,6,
        rotation: Math.PI * 2
        onComplete: =>
          runUGC3BG()
    runUGC3BG()
    ugc3Icons = []
    for i in [0...3]
      icon = new Sprite getTe _CDN+"img/icon-symbol-#{i+1}.png"
      icon.anchor.set(0.5,0.5)
      icon.x = icon.dx = 750/2 - 250 + (i * icon.width/3)
      icon.y = icon.dy = 1333/2 + 300 - Math.random() * 100
      icon.speed = 1/3 + Math.random() * 2
      icon.direction = true
      icon.alpha = Math.random() * 0.5
      ugc3.addChild icon
      ugc3Icons.push icon
    @.app.ticker.add @.symbolRun.bind(@,ugc3Icons)
    @.page6.addChild ugc3  

    @.ugc4 = ugc4 = new Container()
    ugc4BG = new Sprite getTe _CDN+"img/ugc-4.png"
    ugc4BG.anchor.set(0.5,0.5)
    ugc4BG.x = 750/2
    ugc4BG.y = 1333/2 - 100 + FixSize*2

    ugc4BG2 = new Sprite getTe _CDN+"img/ugc-4-2.png"
    ugc4BG2.anchor.set(0.5,0.5)
    ugc4BG2.x = 750/2
    ugc4BG2.y = 1333/2 - 100 + FixSize*2

    ugc4.addChild ugc4BG,ugc4BG2
    ugc4Stars = []
    for i in [0...5]
      star = new Sprite getTe _CDN+"img/ugc-4-1.png"
      star.anchor.set(0.5,0.5)
      star.x = star.dx = 800 + star.width * i
      star.y = star.dy = -50 - star.height * i
      star.toX = - star.width
      star.toY = 1333/2
      ugc4Stars.push star
      ugc4.addChild star
    runUGC4Star = =>
      for i in [0...3]
        star = ugc4Stars[i]
        star.x = star.dx
        star.y = star.dy
        star.alpha = 1
        size = 0.3 + Math.random()*0.5
        star.scale.set(size,size)
        TweenLite.to star,1.4,
          x: star.toX - Math.random()*100
          y: star.toY + Math.random()*100
          rotation: Math.PI * 4
          alpha: 0
          delay: i*1
        # TweenLite.to star,0.4, {alpha: 0, delay: i*1+1-0.2}
      setTimeout =>
        runUGC4Star()
      ,6500
    runUGC4Star()
    runUGC4BG = =>
      TweenLite.to ugc4BG2,2,
        x: 750/2 + 10
        onComplete: =>
          TweenLite.to ugc4BG2,2,
            x: 750/2 - 10
            onComplete: =>
              TweenLite.to ugc4BG2,1,
                x: 750/2
                onComplete: =>
                  runUGC4BG()
    runUGC4BG()
    ugc4.alpha = 0
    @.page6.addChild ugc4

    @.ugc5 = ugc5 = new Container()
    ugc5BG = new Sprite getTe _CDN+"img/ugc-5.png"
    ugc5Item1 = new Sprite getTe _CDN+"img/ugc-5-1.png"
    ugc5Item2 = new Sprite getTe _CDN+"img/ugc-5-2.png"
    ugc5Item3 = new Sprite getTe _CDN+"img/ugc-5-3.png"
    ugc5Item1.alpha = ugc5Item2.alpha = ugc5Item3.alpha = 0
    ugc5.addChild ugc5Item1,ugc5Item2,ugc5Item3,ugc5BG
    runUGC5Light = =>
      TweenLite.to ugc5Item1,1,
        alpha: 0.4
        onComplete: =>
          TweenLite.to ugc5Item1,2, {alpha: 1}
      TweenLite.to ugc5Item2,1,
        alpha: 0.4
        delay: 1
        onComplete: =>
          TweenLite.to ugc5Item2,2, {alpha: 1}
      TweenLite.to ugc5Item3,1,
        alpha: 0.4
        delay: 2
        onComplete: =>
          TweenLite.to ugc5Item3,2, {alpha: 1}
      setTimeout =>
        runUGC5Light()
      ,5500

    runUGC5Light()
    ugc5.alpha = 0
    @.page6.addChild ugc5

    @.title = new Sprite getTe _CDN+"img/ugc-title-#{UGCTITLE}.png"
    @.page6.addChild @.title

    leftBtn = @.leftBtn()
    rightBtn = @.rightBtn()
    @.page6.addChild leftBtn,rightBtn
    runArrow = =>
      leftBtn.x = leftBtn.dx
      leftBtn.alpha = 1
      rightBtn.x = rightBtn.dx
      rightBtn.alpha = 1
      TweenLite.to leftBtn,2,
        alpha: 0
        x: if main.biger then 750*0.1 else 0
        delay: 1
      TweenLite.to rightBtn,2,
        alpha: 0
        x: if main.biger then 750*0.9 else 750
        delay: 1
        onComplete: =>
          runArrow()
    runArrow()

    @.qrcode = qrcode = new Sprite getTe _CDN+"img/qrcode.png"
    qrcode.y = 1333-qrcode.height
    qrcode.visible = false
    @.page6.addChild qrcode
  selectUGC: (puls = true,callback)->
    return false unless @.page6? and @.page6.alpha >= 1
    if puls
      @.ugcIndex++
    else
      @.ugcIndex--
    if @.ugcIndex > 5
      @.ugcIndex = 1
    if @.ugcIndex < 1
      @.ugcIndex = 5
    for i in [1..5]
      item = @["ugc#{i}"]
      if i is @.ugcIndex
        TweenLite.to item,0.5, 
          alpha: 1
          delay: 0.1
          onComplete: =>
            callback()
      else
        TweenLite.to item,0.5, {alpha: 0}
  get: ->
    @.qrcode.visible = true
    @.app.renderer.render @.app.stage
    @.qrcode.visible = false
    return @.app.view.toDataURL()
  # next page btn
  nextBtn: ->
    btn = new Container()
    arrow1 = new Sprite getTe _CDN+"img/arrow.png"
    arrow1.x = 0
    arrow1.y = 0
    arrow2 = new Sprite getTe _CDN+"img/arrow.png"
    arrow2.x = 0
    arrow2.y = arrow2.height - 20
    btn.addChild arrow1
    btn.addChild arrow2
    btn.x = 750/2 - arrow1.width/2
    btn.y = (1333 - @.trueh*2)/2 + @.trueh*2 - arrow1.height*3 - 20
    return btn
  leftBtn: ->
    btn = new Container()
    arrow = new Sprite getTe _CDN+"img/arrow.png"
    arrow.rotation = Math.PI / 2
    btn.addChild arrow
    btn.x = arrow.width
    btn.x += 750 * 0.05 if main.biger
    btn.dx = btn.x
    console.log "leftBtn",btn.x
    btn.y = 1333/2 - arrow.height/2
    return btn
  rightBtn: ->
    btn = new Container()
    arrow = new Sprite getTe _CDN+"img/arrow.png"
    arrow.rotation = - Math.PI / 2
    btn.addChild arrow
    btn.x = 750 - arrow.width
    btn.x -= 750 * 0.05 if main.biger
    btn.dx = btn.x
    console.log "rightBtn",btn.x
    btn.y = 1333/2 + arrow.height
    return btn

  symbolRun: (icons,detail)->
    # return false unless @.ugc1.alpha >= 1
    for icon in icons
      icon.y -= icon.speed
      if icon.direction
        icon.alpha += 0.01
        if icon.alpha >= 1
          icon.direction = false
      else
        icon.alpha -= 0.01
        if icon.alpha <= -0.1
          icon.direction = true
          icon.y = icon.dy

  hideCloud: ->
    for i in [0...@clouds.length]
      cloud = @.clouds[i]
      TweenLite.to cloud, 2.5, {x: cloud.dex, alpha: 1, delay: i*0.1}
  showCloud: ->
    # m = cloud.x > 750/2
    # if Math.random() > 0.5
    #   m = cloud.x < 750/2
    m = Math.random() > 0.5
    size = 100
    for i in [0...@clouds.length]
      cloud = @.clouds[i]
      if m 
        if cloud.dex >= 750/2
          cloud.dx = to = 900 + Math.random()*(size)
        else
          cloud.dx = to = -150 - Math.random()*(size)
      else
        if cloud.dex <= 750/2
          cloud.dx = to = 900 + Math.random()*(size)
        else
          cloud.dx = to = -150 - Math.random()*(size)
      y = cloud.dey + Math.random()*(size*2) - size
      TweenLite.to cloud, 2.5, 
        x: to,
        y: y,
        alpha: 0.6, 
        delay: i*0.1
  
  loopBgStar: (detail)->
    for star in @.largeStars
      if star.direction
        star.alpha -= 0.06 * star.speed * detail
        star.direction = !star.direction if star.alpha <= 0
      else
        star.alpha += 0.02 * star.speed * detail
        star.direction = !star.direction if star.alpha >= star.wait
  loopLoading: (detail)->
    return false if not @.default.running
    @.icon.rotation += 0.02 * detail
    for star in @.stars
      star.y += star.speed * detail
      star.alpha -= 0.002 * star.speed * detail
      if star.alpha <= 0
        star.y = 1333/2 - 100
        star.alpha = 1
  loopCloud: (detail)->
    return false if not @.default.running
    for cloud in @.clouds
      if cloud.direction
        cloud.x += (0.1+Math.random()*0.4) * detail
        cloud.direction = false if cloud.x > cloud.dx + 20
      else
        cloud.x -= (0.1+Math.random()*0.2) * detail
        cloud.direction = true if cloud.x + 20 < cloud.dx 
