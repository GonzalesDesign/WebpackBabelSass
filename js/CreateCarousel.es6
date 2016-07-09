/***********************************************
 * Project: Webpack Language-Babel Sass Template
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2015 GonzalesDesign
 * Platform: ES2015, Webpack, Babel & Sass
 * Module: Create Carousel : Bootstrap
 ***********************************************/

(function() { /*IIFE:Immediately-Invoked Function Expression*/

	/**----------=====| Create Carousel Class |=====----------**/
	class CreateCarousel {
		constructor() {}

		/** Generic method for creating a tag element **/
		fCreateTag(tagType, title, className, counter, appendedTo) {
			let divName = document.createElement(tagType);
			divName.id = title + "Id_" + counter; //set id
			divName.className = className; //title + "Class";
			//divName.href = "#modalCarousel";
			let divNameId = $("#" + title + "Id_" + counter); //get id
			//console.log("divNameId: ",divNameId);
			$(divName).appendTo(appendedTo);
			//TEMP
			divNameId.css({
				"height": "100px",
				"border": "1px solid yellowGreen"
			})
		}
	};

	/**-----------=====| EXPORTS |=====-----------**/
	module.exports.CreateElementAny = CreateElementAny;

}());
