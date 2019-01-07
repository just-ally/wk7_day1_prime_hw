/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const FormView = __webpack_require__(/*! ./views/form_view.js */ \"./src/views/form_view.js\");\nconst PrimeChecker = __webpack_require__(/*! ./models/prime_checker.js */ \"./src/models/prime_checker.js\");\nconst ResultView = __webpack_require__(/*! ./views/result_view.js */ \"./src/views/result_view.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('JavaScript Loaded');\n\n  const resultView = new ResultView();\n  resultView.bindEvents();\n\n  const primeChecker = new PrimeChecker();\n  primeChecker.bindEvents();\n\n  const formView = new FormView();\n  formView.bindEvents();\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function(channel, payload){\n    console.log(`published on ${channel}, payload: ${payload}`);\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n  subscribe: function(channel, callback){\n    console.log(`subscribed to channel: ${channel}`);\n    document.addEventListener(channel, callback)\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/models/prime_checker.js":
/*!*************************************!*\
  !*** ./src/models/prime_checker.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\")\n\nconst PrimeChecker = function(){\n\n};\n\nPrimeChecker.prototype.bindEvents = function(){\n  PubSub.subscribe('FormView:number-submitted', (event) => {\n    const inputtedNumber = event.detail;\n    const result = this.numberIsPrime(inputtedNumber);\n    PubSub.publish('PrimeChecker:result-checked', result);\n  });\n}\n\nPrimeChecker.prototype.numberIsPrime = function (number) {\n  if (number <= 1) {\n    return false;\n  }\n  for (let i = 2; i < number; i++) {\n    if (number % i === 0) {\n        return false;\n    }\n  }\n  return true;\n};\n\nmodule.exports = PrimeChecker;\n\n\n//# sourceURL=webpack:///./src/models/prime_checker.js?");

/***/ }),

/***/ "./src/views/form_view.js":
/*!********************************!*\
  !*** ./src/views/form_view.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst FormView = function() {\n\n};\n\nFormView.prototype.bindEvents = function(){\n  const form = document.querySelector('#prime-checker-form');\n  form.addEventListener('submit', (event) => {\n    event.preventDefault();\n    const inputtedNumber = event.target.number.value;\n    PubSub.publish('FormView:number-submitted', inputtedNumber)\n  });\n}\n\nmodule.exports = FormView;\n\n\n//# sourceURL=webpack:///./src/views/form_view.js?");

/***/ }),

/***/ "./src/views/result_view.js":
/*!**********************************!*\
  !*** ./src/views/result_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\")\n\nconst ResultView = function(){\n\n};\n\nResultView.prototype.bindEvents = function(){\n  PubSub.subscribe('PrimeChecker:result-checked', (event) => {\n    const checkedNumber = event.detail;\n    this.displayResult(checkedNumber)\n  });\n}\n\nResultView.prototype.displayResult = function(result){\n  const resultElement = document.querySelector('#result');\n  resultElement.textContent = `Is your number a prime number? ${result}!`;\n}\n\nmodule.exports = ResultView;\n\n\n//# sourceURL=webpack:///./src/views/result_view.js?");

/***/ })

/******/ });