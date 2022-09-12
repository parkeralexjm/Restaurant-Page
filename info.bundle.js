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

/***/ "./src/info.js":
/*!*********************!*\
  !*** ./src/info.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayInfo)\n/* harmony export */ });\nfunction displayInfo() {\n    const content = document.getElementById(\"content\");\n    const infoTitle = document.createElement(\"div\")\n    infoTitle.textContent = \"Contact Us\"\n    \n    const employees = []\n    const mama = {name:\"Mama Bunny\", role:\"Manager\", number:\"555-555-5554\", email:\"totallyRealEmail@notFake.com\"}\n    const papa = {name:\"Papa Bunny\", role:\"Chef\", number:\"555-555-5555\", email:\"perfectlyRealEmail@notFake.com\"}\n    const baby = {name:\"Baby Bunny\", role:\"Waiter\", number:\"555-555-5556\", email:\"totallyRealEmail@notFake.com\"}\n    employees.push(mama, papa, baby)\n    \n    const employeeInfo = document.createElement(\"div\")\n    for (let i = 0; i < employees.length; i++) {\n        const tempEmployee = document.createElement('div');\n        tempEmployee.classList.add(\"employee\");\n        const tempName = document.createElement('h3');\n        tempName.textContent = employees[i].name;\n        const tempRole = document.createElement('p');\n        tempRole.textContent = employees[i].role;\n        const tempNumber = document.createElement(\"p\")\n        tempNumber.textContent = employees[i].number\n        const tempEmail = document.createElement(\"p\")\n        tempEmail.textContent = employees[i].email\n        tempEmployee.append(tempName, tempRole, tempNumber, tempEmail)\n        employeeInfo.append(tempEmployee)\n    }\n\n    content.append(infoTitle, employeeInfo)\n}\n\n//# sourceURL=webpack://restaurant-page/./src/info.js?");

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
/******/ 	__webpack_modules__["./src/info.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;