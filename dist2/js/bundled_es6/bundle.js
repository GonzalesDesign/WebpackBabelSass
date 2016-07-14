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
  * Module: Index 071416
  ***********************************************/

	(function () {
		/*IIFE:Immediately-Invoked Function Expression*/
		"use strict";

		/**----------===| MODULE: LANDING PAGE |===----------**/

		var landingPage = __webpack_require__(1);
		landingPage.fLandingPageAjax();
		landingPage.fLandingPageResize();

		/**----------===| MODULE: IMAGE CAROUSEL |===----------**/
		var imageCarousel = __webpack_require__(4);
		imageCarousel.fCarouselResize();

		/**----------===| MODULE: SERVICES |===----------**/
		var servicesList = __webpack_require__(5);
		servicesList.fServicesListAjax();

		/**----------===| MODULE: RESPONSES |===----------**/
		var responsesSection = __webpack_require__(6);
		responsesSection.fResponsesAjax();

		/**----------===| MODULE: HEALTH CARE |===----------**/
		var halthCareSection = __webpack_require__(7);
		halthCareSection.fHealthCareAjax();

		/**----------===| MODULE: ABOUT || EXPERIENCE |===----------**/
		var aboutSection = __webpack_require__(8);
		aboutSection.fAboutAjax();

		/**----------===| FUNCTION: SCREEN RESIZE QUERIES |===----------**/
		var fOnWindowResize = function fOnWindowResize() {

			servicesList.fServicesResize();

			landingPage.fLandingPageResize();

			imageCarousel.fCarouselResize();
		};

		$(window).on('resize', fOnWindowResize);
	})();

	/***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

	/***********************************************
  * Project: Webpack Language-Babel Sass Template
  * Developer: rolandolloyd@gmail.com
  * Copyright © 2015 GonzalesDesign
  * Platform: ES2015, Webpack, Babel & Sass
  * Module: Landing Page
  ***********************************************/

	(function () {
		/*IIFE:Immediately-Invoked Function Expression*/

		/**----------===| CLASS: CREATE ELEMENTS |===----------**/
		var createElem = __webpack_require__(2);
		var createDiv = new createElem.CreateElementAny();

		/**----------===| MODULE: NEW IMAGE |===----------**/
		var createImage = __webpack_require__(3);
		var createNewImg = new createImage.CreateNewImage();

		/**----------===| MODULE: IMAGE CAROUSEL |===----------**/
		var carouselCreate = __webpack_require__(4);

		/**----------===| FUNCTION: ANCHOR LINK |===----------**/
		var fGoTo = function fGoTo(link) {
			location.href = "#" + link;
		};

		/**-----------=====| DOM CACHING |=====-----------**/
		var mainContainer = $(".mainContainer");
		var landingPageContainer = $(".landingPageContainer");
		var landingPageContainerId = $("#landingPageContainerId");
		var logoContainerClass = $(".logoContainerClass");
		var logoContainerId = $("#logoContainerId");
		var menuNavClass = $(".menuNavClass");
		var menuNavClassId = $("#menuNavClassId");
		var landingPageDescriptionId = $("#landingPageDescriptionId");

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

						/**-----| Logo |-----**/
						createDiv.fCreateTag("div", "logo", "logoClass", jx, logoContainerId);
						var logoId = $("#logo" + "Id_" + jx);
						/**-----| Company Logo Image |-----**/
						createNewImg.fCreateNewImage(logoId, introData.companyLogo, "80%", "White");
						/**-----| CONCIERGE HOME CARE NURSING |-----**/
						createDiv.fCreateTag("div", "logoSubTitle", "logoSubTitleClass", jx, logoContainerId);
						//let logoSubTitleId = $("#logoSubTitleId_"+jx);
						var logoSubTitleId = document.getElementById("logoSubTitle" + "Id_" + jx);
						logoSubTitleId.innerHTML = introData.introSubTitle;
						/**-----| ADDRESS: NY & DC |-----**/
						createDiv.fCreateTag("div", "logoAddress", "logoAddressClass", jx, logoContainerId);
						var logoAddressId = document.getElementById("logoAddress" + "Id_" + jx);
						logoAddressId.innerHTML = introData.logoAddress;
						/**-----| Menu Navigation |-----**/
						createDiv.fCreateTag("div", "menuNavContainer", "menuNavContainerClass", jx, menuNavClass);
						var menuNavContainerId = document.getElementById("menuNavContainer" + "Id_" + jx);
						var _iteratorNormalCompletion2 = true;
						var _didIteratorError2 = false;
						var _iteratorError2 = undefined;

						try {
							var _loop = function _loop() {
								var menus = _step2.value;

								ji++;
								//console.log("introData.menu: ", menus.menu);
								createDiv.fCreateTag("div", "menu", "menuClass", ji, menuNavContainerId);
								var menuId = document.getElementById("menu" + "Id_" + ji);
								//let menuId = $("#menu" + "Id_" + ji);
								//let menuId = $("#menuId_" + ji);
								var menuClass = $(".menuClass");
								menuId.innerHTML = menus.menu;

								/**-----| Menu anchor links |-----**/
								$(menuId).click(function () {
									fGoTo(menus.menu);
								});
							};

							for (var _iterator2 = introData.mainMenuNavs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
								_loop();
							}

							/**-----| Images Carousel |-----**/
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

						var createCarousel = new carouselCreate.fBuildCarousel();

						/**-----| Landing Page Description |-----**/
						createDiv.fCreateTag("div", "landingPage", "landingPageClass", jx, landingPageDescriptionId);
						var landingPageId = document.getElementById("landingPage" + "Id_" + jx);
						//let x = $("#landingPage" + "Id_" + jx);
						var strng = introData.landingPageDescription;
						var subStrng = strng.substr(0, 700);
						landingPageId.innerHTML = subStrng;
					}

					/**-----| Screen resize querie on load |-----**/
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

				fLandingPageResize();
			});
		};

		var screenSmall = 750;
		var screenMedium = 970;
		var largeScreen = 1170;

		var fLandingPageResize = function fLandingPageResize() {
			var browserWidth = window.innerWidth;
			//console.log("browserWidth: ", browserWidth);
			var menuClass = $(".menuClass");

			/*-----[ Largest Screen ]-----*/
			if (browserWidth > 1170) {
				console.log(">largeScreen: ", largeScreen);
				menuClass.css({
					"font-size": "1.8em",
					"padding-left": "34px",
					"padding-right": "34px"
				});
				/*-----[ .container is between 1170 and 970 width ]-----*/
			} else if (browserWidth <= 1170 && browserWidth > 970) {
				console.log("> screenMedium: ", screenMedium);
				menuClass.css({
					"font-size": "1.8em",
					"padding-left": "12px",
					"padding-right": "12px"
				});
				/*-----[ .container is between 970 and 750 width ]-----*/
			} else if (browserWidth <= 970 && browserWidth > 750) {
				console.log("> screenMedium: ", screenMedium);
				menuClass.css({
					"font-size": "1.4em",
					"padding-left": "10px",
					"padding-right": "10px"
				});
				/*-----[ .container is between 750 and 550 width ]-----*/
			} else if (browserWidth <= 750 && browserWidth > 550) {
				console.log("> screenMedium: ", screenMedium);
				menuClass.css({
					"font-size": "1.3em",
					"padding-left": "10px",
					"padding-right": "10px"
				});
				/*-----[ .container is less than 550 width ]-----*/
			} else {
				console.log("screenSmall: ", screenSmall);
				menuClass.css({
					"font-size": "1.2em",
					"padding-left": "2px",
					"padding-right": "2px"
				});
			}
		};

		/**-----------=====| EXPORTS |=====-----------**/
		module.exports.fLandingPageAjax = fLandingPageAjax;
		module.exports.fLandingPageResize = fLandingPageResize;
	})();

	/***/
},
/* 2 */
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
/* 3 */
/***/function (module, exports) {

	/***********************************************
  * Project: Webpack Language-Babel Sass Template
  * Developer: rolandolloyd@gmail.com
  * Copyright © 2015 GonzalesDesign
  * Platform: ES2015, Webpack, Babel & Sass
  * Module: Responses from Patients & Clients
  ***********************************************/

	(function () {
		/*IIFE:Immediately-Invoked Function Expression*/

		/**-----| Create div to hold the background image |-----**/
		// createDiv.fCreateTag("div", "responseBGImgContainer", "responseBGImgContainerClass", jx, responsesContainerId);
		// //let responseBGImgContainerId = document.getElementById("responseBGImgContainer" + "Id_" + jx);
		// let responseBGImgContainerId = $("#responseBGImgContainer" + "Id_" + jx);
		// console.log("responseBGImgContainerId: ",responseBGImgContainerId);
		// //let responseBGImgContainerClass = $(".responseBGImgContainerClass");
		// let responseBGImgContainerClass = document.getElementsByClassName("responseBGImgContainerClass");
		// console.log("responseBGImgContainerClass: ", responseBGImgContainerClass);

		var CreateNewImage = function () {
			function CreateNewImage() {
				_classCallCheck(this, CreateNewImage);
			}
			/**----------===| NEW IMAGE CREATION |===----------**/


			_createClass(CreateNewImage, [{
				key: "fCreateNewImage",
				value: function fCreateNewImage(divNameId, jsonImage, bgImgSize, bgColor) {
					var myIntroImage = new Image();
					var imagesPath = "./images/";
					myIntroImage.src = imagesPath + jsonImage; //responses.responsesImages[2].image;
					//console.log("divNameId: ", divNameId);
					//console.log("myIntroImage.src: ", myIntroImage.src);
					divNameId.css({
						// "height": imgHeight,
						// "width": imgWidth,
						"background": "url(" + myIntroImage.src + ")  center center no-repeat",
						"background-color": bgColor,
						"background-size": bgImgSize, //"cover",
						"position": "relative", //relative absolute
						"float": "left",
						"opacity": "1"
					});
				}
			}]);

			return CreateNewImage;
		}();

		/**-----------=====| EXPORTS |=====-----------**/


		module.exports.CreateNewImage = CreateNewImage;
	})();

	/***/
},
/* 4 */
/***/function (module, exports) {

	/***********************************************
  * Project: Bootstrap ES6 Carousel Template
  * Developer: rolandolloyd@gmail.com
  * Copyright © 2015 GonzalesDesign
  * Platform: ES2015, Webpack, Babel & Sass
  * Module: Create Carousel : Bootstrap
  ***********************************************/

	(function () {
		/*IIFE:Immediately-Invoked Function Expression*/

		/**----------=====| CreateCarousel Class |=====----------**/
		/** Description:
   ** Class template for creating Bootstrap carousel.
   *********************************************************/

		var CreateCarousel = function () {
			function CreateCarousel() {
				_classCallCheck(this, CreateCarousel);

				/**-----| Clears the content within the div class="carousel-inner"... |-----**/
				$('.carousel-inner').empty();

				//let itemId = "bikerId";
			}

			/** Generic method for creating a tag element **/


			_createClass(CreateCarousel, [{
				key: "fCreateCarousel",
				value: function fCreateCarousel(itemId, imahe, titolo, deskription, counter, intervalTimer) {
					//fCreateCarousel(images.imgName, images.imgTitle, images.imgDescription, i, appendedTo)

					/**-----| Create new LI(s) for the Indicators |-----**/
					var listItem = document.createElement('li');
					listItem.className = "";
					listItem.id = "listItemId";
					listItem.setAttribute("data-target", "#modalCarousel");
					listItem.setAttribute("data-slide-to", counter);
					$(listItem).appendTo(".carousel-indicators");

					/**-----| Create new image(s) |-----**/
					var myImage = new Image();
					myImage.src = "images/" + imahe; //images.imgName;
					//console.log("myImage.src: ", myImage.src);
					myImage.className = "imgClass";

					/**-----| Create a new div elements to hold each images with class name and id |-----**/
					var itemDiv = document.createElement('div');
					itemDiv.id = itemId + counter; //Assign a unique ID for each div
					//let itemId = itemId + counter;
					itemDiv.className = "item"; //Assign a Class name for each div
					itemDiv.title = titolo; //images.imgTitle;
					myImage.style.width = "100%";
					myImage.style.height = "auto";
					//item = $(".item"); //This work but the top position doesn't!

					$(itemDiv).appendTo("#carouslInnerId"); //Assign itemDiv inside carouslInnerId div
					//carouslInnerId.appendChild (itemDiv); //same as above. appendTo is faster
					itemDiv.appendChild(myImage); //Populate itemDiv div with images but only shows the active div
					/**-----| Title Inside Carousel Body |-----**/
					var carouselTitleBox = document.createElement('div');
					itemDiv.appendChild(carouselTitleBox);
					/*modalHeader.title       = aThumbTitleText[counter];
      modalHeader.appendChild (carouselTitleBox);*/
					carouselTitleBox.id = "carouselTitleBoxId" + counter;
					carouselTitleBox.className = "carouselTitleBoxClass";
					carouselTitleBox.innerHTML = titolo; //images.imgTitle;

					/**-----| Div to hold the Title and Description |-----**/
					var titleDescriptionBox = document.createElement('div');
					titleDescriptionBox.className = "titleDescriptionBoxClass";
					titleDescriptionBox.id = "titleDescriptionBoxId" + counter;

					$(titleDescriptionBox).appendTo(itemDiv);

					$(carouselTitleBox).appendTo(titleDescriptionBox);

					/**-----| Description Inside Carousel Body |-----**/
					var carouselDescriptionBox = document.createElement('div');
					//aCarouselDescriptionBox[aCarouselDescriptionBox.length] = carouselDescriptionBox; //push
					carouselDescriptionBox.id = "carouselDescriptionBoxId" + counter;
					//aCarouselDescriptionBoxId[aCarouselDescriptionBoxId.length] = aCarouselDescriptionBoxId.id; //push
					carouselDescriptionBox.className = "carouselDescriptionBoxClass";
					carouselDescriptionBox.innerHTML = deskription; //images.imgDescription;
					//$(carouselDescriptionBox).appendTo(itemDiv);
					$(carouselDescriptionBox).appendTo(titleDescriptionBox);

					//itemDiv.appendChild(carouselDescriptionBox);

					/**-----| Activate the 'active' Class for the selected Id |-----**/
					//let intervalTimer = 6000; //4000; //false;
					if (itemDiv.id === itemId + 0) {
						//console.log("itemDiv.id: ", itemDiv.id);
						$(".item").addClass('active');
						$(listItem).addClass('active');
						/**-----| Interval timer |-----**/
						$('#modalCarousel').carousel({ interval: intervalTimer });
					}
					fCarouselResize();
				}

				//fCarouselResize();

			}]);

			return CreateCarousel;
		}();

		;

		var createKarousel = new CreateCarousel();
		// createKarousel.fCreateCarousel(images.imgName, images.imgTitle, images.imgDescription, i)

		function fBuildCarousel() {
			/**-----| Clears the content within the div class="carousel-inner"... |-----**/
			//$('.carousel-inner').empty();

			/**-----| JSON DATA |-----*/
			var fContentDataAjax = function fContentDataAjax() {
				var promise = $.get("./js/json/carouselImages.json");
				promise.then(function (data) {
					var jx = 0;
					var ji = 0;
					//let itemId = "bikerId"
					var _iteratorNormalCompletion3 = true;
					var _didIteratorError3 = false;
					var _iteratorError3 = undefined;

					try {
						for (var _iterator3 = data.ContentDataMain[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
							var content = _step3.value;

							/**-----| Populate carousel container |-----**/
							var _iteratorNormalCompletion4 = true;
							var _didIteratorError4 = false;
							var _iteratorError4 = undefined;

							try {
								for (var _iterator4 = content.images[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
									var images = _step4.value;

									//ji++;
									createKarousel.fCreateCarousel("imgCarouselId", images.imgName, images.imgTitle, images.imgDescription, ji, content.carouselIntervalTimer * 1000);
									ji++;
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

			fContentDataAjax();
		};

		//fBuildCarousel();

		var fCarouselResize = function fCarouselResize() {
			var browserWidth = window.innerWidth;
			//console.log("browserWidth: ", browserWidth);
			var carouselTitleBoxClass = $(".carouselTitleBoxClass");
			var titleDescriptionBoxClass = $(".titleDescriptionBoxClass");

			/*-----[ Largest Screen ]-----*/
			if (browserWidth > 1170) {
				carouselTitleBoxClass.css({ "font-size": "3em" });
				titleDescriptionBoxClass.css({ "top": "65%", "padding-top": "30px", "padding-bottom": "40px" });
				/*-----[ .container is between 1170 and 970 width ]-----*/
			} else if (browserWidth <= 1170 && browserWidth > 970) {
				carouselTitleBoxClass.css({ "font-size": "3em" });
				titleDescriptionBoxClass.css({ "top": "65%", "padding-top": "30px", "padding-bottom": "40px" });
				/*-----[ .container is between 970 and 750 width ]-----*/
			} else if (browserWidth <= 970 && browserWidth > 750) {
				carouselTitleBoxClass.css({ "font-size": "3em" });
				titleDescriptionBoxClass.css({ "top": "65%", "padding-top": "20px", "padding-bottom": "20px" });
				/*-----[ .container is between 750 and 550 width ]-----*/
			} else if (browserWidth <= 750 && browserWidth > 550) {
				carouselTitleBoxClass.css({ "font-size": "2em" });
				titleDescriptionBoxClass.css({ "top": "65%", "padding-top": "20px", "padding-bottom": "20px" });
				/*-----[ .container is less than 550 width ]-----*/
			} else {
				carouselTitleBoxClass.css({ "font-size": "2em" });
				titleDescriptionBoxClass.css({ "top": "50%" });
			}
		};
		/**-----------=====| EXPORTS |=====-----------**/
		module.exports.fBuildCarousel = fBuildCarousel;
		module.exports.fCarouselResize = fCarouselResize;
	})();

	/***/
},
/* 5 */
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

		var createElem = __webpack_require__(2);
		var createDiv = new createElem.CreateElementAny();
		/**-----------=====| REQUIRE : NEW IMAGE |=====-----------**/
		var createIconImage = __webpack_require__(3);
		var createNewIconImg = new createIconImage.CreateNewImage();

		/**-----------=====| DOM CACHING |=====-----------**/
		var mainContainer = $(".mainContainer");
		//let servicesContainer = $(".servicesContainer");
		//let servicesContainerId = $("#servicesContainerId");
		var servicesMainContainerId = $("#servicesMainContainerId");
		var ulContainerId = $("#ulContainerId");
		//let li;
		var serviceLi = void 0;

		var fServicesListAjax = function fServicesListAjax() {
			var promise = $.get("./js/json/servicesList.json");
			promise.then(function (data) {
				var jx = 0;
				var ji = 0;
				var jj = 0;
				var _iteratorNormalCompletion5 = true;
				var _didIteratorError5 = false;
				var _iteratorError5 = undefined;

				try {
					for (var _iterator5 = data.ServicesListContent[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
						var services = _step5.value;

						/*----- Services Title -----*/
						createDiv.fCreateTag("div", "servicesContainer", "servicesContainerClass", jx, ulContainerId);
						//let servicesContainerId = $("#servicesContainer" + "Id_" + jx);
						var servicesContainerId = document.getElementById("servicesContainer" + "Id_" + jx);
						servicesContainerId.innerHTML = services.introTitle;
						//console.log("services.introTitle: ", services.introTitle);
						servicesContainerId.setAttribute("name", "#" + services.introTitle);

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
						$(ul).appendTo(ulContainerId); //ulContainerId servicesContainerId
						var servicesULIdHeight = $("ul")[0].scrollHeight;

						//  createDiv.fCreateTag("UL", "servicesUL", "servicesULClass", jx, ulContainerId);
						//  let servicesULId = $("#servicesUL" + "Id_" + jx);
						//  let servicesULIdHeight = servicesULId.height();
						//console.log("servicesULIdHeight: ",servicesULIdHeight);

						//  servicesULId.css({
						//      "height" :
						//  })

						/*----- Services List Iteration -----*/
						var _iteratorNormalCompletion6 = true;
						var _didIteratorError6 = false;
						var _iteratorError6 = undefined;

						try {
							for (var _iterator6 = services.servicesList[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
								var servicesList = _step6.value;

								ji++;
								/**----- Using DIV -----**/
								// createDiv.fCreateTag("div", "servicesList", "servicesListClass", ji, ulContainerId);
								// let servicesListId = document.getElementById("servicesListId_" + ji);
								// //let servicesListId = $("#servicesListId_" + ji);
								// servicesListId.innerHTML = servicesList.services;
								// // console.log("servicesListId: ",servicesListId);
								// // console.log("servicesList.services: ",servicesList.services);

								/**----- Using UL & LI -----**/
								serviceLi = document.createElement('li');
								//$(li).appendTo(servicesULId);
								serviceLi.className = "serviceLiClass";
								//console.log("serviceLi: ", serviceLi);
								$(serviceLi).appendTo(ul);
								serviceLi.innerHTML = serviceLi.innerHTML + servicesList.services;
								/**----- Getting the LI height -----**/
								var servicesLIIdHeight = $(serviceLi)[0].scrollHeight;
								//console.log("servicesLIIdHeight: ",servicesLIIdHeight);

								// serviceLi.css({
								//     "width" : "50%"
								// })
								//serviceLi.style.width = "30%";
								//fIlScreenResize();

								// let ulHeight = (servicesLIIdHeight * ji)/3;
								// console.log("ulHeight: ",ulHeight);
								//
								// createDiv.fCreateTag("LI", "servicesLI", "servicesLIClass", ji, servicesULId);
								// let servicesLIId = $("#servicesUL" + "Id_" + ji);
								// servicesLIId.innerHTML=servicesLIId.innerHTML + servicesList.services;
								//
								// let servicesLIIdHeight = servicesLIId.height()
								// console.log("servicesLIIdHeight: ",servicesLIIdHeight);
								//
								// servicesListId.css({
								//     "height" : "20px",
								//     "border" : "1px solid Red"
								// })
							}

							/*----- Icon Links Main Container -----*/
						} catch (err) {
							_didIteratorError6 = true;
							_iteratorError6 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion6 && _iterator6.return) {
									_iterator6.return();
								}
							} finally {
								if (_didIteratorError6) {
									throw _iteratorError6;
								}
							}
						}

						createDiv.fCreateTag("div", "iconMainContainer", "iconMainContainerClass", jx, servicesMainContainerId);
						var iconMainContainerId = $("#iconMainContainerId_" + jx);
						/*----- Icon Links 3 Columns Containers -----*/
						createDiv.fCreateTag("div", "icon3ColumnsContainer", "icon3ColumnsContainerClass", jx, iconMainContainerId);
						var icon3ColumnsContainerId = $("#icon3ColumnsContainerId_" + jx);
						/*----- Icon On Each Container -----*/
						var _iteratorNormalCompletion7 = true;
						var _didIteratorError7 = false;
						var _iteratorError7 = undefined;

						try {
							for (var _iterator7 = services.servicesImages[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
								var iconImages = _step7.value;

								jj++;
								createDiv.fCreateTag("div", "icon", "iconClass", jj, icon3ColumnsContainerId);
								var iconId = $("#iconId_" + jj);
								//let iconId = document.getElementById("iconId_" + jj);
								var iconClass = $(".iconClass");
								//console.log("iconId: ", iconId);
								/*----- Icon CSS Overide -----*/
								iconId.css({
									//"height": "200px",
									"float": "none"
								});

								createDiv.fCreateTag("div", "iconImage", "iconImageClass", jj, iconId);
								var iconImageId = $("#iconImageId_" + jj);

								createNewIconImg.fCreateNewImage(iconImageId, iconImages.image, "100%", "Grey");
								//console.log("iconImages.image: ", iconImages.image);
								/*----- Icon CSS Overide -----*/
								// iconImageId.css({
								// 	//"height": "200px",
								// 	//"float": "left",
								// 	//"height": "50%",
								// 	//"width": "50%",
								// 	//"border": "0px solid yellowGreen"
								// })

								/*----- Image Title -----*/
								createDiv.fCreateTag("div", "iconTitle", "iconTitleClass", jj, iconId);
								//let iconTitleId = $("#iconTitleId_" + jj);
								var iconTitleId = document.getElementById("iconTitleId_" + jj);

								//console.log("iconTitleId: ", iconTitleId);
								//console.log("iconImages.imgTitle: ", iconImages.imgTitle);
								/*----- Icon CSS Overide -----*/
								//let iconTitleClass = $(".iconTitleClass");
								// iconTitleClass.css({
								// 	//"height": "200px",
								// 	"float": "left",
								// 	//"height": "25%",
								// 	"width": "55%"
								// })
								iconTitleId.innerHTML = iconImages.imgTitle;

								/*----- Trigger scren queries on load -----*/
								fServicesResize();
							}
						} catch (err) {
							_didIteratorError7 = true;
							_iteratorError7 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion7 && _iterator7.return) {
									_iterator7.return();
								}
							} finally {
								if (_didIteratorError7) {
									throw _iteratorError7;
								}
							}
						}
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
			});
		};

		// let fIlScreenResize = () => {
		// 	let mainContainerWidth = mainContainer.width();
		// 	//console.log("mainContainerWidth: ", mainContainerWidth);
		// 	//let li = $("li")
		// 	let serviceLiClass = $(".serviceLiClass");
		// 	//let ulContainerClass = $(".ulContainerClass");
		// 	if (mainContainerWidth > 1000) {
		// 		serviceLiClass.css({"width": "25%"});
		// 		//ulContainerClass.css({"height": "280px"})
		// 	} else if (mainContainerWidth <= 720 && mainContainerWidth > 450) {
		// 		serviceLiClass.css({"width": "50%"})
		// 		//ulContainerClass.css({"height": "400px"})
		// 	} else if (mainContainerWidth <= 450) {
		// 		serviceLiClass.css({"width": "80%"})
		// 		//ulContainerClass.css({"height": "640px"})
		// 	} else {
		// 		serviceLiClass.css({"width": "30%"})
		// 		//ulContainerClass.css({"height": "340px"})
		// 	}
		// }

		/**----------=====| fRoundToTwo Function |=====----------**/
		/** Description: Rounds the decimals to two.
     **-------------------------------------------------------**/
		var fRoundToTwo = function fRoundToTwo(num) {
			return +(Math.round(num + "e+2") + "e-2");
		};

		/**----------=====| fServicesResize Function |=====----------**/
		/** Description: Screen queries for this module.
     **-----------------------------------------------------------**/
		// let browserWidth = window.innerWidth;
		// let halfBrowserWidth = browserWidth / 2;
		// let thirdBrowserWidth = fRoundToTwo(browserWidth / 3);
		// let quarterBrowserWidth = browserWidth / 4;

		// let tMx = TweenMax;
		// let easeSine = Sine.easeOut;
		// let animTym = 1;
		// let fAnimIconTitle = function(elem, sizeFont, eTop, eFloat, alignText, eWidth) {
		// 	//tMx.to (elem, animTym, {css: {height: eHeight, width: eWidth}, ease: power3});
		// 	tMx.to(elem, animTym, {
		// 		fontSize: sizeFont,
		// 		top: eTop,
		// 		float: eFloat,
		// 		textAlign: alignText,
		// 		width: eWidth,
		// 		ease: easeSine
		// 	});
		// };

		var fServicesResize = function fServicesResize() {
			var browserWidth = window.innerWidth;
			var mainContainerWidth = mainContainer.width();
			var halfBrowserWidth = browserWidth / 2;
			var thirdBrowserWidth = fRoundToTwo(mainContainerWidth / 3) + "px";
			var quarterBrowserWidth = browserWidth / 4;
			// console.log("browserWidth: ", browserWidth);
			// console.log("thirdBrowserWidth: ", thirdBrowserWidth);
			// console.log("quarterBrowserWidth: ", quarterBrowserWidth);

			var iconMainContainerClass = $(".iconMainContainerClass");
			var icon3ColumnsContainerClass = $(".icon3ColumnsContainerClass");
			var iconClass = $(".iconClass");
			var iconImageClass = $(".iconImageClass");
			var iconTitleClass = $(".iconTitleClass");
			var serviceLiClass = $(".serviceLiClass");

			/*-----[ Largest Screen ]-----*/
			if (browserWidth > 1170) {
				console.log("1170: ");
				iconClass.css({ "width": "25%" });
				iconImageClass.css({ "float": "left" });
				iconTitleClass.css({ "font-size": "2em", "top": "30px", "float": "left", "text-align": "left", "width": "55%" });
				//fAnimIconTitle(iconTitleClass, "2em", "30px", "left", "left", "55%");
				serviceLiClass.css({ "width": thirdBrowserWidth });
				//titleDescriptionBoxClass.css({"top": "65%", "padding-top": "30px", "padding-bottom": "40px"})

				/*-----[ .container is between 1170 and 970 width ]-----*/
			} else if (browserWidth <= 1170 && browserWidth > 970) {
				console.log("<1170 >970: ");
				iconClass.css({ "width": "25%" });
				iconImageClass.css({ "float": "none" });
				iconTitleClass.css({ "font-size": "2em", "top": "0px", "float": "none", "text-align": "center", "width": "100%" });
				serviceLiClass.css({ "width": "50%" });
				//titleDescriptionBoxClass.css({"top": "65%", "padding-top": "30px", "padding-bottom": "40px"})

				/*-----[ .container is between 970 and 750 width ]-----*/
			} else if (browserWidth <= 970 && browserWidth > 750) {
				console.log("<970 >750: ");
				iconClass.css({ "width": "32%" });
				//console.log("iconImageClass: ", iconImageClass);
				iconImageClass.css({ "float": "none", "width": "120px" });
				iconTitleClass.css({ "font-size": "2em", "top": "0px", "float": "none", "text-align": "center", "width": "100%" });
				serviceLiClass.css({ "width": "50%" });
				//titleDescriptionBoxClass.css({"top": "65%", "padding-top": "20px", "padding-bottom": "20px"})

				/*-----[ .container is between 750 and 550 width ]-----*/
			} else if (browserWidth <= 750 && browserWidth > 550) {
				console.log("<750 >550: ");
				iconClass.css({ "width": "32%" });
				iconImageClass.css({ "float": "none" });
				iconTitleClass.css({ "font-size": "1.6em", "top": "0px", "float": "none", "text-align": "center", "width": "100%" });
				serviceLiClass.css({ "width": "50%" });
				//titleDescriptionBoxClass.css({"top": "65%", "padding-top": "20px", "padding-bottom": "20px"})
				/*-----[ .container is between 550 and 500 width ]-----*/
			} else if (browserWidth <= 550 && browserWidth > 500) {
				iconClass.css({ "width": "60%" });
				iconImageClass.css({ "float": "none" });
				iconTitleClass.css({ "font-size": "2em", "top": "0px", "float": "none", "text-align": "center", "width": "100%" });
				serviceLiClass.css({ "width": "80%" });
				//iconImageClass.css({"float": "none"});

				/*-----[ .container is less than 550 width ]-----*/
			} else {
				console.log("else: ");
				iconClass.css({ "width": "60%" });
				iconImageClass.css({ "float": "none" });
				iconTitleClass.css({ "font-size": "2em", "top": "0px", "float": "none", "text-align": "center", "width": "100%" });
				//iconTitleClass.css({"font-size": "1.3em", "top": "0px", "float": "none", "text-align": "center", "width": "100%"});
				serviceLiClass.css({ "width": "80%" });
				//titleDescriptionBoxClass.css({"top": "50%"})
			}
		};

		//fServicesListAjax();
		//fServicesResize();

		// let fServicesModuleInvoke = () => {
		// 	//fIlScreenResize();
		// 	fServicesListAjax();
		// 	fServicesResize();
		// }

		// let browserWidth = window.innerWidth;
		// let halfBrowserWidth = browserWidth / 2;
		// let thirdBrowserWidth = fRoundToTwo(browserWidth / 3);
		// let quarterBrowserWidth = browserWidth / 4;
		// fServicesResize();

		/**-----------=====| EXPORTS |=====-----------**/
		module.exports.fServicesListAjax = fServicesListAjax;
		module.exports.fServicesResize = fServicesResize;
	})();

	/***/
},
/* 6 */
/***/function (module, exports, __webpack_require__) {

	/***********************************************
  * Project: Webpack Language-Babel Sass Template
  * Developer: rolandolloyd@gmail.com
  * Copyright © 2015 GonzalesDesign
  * Platform: ES2015, Webpack, Babel & Sass
  * Module: Responses from Patients & Clients
  ***********************************************/

	(function () {
		/*IIFE:Immediately-Invoked Function Expression*/

		/**-----------=====| IMPORT | REQUIRE |=====-----------**/
		/** Description:
   ** Files requiring from other js files
   **----------------------------------------------------------------**/
		var createElem = __webpack_require__(2);
		var createDiv = new createElem.CreateElementAny();

		//let servicesContainer = $(".servicesContainer");
		//let servicesContainerId = $("#servicesContainerId");
		//let servicesMainContainerId = $("#servicesMainContainerId");

		/**-----------=====| DOM CACHING |=====-----------**/
		var mainContainer = $(".mainContainer");
		var responsesMainContainerClass = $(".responsesMainContainerClass");
		var responsesMainContainerId = $("#responsesMainContainerId");
		var responsesContainerClass = $(".responsesContainerClass");
		var responsesContainerId = $("#responsesContainerId");

		var fResponsesAjax = function fResponsesAjax() {
			var promise = $.get("./js/json/responses.json");
			promise.then(function (data) {
				var jx = 0;
				var ji = 0;
				var _iteratorNormalCompletion8 = true;
				var _didIteratorError8 = false;
				var _iteratorError8 = undefined;

				try {
					for (var _iterator8 = data.ResponsesListContent[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
						var responses = _step8.value;

						/**-----| Create div to hold the title |-----**/
						createDiv.fCreateTag("div", "responseTitleContainer", "responseTitleContainerClass", jx, responsesContainerId);
						var responseTitleContainerId = document.getElementById("responseTitleContainer" + "Id_" + jx);
						responseTitleContainerId.innerHTML = responses.introTitle;
						//console.log("responseTitleContainerId: ", responseTitleContainerId);
						//console.log("responses.introTitle: ", responses.introTitle);

						/**-----| Create div to hold the background image |-----**/
						//  createDiv.fCreateTag("div", "responseBGImgContainer", "responseBGImgContainerClass", jx, responsesContainerId);
						//  //let responseBGImgContainerId = document.getElementById("responseBGImgContainer" + "Id_" + jx);
						//  let responseBGImgContainerId = $("#responseBGImgContainer" + "Id_" + jx);
						//  console.log("responseBGImgContainerId: ",responseBGImgContainerId);
						//  //let responseBGImgContainerClass = $(".responseBGImgContainerClass");
						//  let responseBGImgContainerClass = document.getElementsByClassName("responseBGImgContainerClass");
						//  console.log("responseBGImgContainerClass: ", responseBGImgContainerClass);
						//  /**----------===| NEW IMAGE CREATION |===----------**/
						// let myIntroImage = new Image();
						// let imagesPath = "./images/";
						// myIntroImage.src = imagesPath + responses.responsesImages[2].image;
						// console.log("myIntroImage.src: ",myIntroImage.src);
						// responseBGImgContainerId.css({
						//     "height" : "300px",
						//     "background": "url(" + myIntroImage.src + ")  center center fixed no-repeat",
						//     //"background-size": "cover",
						//     "opacity": "1"
						// })

						/**----------===| RESPONSES |===----------**/
						var _iteratorNormalCompletion9 = true;
						var _didIteratorError9 = false;
						var _iteratorError9 = undefined;

						try {
							for (var _iterator9 = responses.responses[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
								var response = _step9.value;

								ji++;
								/**-----| Create div to hold the background image |-----**/
								createDiv.fCreateTag("div", "testimonialsContainer", "testimonialsContainerClass", ji, responsesContainerId);
								var testimonialsContainerId = document.getElementById("testimonialsContainer" + "Id_" + ji);
								testimonialsContainerId.innerHTML = response.response;
							}
						} catch (err) {
							_didIteratorError9 = true;
							_iteratorError9 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion9 && _iterator9.return) {
									_iterator9.return();
								}
							} finally {
								if (_didIteratorError9) {
									throw _iteratorError9;
								}
							}
						}
					}
				} catch (err) {
					_didIteratorError8 = true;
					_iteratorError8 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion8 && _iterator8.return) {
							_iterator8.return();
						}
					} finally {
						if (_didIteratorError8) {
							throw _iteratorError8;
						}
					}
				}
			});
		};

		var fLandingPageAnim = function fLandingPageAnim() {}
		//console.log("mainContainerWidthX: ", mainContainer.width());


		// export default function fLandingPageAnim(){
		//     console.log("mainContainerWidthX: ", mainContainer.width());
		// }

		//  export default function cube() {
		//   return mainContainer.width(); //x * x * x;
		// }

		/**-----------=====| EXPORTS |=====-----------**/
		;module.exports.fResponsesAjax = fResponsesAjax;
		//module.exports.fLandingPageAnim = fLandingPageAnim;
	})();

	/***/
},
/* 7 */
/***/function (module, exports, __webpack_require__) {

	/***********************************************
  * Project: Webpack Language-Babel Sass Template
  * Developer: rolandolloyd@gmail.com
  * Copyright © 2015 GonzalesDesign
  * Platform: ES2015, Webpack, Babel & Sass
  * Module: Health Care In The News
  ***********************************************/

	(function () {
		/*IIFE:Immediately-Invoked Function Expression*/

		/**-----------=====| IMPORT | REQUIRE |=====-----------**/
		/** Description:
   ** Files requiring from other js files
   **----------------------------------------------------------------**/
		var createElem = __webpack_require__(2);
		var createDiv = new createElem.CreateElementAny();

		//let servicesContainer = $(".servicesContainer");
		//let servicesContainerId = $("#servicesContainerId");
		//let servicesMainContainerId = $("#servicesMainContainerId");

		/**-----------=====| DOM CACHING |=====-----------**/
		var mainContainer = $(".mainContainer");
		var healthMainContainerClass = $(".healthMainContainerClass");
		var healthMainContainerId = $("#healthMainContainerId");

		var healthContainerClass = $(".healthContainerClass");
		var healthContainerId = $("#healthContainerId");

		// let healthTitleClass = $(".healthTitleClass");
		// let healthTitleId = $("#healthTitleId")
		//
		// let healthQuoteClass = $(".healthQuoteClass");
		// let healthQuoteId = $("#healthQuoteId")

		var fHealthCareAjax = function fHealthCareAjax() {
			var promise = $.get("./js/json/healthCare.json");
			promise.then(function (data) {
				var jx = 0;
				var ji = 0;
				var _iteratorNormalCompletion10 = true;
				var _didIteratorError10 = false;
				var _iteratorError10 = undefined;

				try {
					for (var _iterator10 = data.HealthCareListContent[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
						var health = _step10.value;

						/**-----| Create div to hold the healthTitle |-----**/
						createDiv.fCreateTag("div", "healthTitleContainer", "healthTitleContainerClass", jx, healthContainerId);
						var healthTitleContainerId = document.getElementById("healthTitleContainer" + "Id_" + jx);
						healthTitleContainerId.innerHTML = health.introTitle;
						//console.log("healthTitleContainerId: ", healthTitleContainerId);
						//console.log("health.introTitle: ", health.introTitle);

						/**-----| Create div to hold Quote |-----**/
						createDiv.fCreateTag("div", "healthQuoteContainer", "healthQuoteContainerClass", jx, healthContainerId);
						var healthQuoteContainerId = document.getElementById("healthQuoteContainer" + "Id_" + jx);
						healthQuoteContainerId.innerHTML = health.quote[jx].healthQuote;
						//console.log("healthQuoteContainerId: ", healthQuoteContainerId);
						//console.log("health.quote[jx].healthQuote: ", health.quote[jx].healthQuote);
					}
				} catch (err) {
					_didIteratorError10 = true;
					_iteratorError10 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion10 && _iterator10.return) {
							_iterator10.return();
						}
					} finally {
						if (_didIteratorError10) {
							throw _iteratorError10;
						}
					}
				}
			});
		};

		var fLandingPageAnim = function fLandingPageAnim() {}
		//console.log("mainContainerWidthX: ", mainContainer.width());


		// export default function fLandingPageAnim(){
		//     console.log("mainContainerWidthX: ", mainContainer.width());
		// }

		//  export default function cube() {
		//   return mainContainer.width(); //x * x * x;
		// }

		/**-----------=====| EXPORTS |=====-----------**/
		;module.exports.fHealthCareAjax = fHealthCareAjax;
		//module.exports.fLandingPageAnim = fLandingPageAnim;
	})();

	/***/
},
/* 8 */
/***/function (module, exports, __webpack_require__) {

	/***********************************************
  * Project: Webpack Language-Babel Sass Template
  * Developer: rolandolloyd@gmail.com
  * Copyright © 2015 GonzalesDesign
  * Platform: ES2015, Webpack, Babel & Sass
  * Module: About || Experience
  ***********************************************/

	(function () {
		/*IIFE:Immediately-Invoked Function Expression*/

		/**-----------=====| IMPORT | REQUIRE |=====-----------**/
		/** Description:
   ** Files requiring from other js files
   **----------------------------------------------------------------**/
		var createElem = __webpack_require__(2);
		var createDiv = new createElem.CreateElementAny();

		//let servicesContainer = $(".servicesContainer");
		//let servicesContainerId = $("#servicesContainerId");
		//let servicesMainContainerId = $("#servicesMainContainerId");

		/**-----------=====| DOM CACHING |=====-----------**/
		var mainContainer = $(".mainContainer");
		var aboutMainContainerClass = $(".aboutMainContainerClass");
		var aboutMainContainerId = $("#aboutMainContainerId");

		var aboutContainerClass = $(".aboutContainerClass");
		var aboutContainerId = $("#aboutContainerId");
		//console.log("aboutContainerId: ", aboutContainerId);

		// let healthTitleClass = $(".healthTitleClass");
		// let healthTitleId = $("#healthTitleId")
		//
		// let healthQuoteClass = $(".healthQuoteClass");
		// let healthQuoteId = $("#healthQuoteId")

		var fAboutAjax = function fAboutAjax() {
			var promise = $.get("./js/json/about.json");
			promise.then(function (data) {
				var jx = 0;
				var ji = 0;
				var _iteratorNormalCompletion11 = true;
				var _didIteratorError11 = false;
				var _iteratorError11 = undefined;

				try {
					for (var _iterator11 = data.AboutListContent[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
						var about = _step11.value;

						//let aboutContainerId = $("#aboutContainerId")
						/**-----| Create div to hold the healthTitle |-----**/
						createDiv.fCreateTag("div", "aboutTitleContainer", "aboutTitleContainerClass", jx, aboutContainerId);
						var aboutTitleContainerId = document.getElementById("aboutTitleContainer" + "Id_" + jx);
						aboutTitleContainerId.innerHTML = about.introTitle;
						//console.log("aboutTitleContainerId: ", aboutTitleContainerId);
						//console.log("about.introTitle: ", about.introTitle);

						/**-----| Create div to hold Description |-----**/
						createDiv.fCreateTag("div", "aboutDescription", "aboutDescriptionClass", jx, aboutContainerId);
						var aboutDescriptionId = document.getElementById("aboutDescription" + "Id_" + jx);
						aboutDescriptionId.innerHTML = about.description[jx].aboutDesription;
						//console.log("aboutContainerId: ", aboutContainerId);
						//console.log("about.quote[jx].about: ", about.quote[jx].about);
					}
				} catch (err) {
					_didIteratorError11 = true;
					_iteratorError11 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion11 && _iterator11.return) {
							_iterator11.return();
						}
					} finally {
						if (_didIteratorError11) {
							throw _iteratorError11;
						}
					}
				}
			});
		};

		var fLandingPageAnim = function fLandingPageAnim() {}
		//console.log("mainContainerWidthX: ", mainContainer.width());


		// export default function fLandingPageAnim(){
		//     console.log("mainContainerWidthX: ", mainContainer.width());
		// }

		//  export default function cube() {
		//   return mainContainer.width(); //x * x * x;
		// }

		/**-----------=====| EXPORTS |=====-----------**/
		;module.exports.fAboutAjax = fAboutAjax;
		//module.exports.fLandingPageAnim = fLandingPageAnim;
	})();

	/***/
}
/******/]);