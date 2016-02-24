
<recommend-list>
  <div class="bingos">
    <div each="{item in list}" class="item shadow"><img src="http://disk.giccoo.com/BingoMe/{item}"/></div>
  </div>
  <script>
    var self = this
    self.list = opts.urls.split(",")
  </script>
</recommend-list>