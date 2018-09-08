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

eval("console.log('This is connected');\nvar _ReactRedux = ReactRedux,\n    Provider = _ReactRedux.Provider;\n\nvar store = __webpack_require__(/*! ./store */ \"./client/store/index.js\");\n\nvar Sidebar = __webpack_require__(/*! ./component/Sidebar.jsx */ \"./client/component/Sidebar.jsx\");\n\nReactDOM.render(React.createElement(Provider, {\n  store: store\n}, React.createElement(Sidebar, null)), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvQXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9BcHAuanN4PzMyYmUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ1RoaXMgaXMgY29ubmVjdGVkJyk7XG5jb25zdCB7IFByb3ZpZGVyIH0gPSBSZWFjdFJlZHV4O1xuY29uc3Qgc3RvcmUgPSByZXF1aXJlKCcuL3N0b3JlJyk7XG5jb25zdCBTaWRlYmFyID0gcmVxdWlyZSgnLi9jb21wb25lbnQvU2lkZWJhci5qc3gnKTtcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8U2lkZWJhci8+XG4gIDwvUHJvdmlkZXI+LCBcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/App.jsx\n");

/***/ }),

/***/ "./client/action/getRestarauntData.js":
/*!********************************************!*\
  !*** ./client/action/getRestarauntData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const fetchSuccess = (data) => ({\n  type: 'GET_DATA',\n  data\n});\n\nconst fetchData = (url) => {\n  return dispatch => {\n    fetch(url)\n      .then(response => response.json())\n      .then(data => dispatch(fetchSuccess(data[0])))\n      .catch(err => console.log(err));\n  }\n};\n\nmodule.exports = {\n  fetchData\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvYWN0aW9uL2dldFJlc3RhcmF1bnREYXRhLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L2FjdGlvbi9nZXRSZXN0YXJhdW50RGF0YS5qcz80NmIzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZldGNoU3VjY2VzcyA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiAnR0VUX0RBVEEnLFxuICBkYXRhXG59KTtcblxuY29uc3QgZmV0Y2hEYXRhID0gKHVybCkgPT4ge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGZldGNoKHVybClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4gZGlzcGF0Y2goZmV0Y2hTdWNjZXNzKGRhdGFbMF0pKSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBmZXRjaERhdGFcbn07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/action/getRestarauntData.js\n");

/***/ }),

