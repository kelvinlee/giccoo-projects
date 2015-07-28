define([
/**************************************************************
* @name     :   
* @version  :   v1.0.0
* @author   :   听着情歌流泪
* @email    :   bobo.xiao@lingtal.com
* @created  :   
* @update   :
**************************************************************/
'module/result/resultView',
'utils/appFunc',
'lib/areaData'
],function(resultView,appFunc,areaData) {
    var resultCtrl = {
    	init : function(query){
    		resultView.init(query);
            /*
            $$('form.ajax-submit').attr('action',postApi.getBiuldUser).on('beforeSubmit', function (e) {
              //var xhr = e.detail.xhr;
              //var data = e.detail.data; 
              var _area = $$('#redirecSelect').val();
                var _building = $$('#buildingSelect').val();
                if(_area == 0){
                    NMAPP.alert('请选择区域');
                    return false;
                }
                if(_building == 0){
                    NMAPP.alert('请选择大厦');
                    return false;
                }
            });
*/
    	},
    	/***************
        * 事件绑定
        ***************/
        bindEven: function(){
            var bindings = [{
                element: '#webappView',
                selector: '#resultSubmit',
                event: 'click',
                handler: resultCtrl.resultSubmit
                
            },{
                element: '#webappView',
                selector: '#redirecSelect',
                event: 'change',
                handler: resultCtrl.redirec
            },{
                element: '#webappView',
                selector: '#addBuilding',
                event: 'click',
                handler: resultCtrl.postNewBuild
                
            }];
            appFunc.bindEvents(bindings);
        },
        postNewBuild: function(){
            var build = $$('#buildingName').val();
            var area = $$('#redirecSelect').val();
            // console.log(ra)
            if (area == 0) {
                NMAPP.alert('请选择区域');
                return false;
            }else if(!build){
                NMAPP.alert('请输入大厦名称');
                return false;
            }else{
                postNewBuild(area,build);
                //mainView.router.loadPage($CONFIG['tplPath']+'/sharePage.html');
            }
        },

        resultSubmit: function(){
            var _area = $$('#redirecSelect').val();
            var _building = $$('#buildingSelect').val();
            if(_area == 0){
                NMAPP.alert('请选择区域');
                return false;
            }
            if(_building == 0){
                NMAPP.alert('请选择大厦');
                return false;
            }
            //mainView.router.loadPage($CONFIG['tplPath']+'/sharePage.html');
            postAreaBuilding(_area,_building);
        },
        redirec: function(){
            // var temp = document.region.building;
            // for (i=0;i<building[document.region.area.options.selectedIndex].length;i++){ 
            //     temp.options[i]=new Option(building[document.region.area.options.selectedIndex][i].text,building[document.region.area.options.selectedIndex][i].value);
            // }
            // temp.options[0].selected=true;
            changeBuild($$(document.region.area).val(),document.region.building);
            // changeBuild()
        }
    }
    resultCtrl.bindEven();
    return resultCtrl;
})