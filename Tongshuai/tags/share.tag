
<share>
  <div class="note-title fadeInLeft animated delay-5"><img src="http://disk.giccoo.com/projects/Tongshuai/img/{opts.name}-title.png"/></div>
  <div class="t-shirt fadeInLeft animated delay-8">
    <div class="clear"><img src="http://disk.giccoo.com/projects/Tongshuai/img/t-shirt.png"/></div>
    <div if="{icon || text || stamp}" class="icons">
      <div if="{icon}" class="icon1 {icon}"><img src="http://disk.giccoo.com/projects/Tongshuai/img/{icon}.png"/></div>
      <div if="{text}" class="icon2 {text}"><img src="http://disk.giccoo.com/projects/Tongshuai/img/{text}-dark.png"/></div>
      <div if="{stamp}" class="icon3 {stamp}"><img src="http://disk.giccoo.com/projects/Tongshuai/img/{stamp}.png"/></div>
      <div class="kv"><img src="http://disk.giccoo.com/projects/Tongshuai/img/kv-2.png"/></div>
    </div>
  </div>
  <div if="{opts.name=='notes'}" class="share-icons fadeInLeft animated delay-10">
    <div class="share"></div>
    <shareicon site="Tongshuai" title="“小行走大改变”，正年轻你的，还在等什么？" url="local" pic="http://disk.giccoo.com/projects/Tongshuai/img/share-pc.jpg" icons="douban,weibo,qzone,wechat"><span class="share-icon">分享到</span></shareicon>
  </div><a if="{opts.name=='share'}" href="#/" class="join fadeInLeft animated delay-10"><img src="http://disk.giccoo.com/projects/Tongshuai/img/join.png"/></a>
  <script>
    var self = this
    Store[opts.name] = this
    var list = opts.action.split(",")
    this.icon = list[0] != "null"?list[0]:null
    this.text = list[1] != "null"?list[1]:null
    this.stamp = list[2] != "null"?list[2]:null
  </script>
</share>