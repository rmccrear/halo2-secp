/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/halo2Prover/halo2Prover.ts":
/*!****************************************!*\
  !*** ./lib/halo2Prover/halo2Prover.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateProofScalarMult\": function() { return /* binding */ generateProofScalarMult; },\n/* harmony export */   \"generateProofScalarMultFull\": function() { return /* binding */ generateProofScalarMultFull; },\n/* harmony export */   \"generateProofSimpleCircuit\": function() { return /* binding */ generateProofSimpleCircuit; }\n/* harmony export */ });\n/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! comlink */ \"./node_modules/comlink/dist/esm/comlink.mjs\");\n\nconst fetch_ipa_params = async (k)=>{\n    const response = await fetch(\"http://localhost:3000/params_k_\".concat(k, \".bin\"));\n    const bytes = await response.arrayBuffer();\n    const params = new Uint8Array(bytes);\n    return params;\n};\nconst generateProofSimpleCircuit = async ()=>{\n    console.log(\"Simple circuit proof\");\n    const params = await fetch_ipa_params(5);\n    const { default: init , initThreadPool , prove_simple_circuit , init_panic_hook  } = await __webpack_require__.e(/*! import() */ \"lib_halo2Prover_wasm_halo2_efficient_ecdsa_js-lib_halo2Prover_wasm_snippets_wasm-bindgen-rayo-1a65c4\").then(__webpack_require__.bind(__webpack_require__, /*! ./wasm/halo2_efficient_ecdsa.js */ \"./lib/halo2Prover/wasm/halo2_efficient_ecdsa.js\"));\n    console.log(\"number of threads\", navigator.hardwareConcurrency);\n    await init();\n    await init_panic_hook();\n    await initThreadPool(navigator.hardwareConcurrency);\n    console.time(\"Full proving time\");\n    const proof = await prove_simple_circuit(params);\n    console.timeEnd(\"Full proving time\");\n    console.log(\"proof\", proof);\n};\nconst generateProofScalarMult = async ()=>{\n    console.log(\"Scalar mult proof\");\n    const params = await fetch_ipa_params(11);\n    const { default: init , initThreadPool , prove_scalar_mult , init_panic_hook  } = await __webpack_require__.e(/*! import() */ \"lib_halo2Prover_wasm_halo2_efficient_ecdsa_js-lib_halo2Prover_wasm_snippets_wasm-bindgen-rayo-1a65c4\").then(__webpack_require__.bind(__webpack_require__, /*! ./wasm/halo2_efficient_ecdsa.js */ \"./lib/halo2Prover/wasm/halo2_efficient_ecdsa.js\"));\n    console.log(\"number of threads\", navigator.hardwareConcurrency);\n    await init();\n    await init_panic_hook();\n    await initThreadPool(navigator.hardwareConcurrency);\n    console.time(\"Full proving time\");\n    const proof = await prove_scalar_mult(params);\n    console.timeEnd(\"Full proving time\");\n    console.log(\"proof\", proof);\n};\nconst generateProofScalarMultFull = async ()=>{\n    console.log(\"Scalar mult full proof\");\n    const params = await fetch_ipa_params(11);\n    const { default: init , initThreadPool , prove_scalar_mult_full , init_panic_hook  } = await __webpack_require__.e(/*! import() */ \"lib_halo2Prover_wasm_halo2_efficient_ecdsa_js-lib_halo2Prover_wasm_snippets_wasm-bindgen-rayo-1a65c4\").then(__webpack_require__.bind(__webpack_require__, /*! ./wasm/halo2_efficient_ecdsa.js */ \"./lib/halo2Prover/wasm/halo2_efficient_ecdsa.js\"));\n    console.log(\"number of threads\", navigator.hardwareConcurrency);\n    await init();\n    await init_panic_hook();\n    await initThreadPool(navigator.hardwareConcurrency);\n    console.time(\"Full proving time\");\n    const proof = await prove_scalar_mult_full(params);\n    console.timeEnd(\"Full proving time\");\n    console.log(\"proof\", proof);\n};\nconst exports = {\n    generateProofScalarMult,\n    generateProofScalarMultFull,\n    generateProofSimpleCircuit\n};\n(0,comlink__WEBPACK_IMPORTED_MODULE_0__.expose)(exports);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaGFsbzJQcm92ZXIvaGFsbzJQcm92ZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpQztBQUVqQyxNQUFNQyxtQkFBbUIsT0FBTUMsSUFBSztJQUNsQyxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sa0NBQW9DLE9BQUZGLEdBQUU7SUFDakUsTUFBTUcsUUFBUSxNQUFNRixTQUFTRyxXQUFXO0lBRXhDLE1BQU1DLFNBQVMsSUFBSUMsV0FBV0g7SUFDOUIsT0FBT0U7QUFDVDtBQUVPLE1BQU1FLDZCQUE2QixVQUFZO0lBQ3BEQyxRQUFRQyxHQUFHLENBQUM7SUFDWixNQUFNSixTQUFTLE1BQU1OLGlCQUFpQjtJQUV0QyxNQUFNLEVBQ0pXLFNBQVNDLEtBQUksRUFDYkMsZUFBYyxFQUNkQyxxQkFBb0IsRUFDcEJDLGdCQUFlLEVBQ2hCLEdBQUcsTUFBTSwyUkFBeUM7SUFFbkROLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJNLFVBQVVDLG1CQUFtQjtJQUU5RCxNQUFNTDtJQUNOLE1BQU1HO0lBQ04sTUFBTUYsZUFBZUcsVUFBVUMsbUJBQW1CO0lBQ2xEUixRQUFRUyxJQUFJLENBQUM7SUFDYixNQUFNQyxRQUFRLE1BQU1MLHFCQUFxQlI7SUFDekNHLFFBQVFXLE9BQU8sQ0FBQztJQUNoQlgsUUFBUUMsR0FBRyxDQUFDLFNBQVNTO0FBQ3ZCLEVBQUU7QUFFSyxNQUFNRSwwQkFBMEIsVUFBWTtJQUNqRFosUUFBUUMsR0FBRyxDQUFDO0lBQ1osTUFBTUosU0FBUyxNQUFNTixpQkFBaUI7SUFFdEMsTUFBTSxFQUNKVyxTQUFTQyxLQUFJLEVBQ2JDLGVBQWMsRUFDZFMsa0JBQWlCLEVBQ2pCUCxnQkFBZSxFQUNoQixHQUFHLE1BQU0sMlJBQXlDO0lBRW5ETixRQUFRQyxHQUFHLENBQUMscUJBQXFCTSxVQUFVQyxtQkFBbUI7SUFFOUQsTUFBTUw7SUFDTixNQUFNRztJQUNOLE1BQU1GLGVBQWVHLFVBQVVDLG1CQUFtQjtJQUNsRFIsUUFBUVMsSUFBSSxDQUFDO0lBQ2IsTUFBTUMsUUFBUSxNQUFNRyxrQkFBa0JoQjtJQUN0Q0csUUFBUVcsT0FBTyxDQUFDO0lBQ2hCWCxRQUFRQyxHQUFHLENBQUMsU0FBU1M7QUFDdkIsRUFBRTtBQUVLLE1BQU1JLDhCQUE4QixVQUFZO0lBQ3JEZCxRQUFRQyxHQUFHLENBQUM7SUFFWixNQUFNSixTQUFTLE1BQU1OLGlCQUFpQjtJQUV0QyxNQUFNLEVBQ0pXLFNBQVNDLEtBQUksRUFDYkMsZUFBYyxFQUNkVyx1QkFBc0IsRUFDdEJULGdCQUFlLEVBQ2hCLEdBQUcsTUFBTSwyUkFBeUM7SUFFbkROLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJNLFVBQVVDLG1CQUFtQjtJQUU5RCxNQUFNTDtJQUNOLE1BQU1HO0lBQ04sTUFBTUYsZUFBZUcsVUFBVUMsbUJBQW1CO0lBQ2xEUixRQUFRUyxJQUFJLENBQUM7SUFDYixNQUFNQyxRQUFRLE1BQU1LLHVCQUF1QmxCO0lBQzNDRyxRQUFRVyxPQUFPLENBQUM7SUFDaEJYLFFBQVFDLEdBQUcsQ0FBQyxTQUFTUztBQUN2QixFQUFFO0FBRUYsTUFBTU0sVUFBVTtJQUNkSjtJQUNBRTtJQUNBZjtBQUNGO0FBR0FULCtDQUFNQSxDQUFDMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hhbG8yUHJvdmVyL2hhbG8yUHJvdmVyLnRzP2ZjZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXhwb3NlIH0gZnJvbSBcImNvbWxpbmtcIjtcblxuY29uc3QgZmV0Y2hfaXBhX3BhcmFtcyA9IGFzeW5jIGsgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvcGFyYW1zX2tfJHtrfS5iaW5gKTtcbiAgY29uc3QgYnl0ZXMgPSBhd2FpdCByZXNwb25zZS5hcnJheUJ1ZmZlcigpO1xuXG4gIGNvbnN0IHBhcmFtcyA9IG5ldyBVaW50OEFycmF5KGJ5dGVzKTtcbiAgcmV0dXJuIHBhcmFtcztcbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVByb29mU2ltcGxlQ2lyY3VpdCA9IGFzeW5jICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJTaW1wbGUgY2lyY3VpdCBwcm9vZlwiKTtcbiAgY29uc3QgcGFyYW1zID0gYXdhaXQgZmV0Y2hfaXBhX3BhcmFtcyg1KTtcblxuICBjb25zdCB7XG4gICAgZGVmYXVsdDogaW5pdCxcbiAgICBpbml0VGhyZWFkUG9vbCxcbiAgICBwcm92ZV9zaW1wbGVfY2lyY3VpdCxcbiAgICBpbml0X3BhbmljX2hvb2tcbiAgfSA9IGF3YWl0IGltcG9ydChcIi4vd2FzbS9oYWxvMl9lZmZpY2llbnRfZWNkc2EuanNcIik7XG5cbiAgY29uc29sZS5sb2coXCJudW1iZXIgb2YgdGhyZWFkc1wiLCBuYXZpZ2F0b3IuaGFyZHdhcmVDb25jdXJyZW5jeSk7XG5cbiAgYXdhaXQgaW5pdCgpO1xuICBhd2FpdCBpbml0X3BhbmljX2hvb2soKTtcbiAgYXdhaXQgaW5pdFRocmVhZFBvb2wobmF2aWdhdG9yLmhhcmR3YXJlQ29uY3VycmVuY3kpO1xuICBjb25zb2xlLnRpbWUoXCJGdWxsIHByb3ZpbmcgdGltZVwiKTtcbiAgY29uc3QgcHJvb2YgPSBhd2FpdCBwcm92ZV9zaW1wbGVfY2lyY3VpdChwYXJhbXMpO1xuICBjb25zb2xlLnRpbWVFbmQoXCJGdWxsIHByb3ZpbmcgdGltZVwiKTtcbiAgY29uc29sZS5sb2coXCJwcm9vZlwiLCBwcm9vZik7XG59O1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVQcm9vZlNjYWxhck11bHQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiU2NhbGFyIG11bHQgcHJvb2ZcIik7XG4gIGNvbnN0IHBhcmFtcyA9IGF3YWl0IGZldGNoX2lwYV9wYXJhbXMoMTEpO1xuXG4gIGNvbnN0IHtcbiAgICBkZWZhdWx0OiBpbml0LFxuICAgIGluaXRUaHJlYWRQb29sLFxuICAgIHByb3ZlX3NjYWxhcl9tdWx0LFxuICAgIGluaXRfcGFuaWNfaG9va1xuICB9ID0gYXdhaXQgaW1wb3J0KFwiLi93YXNtL2hhbG8yX2VmZmljaWVudF9lY2RzYS5qc1wiKTtcblxuICBjb25zb2xlLmxvZyhcIm51bWJlciBvZiB0aHJlYWRzXCIsIG5hdmlnYXRvci5oYXJkd2FyZUNvbmN1cnJlbmN5KTtcblxuICBhd2FpdCBpbml0KCk7XG4gIGF3YWl0IGluaXRfcGFuaWNfaG9vaygpO1xuICBhd2FpdCBpbml0VGhyZWFkUG9vbChuYXZpZ2F0b3IuaGFyZHdhcmVDb25jdXJyZW5jeSk7XG4gIGNvbnNvbGUudGltZShcIkZ1bGwgcHJvdmluZyB0aW1lXCIpO1xuICBjb25zdCBwcm9vZiA9IGF3YWl0IHByb3ZlX3NjYWxhcl9tdWx0KHBhcmFtcyk7XG4gIGNvbnNvbGUudGltZUVuZChcIkZ1bGwgcHJvdmluZyB0aW1lXCIpO1xuICBjb25zb2xlLmxvZyhcInByb29mXCIsIHByb29mKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVByb29mU2NhbGFyTXVsdEZ1bGwgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiU2NhbGFyIG11bHQgZnVsbCBwcm9vZlwiKTtcblxuICBjb25zdCBwYXJhbXMgPSBhd2FpdCBmZXRjaF9pcGFfcGFyYW1zKDExKTtcblxuICBjb25zdCB7XG4gICAgZGVmYXVsdDogaW5pdCxcbiAgICBpbml0VGhyZWFkUG9vbCxcbiAgICBwcm92ZV9zY2FsYXJfbXVsdF9mdWxsLFxuICAgIGluaXRfcGFuaWNfaG9va1xuICB9ID0gYXdhaXQgaW1wb3J0KFwiLi93YXNtL2hhbG8yX2VmZmljaWVudF9lY2RzYS5qc1wiKTtcblxuICBjb25zb2xlLmxvZyhcIm51bWJlciBvZiB0aHJlYWRzXCIsIG5hdmlnYXRvci5oYXJkd2FyZUNvbmN1cnJlbmN5KTtcblxuICBhd2FpdCBpbml0KCk7XG4gIGF3YWl0IGluaXRfcGFuaWNfaG9vaygpO1xuICBhd2FpdCBpbml0VGhyZWFkUG9vbChuYXZpZ2F0b3IuaGFyZHdhcmVDb25jdXJyZW5jeSk7XG4gIGNvbnNvbGUudGltZShcIkZ1bGwgcHJvdmluZyB0aW1lXCIpO1xuICBjb25zdCBwcm9vZiA9IGF3YWl0IHByb3ZlX3NjYWxhcl9tdWx0X2Z1bGwocGFyYW1zKTtcbiAgY29uc29sZS50aW1lRW5kKFwiRnVsbCBwcm92aW5nIHRpbWVcIik7XG4gIGNvbnNvbGUubG9nKFwicHJvb2ZcIiwgcHJvb2YpO1xufTtcblxuY29uc3QgZXhwb3J0cyA9IHtcbiAgZ2VuZXJhdGVQcm9vZlNjYWxhck11bHQsXG4gIGdlbmVyYXRlUHJvb2ZTY2FsYXJNdWx0RnVsbCxcbiAgZ2VuZXJhdGVQcm9vZlNpbXBsZUNpcmN1aXRcbn07XG5leHBvcnQgdHlwZSBIYWxvMlByb3ZlciA9IHR5cGVvZiBleHBvcnRzO1xuXG5leHBvc2UoZXhwb3J0cyk7XG4iXSwibmFtZXMiOlsiZXhwb3NlIiwiZmV0Y2hfaXBhX3BhcmFtcyIsImsiLCJyZXNwb25zZSIsImZldGNoIiwiYnl0ZXMiLCJhcnJheUJ1ZmZlciIsInBhcmFtcyIsIlVpbnQ4QXJyYXkiLCJnZW5lcmF0ZVByb29mU2ltcGxlQ2lyY3VpdCIsImNvbnNvbGUiLCJsb2ciLCJkZWZhdWx0IiwiaW5pdCIsImluaXRUaHJlYWRQb29sIiwicHJvdmVfc2ltcGxlX2NpcmN1aXQiLCJpbml0X3BhbmljX2hvb2siLCJuYXZpZ2F0b3IiLCJoYXJkd2FyZUNvbmN1cnJlbmN5IiwidGltZSIsInByb29mIiwidGltZUVuZCIsImdlbmVyYXRlUHJvb2ZTY2FsYXJNdWx0IiwicHJvdmVfc2NhbGFyX211bHQiLCJnZW5lcmF0ZVByb29mU2NhbGFyTXVsdEZ1bGwiLCJwcm92ZV9zY2FsYXJfbXVsdF9mdWxsIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/halo2Prover/halo2Prover.ts\n"));

