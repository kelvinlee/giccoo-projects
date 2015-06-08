
$(document).ready(function(){
  $('.questionBox1').click(function(){
                  console.log($(this).parent().index());
                  index = $(this).parent().index();
                  $('.a'+index).show();
                  $('.a'+index).click(function(){
                      $('.a'+index).hide();
                    });
                });
                  // console.log(111);
                $('.questionBox2').click(function(){
                  console.log($(this).parent().index());
                  index = $(this).parent().index();
                  $('.b'+index).show();
                  $('.b'+index).click(function(){
                      $('.b'+index).hide();
                    });
                });
                  console.log(333);
                $('.questionBox3').click(function(){
                  console.log($(this).parent().index());
                  index = $(this).parent().index();
                  $('.c'+index).show();
                  $('.c'+index).click(function(){
                      $('.c'+index).hide();
                    });
                });
});
