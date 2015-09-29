
<begin>
  <div if="{firstpageShow}" class="firstpage {firstpageClass}">
    <parallax class="pages">
      <div each="{parent.kv}" up="{down}" down="{up}" class="page {name}">
        <div class="kv fadeIn animated delay-7"><img data-layzr="http://disk.giccoo.com/projects/yida/img/{name}.jpg"/></div>
        <div class="texts"><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-text-1.png" class="fadeInRight animated delay-8"/><img data-layzr="http://disk.giccoo.com/projects/yida/img/{name}-text.png" class="fadeInRight animated delay-9"/><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-text-2.png" class="fadeInRight animated delay-10"/><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-text-3.png" class="fadeInRight animated delay-11"/><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-logo.png" class="fadeInRight animated delay-12"/>
        </div>
        <div class="kv-name fadeIn animated delay-7"><img data-layzr="http://disk.giccoo.com/projects/yida/img/{name}-name.png"/></div><a href="https://oauth.immomo.com/oauth/authorize?response_type=code&amp;client_id=mm7a12e355d5958001&amp;state=abc" class="normal fadeInUp animated delay-5">
          <div class="bg"><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-next-bg.png"/>
          </div>
          <div class="text">
            <div class="light">
              <div class="flash"><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-normal-btn.png"/></div><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-normal-btn-normal.png"/>
            </div>
          </div></a>
        <div class="private fadeInUp animated delay-5">
          <div class="bg"><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-next-bg.png"/>
          </div>
          <div class="text">
            <div class="light">
              <div class="flash"><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-normal-btn.png"/></div><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-normal-btn-normal.png"/>
            </div>
          </div>
          <div class="next-point">
            <div class="light">
              <div class="flash"><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-next-point.png"/>
              </div><img src="http://disk.giccoo.com/projects/yida/img/kv-next-point-normal.png"/>
            </div>
          </div>
        </div>
      </div>
    </parallax>
  </div>
  <div if="{userpageShow}" class="userpage">
    <div class="preview-info">
      <div class="bg fadeIn animated delay-3"><img id="previewImage" data-layzr="http://image.giccoo.com/momoDir/{userContent.image}@640w_60Q_1x.jpg"/></div>
      <div class="texts">
        <div class="text-1 fadeInRight animated delay-6"><img data-layzr="http://disk.giccoo.com/projects/yida/img/build-text-1.png"/>
        </div>
        <div class="preview-text fadeInRight animated delay-7">
          <p>{userContent.message}</p>
        </div>
        <div class="text-2 fadeInRight animated delay-8"><img data-layzr="http://disk.giccoo.com/projects/yida/img/build-text-2.png"/>
        </div>
        <div class="text-3 fadeInRight animated delay-9"><img data-layzr="http://disk.giccoo.com/projects/yida/img/build-text-3.png"/>
        </div>
      </div>
      <div class="build-by-who fadeInUp animated delay-18">
        <p>来自：{userContent.username}</p>
      </div><a href="https://oauth.immomo.com/oauth/authorize?response_type=code&amp;client_id=mm7a12e355d5958001&amp;state=abc" class="share-btn fadeInUp animated delay-15">
        <div class="bg-s"><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-next-bg.png"/>
        </div>
        <div class="text">
          <div class="light">
            <div class="flash"><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-normal-btn.png"/></div><img src="http://disk.giccoo.com/projects/yida/img/kv-normal-btn-normal.png"/>
          </div>
        </div></a>
    </div>
  </div>
  <script>
    var self = this
    self.firstpageShow = false
    self.userpageShow = false
    self.firstpageClass = ""
    self.userContent = oldContent
    self.kv = []
    if (oldContent != null) {
    	//- 有用户信息 不显示KV.
    	self.userpageShow = true
    }else{
    	//- 没有用户信息 显示KV.
    	self.firstpageShow = true
    	//- "kv-1",
    	var KV = ["kv-1","kv-2","kv-3","kv-4"]
    	var tempKV = []
    	tempKV.push({name:KV.splice(parseInt(Math.random()*(KV.length)),1)[0]})
    	tempKV.push({name:KV.splice(parseInt(Math.random()*(KV.length)),1)[0]})
    	tempKV.push({name:KV.splice(parseInt(Math.random()*(KV.length)),1)[0]})
    	for (var i=0; i < tempKV.length ; i++) {
    		tempKV[i].up = typeof(tempKV[i-1]) != "undefined" ? tempKV[i-1].name : null
    		tempKV[i].down =  typeof(tempKV[i+1]) != "undefined" ? tempKV[i+1].name : null
    		//- console.log(tempKV[i-1],tempKV[i+1])
    	}
    	console.log(tempKV)
    	self.kv = tempKV
    }
  </script>
</begin>