/***/ }),

/***/ "./node_modules/comlink/dist/esm/comlink.mjs":
/*!***************************************************!*\
  !*** ./node_modules/comlink/dist/esm/comlink.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createEndpoint\": function() { return /* binding */ createEndpoint; },\n/* harmony export */   \"expose\": function() { return /* binding */ expose; },\n/* harmony export */   \"proxy\": function() { return /* binding */ proxy; },\n/* harmony export */   \"proxyMarker\": function() { return /* binding */ proxyMarker; },\n/* harmony export */   \"releaseProxy\": function() { return /* binding */ releaseProxy; },\n/* harmony export */   \"transfer\": function() { return /* binding */ transfer; },\n/* harmony export */   \"transferHandlers\": function() { return /* binding */ transferHandlers; },\n/* harmony export */   \"windowEndpoint\": function() { return /* binding */ windowEndpoint; },\n/* harmony export */   \"wrap\": function() { return /* binding */ wrap; }\n/* harmony export */ });\n/**\r\n * Copyright 2019 Google Inc. All Rights Reserved.\r\n * Licensed under the Apache License, Version 2.0 (the \"License\");\r\n * you may not use this file except in compliance with the License.\r\n * You may obtain a copy of the License at\r\n *     http://www.apache.org/licenses/LICENSE-2.0\r\n * Unless required by applicable law or agreed to in writing, software\r\n * distributed under the License is distributed on an \"AS IS\" BASIS,\r\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n * See the License for the specific language governing permissions and\r\n * limitations under the License.\r\n */\r\nconst proxyMarker = Symbol(\"Comlink.proxy\");\r\nconst createEndpoint = Symbol(\"Comlink.endpoint\");\r\nconst releaseProxy = Symbol(\"Comlink.releaseProxy\");\r\nconst throwMarker = Symbol(\"Comlink.thrown\");\r\nconst isObject = (val) => (typeof val === \"object\" && val !== null) || typeof val === \"function\";\r\n/**\r\n * Internal transfer handle to handle objects marked to proxy.\r\n */\r\nconst proxyTransferHandler = {\r\n    canHandle: (val) => isObject(val) && val[proxyMarker],\r\n    serialize(obj) {\r\n        const { port1, port2 } = new MessageChannel();\r\n        expose(obj, port1);\r\n        return [port2, [port2]];\r\n    },\r\n    deserialize(port) {\r\n        port.start();\r\n        return wrap(port);\r\n    },\r\n};\r\n/**\r\n * Internal transfer handler to handle thrown exceptions.\r\n */\r\nconst throwTransferHandler = {\r\n    canHandle: (value) => isObject(value) && throwMarker in value,\r\n    serialize({ value }) {\r\n        let serialized;\r\n        if (value instanceof Error) {\r\n            serialized = {\r\n                isError: true,\r\n                value: {\r\n                    message: value.message,\r\n                    name: value.name,\r\n                    stack: value.stack,\r\n                },\r\n            };\r\n        }\r\n        else {\r\n            serialized = { isError: false, value };\r\n        }\r\n        return [serialized, []];\r\n    },\r\n    deserialize(serialized) {\r\n        if (serialized.isError) {\r\n            throw Object.assign(new Error(serialized.value.message), serialized.value);\r\n        }\r\n        throw serialized.value;\r\n    },\r\n};\r\n/**\r\n * Allows customizing the serialization of certain values.\r\n */\r\nconst transferHandlers = new Map([\r\n    [\"proxy\", proxyTransferHandler],\r\n    [\"throw\", throwTransferHandler],\r\n]);\r\nfunction expose(obj, ep = self) {\r\n    ep.addEventListener(\"message\", function callback(ev) {\r\n        if (!ev || !ev.data) {\r\n            return;\r\n        }\r\n        const { id, type, path } = Object.assign({ path: [] }, ev.data);\r\n        const argumentList = (ev.data.argumentList || []).map(fromWireValue);\r\n        let returnValue;\r\n        try {\r\n            const parent = path.slice(0, -1).reduce((obj, prop) => obj[prop], obj);\r\n            const rawValue = path.reduce((obj, prop) => obj[prop], obj);\r\n            switch (type) {\r\n                case \"GET\" /* GET */:\r\n                    {\r\n                        returnValue = rawValue;\r\n                    }\r\n                    break;\r\n                case \"SET\" /* SET */:\r\n                    {\r\n                        parent[path.slice(-1)[0]] = fromWireValue(ev.data.value);\r\n                        returnValue = true;\r\n                    }\r\n                    break;\r\n                case \"APPLY\" /* APPLY */:\r\n                    {\r\n                        returnValue = rawValue.apply(parent, argumentList);\r\n                    }\r\n                    break;\r\n                case \"CONSTRUCT\" /* CONSTRUCT */:\r\n                    {\r\n                        const value = new rawValue(...argumentList);\r\n                        returnValue = proxy(value);\r\n                    }\r\n                    break;\r\n                case \"ENDPOINT\" /* ENDPOINT */:\r\n                    {\r\n                        const { port1, port2 } = new MessageChannel();\r\n                        expose(obj, port2);\r\n                        returnValue = transfer(port1, [port1]);\r\n                    }\r\n                    break;\r\n                case \"RELEASE\" /* RELEASE */:\r\n                    {\r\n                        returnValue = undefined;\r\n                    }\r\n                    break;\r\n                default:\r\n                    return;\r\n            }\r\n        }\r\n        catch (value) {\r\n            returnValue = { value, [throwMarker]: 0 };\r\n        }\r\n        Promise.resolve(returnValue)\r\n            .catch((value) => {\r\n            return { value, [throwMarker]: 0 };\r\n        })\r\n            .then((returnValue) => {\r\n            const [wireValue, transferables] = toWireValue(returnValue);\r\n            ep.postMessage(Object.assign(Object.assign({}, wireValue), { id }), transferables);\r\n            if (type === \"RELEASE\" /* RELEASE */) {\r\n                // detach and deactive after sending release response above.\r\n                ep.removeEventListener(\"message\", callback);\r\n                closeEndPoint(ep);\r\n            }\r\n        });\r\n    });\r\n    if (ep.start) {\r\n        ep.start();\r\n    }\r\n}\r\nfunction isMessagePort(endpoint) {\r\n    return endpoint.constructor.name === \"MessagePort\";\r\n}\r\nfunction closeEndPoint(endpoint) {\r\n    if (isMessagePort(endpoint))\r\n        endpoint.close();\r\n}\r\nfunction wrap(ep, target) {\r\n    return createProxy(ep, [], target);\r\n}\r\nfunction throwIfProxyReleased(isReleased) {\r\n    if (isReleased) {\r\n        throw new Error(\"Proxy has been released and is not useable\");\r\n    }\r\n}\r\nfunction createProxy(ep, path = [], target = function () { }) {\r\n    let isProxyReleased = false;\r\n    const proxy = new Proxy(target, {\r\n        get(_target, prop) {\r\n            throwIfProxyReleased(isProxyReleased);\r\n            if (prop === releaseProxy) {\r\n                return () => {\r\n                    return requestResponseMessage(ep, {\r\n                        type: \"RELEASE\" /* RELEASE */,\r\n                        path: path.map((p) => p.toString()),\r\n                    }).then(() => {\r\n                        closeEndPoint(ep);\r\n                        isProxyReleased = true;\r\n                    });\r\n                };\r\n            }\r\n            if (prop === \"then\") {\r\n                if (path.length === 0) {\r\n                    return { then: () => proxy };\r\n                }\r\n                const r = requestResponseMessage(ep, {\r\n                    type: \"GET\" /* GET */,\r\n                    path: path.map((p) => p.toString()),\r\n                }).then(fromWireValue);\r\n                return r.then.bind(r);\r\n            }\r\n            return createProxy(ep, [...path, prop]);\r\n        },\r\n        set(_target, prop, rawValue) {\r\n            throwIfProxyReleased(isProxyReleased);\r\n            // FIXME: ES6 Proxy Handler `set` methods are supposed to return a\r\n            // boolean. To show good will, we return true asynchronously ¯\\_(ツ)_/¯\r\n            const [value, transferables] = toWireValue(rawValue);\r\n            return requestResponseMessage(ep, {\r\n                type: \"SET\" /* SET */,\r\n                path: [...path, prop].map((p) => p.toString()),\r\n                value,\r\n            }, transferables).then(fromWireValue);\r\n        },\r\n        apply(_target, _thisArg, rawArgumentList) {\r\n            throwIfProxyReleased(isProxyReleased);\r\n            const last = path[path.length - 1];\r\n            if (last === createEndpoint) {\r\n                return requestResponseMessage(ep, {\r\n                    type: \"ENDPOINT\" /* ENDPOINT */,\r\n                }).then(fromWireValue);\r\n            }\r\n            // We just pretend that `bind()` didn’t happen.\r\n            if (last === \"bind\") {\r\n                return createProxy(ep, path.slice(0, -1));\r\n            }\r\n            const [argumentList, transferables] = processArguments(rawArgumentList);\r\n            return requestResponseMessage(ep, {\r\n                type: \"APPLY\" /* APPLY */,\r\n                path: path.map((p) => p.toString()),\r\n                argumentList,\r\n            }, transferables).then(fromWireValue);\r\n        },\r\n        construct(_target, rawArgumentList) {\r\n            throwIfProxyReleased(isProxyReleased);\r\n            const [argumentList, transferables] = processArguments(rawArgumentList);\r\n            return requestResponseMessage(ep, {\r\n                type: \"CONSTRUCT\" /* CONSTRUCT */,\r\n                path: path.map((p) => p.toString()),\r\n                argumentList,\r\n            }, transferables).then(fromWireValue);\r\n        },\r\n    });\r\n    return proxy;\r\n}\r\nfunction myFlat(arr) {\r\n    return Array.prototype.concat.apply([], arr);\r\n}\r\nfunction processArguments(argumentList) {\r\n    const processed = argumentList.map(toWireValue);\r\n    return [processed.map((v) => v[0]), myFlat(processed.map((v) => v[1]))];\r\n}\r\nconst transferCache = new WeakMap();\r\nfunction transfer(obj, transfers) {\r\n    transferCache.set(obj, transfers);\r\n    return obj;\r\n}\r\nfunction proxy(obj) {\r\n    return Object.assign(obj, { [proxyMarker]: true });\r\n}\r\nfunction windowEndpoint(w, context = self, targetOrigin = \"*\") {\r\n    return {\r\n        postMessage: (msg, transferables) => w.postMessage(msg, targetOrigin, transferables),\r\n        addEventListener: context.addEventListener.bind(context),\r\n        removeEventListener: context.removeEventListener.bind(context),\r\n    };\r\n}\r\nfunction toWireValue(value) {\r\n    for (const [name, handler] of transferHandlers) {\r\n        if (handler.canHandle(value)) {\r\n            const [serializedValue, transferables] = handler.serialize(value);\r\n            return [\r\n                {\r\n                    type: \"HANDLER\" /* HANDLER */,\r\n                    name,\r\n                    value: serializedValue,\r\n                },\r\n                transferables,\r\n            ];\r\n        }\r\n    }\r\n    return [\r\n        {\r\n            type: \"RAW\" /* RAW */,\r\n            value,\r\n        },\r\n        transferCache.get(value) || [],\r\n    ];\r\n}\r\nfunction fromWireValue(value) {\r\n    switch (value.type) {\r\n        case \"HANDLER\" /* HANDLER */:\r\n            return transferHandlers.get(value.name).deserialize(value.value);\r\n        case \"RAW\" /* RAW */:\r\n            return value.value;\r\n    }\r\n}\r\nfunction requestResponseMessage(ep, msg, transfers) {\r\n    return new Promise((resolve) => {\r\n        const id = generateUUID();\r\n        ep.addEventListener(\"message\", function l(ev) {\r\n            if (!ev.data || !ev.data.id || ev.data.id !== id) {\r\n                return;\r\n            }\r\n            ep.removeEventListener(\"message\", l);\r\n            resolve(ev.data);\r\n        });\r\n        if (ep.start) {\r\n            ep.start();\r\n        }\r\n        ep.postMessage(Object.assign({ id }, msg), transfers);\r\n    });\r\n}\r\nfunction generateUUID() {\r\n    return new Array(4)\r\n        .fill(0)\r\n        .map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16))\r\n        .join(\"-\");\r\n}\n\n\n//# sourceMappingURL=comlink.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY29tbGluay9kaXN0L2VzbS9jb21saW5rLm1qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGVBQWU7QUFDL0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQixrQkFBa0IsVUFBVTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZUFBZTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixTQUFTO0FBQ1Q7QUFDQTtBQUNBLHlEQUF5RCxnQkFBZ0IsSUFBSTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFCQUFxQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsSUFBSTtBQUMzQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNIO0FBQ3RIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jb21saW5rL2Rpc3QvZXNtL2NvbWxpbmsubWpzPzkxOGMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY29uc3QgcHJveHlNYXJrZXIgPSBTeW1ib2woXCJDb21saW5rLnByb3h5XCIpO1xyXG5jb25zdCBjcmVhdGVFbmRwb2ludCA9IFN5bWJvbChcIkNvbWxpbmsuZW5kcG9pbnRcIik7XHJcbmNvbnN0IHJlbGVhc2VQcm94eSA9IFN5bWJvbChcIkNvbWxpbmsucmVsZWFzZVByb3h5XCIpO1xyXG5jb25zdCB0aHJvd01hcmtlciA9IFN5bWJvbChcIkNvbWxpbmsudGhyb3duXCIpO1xyXG5jb25zdCBpc09iamVjdCA9ICh2YWwpID0+ICh0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiICYmIHZhbCAhPT0gbnVsbCkgfHwgdHlwZW9mIHZhbCA9PT0gXCJmdW5jdGlvblwiO1xyXG4vKipcclxuICogSW50ZXJuYWwgdHJhbnNmZXIgaGFuZGxlIHRvIGhhbmRsZSBvYmplY3RzIG1hcmtlZCB0byBwcm94eS5cclxuICovXHJcbmNvbnN0IHByb3h5VHJhbnNmZXJIYW5kbGVyID0ge1xyXG4gICAgY2FuSGFuZGxlOiAodmFsKSA9PiBpc09iamVjdCh2YWwpICYmIHZhbFtwcm94eU1hcmtlcl0sXHJcbiAgICBzZXJpYWxpemUob2JqKSB7XHJcbiAgICAgICAgY29uc3QgeyBwb3J0MSwgcG9ydDIgfSA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xyXG4gICAgICAgIGV4cG9zZShvYmosIHBvcnQxKTtcclxuICAgICAgICByZXR1cm4gW3BvcnQyLCBbcG9ydDJdXTtcclxuICAgIH0sXHJcbiAgICBkZXNlcmlhbGl6ZShwb3J0KSB7XHJcbiAgICAgICAgcG9ydC5zdGFydCgpO1xyXG4gICAgICAgIHJldHVybiB3cmFwKHBvcnQpO1xyXG4gICAgfSxcclxufTtcclxuLyoqXHJcbiAqIEludGVybmFsIHRyYW5zZmVyIGhhbmRsZXIgdG8gaGFuZGxlIHRocm93biBleGNlcHRpb25zLlxyXG4gKi9cclxuY29uc3QgdGhyb3dUcmFuc2ZlckhhbmRsZXIgPSB7XHJcbiAgICBjYW5IYW5kbGU6ICh2YWx1ZSkgPT4gaXNPYmplY3QodmFsdWUpICYmIHRocm93TWFya2VyIGluIHZhbHVlLFxyXG4gICAgc2VyaWFsaXplKHsgdmFsdWUgfSkge1xyXG4gICAgICAgIGxldCBzZXJpYWxpemVkO1xyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZWQgPSB7XHJcbiAgICAgICAgICAgICAgICBpc0Vycm9yOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB2YWx1ZS5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHZhbHVlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhY2s6IHZhbHVlLnN0YWNrLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZWQgPSB7IGlzRXJyb3I6IGZhbHNlLCB2YWx1ZSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW3NlcmlhbGl6ZWQsIFtdXTtcclxuICAgIH0sXHJcbiAgICBkZXNlcmlhbGl6ZShzZXJpYWxpemVkKSB7XHJcbiAgICAgICAgaWYgKHNlcmlhbGl6ZWQuaXNFcnJvcikge1xyXG4gICAgICAgICAgICB0aHJvdyBPYmplY3QuYXNzaWduKG5ldyBFcnJvcihzZXJpYWxpemVkLnZhbHVlLm1lc3NhZ2UpLCBzZXJpYWxpemVkLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgc2VyaWFsaXplZC52YWx1ZTtcclxuICAgIH0sXHJcbn07XHJcbi8qKlxyXG4gKiBBbGxvd3MgY3VzdG9taXppbmcgdGhlIHNlcmlhbGl6YXRpb24gb2YgY2VydGFpbiB2YWx1ZXMuXHJcbiAqL1xyXG5jb25zdCB0cmFuc2ZlckhhbmRsZXJzID0gbmV3IE1hcChbXHJcbiAgICBbXCJwcm94eVwiLCBwcm94eVRyYW5zZmVySGFuZGxlcl0sXHJcbiAgICBbXCJ0aHJvd1wiLCB0aHJvd1RyYW5zZmVySGFuZGxlcl0sXHJcbl0pO1xyXG5mdW5jdGlvbiBleHBvc2Uob2JqLCBlcCA9IHNlbGYpIHtcclxuICAgIGVwLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGZ1bmN0aW9uIGNhbGxiYWNrKGV2KSB7XHJcbiAgICAgICAgaWYgKCFldiB8fCAhZXYuZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHsgaWQsIHR5cGUsIHBhdGggfSA9IE9iamVjdC5hc3NpZ24oeyBwYXRoOiBbXSB9LCBldi5kYXRhKTtcclxuICAgICAgICBjb25zdCBhcmd1bWVudExpc3QgPSAoZXYuZGF0YS5hcmd1bWVudExpc3QgfHwgW10pLm1hcChmcm9tV2lyZVZhbHVlKTtcclxuICAgICAgICBsZXQgcmV0dXJuVmFsdWU7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gcGF0aC5zbGljZSgwLCAtMSkucmVkdWNlKChvYmosIHByb3ApID0+IG9ialtwcm9wXSwgb2JqKTtcclxuICAgICAgICAgICAgY29uc3QgcmF3VmFsdWUgPSBwYXRoLnJlZHVjZSgob2JqLCBwcm9wKSA9PiBvYmpbcHJvcF0sIG9iaik7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkdFVFwiIC8qIEdFVCAqLzpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gcmF3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlNFVFwiIC8qIFNFVCAqLzpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFtwYXRoLnNsaWNlKC0xKVswXV0gPSBmcm9tV2lyZVZhbHVlKGV2LmRhdGEudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFQUExZXCIgLyogQVBQTFkgKi86XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHJhd1ZhbHVlLmFwcGx5KHBhcmVudCwgYXJndW1lbnRMaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQ09OU1RSVUNUXCIgLyogQ09OU1RSVUNUICovOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBuZXcgcmF3VmFsdWUoLi4uYXJndW1lbnRMaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBwcm94eSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkVORFBPSU5UXCIgLyogRU5EUE9JTlQgKi86XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHBvcnQxLCBwb3J0MiB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9zZShvYmosIHBvcnQyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB0cmFuc2Zlcihwb3J0MSwgW3BvcnQxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlJFTEVBU0VcIiAvKiBSRUxFQVNFICovOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0geyB2YWx1ZSwgW3Rocm93TWFya2VyXTogMCB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBQcm9taXNlLnJlc29sdmUocmV0dXJuVmFsdWUpXHJcbiAgICAgICAgICAgIC5jYXRjaCgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWUsIFt0aHJvd01hcmtlcl06IDAgfTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmV0dXJuVmFsdWUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgW3dpcmVWYWx1ZSwgdHJhbnNmZXJhYmxlc10gPSB0b1dpcmVWYWx1ZShyZXR1cm5WYWx1ZSk7XHJcbiAgICAgICAgICAgIGVwLnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgd2lyZVZhbHVlKSwgeyBpZCB9KSwgdHJhbnNmZXJhYmxlcyk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcIlJFTEVBU0VcIiAvKiBSRUxFQVNFICovKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBkZXRhY2ggYW5kIGRlYWN0aXZlIGFmdGVyIHNlbmRpbmcgcmVsZWFzZSByZXNwb25zZSBhYm92ZS5cclxuICAgICAgICAgICAgICAgIGVwLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIGNsb3NlRW5kUG9pbnQoZXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGlmIChlcC5zdGFydCkge1xyXG4gICAgICAgIGVwLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaXNNZXNzYWdlUG9ydChlbmRwb2ludCkge1xyXG4gICAgcmV0dXJuIGVuZHBvaW50LmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiTWVzc2FnZVBvcnRcIjtcclxufVxyXG5mdW5jdGlvbiBjbG9zZUVuZFBvaW50KGVuZHBvaW50KSB7XHJcbiAgICBpZiAoaXNNZXNzYWdlUG9ydChlbmRwb2ludCkpXHJcbiAgICAgICAgZW5kcG9pbnQuY2xvc2UoKTtcclxufVxyXG5mdW5jdGlvbiB3cmFwKGVwLCB0YXJnZXQpIHtcclxuICAgIHJldHVybiBjcmVhdGVQcm94eShlcCwgW10sIHRhcmdldCk7XHJcbn1cclxuZnVuY3Rpb24gdGhyb3dJZlByb3h5UmVsZWFzZWQoaXNSZWxlYXNlZCkge1xyXG4gICAgaWYgKGlzUmVsZWFzZWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQcm94eSBoYXMgYmVlbiByZWxlYXNlZCBhbmQgaXMgbm90IHVzZWFibGVcIik7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlUHJveHkoZXAsIHBhdGggPSBbXSwgdGFyZ2V0ID0gZnVuY3Rpb24gKCkgeyB9KSB7XHJcbiAgICBsZXQgaXNQcm94eVJlbGVhc2VkID0gZmFsc2U7XHJcbiAgICBjb25zdCBwcm94eSA9IG5ldyBQcm94eSh0YXJnZXQsIHtcclxuICAgICAgICBnZXQoX3RhcmdldCwgcHJvcCkge1xyXG4gICAgICAgICAgICB0aHJvd0lmUHJveHlSZWxlYXNlZChpc1Byb3h5UmVsZWFzZWQpO1xyXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gcmVsZWFzZVByb3h5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0UmVzcG9uc2VNZXNzYWdlKGVwLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUkVMRUFTRVwiIC8qIFJFTEVBU0UgKi8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IHBhdGgubWFwKChwKSA9PiBwLnRvU3RyaW5nKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUVuZFBvaW50KGVwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNQcm94eVJlbGVhc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHByb3AgPT09IFwidGhlblwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB0aGVuOiAoKSA9PiBwcm94eSB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgciA9IHJlcXVlc3RSZXNwb25zZU1lc3NhZ2UoZXAsIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkdFVFwiIC8qIEdFVCAqLyxcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBwYXRoLm1hcCgocCkgPT4gcC50b1N0cmluZygpKSxcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnJvbVdpcmVWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gci50aGVuLmJpbmQocik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVByb3h5KGVwLCBbLi4ucGF0aCwgcHJvcF0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0KF90YXJnZXQsIHByb3AsIHJhd1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRocm93SWZQcm94eVJlbGVhc2VkKGlzUHJveHlSZWxlYXNlZCk7XHJcbiAgICAgICAgICAgIC8vIEZJWE1FOiBFUzYgUHJveHkgSGFuZGxlciBgc2V0YCBtZXRob2RzIGFyZSBzdXBwb3NlZCB0byByZXR1cm4gYVxyXG4gICAgICAgICAgICAvLyBib29sZWFuLiBUbyBzaG93IGdvb2Qgd2lsbCwgd2UgcmV0dXJuIHRydWUgYXN5bmNocm9ub3VzbHkgwq9cXF8o44OEKV8vwq9cclxuICAgICAgICAgICAgY29uc3QgW3ZhbHVlLCB0cmFuc2ZlcmFibGVzXSA9IHRvV2lyZVZhbHVlKHJhd1ZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RSZXNwb25zZU1lc3NhZ2UoZXAsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiU0VUXCIgLyogU0VUICovLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogWy4uLnBhdGgsIHByb3BdLm1hcCgocCkgPT4gcC50b1N0cmluZygpKSxcclxuICAgICAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICB9LCB0cmFuc2ZlcmFibGVzKS50aGVuKGZyb21XaXJlVmFsdWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXBwbHkoX3RhcmdldCwgX3RoaXNBcmcsIHJhd0FyZ3VtZW50TGlzdCkge1xyXG4gICAgICAgICAgICB0aHJvd0lmUHJveHlSZWxlYXNlZChpc1Byb3h5UmVsZWFzZWQpO1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0ID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICBpZiAobGFzdCA9PT0gY3JlYXRlRW5kcG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0UmVzcG9uc2VNZXNzYWdlKGVwLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJFTkRQT0lOVFwiIC8qIEVORFBPSU5UICovLFxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihmcm9tV2lyZVZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBXZSBqdXN0IHByZXRlbmQgdGhhdCBgYmluZCgpYCBkaWRu4oCZdCBoYXBwZW4uXHJcbiAgICAgICAgICAgIGlmIChsYXN0ID09PSBcImJpbmRcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVByb3h5KGVwLCBwYXRoLnNsaWNlKDAsIC0xKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgW2FyZ3VtZW50TGlzdCwgdHJhbnNmZXJhYmxlc10gPSBwcm9jZXNzQXJndW1lbnRzKHJhd0FyZ3VtZW50TGlzdCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0UmVzcG9uc2VNZXNzYWdlKGVwLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkFQUExZXCIgLyogQVBQTFkgKi8sXHJcbiAgICAgICAgICAgICAgICBwYXRoOiBwYXRoLm1hcCgocCkgPT4gcC50b1N0cmluZygpKSxcclxuICAgICAgICAgICAgICAgIGFyZ3VtZW50TGlzdCxcclxuICAgICAgICAgICAgfSwgdHJhbnNmZXJhYmxlcykudGhlbihmcm9tV2lyZVZhbHVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnN0cnVjdChfdGFyZ2V0LCByYXdBcmd1bWVudExpc3QpIHtcclxuICAgICAgICAgICAgdGhyb3dJZlByb3h5UmVsZWFzZWQoaXNQcm94eVJlbGVhc2VkKTtcclxuICAgICAgICAgICAgY29uc3QgW2FyZ3VtZW50TGlzdCwgdHJhbnNmZXJhYmxlc10gPSBwcm9jZXNzQXJndW1lbnRzKHJhd0FyZ3VtZW50TGlzdCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0UmVzcG9uc2VNZXNzYWdlKGVwLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkNPTlNUUlVDVFwiIC8qIENPTlNUUlVDVCAqLyxcclxuICAgICAgICAgICAgICAgIHBhdGg6IHBhdGgubWFwKChwKSA9PiBwLnRvU3RyaW5nKCkpLFxyXG4gICAgICAgICAgICAgICAgYXJndW1lbnRMaXN0LFxyXG4gICAgICAgICAgICB9LCB0cmFuc2ZlcmFibGVzKS50aGVuKGZyb21XaXJlVmFsdWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwcm94eTtcclxufVxyXG5mdW5jdGlvbiBteUZsYXQoYXJyKSB7XHJcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYXJyKTtcclxufVxyXG5mdW5jdGlvbiBwcm9jZXNzQXJndW1lbnRzKGFyZ3VtZW50TGlzdCkge1xyXG4gICAgY29uc3QgcHJvY2Vzc2VkID0gYXJndW1lbnRMaXN0Lm1hcCh0b1dpcmVWYWx1ZSk7XHJcbiAgICByZXR1cm4gW3Byb2Nlc3NlZC5tYXAoKHYpID0+IHZbMF0pLCBteUZsYXQocHJvY2Vzc2VkLm1hcCgodikgPT4gdlsxXSkpXTtcclxufVxyXG5jb25zdCB0cmFuc2ZlckNhY2hlID0gbmV3IFdlYWtNYXAoKTtcclxuZnVuY3Rpb24gdHJhbnNmZXIob2JqLCB0cmFuc2ZlcnMpIHtcclxuICAgIHRyYW5zZmVyQ2FjaGUuc2V0KG9iaiwgdHJhbnNmZXJzKTtcclxuICAgIHJldHVybiBvYmo7XHJcbn1cclxuZnVuY3Rpb24gcHJveHkob2JqKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihvYmosIHsgW3Byb3h5TWFya2VyXTogdHJ1ZSB9KTtcclxufVxyXG5mdW5jdGlvbiB3aW5kb3dFbmRwb2ludCh3LCBjb250ZXh0ID0gc2VsZiwgdGFyZ2V0T3JpZ2luID0gXCIqXCIpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcG9zdE1lc3NhZ2U6IChtc2csIHRyYW5zZmVyYWJsZXMpID0+IHcucG9zdE1lc3NhZ2UobXNnLCB0YXJnZXRPcmlnaW4sIHRyYW5zZmVyYWJsZXMpLFxyXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXI6IGNvbnRleHQuYWRkRXZlbnRMaXN0ZW5lci5iaW5kKGNvbnRleHQpLFxyXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGNvbnRleHQucmVtb3ZlRXZlbnRMaXN0ZW5lci5iaW5kKGNvbnRleHQpLFxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiB0b1dpcmVWYWx1ZSh2YWx1ZSkge1xyXG4gICAgZm9yIChjb25zdCBbbmFtZSwgaGFuZGxlcl0gb2YgdHJhbnNmZXJIYW5kbGVycykge1xyXG4gICAgICAgIGlmIChoYW5kbGVyLmNhbkhhbmRsZSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgW3NlcmlhbGl6ZWRWYWx1ZSwgdHJhbnNmZXJhYmxlc10gPSBoYW5kbGVyLnNlcmlhbGl6ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJIQU5ETEVSXCIgLyogSEFORExFUiAqLyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZXJpYWxpemVkVmFsdWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmZXJhYmxlcyxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJSQVdcIiAvKiBSQVcgKi8sXHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHJhbnNmZXJDYWNoZS5nZXQodmFsdWUpIHx8IFtdLFxyXG4gICAgXTtcclxufVxyXG5mdW5jdGlvbiBmcm9tV2lyZVZhbHVlKHZhbHVlKSB7XHJcbiAgICBzd2l0Y2ggKHZhbHVlLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiSEFORExFUlwiIC8qIEhBTkRMRVIgKi86XHJcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2ZlckhhbmRsZXJzLmdldCh2YWx1ZS5uYW1lKS5kZXNlcmlhbGl6ZSh2YWx1ZS52YWx1ZSk7XHJcbiAgICAgICAgY2FzZSBcIlJBV1wiIC8qIFJBVyAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnZhbHVlO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHJlcXVlc3RSZXNwb25zZU1lc3NhZ2UoZXAsIG1zZywgdHJhbnNmZXJzKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IGdlbmVyYXRlVVVJRCgpO1xyXG4gICAgICAgIGVwLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGZ1bmN0aW9uIGwoZXYpIHtcclxuICAgICAgICAgICAgaWYgKCFldi5kYXRhIHx8ICFldi5kYXRhLmlkIHx8IGV2LmRhdGEuaWQgIT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgbCk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZXYuZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGVwLnN0YXJ0KSB7XHJcbiAgICAgICAgICAgIGVwLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVwLnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oeyBpZCB9LCBtc2cpLCB0cmFuc2ZlcnMpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZ2VuZXJhdGVVVUlEKCkge1xyXG4gICAgcmV0dXJuIG5ldyBBcnJheSg0KVxyXG4gICAgICAgIC5maWxsKDApXHJcbiAgICAgICAgLm1hcCgoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikudG9TdHJpbmcoMTYpKVxyXG4gICAgICAgIC5qb2luKFwiLVwiKTtcclxufVxuXG5leHBvcnQgeyBjcmVhdGVFbmRwb2ludCwgZXhwb3NlLCBwcm94eSwgcHJveHlNYXJrZXIsIHJlbGVhc2VQcm94eSwgdHJhbnNmZXIsIHRyYW5zZmVySGFuZGxlcnMsIHdpbmRvd0VuZHBvaW50LCB3cmFwIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21saW5rLm1qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/comlink/dist/esm/comlink.mjs\n"));

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "static/chunks/" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "static/webpack/" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	!function() {
/******/ 		__webpack_require__.hmrF = function() { return "static/webpack/" + __webpack_require__.h() + ".2a17cbf2db1fcfd1.hot-update.json"; };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	!function() {
/******/ 		__webpack_require__.h = function() { return "a409ee269b55654d"; }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.hmd = function(module) {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: function() {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/relative url */
/******/ 	!function() {
/******/ 		__webpack_require__.U = function RelativeURL(url) {
/******/ 			var realUrl = new URL(url, "x:/");
/******/ 			var values = {};
/******/ 			for (var key in realUrl) values[key] = realUrl[key];
/******/ 			values.href = url;
/******/ 			values.pathname = url.replace(/[?#].*/, "");
/******/ 			values.origin = values.protocol = "";
/******/ 			values.toString = values.toJSON = function() { return url; };
/******/ 			for (var key in values) Object.defineProperty(this, key, { enumerable: true, configurable: true, value: values[key] });
/******/ 		};
/******/ 		__webpack_require__.U.prototype = URL.prototype;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/trusted types policy */
/******/ 	!function() {
/******/ 		var policy;
/******/ 		__webpack_require__.tt = function() {
/******/ 			// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 			if (policy === undefined) {
/******/ 				policy = {
/******/ 					createScript: function(script) { return script; },
/******/ 					createScriptURL: function(url) { return url; }
/******/ 				};
/******/ 				if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 					policy = trustedTypes.createPolicy("nextjs#bundler", policy);
/******/ 				}
/******/ 			}
/******/ 			return policy;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script */
/******/ 	!function() {
/******/ 		__webpack_require__.ts = function(script) { return __webpack_require__.tt().createScript(script); };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script url */
/******/ 	!function() {
/******/ 		__webpack_require__.tu = function(url) { return __webpack_require__.tt().createScriptURL(url); };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	!function() {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/_next/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	!function() {
/******/ 		if (__webpack_require__.i) {
/******/ 		__webpack_require__.i.push(function(options) {
/******/ 			var originalFactory = options.factory;
/******/ 			options.factory = function(moduleObject, moduleExports, webpackRequire) {
/******/ 				var hasRefresh = typeof self !== "undefined" && !!self.$RefreshInterceptModuleExecution$;
/******/ 				var cleanup = hasRefresh ? self.$RefreshInterceptModuleExecution$(moduleObject.id) : function() {};
/******/ 				try {
/******/ 					originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
/******/ 				} finally {
/******/ 					cleanup();
/******/ 				}
/******/ 			}
/******/ 		})
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	
/******/ 	// noop fns to prevent runtime errors during initialization
/******/ 	if (typeof self !== "undefined") {
/******/ 		self.$RefreshReg$ = function () {};
/******/ 		self.$RefreshSig$ = function () {
/******/ 			return function (type) {
/******/ 				return type;
/******/ 			};
/******/ 		};
/******/ 	}
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = self.location + "/../../../";
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = __webpack_require__.hmrS_importScripts = __webpack_require__.hmrS_importScripts || {
/******/ 			"halo-worker": 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = function(data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = function(chunkId, promises) {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.tu(__webpack_require__.p + __webpack_require__.u(chunkId)));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var success = false;
/******/ 			self["webpackHotUpdate_N_E"] = function(_, moreModules, runtime) {
/******/ 				for(var moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						currentUpdate[moduleId] = moreModules[moduleId];
/******/ 						if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 					}
/******/ 				}
/******/ 				if(runtime) currentUpdateRuntime.push(runtime);
/******/ 				success = true;
/******/ 			};
/******/ 			// start update chunk loading
/******/ 			importScripts(__webpack_require__.tu(__webpack_require__.p + __webpack_require__.hu(chunkId)));
/******/ 			if(!success) throw new Error("Loading update chunk failed for unknown reason");
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.importScripsHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.importScrips = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.importScrips = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.importScripsHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(function(response) {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./lib/halo2Prover/halo2Prover.ts");
/******/ 	_N_E = __webpack_exports__;
/******/ 	
/******/ })()
;