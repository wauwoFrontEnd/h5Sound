
###使用方式：

html:
<html>
<script src="(source)/h5Sound.js"></script>
<body>
<div id="audio"></div>
</body>
</html>

js:
var s = h5Sound({
		element: document.getElementById('audio'), 
		soundSrc: 'song.mp3', //声音文件地址
		iconStyles: {         //图标css样式
			width: '100px',
			height: '100px'
		},
		onLoaded: function(){      //声音加载完成回调
			console.log('加载完成');
		}
	});
	document.getElementById('start').addEventListener('click', function(){
		s.play();   //播放
	});
	document.getElementById('pause').addEventListener('click', function(){
		s.pause();  //暂停
	});
	document.getElementById('stop').addEventListener('click', function(){
		s.stop();   //停止
	});