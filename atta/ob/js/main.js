
$(document).ready(function(){
  $('.questionBox').click(function(){
    console.log($(this).parent().index());
    index = $(this).parent().index();
    $('.a'+index).show();
    $('.a'+index).click(function(){
        $('.a'+index).hide();
      });
  });
});
