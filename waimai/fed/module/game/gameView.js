define([
/**************************************************************
* @name		:	
* @version	:	v1.0.0
* @author	:	听着情歌流泪
* @email	:	bobo.xiao@lingtal.com
* @created	:	
* @update   :
**************************************************************/
'text!module/game/chooseList.tpl',
'utils/tplManager'
],function(chooseList,TM) {
    var gameView = {
    	init : function(params){
    		var questionSwiper;
    	},
    	showChooseList: function(data){
            var renderData = {
                lists : data
            }
            
            NmTemplate.registerHelper('showLast',function(index){
            	var _tpl = [];
            	if(index != '2'){
            		 _tpl.push('<li><a href="#" class="link"><i class="icon icon-d">d</i><img src="'+$CONFIG['staticPath']+'images/a_'+index+'_d.png"></a></li>');
            	}
            	return _tpl.join('\n');
            });
            var output = TM.renderTpl(chooseList,renderData);
            $$('#chooseList').html(output);

            questionSwiper = NMAPP.swiper('.swiper-container', {
                speed: 400,
                spaceBetween: 0,
                touchRatio:0,
                onInit:function(e){
                	$$('.swiper-slide').css('height',$$(window).height()+'px')
                },

            }); 
            
        }
    }
    return gameView;
})