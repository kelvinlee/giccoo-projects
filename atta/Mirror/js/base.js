(function() {
  var audio1, audio2, audioPlaying, changeNUMs, checkPageNine, getNUMs, init, lzload, lzloadlist, musicIcon, parallax, readyLoaded, readyLoading, runAudio, runFire, selectPaper, selectPoint, sharewechat, stopHeight, _nows, _playIndex, _stopHeight, _stopParallax, _timeout;

  parallax = {};

  getNUMs = 1682;

  audio1 = document.getElementById("audiobg");

  audio2 = document.getElementById("audioss");

  audioPlaying = true;

  _playIndex = 0;

  runAudio = function(index) {
    if (index == null) {
      index = 0;
    }
    _playIndex = index;
    if (audioPlaying) {
      if (index === 16) {
        $(".audios .text").show();
        if (audio2.currentTime >= 2) {
          audio2.currentTime = 0;
        }
        audio2.play();
        audio1.pause();
      } else {
        $(".audios .text").hide();
        audio2.pause();
        audio1.play();
      }
    }
    if (index === 16) {
      return $(".audios .text").show();
    } else {
      return $(".audios .text").hide();
    }
  };

  musicIcon = function() {
    console.log("audio:", audioPlaying);
    if (!audioPlaying) {
      audioPlaying = true;
      runAudio(_playIndex);
      return $(".audios .icon").addClass("on");
    } else {
      audio1.pause();
      audio2.pause();
      audioPlaying = false;
      return $(".audios .icon").removeClass("on");
    }
  };

  sharewechat = function(bool) {
    if (bool == null) {
      bool = true;
    }
    if (bool) {
      return $(".wechat").removeClass("hide").addClass("show");
    } else {
      return $(".wechat").removeClass("show").addClass("hide");
    }
  };

  selectPaper = function(e) {
    return $(".tabs").removeClass("on1 on2 on3 on4 on5").attr("now", e).addClass("on" + e);
  };

  selectPoint = function(e) {
    $(e).removeClass("gray");
    if ($(".point.gray").length <= 0) {
      return setTimeout(function() {
        $("#firebox").addClass("fireon").html('<img src="img/page-7-fire.png" class="firemove" />');
        return runFire();
      }, 500);
    }
  };

  _stopParallax = null;

  _nows = "";

  runFire = function() {
    if (_nows === "") {
      _nows = "2";
    } else {
      _nows = "";
    }
    return setTimeout(function() {
      $(".firemove").attr("src", "img/page-7-fire" + _nows + ".png");
      return runFire();
    }, 150);
  };

  checkPageNine = function() {
    var e;
    e = parseInt($(".tabs").attr("now"));
    e++;
    selectPaper(e);
    if (e >= 5) {
      return _stopParallax = null;
    }
  };

  _stopHeight = false;

  stopHeight = function() {
    var top;
    if (_stopHeight) {
      return "";
    }
    _stopHeight = true;
    top = $(".step-list").offset();
    return $(".page-content").css({
      "top": (top.height - 1) + "px"
    });
  };

  readyLoaded = [];

  readyLoading = function(index) {
    var e;
    if (readyLoaded[index] === "loaded") {
      return true;
    }
    e = $("section.page").eq(index);
    readyLoaded[index] = "loaded";
    e.find("[lz-src]").each(function(i) {
      $(this).attr("src", $(this).attr("lz-src"));
      return true;
    });
    return e.find("[data-page]").each(function(i) {
      readyLoading(-1 + parseInt($(this).attr("data-page")));
      return true;
    });
  };

  lzloadlist = [];

  lzload = function(index) {
    if (lzloadlist[index] == null) {
      lzloadlist[index] = 0;
    }
    return lzloadlist[index] += 1;
  };

  changeNUMs = function(n) {
    var e;
    if (n > 99999) {
      n = 99999;
    }
    if (n < 1) {
      n = 1;
    }
    e = $("#nums");
    n = (n + "").split("").reverse();
    return e.find(".num").each(function(i) {
      if (n[4 - i] != null) {
        return $(this).attr("n", n[4 - i]);
      } else {
        return $(this).attr("n", 0);
      }
    });
  };

  _timeout = null;

  init = function() {
    return parallax = $('.pages').parallax({
      irection: 'vertical',
      drag: false,
      loading: true,
      indicator: false,
      arrow: false,
      onchange: function(index, element, direction) {
        var box;
        if ($(".page").height() < 450) {
          $("body").addClass("iphone4");
        } else {
          $("body").removeClass("iphone4");
        }
        if (index === 0) {
          $(".loading").hide();
        }
        if (index === 1 && ($("#boxlist")[0].style.clip != null)) {
          box = $("#boxlist").offset();
          $("#boxlist").css({
            "transition-duration": "2.5s",
            "transition-delay": "400ms",
            "clip": "rect(-" + (box.width / 2) + "px," + (box.width * 1.5) + "px," + (box.height * 1.5) + "px,-" + (box.height / 2) + "px)"
          });
        } else if (($("#boxlist")[0].style.clip != null) && index !== 2) {
          box = $("#boxlist").offset();
          $("#boxlist").css({
            "transition-duration": "0s",
            "transition-delay": "0s",
            "clip": "rect(" + box.width + "px,0px,0px," + box.height + "px)"
          });
        }
        if (index === 8 && _stopParallax === false) {
          _stopParallax = true;
        } else {
          _stopParallax = false;
        }
        runAudio(index);
        readyLoading(index);
        readyLoading(index + 2);
        if (index === 17) {
          return _timeout = setTimeout(function() {
            return changeNUMs(getNUMs);
          }, 1200);
        } else {
          clearTimeout(_timeout);
          return changeNUMs(1);
        }
      }
    });
  };

  $(document).ready(function() {
    readyLoading(0);
    readyLoading(1);
    $("#gif").css({
      "-webkit-animation": "none"
    });
    if ($("#boxlist")[0].style.clip != null) {
      $("#boxlist").addClass("boxlist").css({
        "clip": "rect(160px,0px,0px,160px)"
      });
    }
    $("#text5").on("webkitAnimationEnd", function() {
      return console.log("finished stamp");
    });
    $("[lazy-src]").each(function() {
      return $(this).attr("src", $(this).attr("lazy-src"));
    });
    $("[data-page]").click(function() {
      return parallax.runcode(parseInt($(this).attr("data-page")));
    });
    return init();
  });

}).call(this);
