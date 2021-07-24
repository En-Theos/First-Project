/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/clickMenu.js":
/*!*********************************!*\
  !*** ./js/modules/clickMenu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clickMenu)
/* harmony export */ });
function clickMenu(selButton, selMenu) {
  var btnSubMenu = document.querySelector(selButton),
      subMenu = document.querySelector(selMenu);
  btnSubMenu.addEventListener('click', function () {
    subMenu.classList.toggle('active');
  });
  document.documentElement.addEventListener('click', function (event) {
    if (!(btnSubMenu.contains(event.target) || subMenu.contains(event.target))) {
      subMenu.classList.remove('active');
    }
  });
}

/***/ }),

/***/ "./js/modules/styleZero.js":
/*!*********************************!*\
  !*** ./js/modules/styleZero.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ styleZero)
/* harmony export */ });
function styleZero(parent) {
  var par = document.querySelector(parent);
  par.firstElementChild.style.marginLeft = '0';
  par.firstElementChild.style.marginTop = '0';
  par.lastElementChild.style.marginRight = '0';
  par.lastElementChild.style.marginBottom = '0';
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_clickMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/clickMenu */ "./js/modules/clickMenu.js");
/* harmony import */ var _modules_styleZero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/styleZero */ "./js/modules/styleZero.js");


document.addEventListener('DOMContentLoaded', function () {
  (0,_modules_clickMenu__WEBPACK_IMPORTED_MODULE_0__.default)('.userMenu .userIco', '.userMenu .subMenu');
  (0,_modules_styleZero__WEBPACK_IMPORTED_MODULE_1__.default)('main .lots .limit .products .sliderWindow .sliderTape');
  (0,_modules_styleZero__WEBPACK_IMPORTED_MODULE_1__.default)('main .intelligence .limit .flexBox');
  (0,_modules_styleZero__WEBPACK_IMPORTED_MODULE_1__.default)('main .additional .limit .content');
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map