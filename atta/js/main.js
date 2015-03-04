var _list = ["萌妹鹅","女神鹅","小清新鹅","女王鹅","极客鹅","暖男鹅","CEO鹅","大叔鹅",];
var _list_img = ["img/share_pic0.jpg","img/share_pic1.jpg""img/share_pic2.jpg""img/share_pic3.jpg""img/share_pic4.jpg""img/share_pic5.jpg""img/share_pic6.jpg""img/share_pic7.jpg"];

$(document).ready(function(){
	$('.e').click(function(){
		console.log($(this).parent().index());
		index = $(this).parent().index();
		$('.page'+index).show();
		$('.page'+index).addClass('animated fadeInUpBig').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function showInit(){
				$('.page'+index).removeClass('animated fadeInUpBig');
				addReturn();
				document.title = _list[index];
				$("#shareimg").attr("src",_list_img[index]);
			});
		});
	
});
function addReturn(){
	$('.return').click(function(){
			$('.page'+index).addClass('animated fadeOutUpBig').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function showInit(){
				$('.page'+index).removeClass('animated fadeOutUpBig');
				$('.page'+index).hide();
			});
		});
	$('.share').click(function(){
			$('.sharePage').show();
			$('.sharePage').click(function(){
				$(this).hide();
				document.title = "据说，点击这个帖子的企鹅，都坏坏地笑了！";
				$("#shareimg").attr("src","img/share_pic.jpg");
			});
	});
}