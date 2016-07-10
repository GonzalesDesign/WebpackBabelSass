/***********************************************
 * Project: Webpack Language-Babel Sass Template
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2015 GonzalesDesign
 * Platform: ES2015, Webpack, Babel & Sass
 * Module: Landing Page
 ***********************************************/

(function() { /*IIFE:Immediately-Invoked Function Expression*/

	/**-----------=====| IMPORT | REQUIRE |=====-----------**/
	/** Description:
	 ** Files requiring from other js files
	 **----------------------------------------------------------------**/
	const createElem = require('./CreateElementClass.es6');
	let createDiv = new createElem.CreateElementAny();

	/**-----------=====| REQUIRE : NEW IMAGE |=====-----------**/
	const createImage = require('./newImage.es6');
	let createNewImg = new createImage.CreateNewImage();

	/**-----------=====| REQUIRE : NEW CAROUSEL |=====-----------**/
	const carouselCreate = require('./imageCarousel.es6');
	//let createCarousel = new carouselCreate.fBuildCarousel();

	//let servicesContainer = $(".servicesContainer");
	//let servicesContainerId = $("#servicesContainerId");
	//let servicesMainContainerId = $("#servicesMainContainerId");

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
				let logoId = $("#logo" + "Id_" + jx);
				createNewImg.fCreateNewImage(logoId, introData.companyLogo, "100%");
				//logoContainerId.innerHTML = introData.companyLogo;
				/**-----| Menu Navigation |-----**/
				createDiv.fCreateTag("div", "menuNavContainer", "menuNavContainerClass", jx, menuNavClass);
				let menuNavContainerId = document.getElementById("menuNavContainer" + "Id_" + jx);
				for (let menus of introData.mainMenuNavs) {
					ji++;
					console.log("introData.menu: ", menus.menu);
					createDiv.fCreateTag("div", "menu", "menuClass", ji, menuNavContainerId);
					let menuId = document.getElementById("menu" + "Id_" + ji);
					menuId.innerHTML = menus.menu;

					menuId.onclick = menus.link;

					//menuId.setAttribute("name", "#" + menus.menu);
				}

				/**-----| Images Carousel |-----**/
				let createCarousel = new carouselCreate.fBuildCarousel();


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

	// let fLandingPageAnim = () => {
	// 	//console.log("mainContainerWidthX: ", mainContainer.width());
	// }

	/**-----------=====| EXPORTS |=====-----------**/
	module.exports.fLandingPageAjax = fLandingPageAjax;
	//module.exports.fLandingPageAnim = fLandingPageAnim;


}());
