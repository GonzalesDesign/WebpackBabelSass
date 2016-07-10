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
	const createElem = require('./CreateElementClass.es6');
	let createDiv = new createElem.CreateElementAny();

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
			for (let services of data.ServicesListContent) {
				/*----- Services Title -----*/
				createDiv.fCreateTag("div", "servicesContainer", "servicesContainerClass", jx, ulContainerId);
				//let servicesContainerId = $("#servicesContainer" + "Id_" + jx);
				let servicesContainerId = document.getElementById("servicesContainer" + "Id_" + jx);
				servicesContainerId.innerHTML = services.introTitle;
				console.log("services.introTitle: ", services.introTitle);
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
					console.log("serviceLi: ", serviceLi);
					$(serviceLi).appendTo(ul);
					serviceLi.innerHTML = serviceLi.innerHTML + servicesList.services;
					/**----- Getting the LI height -----**/
					let servicesLIIdHeight = $(serviceLi)[0].scrollHeight
						//console.log("servicesLIIdHeight: ",servicesLIIdHeight);

					// serviceLi.css({
					//     "width" : "50%"
					// })
					//serviceLi.style.width = "30%";
					fIlScreenResize();

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

	let fIlScreenResize = () => {
		let mainContainerWidth = mainContainer.width();
		console.log("mainContainerWidth: ", mainContainerWidth);
		//let li = $("li")
		let serviceLiClass = $(".serviceLiClass");
		let ulContainerClass = $(".ulContainerClass");
		if (mainContainerWidth > 1000) {
			serviceLiClass.css({
				"width": "25%"
			})
			ulContainerClass.css({
				"height": "280px"
			})
		} else if (mainContainerWidth <= 720 && mainContainerWidth > 450) {
			serviceLiClass.css({
				"width": "50%"
			})
			ulContainerClass.css({
				"height": "400px"
			})
		} else if (mainContainerWidth <= 450) {
			serviceLiClass.css({
				"width": "80%"
			})
			ulContainerClass.css({
				"height": "640px"
			})
		} else {
			serviceLiClass.css({
				"width": "30%"
			})
			ulContainerClass.css({
				"height": "340px"
			})
		}
	}
	let fServicesListAnim = () => {
		fIlScreenResize();
	}

	/**-----------=====| EXPORTS |=====-----------**/
	module.exports.fServicesListAjax = fServicesListAjax;
	module.exports.fServicesListAnim = fServicesListAnim;


}());
