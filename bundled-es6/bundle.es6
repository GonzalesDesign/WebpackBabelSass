/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
			console.log("test es6-es5 x1");
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	//let require = require(".require");
	/**----------=====| anim |=====----------**/
	//const TweenMax = require('gsap');
	  const anim = __webpack_require__(1);

	  const animationFunctions = "animationFunctions";
	  console.log("animationFunctions: ", animationFunctions);


	  let containerId = $("#containerId");

	  containerId.css({
	      "border" : "1px solid red"
	  })
	  anim.fAnimateHeightWidth(containerId, "auto", 500, 1);

	console.log("gsap installed");


/***/ },
/* 1 */
/***/ function(module, exports) {

	/**----------===| Created by Odee on 5/18/16.|===----------**/

	(function() { //IIFE:Immediately-Invoked Function Expression. Scope Encapsulation

	  "use strict";
	  console.log("Filename: animationFunctions.js");
	  /**-----------=====| TweenMax Reference Variables |=====-----------**/
	  /** Description:
	   ** Animation engine using GSAP TweenMax
	   ********************************************************************/
	  //let fTweenMax = function() {
	  let tMx = TweenMax;
	  let easeSine = Sine.easeOut;
	  let power3 = Power3.easeOut;
	  let power4 = Power4.easeOut;
	  let back = Back.easeOut.config(1);
	  let elastic = Elastic.easeOut;
	  let circular = Circ.easeOut;
	  let expo = Expo.easeOut;
	  let sloMo = SlowMo.ease.config(0.7, 0.7, false)
	  let animTym = 1;
	  let animTymSlow = 1;
	  let animTymFast = .25;
	  //};

	  /**-----------=====| fOpacityAnim Function |=====-----------**/
	  /** Description:
	   ** Animates element's opacity from 0% to 100%
	   *************************************************************/
	  let fOpacityAnim = function(elem) {
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
	  let fXSlider = function(elem, horizPos) {
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
	  let fAnimateHeightWidth = function(elem, eHeight, eWidth, animTym) {
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

	  let fFontSizer = function(elem, sizeFont) {
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
	  console.log(`
	  Filename: animationFunctions.js
	  module.exports.fXSlider = fXSlider
	  animFunctTest
	  `);
	  /**----------------------------------------------------------------**/

	}());


/***/ }
/******/ ]);
