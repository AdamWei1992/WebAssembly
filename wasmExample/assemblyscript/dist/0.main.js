exports.ids = [0];
exports.modules = {

/***/ "./wasm/c.wasm":
/*!*********************!*\
  !*** ./wasm/c.wasm ***!
  \*********************/
/*! exports provided: __post_instantiate, _func, runPostSets */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./wasm/c.wasm?");

/***/ })

};;