/***/ "./client/component/Reservation.jsx":
/*!******************************************!*\
  !*** ./client/component/Reservation.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\nvar months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\nvar timeConversion = {\n  ':30': 0.5,\n  ':00': 0\n};\n\nvar Reservation = function Reservation(_ref) {\n  var restaurantData = _ref.restaurantData;\n  var currDate = new Date();\n  var dateString = \"\".concat(days[currDate.getDay()], \", \").concat(months[currDate.getMonth()], \" \").concat(currDate.getDate(), \", \").concat(currDate.getFullYear());\n  var hoursOfOperation = [];\n\n  if (restaurantData.name !== undefined) {\n    var openCloseTimes = restaurantData[days[currDate.getDay()]].split(/ - |, /g);\n    console.log(openCloseTimes);\n\n    for (var i = 0; i < openCloseTimes.length; i += 2) {\n      var openTime = openCloseTimes[i];\n      var closeTime = openCloseTimes[i + 1];\n    }\n  }\n\n  return React.createElement(\"label\", null, React.createElement(\"div\", {\n    className: \"reservation\"\n  }, \"Make a Reservation\"), React.createElement(\"br\", null), React.createElement(\"select\", null, React.createElement(\"option\", {\n    value: \"date\"\n  }, dateString)), React.createElement(\"br\", null), React.createElement(\"select\", null), React.createElement(\"select\", null, React.createElement(\"option\", {\n    value: \"one\"\n  }, \"1 Person\"), React.createElement(\"option\", {\n    defaultValue: \"two\"\n  }, \"2 People\"), React.createElement(\"option\", {\n    value: \"three\"\n  }, \"3 People\"), React.createElement(\"option\", {\n    value: \"four\"\n  }, \"4 People\"), React.createElement(\"option\", {\n    value: \"five\"\n  }, \"5 People\")), React.createElement(\"br\", null), React.createElement(\"input\", {\n    type: \"submit\",\n    value: \"Find a Table\",\n    onClick: function onClick(e) {\n      return e.preventDefault();\n    }\n  }));\n};\n\nmodule.exports = Reservation;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvY29tcG9uZW50L1Jlc2VydmF0aW9uLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnQvUmVzZXJ2YXRpb24uanN4PzFmZDkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGF5cyA9IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXTtcbmNvbnN0IG1vbnRocyA9IFsnSmFudWFyeScsICdGZWJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XG5jb25zdCB0aW1lQ29udmVyc2lvbiA9IHtcbiAgJzozMCc6IDAuNSxcbiAgJzowMCc6IDBcbn1cblxuY29uc3QgUmVzZXJ2YXRpb24gPSAoeyByZXN0YXVyYW50RGF0YSB9KSA9PiB7XG4gIGxldCBjdXJyRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGxldCBkYXRlU3RyaW5nID0gYCR7ZGF5c1tjdXJyRGF0ZS5nZXREYXkoKV19LCAke21vbnRoc1tjdXJyRGF0ZS5nZXRNb250aCgpXX0gJHtjdXJyRGF0ZS5nZXREYXRlKCl9LCAke2N1cnJEYXRlLmdldEZ1bGxZZWFyKCl9YDtcbiAgbGV0IGhvdXJzT2ZPcGVyYXRpb24gPSBbXTtcbiAgaWYgKHJlc3RhdXJhbnREYXRhLm5hbWUgIT09IHVuZGVmaW5lZCkgeyBcbiAgICBsZXQgb3BlbkNsb3NlVGltZXMgPSByZXN0YXVyYW50RGF0YVtkYXlzW2N1cnJEYXRlLmdldERheSgpXV0uc3BsaXQoLyAtIHwsIC9nKTtcbiAgICBjb25zb2xlLmxvZyhvcGVuQ2xvc2VUaW1lcylcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wZW5DbG9zZVRpbWVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICBsZXQgb3BlblRpbWUgPSBvcGVuQ2xvc2VUaW1lc1tpXVxuICAgICAgbGV0IGNsb3NlVGltZSA9IG9wZW5DbG9zZVRpbWVzW2kgKyAxXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGxhYmVsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Jlc2VydmF0aW9uJz5NYWtlIGEgUmVzZXJ2YXRpb248L2Rpdj48YnIvPlxuICAgICAgPHNlbGVjdD5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT0nZGF0ZSc+e2RhdGVTdHJpbmd9PC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD48YnIvPlxuICAgICAgPHNlbGVjdD5cblxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8c2VsZWN0PlxuICAgICAgICA8b3B0aW9uIHZhbHVlPSdvbmUnPjEgUGVyc29uPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPSd0d28nPjIgUGVvcGxlPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9J3RocmVlJz4zIFBlb3BsZTwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPSdmb3VyJz40IFBlb3BsZTwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPSdmaXZlJz41IFBlb3BsZTwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+PGJyLz5cbiAgICAgIDxpbnB1dCB0eXBlPSdzdWJtaXQnIHZhbHVlPSdGaW5kIGEgVGFibGUnIG9uQ2xpY2s9e2UgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT48L2lucHV0PlxuICAgIDwvbGFiZWw+XG4gICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVzZXJ2YXRpb247Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/component/Reservation.jsx\n");

/***/ }),

/***/ "./client/component/Sidebar.jsx":
/*!**************************************!*\
  !*** ./client/component/Sidebar.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar _require = __webpack_require__(/*! ../action/getRestarauntData.js */ \"./client/action/getRestarauntData.js\"),\n    fetchData = _require.fetchData;\n\nvar store = __webpack_require__(/*! ../store */ \"./client/store/index.js\");\n\nvar ReservationContainer = __webpack_require__(/*! ../container/ReservationContainer.jsx */ \"./client/container/ReservationContainer.jsx\");\n\nvar Sidebar =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Sidebar, _React$Component);\n\n  function Sidebar() {\n    _classCallCheck(this, Sidebar);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Sidebar).apply(this, arguments));\n  }\n\n  _createClass(Sidebar, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      store.dispatch(fetchData('/restaurant?id=1'));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(ReservationContainer, null);\n    }\n  }]);\n\n  return Sidebar;\n}(React.Component);\n\n;\nmodule.exports = Sidebar;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvY29tcG9uZW50L1NpZGViYXIuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudC9TaWRlYmFyLmpzeD84Yzk2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgZmV0Y2hEYXRhIH0gPSByZXF1aXJlKCcuLi9hY3Rpb24vZ2V0UmVzdGFyYXVudERhdGEuanMnKTtcbmNvbnN0IHN0b3JlID0gcmVxdWlyZSgnLi4vc3RvcmUnKTtcbmNvbnN0IFJlc2VydmF0aW9uQ29udGFpbmVyID0gcmVxdWlyZSgnLi4vY29udGFpbmVyL1Jlc2VydmF0aW9uQ29udGFpbmVyLmpzeCcpO1xuXG5jbGFzcyBTaWRlYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc3RvcmUuZGlzcGF0Y2goZmV0Y2hEYXRhKCcvcmVzdGF1cmFudD9pZD0xJykpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVzZXJ2YXRpb25Db250YWluZXIgLz5cbiAgICApO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZGViYXI7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBR0E7Ozs7QUFUQTtBQUNBO0FBU0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/component/Sidebar.jsx\n");

