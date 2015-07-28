define([
/**************************************************************
* @name     :   
* @version  :   v1.0.0
* @author   :   听着情歌流泪
* @email    :   bobo.xiao@lingtal.com
* @created  :   
* @update   :
**************************************************************/
'module/sharePage/sharePageView',
'utils/appFunc',
'utils/xhr',
],function(sharePageView,appFunc,xhr) {
    var sharePageCtrl = {
    	init : function(query){
    		sharePageView.init(query);
            this.getRank(query);
            this.getUserRank(query);
            this.getList(query);
    	},
    	/***************
        * 事件绑定
        ***************/
        bindEven: function(){
            var bindings = [{
                element: '#webappView',
                selector: '.shareBtn_1',
                event: 'click',
                handler: sharePageCtrl.shareTip
            }];
            appFunc.bindEvents(bindings);
        },
        getRank:function(query){
            getBuildUser(query.area,query.building);
        },
        getUserRank: function(query){
            getUserRank(query.area,query.building)
        },
        getList: function(query){
            getlist(query.area,query.building)
        },
        shareTip: function(){
            var shareTip = [];
            shareTip.push('<img src="'+$CONFIG['staticPath']+'images/share_tip.png" class="shareTip">');
            $$('body').append(shareTip.join('\n'));
            $$('.shareTip').on('click',function(){
                $$(this).remove();
            })
        }
    }
    sharePageCtrl.bindEven();
    return sharePageCtrl;
})