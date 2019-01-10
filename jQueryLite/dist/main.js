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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(html_elements) {\n    this.HTMLElements = html_elements;\n  }\n\n  html (str) {\n    if (str === undefined) {\n      return this[0].innerHTML;\n    } else {\n      this[0].innerHTML = str;\n    }\n  }\n\n  empty() {\n    for (let i = 0; i < this.length; i++) {\n      this[i].innerHTML = \"\";\n    }\n  }\n\n  append(arg) {\n    let newHTML = \"\";\n    if (arg instanceof DOMNodeCollection) {\n      for (let i = 0; i < arg.HTMLElements.length; i++) {\n        newHTML += arg.HTMLElements[i].outerHTML;\n      } \n    } else if (arg instanceof HTMLElement) {\n      newHTML = arg.outerHTML;\n    } else if (typeof arg === \"string\") {\n      newHTML = arg;\n    } else {\n      return \"invalid parameters\";\n    }\n\n    for (let i = 0; i < this.HTMLElements.length; i++) {\n      this.HTMLElements[i].innerHTML += newHTML;\n    }\n  }\n\n  attr(attributeName, value) {\n    if (value === null) {\n      for (let i = 0; i < this.HTMLElements.length; i++) {\n        this.HTMLElements[i].removeAttribute(attributeName);\n      }\n    } else if (typeof value === \"string\" || typeof value === \"number\") {\n      for (let i = 0; i < this.HTMLElements.length; i++) {\n        this.HTMLElements[i].setAttribute(attributeName, value);\n      }   \n    } else {\n      return this.HTMLElements[0].getAttribute(attributeName);\n    }\n  }\n\n  addClass(newClass) {\n    if (typeof newClass === \"string\") {\n      let currentClass;\n      for (let i = 0; i < this.HTMLElements.length; i++) {\n        currentClass = this.HTMLElements[i].getAttribute(\"class\");\n        if (currentClass !== null) {\n          newClass = currentClass + \" \" + newClass;\n        }\n        this.HTMLElements[i].setAttribute(\"class\", newClass);\n      }\n    }\n  } \n  \n\n  removeClass(killClass) {\n    if (typeof killClass === \"string\") {\n      let currentClass;\n      let newClass;\n      for (let i = 0; i < this.HTMLElements.length; i++) {\n        currentClass = this.HTMLElements[i].getAttribute(\"class\").split(\" \");\n        delete currentClass[currentClass.indexOf(killClass)];\n        newClass = currentClass.join(\" \");\n        this.HTMLElements[i].setAttribute(\"class\", newClass);\n      }\n    }\n  }\n\n   children() {\n     let kids = new DOMNodeCollection([]);\n     for (let i = 0; i < this.HTMLElements.length; i++) {\n       kids.HTMLElements = kids.HTMLElements.concat(Array.from(this.HTMLElements[i].children));\n     }\n     return kids;\n  }\n\n}\n\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nwindow.$l = function (selector) {\n  if (typeof selector === \"string\") {\n    const nodeList = Array.from(document.querySelectorAll(selector));\n    return new DOMNodeCollection(nodeList);\n  } else if (selector instanceof HTMLElement) {\n    return new DOMNodeCollection([selector]);\n  }\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });