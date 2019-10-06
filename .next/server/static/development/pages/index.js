module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Room.js":
/*!****************************!*\
  !*** ./components/Room.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Room extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleAdultChange", event => {
      const {
        roomNumber,
        checked
      } = this.props;
      let selectedValue = event.target.value;
      this.setState({
        selectedAdult: selectedValue
      }, () => {
        this.props.updateAdults({
          selectedValue,
          roomNumber,
          checked,
          childern: this.props.childernCount
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleChildernChange", event => {
      const {
        roomNumber,
        checked
      } = this.props;
      let selectedValue = event.target.value;
      this.setState({
        selectedChildern: selectedValue
      }, () => {
        this.props.updateChildern({
          selectedValue,
          roomNumber,
          checked,
          adult: this.props.adultCount
        });
      });
    });

    this.state = {
      selectedAdult: props.adultCount,
      selectedChildern: props.childernCount
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.adultCount != this.props.adultCount || prevProps.childernCount != this.props.childernCount) {
      this.setState(state => {
        return {
          selectedAdult: this.props.adultCount,
          selectedChildern: this.props.childernCount
        };
      }, state => {
        console.log("done", this.state);
      });
    }
  }

  render() {
    const {
      checked,
      roomNumber
    } = this.props;
    const {
      selectedAdult,
      selectedChildern
    } = this.state;
    return __jsx("div", {
      style: {
        backgroundColor: "#dddddd"
      }
    }, __jsx("div", {
      className: "col-md-12",
      style: {
        backgroundColor: '#ddd',
        margin: '10px',
        padding: '10px'
      }
    }, __jsx("div", {
      className: "text-left col-md-6"
    }, __jsx("p", null, "Room ", roomNumber)), __jsx("div", {
      className: "text-right col-md-6"
    }, roomNumber != 1 && __jsx("input", {
      type: "checkbox",
      checked: checked,
      value: checked,
      onChange: () => this.props.handleChange(roomNumber, checked)
    }))), __jsx("div", {
      className: "col-md-12"
    }, __jsx("div", {
      className: "col-md-6 text-center"
    }, __jsx("h4", null, "Adults (18+)"), __jsx("div", {
      className: "form-group"
    }, __jsx("select", {
      value: selectedAdult,
      className: "form-control",
      id: "Adults",
      disabled: !checked,
      onChange: this.handleAdultChange
    }, __jsx("option", {
      value: 1
    }, "1"), __jsx("option", {
      value: 2
    }, "2")))), __jsx("div", {
      className: "col-md-6 text-center"
    }, __jsx("h4", null, "Childern ", __jsx("br", null), "(0-17)"), __jsx("div", {
      className: "form-group"
    }, __jsx("select", {
      value: selectedChildern,
      className: "form-control",
      id: "Childern",
      disabled: !checked,
      onChange: this.handleChildernChange
    }, __jsx("option", {
      value: 0
    }, "0"), __jsx("option", {
      value: 1
    }, "1"), __jsx("option", {
      value: 2
    }, "2"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Room);

/***/ }),

/***/ "./layouts/MyLayout.js":
/*!*****************************!*\
  !*** ./layouts/MyLayout.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const layoutStyle = {
  margin: 20,
  padding: 20
};

const Layout = props => __jsx("div", {
  style: layoutStyle
}, props.children);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Room__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Room */ "./components/Room.js");
/* harmony import */ var _layouts_MyLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/MyLayout */ "./layouts/MyLayout.js");
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/Head */ "next/Head");
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_Head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






