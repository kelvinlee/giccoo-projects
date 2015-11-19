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