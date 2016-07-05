/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

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

	
	/***********************************************
	* Project: Webpack Language-Babel Sass Template
	* Developer: rolandolloyd@gmail.com
	* Copyright © 2015 GonzalesDesign
	* Platform: ES2015, Webpack, Babel & Sass
	* Module: Index
	***********************************************/

	(function() { /*IIFE:Immediately-Invoked Function Expression*/
	  "use strict";

	/**-----------=====| DOM CACHING |=====-----------**/
	let mainContainer = $(".mainContainer");
	let landingPageContainer = $(".landingPageContainer");
	let menuNavClass = $(".menuNavClass");
	let menuNavClassId = $("#menuNavClassId");
	let landingPageDescriptionId = $("#landingPageDescriptionId")

	/**-----------=====| IMPORT | REQUIRE |=====-----------**/
	 /** DESCRIPTIONS:
	  ** FILES IMPORTED FROM OTHER JS FILES
	  ** SEPERATE JS FILES FOR EASIER READABILITY AND MAINTENANCE
	  **----------------------------------------------------------------**/
	 const createElem = __webpack_require__(1);
	 let createDiv = new createElem.CreateElementAny();

	const servicesList = __webpack_require__(2);

	 const fLandingPageAjax = () => {
	   let promise = $.get("./js/json/landingPage.json");
	   promise.then(function(data) {
	     let jx = 0;
	     let ji = 0;
	     for (let introData of data.LandingPageContent) {
	        createDiv.fCreateTag("div", "menuNavContainer", "menuNavContainerClass", jx, menuNavClass);
	        let menuNavContainerId = document.getElementById("menuNavContainer" + "Id_" + jx);

	        /**-----| Menu Navigation |-----**/
	        for(let menus of introData.mainMenuNavs){
	            ji++;
	            console.log("menus.menu: ", menus.menu);
	            createDiv.fCreateTag("div", "menuNav", "menuNavClass", ji, menuNavContainerId);
	            let menuNavId = document.getElementById("menuNav" + "Id_" + ji);
	            menuNavId.innerHTML = menus.menu;
	        }

	        /**-----| Landing Page Description |-----**/
	       createDiv.fCreateTag("div", "landingPage", "landingPageClass", jx, landingPageDescriptionId);
	       let landingPageId = document.getElementById("landingPage" + "Id_" + jx);
	       //let x = $("#landingPage" + "Id_" + jx);
	       let strng = introData.landingPageDescription;
	       let subStrng = strng.substr(0, 700);
	       landingPageId.innerHTML = subStrng;
	     }

	   })
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

	  let containerId = $("#containerId");


	  containerId.css({
	      //"width" : "auto",
	      //"height" : "200px",
	      //"border" : "1px solid Cyan"
	  })
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

	 const fIntroAjax = () => {
	   let promise = $.get("./js/json/contentData.json");
	   promise.then(function(data) {
	     let jx = 0;
	     for (let introData of data.GDSiteIntro) {
	         let container = $(".container");
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
	   })
	 }
	 /**----------===| INVOKE FUNCTION |===----------**/
	 //fIntroAjax();

	/**----------===| Invoke fServicesListAjax function from servicesList.es6 |===----------**/
	servicesList.fServicesListAjax();

	}());


/***/ },
/* 1 */
/***/ function(module, exports) {

	
	/***********************************************
	* Project: Webpack Language-Babel Sass Template
	* Developer: rolandolloyd@gmail.com
	* Copyright © 2015 GonzalesDesign
	* Platform: ES2015, Webpack, Babel & Sass
	* Module: CreateElementClass
	***********************************************/

	(function() { /*IIFE:Immediately-Invoked Function Expression*/
	  "use strict";

	/**----------=====| CreateElementAny Class |=====----------**/
	  /** Description:
	   ** Class template for creating basic "a" tag.
	   *********************************************************/
	  class CreateElementAny {
	    constructor() {}

	    /** Generic method for creating a tag element **/
	    fCreateTag(tagType, title, className, counter, appendedTo) {
	      let divName = document.createElement(tagType);
	      divName.id = title + "Id_" + counter; //set id
	      divName.className = className; //title + "Class";
	      //divName.href = "#modalCarousel";
	      let divNameId     = $ ("#" + title + "Id_" + counter); //get id
	      //console.log("divNameId: ",divNameId);
	      $(divName).appendTo(appendedTo);
	      //TEMP
	      divNameId.css({
	          "height":"100px",
	          "border":"1px solid yellowGreen"
	      })
	    }
	};

	/**-----------=====| EXPORTS |=====-----------**/
	module.exports.CreateElementAny = CreateElementAny;

	}());


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	
	/***********************************************
	* Project: Webpack Language-Babel Sass Template
	* Developer: rolandolloyd@gmail.com
	* Copyright © 2015 GonzalesDesign
	* Platform: ES2015, Webpack, Babel & Sass
	* Module: Services List
	***********************************************/

	(function() { /*IIFE:Immediately-Invoked Function Expression*/
	  "use strict";

	/**-----------=====| IMPORT | REQUIRE |=====-----------**/
	 /** Description:
	  ** Files requiring from other js files
	  **----------------------------------------------------------------**/
	 const createElem = __webpack_require__(1);
	 let createDiv = new createElem.CreateElementAny();

	 //let servicesContainer = $(".servicesContainer");
	 //let servicesContainerId = $("#servicesContainerId");
	 let servicesMainContainerId = $("#servicesMainContainerId");

	const fServicesListAjax = () => {
	  let promise = $.get("./js/json/servicesList.json");
	  promise.then(function(data) {
	    let jx = 0;
	    let ji = 0;
	    for (let services of data.ServicesListContent) {
	        /*----- Services Title -----*/
	        createDiv.fCreateTag("div", "servicesContainer", "servicesContainerClass", jx, servicesMainContainerId);
	        //let servicesContainerId = $("#servicesContainer" + "Id_" + jx);
	        let servicesContainerId = document.getElementById("servicesContainer" + "Id_" + jx);
	        servicesContainerId.innerHTML = services.introTitle;
	        console.log("services.introTitle: ",services.introTitle);

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

	        let ul = document.createElement('ul');
	        ul.className = "servicesULClass";
	         $(ul).appendTo(servicesMainContainerId); //servicesMainContainerId servicesContainerId
	        let servicesULIdHeight = $("ul")[0].scrollHeight

	        //  createDiv.fCreateTag("UL", "servicesUL", "servicesULClass", jx, servicesMainContainerId);
	        //  let servicesULId = $("#servicesUL" + "Id_" + jx);
	        //  let servicesULIdHeight = servicesULId.height();
	          //console.log("servicesULIdHeight: ",servicesULIdHeight);

	        //  servicesULId.css({
	        //      "height" :
	        //  })

	        for (let servicesList of services.servicesList){
	            ji++;

	            /**----- Using DIV -----**/
	            // createDiv.fCreateTag("div", "servicesList", "servicesListClass", ji, servicesMainContainerId);
	            // let servicesListId = document.getElementById("servicesListId_" + ji);
	            // //let servicesListId = $("#servicesListId_" + ji);
	            // servicesListId.innerHTML = servicesList.services;
	            // // console.log("servicesListId: ",servicesListId);
	            // // console.log("servicesList.services: ",servicesList.services);

	            /**----- Using UL & LI -----**/
	            let li = document.createElement('li');
	            //$(li).appendTo(servicesULId);
	            $(li).appendTo(ul);
	            li.innerHTML=li.innerHTML + servicesList.services;
	            /**----- Getting the LI height -----**/
	            let servicesLIIdHeight = $("li")[0].scrollHeight
	            console.log("servicesLIIdHeight: ",servicesLIIdHeight);

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
	    }
	  })
	}


	/**-----------=====| EXPORTS |=====-----------**/
	module.exports.fServicesListAjax = fServicesListAjax;


	}());


/***/ }
/******/ ]);