/***********************************************
 * Project: Webpack Language-Babel Sass Template
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2015 GonzalesDesign
 * Platform: ES2015, Webpack, Babel & Sass
 * Module: Landing Page
 ***********************************************/

(function() {/*IIFE:Immediately-Invoked Function Expression*/

	/**-----------=====| IMPORT | REQUIRE |=====-----------**/
	/** Description:
	 ** Files requiring from other js files
	 **----------------------------------------------------------------**/
	const createElem = require('./CreateElementClass.es6');
	let createDiv = new createElem.CreateElementAny();

	/**-----------=====| REQUIRE : NEW IMAGE |=====-----------**/
	const createImage = require('./newImage.es6');
	let createNewImg = new createImage.CreateNewImage();

	/**-----------=====| REQUIRE : NEW IMAGE |=====-----------**/
	// const screenResize = require('./ScreenQueries.es6');
	// let screenQueries = new screenResize.ScreenQueries();
	//screenQueries.fScreenQueries(fMenuQueries())

	/**-----------=====| REQUIRE : NEW CAROUSEL |=====-----------**/
	const carouselCreate = require('./imageCarousel.es6');
	//let createCarousel = new carouselCreate.fBuildCarousel();
	//
	//let servicesContainer = $(".servicesContainer");
	//let servicesContainerId = $("#servicesContainerId");
	//let servicesMainContainerId = $("#servicesMainContainerId");
	//
	// function fJump(h){
	// 	//var url = location.href;               //Save down the URL without hash.
	// 	location.href = "#"+h;                 //Go to the target element.
	// 	//history.replaceState(null,null,url);   //Don't like hashes. Changing it back.
	// }​
	const fJump = (H) => {
		location.href = "#" + H;
	}

	/**-----------=====| DOM CACHING |=====-----------**/
	let mainContainer = $(".mainContainer");
	let landingPageContainer = $(".landingPageContainer");
	let landingPageContainerId = $("#landingPageContainerId");
	let logoContainerClass = $(".logoContainerClass");
	let logoContainerId = $("#logoContainerId");
	let menuNavClass = $(".menuNavClass");
	let menuNavClassId = $("#menuNavClassId");
	let landingPageDescriptionId = $("#landingPageDescriptionId")

	const fLandingPageAjax = () => {
		let promise = $.get("./js/json/landingPage.json");
		promise.then(function(data) {
			let jx = 0;
			let ji = 0;
			for (let introData of data.LandingPageContent) {
				/**-----| Logo |-----**/
				createDiv.fCreateTag("div", "logo", "logoClass", jx, logoContainerId);
				//let logoContainerId = document.getElementById("logoContainer" + "Id_" + jx);
				let logoId = $("#logo" +
				"Id_" + jx);
				/**-----| Company Logo Image |-----**/
				createNewImg.fCreateNewImage(logoId, introData.companyLogo, "80%", "White");
				/**-----| CONCIERGE HOME CARE NURSING |-----**/
				createDiv.fCreateTag("div", "logoSubTitle", "logoSubTitleClass", jx, logoContainerId);
				//let logoSubTitleId = $("#logoSubTitleId_"+jx);
				let logoSubTitleId = document.getElementById("logoSubTitle" +
				"Id_" + jx);
				logoSubTitleId.innerHTML = introData.introSubTitle;
				/**-----| ADDRESS: NY & DC |-----**/
				createDiv.fCreateTag("div", "logoAddress", "logoAddressClass", jx, logoContainerId);
				let logoAddressId = document.getElementById("logoAddress" +
				"Id_" + jx);
				logoAddressId.innerHTML = introData.logoAddress;
				// logoId.css({
				// 	"background-color": "white"
				// })
				//logoContainerId.innerHTML = introData.companyLogo;
				/**-----| Menu Navigation |-----**/
				createDiv.fCreateTag("div", "menuNavContainer", "menuNavContainerClass", jx, menuNavClass);
				let menuNavContainerId = document.getElementById("menuNavContainer" +
				"Id_" + jx);
				for (let menus of introData.mainMenuNavs) {
					ji++;
					//console.log("introData.menu: ", menus.menu);
					createDiv.fCreateTag("div", "menu", "menuClass", ji, menuNavContainerId);
					let menuId = document.getElementById("menu" +
					"Id_" + ji);
					//let menuId = $("#menu" + "Id_" + ji);
					//let menuId = $("#menuId_" + ji);
					let menuClass = $(".menuClass");
					menuId.innerHTML = menus.menu;

					//console.log("menuId: ", menuId);
					//
					//fLandingPageResize(menuClass);
					//
					//menuId.onclick = menus.link;
					//menuId.setAttribute("name", "#" + menus.menu);
					// menuId.click(function() {
					// 	console.log("menuIdClicked");
					// 	//alert("Handler for .click() called.");
					// });
					// menuId.mouseover(() => {
					// 	console.log("menuIdRollover");
					// 	// idName.css({
					// 	//   "color": "Orange",
					// 	//   "cursor": "pointer",
					// 	//   "text-decoration": "none"
					// 	// })
					// });

					// menuClass.css({
					// 	"cursor": "pointer"
					// });
					//$(document).ready(
					// function fJump(h){
					//     //var url = location.href;               //Save down the URL without hash.
					//     location.href = "#"+h;                 //Go to the target element.
					//     //history.replaceState(null,null,url);   //Don't like hashes. Changing it back.
					// }​
					$(menuId).click(() => {
						console.log("menuIdClicked: ");
						fJump(menus.menu);
						//menuId.innerHTML = menus.link; //location.href;
					});
					//)
				}

				/**-----| Images Carousel |-----**/
				let createCarousel = new carouselCreate.fBuildCarousel();

				/**-----| Landing Page Description |-----**/
				createDiv.fCreateTag("div", "landingPage", "landingPageClass", jx, landingPageDescriptionId);
				let landingPageId = document.getElementById("landingPage" +
				"Id_" + jx);
				//let x = $("#landingPage" + "Id_" + jx);
				let strng = introData.landingPageDescription;
				let subStrng = strng.substr(0, 700);
				landingPageId.innerHTML = subStrng;

				// fLandingPageResize();

			}

			fLandingPageResize();
		})
	};

	let screenSmall = 750;
	let screenMedium = 970;
	let largeScreen = 1170;

	let fLandingPageResize = () => {
		let browserWidth = window.innerWidth;
		//console.log("browserWidth: ", browserWidth);
		let menuClass = $(".menuClass");

		/*-----[ Largest Screen ]-----*/
		if (browserWidth > 1170) {
			console.log(">largeScreen: ", largeScreen);
			menuClass.css({"font-size": "1.8em", "padding-left": "34px", "padding-right": "34px"})
			/*-----[ .container is between 1170 and 970 width ]-----*/
		} else if (browserWidth <= 1170 && browserWidth > 970) {
			console.log("> screenMedium: ", screenMedium);
			menuClass.css({"font-size": "1.8em", "padding-left": "12px", "padding-right": "12px"})
			/*-----[ .container is between 970 and 750 width ]-----*/
		} else if (browserWidth <= 970 && browserWidth > 750) {
			console.log("> screenMedium: ", screenMedium);
			menuClass.css({"font-size": "1.4em", "padding-left": "10px", "padding-right": "10px"})
			/*-----[ .container is between 750 and 550 width ]-----*/
		} else if (browserWidth <= 750 && browserWidth > 550) {
			console.log("> screenMedium: ", screenMedium);
			menuClass.css({"font-size": "1.3em", "padding-left": "10px", "padding-right": "10px"})
			/*-----[ .container is less than 550 width ]-----*/
		} else {
			console.log("screenSmall: ", screenSmall);
			menuClass.css({"font-size": "1.2em", "padding-left": "2px", "padding-right": "2px"})
		}
	}

	let fLandingPageAnim = () => {
		fLandingPageResize();
	}

	/**-----------=====| EXPORTS |=====-----------**/
	module.exports.fLandingPageAjax = fLandingPageAjax;
	module.exports.fLandingPageAnim = fLandingPageAnim;

}());
