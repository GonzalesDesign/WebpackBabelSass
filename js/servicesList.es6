/***********************************************
 * Project: Webpack Language-Babel Sass Template
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2015 GonzalesDesign
 * Platform: ES2015, Webpack, Babel & Sass
 * Module: Services List
 ***********************************************/

(function() {/*IIFE:Immediately-Invoked Function Expression*/
	"use strict";

	/**-----------=====| IMPORT | REQUIRE |=====-----------**/
	/** Description:
	 ** Files requiring from other js files
	 **----------------------------------------------------------------**/
	const createElem = require('./CreateElementClass.es6');
	let createDiv = new createElem.CreateElementAny();
	/**-----------=====| REQUIRE : NEW IMAGE |=====-----------**/
	const createIconImage = require('./newImage.es6');
	let createNewIconImg = new createIconImage.CreateNewImage();

	/**-----------=====| DOM CACHING |=====-----------**/
	let mainContainer = $(".mainContainer");
	//let servicesContainer = $(".servicesContainer");
	//let servicesContainerId = $("#servicesContainerId");
	let servicesMainContainerId = $("#servicesMainContainerId");
	let ulContainerId = $("#ulContainerId");
	//let li;
	let serviceLi;

	const fServicesListAjax = () => {
		let promise = $.get("./js/json/servicesList.json");
		promise.then(function(data) {
			let jx = 0;
			let ji = 0;
			let jj = 0;
			for (let services of data.ServicesListContent) {
				/*----- Services Title -----*/
				createDiv.fCreateTag("div", "servicesContainer", "servicesContainerClass", jx, ulContainerId);
				//let servicesContainerId = $("#servicesContainer" + "Id_" + jx);
				let servicesContainerId = document.getElementById("servicesContainer" +
				"Id_" + jx);
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

				let ul = document.createElement('ul');
				ul.className = "servicesULClass";
				$(ul).appendTo(ulContainerId); //ulContainerId servicesContainerId
				let servicesULIdHeight = $("ul")[0].scrollHeight

				//  createDiv.fCreateTag("UL", "servicesUL", "servicesULClass", jx, ulContainerId);
				//  let servicesULId = $("#servicesUL" + "Id_" + jx);
				//  let servicesULIdHeight = servicesULId.height();
				//console.log("servicesULIdHeight: ",servicesULIdHeight);

				//  servicesULId.css({
				//      "height" :
				//  })

				/*----- Services List Iteration -----*/
				for (let servicesList of services.servicesList) {
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
					let servicesLIIdHeight = $(serviceLi)[0].scrollHeight
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
				createDiv.fCreateTag("div", "iconMainContainer", "iconMainContainerClass", jx, servicesMainContainerId);
				let iconMainContainerId = $("#iconMainContainerId_" + jx);
				/*----- Icon Links 3 Columns Containers -----*/
				createDiv.fCreateTag("div", "icon3ColumnsContainer", "icon3ColumnsContainerClass", jx, iconMainContainerId);
				let icon3ColumnsContainerId = $("#icon3ColumnsContainerId_" + jx);
				/*----- Icon On Each Container -----*/
				for (let iconImages of services.servicesImages) {
					jj++;
					createDiv.fCreateTag("div", "icon", "iconClass", jj, icon3ColumnsContainerId);
					let iconId = $("#iconId_" + jj);
					//let iconId = document.getElementById("iconId_" + jj);
					let iconClass = $(".iconClass");
					//console.log("iconId: ", iconId);
					/*----- Icon CSS Overide -----*/
					iconId.css({
						//"height": "200px",
						"float": "none"
					})

					createDiv.fCreateTag("div", "iconImage", "iconImageClass", jj, iconId);
					let iconImageId = $("#iconImageId_" + jj);

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
					let iconTitleId = document.getElementById("iconTitleId_" + jj);

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
			}
		})
	}

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
	let fRoundToTwo = function(num) {
		return + (Math.round(num + "e+2") + "e-2");
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

	let fServicesResize = () => {
		let browserWidth = window.innerWidth;
		let mainContainerWidth = mainContainer.width();
		let halfBrowserWidth = browserWidth / 2;
		let thirdBrowserWidth = fRoundToTwo(mainContainerWidth / 3) + "px";
		let quarterBrowserWidth = browserWidth / 4;
		// console.log("browserWidth: ", browserWidth);
		// console.log("thirdBrowserWidth: ", thirdBrowserWidth);
		// console.log("quarterBrowserWidth: ", quarterBrowserWidth);

		let iconMainContainerClass = $(".iconMainContainerClass");
		let icon3ColumnsContainerClass = $(".icon3ColumnsContainerClass");
		let iconClass = $(".iconClass");
		let iconImageClass = $(".iconImageClass");
		let iconTitleClass = $(".iconTitleClass");
		let serviceLiClass = $(".serviceLiClass");

		/*-----[ Largest Screen ]-----*/
		if (browserWidth > 1170) {
			console.log("1170: ");
			iconClass.css({"width": "25%"});
			iconImageClass.css({"float": "left"});
			iconTitleClass.css({"font-size": "2em", "top": "30px", "float": "left", "text-align": "left", "width": "55%"});
			//fAnimIconTitle(iconTitleClass, "2em", "30px", "left", "left", "55%");
			serviceLiClass.css({"width": thirdBrowserWidth});
			//titleDescriptionBoxClass.css({"top": "65%", "padding-top": "30px", "padding-bottom": "40px"})

			/*-----[ .container is between 1170 and 970 width ]-----*/
		} else if (browserWidth <= 1170 && browserWidth > 970) {
			console.log("<1170 >970: ");
			iconClass.css({"width": "25%"});
			iconImageClass.css({"float": "none"});
			iconTitleClass.css({"font-size": "2em", "top": "0px", "float": "none", "text-align": "center", "width": "100%"});
			serviceLiClass.css({"width": "50%"});
			//titleDescriptionBoxClass.css({"top": "65%", "padding-top": "30px", "padding-bottom": "40px"})

			/*-----[ .container is between 970 and 750 width ]-----*/
		} else if (browserWidth <= 970 && browserWidth > 750) {
			console.log("<970 >750: ");
			iconClass.css({"width": "32%"});
			//console.log("iconImageClass: ", iconImageClass);
			iconImageClass.css({"float": "none", "width": "120px"});
			iconTitleClass.css({"font-size": "2em", "top": "0px", "float": "none", "text-align": "center", "width": "100%"});
			serviceLiClass.css({"width": "50%"});
			//titleDescriptionBoxClass.css({"top": "65%", "padding-top": "20px", "padding-bottom": "20px"})

			/*-----[ .container is between 750 and 550 width ]-----*/
		} else if (browserWidth <= 750 && browserWidth > 550) {
			console.log("<750 >550: ");
			iconClass.css({"width": "32%"});
			iconImageClass.css({"float": "none"});
			iconTitleClass.css({"font-size": "1.6em", "top": "0px", "float": "none", "text-align": "center", "width": "100%"});
			serviceLiClass.css({"width": "50%"});
			//titleDescriptionBoxClass.css({"top": "65%", "padding-top": "20px", "padding-bottom": "20px"})
			/*-----[ .container is between 550 and 500 width ]-----*/
		} else if (browserWidth <= 550 && browserWidth > 500) {
			iconClass.css({"width": "60%"});
			iconImageClass.css({"float": "none"});
			iconTitleClass.css({"font-size": "2em", "top": "0px", "float": "none", "text-align": "center", "width": "100%"});
			serviceLiClass.css({"width": "80%"});
			//iconImageClass.css({"float": "none"});

			/*-----[ .container is less than 550 width ]-----*/
		} else {
			console.log("else: ");
			iconClass.css({"width": "60%"});
			iconImageClass.css({"float": "none"});
			iconTitleClass.css({"font-size": "2em", "top": "0px", "float": "none", "text-align": "center", "width": "100%"});
			//iconTitleClass.css({"font-size": "1.3em", "top": "0px", "float": "none", "text-align": "center", "width": "100%"});
			serviceLiClass.css({"width": "80%"});
			//titleDescriptionBoxClass.css({"top": "50%"})
		}
	}

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

}());
