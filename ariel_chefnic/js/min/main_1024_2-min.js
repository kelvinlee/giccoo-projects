$(document).ready(function(){function e(){var e=document.documentElement,i=640,o=e.clientWidth,s=1;e.style.fontSize=100*s*(o/i)+"px"}function i(e){var i=/^(0|86|17951)?(13|15|17|18|14)[\d]{9}$/;return i.test(e)}var o=7,s=7,t="http://api.giccoo.com/api/ip/",n="Http://api.giccoo.com/admin/ariel/lottery",a="http://api.giccoo.com/admin/ariel/video/?size="+o,c="http://image.giccoo.com/Active/",l="http://api.giccoo.com/admin/ariel/dish/?size="+s,d,r=!0;if($(document).on("touchmove mousemove",function(e){var i=$(e.target).parents()[0].tagName,o=$(e.target).parents(".share").size(),s=e.target.tagName;"A"!=i&&"INPUT"!=i&&"TEXTAREA"!=i&&"SELECT"!=i&&"A"!=s&&"INPUT"!=s&&"TEXTAREA"!=s&&"SELECT"!=s&&"VIDEO"!=s&&0==o&&(r||e.preventDefault())}),/iPhone|iPod|Android/.test(navigator.userAgent))console.log("mobile"),d="MOBILE",window.onResize=e(),e();else{console.log("PC"),d="PC";var v=document.documentElement;v.style.fontSize="100px"}$(".video_back").css("display","none");var p=[];$.getJSON(a,function(e){function i(e){if(1==e){for(var i=0;i<p.length;i++){var o=p[i];$("#"+o).css("display","block")}$(".video_back").css("display","block"),$("#video_click").css("display","none")}else{for(var s=0;s<p.length;s++){var t=p[s];$("#"+t).css("display","none")}$(".video_back").css("display","none"),$("#video_click").css("display","block")}}if("success"===e.reason){var o=e.info;console.log(o),o.reverse(),console.log(o);for(var s=0;s<o.length;s++){var t=o[s],n=c+t.image,a=t.link,l=t.name,d="video"+s,r='<div class="small_video" id='+d+'><a target="_blank" href='+a+'><img class="video_pic" src='+n+'></a><div class="videoName">'+l+"</div></div>";$(".pic_container").append(r),0!=s&&p.push(d)}console.log(p),$(".video_back").css("display","none"),1!=p.length&&0!=p.length?(i(!1),$(".video_back").css("display","none"),$("#video_click").on("click",function(){event.preventDefault(),i(!0)}),$(".video_back").on("click",function(){event.preventDefault(),i(!1)})):$("#video_click").css("display","none")}else console.log(e.reason)});var m=[];$.getJSON(l,function(e){if("success"===e.reason){var i=e.info;i.reverse();for(var o=0;s>o;o++){var t=i[o],n=c+t.image,a=t.link,l=c+t.avatar,d=t.name,v=t.username,p={tips:c+t.tips,id:t.id};m.push(p);var u='<div class="dish"><div class="dishLeft"><a class="dishLink" target="_blank" href='+a+'><img class="dish_pic" src='+n+'></a></div><div class="dish_info"><img class="dish_makerPic" src='+l+' alt=""> <div class="user_name">'+v+'</div> <div class="dish_name">'+d+'</div> <div class="tips_fakeBtn">碧浪TIPS</div> </div><div class="tips_btn"></div></div>';$("#dishContanier").append(u)}console.log(m),$(".tips_btn").on("click",function(e){r=!1;var i=$(this).parent().index();console.log(i),$(".tips_path").attr("src",m[i].tips),$(".tips_overlay").css("display","block")})}else console.log(e.reason)}),$(".lottery_btn").on("click",function(){r=!1,$(".lottery_overlay").css("display","block"),$(".start").css("display","block")}),$(".colseBtn").on("click",function(){r=!0,$(".tips_overlay").fadeOut(400)}),$(".post_number").on("click",function(){function e(){$.getJSON(t,function(e){if("success"==e.reason){var i="",o=e.info.content.address;console.log(o),"北京市"==o?($(".result_copy").text("不用气馁,前往官网了解更多有奖活动！"),$(".link_btn").text("前往官网"),i="http://www.pg.com.cn/products/detail.aspx?id=30"):($(".result_copy").text("现在购买碧浪商品，有更多大奖等你来拿！"),$(".link_btn").text("前往商城"),i="PC"===d?"http://sale.jd.com/act/gB3aNFEkQIr4qVx.html":"http://sale.jd.com/m/act/gB3aNFEkQIr4qVx.html"),$(".result_copy").text("现在购买碧浪商品，不仅有满199减100，还有价值2000元的海尔洗衣机等你来抢！"),i="PC"===d?"http://sale.jd.com/act/gB3aNFEkQIr4qVx.html":"http://sale.jd.com/m/act/gB3aNFEkQIr4qVx.html",$(".link_btn").on("click",function(){window.open(i,"_blank")}),$(".loading").fadeOut(800,function(){$(".result").fadeIn()})}else alert("请求失败")})}var o=$(".number").find("input").val();if(i(o)){$(".start").css("display","none"),$(".loading").css("display","block");var s={mobile:o};$.post(n,s,function(i,o){console.log(i),e()})}else alert("请输入正确手机号!")})});