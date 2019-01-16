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




// var linewidth=5;
// var tilingSprite = drawdash(100,100,100,400,linewidth);
// app.stage.addChild(tilingSprite);
// app.ticker.add(function(delta) {
//     tilingSprite.tilePosition.x += 0.5*delta;
// });


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