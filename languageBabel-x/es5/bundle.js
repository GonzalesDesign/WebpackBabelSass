"use strict";

/******/(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};

	/******/ // The require function
	/******/function __webpack_require__(moduleId) {

		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;

		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };

		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ // Flag the module as loaded
		/******/module.loaded = true;

		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}

	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;

	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;

	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "";

	/******/ // Load entry module and return exports
	/******/return __webpack_require__(0);
	/******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

	//let require = require(".require");
	/**----------=====| anim |=====----------**/
	//const TweenMax = require('gsap');
	var anim = __webpack_require__(1);

	var animationFunctions = "animationFunctions";
	console.log("animationFunctions: ", animationFunctions);

	var containerId = $("#containerId");

	containerId.css({
		"border": "1px solid red"
	});
	anim.fAnimateHeightWidth(containerId, "auto", 500, 1);

	console.log("gsap installed");

	/***/
},
/* 1 */
/***/function (module, exports) {

	/**----------===| Created by Odee on 5/18/16.|===----------**/

	(function () {
		//IIFE:Immediately-Invoked Function Expression. Scope Encapsulation

		"use strict";

		console.log("Filename: animationFunctions.js");
		/**-----------=====| TweenMax Reference Variables |=====-----------**/
		/** Description:
   ** Animation engine using GSAP TweenMax
   ********************************************************************/

		//let fTweenMax = function() {
		var tMx = TweenMax;
		var easeSine = Sine.easeOut;
		var power3 = Power3.easeOut;
		var power4 = Power4.easeOut;
		var back = Back.easeOut.config(1);
		var elastic = Elastic.easeOut;
		var circular = Circ.easeOut;
		var expo = Expo.easeOut;
		var sloMo = SlowMo.ease.config(0.7, 0.7, false);
		var animTym = 1;
		var animTymSlow = 1;
		var animTymFast = .25;
		//};

		/**-----------=====| fOpacityAnim Function |=====-----------**/
		/** Description:
   ** Animates element's opacity from 0% to 100%
   *************************************************************/
		var fOpacityAnim = function fOpacityAnim(elem) {
			elem.css({
				"opacity": 0
			});
			tMx.to(elem, animTym, {
				opacity: 1,
				ease: easeSine
			});
		};

		/**-----------=====| fXSlider Function |=====-----------**/
		/** Description:
   ** Animates element's horizontal positions
   ** Use the attribute "left" instead of the matrix "x" (translateX())
   ** as a key and the horizPos param as value.
   ** http://greensock.com/forums/topic/6963-tweenmax-tweening-css-x-vs-left/
   ****************************************************************/
		var fXSlider = function fXSlider(elem, horizPos) {
			//fOpacityAnim(elem);
			tMx.to(elem, animTym, {
				left: horizPos,
				ease: back
			});
			//console.log("elem, horizPos: ", elem, horizPos);
		};

		// /**-----------=====| fAnimateHeightWidth Function |=====-----------**/
		// /** Descriptions:
		//  ** Animates element's height and width
		//  **----------------------------------------------------------------**/
		// let fAnimateHeightWidth = function(elem, eHeight, eWidth, animTym) {
		//   //tMx.to (elem, animTym, {css: {height: eHeight, width: eWidth}, ease: power3});
		//   tMx.to(elem, animTym, {
		//     height: (eHeight + "px"),
		//     width: eWidth,
		//     ease: power3
		//   });
		// };
		/**-----------=====| fAnimateHeightWidth Function |=====-----------**/
		/** Descriptions:
   ** Animates element's height and width
   **----------------------------------------------------------------**/
		var fAnimateHeightWidth = function fAnimateHeightWidth(elem, eHeight, eWidth, animTym) {
			//tMx.to (elem, animTym, {css: {height: eHeight, width: eWidth}, ease: power3});
			tMx.to(elem, animTym, {
				height: eHeight,
				width: eWidth,
				ease: power3
			});
		};

		// let fImageHeightWidth = function(imgsArray, ht, wt) {
		//   /**----( Setting array member's heights and widths )----**/
		//   for (let i = 0; i < imgsArray.length; i++) {
		//     fAnimateHeightWidth(imgsArray[i], ht, wt); //rowImgRightColmnWidth);
		//     console.log("imgsArray[i]: ", imgsArray[i]);
		//   }
		// };

		var fFontSizer = function fFontSizer(elem, sizeFont) {
			tMx.to(elem, animTymSlow, {
				fontSize: sizeFont,
				ease: power3
			});
		};

		/**-----------=====| EXPORTS |=====-----------**/
		/** DESCRIPTIONS:
   ** ANIMATION MODULES
   ** Webpack: module.exports
   **----------------------------------------------------------------**/
		//module.exports.fTweenMax = fTweenMax;
		module.exports.fXSlider = fXSlider;
		module.exports.fAnimateHeightWidth = fAnimateHeightWidth;
		//module.exports.fImageHeightWidth = fImageHeightWidth;
		module.exports.fFontSizer = fFontSizer;
		//module.exports.animTym = animTym;
		/**----------------------------------------------------------------**/
		console.log("\n\t  Filename: animationFunctions.js\n\t  module.exports.fXSlider = fXSlider\n\t  animFunctTest\n\t  ");
		/**----------------------------------------------------------------**/
	})();

	/***/
}
/******/]);