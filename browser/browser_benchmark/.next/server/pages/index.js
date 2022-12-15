"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! comlink */ \"comlink\");\n/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(comlink__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst withProverApi = (worker)=>(0,comlink__WEBPACK_IMPORTED_MODULE_2__.wrap)(worker);\nfunction Home() {\n    const [worker, setWorker] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const worker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(\"halo-worker\"), __webpack_require__.b), {\n            name: \"halo-worker\",\n            type: undefined\n        });\n        setWorker(worker);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: async ()=>{\n                    if (worker) {\n                        await withProverApi(worker).generateProofScalarMult();\n                    }\n                },\n                children: \"prove (scalar mult)\"\n            }, void 0, false, {\n                fileName: \"/Users/vb/Dropbox/code/halo2-secp/browser/browser_benchmark/pages/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: async ()=>{\n                    if (worker) {\n                        await withProverApi(worker).generateProofScalarMultFull();\n                    }\n                },\n                children: \"prove (scalar mult full)\"\n            }, void 0, false, {\n                fileName: \"/Users/vb/Dropbox/code/halo2-secp/browser/browser_benchmark/pages/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: async ()=>{\n                    if (worker) {\n                        await withProverApi(worker).generateProofSimpleCircuit();\n                    }\n                },\n                children: \"prove (simple circuit)\"\n            }, void 0, false, {\n                fileName: \"/Users/vb/Dropbox/code/halo2-secp/browser/browser_benchmark/pages/index.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vb/Dropbox/code/halo2-secp/browser/browser_benchmark/pages/index.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTRDO0FBRWI7QUFFL0IsTUFBTUcsZ0JBQWdCLENBQUNDLFNBQ3JCRiw2Q0FBSUEsQ0FBdURFO0FBRTlDLFNBQVNDLE9BQU87SUFDN0IsTUFBTSxDQUFDRCxRQUFRRSxVQUFVLEdBQUdOLCtDQUFRQTtJQUVwQ0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1HLFNBQVMsSUFBSUcsT0FDakIsSUFBSUMsSUFBSSx1R0FBaUQsR0FDekQ7WUFDRUUsTUFBTTtZQUNOQyxNQUFNLFNBQVE7UUFDaEI7UUFHRkwsVUFBVUY7SUFDWixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1E7OzBCQUNDLDhEQUFDQztnQkFDQ0MsU0FBUyxVQUFZO29CQUNuQixJQUFJVixRQUFRO3dCQUNWLE1BQU1ELGNBQWNDLFFBQVFXLHVCQUF1QjtvQkFDckQsQ0FBQztnQkFDSDswQkFDRDs7Ozs7OzBCQUdELDhEQUFDRjtnQkFDQ0MsU0FBUyxVQUFZO29CQUNuQixJQUFJVixRQUFRO3dCQUNWLE1BQU1ELGNBQWNDLFFBQVFZLDJCQUEyQjtvQkFDekQsQ0FBQztnQkFDSDswQkFDRDs7Ozs7OzBCQUdELDhEQUFDSDtnQkFDQ0MsU0FBUyxVQUFZO29CQUNuQixJQUFJVixRQUFRO3dCQUNWLE1BQU1ELGNBQWNDLFFBQVFhLDBCQUEwQjtvQkFDeEQsQ0FBQztnQkFDSDswQkFDRDs7Ozs7Ozs7Ozs7O0FBS1AsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hhbG8yLWVmZmljaWVudC1lY2RzYS1iZW5jaC8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgd3JhcCB9IGZyb20gXCJjb21saW5rXCI7XG5cbmNvbnN0IHdpdGhQcm92ZXJBcGkgPSAod29ya2VyOiBXb3JrZXIpID0+XG4gIHdyYXA8aW1wb3J0KFwiLi4vbGliL2hhbG8yUHJvdmVyL2hhbG8yUHJvdmVyXCIpLkhhbG8yUHJvdmVyPih3b3JrZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbd29ya2VyLCBzZXRXb3JrZXJdID0gdXNlU3RhdGU8YW55PigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgd29ya2VyID0gbmV3IFdvcmtlcihcbiAgICAgIG5ldyBVUkwoXCIuLi9saWIvaGFsbzJQcm92ZXIvaGFsbzJQcm92ZXJcIiwgaW1wb3J0Lm1ldGEudXJsKSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJoYWxvLXdvcmtlclwiLFxuICAgICAgICB0eXBlOiBcIm1vZHVsZVwiXG4gICAgICB9XG4gICAgKTtcblxuICAgIHNldFdvcmtlcih3b3JrZXIpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgaWYgKHdvcmtlcikge1xuICAgICAgICAgICAgYXdhaXQgd2l0aFByb3ZlckFwaSh3b3JrZXIpLmdlbmVyYXRlUHJvb2ZTY2FsYXJNdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBwcm92ZSAoc2NhbGFyIG11bHQpXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGlmICh3b3JrZXIpIHtcbiAgICAgICAgICAgIGF3YWl0IHdpdGhQcm92ZXJBcGkod29ya2VyKS5nZW5lcmF0ZVByb29mU2NhbGFyTXVsdEZ1bGwoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHByb3ZlIChzY2FsYXIgbXVsdCBmdWxsKVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgICBpZiAod29ya2VyKSB7XG4gICAgICAgICAgICBhd2FpdCB3aXRoUHJvdmVyQXBpKHdvcmtlcikuZ2VuZXJhdGVQcm9vZlNpbXBsZUNpcmN1aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHByb3ZlIChzaW1wbGUgY2lyY3VpdClcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwid3JhcCIsIndpdGhQcm92ZXJBcGkiLCJ3b3JrZXIiLCJIb21lIiwic2V0V29ya2VyIiwiV29ya2VyIiwiVVJMIiwidXJsIiwibmFtZSIsInR5cGUiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiZ2VuZXJhdGVQcm9vZlNjYWxhck11bHQiLCJnZW5lcmF0ZVByb29mU2NhbGFyTXVsdEZ1bGwiLCJnZW5lcmF0ZVByb29mU2ltcGxlQ2lyY3VpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "comlink":
/*!**************************!*\
  !*** external "comlink" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("comlink");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();