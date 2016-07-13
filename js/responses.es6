/***********************************************
 * Project: Webpack Language-Babel Sass Template
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2015 GonzalesDesign
 * Platform: ES2015, Webpack, Babel & Sass
 * Module: Responses from Patients & Clients
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
	let responsesMainContainerClass = $(".responsesMainContainerClass");
	let responsesMainContainerId = $("#responsesMainContainerId");
	let responsesContainerClass = $(".responsesContainerClass");
	let responsesContainerId = $("#responsesContainerId")

	const fResponsesAjax = () => {
		let promise = $.get("./js/json/responses.json");
		promise.then(function(data) {
			let jx = 0;
			let ji = 0;
			for (let responses of data.ResponsesListContent) {
				/**-----| Create div to hold the title |-----**/
				createDiv.fCreateTag("div", "responseTitleContainer", "responseTitleContainerClass", jx, responsesContainerId);
				let responseTitleContainerId = document.getElementById("responseTitleContainer" + "Id_" + jx);
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
				for (let response of responses.responses) {
					ji++;
					/**-----| Create div to hold the background image |-----**/
					createDiv.fCreateTag("div", "testimonialsContainer", "testimonialsContainerClass", ji, responsesContainerId);
					let testimonialsContainerId = document.getElementById("testimonialsContainer" + "Id_" + ji);
					testimonialsContainerId.innerHTML = response.response;
				}

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
	module.exports.fResponsesAjax = fResponsesAjax;
	//module.exports.fLandingPageAnim = fLandingPageAnim;


}());