/***/ }),

/***/ "./client/container/ReservationContainer.jsx":
/*!***************************************************!*\
  !*** ./client/container/ReservationContainer.jsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _ReactRedux = ReactRedux,\n    connect = _ReactRedux.connect;\n\nvar Reservation = __webpack_require__(/*! ../component/Reservation.jsx */ \"./client/component/Reservation.jsx\");\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    restaurantData: state.restaurantData\n  };\n};\n\nmodule.exports = connect(mapStateToProps)(Reservation);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvY29udGFpbmVyL1Jlc2VydmF0aW9uQ29udGFpbmVyLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXIvUmVzZXJ2YXRpb25Db250YWluZXIuanN4PzYwM2UiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjb25uZWN0IH0gPSBSZWFjdFJlZHV4O1xuY29uc3QgUmVzZXJ2YXRpb24gPSByZXF1aXJlKCcuLi9jb21wb25lbnQvUmVzZXJ2YXRpb24uanN4JylcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgcmVzdGF1cmFudERhdGE6IHN0YXRlLnJlc3RhdXJhbnREYXRhXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUmVzZXJ2YXRpb24pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/container/ReservationContainer.jsx\n");

/***/ }),

/***/ "./client/reducers/fetch.js":
/*!**********************************!*\
  !*** ./client/reducers/fetch.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const fetchSuccessReducer = (state = [], action) => {\n  if (action.type === 'GET_DATA') {\n    return action.data;\n  } else {\n    return state;\n  }\n};\n\nmodule.exports = {\n  restaurantData: fetchSuccessReducer\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvcmVkdWNlcnMvZmV0Y2guanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcmVkdWNlcnMvZmV0Y2guanM/ZjAyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmZXRjaFN1Y2Nlc3NSZWR1Y2VyID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdHRVRfREFUQScpIHtcbiAgICByZXR1cm4gYWN0aW9uLmRhdGE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcmVzdGF1cmFudERhdGE6IGZldGNoU3VjY2Vzc1JlZHVjZXJcbn07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/reducers/fetch.js\n");

/***/ }),

/***/ "./client/reducers/index.js":
/*!**********************************!*\
  !*** ./client/reducers/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { combineReducers } = Redux;\nconst { restaurantData } = __webpack_require__(/*! ./fetch.js */ \"./client/reducers/fetch.js\");\n\nconst rootRuducer = combineReducers({\n  restaurantData\n});\n\nmodule.exports = rootRuducer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvcmVkdWNlcnMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcmVkdWNlcnMvaW5kZXguanM/NmE3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNvbWJpbmVSZWR1Y2VycyB9ID0gUmVkdXg7XG5jb25zdCB7IHJlc3RhdXJhbnREYXRhIH0gPSByZXF1aXJlKCcuL2ZldGNoLmpzJyk7XG5cbmNvbnN0IHJvb3RSdWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgcmVzdGF1cmFudERhdGFcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3RSdWR1Y2VyOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/reducers/index.js\n");

/***/ }),

/***/ "./client/store/index.js":
/*!*******************************!*\
  !*** ./client/store/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { createStore, applyMiddleware } = Redux;\nconst rootReducer = __webpack_require__(/*! ../reducers */ \"./client/reducers/index.js\");\n\nconst store = createStore(rootReducer, applyMiddleware(ReduxThunk.default));\n\nmodule.exports = store;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3RvcmUvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RvcmUvaW5kZXguanM/ZTVlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSA9IFJlZHV4O1xuY29uc3Qgcm9vdFJlZHVjZXIgPSByZXF1aXJlKCcuLi9yZWR1Y2VycycpO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBhcHBseU1pZGRsZXdhcmUoUmVkdXhUaHVuay5kZWZhdWx0KSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmU7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/store/index.js\n");

/***/ })

/******/ });