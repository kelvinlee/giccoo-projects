# Giccoo-projects
所有的项目都在 m.giccoo.com/* 文件夹名替换*

修改代码后直接提交 pull request .

### 说明

此为本人制作的手机端网站活动的代码，均为上线代码。可以参考借鉴，但是请不要直接复制，因为活动方享有源码所有权，可以追求盗用方。

懒得翻译成英文了，所以请大家自己注意吧。

### 使用过的框架

1. Riot
2. Angluar
3. Zepto
4. layzr
5. jquery
6. pixi
7. createjs
8. megapix-image
9. localforage
10. qrcode
11. vue
12. 等...

### 构架

服务器: 阿里云(2CUP,4G内存,100M峰值带宽，ssd硬盘20G+40G) + 阿里云(OSS+CDN) + 阿里云(RDS/mysql)

后台: (docker -> nodejs + pm2 + mysql/mongodb)

最高承载量:  1035417pv/日 (应该不是瓶颈)

统计工具: tongji.baidu.com (准备全面换google analytics，百度统计还是不太好用)

### 后台

后台使用 nodejs+Expressjs (具体内容就不开源了，涉及到用户数据和隐私问题)

### 前端

之前在使用Riot ， 小巧在移动端表现也很强大，能够尽量将重复工作模块话。

使用Sass来完成css。

coffee来写js。

jade转换html。

现在正在使用 VUE.js 性能完美. 操作简单.

### 后言

如果你也对H5感兴趣，欢迎加Q群: *43540848* (请注明来自GITHUB，因为要屏蔽发广告的人)

因为现在主攻H5，所以这里的项目更新也比较快，我会不定期使用新的框架去应用到实际项目中。

感谢你的Star。


### Count use function

###### Create/update a new id count

IDNAME is what you want the id's name.

```
$.post("http://api.giccoo.com/count/update", {id: "IDNAME"},function(msg){
	if (msg.recode == 200) {
		alert("update success")
	}else{
		alert("update faild")
	}
})
```
###### Get ids count

IDS is what you want get the ids (like: test1,test2,test3)

```
$.get("http://api.giccoo.com/count/get/IDS",function(msg){
	if (msg.recode == 200) {
		console.log("update success", msg.info)
	}else{
		alert("get faild")
	}
})
```

Example msg:

```
{"recode":200,"reason":"success","info":[{"id":"test1","count":2,"create_at":"2016-08-23T07:00:00.000Z"}]}
```

<!-- 

ffmpeg -i rtmp://play.liveu.top/live/maor2018 -c:a copy -c:v libx264 -f flv rtmp://video-center.alivecdn.com/active/soupdaren?vhost=live.giccoo.com

ffmpeg -i rtmp://play.liveu.top/live/maor2018 -c:a copy -c:v libx264 -b 512k -f flv rtmp://video-center.alivecdn.com/active/soupdaren?vhost=live.giccoo.com

ffmpeg -re -i rtmp://play.liveu.top/live/maor2018 -acodec copy -c:v x264lib -s 640×360 -b 128k -vpre medium -vpre baseline rtmp://video-center.alivecdn.com/active/soupdaren?vhost=live.giccoo.com

 -->

<!-- 1.4 12:17 59570 -->