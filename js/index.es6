
/***********************************************
* Project: Webpack Language-Babel Sass Template
* Developer: rolandolloyd@gmail.com
* Copyright © 2015 GonzalesDesign
* Platform: ES2015, Webpack, Babel & Sass
* Module: Index
***********************************************/

(function() { /*IIFE:Immediately-Invoked Function Expression*/
  "use strict";

/**-----------=====| DOM CACHING |=====-----------**/
let mainContainer = $(".mainContainer");
let landingPageContainer = $(".landingPageContainer");
let menuNavClass = $(".menuNavClass");
let menuNavClassId = $("#menuNavClassId");
let landingPageDescriptionId = $("#landingPageDescriptionId")

/**-----------=====| IMPORT | REQUIRE |=====-----------**/
 /** DESCRIPTIONS:
  ** FILES IMPORTED FROM OTHER JS FILES
  ** SEPERATE JS FILES FOR EASIER READABILITY AND MAINTENANCE
  **----------------------------------------------------------------**/
 const createElem = require('./CreateElementClass.es6');
 let createDiv = new createElem.CreateElementAny();

const servicesList = require('./servicesList.es6');

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

 fLandingPageAjax();

    // const twoKolumns = require('./twoColumns');
    // let oneThirdTest = new twoKolumns.ThreeColumnsClass();
    // oneThirdTest.fThreeColumns(gdContainerWidth);

 console.log("mainContainer: ", mainContainer);
 console.log("createElem: ", createElem);

//let require = require(".require");
/**----------=====| anim |=====----------**/
//const TweenMax = require('gsap');
  // const anim = require('./animationFunctions');
  //
  // const animationFunctions = "animationFunctions";
  // console.log("animationFunctions: ", animationFunctions);

  let containerId = $("#containerId");


  containerId.css({
      //"width" : "auto",
      //"height" : "200px",
      //"border" : "1px solid Cyan"
  })
  //anim.fAnimateHeightWidth(containerId, "auto", 500, 1);

/**----------=====| CreateElementAny Class |=====----------**/
/** Description:
** Class template for creating basic "a" tag.
***********************/
// class CreateElementAny {
//     constructor() {}
//
//     /** Generic method for creating a tag element **/
//     fCreateTag(tagType, className, title, counter, appendedTo) {
//       let divName = document.createElement(tagType);
//       divName.id = title + "Id_" + counter; //set id
//       divName.className = className; //title + "Class";
//       //divName.href = "#modalCarousel";
//       //let divNameId     = $ ("#" + title + "Id_" + counter); //get id
//       $(divName).appendTo(appendedTo);
//       let tagId = $("#"+title + "Id_" + counter); //set id
//       tagId.css({
//           "width" : "400px",
//           "height" : "auto",
//           "border" : "1px solid Grey"
//       })
//     }
// };
// let container = $(".container");
// let createElemAny = new CreateElementAny();
// createElemAny.fCreateTag("div", "className", "title", 1, container)
//
//  let titleXId = $("#title" + "Id_" + 1); //set id
//  createElemAny.fCreateTag("p", "paragClass", "parag", 1, titleXId);
//  //let paragClass = $(".paragClass");
//  //let x = $("#parag" + "Id_" + 1); //set id
//  //let x = $("#paragId_1"); //set id
//  //console.log("paragId: ", paragId);
//  //var x = document.getElementById('paragId_1');
//  let x = document.getElementById("parag" + "Id_" + 1);
//  x.innerHTML = "<h2>Some test text goes here!</h2>";
 //console.log("Running webpack-dev-serverX");

 const fIntroAjax = () => {
   let promise = $.get("./js/json/contentData.json");
   promise.then(function(data) {
     let jx = 0;
     for (let introData of data.GDSiteIntro) {
         let container = $(".container");
        //  let createElemAny = new CreateElementAny();
        //  createElemAny.fCreateTag("div", "className", "title", jx, mainContainer)

        //   let titleXId = $("#title" + "Id_" + jx); //set id
        //   createElemAny.fCreateTag("p", "paragClass", "parag", jx, titleXId);
        //let paragClass = $(".paragClass");
        //let x = $("#parag" + "Id_" + jx); //set id
        //let x = $("#paragId_jx"); //set id
        //console.log("paragId: ", paragId);
        //var x = document.getElementById('paragId_jx');
        //   let x = document.getElementById("parag" + "Id_" + jx);
        //   //console.log("x: ", x);
        //   let strng = introData.codingThisSite;
        //   let subStrng = strng.substr(0, 150);
        //   x.innerHTML = subStrng + " ...more";
     }
   })
 }
 /**----------===| INVOKE FUNCTION |===----------**/
 //fIntroAjax();

/**----------===| Invoke fServicesListAjax function from servicesList.es6 |===----------**/
servicesList.fServicesListAjax();

}());
