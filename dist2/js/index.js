"use strict";

/***********************************************
* Project: Webpack Language-Babel Sass Template
* Developer: rolandolloyd@gmail.com
* Copyright © 2015 GonzalesDesign
* Platform: ES2015, Webpack, Babel & Sass
* Module: Index
***********************************************/

(function () {
  /*IIFE:Immediately-Invoked Function Expression*/
  "use strict";

  /**-----------=====| DOM CACHING |=====-----------**/

  var mainContainer = $(".mainContainer");
  var landingPageContainer = $(".landingPageContainer");
  var menuNavClass = $(".menuNavClass");
  var menuNavClassId = $("#menuNavClassId");
  var landingPageDescriptionId = $("#landingPageDescriptionId");

  /**-----------=====| IMPORT | REQUIRE |=====-----------**/
  /** DESCRIPTIONS:
   ** FILES IMPORTED FROM OTHER JS FILES
   ** SEPERATE JS FILES FOR EASIER READABILITY AND MAINTENANCE
   **----------------------------------------------------------------**/
  var createElem = require('./CreateElementClass.es6');
  var createDiv = new createElem.CreateElementAny();

  var servicesList = require('./servicesList.es6');

  var fLandingPageAjax = function fLandingPageAjax() {
    var promise = $.get("./js/json/landingPage.json");
    promise.then(function (data) {
      var jx = 0;
      var ji = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data.LandingPageContent[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var introData = _step.value;

          createDiv.fCreateTag("div", "menuNavContainer", "menuNavContainerClass", jx, menuNavClass);
          var menuNavContainerId = document.getElementById("menuNavContainer" + "Id_" + jx);

          /**-----| Menu Navigation |-----**/
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = introData.mainMenuNavs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var menus = _step2.value;

              ji++;
              console.log("menus.menu: ", menus.menu);
              createDiv.fCreateTag("div", "menuNav", "menuNavClass", ji, menuNavContainerId);
              var menuNavId = document.getElementById("menuNav" + "Id_" + ji);
              menuNavId.innerHTML = menus.menu;
            }

            /**-----| Landing Page Description |-----**/
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          createDiv.fCreateTag("div", "landingPage", "landingPageClass", jx, landingPageDescriptionId);
          var landingPageId = document.getElementById("landingPage" + "Id_" + jx);
          //let x = $("#landingPage" + "Id_" + jx);
          var strng = introData.landingPageDescription;
          var subStrng = strng.substr(0, 700);
          landingPageId.innerHTML = subStrng;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });
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

  var containerId = $("#containerId");

  containerId.css({
    //"width" : "auto",
    //"height" : "200px",
    //"border" : "1px solid Cyan"
  });
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

  var fIntroAjax = function fIntroAjax() {
    var promise = $.get("./js/json/contentData.json");
    promise.then(function (data) {
      var jx = 0;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = data.GDSiteIntro[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var introData = _step3.value;

          var container = $(".container");
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
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    });
  };
  /**----------===| INVOKE FUNCTION |===----------**/
  //fIntroAjax();

  /**----------===| Invoke fServicesListAjax function from servicesList.es6 |===----------**/
  servicesList.fServicesListAjax();
})();
