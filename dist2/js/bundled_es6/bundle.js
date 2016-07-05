"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

	/***********************************************
 * Project: Webpack Language-Babel Sass Template
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2015 GonzalesDesign
 * Platform: ES2015, Webpack, Babel & Sass
 * Module: Index
 ***********************************************/

	(function () {
		/*IIFE:Immediately-Invoked Function Expression*/
		"use strict";

		/**-----------=====| DOM CACHING |=====-----------**/

		var mainContainer = $(".mainContainer");
		var landingPageContainer = $(".landingPageContainer");
		var menuNavClass = $(".menuNavClass");
		var menuNavClassId = $("#menuNavClassId");
		var landingPageDescriptionId = $("#landingPageDescriptionId");

		/**-----------=====| IMPORT | REQUIRE |=====-----------**/
		/** DESCRIPTIONS:
   ** FILES IMPORTED FROM OTHER JS FILES
   ** SEPERATE JS FILES FOR EASIER READABILITY AND MAINTENANCE
   **----------------------------------------------------------------**/
		var createElem = __webpack_require__(1);
		var createDiv = new createElem.CreateElementAny();

		var servicesList = __webpack_require__(2);

		var fLandingPageAjax = function fLandingPageAjax() {
			var promise = $.get("./js/json/landingPage.json");
			promise.then(function (data) {
				var jx = 0;
				var ji = 0;
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = data.LandingPageContent[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var introData = _step.value;

						createDiv.fCreateTag("div", "menuNavContainer", "menuNavContainerClass", jx, menuNavClass);
						var menuNavContainerId = document.getElementById("menuNavContainer" + "Id_" + jx);

						/**-----| Menu Navigation |-----**/
						var _iteratorNormalCompletion2 = true;
						var _didIteratorError2 = false;
						var _iteratorError2 = undefined;

						try {
							for (var _iterator2 = introData.mainMenuNavs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
								var menus = _step2.value;

								ji++;
								console.log("menus.menu: ", menus.menu);
								createDiv.fCreateTag("div", "menuNav", "menuNavClass", ji, menuNavContainerId);
								var menuNavId = document.getElementById("menuNav" + "Id_" + ji);
								menuNavId.innerHTML = menus.menu;
							}

							/**-----| Landing Page Description |-----**/
						} catch (err) {
							_didIteratorError2 = true;
							_iteratorError2 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion2 && _iterator2.return) {
									_iterator2.return();
								}
							} finally {
								if (_didIteratorError2) {
									throw _iteratorError2;
								}
							}
						}

						createDiv.fCreateTag("div", "landingPage", "landingPageClass", jx, landingPageDescriptionId);
						var landingPageId = document.getElementById("landingPage" + "Id_" + jx);
						//let x = $("#landingPage" + "Id_" + jx);
						var strng = introData.landingPageDescription;
						var subStrng = strng.substr(0, 700);
						landingPageId.innerHTML = subStrng;
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			});
		};

		fLandingPageAjax();

		// const twoKolumns = require('./twoColumns');
		// let oneThirdTest = new twoKolumns.ThreeColumnsClass();
		// oneThirdTest.fThreeColumns(gdContainerWidth);

		console.log("mainContainer: ", mainContainer);
		console.log("createElem: ", createElem);

		//let require = require(".require");
		/**----------=====| anim |=====----------**/
		//const TweenMax = require('gsap');
		// const anim = require('./animationFunctions');
		//
		// const animationFunctions = "animationFunctions";
		// console.log("animationFunctions: ", animationFunctions);

		var containerId = $("#containerId");

		containerId.css({
			//"width" : "auto",
			//"height" : "200px",
			//"border" : "1px solid Cyan"
		});
		//anim.fAnimateHeightWidth(containerId, "auto", 500, 1);

		/**----------=====| CreateElementAny Class |=====----------**/
		/** Description:
  ** Class template for creating basic "a" tag.
  ***********************/
		// class CreateElementAny {
		//     constructor() {}
		//
		//     /** Generic method for creating a tag element **/
		//     fCreateTag(tagType, className, title, counter, appendedTo) {
		//       let divName = document.createElement(tagType);
		//       divName.id = title + "Id_" + counter; //set id
		//       divName.className = className; //title + "Class";
		//       //divName.href = "#modalCarousel";
		//       //let divNameId     = $ ("#" + title + "Id_" + counter); //get id
		//       $(divName).appendTo(appendedTo);
		//       let tagId = $("#"+title + "Id_" + counter); //set id
		//       tagId.css({
		//           "width" : "400px",
		//           "height" : "auto",
		//           "border" : "1px solid Grey"
		//       })
		//     }
		// };
		// let container = $(".container");
		// let createElemAny = new CreateElementAny();
		// createElemAny.fCreateTag("div", "className", "title", 1, container)
		//
		//  let titleXId = $("#title" + "Id_" + 1); //set id
		//  createElemAny.fCreateTag("p", "paragClass", "parag", 1, titleXId);
		//  //let paragClass = $(".paragClass");
		//  //let x = $("#parag" + "Id_" + 1); //set id
		//  //let x = $("#paragId_1"); //set id
		//  //console.log("paragId: ", paragId);
		//  //var x = document.getElementById('paragId_1');
		//  let x = document.getElementById("parag" + "Id_" + 1);
		//  x.innerHTML = "<h2>Some test text goes here!</h2>";
		//console.log("Running webpack-dev-serverX");

		var fIntroAjax = function fIntroAjax() {
			var promise = $.get("./js/json/contentData.json");
			promise.then(function (data) {
				var jx = 0;
				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = data.GDSiteIntro[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var introData = _step3.value;

						var container = $(".container");
						//  let createElemAny = new CreateElementAny();
						//  createElemAny.fCreateTag("div", "className", "title", jx, mainContainer)

						//   let titleXId = $("#title" + "Id_" + jx); //set id
						//   createElemAny.fCreateTag("p", "paragClass", "parag", jx, titleXId);
						//let paragClass = $(".paragClass");
						//let x = $("#parag" + "Id_" + jx); //set id
						//let x = $("#paragId_jx"); //set id
						//console.log("paragId: ", paragId);
						//var x = document.getElementById('paragId_jx');
						//   let x = document.getElementById("parag" + "Id_" + jx);
						//   //console.log("x: ", x);
						//   let strng = introData.codingThisSite;
						//   let subStrng = strng.substr(0, 150);
						//   x.innerHTML = subStrng + " ...more";
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}
			});
		};
		/**----------===| INVOKE FUNCTION |===----------**/
		//fIntroAjax();

		/**----------===| Invoke fServicesListAjax function from servicesList.es6 |===----------**/
		servicesList.fServicesListAjax();
	})();

	/***/
},
/* 1 */
/***/function (module, exports) {

	/***********************************************
 * Project: Webpack Language-Babel Sass Template
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2015 GonzalesDesign
 * Platform: ES2015, Webpack, Babel & Sass
 * Module: CreateElementClass
 ***********************************************/

	(function () {
		/*IIFE:Immediately-Invoked Function Expression*/
		"use strict";

		/**----------=====| CreateElementAny Class |=====----------**/
		/** Description:
   ** Class template for creating basic "a" tag.
   *********************************************************/

		var CreateElementAny = function () {
			function CreateElementAny() {
				_classCallCheck(this, CreateElementAny);
			}

			/** Generic method for creating a tag element **/


			_createClass(CreateElementAny, [{
				key: "fCreateTag",
				value: function fCreateTag(tagType, title, className, counter, appendedTo) {
					var divName = document.createElement(tagType);
					divName.id = title + "Id_" + counter; //set id
					divName.className = className; //title + "Class";
					//divName.href = "#modalCarousel";
					var divNameId = $("#" + title + "Id_" + counter); //get id
					//console.log("divNameId: ",divNameId);
					$(divName).appendTo(appendedTo);
					//TEMP
					divNameId.css({
						"height": "100px",
						"border": "1px solid yellowGreen"
					});
				}
			}]);

			return CreateElementAny;
		}();

		;

		/**-----------=====| EXPORTS |=====-----------**/
		module.exports.CreateElementAny = CreateElementAny;
	})();

	/***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

	/***********************************************
 * Project: Webpack Language-Babel Sass Template
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2015 GonzalesDesign
 * Platform: ES2015, Webpack, Babel & Sass
 * Module: Services List
 ***********************************************/

	(function () {
		/*IIFE:Immediately-Invoked Function Expression*/
		"use strict";

		/**-----------=====| IMPORT | REQUIRE |=====-----------**/
		/** Description:
   ** Files requiring from other js files
   **----------------------------------------------------------------**/

		var createElem = __webpack_require__(1);
		var createDiv = new createElem.CreateElementAny();

		//let servicesContainer = $(".servicesContainer");
		//let servicesContainerId = $("#servicesContainerId");
		var servicesMainContainerId = $("#servicesMainContainerId");

		var fServicesListAjax = function fServicesListAjax() {
			var promise = $.get("./js/json/servicesList.json");
			promise.then(function (data) {
				var jx = 0;
				var ji = 0;
				var _iteratorNormalCompletion4 = true;
				var _didIteratorError4 = false;
				var _iteratorError4 = undefined;

				try {
					for (var _iterator4 = data.ServicesListContent[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
						var services = _step4.value;

						/*----- Services Title -----*/
						createDiv.fCreateTag("div", "servicesContainer", "servicesContainerClass", jx, servicesMainContainerId);
						//let servicesContainerId = $("#servicesContainer" + "Id_" + jx);
						var servicesContainerId = document.getElementById("servicesContainer" + "Id_" + jx);
						servicesContainerId.innerHTML = services.introTitle;
						console.log("services.introTitle: ", services.introTitle);

						/*----- Services List -----*/
						// createDiv.fCreateTag("div", "servicesListContainer", "servicesListContainerClass", jx, servicesContainerId);
						// //let servicesListContainerId = document.getElementById("servicesListContainer" + "Id_" + jx);
						// let servicesListContainerId = $("#servicesListContainer" + "Id_" + jx);
						// let servicesListContainerIdWidth = servicesListContainerId.width()
						// servicesListContainerId.css({
						//     "border" : "10px solid Grey",
						//     "width" : servicesListContainerIdWidth / 3,
						//     "text-align" : "left"
						// })

						//createDiv.fCreateTag("ul", "servicesListUL", "servicesListULClass", jx, servicesContainerId);
						//let servicesListContainerId = document.getElementById("servicesListContainer" + "Id_" + jx);
						//let servicesListContainerId = $("#servicesListUL" + "Id_" + jx);

						var ul = document.createElement('ul');
						ul.className = "servicesULClass";
						$(ul).appendTo(servicesMainContainerId); //servicesMainContainerId servicesContainerId
						var servicesULIdHeight = $("ul")[0].scrollHeight;

						//  createDiv.fCreateTag("UL", "servicesUL", "servicesULClass", jx, servicesMainContainerId);
						//  let servicesULId = $("#servicesUL" + "Id_" + jx);
						//  let servicesULIdHeight = servicesULId.height();
						//console.log("servicesULIdHeight: ",servicesULIdHeight);

						//  servicesULId.css({
						//      "height" :
						//  })

						var _iteratorNormalCompletion5 = true;
						var _didIteratorError5 = false;
						var _iteratorError5 = undefined;

						try {
							for (var _iterator5 = services.servicesList[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
								var servicesList = _step5.value;

								ji++;

								/**----- Using DIV -----**/
								// createDiv.fCreateTag("div", "servicesList", "servicesListClass", ji, servicesMainContainerId);
								// let servicesListId = document.getElementById("servicesListId_" + ji);
								// //let servicesListId = $("#servicesListId_" + ji);
								// servicesListId.innerHTML = servicesList.services;
								// // console.log("servicesListId: ",servicesListId);
								// // console.log("servicesList.services: ",servicesList.services);

								/**----- Using UL & LI -----**/
								var li = document.createElement('li');
								//$(li).appendTo(servicesULId);
								$(li).appendTo(ul);
								li.innerHTML = li.innerHTML + servicesList.services;
								/**----- Getting the LI height -----**/
								var servicesLIIdHeight = $("li")[0].scrollHeight;
								console.log("servicesLIIdHeight: ", servicesLIIdHeight);

								// let ulHeight = (servicesLIIdHeight * ji)/3;
								// console.log("ulHeight: ",ulHeight);

								// createDiv.fCreateTag("LI", "servicesLI", "servicesLIClass", ji, servicesULId);
								// let servicesLIId = $("#servicesUL" + "Id_" + ji);
								// servicesLIId.innerHTML=servicesLIId.innerHTML + servicesList.services;
								//
								// let servicesLIIdHeight = servicesLIId.height()
								// console.log("servicesLIIdHeight: ",servicesLIIdHeight);

								// servicesListId.css({
								//     "height" : "20px",
								//     "border" : "1px solid Red"
								// })
							}
						} catch (err) {
							_didIteratorError5 = true;
							_iteratorError5 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion5 && _iterator5.return) {
									_iterator5.return();
								}
							} finally {
								if (_didIteratorError5) {
									throw _iteratorError5;
								}
							}
						}
					}
				} catch (err) {
					_didIteratorError4 = true;
					_iteratorError4 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion4 && _iterator4.return) {
							_iterator4.return();
						}
					} finally {
						if (_didIteratorError4) {
							throw _iteratorError4;
						}
					}
				}
			});
		};

		/**-----------=====| EXPORTS |=====-----------**/
		module.exports.fServicesListAjax = fServicesListAjax;
	})();

	/***/
}
/******/]);