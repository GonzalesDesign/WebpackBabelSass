/***********************************************
 * Project: Webpack Language-Babel Sass Template
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2015 GonzalesDesign
 * Platform: ES2015, Webpack, Babel & Sass
 * Module: Responses from Patients & Clients
 ***********************************************/

(function() { /*IIFE:Immediately-Invoked Function Expression*/

	/**-----| Create div to hold the background image |-----**/
	// createDiv.fCreateTag("div", "responseBGImgContainer", "responseBGImgContainerClass", jx, responsesContainerId);
	// //let responseBGImgContainerId = document.getElementById("responseBGImgContainer" + "Id_" + jx);
	// let responseBGImgContainerId = $("#responseBGImgContainer" + "Id_" + jx);
	// console.log("responseBGImgContainerId: ",responseBGImgContainerId);
	// //let responseBGImgContainerClass = $(".responseBGImgContainerClass");
	// let responseBGImgContainerClass = document.getElementsByClassName("responseBGImgContainerClass");
	// console.log("responseBGImgContainerClass: ", responseBGImgContainerClass);
	class CreateNewImage {
		constructor() {}
			/**----------===| NEW IMAGE CREATION |===----------**/
		fCreateNewImage(divNameId, jsonImage, bgImgSize, bgColor) {
			let myIntroImage = new Image();
			let imagesPath = "./images/";
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
			})
		}
	}

	/**-----------=====| EXPORTS |=====-----------**/
	module.exports.CreateNewImage = CreateNewImage;


}());
