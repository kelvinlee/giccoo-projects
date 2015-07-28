define([
/**************************************************************
* @name		:	
* @version	:	v1.0.0
* @author	:	听着情歌流泪
* @email	:	bobo.xiao@lingtal.com
* @created	:	
* @update   :
**************************************************************/
'utils/tplManager'
],function(TM) {
    var sharePageView = {
    	init : function(params){

    	},
    	showRank: function(_data){
    		var arr = _data.split('');
    		var _numTpl = [];
    		for(var i =0;i<arr.length;i++){
    			_numTpl.push('<img src="'+$CONFIG['staticPath']+'images/numbers/'+arr[i]+'.png">');
    		}
    		$$('.rank-num').html( _numTpl.join('\n') );
    	},
    	showUserRank: function(_data){
    		var arr = _data.split('');
    		var _numTpl = [];
    		for(var i =0;i<arr.length;i++){
    			_numTpl.push('<img src="'+$CONFIG['staticPath']+'images/numbers/'+arr[i]+'.png">');
    		}
    		$$('.user-rank-num').html( _numTpl.join('\n') );
    	}
    }
    return sharePageView;
})