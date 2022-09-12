/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayHome)\n/* harmony export */ });\nfunction displayHome() {\n    const content = document.getElementById(\"content\");\n    const homeTitle = document.createElement(\"div\")\n    homeTitle.classList.add(\"homeTitle\")\n    homeTitle.textContent = \"Hoppy Cafe\"\n\n    const homeSummary = document.createElement(\"div\")\n    homeSummary.classList.add(\"homeSummary\")\n    homeSummary.textContent = \"At Black Rabbit Cafe, we are all about getting people together and enjoying each other’s company. We believe that what we do can weave a fabric of positive relationships and experiences. The best way to earn our guests’ trust and loyalty is by showing what we believe in every day. That means we have to know what we stand for and act in a way that supports it. \"\n\n    const homeOpening = document.createElement(\"div\")\n    homeOpening.classList.add(\"homeOpening\")\n    const homeOpeningTitle = document.createElement('h3')\n    homeOpeningTitle.textContent = \"Hours\"\n    const homeOpeningList = document.createElement(\"ul\")\n    const monday = document.createElement(\"li\")\n    monday.textContent = \"Monday - 7.30 am – 4.00 pm\"\n    const tuesday = document.createElement(\"li\")\n    tuesday.textContent = \"Tuesday - 7.30 am – 4.00 pm\"\n    const wednesday = document.createElement(\"li\")\n    wednesday.textContent = \"Wednesday - 7.30 am – 4.00 pm\"\n    const thursday = document.createElement(\"li\")\n    thursday.textContent = \"Thursday - 7.30 am – 4.00 pm\"\n    const friday = document.createElement(\"li\")\n    friday.textContent = \"Friday - 7.30 am – 4.00 pm\"\n    const saturday = document.createElement(\"li\")\n    saturday.textContent = \"Saturday - 9.00 am – 5.00 pm\"\n    const sunday = document.createElement(\"li\")\n    sunday.textContent = \"Sunday - 9.00 am – 5.00 pm\"\n    homeOpeningList.append(monday, tuesday, wednesday, thursday, friday, saturday, sunday)\n    homeOpening.append(homeOpeningTitle, homeOpeningList)\n\n\n    const homeLocation = document.createElement(\"div\")\n    homeLocation.classList.add(\"homeLocation\")\n    const homeLocationTitle = document.createElement(\"h3\")\n    homeLocationTitle.textContent = \"Location\"\n    const homeLocationInfo = document.createElement(\"p\")\n    homeLocationInfo.textContent = \"308 Old Brompton Road, Kensington, London, SW5 9JF\"\n    homeLocation.append(homeLocationTitle, homeLocationInfo)\n\n    content.append(homeTitle, homeSummary, homeOpening, homeLocation)\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/home.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;