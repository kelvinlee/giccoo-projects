
$(document).ready(function(){
	$('.e').click(function(){
		console.log($(this).parent().index());
		index = $(this).parent().index();
		$('.page'+index).show();
		$('.page'+index).addClass('animated fadeInUpBig').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function showInit(){
				$('.page'+index).removeClass('animated fadeInUpBig');
				addReturn();
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
			});
	});
}