class Main extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor() {
    super();

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "componentDidMount", async () => {
      const res = await axios__WEBPACK_IMPORTED_MODULE_7___default.a.get('http://localhost:4000/data');

      if (res.data.length != 0) {
        this.setState(state => {
          return {
            rooms: res.data
          };
        }, state => {
          console.log("done", this.state);
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleChecked", (roomNumber, checked) => {
      if (roomNumber == 1) {
        return true;
      } else {
        return checked;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleChange", (roomNumber, checked) => {
      var roomsNew = [];

      if (!checked) {
        // Checked
        for (var num = roomNumber; num >= 2; num--) {
          if (num != 1) {
            roomsNew = this.state.rooms.splice(num - 1, 1, {
              roomNum: num,
              checked: !checked,
              adult: 1,
              childern: 0
            });
          }
        }
      } else {
        //Unchecked
        for (var num = roomNumber; num <= this.state.rooms.length; num++) {
          if (num != 1) {
            roomsNew = this.state.rooms.splice(num - 1, 1, {
              roomNum: num,
              checked: !checked,
              adult: 1,
              childern: 0
            });
          }
        }
      }

      this.setState(state => {
        return {
          rooms: roomsNew
        }, () => console.log(this.state.rooms);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "updateAdults", values => {
      const {
        selectedValue,
        roomNumber,
        checked,
        childern
      } = values;
      var roomsAdultUpdated = this.state.rooms.splice(roomNumber - 1, 1, {
        roomNum: roomNumber,
        checked: checked,
        adult: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(selectedValue),
        childern: childern
      });
      this.setState(state => {
        return {
          rooms: roomsAdultUpdated
        }, () => console.log(this.state.rooms);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "updateChildern", values => {
      const {
        selectedValue,
        roomNumber,
        checked,
        adult
      } = values;
      var roomsAdultUpdated = this.state.rooms.splice(roomNumber - 1, 1, {
        roomNum: roomNumber,
        checked: checked,
        adult: adult,
        childern: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(selectedValue)
      });
      this.setState(state => {
        return {
          rooms: roomsAdultUpdated
        }, () => console.log(this.state.rooms);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleSubmit", async () => {
      await axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('http://localhost:4000/submit', {
        data: {
          rooms: this.state.rooms
        },
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        if (response.status == 200) {
          alert("Data Saved");
        }
      }).catch(function (error) {
        console.log(error);
      });
    });

    this.state = {
      rooms: [{
        roomNum: 1,
        checked: true,
        adult: 1,
        childern: 0
      }, {
        roomNum: 2,
        checked: false,
        adult: 1,
        childern: 0
      }, {
        roomNum: 3,
        checked: false,
        adult: 1,
        childern: 0
      }, {
        roomNum: 4,
        checked: false,
        adult: 1,
        childern: 0
      }],
      // rooms : [],
      loader: false
    };
  }

  render() {
    const {
      rooms
    } = this.state;

    if (this.state.loader) {
      return __jsx("p", null, "Loadin");
    } else {
      return __jsx("div", null, __jsx(next_Head__WEBPACK_IMPORTED_MODULE_6___default.a, null, __jsx("title", null, "Assesment"), __jsx("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"
      })), __jsx(_layouts_MyLayout__WEBPACK_IMPORTED_MODULE_5__["default"], null, __jsx("h1", null, "Rooms"), __jsx("div", {
        className: "col-md-12"
      }, rooms.map(i => {
        return __jsx("div", {
          className: "col-md-3",
          key: i.roomNum
        }, __jsx(_components_Room__WEBPACK_IMPORTED_MODULE_4__["default"], {
          roomNumber: i.roomNum,
          adultCount: i.adult,
          childernCount: i.childern,
          checked: this.handleChecked(i.roomNum, i.checked),
          handleChange: (roomNumber, checked) => this.handleChange(roomNumber, checked),
          changeAdult: this.changeAdult,
          updateAdults: (...values) => this.updateAdults(...values),
          updateChildern: (...values) => this.updateChildern(...values)
        }));
      }), __jsx("div", {
        className: "mt-2"
      }, __jsx("input", {
        type: "button",
        onClick: this.handleSubmit,
        value: "Submit",
        className: "btn btn-success btn-lg"
      })))));
    }
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\react-hotel-room-booking\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "next/Head":
/*!****************************!*\
  !*** external "next/Head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map