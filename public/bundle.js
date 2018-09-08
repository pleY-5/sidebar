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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/App.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/App.jsx":
/*!************************!*\
  !*** ./client/App.jsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log('This is connected');\nvar _ReactRedux = ReactRedux,\n    Provider = _ReactRedux.Provider;\n\nvar _require = __webpack_require__(/*! ./store */ \"./client/store/index.js\"),\n    configureStore = _require.configureStore;\n\nvar store = configureStore();\n\nvar Sidebar = __webpack_require__(/*! ./component/Sidebar.jsx */ \"./client/component/Sidebar.jsx\");\n\nReactDOM.render(React.createElement(Provider, {\n  store: store\n}, React.createElement(Sidebar, null)), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvQXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9BcHAuanN4PzMyYmUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ1RoaXMgaXMgY29ubmVjdGVkJyk7XG5jb25zdCB7IFByb3ZpZGVyIH0gPSBSZWFjdFJlZHV4O1xuY29uc3QgeyBjb25maWd1cmVTdG9yZSB9ID0gcmVxdWlyZSgnLi9zdG9yZScpO1xuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuY29uc3QgU2lkZWJhciA9IHJlcXVpcmUoJy4vY29tcG9uZW50L1NpZGViYXIuanN4Jyk7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPFNpZGViYXIgLz5cbiAgPC9Qcm92aWRlcj4sIFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbik7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/App.jsx\n");

/***/ }),

/***/ "./client/component/Sidebar.jsx":
/*!**************************************!*\
  !*** ./client/component/Sidebar.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var Sidebar = function Sidebar() {\n  return React.createElement(\"h1\", null, \"Hello World\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvY29tcG9uZW50L1NpZGViYXIuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudC9TaWRlYmFyLmpzeD84Yzk2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XG4gIFxuICByZXR1cm4gKFxuICAgIDxoMT5IZWxsbyBXb3JsZDwvaDE+XG4gICk7XG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/component/Sidebar.jsx\n");

/***/ }),

/***/ "./client/reducers/fetch.js":
/*!**********************************!*\
  !*** ./client/reducers/fetch.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const fetchErrorReducer = (state = false, action) => {\n  if (action.type === 'FETCH_ERROR') {\n    return action.hasErrored;\n  } else {\n    return state;\n  }\n};\n\nconst loadingDataReducer = (state = false, action) => {\n  if (action.type === 'LOADING_DATA') {\n    return action.isLoading;\n  } else {\n    return state;\n  }\n};\n\nconst fetchSuccessReducer = (state = [], action) => {\n  if (action.type === 'FETCH_SUCCESS') {\n    return action.data;\n  } else {\n    return state;\n  }\n};\n\nmodule.exports = {\n  fetchErrorReducer,\n  loadingDataReducer,\n  fetchSuccessReducer\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvcmVkdWNlcnMvZmV0Y2guanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcmVkdWNlcnMvZmV0Y2guanM/ZjAyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmZXRjaEVycm9yUmVkdWNlciA9IChzdGF0ZSA9IGZhbHNlLCBhY3Rpb24pID0+IHtcbiAgaWYgKGFjdGlvbi50eXBlID09PSAnRkVUQ0hfRVJST1InKSB7XG4gICAgcmV0dXJuIGFjdGlvbi5oYXNFcnJvcmVkO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgbG9hZGluZ0RhdGFSZWR1Y2VyID0gKHN0YXRlID0gZmFsc2UsIGFjdGlvbikgPT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdMT0FESU5HX0RBVEEnKSB7XG4gICAgcmV0dXJuIGFjdGlvbi5pc0xvYWRpbmc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCBmZXRjaFN1Y2Nlc3NSZWR1Y2VyID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdGRVRDSF9TVUNDRVNTJykge1xuICAgIHJldHVybiBhY3Rpb24uZGF0YTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBmZXRjaEVycm9yUmVkdWNlcixcbiAgbG9hZGluZ0RhdGFSZWR1Y2VyLFxuICBmZXRjaFN1Y2Nlc3NSZWR1Y2VyXG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/reducers/fetch.js\n");

/***/ }),

/***/ "./client/reducers/index.js":
/*!**********************************!*\
  !*** ./client/reducers/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { combineReducers } = Redux;\nconst { fetchErrorReducer, loadingDataReducer, fetchSuccessReducer } = __webpack_require__(/*! ./fetch.js */ \"./client/reducers/fetch.js\");\n\nconst rootRuducer = combineReducers({\n  fetchErrorReducer,\n  loadingDataReducer,\n  fetchSuccessReducer\n});\n\nmodule.exports = rootRuducer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvcmVkdWNlcnMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcmVkdWNlcnMvaW5kZXguanM/NmE3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNvbWJpbmVSZWR1Y2VycyB9ID0gUmVkdXg7XG5jb25zdCB7IGZldGNoRXJyb3JSZWR1Y2VyLCBsb2FkaW5nRGF0YVJlZHVjZXIsIGZldGNoU3VjY2Vzc1JlZHVjZXIgfSA9IHJlcXVpcmUoJy4vZmV0Y2guanMnKTtcblxuY29uc3Qgcm9vdFJ1ZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBmZXRjaEVycm9yUmVkdWNlcixcbiAgbG9hZGluZ0RhdGFSZWR1Y2VyLFxuICBmZXRjaFN1Y2Nlc3NSZWR1Y2VyXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290UnVkdWNlcjsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/reducers/index.js\n");

/***/ }),

/***/ "./client/store/index.js":
/*!*******************************!*\
  !*** ./client/store/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { createStore, applyMiddleware } = Redux;\nconst thunk = ReduxThunk;\nconst rootReducer = __webpack_require__(/*! ./../reducers */ \"./client/reducers/index.js\");\n\nconst configureStore = (initialState) => {\n  return createStore(\n    rootReducer,\n    initialState,\n    applyMiddleware(thunk)\n  );\n};\n\nmodule.exports = configureStore;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3RvcmUvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RvcmUvaW5kZXguanM/ZTVlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSA9IFJlZHV4O1xuY29uc3QgdGh1bmsgPSBSZWR1eFRodW5rO1xuY29uc3Qgcm9vdFJlZHVjZXIgPSByZXF1aXJlKCcuLy4uL3JlZHVjZXJzJyk7XG5cbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKGluaXRpYWxTdGF0ZSkgPT4ge1xuICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgcm9vdFJlZHVjZXIsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuaylcbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29uZmlndXJlU3RvcmU7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/store/index.js\n");

/***/ })

/******/ });