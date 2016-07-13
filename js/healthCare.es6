/***********************************************
 * Project: Webpack Language-Babel Sass Template
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2015 GonzalesDesign
 * Platform: ES2015, Webpack, Babel & Sass
 * Module: Health Care In The News
 ***********************************************/

(function() { /*IIFE:Immediately-Invoked Function Expression*/

	/**-----------=====| IMPORT | REQUIRE |=====-----------**/
	/** Description:
	 ** Files requiring from other js files
	 **----------------------------------------------------------------**/
	const createElem = require('./CreateElementClass.es6');
	let createDiv = new createElem.CreateElementAny();

	//let servicesContainer = $(".servicesContainer");
	//let servicesContainerId = $("#servicesContainerId");
	//let servicesMainContainerId = $("#servicesMainContainerId");

	/**-----------=====| DOM CACHING |=====-----------**/
	let mainContainer = $(".mainContainer");
	let healthMainContainerClass = $(".healthMainContainerClass");
	let healthMainContainerId = $("#healthMainContainerId");

	let healthContainerClass = $(".healthContainerClass");
	let healthContainerId = $("#healthContainerId")

	// let healthTitleClass = $(".healthTitleClass");
	// let healthTitleId = $("#healthTitleId")
	//
	// let healthQuoteClass = $(".healthQuoteClass");
	// let healthQuoteId = $("#healthQuoteId")

	const fHealthCareAjax = () => {
		let promise = $.get("./js/json/healthCare.json");
		promise.then(function(data) {
			let jx = 0;
			let ji = 0;
			for (let health of data.HealthCareListContent) {
				/**-----| Create div to hold the healthTitle |-----**/
				createDiv.fCreateTag("div", "healthTitleContainer", "healthTitleContainerClass", jx, healthContainerId);
				let healthTitleContainerId = document.getElementById("healthTitleContainer" + "Id_" + jx);
				healthTitleContainerId.innerHTML = health.introTitle;
				//console.log("healthTitleContainerId: ", healthTitleContainerId);
				//console.log("health.introTitle: ", health.introTitle);

				/**-----| Create div to hold Quote |-----**/
				createDiv.fCreateTag("div", "healthQuoteContainer", "healthQuoteContainerClass", jx, healthContainerId);
				let healthQuoteContainerId = document.getElementById("healthQuoteContainer" + "Id_" + jx);
				healthQuoteContainerId.innerHTML = health.quote[jx].healthQuote;
				//console.log("healthQuoteContainerId: ", healthQuoteContainerId);
				//console.log("health.quote[jx].healthQuote: ", health.quote[jx].healthQuote);
			}
		})
	};

	let fLandingPageAnim = () => {
		//console.log("mainContainerWidthX: ", mainContainer.width());
	}

	// export default function fLandingPageAnim(){
	//     console.log("mainContainerWidthX: ", mainContainer.width());
	// }

	//  export default function cube() {
	//   return mainContainer.width(); //x * x * x;
	// }


	/**-----------=====| EXPORTS |=====-----------**/
	module.exports.fHealthCareAjax = fHealthCareAjax;
	//module.exports.fLandingPageAnim = fLandingPageAnim;


}());
