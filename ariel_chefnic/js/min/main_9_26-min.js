$(document).ready(function(){function i(){var i=document.documentElement,e=640,s=i.clientWidth,o=1;i.style.fontSize=100*o*(s/e)+"px"}function e(i){var e=/^(0|86|17951)?(13|15|17|18|14)[\d]{9}$/;return e.test(i)}var s=3,o=2,n="http://api.giccoo.com/api/ip/",t="Http://api.giccoo.com/admin/ariel/lottery",c="http://api.giccoo.com/admin/ariel/video/?size="+s,a="http://image.giccoo.com/Active/",l="http://api.giccoo.com/admin/ariel/dish/?size=",d,r=!0;if($(document).on("touchmove mousemove",function(i){var e=$(i.target).parents()[0].tagName,s=$(i.target).parents(".share").size(),o=i.target.tagName;"A"!=e&&"INPUT"!=e&&"TEXTAREA"!=e&&"SELECT"!=e&&"A"!=o&&"INPUT"!=o&&"TEXTAREA"!=o&&"SELECT"!=o&&"VIDEO"!=o&&0==s&&(r||i.preventDefault())}),/iPhone|iPod|Android/.test(navigator.userAgent))console.log("mobile"),d="MOBILE",window.onResize=i(),i();else{console.log("PC"),d="PC";var p=document.documentElement;p.style.fontSize="100px"}$(".video_back").css("display","none");var v=[];$.getJSON(c,function(i){function e(i){if(1==i){for(var e=0;e<v.length;e++){var s=v[e];$("#"+s).css("display","block")}$(".video_back").css("display","block"),$("#video_click").css("display","none")}else{for(var o=0;o<v.length;o++){var n=v[o];$("#"+n).css("display","none")}$(".video_back").css("display","none"),$("#video_click").css("display","block")}}if("success"===i.reason){for(var s=i.info,o=0;o<s.length;o++){var n=s[o],t=a+n.image,c=n.link,l=n.name,d="video"+o,r='<div class="small_video" id='+d+'><a target="_blank" href='+c+'><img class="video_pic" src='+t+'></a><div class="videoName">'+l+"</div></div>";$(".pic_container").append(r),0!=o&&v.push(d)}console.log(v),$(".video_back").css("display","none"),1!=v.length&&0!=v.length?(e(!1),$(".video_back").css("display","none"),$("#video_click").on("click",function(){e(!0)}),$(".video_back").on("click",function(){e(!1)})):$("#video_click").css("display","none")}else console.log(i.reason)});var m=[];$.getJSON(l,function(i){if("success"===i.reason){for(var e=i.info,s=0;o>s;s++){var n=e[s],t=a+n.image,c=n.link,l=a+n.avatar,d=n.name,p=n.username,v={tips:a+n.tips,id:n.id};m.push(v);var u='<div class="dish"><div class="dishLeft"><a class="dishLink" target="_blank" href='+c+'><img class="dish_pic" src='+t+'></a></div><div class="dish_info"><img class="dish_makerPic" src='+l+' alt=""> <div class="user_name">'+p+'</div> <div class="dish_name">'+d+'</div> <div class="tips_fakeBtn">碧浪TIPS</div> </div><div class="tips_btn"></div></div>';$("#dishContanier").append(u)}console.log(m),$(".tips_btn").on("click",function(i){r=!1;var e=$(this).parent().index();console.log(e),$(".tips_path").attr("src",m[e].tips),$(".tips_overlay").css("display","block")})}else console.log(i.reason)}),$(".lottery_btn").on("click",function(){r=!1,$(".lottery_overlay").css("display","block"),$(".start").css("display","block")}),$(".colseBtn").on("click",function(){r=!0,$(".tips_overlay").fadeOut(400)}),$(".post_number").on("click",function(){function i(){$.getJSON(n,function(i){if("success"==i.reason){var e="",s=i.info.content.address;console.log(s),"北京市"==s?($(".result_copy").text("不用气馁,前往官网了解更多有奖活动！"),$(".link_btn").text("前往官网"),e="http://www.pg.com.cn/products/detail.aspx?id=30"):($(".result_copy").text("现在购买碧浪商品，有更多大奖等你来拿！"),$(".link_btn").text("前往商城"),e="PC"===d?"http://sale.jd.com/act/2TwGVQPD3c.html":"http://sale.jd.com/m/act/2TwGVQPD3c.html"),$(".link_btn").on("click",function(){window.open(e,"_blank")}),$(".loading").fadeOut(800,function(){$(".result").fadeIn()})}else alert("请求失败")})}var s=$(".number").find("input").val();if(e(s)){$(".start").css("display","none"),$(".loading").css("display","block");var o={mobile:s};$.post(t,o,function(e,s){console.log(e),i()})}else alert("请输入正确手机号!")})});