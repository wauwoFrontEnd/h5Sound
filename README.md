
## 说明

* 支持微信H5背景声音自动播放
* icon图标默认为左右排列的spring图,左边为播放图标，右边为停止播放图标

## 有问题反馈
在使用中有任何问题，欢迎反馈给我，可以用以下联系方式跟我交流

* 邮件(479573700@qq.com)
* QQ: 479573700

## 关于作者
* Anthan Wang

```javascript
  var s = h5Sound({
		element: document.getElementById('audio'),
		soundSrc: 'song.mp3', //声音地址
        autoPlay: true,  //自动播放，默认true
        loop: true,  //循环播放， 默认true
        spriteIcon: 'sprint.png', //图标地址， 默认为一个base64的图标
		iconStyles: {  //图标style样式，一般设宽高即可
			width: '200px',
			height: '200px'
		},
		onLoaded: function(){  //声音加载完成
			console.log('加载完成');
		}
	});
	document.getElementById('start').addEventListener('click', function(){
		s.play();  //播放事件
	});
	document.getElementById('pause').addEventListener('click', function(){
		s.pause(); //暂停事件
	});
	document.getElementById('stop').addEventListener('click', function(){
		s.stop(); //停止事件
	});
```