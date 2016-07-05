
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

 //let servicesContainer = $(".servicesContainer");
 //let servicesContainerId = $("#servicesContainerId");
 let servicesMainContainerId = $("#servicesMainContainerId");

const fServicesListAjax = () => {
  let promise = $.get("./js/json/servicesList.json");
  promise.then(function(data) {
    let jx = 0;
    let ji = 0;
    for (let services of data.ServicesListContent) {
        /*----- Services Title -----*/
        createDiv.fCreateTag("div", "servicesContainer", "servicesContainerClass", jx, servicesMainContainerId);
        //let servicesContainerId = $("#servicesContainer" + "Id_" + jx);
        let servicesContainerId = document.getElementById("servicesContainer" + "Id_" + jx);
        servicesContainerId.innerHTML = services.introTitle;
        console.log("services.introTitle: ",services.introTitle);

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

        // let ul = document.createElement('ul');
        // ul.className = "servicesULClass";
        //  $(ul).appendTo(servicesMainContainerId); //servicesMainContainerId servicesContainerId

         createDiv.fCreateTag("UL", "servicesUL", "servicesULClass", jx, servicesMainContainerId);
         let servicesULId = $("#servicesUL" + "Id_" + jx);
         let servicesULIdHeight = servicesULId.height()
         console.log("servicesULIdHeight: ",servicesULIdHeight);
        //  servicesULId.css({
        //      "height" :
        //  })

        for (let servicesList of services.servicesList){
            ji++;
            // createDiv.fCreateTag("div", "servicesList", "servicesListClass", ji, servicesListContainerId);
            // let servicesListId = document.getElementById("servicesListId_" + ji);
            // //let servicesListId = $("#servicesListId_" + ji);
            // servicesListId.innerHTML = servicesList.services;
            // console.log("servicesListId: ",servicesListId);
            // console.log("servicesList.services: ",servicesList.services);

            let li = document.createElement('li');
            $(li).appendTo(servicesULId);
            li.innerHTML=li.innerHTML + servicesList.services;

            // servicesListId.css({
            //     "height" : "20px",
            //     "border" : "1px solid Red"
            // })
        }
    }
  })
}

/**-----------=====| EXPORTS |=====-----------**/
module.exports.fServicesListAjax = fServicesListAjax;


}());
