define([
/**************************************************************
* @name		:	
* @version	:	v1.0.0
* @author	:	听着情歌流泪
* @email	:	bobo.xiao@lingtal.com
* @created	:	
* @update   :
**************************************************************/
'module/home/homeView',
'utils/appFunc',
],function(homeView,appFunc) {
    var homeCtrl = {
    	init : function(query){
    		homeView.init(query);
    	},
    	/***************
        * 事件绑定
        ***************/
        bindEven: function(){
            var bindings = [{
                element: '#webappView',
                selector: '#beginGame',
                event: 'click',
                handler: homeCtrl.beginGame
            },
            {
                element: '#webappView',
                selector: '#gameIntro',
                event: 'click',
                handler: homeCtrl.gameIntro
            }];
            appFunc.bindEvents(bindings);
        },
        beginGame: function(){
        	mainView.router.loadPage($CONFIG['tplPath']+'/game.html');
        },
        gameIntro: function(){
           NMAPP.popup('.popup');
        }
    }
    homeCtrl.bindEven();
    return homeCtrl;
})