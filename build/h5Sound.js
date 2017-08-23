
var h5Sound = function(options){
	'use strict';
	var defaults = {
		element: undefined,
		soundSrc: '',
		autoPlay: true,
		loop: true,
		spriteIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAyCAYAAACqNX6+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATTSURBVHhe7ZppyD1jGIcPIols/YlQhMIHSSRb2bIra9nKn2whW1H2NUJEhOxC9rWECKVIlOWDlDVl3/mCxO96zvxqOp2ZM+eded5zpu6rrt5z33POnJlzzzzbvIMgCIIgCIIgCIIgCIIgCBLryTvkLinqH4fLj+QpKeo5B8o/5H/ySRINOU++LTdO0ey4RXLs+CyJPnOt9MngfbIp3FF85ju5PIlFZhP5riwf/12yl2wg35CcxO+SO4PX98imLCv9g0xzZ3XBkdJFeEFeWrye5vjnhoPlX5IT+ESuJbcq4ntlFcvIZ+RjKRqyuvxH8tmdSCwC5SbqfhJiW0ncu4JcL30yD0k3NcdKcnUF4Y7wZ2muzOmSHJ1qTkabqJOkOVGSm8uCrCD3lodIOuz95WHyTemTOU2WOUaSrysIbCm9jz1JFPwqyW2TonZsKm+UXP38wHdK+jZ/78eSO7rMUsm2cQV5Tr4yfFnL7pJBylEp6pBLpA9+1M8lt/coVQXZUD4oj0jRkJMl7/0mRUOukORuT1E7bpM+3lEp0nJylKqC0MzSR7LtLRIV7Cr9HVeR6BJGGuz4U/mEfFo+L2+QK8pxVBVkL+kD3ZFEwWeS3D4pGgw2k8Q/pagdN0v29ZLkauXYTpD7yirq7pC15ZeS7eOKUi7GNKPMxnC7s/MLU9SMuibrasm2nyX9CNDkkXskRUN+keTazku4cNjPBSlqRl1BYE35g+Q95aJkLwa4INekqBmT+pAPJdvdvm4kiX9L0RDaanKM4trggvC3KZMKAutLF4XR4kHFa8xWDHBBrktRMyYV5GjJdpo/47aZZRfg+4jPStHCyVUQ4FjfkbzX3iSzkqMg7iPol8z7ktx2KRoMzpXEV6Zo4eQsCLDuxXvxexK5yVEQriy2c8sbhojktk/R8M6Y9nvHkbMg9Bkeov9b/H1VZiVHQbaWbP8gRUOYD5BjG5wviS9L0cLJVZByB84EmSH9F0VcNyRuTY6CeG7jeQZzAV9hq5IQXtI4NUULJ0dBqkZTjL7qhsSd4IJcnqJm1BWEuYs7cE8qvXbEfMR4sZK5SxtckItS1Iy6guwm2YbjRlOjRWF9rlMYNbBz/q5cso6qgiyR70m2vUyiwN/hq5j5iRcZ+UwbfEE9LrmyLcs2VVQVhJk6eawb2lIUHiPwvs6X8B+QPoiytPlVV29VQeiwybNM4qKyIOnV4s1JCJ40EnexwMgPx77GWbWsUXeHsDRPnzEJHkncLVnT6hSGdd/Kv+XoCeG4TreuyWJ5hCV687DkveU75lFJbprZdRU7SOY7LAgyAsLXpY//NbmOLNOkU58prPiWm6vV5MXSJ8WPyRqPOU6Sr+rUzZnS+1iXhKDNdW70h+qSneXXku/hkTOr2Ia1LvJzW5Aq9pA/Sg6eZY/9JBwgydUVhJEV78FDSRT4jik/uMrFKpK7x8fBOhuw8Encu4LAGpLVX58UD6coDK8n3SEsoaAprwaXm7XcnCP9vRzzGcXrXhbEeCKHLJtPe0JbSPdTPDVcbHhk/JX0OWBv/8nBMJx0E4Y0P015UfKZp1I0G1aS/gcN5PlP76HD99L5rSQawlCXGfw8cLb8U7ZdtpkrGKnM+p/e2nC8pBkNgiAIgiAIgiAIgiAIZslg8D+IOrgYhxA1gwAAAABJRU5ErkJggg==',
		iconStyles: {
			width: '100px',
			height: '100px'
		},
		onLoaded: function(){
			
		}
	},
		audio,
		icon,
		i = 0,
		playing,
		
		onPlay = function(){
			if(playing){
				icon.style.backgroundPosition = 'top left';
				audio.play();
			}else{
				icon.style.backgroundPosition = 'top right';
				audio.pause();
			}
		};
	options = Object.assign({}, defaults, options);
	
	if(!options.element){
		return false;
	}
	audio = document.createElement('audio');
	icon = document.createElement('i');
	options.element.appendChild(audio);
	options.element.appendChild(icon);
	
	icon.style.backgroundImage = 'url('+options.spriteIcon+')';
	icon.style.cursor = 'pointer';
	icon.style.backgroundSize = '200% 100%';
	icon.style.display = 'inline-block';
	for(i in options.iconStyles){
		icon.style[i] = options.iconStyles[i];
	}
	playing = options.autoPlay;
	
	audio.src = options.soundSrc;
	audio.loop = options.loop;
	audio.load();
	
	audio.addEventListener('canplaythrough', function(){
		options.onLoaded();
	});
	
	document.addEventListener('DOMContentLoaded', function(){
		onPlay();
		document.addEventListener('WeixinJSBridgeReady', function(){
			onPlay();
		});
	});
	
	var handle = function(event){
		event.preventDefault();
		if(event.type === 'click' || event.type === 'touchend'){
			playing = !playing;
			onPlay();
		}
	};
	icon.addEventListener('click', handle);
	icon.addEventListener('touchend', handle);
	
	return {
		play: function(){
			playing = true;
			onPlay();
		},
		pause: function(){
			playing = false;
			onPlay();
		},
		stop: function(){
			playing = false;
			onPlay();
			audio.currentTime = 0;
		}
	};
};