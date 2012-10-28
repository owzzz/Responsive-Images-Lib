(function(window, document, $, undefined){
	'use strict';

	window.APPNAMESPACE = window.APPNAMESPACE || {};
	window.APPNAMESPACE.Utils = window.APPNAMESPACE.Utils || {};

	var Utils = function() {

		var hasOwnProperty = function(obj, prop) {
			var proto = obj.__proto__ || obj.constructor.prototype;
			return (prop in obj) && (!(prop in proto) || proto[prop] !== obj[prop]);
		};

		var getIEVersion = function () {
			var rv = -1; // Return value assumes failure.

			if (navigator.appName == 'Microsoft Internet Explorer') {
			var ua = navigator.userAgent,
				re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
			if (re.exec(ua) !== null)
				rv = parseFloat( RegExp.$1 );
			}
			return rv;

		};	

		return {
			getIEVersion: getIEVersion,
			hasOwnProperty: hasOwnProperty
		}

	};

	window.APPNAMESPACE.Utils = new Utils();

 
 })(window, document, jQuery);