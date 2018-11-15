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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n\nvar myModule = __webpack_require__(/*! ./module.js */ \"./module.js\")\n\n\nmyModule('c', {\n    env: {\n        memoryBase: 256,\n    }\n}).then(instance=>{\n    console.log(instance)\n    var cdate = Date.now()\n    console.log(`${instance.exports._func(45)}----c.wasm----${Date.now() - cdate}`)\n    //console.log(`${instance.instance.exports._func(45)}----c.wasm----${Date.now() - cdate}`)\n    console.log('abc')\n})\n\nmyModule('ts').then(instance=>{\n    var tdate = Date.now()\n    console.log(`${instance.exports.f(45)}----ts.wasm----${Date.now() - tdate}`)\n})\n\nfunction f(x){\n    if (x === 1 || x === 2) {\n        return 1;\n    }\n    return f(x - 1) + f(x - 2)\n}\nvar jdate = Date.now()\nconsole.log(`${f(45)}----js----${Date.now() - jdate}`)\n\n//接入webpack\n// import('./wasm/c.wasm').then(module=>{\n//     return WebAssembly.instantiate(module, {\n//         env: {\n//             memoryBase: 256,\n//         }\n//     })\n// }).then(module => {\n//     console.log('module------'+module)\n//     console.log(module._func(20))\n// });\n\n// import('./wasm/c.wasm').then(module => {\n//     console.log('module------'+module)\n//     console.log(module._func(20))\n// });\n//\n// import('./wasm/ts.wasm').then(module => {\n//     console.log('fibonacci:---' + module.f(40))\n// });\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./module.js":
/*!*******************!*\
  !*** ./module.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nconst fs = __webpack_require__(/*! fs */ \"fs\")\n\nfunction toUint8Array(buf) {\n    var u = new Uint8Array(buf.length);\n    for (var i = 0; i < buf.length; ++i) {\n      u[i] = buf[i];\n    }\n    return u; \n}\nmodule.exports = (filename, imports)=> {\n    // 读取 wasm 文件，并转换成 byte 数组\n    const buffer = toUint8Array(fs.readFileSync(__dirname + `/dist/${filename}.wasm`));\n    // 编译 wasm 字节码到机器码\n    return WebAssembly.compile(buffer).then(module => {\n            // 实例化模块\n            return new WebAssembly.Instance(module, imports)\n        })\n    // return WebAssembly.instantiate(buffer, imports)\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./module.js?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ })

/******/ });