/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["xhrHandler"] = factory();
	else
		root["xhrHandler"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/xhr.js":
/*!*************************!*\
  !*** ./src/core/xhr.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendHttpRequest\": () => (/* binding */ sendHttpRequest)\n/* harmony export */ });\n/* initialize only once so that we can keep track of a pending request */\nconst xhr = new XMLHttpRequest();\nconst sendHttpRequest = (method, url, data, successCb, errorCb) => {\n  if (xhr && xhr.readyState != 4) {\n    /* aborts the previous request if it is still pending */\n    xhr.abort();\n  }\n  /* initializes a newly-created request, or re-initializes an existing one */\n\n\n  xhr.open(method, url);\n  xhr.responseType = 'json';\n\n  if (data) {\n    xhr.setRequestHeader('Content-Type', 'application/json');\n  }\n\n  xhr.send(JSON.stringify(data));\n  /* event that fires when xhr request completes */\n\n  xhr.onload = () => {\n    if (xhr.status >= 400) {\n      errorCb && errorCb(xhr.response);\n      return xhr.response;\n    } else {\n      successCb && successCb(xhr.response);\n      return xhr.response;\n    }\n  };\n  /* event that fires when xhr request aborts */\n\n\n  xhr.onabort = () => {\n    console.log('Request aborted!');\n  };\n  /* event that fires when xhr request ends with an error */\n\n\n  xhr.onerror = () => {\n    errorCb && errorCb();\n  };\n};\n\n//# sourceURL=webpack://xhrHandler/./src/core/xhr.js?");

/***/ }),

/***/ "./src/getRequest.js":
/*!***************************!*\
  !*** ./src/getRequest.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _core_xhr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/xhr */ \"./src/core/xhr.js\");\n\n\nconst getRequest = (url, successCb, errorCb) => {\n  (0,_core_xhr__WEBPACK_IMPORTED_MODULE_0__.sendHttpRequest)('GET', url, successCb && successCb, errorCb && errorCb);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRequest);\n\n//# sourceURL=webpack://xhrHandler/./src/getRequest.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRequest\": () => (/* reexport safe */ _getRequest__WEBPACK_IMPORTED_MODULE_0__.default),\n/* harmony export */   \"postRequest\": () => (/* reexport safe */ _postRequest__WEBPACK_IMPORTED_MODULE_1__.default)\n/* harmony export */ });\n/* harmony import */ var _getRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRequest */ \"./src/getRequest.js\");\n/* harmony import */ var _postRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postRequest */ \"./src/postRequest.js\");\n\n\n\n\n//# sourceURL=webpack://xhrHandler/./src/index.js?");

/***/ }),

/***/ "./src/postRequest.js":
/*!****************************!*\
  !*** ./src/postRequest.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _core_xhr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/xhr */ \"./src/core/xhr.js\");\n\n\nconst postRequest = (url, data, successCb, errorCb) => {\n  (0,_core_xhr__WEBPACK_IMPORTED_MODULE_0__.sendHttpRequest)('POST', url, data, successCb && successCb, errorCb && errorCb);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postRequest);\n\n//# sourceURL=webpack://xhrHandler/./src/postRequest.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});