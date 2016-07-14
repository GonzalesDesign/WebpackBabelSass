/***********************************************
 * Project: Webpack Language-Babel Sass Template
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2015 GonzalesDesign
 * Platform: ES2015, Webpack, Babel & Sass
 * Module: Index 071416
 ***********************************************/

( function() { /*IIFE:Immediately-Invoked Function Expression*/
	"use strict";

	/**----------===| MODULE: LANDING PAGE |===----------**/
	const landingPage = require( './landingPage.es6' );
	landingPage.fLandingPageAjax();
	landingPage.fLandingPageResize();

	/**----------===| MODULE: IMAGE CAROUSEL |===----------**/
	const imageCarousel = require( './imageCarousel.es6' );
	imageCarousel.fCarouselResize();

	/**----------===| MODULE: SERVICES |===----------**/
	const servicesList = require( './servicesList.es6' );
	servicesList.fServicesListAjax();

	/**----------===| MODULE: RESPONSES |===----------**/
	const responsesSection = require( './responses.es6' );
	responsesSection.fResponsesAjax();

	/**----------===| MODULE: HEALTH CARE |===----------**/
	const halthCareSection = require( './healthCare.es6' );
	halthCareSection.fHealthCareAjax();

	/**----------===| MODULE: ABOUT || EXPERIENCE |===----------**/
	const aboutSection = require( './about.es6' );
	aboutSection.fAboutAjax();

	/**----------===| FUNCTION: SCREEN RESIZE QUERIES |===----------**/
	let fOnWindowResize = function() {

		servicesList.fServicesResize();

		landingPage.fLandingPageResize();

		imageCarousel.fCarouselResize();

	}

	$( window ).on( 'resize', fOnWindowResize );

}() );
