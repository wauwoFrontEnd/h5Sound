module.exports = function(){
	'use strict';
	var h5Sound = function(options){
		var defaults = {
			element: '',
			soundSrc: '',
			spriteIcon: '' 
		};
		options = Object.assign({}, defaults, options);
		console.log(options);
	};
	
	return h5Sound;
};