/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/halo2Prover/halo2Prover.ts":
/*!****************************************!*\
  !*** ./lib/halo2Prover/halo2Prover.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateProofScalarMult\": () => (/* binding */ generateProofScalarMult),\n/* harmony export */   \"generateProofScalarMultFull\": () => (/* binding */ generateProofScalarMultFull),\n/* harmony export */   \"generateProofSimpleCircuit\": () => (/* binding */ generateProofSimpleCircuit)\n/* harmony export */ });\n/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! comlink */ \"comlink\");\n/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(comlink__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fetch_ipa_params = async (k)=>{\n    const response = await fetch(`http://localhost:3000/params_k_${k}.bin`);\n    const bytes = await response.arrayBuffer();\n    const params = new Uint8Array(bytes);\n    return params;\n};\nconst generateProofSimpleCircuit = async ()=>{\n    console.log(\"Simple circuit proof\");\n    const params = await fetch_ipa_params(5);\n    const { default: init , initThreadPool , prove_simple_circuit , init_panic_hook  } = await __webpack_require__.e(/*! import() */ \"lib_halo2Prover_wasm_halo2_efficient_ecdsa_js-lib_halo2Prover_wasm_snippets_wasm-bindgen-rayo-1a65c4\").then(__webpack_require__.bind(__webpack_require__, /*! ./wasm/halo2_efficient_ecdsa.js */ \"./lib/halo2Prover/wasm/halo2_efficient_ecdsa.js\"));\n    console.log(\"number of threads\", navigator.hardwareConcurrency);\n    await init();\n    await init_panic_hook();\n    await initThreadPool(navigator.hardwareConcurrency);\n    console.time(\"Full proving time\");\n    const proof = await prove_simple_circuit(params);\n    console.timeEnd(\"Full proving time\");\n    console.log(\"proof\", proof);\n};\nconst generateProofScalarMult = async ()=>{\n    console.log(\"Scalar mult proof\");\n    const params = await fetch_ipa_params(11);\n    const { default: init , initThreadPool , prove_scalar_mult , init_panic_hook  } = await __webpack_require__.e(/*! import() */ \"lib_halo2Prover_wasm_halo2_efficient_ecdsa_js-lib_halo2Prover_wasm_snippets_wasm-bindgen-rayo-1a65c4\").then(__webpack_require__.bind(__webpack_require__, /*! ./wasm/halo2_efficient_ecdsa.js */ \"./lib/halo2Prover/wasm/halo2_efficient_ecdsa.js\"));\n    console.log(\"number of threads\", navigator.hardwareConcurrency);\n    await init();\n    await init_panic_hook();\n    await initThreadPool(navigator.hardwareConcurrency);\n    console.time(\"Full proving time\");\n    const proof = await prove_scalar_mult(params);\n    console.timeEnd(\"Full proving time\");\n    console.log(\"proof\", proof);\n};\nconst generateProofScalarMultFull = async ()=>{\n    console.log(\"Scalar mult full proof\");\n    const params = await fetch_ipa_params(11);\n    const { default: init , initThreadPool , prove_scalar_mult_full , init_panic_hook  } = await __webpack_require__.e(/*! import() */ \"lib_halo2Prover_wasm_halo2_efficient_ecdsa_js-lib_halo2Prover_wasm_snippets_wasm-bindgen-rayo-1a65c4\").then(__webpack_require__.bind(__webpack_require__, /*! ./wasm/halo2_efficient_ecdsa.js */ \"./lib/halo2Prover/wasm/halo2_efficient_ecdsa.js\"));\n    console.log(\"number of threads\", navigator.hardwareConcurrency);\n    await init();\n    await init_panic_hook();\n    await initThreadPool(navigator.hardwareConcurrency);\n    console.time(\"Full proving time\");\n    const proof = await prove_scalar_mult_full(params);\n    console.timeEnd(\"Full proving time\");\n    console.log(\"proof\", proof);\n};\nconst exports = {\n    generateProofScalarMult,\n    generateProofScalarMultFull,\n    generateProofSimpleCircuit\n};\n(0,comlink__WEBPACK_IMPORTED_MODULE_0__.expose)(exports);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaGFsbzJQcm92ZXIvaGFsbzJQcm92ZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFFakMsTUFBTUMsbUJBQW1CLE9BQU1DLElBQUs7SUFDbEMsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLENBQUMsK0JBQStCLEVBQUVGLEVBQUUsSUFBSSxDQUFDO0lBQ3RFLE1BQU1HLFFBQVEsTUFBTUYsU0FBU0csV0FBVztJQUV4QyxNQUFNQyxTQUFTLElBQUlDLFdBQVdIO0lBQzlCLE9BQU9FO0FBQ1Q7QUFFTyxNQUFNRSw2QkFBNkIsVUFBWTtJQUNwREMsUUFBUUMsR0FBRyxDQUFDO0lBQ1osTUFBTUosU0FBUyxNQUFNTixpQkFBaUI7SUFFdEMsTUFBTSxFQUNKVyxTQUFTQyxLQUFJLEVBQ2JDLGVBQWMsRUFDZEMscUJBQW9CLEVBQ3BCQyxnQkFBZSxFQUNoQixHQUFHLE1BQU0sMlJBQXlDO0lBRW5ETixRQUFRQyxHQUFHLENBQUMscUJBQXFCTSxVQUFVQyxtQkFBbUI7SUFFOUQsTUFBTUw7SUFDTixNQUFNRztJQUNOLE1BQU1GLGVBQWVHLFVBQVVDLG1CQUFtQjtJQUNsRFIsUUFBUVMsSUFBSSxDQUFDO0lBQ2IsTUFBTUMsUUFBUSxNQUFNTCxxQkFBcUJSO0lBQ3pDRyxRQUFRVyxPQUFPLENBQUM7SUFDaEJYLFFBQVFDLEdBQUcsQ0FBQyxTQUFTUztBQUN2QixFQUFFO0FBRUssTUFBTUUsMEJBQTBCLFVBQVk7SUFDakRaLFFBQVFDLEdBQUcsQ0FBQztJQUNaLE1BQU1KLFNBQVMsTUFBTU4saUJBQWlCO0lBRXRDLE1BQU0sRUFDSlcsU0FBU0MsS0FBSSxFQUNiQyxlQUFjLEVBQ2RTLGtCQUFpQixFQUNqQlAsZ0JBQWUsRUFDaEIsR0FBRyxNQUFNLDJSQUF5QztJQUVuRE4sUUFBUUMsR0FBRyxDQUFDLHFCQUFxQk0sVUFBVUMsbUJBQW1CO0lBRTlELE1BQU1MO0lBQ04sTUFBTUc7SUFDTixNQUFNRixlQUFlRyxVQUFVQyxtQkFBbUI7SUFDbERSLFFBQVFTLElBQUksQ0FBQztJQUNiLE1BQU1DLFFBQVEsTUFBTUcsa0JBQWtCaEI7SUFDdENHLFFBQVFXLE9BQU8sQ0FBQztJQUNoQlgsUUFBUUMsR0FBRyxDQUFDLFNBQVNTO0FBQ3ZCLEVBQUU7QUFFSyxNQUFNSSw4QkFBOEIsVUFBWTtJQUNyRGQsUUFBUUMsR0FBRyxDQUFDO0lBRVosTUFBTUosU0FBUyxNQUFNTixpQkFBaUI7SUFFdEMsTUFBTSxFQUNKVyxTQUFTQyxLQUFJLEVBQ2JDLGVBQWMsRUFDZFcsdUJBQXNCLEVBQ3RCVCxnQkFBZSxFQUNoQixHQUFHLE1BQU0sMlJBQXlDO0lBRW5ETixRQUFRQyxHQUFHLENBQUMscUJBQXFCTSxVQUFVQyxtQkFBbUI7SUFFOUQsTUFBTUw7SUFDTixNQUFNRztJQUNOLE1BQU1GLGVBQWVHLFVBQVVDLG1CQUFtQjtJQUNsRFIsUUFBUVMsSUFBSSxDQUFDO0lBQ2IsTUFBTUMsUUFBUSxNQUFNSyx1QkFBdUJsQjtJQUMzQ0csUUFBUVcsT0FBTyxDQUFDO0lBQ2hCWCxRQUFRQyxHQUFHLENBQUMsU0FBU1M7QUFDdkIsRUFBRTtBQUVGLE1BQU1NLFVBQVU7SUFDZEo7SUFDQUU7SUFDQWY7QUFDRjtBQUdBVCwrQ0FBTUEsQ0FBQzBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFsbzItZWZmaWNpZW50LWVjZHNhLWJlbmNoLy4vbGliL2hhbG8yUHJvdmVyL2hhbG8yUHJvdmVyLnRzP2ZjZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXhwb3NlIH0gZnJvbSBcImNvbWxpbmtcIjtcblxuY29uc3QgZmV0Y2hfaXBhX3BhcmFtcyA9IGFzeW5jIGsgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvcGFyYW1zX2tfJHtrfS5iaW5gKTtcbiAgY29uc3QgYnl0ZXMgPSBhd2FpdCByZXNwb25zZS5hcnJheUJ1ZmZlcigpO1xuXG4gIGNvbnN0IHBhcmFtcyA9IG5ldyBVaW50OEFycmF5KGJ5dGVzKTtcbiAgcmV0dXJuIHBhcmFtcztcbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVByb29mU2ltcGxlQ2lyY3VpdCA9IGFzeW5jICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJTaW1wbGUgY2lyY3VpdCBwcm9vZlwiKTtcbiAgY29uc3QgcGFyYW1zID0gYXdhaXQgZmV0Y2hfaXBhX3BhcmFtcyg1KTtcblxuICBjb25zdCB7XG4gICAgZGVmYXVsdDogaW5pdCxcbiAgICBpbml0VGhyZWFkUG9vbCxcbiAgICBwcm92ZV9zaW1wbGVfY2lyY3VpdCxcbiAgICBpbml0X3BhbmljX2hvb2tcbiAgfSA9IGF3YWl0IGltcG9ydChcIi4vd2FzbS9oYWxvMl9lZmZpY2llbnRfZWNkc2EuanNcIik7XG5cbiAgY29uc29sZS5sb2coXCJudW1iZXIgb2YgdGhyZWFkc1wiLCBuYXZpZ2F0b3IuaGFyZHdhcmVDb25jdXJyZW5jeSk7XG5cbiAgYXdhaXQgaW5pdCgpO1xuICBhd2FpdCBpbml0X3BhbmljX2hvb2soKTtcbiAgYXdhaXQgaW5pdFRocmVhZFBvb2wobmF2aWdhdG9yLmhhcmR3YXJlQ29uY3VycmVuY3kpO1xuICBjb25zb2xlLnRpbWUoXCJGdWxsIHByb3ZpbmcgdGltZVwiKTtcbiAgY29uc3QgcHJvb2YgPSBhd2FpdCBwcm92ZV9zaW1wbGVfY2lyY3VpdChwYXJhbXMpO1xuICBjb25zb2xlLnRpbWVFbmQoXCJGdWxsIHByb3ZpbmcgdGltZVwiKTtcbiAgY29uc29sZS5sb2coXCJwcm9vZlwiLCBwcm9vZik7XG59O1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVQcm9vZlNjYWxhck11bHQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiU2NhbGFyIG11bHQgcHJvb2ZcIik7XG4gIGNvbnN0IHBhcmFtcyA9IGF3YWl0IGZldGNoX2lwYV9wYXJhbXMoMTEpO1xuXG4gIGNvbnN0IHtcbiAgICBkZWZhdWx0OiBpbml0LFxuICAgIGluaXRUaHJlYWRQb29sLFxuICAgIHByb3ZlX3NjYWxhcl9tdWx0LFxuICAgIGluaXRfcGFuaWNfaG9va1xuICB9ID0gYXdhaXQgaW1wb3J0KFwiLi93YXNtL2hhbG8yX2VmZmljaWVudF9lY2RzYS5qc1wiKTtcblxuICBjb25zb2xlLmxvZyhcIm51bWJlciBvZiB0aHJlYWRzXCIsIG5hdmlnYXRvci5oYXJkd2FyZUNvbmN1cnJlbmN5KTtcblxuICBhd2FpdCBpbml0KCk7XG4gIGF3YWl0IGluaXRfcGFuaWNfaG9vaygpO1xuICBhd2FpdCBpbml0VGhyZWFkUG9vbChuYXZpZ2F0b3IuaGFyZHdhcmVDb25jdXJyZW5jeSk7XG4gIGNvbnNvbGUudGltZShcIkZ1bGwgcHJvdmluZyB0aW1lXCIpO1xuICBjb25zdCBwcm9vZiA9IGF3YWl0IHByb3ZlX3NjYWxhcl9tdWx0KHBhcmFtcyk7XG4gIGNvbnNvbGUudGltZUVuZChcIkZ1bGwgcHJvdmluZyB0aW1lXCIpO1xuICBjb25zb2xlLmxvZyhcInByb29mXCIsIHByb29mKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVByb29mU2NhbGFyTXVsdEZ1bGwgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiU2NhbGFyIG11bHQgZnVsbCBwcm9vZlwiKTtcblxuICBjb25zdCBwYXJhbXMgPSBhd2FpdCBmZXRjaF9pcGFfcGFyYW1zKDExKTtcblxuICBjb25zdCB7XG4gICAgZGVmYXVsdDogaW5pdCxcbiAgICBpbml0VGhyZWFkUG9vbCxcbiAgICBwcm92ZV9zY2FsYXJfbXVsdF9mdWxsLFxuICAgIGluaXRfcGFuaWNfaG9va1xuICB9ID0gYXdhaXQgaW1wb3J0KFwiLi93YXNtL2hhbG8yX2VmZmljaWVudF9lY2RzYS5qc1wiKTtcblxuICBjb25zb2xlLmxvZyhcIm51bWJlciBvZiB0aHJlYWRzXCIsIG5hdmlnYXRvci5oYXJkd2FyZUNvbmN1cnJlbmN5KTtcblxuICBhd2FpdCBpbml0KCk7XG4gIGF3YWl0IGluaXRfcGFuaWNfaG9vaygpO1xuICBhd2FpdCBpbml0VGhyZWFkUG9vbChuYXZpZ2F0b3IuaGFyZHdhcmVDb25jdXJyZW5jeSk7XG4gIGNvbnNvbGUudGltZShcIkZ1bGwgcHJvdmluZyB0aW1lXCIpO1xuICBjb25zdCBwcm9vZiA9IGF3YWl0IHByb3ZlX3NjYWxhcl9tdWx0X2Z1bGwocGFyYW1zKTtcbiAgY29uc29sZS50aW1lRW5kKFwiRnVsbCBwcm92aW5nIHRpbWVcIik7XG4gIGNvbnNvbGUubG9nKFwicHJvb2ZcIiwgcHJvb2YpO1xufTtcblxuY29uc3QgZXhwb3J0cyA9IHtcbiAgZ2VuZXJhdGVQcm9vZlNjYWxhck11bHQsXG4gIGdlbmVyYXRlUHJvb2ZTY2FsYXJNdWx0RnVsbCxcbiAgZ2VuZXJhdGVQcm9vZlNpbXBsZUNpcmN1aXRcbn07XG5leHBvcnQgdHlwZSBIYWxvMlByb3ZlciA9IHR5cGVvZiBleHBvcnRzO1xuXG5leHBvc2UoZXhwb3J0cyk7XG4iXSwibmFtZXMiOlsiZXhwb3NlIiwiZmV0Y2hfaXBhX3BhcmFtcyIsImsiLCJyZXNwb25zZSIsImZldGNoIiwiYnl0ZXMiLCJhcnJheUJ1ZmZlciIsInBhcmFtcyIsIlVpbnQ4QXJyYXkiLCJnZW5lcmF0ZVByb29mU2ltcGxlQ2lyY3VpdCIsImNvbnNvbGUiLCJsb2ciLCJkZWZhdWx0IiwiaW5pdCIsImluaXRUaHJlYWRQb29sIiwicHJvdmVfc2ltcGxlX2NpcmN1aXQiLCJpbml0X3BhbmljX2hvb2siLCJuYXZpZ2F0b3IiLCJoYXJkd2FyZUNvbmN1cnJlbmN5IiwidGltZSIsInByb29mIiwidGltZUVuZCIsImdlbmVyYXRlUHJvb2ZTY2FsYXJNdWx0IiwicHJvdmVfc2NhbGFyX211bHQiLCJnZW5lcmF0ZVByb29mU2NhbGFyTXVsdEZ1bGwiLCJwcm92ZV9zY2FsYXJfbXVsdF9mdWxsIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/halo2Prover/halo2Prover.ts\n");

/***/ }),

/***/ "comlink":
/*!**************************!*\
  !*** external "comlink" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("comlink");

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
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/relative url */
/******/ 	(() => {
/******/ 		__webpack_require__.U = function RelativeURL(url) {
/******/ 			var realUrl = new URL(url, "x:/");
/******/ 			var values = {};
/******/ 			for (var key in realUrl) values[key] = realUrl[key];
/******/ 			values.href = url;
/******/ 			values.pathname = url.replace(/[?#].*/, "");
/******/ 			values.origin = values.protocol = "";
/******/ 			values.toString = values.toJSON = () => (url);
/******/ 			for (var key in values) Object.defineProperty(this, key, { enumerable: true, configurable: true, value: values[key] });
/******/ 		};
/******/ 		__webpack_require__.U.prototype = URL.prototype;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/_next/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = require("url").pathToFileURL(__filename);
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"halo-worker": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./lib/halo2Prover/halo2Prover.ts");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;