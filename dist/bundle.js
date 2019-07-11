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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/movie/index.js":
/*!******************************************!*\
  !*** ./src/js/components/movie/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return movie; });\nfunction movie(data) {\n  const readyData = mapData(data);\n  const html = `\n    <article class=\"movie\">\n    <h2>${readyData.title}</h2>\n    <!--<div class=\"poster\"> </div>-->\n    <div>${readyData.date}</div>\n    <!-- <div>{readyData.genre}</div>-->\n    <div>${readyData.country}</div>\n    <div>${readyData.language}</div>\n    <div>${readyData.vote}</div>\n    <div>${readyData.description}</div>\n    </article>\n    `;\n  return html;\n}\n\nfunction mapData(data) {\n  return {\n    title: data.title || data.name || data.original_title || data.original_name,\n    poster: \"\",\n    date: data.release_date || data.first_air_date,\n    country: data.origin_country || data.original_language,\n    language: data.original_language,\n    vote: data.vote_average,\n    description: data.overview\n  };\n}\n\n//# sourceURL=webpack:///./src/js/components/movie/index.js?");

/***/ }),

/***/ "./src/js/components/movielist/index.js":
/*!**********************************************!*\
  !*** ./src/js/components/movielist/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MovieList; });\n/* harmony import */ var _movie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../movie */ \"./src/js/components/movie/index.js\");\n\nclass MovieList {\n  constructor(data) {\n    this.data = data;\n  }\n\n  toDOM(selector) {\n    selector.innerHTML = this.movieList;\n  }\n\n  renderMovies() {\n    this.fragment = document.createDocumentFragment();\n    data.forEach(data => {\n      this.fragment.appendChild(Object(_movie__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data));\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/components/movielist/index.js?");

/***/ }),

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst API_KEY = e2f733e22ca6685dae37cb82c4df5357;\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  searchMovieUrl: `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=`\n});\n\n//# sourceURL=webpack:///./src/js/config.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _servise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./servise.js */ \"./src/js/servise.js\");\n/* harmony import */ var _components_movielist_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/movielist/index.js */ \"./src/js/components/movielist/index.js\");\n\n\nconst input = document.querySelector('.search-input');\ninput.addEventListener('input', e => {\n  const searchText = e.target.value;\n  _servise_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getMovieByText(searchText).then(result => result.json()).then(result => console.log(result));\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/servise.js":
/*!***************************!*\
  !*** ./src/js/servise.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/js/config.js\");\n\n\nfunction getMovieByText(text) {\n  if (!text) {\n    return;\n  }\n\n  fetch(_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].searchMovieUrl + text);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getMovieByText\n});\n\n//# sourceURL=webpack:///./src/js/servise.js?");

/***/ })

/******/ });