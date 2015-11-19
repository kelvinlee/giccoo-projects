 $.fn.fixedDiv = function(actCls){
        var pos = 0,
            that = $(this),
            topVal;

        if(that.length > 0){
            topVal = that.offset().top;
        }

        function fix(){
            pos = $(document).scrollTop();

            if (pos > topVal) {
                that.addClass(actCls);
                if (!window.XMLHttpRequest) {
                    that.css({
                        position: 'absolute',
                        top     : pos
                    });
                }
            } else {
                that.removeClass(actCls);
                if (!window.XMLHttpRequest) {
                    that.css({
                        position: 'static',
                        top     : 'auto'
                    });
                }

            }
        }
        fix();

        $(window).scroll(fix);
    }

    $('#logoBar').fixedDiv('fix-div');
//-----------------------------------------

    var audio;
    function initAudio(id){
        audio=document.getElementById(id);
    };

    window.onload=function(){
        initAudio("audio");
         if (audio.paused) {
            $("#audioPlay").removeClass("stopM").addClass("playM")
            //this.style.backgrundImage='url("../img/musicOn.png")';
        }else{
            $("#audioPlay").removeClass("playM").addClass("stopM")
            //this.style.backgrundImage='url("../img/musicOff.png")';
        };
    }
    var ap=document.getElementById("audioPlay");
    $("#audioPlay").on("click",function(){
        if (audio.paused) {
            audio.play();
            $("#audioPlay").removeClass("playM").addClass("stopM")
            //this.style.backgrundImage='url("../img/musicOn.png")';
        }else{
            audio.pause();
            $("#audioPlay").removeClass("stopM").addClass("playM")
            //this.style.backgrundImage='url("../img/musicOff.png")';
        };
    });

    