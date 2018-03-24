note
  .note-box
    .note-content(class="{animated:true,fadeInUp:!close,fadeOutUp:close}")
      .note-text
        .icon-form
          img(src="http://disk.giccoo.com/projects/showman/img/icon-alert-note.png")
        |  {title}
  script(type="text/coffeescript").
    self = this
    this.title = opts.title
    this.close = false
    this.time = if opts.time? then parseInt(opts.time) else 3000
    # 
    this.on "mount", ->
      setTimeout ->
        self.unmount()
      ,self.time
      setTimeout ->
        self.close = true
        self.update()
      ,self.time-500
  style.
    :scope {
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 9999; }
    :scope .note-box {
      text-align: center;
      position: absolute;
      top: 50%;
      left: 0px;
      width: 100%; }
      :scope .note-box .note-content {
        display: inline-block;
        padding: 10px 11px 10px 10px;
        background-color: rgba(0, 0, 0, 0.7);
        color: #fff;
        border-radius: 5px;
        max-width: 90%;
        -webkit-box-sizing: border-box;
                box-sizing: border-box; }
      :scope .note-box .icon-form, :scope .note-box .note-text {
        display: inline-block;
        vertical-align: top;
        line-height: 25px; }
      :scope .note-box .icon-form {
        width: 1.1rem;
        height: 1.1rem;
        vertical-align: middle; }
      :scope .note-box .note-text {
        font-size: 0.8rem;
        line-height: 1.4em;
        letter-spacing: 2px; }
        @media only screen and (min-width: 321px) and (max-width: 399px) {
          :scope .note-box .note-text {
            font-size: 0.88rem; } }
        @media only screen and (min-width: 321px) and (max-device-width: 375px) and (max-width: 399px) {
          :scope .note-box .note-text {
            font-size: 0.88rem; } }
        @media only screen and (min-width: 399px) and (max-width: 767px) {
          :scope .note-box .note-text {
            font-size: 0.96rem; } }
        @media only screen and (min-width: 399px) and (max-width: 768px) and (max-device-width: 768px) {
          :scope .note-box .note-text {
            font-size: 0.96rem; } }
    