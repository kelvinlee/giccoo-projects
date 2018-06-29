# @codekit-prepend "../../libs/coffee/pixi-base"
_CDN = "./"
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
  _CDN+"img/page-2-title.png"
  _CDN+"img/page-3-title.png"
  _CDN+"img/page-4-title.png"
  _CDN+"img/page-5-title.png"
  _CDN+"img/page-6-title.png"
  _CDN+"img/moon.png"
  _CDN+"img/arrow.png"
  _CDN+"img/cd.png"
  _CDN+"img/cd-pointer.png"
  _CDN+"img/ball.png"
  _CDN+"img/bubble.png"
  _CDN+"img/light-1.png"
  _CDN+"img/light-2.png"
  _CDN+"img/light-3.png"
  _CDN+"img/ugc-1.png"
  _CDN+"img/ugc-2.png"
  _CDN+"img/ugc-2-1.png"
  _CDN+"img/ugc-3-1.png"
  _CDN+"img/ugc-4.png"
  _CDN+"img/ugc-4-1.png"
  _CDN+"img/ugc-5.png"
  _CDN+"img/ugc-5-1.png"
  _CDN+"img/ugc-5-2.png"
  _CDN+"img/ugc-5-3.png"
]

lastDate = "2018年4月23日"
lastTime = "01:19"
lastName = "《我好想你》"
shareName = "《喜帖街》"
class sulwhasoo
  list: []
  loadCount: 0
  animation: false
  default:
    w: 750
    h: 1333
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
    progress = Math.ceil @.loadCount/images.length*100
    if progress >= 100
      setTimeout =>
        @.loadEnd()
      ,1000
  # loading page
  build: ->
    @.loading = new Container()
    @.icon = icon = new Sprite getTe _CDN+"img/icon-loading.png"
    icon.anchor.set(0.5,0.5)
    icon.x = 750/2
    icon.y = 1333/2 - 100
    icon.rotation = 0
    
    @.stars = []
    for i in [0...8]
      star = new Sprite getTe _CDN+"img/star.png"
      star.anchor.set(0.5,0.5)
      star.x = 750/2 - icon.width/2 + (icon.width / i)
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
    @.opts.callback() if @.opts.callback?
    # @.app.ticker.remove @._loopLoading
    PIXI.loader.add(images).use(@.loaded.bind(@)).load(@.build.bind(@))
    @.animation = true
  # page 1
  page1: ->
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
    product.y = 760
    product.alpha = 0
    product.buttonMode = true
    product.interactive = true
    product.touchstart = product.click = ()=>
      console.log "click product",@.animation
      return false if @.animation
      @.page1Out()
    @.page.addChild product
    title = new Sprite getTe _CDN+"img/page-1-title.png"
    title.y = 200
    title.alpha = 0
    @.page.addChild title

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
                  onComplete: =>
                    TweenLite.to point,time,
                      x: 475, 
                      ease: Circ.easeIn, 
                      onComplete: =>
                        TweenLite.to point,time,
                          x: 350, 
                          ease: Circ.easeOut

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
                      ease: Circ.easeOut, 
                      onComplete: =>
                        TweenLite.to productBorder,time*3, {alpha: 0.8}
                        TweenLite.to point,time, 
                          y: 800, 
                          ease: Circ.easeIn,
                          onComplete: =>
                            TweenLite.to point,time,
                              alpha: 0,
                              onComplete: =>
                                @.animation = false
                                TweenLite.to product,time*3, 
                                  alpha: 1, 
                                  onComplete: => 
                                    @.productLight(productBorder)
                                TweenLite.to title,time*3, {alpha: 1,y: 1333/2 - title.height/2 - 120}
        TweenLite.to point,1,{alpha: 1,delay: 1}
        @.showCloud()
    })
  # 产品发光
  productLight: (item)->
    return false unless @.page.visible
    TweenLite.to item, .6, 
      alpha: 0.6, 
      onComplete: =>
        TweenLite.to item, .6, 
          alpha: 1, 
          onComplete: =>
            @.productLight item
  # page 1 移除
  page1Out: ->
    @.hideCloud()
    # 跳过中间页
    # @.page2build()
    @.page6build()
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
    @.animation = true
    moon = new Sprite getTe _CDN+"img/moon.png"
    moon.anchor.set(0.5,0.01)
    moon.x = 750/2
    moon.scale.set(1.01,1.01)
    @.page2.addChild moon
    title = new Container()
    title.alpha = 0
    titleBG = new Sprite getTe _CDN+"img/page-2-title.png"
    title.addChild titleBG
    title.x = 190
    title.y = 750
    date = new Text lastDate,{fontFamily : 'Arial', fontSize: 44, fill : 0x2a985d, align : 'left'}
    date.y = 142
    time = new Text lastTime,{fontFamily : 'Arial', fontSize: 44, fill : 0x2a985d, align : 'left'}
    time.y = 195
    title.addChild time
    title.addChild date
    @.page2.addChild title
    btn = @.nextBtn()
    @.page2.addChild btn
    @.page2.buttonMode = true
    @.page2.interactive = true
    @.page2.touchstart = @.page2.click = (data)=>
      return false if @.animation
      @.page2Out()

    TweenLite.to @.page2,1.2,
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
    titleText= new Sprite getTe _CDN+"img/page-3-title.png"
    title.x = 750/2 - titleText.width/2
    title.y = cd.height + 230
    title.addChild titleText
    name = new Text lastName,{fontFamily : 'Arial', fontSize: 44, fill : 0x2a985d, align : 'center'}
    # name.width = titleText.width
    name.y = 138
    name.x = titleText.width/2 - name.width/2
    title.addChild name
    @.page3.addChild title

    btn = @.nextBtn()
    @.page3.addChild btn

    @.stage.addChildAt @.page3,2
    @.page3.buttonMode = true
    @.page3.interactive = true
    @.page3.touchstart = @.page3.click = (data)=>
      return false if @.animation
      @.page3Out()

    TweenLite.to @.page3,1.2,
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
      TweenLite.to cd,4.7,
        rotation: 1
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
    @.animation = true
    @.page4 = new Container()
    @.page4.alpha = 0
    @.page4.x = 20
    @.page4.y = 20

    ball = new Sprite getTe _CDN+"img/ball.png"
    ball.x = 200
    ball.y = 700
    @.page4.addChild ball

    title = new Container()
    titleText= new Sprite getTe _CDN+"img/page-4-title.png"
    title.x = 30
    title.y = 630
    title.alpha = 0
    title.addChild titleText
    name = new Text shareName,{fontFamily : 'Arial', fontSize: 42, fill : 0x2a985d, align : 'left'}
    # name.width = titleText.width
    name.y = 238
    name.x = 58
    title.addChild name
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

    TweenLite.to @.page4,1.2,
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
            runBall()
        TweenLite.to ball, 3,
          y: 300,
          ease: Cubic.easeOut,

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
    @.animation = true
    @.page5 = new Container()
    @.page5.alpha = 0
    @.page5.x = 0
    @.page5.y = 0

    # btn = @.nextBtn()
    # @.page5.addChild btn

    @.stage.addChildAt @.page5,2
    # @.page5.buttonMode = true
    # @.page5.interactive = true
    # @.page5.touchstart = @.page5.click = (data)=>
    #   return false if @.animation
    #   @.page5Out()

    TweenLite.to @.page5,1.2,
      x: 0
      y: 0
      alpha: 1,
      delay: .7
      onComplete: =>
        @.showCloud()
        @.animation = false
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
      icon.x = 750/2 - 80 + (160/5)*i
      icon.y = - 10 - (50*i%3)
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

    iconTimes = 0
    page5ShowStep1 = =>
      TweenLite.to title,0.7,
        alpha: 1
        delay: 0.7
        y: 1333/2
        onComplete: =>
          for cloud in @.clouds
            TweenLite.to cloud, 0.5, {alpha: 0, delay: 2}  
          TweenLite.to title,0.7, 
            alpha: 0
            delay: 2
            y: 1333/2 - 100
            onComplete: =>
              page5ShowStep2()
    page5ShowStep2 = =>
      runSLlight()
      TweenLite.to lightL,0.5,
        alpha: 1
        delay: 0.4
      TweenLite.to lightS,0.5,
        alpha: 1
        delay: 0.4
      TweenLite.to product,0.7,
        alpha: 1
        onComplete: =>
          for i in [0...5]
            icon = icons[i]
            TweenLite.to icon, 3+Math.random()*(0.2*(i+1)),
              y: 1333/2
              delay: i%3*0.2
              onComplete: =>
                iconTimes++
                page5ShowStep3()
    page5ShowStep3 = =>
      return false if iconTimes < 5
      console.log "run"
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
          TweenLite.to titleLarge,0.6,
            alpha: 1
            onComplete: =>
              setTimeout =>
                @.page5Out()
              ,2000

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
    @.animation = true
    @.page6 = new Container()
    @.page6.alpha = 0
    @.page6.x = 0
    @.page6.y = 0

    # btn = @.nextBtn()
    # @.page6.addChild btn

    @.stage.addChildAt @.page6,2

    TweenLite.to @.page6,1.2,
      x: 0
      y: 0
      alpha: 1,
      delay: .7
      onComplete: =>
        @.showCloud()
        @.animation = false

    ugc1 = new Container()
    ugc1BG = new Sprite getTe _CDN+"img/ugc-1.png"
    ugc1BG.y = (1333 - ugc1BG.height)/2
    ugc1.addChild ugc1BG
    ugc1.alpha = 0
    @.page6.addChild ugc1

    ugc2 = new Container()
    ugc2BG = new Sprite getTe _CDN+"img/ugc-2.png"
    ugc2BG.y = (1333 - ugc1BG.height)/2 + 150
    ugc2.addChild ugc2BG
    ugc2Item = new Sprite getTe _CDN+"img/ugc-2-1.png"
    ugc2Item.anchor.set(0.5,1)
    ugc2Item.x = 750/2 - 80
    ugc2Item.y = 1333/2 + 120 + 150
    ugc2.addChild ugc2Item
    ugc2.alpha = 0
    @.page6.addChild ugc2

    ugc3 = new Container()
    ugc3BG = new Sprite getTe _CDN+"img/cd.png"
    ugc3BG.anchor.set(0.5,0.5)
    ugc3BG.x = 750/2
    ugc3BG.y = 1333/2
    ugc3BG.scale.set(0.9,0.9)
    ugc3.addChild ugc3BG
    ugc3Item = new Sprite getTe _CDN+"img/ugc-3-1.png"
    ugc3Item.anchor.set(1,0.5)
    ugc3Item.x = 800
    ugc3Item.y = 1333/2 - 80
    ugc3.addChild ugc3Item
    ugc3.alpha = 0
    @.page6.addChild ugc3    

    ugc4 = new Container()
    ugc4BG = new Sprite getTe _CDN+"img/ugc-4.png"
    ugc4BG.anchor.set(0.5,0.5)
    ugc4BG.x = 750/2
    ugc4BG.y = 1333/2 - 100
    ugc4.addChild ugc4BG
    ugc4Stars = []
    for i in [0...5]
      star = new Sprite getTe _CDN+"img/ugc-4-1.png"
      star.anchor.set(0.5,0.5)
      star.x = 800 + star.width * i
      star.y = -50 - star.height * i
      star.toX = - star.width
      star.toY = 1333/2
      ugc4Stars.push star
      ugc4.addChild star
    ugc4.alpha = 0
    @.page6.addChild ugc4

    ugc5 = new Container()
    ugc5BG = new Sprite getTe _CDN+"img/ugc-5.png"
    ugc5Item1 = new Sprite getTe _CDN+"img/ugc-5-1.png"
    ugc5Item2 = new Sprite getTe _CDN+"img/ugc-5-2.png"
    ugc5Item3 = new Sprite getTe _CDN+"img/ugc-5-3.png"
    ugc5.addChild ugc5Item1,ugc5Item2,ugc5Item3,ugc5BG
    @.page6.addChild ugc5




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

  hideCloud: ->
    for cloud in @clouds
      TweenLite.to cloud, 1.5, {x: cloud.dex, alpha: 1}
  showCloud: ->
    for cloud in @clouds
      if cloud.x > 750/2
        cloud.dx = to = 950
      else
        cloud.dx = to = -200
      TweenLite.to cloud, 1.5, {x: to, alpha: 0.6}
  loadEnd: ->
    _tar = @.loading
    _tar.scaleS = 1
    # console.log @.loading.scale = 1.5
    TweenLite.to(_tar,.5,{
      scaleS: 2,
      onUpdate: (res)=> 
        # console.log res.scaleS
        res.scale.set(res.scaleS,res.scaleS)
        _tar.x = - (750/2 * (res.scaleS-1))
        _tar.y = - (1333/2 * (res.scaleS-1))
        _tar.alpha = 2 - res.scaleS
      onComplete: =>
        @.app.ticker.remove @._loopLoading
        @.page1()
      onUpdateParams:[_tar]
    })
  
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
