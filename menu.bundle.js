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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayMenu)\n/* harmony export */ });\nfunction displayMenu() {\n    const content = document.getElementById(\"content\");\n    const menuTitle = document.createElement(\"div\")\n    menuTitle.textContent = \"Menu\"\n\n    const menuItems = [];\n\n    const tea = {name:\"Tea\", info:\"A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right\", cost:\"$2\", type:\"drink\"}\n    const bearyTea = {name:\"Beary Tea\", info:\"A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.\", cost:\"$3\", type:\"drink\"}\n    const toast = {name:\"Toast and Jam\", info:\"A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.\", cost:\"$1\", type:\"side\"}\n    const fruit = {name:\"Fresh Fruit\", info:\"A small bowl of fresh fruit, whatever we find at the market for the day.\", cost:\"$3\", type:\"side\"}\n    const pancake = {name:\"Pancakes\", info:\"A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.\", cost:\"$4\", type:\"main\"}\n    const french = {name:\"French Toast\", info:\"Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.\", cost:\"$5\", type:\"main\"}\n    const vegSand = {name:\"Veggie Sandwich\", info:\"Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.\", cost:\"$8\", type:\"main\"}\n    const blt = {name:\"BLT\", info:\"Interested in the Beary Veggie Sandwich but also love bacon? Say no more.\", cost:\"$6\", type:\"main\"}\n\n    menuItems.push(tea, bearyTea, toast, fruit, pancake, french, vegSand, blt)\n    console.log(menuItems[0].name)\n\n    const drinksTitle = document.createElement(\"div\")\n    drinksTitle.textContent = \"Drinks\"\n    for (let i = 0; i < menuItems.length; i++) {\n        if (menuItems[i].type == \"drink\") {\n            const tempDrink = document.createElement('div');\n            tempDrink.classList.add(menuItems[i].type);\n            const tempDrinkTitle = document.createElement('h3');\n            tempDrinkTitle.textContent = menuItems[i].name;\n            const tempDrinkInfo = document.createElement('p');\n            tempDrinkInfo.textContent = menuItems[i].info;\n            const tempDrinkCost = document.createElement(\"h4\")\n            tempDrinkCost.textContent = menuItems[i].cost\n            tempDrink.append(tempDrinkTitle, tempDrinkInfo, tempDrinkCost)\n            drinksTitle.append(tempDrink)\n        }\n    }\n\n    const sidesTitle = document.createElement(\"div\")\n    sidesTitle.textContent = \"Sides\"\n    for (let i = 0; i < menuItems.length; i++) {\n        if (menuItems[i].type == \"side\") {\n            const tempSide = document.createElement('div');\n            tempSide.classList.add(menuItems[i].type);\n            const tempSideTitle = document.createElement('h3');\n            tempSideTitle.textContent = menuItems[i].name;\n            const tempSideInfo = document.createElement('p');\n            tempSideInfo.textContent = menuItems[i].info;\n            const tempSideCost = document.createElement(\"h4\")\n            tempSideCost.textContent = menuItems[i].cost\n            tempSide.append(tempSideTitle, tempSideInfo, tempSideCost)\n            sidesTitle.append(tempSide)\n        }\n    }\n    const mainsTitle = document.createElement(\"div\")\n    mainsTitle.textContent = \"Mains\"\n    for (let i = 0; i < menuItems.length; i++) {\n        if (menuItems[i].type == \"main\") {\n            const tempMains = document.createElement('div');\n            tempMains.classList.add(menuItems[i].type);\n            const tempMainsTitle = document.createElement('h3');\n            tempMainsTitle.textContent = menuItems[i].name;\n            const tempMainsInfo = document.createElement('p');\n            tempMainsInfo.textContent = menuItems[i].info;\n            const tempMainsCost = document.createElement(\"h4\")\n            tempMainsCost.textContent = menuItems[i].cost\n            tempMains.append(tempMainsTitle, tempMainsInfo, tempMainsCost)\n            mainsTitle.append(tempMains)\n        }\n    }\n    content.append(menuTitle, drinksTitle, sidesTitle, mainsTitle)\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 	__webpack_modules__["./src/menu.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;