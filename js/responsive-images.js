(function(window, document, $, undefined){
	'use strict';

		var ResponsiveImages = function(elem, options) {
			var $this = $(elem);

			var defaults = {};

			if(options) 
			    defaults = $.extend({}, defaults, options);
			

			var sortObject = function (obj) {
			    var arr = [];
			    var prop;
			    for (prop in obj) {
			        if (obj.hasOwnProperty(prop))
			            arr.push({
			                "key": obj[prop],
			                "value" : prop
			            });
			    }
			    arr.sort(function(a, b) {
			        return a.value - b.value;
			    });
			    return arr;
			}

			//Sort Ordering break points (Lowest Break point first)
			var sortedImages = sortObject(defaults);

			var setElemType = function (elem) {
				(elem.nodeName === "IMG") ? defaults.elemType = "img" : defaults.elemType = "bgImg";
			};

			var getElemType = function() {
				return defaults.elemType;
			};

			var getScreenWidth = function() {
				return window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth;
			};

			var getBrowserSize = function() {
				if(Modernizr.mq && (window.APPNAMESPACE.Utils.getIEVersion() === -1) ){
					for (var i = 0, images = sortedImages, len = images.length; i < len; i++) {
					   if (parseInt(images[i]['value']) !== NaN && Modernizr.mq('only screen and (max-width: ' + images[i]['value'] + 'px)')) {
							setImage(images[i]['key']);
							break;
						} 
					};
				} else {
					for (var i = 0, images = sortedImages, len = images.length; i < len; i++) {
						if (parseInt(images[i]['value']) !== NaN && getScreenWidth() <= parseInt(images[i]['value'])) {
							setImage(images[i]['key']);
							break;
						} 
					}
				}

			};

			var setImage = function(imagePath) {
				if(getPixelRatio() >= 2) {
					//TODO : Add support for Retina Images
				} 
				if(defaults.elemType === "img") {
					elem.src = imagePath;
				} else {
					elem.style.backgroundImage = "url(" + imagePath + ")";
				}
			};

			var getPixelRatio = function() {
				if(window.devicePixelRatio) 
				    return window.devicePixelRatio;
					
				return -1;
			};

			var bindEvents = function() {
				if( window.addEventListener ){
					window.addEventListener( "resize", getBrowserSize, false );
					window.addEventListener( "DOMContentLoaded", function(){
						getBrowserSize();
						window.removeEventListener( "load", getBrowserSize, false );

					}, false );
					window.addEventListener( "load", getBrowserSize, false );
				}
				else if( window.attachEvent ){
					window.attachEvent( "onload", getBrowserSize );
				} else {
					$(window).resize(getBrowserSize);
				}
				
			};


			var initalise = function() {
				bindEvents();
				setElemType(elem);
			}();

			return {
				init: initalise,
				getElemType: getElemType,
				getPixelRatio: getPixelRatio
			};
		};

	var getResponsiveImages = (function() {
		var responsiveImages = document.getElementsByClassName('responsive-image');
		if(responsiveImages){
			for (var i = 0, elem = $responsiveImages, len = elem.length; i < len; i++) {
			   window.Responsive[i] = new ResponsiveImages(elem[i], $(elem[i]).data());
			};
		}
	})();


 })(window, document, jQuery);