function drawdash(x0,y0,x1,y1,linewidth){
        var dashed = new PIXI.Graphics();
        dashed.lineStyle(1, 0x626262, 1); // linewidth,color,alpha
        dashed.moveTo(0, 0);
        dashed.lineTo(linewidth,0);
        dashed.moveTo(linewidth*2.3,0);
        dashed.lineTo(linewidth*2.5,0);
        var dashedtexture = dashed.generateCanvasTexture(1,1);
        var linelength=Math.pow(Math.pow(x1-x0,2) + Math.pow(y1-y0,2) , 0.5);
        var tilingSprite = new PIXI.extras.TilingSprite(dashedtexture, linelength, linewidth);
        tilingSprite.x=x0;
        tilingSprite.y=y0;
        tilingSprite.rotation = angle(x0,y0,x1,y1)*Math.PI/180;
        tilingSprite.pivot.set(linewidth/2, linewidth/2);
        return tilingSprite;
        function angle(x0,y0,x1,y1){
                var diff_x = Math.abs(x1 - x0),
                    diff_y = Math.abs(y1 - y0);
                var cita;
               if(x1>x0){
                    if(y1>y0){
                        cita= 360*Math.atan(diff_y/diff_x)/(2*Math.PI);
                    }else
                   {
                        if(y1<y0){ 
                            cita=-360*Math.atan(diff_y/diff_x)/(2*Math.PI);
                        }else{  
                            cita=0;
                        }
                    }
                }else
                {
                    if(x1<x0){
                        if(y1>y0){
                            cita=180-360*Math.atan(diff_y/diff_x)/(2*Math.PI);
                        }else
                        {
                            if(y1<y0){ 
                                cita=180+360*Math.atan(diff_y/diff_x)/(2*Math.PI);
                            }else{  
                                cita=180;
                            }
                        } 
                    }else{ 
                        if(y1>y0){ 
                            cita=90;
                        }else
                        {
                            if(y1<y0){ 
                                cita=-90;
                            }else{  
                                cita=0;
                            }
                        }
                    }
                }
                return cita;
        }
}



function clamp(min,_number,max){
    if(_number<min){
        return min
    }else if(_number>max){
        return max
    }else{
        return _number
    }
}


function drawBezier( t, p0, p1, p2, p3) {
        var point = {};
        var temp = 1 - t;
        point.x = p0.x * temp * temp * temp + 3 * p1.x * t * temp * temp + 3 * p2.x * t * t * temp + p3.x * t * t * t;
        point.y = p0.y * temp * temp * temp + 3 * p1.y * t * temp * temp + 3 * p2.y * t * t * temp + p3.y * t * t * t;
        return point;
}



//================开始

var songNum,songHour,songTime,songName,songPlayTime

//var t1_0,t1_1,t1_2,t1_3,t1_4
//var t1,t2,t3,t4

// var t1_0=[
// //蒙面星唱将
// "无人知晓，无迹可寻",
// "你就这样出现在镜头上",
// "自信地放声歌唱",

// "音乐池里有千万首",
// "你爱的歌曲",
// "舞台上有专属于你的",
// "聚焦灯光",

// "未来的日子",
// "就劳请你",
// "无畏披荆斩棘",
// "不羁C位出道",

// "“有人说爱上小溪是因",
// "为没见过大海，但其实",
// "我见过银河却只爱你这",
// "一颗新星”"

// ]


// var t1_1=[

// [
// "不是做百年老字号的",
// "回头客不够好，",
// "只是你更爱，",
// "去新晋网红店拔草。"
// ],

// [
// "在音乐世界",
// "你打探所有新奇创意",
// "671首",
// "不同歌曲",
// "足以让你一整年都C位出道"
// ],

// [
// "全年，你一共听了",
// "671首",
// "歌曲",
// "“你已用歌声填平山",
// "海，却还想继续塞满云",
// "端”"
// ],

// ]


// var t1_A=[t1_0,t1_1]


