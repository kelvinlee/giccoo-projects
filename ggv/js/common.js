//弹窗
; (function ($) {
	var defaults = {
		type: 1, //1 normal pop  2 auto hide pop
		desc: "",
		callback: function () { }
	};

	var Panel = function (el, options) {
		this.$el = $(el);
		this.opts = $.extend({}, defaults, options);
	};
	Panel.prototype = {
		init: function () {
			var _this = this;
			var pn = this.$el;
			var desc = this.opts.desc
			if (desc) {
				pn.find(".result").html(desc);
			}

			if (this.opts.type == 1) {
				if ($('.mask').length < 1) {
					$('body').append("<div class='mask animating'></div>");
					$('.mask').on("click", function (e) {
						e.preventDefault();
						e.stopPropagation()
					})
				}
				var mLayer = $('.mask');
				var close = pn.find(".panelClose");

				close.off("close").on("close", function () {
					$.fn.popPanel.hide(pn, mLayer)
				})
				$.fn.popPanel.show(pn, mLayer)

				close.off("click").on("click", function (e) {
					e.preventDefault();
					e.stopPropagation()
					$(this).trigger("close")
				})

				mLayer.off("click").on("click", function (e) {
					e.preventDefault();
					//e.stopPropagation()
					$.fn.popPanel.hide($(".pop-panel"), mLayer)
				})

			} else if (this.opts.type == 2) {
				//type:2 自动隐藏弹层
				$.fn.popPanel.show(pn)
				var timer = setTimeout(function () {
					$.fn.popPanel.hide(pn)
				}, 1500);
			} else {
				console.log("弹窗类型错误")
			}

			this.opts.callback()
		}
	};

	$.fn.popPanel = function (options) {
		return this.each(function () {
			var pop = new Panel(this, options)
			pop.init()
		});

	}
	$.fn.popPanel.show = function ($el, mask) {
		$('body').css({ overflowY: 'hidden' });
		if (mask) {
			mask.addClass("on")
		}
		$el.addClass("pop-out");
	}

	$.fn.popPanel.hide = function ($el, mask) {
		$("body").css({ overflowY: "auto" })
		if (mask) {
			mask.removeClass("on")
		}
		$el.removeClass("pop-out");
	}

	$.fn.popPanel.return = function ($el) {
		$el.removeClass("pop-out");
	}

})(jQuery);

$(document).ready(function (e) {
	//var hdHeight=$(".header").height()
	
	// $(window).load(function () {
	// 	$('.content').height($(window).height()-hdHeight);
	// });


	var isTouch = ("ontouchstart" in window) ? true : false;
	if(!isTouch){
		$(".scrollBox").scrollBar();
	}else{
		$('body').addClass("mobile")
	}
	
	$(".menu-btn").click(function () {
		$(".menu").toggleClass("on")
		$("body").toggleClass("menuOn")
	})
	

	var open = false
	$(".menu-li").find("li").click(function(){
		$(this).siblings("li").removeClass("on")
		if(!open){
			// var aleft = $('a',this).offset().left
			// $(".mobile .subli").css("paddingLeft",aleft)
			$(this).addClass("on")
			open = true
		}else{
			$(this).removeClass("on")
			open = false
		}
	   
	})
    
    /*浮动菜单*/
    $(window).scroll(function (e) {
        s = $(document).scrollTop();
        /*回到顶部*/
        if ($(window).scrollTop() >= 300) {
            $('.actGotop').fadeIn(300);
        } else {
            $('.actGotop').fadeOut(300);
        }
    })
    $('.actGotop').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });
	
})