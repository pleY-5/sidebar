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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/app.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/app.jsx":
/*!************************!*\
  !*** ./client/app.jsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log('This is connected');\n\nvar store = __webpack_require__(/*! ./store */ \"./client/store/index.js\");\n\nvar _ReactRedux = ReactRedux,\n    Provider = _ReactRedux.Provider;\n\nvar Sidebar = function Sidebar() {\n  return React.createElement(\"h1\", null, \"Hello World\");\n};\n\nReactDOM.render(React.createElement(Provider, {\n  store: store\n}, React.createElement(Sidebar, null)), document.getElementById('sidebar'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvYXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9hcHAuanN4PzJjNTUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ1RoaXMgaXMgY29ubmVjdGVkJyk7XG5jb25zdCBzdG9yZSA9IHJlcXVpcmUoJy4vc3RvcmUnKTtcbmNvbnN0IHsgUHJvdmlkZXIgfSA9IFJlYWN0UmVkdXg7XG5cbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XG4gIFxuICByZXR1cm4gKFxuICAgIDxoMT5IZWxsbyBXb3JsZDwvaDE+XG4gICk7XG59O1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxTaWRlYmFyIC8+XG4gIDwvUHJvdmlkZXI+LCBcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXInKVxuKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/app.jsx\n");

/***/ }),

/***/ "./client/store/index.js":
/*!*******************************!*\
  !*** ./client/store/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const store = {};\n\nmodule.exports = store;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3RvcmUvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RvcmUvaW5kZXguanM/ZTVlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdG9yZSA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/store/index.js\n");

/***/ })

/******/ });