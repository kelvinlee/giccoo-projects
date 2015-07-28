define([
/**************************************************************
* @name		:	
* @version	:	v1.0.0
* @author	:	听着情歌流泪
* @email	:	bobo.xiao@lingtal.com
* @created	:	
* @update   :
**************************************************************/
'module/game/gameView',
'utils/appFunc',
],function(gameView,appFunc) {
    var gameCtrl = {
    	init : function(query){
    		gameView.init(query);
            this.getChooseList();
    	},
    	/***************
        * 事件绑定
        ***************/
        bindEven: function(){
            var bindings = [{
                element: '#webappView',
                selector: '#chooseList a',
                event: 'click',
                handler: gameCtrl.clickAnswer
            }];
            appFunc.bindEvents(bindings);
        },
        getChooseList: function(){
            var DataList = [$CONFIG['staticPath'],$CONFIG['staticPath'],$CONFIG['staticPath']];
            gameView.showChooseList(DataList);
        },
        clickAnswer: function(){
            postClick($$(".swiper-slide-active").index()+1,$$(this).parent().index()+1);
            $$('#chooseList a').removeClass('active');
            $$(this).addClass('active');
            gameCtrl.nextSwiper(500);
        },
        nextSwiper: function(timer){
            setTimeout(function(){
                if(questionSwiper.isEnd){
                    mainView.router.loadPage($CONFIG['tplPath']+'/result.html');
                }else{
                    questionSwiper.slideNext();
                }
            },timer);
        },
    }
    gameCtrl.bindEven();
    return gameCtrl;
})