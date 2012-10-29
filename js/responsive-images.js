(function(window, document, $, undefined){
	'use strict';

	window.APPNAMESPACE = window.APPNAMESPACE || {};
	window.APPNAMESPACE.Responsive = window.APPNAMESPACE.Responsive || {};

		var ResponsiveImages = function(elem, options) {
			var $this = $(elem);

			var defaults = {};

			if(options) {
				defaults = $.extend({}, defaults, options);
			}

			var setElemType = function (elem) {
				($this.is('img')) ? defaults.elemType = "img" : defaults.elemType = "bgImg";
			};

			var getElemType = function() {
				return defaults.elemType;
			};

			var getScreenWidth = function() {
				return window.innerWidth;
			};

			var getBrowserSize = function() {
				if(Modernizr.mq && (window.APPNAMESPACE.Utils.getIEVersion() === -1) ){
					for (var key in defaults){
						if (parseInt(key) !== NaN && Modernizr.mq('only screen and (max-width: ' + key + 'px)')) {
							setImage(defaults[key]);
							break;
						} 
					}
				} else {
					for (var key in defaults){
						if (parseInt(key) !== NaN && getScreenWidth() <= parseInt(key)) {
							setImage(defaults[key]);
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
					$this.attr('src', imagePath);
				} else {
					$this.css("background-image", "url(" + imagePath + ")");
				}
			};

			var getPixelRatio = function() {
				if(window.devicePixelRatio) {
					return window.devicePixelRatio;
				} else {
					return -1;
				}
			};

			var bindEvents = function() {
				$(window).resize(getBrowserSize);
			};


			var initalise = function() {
				setElemType(elem);
				getBrowserSize();
				bindEvents();
			}();

			return {
				init: initalise,
				getElemType: getElemType,
				getPixelRatio: getPixelRatio
			};
		};

	var getResponsiveImages = (function() {
		var $responsiveImages = $('.responsive-image');
		if($responsiveImages){
			for (var i = 0, elem = $responsiveImages, len = elem.length; i < len; i++) {
			   window.APPNAMESPACE.Responsive[i] = new ResponsiveImages(elem[i], $(elem).data());
			};
		}
	})();


 })(window, document, jQuery);