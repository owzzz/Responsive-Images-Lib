(function(window, document, $, undefined){
	'use strict';

	window.APPNAMESPACE = window.APPNAMESPACE || {};
	window.APPNAMESPACE.Components = window.APPNAMESPACE.Components || {};
	window.APPNAMESPACE.Components.Responsive = window.APPNAMESPACE.Components.Responsive || {};

		var ResponsiveImages = function(elem, options) {
			var $this = $(elem);

			var defaults = {
				threetwenty: "",
				sevensixeight: "",
				tentwentyfour: "",
				twelvetwenty: "",
				fourteenfourty: ""
			};

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
				//Check to see if matchmedia lib is loaded and that the current browser is supported
				if( window.matchMedia && (window.Audi.Utils.getIEVersion() === -1) ){
					if (matchMedia('only screen and (max-width: 320px)').matches) {
						  setImage(defaults["threetwenty"]);
					} else if (matchMedia('only screen and (max-width: 768px)').matches) {
						  setImage(defaults["sevensixeight"]);
					} else if (matchMedia('only screen and (max-width: 1024px)').matches) {
						 setImage(defaults["tentwentyfour"]);
					} else if (matchMedia('only screen and (max-width: 1220px)').matches) {
						  setImage(defaults["twelvetwenty"]);
					} else if (matchMedia('only screen and (max-width: 1440px)').matches) {
						 setImage(defaults["fourteenforty"]);
					}
				} else {
					//This is probably IE so use standard JS to detect screensize
					if (getScreenWidth() <= 320) {
						setImage(defaults["threetwenty"]);
					} 
					if (getScreenWidth() <= 768) {
						setImage(defaults["sevensixeight"]);
					} 
					if (getScreenWidth() <= 1024) {
						setImage(defaults["tentwentyfour"]);
					} 
					if (getScreenWidth() <= 1220) {
						setImage(defaults["twelvetwenty"]);
					} 
					if (getScreenWidth() <= 1440) {
						setImage(defaults["fourteenforty"]);
					} 
				}

			};

			var setImage = function(imagePath) {
				if(defaults.elemType === "img") {
					$this.attr('src', imagePath);
				} else {
					$this.css("background-image", "url(" + imagePath + ")");
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
				runInit: initalise,
				getElemType: getElemType
			};
		};

	var getResponsiveImages = (function() {
		var $responsiveImages = $('.responsive-image');
		if(responsiveImages){
			$responsiveImages.each(function(i, elem) {
				window.APPNAMESPACE.Components.Responsive[i] = new ResponsiveImages(elem, $(elem).data());
			});
		}
	}();


 })(window, document, jQuery);