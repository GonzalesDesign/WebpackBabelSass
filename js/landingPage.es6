/***********************************************
 * Project: Webpack Language-Babel Sass Template
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2015 GonzalesDesign
 * Platform: ES2015, Webpack, Babel & Sass
 * Module: Landing Page
 ***********************************************/

( function() { /*IIFE:Immediately-Invoked Function Expression*/

	/**----------===| CLASS: CREATE ELEMENTS |===----------**/
	const createElem = require( './CreateElementClass.es6' );
	let createDiv = new createElem.CreateElementAny();

	/**----------===| MODULE: NEW IMAGE |===----------**/
	const createImage = require( './newImage.es6' );
	let createNewImg = new createImage.CreateNewImage();

	/**----------===| MODULE: IMAGE CAROUSEL |===----------**/
	const carouselCreate = require( './imageCarousel.es6' );

	/**----------===| FUNCTION: ANCHOR LINK |===----------**/
	const fGoTo = ( link ) => {
		location.href = "#" + link;
	}

	/**-----------=====| DOM CACHING |=====-----------**/
	let mainContainer = $( ".mainContainer" );
	let landingPageContainer = $( ".landingPageContainer" );
	let landingPageContainerId = $( "#landingPageContainerId" );
	let logoContainerClass = $( ".logoContainerClass" );
	let logoContainerId = $( "#logoContainerId" );
	let menuNavClass = $( ".menuNavClass" );
	let menuNavClassId = $( "#menuNavClassId" );
	let landingPageDescriptionId = $( "#landingPageDescriptionId" )

	const fLandingPageAjax = () => {
		let promise = $.get( "./js/json/landingPage.json" );
		promise.then( function( data ) {
			let jx = 0;
			let ji = 0;
			for ( let introData of data.LandingPageContent ) {
				/**-----| Logo |-----**/
				createDiv.fCreateTag( "div", "logo", "logoClass", jx, logoContainerId );
				let logoId = $( "#logo" + "Id_" + jx );
				/**-----| Company Logo Image |-----**/
				createNewImg.fCreateNewImage( logoId, introData.companyLogo, "80%", "White" );
				/**-----| CONCIERGE HOME CARE NURSING |-----**/
				createDiv.fCreateTag( "div", "logoSubTitle", "logoSubTitleClass", jx, logoContainerId );
				//let logoSubTitleId = $("#logoSubTitleId_"+jx);
				let logoSubTitleId = document.getElementById( "logoSubTitle" + "Id_" + jx );
				logoSubTitleId.innerHTML = introData.introSubTitle;
				/**-----| ADDRESS: NY & DC |-----**/
				createDiv.fCreateTag( "div", "logoAddress", "logoAddressClass", jx, logoContainerId );
				let logoAddressId = document.getElementById( "logoAddress" + "Id_" + jx );
				logoAddressId.innerHTML = introData.logoAddress;
				/**-----| Menu Navigation |-----**/
				createDiv.fCreateTag( "div", "menuNavContainer", "menuNavContainerClass", jx, menuNavClass );
				let menuNavContainerId = document.getElementById( "menuNavContainer" + "Id_" + jx );
				for ( let menus of introData.mainMenuNavs ) {
					ji++;
					//console.log("introData.menu: ", menus.menu);
					createDiv.fCreateTag( "div", "menu", "menuClass", ji, menuNavContainerId );
					let menuId = document.getElementById( "menu" + "Id_" + ji );
					//let menuId = $("#menu" + "Id_" + ji);
					//let menuId = $("#menuId_" + ji);
					let menuClass = $( ".menuClass" );
					menuId.innerHTML = menus.menu;

					/**-----| Menu anchor links |-----**/
					$( menuId ).click( () => {
						fGoTo( menus.menu );
					} );
				}

				/**-----| Images Carousel |-----**/
				let createCarousel = new carouselCreate.fBuildCarousel();

				/**-----| Landing Page Description |-----**/
				createDiv.fCreateTag( "div", "landingPage", "landingPageClass", jx, landingPageDescriptionId );
				let landingPageId = document.getElementById( "landingPage" +
					"Id_" + jx );
				//let x = $("#landingPage" + "Id_" + jx);
				let strng = introData.landingPageDescription;
				let subStrng = strng.substr( 0, 700 );
				landingPageId.innerHTML = subStrng;
			}

			/**-----| Screen resize querie on load |-----**/
			fLandingPageResize();

		} )
	};

	let screenSmall = 750;
	let screenMedium = 970;
	let largeScreen = 1170;

	let fLandingPageResize = () => {
		let browserWidth = window.innerWidth;
		//console.log("browserWidth: ", browserWidth);
		let menuClass = $( ".menuClass" );

		/*-----[ Largest Screen ]-----*/
		if ( browserWidth > 1170 ) {
			console.log( ">largeScreen: ", largeScreen );
			menuClass.css( {
					"font-size": "1.8em",
					"padding-left": "34px",
					"padding-right": "34px"
				} )
				/*-----[ .container is between 1170 and 970 width ]-----*/
		} else if ( browserWidth <= 1170 && browserWidth > 970 ) {
			console.log( "> screenMedium: ", screenMedium );
			menuClass.css( {
					"font-size": "1.8em",
					"padding-left": "12px",
					"padding-right": "12px"
				} )
				/*-----[ .container is between 970 and 750 width ]-----*/
		} else if ( browserWidth <= 970 && browserWidth > 750 ) {
			console.log( "> screenMedium: ", screenMedium );
			menuClass.css( {
					"font-size": "1.4em",
					"padding-left": "10px",
					"padding-right": "10px"
				} )
				/*-----[ .container is between 750 and 550 width ]-----*/
		} else if ( browserWidth <= 750 && browserWidth > 550 ) {
			console.log( "> screenMedium: ", screenMedium );
			menuClass.css( {
					"font-size": "1.3em",
					"padding-left": "10px",
					"padding-right": "10px"
				} )
				/*-----[ .container is less than 550 width ]-----*/
		} else {
			console.log( "screenSmall: ", screenSmall );
			menuClass.css( {
				"font-size": "1.2em",
				"padding-left": "2px",
				"padding-right": "2px"
			} )
		}
	}

	/**-----------=====| EXPORTS |=====-----------**/
	module.exports.fLandingPageAjax = fLandingPageAjax;
	module.exports.fLandingPageResize = fLandingPageResize;

}() );
