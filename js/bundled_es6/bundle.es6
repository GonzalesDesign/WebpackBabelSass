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
/***/ function(module, exports) {

	
	//let require = require(".require");
	/**----------=====| anim |=====----------**/
	//const TweenMax = require('gsap');
	  // const anim = require('./animationFunctions');
	  //
	  // const animationFunctions = "animationFunctions";
	  // console.log("animationFunctions: ", animationFunctions);

	  let containerId = $("#containerId");

	  containerId.css({
	      "width" : "auto",
	      "height" : "200px",
	      "border" : "1px solid red"
	  })
	  //anim.fAnimateHeightWidth(containerId, "auto", 500, 1);

	console.log("gsap un-installed");

	/**----------=====| CreateElementAny Class |=====----------**/
	/** Description:
	** Class template for creating basic "a" tag.
	***********************/
	class CreateElementAny {
	    constructor() {}

	    /** Generic method for creating a tag element **/
	    fCreateTag(tagType, className, title, counter, appendedTo) {
	      let divName = document.createElement(tagType);
	      divName.id = title + "Id_" + counter; //set id
	      divName.className = className; //title + "Class";
	      //divName.href = "#modalCarousel";
	      //let divNameId     = $ ("#" + title + "Id_" + counter); //get id
	      $(divName).appendTo(appendedTo);
	      let tagId = $("#"+title + "Id_" + counter); //set id
	      tagId.css({
	          "width" : "auto",
	          "height" : "auto",
	          "border" : "1px solid Grey"
	      })
	    }
	};
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
	 console.log("Running webpack-dev-serverX");


	 const fIntroAjax = () => {
	   let promise = $.get("./js/json/contentData.json");
	   promise.then(function(data) {
	     let jx = 0;
	     for (let introData of data.GDSiteIntro) {
	         let container = $(".container");
	         let createElemAny = new CreateElementAny();
	         createElemAny.fCreateTag("div", "className", "title", jx, container)

	          let titleXId = $("#title" + "Id_" + jx); //set id
	          createElemAny.fCreateTag("p", "paragClass", "parag", jx, titleXId);
	          //let paragClass = $(".paragClass");
	          //let x = $("#parag" + "Id_" + jx); //set id
	          //let x = $("#paragId_jx"); //set id
	          //console.log("paragId: ", paragId);
	          //var x = document.getElementById('paragId_jx');
	          let x = document.getElementById("parag" + "Id_" + jx);
	          console.log("x: ", x);
	          x.innerHTML = introData.title;


	       /**----------===| CREATE CODING CONTAINER DIV INSIDE INTROCONTAINER |===----------**/
	    //    createDiv.fCreateBasicElement(introData.title + "_CodingContainer", jx, "codingContainer", introContainer);
	    //    let codingContainerId = $("#" + introData.title + "_CodingContainer" + jx); //GET ID
	    //    /**----------===| CREATE CODING TEXT DIV INSIDE CODINGCONTAINER |===----------**/
	    //    createDiv.fCreateBasicElement(introData.title + "_CodingThisSite", jx, "codingThisSite", codingContainerId);
	    //    codingThisSiteId = $("#" + introData.title + "_CodingThisSite" + jx); //GET ID
	    //    const codingThisSite = $(".codingThisSite"); //GET CLASSNAME
	    //    let codingThisSiteHeight = codingThisSiteId.height();
	    //    fBasicDivStyle(codingThisSiteId, "auto", gdContainerWidth, "absolute"); //CSS
	    //    let centerOnScreenY = (inWindowHeight / 2) - (codingThisSiteHeight / 2);
	    //    codingThisSiteId.css({
	    //      "margin-top": centerOnScreenY
	    //    })
	    //    /**----------===| CREATE CODING PARAGRAPHS |===----------**/
	    //    textDiv.fCreateTextDiv("codingTitle", jx, "codingTitleClass", codingThisSiteId, introData.codingTitle);
	    //    textDiv.fCreateTextDiv("codingDescription", jx, "codingDescriptionClass", codingThisSiteId, introData.codingThisSite);
	       //
	    //    /**----------===| CREATE LOGO CONTAINER DIV INSIDE INTROCONTAINER DIV |===----------**/
	    //    createDiv.fCreateBasicElement(introData.title + "_LogoContainer", jx, "logoContainer", introContainer);
	    //    logoContainerDivId = $("#" + introData.title + "_LogoContainer" + jx); //GET ID
	    //    /**----------===| LOGO TITLE CONTAINER COLUMNS PERCENTAGE |===----------**/
	    //    logoTitleColumnPercent = introData.logoTitleColumnPercent; //json supplied
	    //    twoColumnsIntroSection.fTwoColumnsQueries(gdContainerWidth, logoTitleColumnPercent, 0, 0);
	       //
	    //    /**----------===| CREATE LOGO TITLE LEFT COLUMNS |===----------**/
	    //    createDiv.fCreateBasicElement(introData.title + "_IntroLeftColmn", jx, "introLeftColumnClass", logoContainerDivId);
	    //    logoLeftColDivId = $("#" + introData.title + "_IntroLeftColmn" + jx); //GET ID
	    //    fBasicDivStyle(logoLeftColDivId, arbitraryNum, twoColumnsIntroSection.LeftColumn, "relative"); //CSS
	       //
	    //    /**----------===| CREATE LOGO TITLE RIGHT COLUMNS |===----------**/
	    //    createDiv.fCreateBasicElement(introData.title + "_IntroRightColmn", jx, "introRightColumnClass", logoContainerDivId);
	    //    logoRightColDivId = $("#" + introData.title + "_IntroRightColmn" + jx); //GET ID
	    //    fBasicDivStyle(logoRightColDivId, "auto", "auto", "relative"); //CSS
	       //
	    //    // let introRightColumnClass = $(".introRightColumnClass");
	    //    // console.log("introRightColumnClass :", introRightColumnClass);
	    //    // let introRightColumnHeight = introRightColumnClass.height();
	    //    // console.log("introRightColumnHeight :", introRightColumnHeight);
	    //    //TEMP
	    //    // logoLeftColDivId.css({
	    //    //   "border-top": "2px solid red"
	    //    // })
	    //    // logoRightColDivId.css({
	    //    //   "border-top": "2px solid yellowGreen",
	    //    //   "border-bottom": "1px solid cyan"
	    //    // })
	       //
	    //    /**----------===| CREATE LOGO TITLES |===----------**/
	    //    textDiv.fCreateTextDiv(introData.title + "_LogoTitle", jx, "logoTitleClass", logoRightColDivId, introData.introTitle); //R.LLOYD GONZALES
	    //    logoTitleId = $("#" + introData.title + "_LogoTitle" + jx);
	    //    logoText.fTextQueries(gdContainerWidth, logoTitleId, logoTitleSmlFontSize, logoTitleMidFontSize, logoTitleLrgFontSize);
	       //
	    //    /**----------===| CREATE INTRO SUB-TITLES |===----------**/
	    //    textDiv.fCreateTextDiv(introData.title + "_LogoSubTitle", jx, "logoSubTitleClass", logoRightColDivId, introData.intoSubTitle); //Passionate about Arts, Designs & Coding
	    //    logoSubTitleId = $("#" + introData.title + "_LogoSubTitle" + jx);
	    //    logoText.fTextQueries(gdContainerWidth, logoSubTitleId, logoSubTitleSmlFontSize, logoSubTitleMidFontSize, logoSubTitleLrgFontSize);
	       //
	    //    /**----------===| CREATE CALLOUT |===----------**/
	    //    textDiv.fCreateTextDiv(introData.title + "_Callout", jx, "calloutClass", logoRightColDivId, introData.callout); //Portfolio: Scroll Down
	    //    introCalloutId = $("#" + introData.title + "_Callout" + jx);
	    //    logoText.fTextQueries(gdContainerWidth, introCalloutId, introCalloutFontSize, introCalloutFontSize, introCalloutFontSize);
	       //
	    //    /**----------===| TOGGLE "CODE THIS SITE" DESCRIPTION |===----------**/
	       //
	    //    /**----------===| CREATE BUTTON ELEMENT |===----------**/
	    //    createButton.fCreateBtn("btn btn-link codingBtn", "_Btn", jx, logoRightColDivId, "coding this site"); //introFluidContainer
	    //    toggleBtn = $(".codingBtn"); //get clasname
	    //    const closeCoding = $(".closeCoding"); //get clasname
	    //    logoText.fTextQueries(gdContainerWidth, toggleBtn, codingBtnFontSize, codingBtnFontSize, codingBtnFontSize);
	    //    let toggleBtnId = $("#" + introData.title + "_Btn" + jx);
	    //    logoText.fTextQueries(gdContainerWidth, toggleBtn, codingBtnFontSize, codingBtnFontSize, codingBtnFontSize);
	       //
	    //    /**----------===| LOGO CONTAINER: BASIC CSS |===----------**/
	       //
	    //    rightColumnHeight = logoRightColDivId.height(); // + 30;
	       //
	    //    fBasicIntroStyle(logoContainerDivId, "auto", gdContainerWidth);
	    //    logoContainerDivId.css({
	    //      //"border": "1px solid pink",
	    //      "margin-top": inWindowHeight - (rightColumnHeight + 40)
	    //    })
	       //
	    //    fToggleBtn(toggleBtn, codingThisSite);
	    //    fToggleBtn(closeCoding, codingThisSite);
	    //    fRollEvents(toggleBtn, "#949494");
	    //    fRollEvents(closeCoding, "#5780a2");
	       //
	    //    /**----------===| CREATE IMAGE DIV INSIDE INTROFLUIDCONTAINER |===----------**/
	    //    imageBasicDiv.fCreateBasicElement(introData.title + "_IntroImg", jx, "introDivClass", introFluidContainer);
	    //    /**----------===| NEW IMAGE CREATION |===----------**/
	    //    myIntroImage = new Image();
	    //    let imagesPath = "./images/" + introData.title + "/";
	    //    /**-----====={ Load image randomly }=====-----**/
	    //    var randImg = introData.images[Math.floor(introData.images.length * Math.random())];
	    //    myIntroImage.src = imagesPath + randImg.imgName; //introData.images[0].imgName; //randImg;
	    //    /**----------===| IMAGE DIV: IDS |===----------**/
	    //    introImageIds = $("#" + introData.title + "_IntroImg" + jx);
	    //    console.log("introImageIds: ", introImageIds);
	       //
	    //    /**----------===| COLOR THEME: INTRO SUB TITLE |===----------**/
	    //    randColorTheme = randImg.colorTheme;
	    //    logoSubTitleId.css({
	    //      "color": randColorTheme
	    //    })
	    //    /**----------===| COLOR THEME: INTRO LOGO CONTAINER |===----------**/
	    //    let hex2Rgb = fConvertHex(randColorTheme, 50)
	    //    logoContainerDivId.css({
	    //      "border-top": "4px double " + hex2Rgb,
	    //      "border-bottom": "6px double " + hex2Rgb
	    //    });

	       /**----------===| IMAGE DIV: CSS |===----------**/
	       /*        Populating the div with image        *
	       **--------------------------------------------**/
	       // let inWindowHeight = window.innerHeight; // / 2;
	       // let inWindowWidth = window.innerWidth;
	       // let inWindowWidth = window.innerWidth;
	       // let inWindowHeight = window.innerHeight;
	       //fIntroImageStyle(introImageIds, inWindowHeight, inWindowWidth, myIntroImage.src);
	     }
	   })
	 }
	 /**----------===| INVOKE FUNCTION |===----------**/
	 fIntroAjax();


/***/ }
/******/ ]);