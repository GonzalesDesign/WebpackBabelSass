
/***********************************************
* Project: Webpack Language-Babel Sass Template
* Developer: rolandolloyd@gmail.com
* Copyright © 2015 GonzalesDesign
* Platform: ES2015, Webpack, Babel & Sass
* Module: Landing Page
***********************************************/

(function() { /*IIFE:Immediately-Invoked Function Expression*/
  "use strict";

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
 let landingPageContainer = $(".landingPageContainer");
 let menuNavClass = $(".menuNavClass");
 let menuNavClassId = $("#menuNavClassId");
 let landingPageDescriptionId = $("#landingPageDescriptionId")

 const fLandingPageAjax = () => {
   let promise = $.get("./js/json/landingPage.json");
   promise.then(function(data) {
     let jx = 0;
     let ji = 0;
     for (let introData of data.LandingPageContent) {
        createDiv.fCreateTag("div", "menuNavContainer", "menuNavContainerClass", jx, menuNavClass);
        let menuNavContainerId = document.getElementById("menuNavContainer" + "Id_" + jx);

        /**-----| Menu Navigation |-----**/
        for(let menus of introData.mainMenuNavs){
            ji++;
            console.log("menus.menu: ", menus.menu);
            createDiv.fCreateTag("div", "menuNav", "menuNavClass", ji, menuNavContainerId);
            let menuNavId = document.getElementById("menuNav" + "Id_" + ji);
            menuNavId.innerHTML = menus.menu;
        }

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
module.exports.fLandingPageAjax = fLandingPageAjax;
module.exports.fLandingPageAnim = fLandingPageAnim;


}());
