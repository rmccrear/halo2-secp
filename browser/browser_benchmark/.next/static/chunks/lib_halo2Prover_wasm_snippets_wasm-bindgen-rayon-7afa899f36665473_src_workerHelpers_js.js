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

/***/ "./lib/halo2Prover/wasm/snippets/wasm-bindgen-rayon-7afa899f36665473/src/workerHelpers.js":
/*!************************************************************************************************!*\
  !*** ./lib/halo2Prover/wasm/snippets/wasm-bindgen-rayon-7afa899f36665473/src/workerHelpers.js ***!
  \************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startWorkers\": function() { return /* binding */ startWorkers; }\n/* harmony export */ });\n/**\n * Copyright 2021 Google Inc. All Rights Reserved.\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *     http://www.apache.org/licenses/LICENSE-2.0\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ // Note: we use `wasm_bindgen_worker_`-prefixed message types to make sure\n// we can handle bundling into other files, which might happen to have their\n// own `postMessage`/`onmessage` communication channels.\n//\n// If we didn't take that into the account, we could send much simpler signals\n// like just `0` or whatever, but the code would be less resilient.\nfunction waitForMsgType(target, type) {\n    return new Promise((resolve)=>{\n        target.addEventListener(\"message\", function onMsg(param) {\n            let { data  } = param;\n            if (data == null || data.type !== type) return;\n            target.removeEventListener(\"message\", onMsg);\n            resolve(data);\n        });\n    });\n}\nwaitForMsgType(self, \"wasm_bindgen_worker_init\").then(async (data)=>{\n    // # Note 1\n    // Our JS should have been generated in\n    // `[out-dir]/snippets/wasm-bindgen-rayon-[hash]/workerHelpers.js`,\n    // resolve the main module via `../../..`.\n    //\n    // This might need updating if the generated structure changes on wasm-bindgen\n    // side ever in the future, but works well with bundlers today. The whole\n    // point of this crate, after all, is to abstract away unstable features\n    // and temporary bugs so that you don't need to deal with them in your code.\n    //\n    // # Note 2\n    // This could be a regular import, but then some bundlers complain about\n    // circular deps.\n    //\n    // Dynamic import could be cheap if this file was inlined into the parent,\n    // which would require us just using `../../..` in `new Worker` below,\n    // but that doesn't work because wasm-pack unconditionally adds\n    // \"sideEffects\":false (see below).\n    //\n    // OTOH, even though it can't be inlined, it should be still reasonably\n    // cheap since the requested file is already in cache (it was loaded by\n    // the main thread).\n    const pkg = await __webpack_require__.e(/*! import() */ \"lib_halo2Prover_wasm_halo2_efficient_ecdsa_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../.. */ \"./lib/halo2Prover/wasm/halo2_efficient_ecdsa.js\"));\n    await pkg.default(data.module, data.memory);\n    postMessage({\n        type: \"wasm_bindgen_worker_ready\"\n    });\n    pkg.wbg_rayon_start_worker(data.receiver);\n});\n// Note: this is never used, but necessary to prevent a bug in Firefox\n// (https://bugzilla.mozilla.org/show_bug.cgi?id=1702191) where it collects\n// Web Workers that have a shared WebAssembly memory with the main thread,\n// but are not explicitly rooted via a `Worker` instance.\n//\n// By storing them in a variable, we can keep `Worker` objects around and\n// prevent them from getting GC-d.\nlet _workers;\nasync function startWorkers(module, memory, builder) {\n    const workerInit = {\n        type: \"wasm_bindgen_worker_init\",\n        module,\n        memory,\n        receiver: builder.receiver()\n    };\n    _workers = await Promise.all(Array.from({\n        length: builder.numThreads()\n    }, async ()=>{\n        // Self-spawn into a new Worker.\n        //\n        // TODO: while `new URL('...', import.meta.url) becomes a semi-standard\n        // way to get asset URLs relative to the module across various bundlers\n        // and browser, ideally we should switch to `import.meta.resolve`\n        // once it becomes a standard.\n        //\n        // Note: we could use `../../..` as the URL here to inline workerHelpers.js\n        // into the parent entry instead of creating another split point -\n        // this would be preferable from optimization perspective -\n        // however, Webpack then eliminates all message handler code\n        // because wasm-pack produces \"sideEffects\":false in package.json\n        // unconditionally.\n        //\n        // The only way to work around that is to have side effect code\n        // in an entry point such as Worker file itself.\n        const worker = new Worker(__webpack_require__.tu(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(\"lib_halo2Prover_wasm_snippets_wasm-bindgen-rayon-7afa899f36665473_src_workerHelpers_js\"), __webpack_require__.b)), {\n            type: undefined\n        });\n        worker.postMessage(workerInit);\n        await waitForMsgType(worker, \"wasm_bindgen_worker_ready\");\n        return worker;\n    }));\n    builder.build();\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaGFsbzJQcm92ZXIvd2FzbS9zbmlwcGV0cy93YXNtLWJpbmRnZW4tcmF5b24tN2FmYTg5OWYzNjY2NTQ3My9zcmMvd29ya2VySGVscGVycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7Ozs7O0NBV0MsR0FFRCwwRUFBMEU7QUFDMUUsNEVBQTRFO0FBQzVFLHdEQUF3RDtBQUN4RCxFQUFFO0FBQ0YsOEVBQThFO0FBQzlFLG1FQUFtRTtBQUVuRSxTQUFTQSxlQUFlQyxNQUFNLEVBQUVDLElBQUksRUFBRTtJQUNwQyxPQUFPLElBQUlDLFFBQVFDLENBQUFBLFVBQVc7UUFDNUJILE9BQU9JLGdCQUFnQixDQUFDLFdBQVcsU0FBU0MsTUFBTSxLQUFRLEVBQUU7Z0JBQVYsRUFBRUMsS0FBSSxFQUFFLEdBQVI7WUFDaEQsSUFBSUEsUUFBUSxJQUFJLElBQUlBLEtBQUtMLElBQUksS0FBS0EsTUFBTTtZQUN4Q0QsT0FBT08sbUJBQW1CLENBQUMsV0FBV0Y7WUFDdENGLFFBQVFHO1FBQ1Y7SUFDRjtBQUNGO0FBRUFQLGVBQWVTLE1BQU0sNEJBQTRCQyxJQUFJLENBQUMsT0FBTUgsT0FBUTtJQUNsRSxXQUFXO0lBQ1gsdUNBQXVDO0lBQ3ZDLG1FQUFtRTtJQUNuRSwwQ0FBMEM7SUFDMUMsRUFBRTtJQUNGLDhFQUE4RTtJQUM5RSx5RUFBeUU7SUFDekUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSxFQUFFO0lBQ0YsV0FBVztJQUNYLHdFQUF3RTtJQUN4RSxpQkFBaUI7SUFDakIsRUFBRTtJQUNGLDBFQUEwRTtJQUMxRSxzRUFBc0U7SUFDdEUsK0RBQStEO0lBQy9ELG1DQUFtQztJQUNuQyxFQUFFO0lBQ0YsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSxvQkFBb0I7SUFDcEIsTUFBTUksTUFBTSxNQUFNLDZNQUFPO0lBQ3pCLE1BQU1BLElBQUlDLE9BQU8sQ0FBQ0wsS0FBS00sTUFBTSxFQUFFTixLQUFLTyxNQUFNO0lBQzFDQyxZQUFZO1FBQUViLE1BQU07SUFBNEI7SUFDaERTLElBQUlLLHNCQUFzQixDQUFDVCxLQUFLVSxRQUFRO0FBQzFDO0FBRUEsc0VBQXNFO0FBQ3RFLDJFQUEyRTtBQUMzRSwwRUFBMEU7QUFDMUUseURBQXlEO0FBQ3pELEVBQUU7QUFDRix5RUFBeUU7QUFDekUsa0NBQWtDO0FBQ2xDLElBQUlDO0FBRUcsZUFBZUMsYUFBYU4sTUFBTSxFQUFFQyxNQUFNLEVBQUVNLE9BQU8sRUFBRTtJQUMxRCxNQUFNQyxhQUFhO1FBQ2pCbkIsTUFBTTtRQUNOVztRQUNBQztRQUNBRyxVQUFVRyxRQUFRSCxRQUFRO0lBQzVCO0lBRUFDLFdBQVcsTUFBTWYsUUFBUW1CLEdBQUcsQ0FDMUJDLE1BQU1DLElBQUksQ0FBQztRQUFFQyxRQUFRTCxRQUFRTSxVQUFVO0lBQUcsR0FBRyxVQUFZO1FBQ3ZELGdDQUFnQztRQUNoQyxFQUFFO1FBQ0YsdUVBQXVFO1FBQ3ZFLHVFQUF1RTtRQUN2RSxpRUFBaUU7UUFDakUsOEJBQThCO1FBQzlCLEVBQUU7UUFDRiwyRUFBMkU7UUFDM0Usa0VBQWtFO1FBQ2xFLDJEQUEyRDtRQUMzRCw0REFBNEQ7UUFDNUQsaUVBQWlFO1FBQ2pFLG1CQUFtQjtRQUNuQixFQUFFO1FBQ0YsK0RBQStEO1FBQy9ELGdEQUFnRDtRQUNoRCxNQUFNQyxTQUFTLElBQUlDLE9BQU8sMkJBQUlDLElBQUksa0xBQXFDLENBQUMsR0FBRTtZQUN4RTNCLE1BQU07UUFDUjtRQUNBeUIsT0FBT1osV0FBVyxDQUFDTTtRQUNuQixNQUFNckIsZUFBZTJCLFFBQVE7UUFDN0IsT0FBT0E7SUFDVDtJQUVGUCxRQUFRVyxLQUFLO0FBQ2YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvaGFsbzJQcm92ZXIvd2FzbS9zbmlwcGV0cy93YXNtLWJpbmRnZW4tcmF5b24tN2FmYTg5OWYzNjY2NTQ3My9zcmMvd29ya2VySGVscGVycy5qcz9jMGI4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gTm90ZTogd2UgdXNlIGB3YXNtX2JpbmRnZW5fd29ya2VyX2AtcHJlZml4ZWQgbWVzc2FnZSB0eXBlcyB0byBtYWtlIHN1cmVcbi8vIHdlIGNhbiBoYW5kbGUgYnVuZGxpbmcgaW50byBvdGhlciBmaWxlcywgd2hpY2ggbWlnaHQgaGFwcGVuIHRvIGhhdmUgdGhlaXJcbi8vIG93biBgcG9zdE1lc3NhZ2VgL2Bvbm1lc3NhZ2VgIGNvbW11bmljYXRpb24gY2hhbm5lbHMuXG4vL1xuLy8gSWYgd2UgZGlkbid0IHRha2UgdGhhdCBpbnRvIHRoZSBhY2NvdW50LCB3ZSBjb3VsZCBzZW5kIG11Y2ggc2ltcGxlciBzaWduYWxzXG4vLyBsaWtlIGp1c3QgYDBgIG9yIHdoYXRldmVyLCBidXQgdGhlIGNvZGUgd291bGQgYmUgbGVzcyByZXNpbGllbnQuXG5cbmZ1bmN0aW9uIHdhaXRGb3JNc2dUeXBlKHRhcmdldCwgdHlwZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiBvbk1zZyh7IGRhdGEgfSkge1xuICAgICAgaWYgKGRhdGEgPT0gbnVsbCB8fCBkYXRhLnR5cGUgIT09IHR5cGUpIHJldHVybjtcbiAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25Nc2cpO1xuICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbndhaXRGb3JNc2dUeXBlKHNlbGYsICd3YXNtX2JpbmRnZW5fd29ya2VyX2luaXQnKS50aGVuKGFzeW5jIGRhdGEgPT4ge1xuICAvLyAjIE5vdGUgMVxuICAvLyBPdXIgSlMgc2hvdWxkIGhhdmUgYmVlbiBnZW5lcmF0ZWQgaW5cbiAgLy8gYFtvdXQtZGlyXS9zbmlwcGV0cy93YXNtLWJpbmRnZW4tcmF5b24tW2hhc2hdL3dvcmtlckhlbHBlcnMuanNgLFxuICAvLyByZXNvbHZlIHRoZSBtYWluIG1vZHVsZSB2aWEgYC4uLy4uLy4uYC5cbiAgLy9cbiAgLy8gVGhpcyBtaWdodCBuZWVkIHVwZGF0aW5nIGlmIHRoZSBnZW5lcmF0ZWQgc3RydWN0dXJlIGNoYW5nZXMgb24gd2FzbS1iaW5kZ2VuXG4gIC8vIHNpZGUgZXZlciBpbiB0aGUgZnV0dXJlLCBidXQgd29ya3Mgd2VsbCB3aXRoIGJ1bmRsZXJzIHRvZGF5LiBUaGUgd2hvbGVcbiAgLy8gcG9pbnQgb2YgdGhpcyBjcmF0ZSwgYWZ0ZXIgYWxsLCBpcyB0byBhYnN0cmFjdCBhd2F5IHVuc3RhYmxlIGZlYXR1cmVzXG4gIC8vIGFuZCB0ZW1wb3JhcnkgYnVncyBzbyB0aGF0IHlvdSBkb24ndCBuZWVkIHRvIGRlYWwgd2l0aCB0aGVtIGluIHlvdXIgY29kZS5cbiAgLy9cbiAgLy8gIyBOb3RlIDJcbiAgLy8gVGhpcyBjb3VsZCBiZSBhIHJlZ3VsYXIgaW1wb3J0LCBidXQgdGhlbiBzb21lIGJ1bmRsZXJzIGNvbXBsYWluIGFib3V0XG4gIC8vIGNpcmN1bGFyIGRlcHMuXG4gIC8vXG4gIC8vIER5bmFtaWMgaW1wb3J0IGNvdWxkIGJlIGNoZWFwIGlmIHRoaXMgZmlsZSB3YXMgaW5saW5lZCBpbnRvIHRoZSBwYXJlbnQsXG4gIC8vIHdoaWNoIHdvdWxkIHJlcXVpcmUgdXMganVzdCB1c2luZyBgLi4vLi4vLi5gIGluIGBuZXcgV29ya2VyYCBiZWxvdyxcbiAgLy8gYnV0IHRoYXQgZG9lc24ndCB3b3JrIGJlY2F1c2Ugd2FzbS1wYWNrIHVuY29uZGl0aW9uYWxseSBhZGRzXG4gIC8vIFwic2lkZUVmZmVjdHNcIjpmYWxzZSAoc2VlIGJlbG93KS5cbiAgLy9cbiAgLy8gT1RPSCwgZXZlbiB0aG91Z2ggaXQgY2FuJ3QgYmUgaW5saW5lZCwgaXQgc2hvdWxkIGJlIHN0aWxsIHJlYXNvbmFibHlcbiAgLy8gY2hlYXAgc2luY2UgdGhlIHJlcXVlc3RlZCBmaWxlIGlzIGFscmVhZHkgaW4gY2FjaGUgKGl0IHdhcyBsb2FkZWQgYnlcbiAgLy8gdGhlIG1haW4gdGhyZWFkKS5cbiAgY29uc3QgcGtnID0gYXdhaXQgaW1wb3J0KCcuLi8uLi8uLicpO1xuICBhd2FpdCBwa2cuZGVmYXVsdChkYXRhLm1vZHVsZSwgZGF0YS5tZW1vcnkpO1xuICBwb3N0TWVzc2FnZSh7IHR5cGU6ICd3YXNtX2JpbmRnZW5fd29ya2VyX3JlYWR5JyB9KTtcbiAgcGtnLndiZ19yYXlvbl9zdGFydF93b3JrZXIoZGF0YS5yZWNlaXZlcik7XG59KTtcblxuLy8gTm90ZTogdGhpcyBpcyBuZXZlciB1c2VkLCBidXQgbmVjZXNzYXJ5IHRvIHByZXZlbnQgYSBidWcgaW4gRmlyZWZveFxuLy8gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE3MDIxOTEpIHdoZXJlIGl0IGNvbGxlY3RzXG4vLyBXZWIgV29ya2VycyB0aGF0IGhhdmUgYSBzaGFyZWQgV2ViQXNzZW1ibHkgbWVtb3J5IHdpdGggdGhlIG1haW4gdGhyZWFkLFxuLy8gYnV0IGFyZSBub3QgZXhwbGljaXRseSByb290ZWQgdmlhIGEgYFdvcmtlcmAgaW5zdGFuY2UuXG4vL1xuLy8gQnkgc3RvcmluZyB0aGVtIGluIGEgdmFyaWFibGUsIHdlIGNhbiBrZWVwIGBXb3JrZXJgIG9iamVjdHMgYXJvdW5kIGFuZFxuLy8gcHJldmVudCB0aGVtIGZyb20gZ2V0dGluZyBHQy1kLlxubGV0IF93b3JrZXJzO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhcnRXb3JrZXJzKG1vZHVsZSwgbWVtb3J5LCBidWlsZGVyKSB7XG4gIGNvbnN0IHdvcmtlckluaXQgPSB7XG4gICAgdHlwZTogJ3dhc21fYmluZGdlbl93b3JrZXJfaW5pdCcsXG4gICAgbW9kdWxlLFxuICAgIG1lbW9yeSxcbiAgICByZWNlaXZlcjogYnVpbGRlci5yZWNlaXZlcigpXG4gIH07XG5cbiAgX3dvcmtlcnMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiBidWlsZGVyLm51bVRocmVhZHMoKSB9LCBhc3luYyAoKSA9PiB7XG4gICAgICAvLyBTZWxmLXNwYXduIGludG8gYSBuZXcgV29ya2VyLlxuICAgICAgLy9cbiAgICAgIC8vIFRPRE86IHdoaWxlIGBuZXcgVVJMKCcuLi4nLCBpbXBvcnQubWV0YS51cmwpIGJlY29tZXMgYSBzZW1pLXN0YW5kYXJkXG4gICAgICAvLyB3YXkgdG8gZ2V0IGFzc2V0IFVSTHMgcmVsYXRpdmUgdG8gdGhlIG1vZHVsZSBhY3Jvc3MgdmFyaW91cyBidW5kbGVyc1xuICAgICAgLy8gYW5kIGJyb3dzZXIsIGlkZWFsbHkgd2Ugc2hvdWxkIHN3aXRjaCB0byBgaW1wb3J0Lm1ldGEucmVzb2x2ZWBcbiAgICAgIC8vIG9uY2UgaXQgYmVjb21lcyBhIHN0YW5kYXJkLlxuICAgICAgLy9cbiAgICAgIC8vIE5vdGU6IHdlIGNvdWxkIHVzZSBgLi4vLi4vLi5gIGFzIHRoZSBVUkwgaGVyZSB0byBpbmxpbmUgd29ya2VySGVscGVycy5qc1xuICAgICAgLy8gaW50byB0aGUgcGFyZW50IGVudHJ5IGluc3RlYWQgb2YgY3JlYXRpbmcgYW5vdGhlciBzcGxpdCBwb2ludCAtXG4gICAgICAvLyB0aGlzIHdvdWxkIGJlIHByZWZlcmFibGUgZnJvbSBvcHRpbWl6YXRpb24gcGVyc3BlY3RpdmUgLVxuICAgICAgLy8gaG93ZXZlciwgV2VicGFjayB0aGVuIGVsaW1pbmF0ZXMgYWxsIG1lc3NhZ2UgaGFuZGxlciBjb2RlXG4gICAgICAvLyBiZWNhdXNlIHdhc20tcGFjayBwcm9kdWNlcyBcInNpZGVFZmZlY3RzXCI6ZmFsc2UgaW4gcGFja2FnZS5qc29uXG4gICAgICAvLyB1bmNvbmRpdGlvbmFsbHkuXG4gICAgICAvL1xuICAgICAgLy8gVGhlIG9ubHkgd2F5IHRvIHdvcmsgYXJvdW5kIHRoYXQgaXMgdG8gaGF2ZSBzaWRlIGVmZmVjdCBjb2RlXG4gICAgICAvLyBpbiBhbiBlbnRyeSBwb2ludCBzdWNoIGFzIFdvcmtlciBmaWxlIGl0c2VsZi5cbiAgICAgIGNvbnN0IHdvcmtlciA9IG5ldyBXb3JrZXIobmV3IFVSTCgnLi93b3JrZXJIZWxwZXJzLmpzJywgaW1wb3J0Lm1ldGEudXJsKSwge1xuICAgICAgICB0eXBlOiAnbW9kdWxlJ1xuICAgICAgfSk7XG4gICAgICB3b3JrZXIucG9zdE1lc3NhZ2Uod29ya2VySW5pdCk7XG4gICAgICBhd2FpdCB3YWl0Rm9yTXNnVHlwZSh3b3JrZXIsICd3YXNtX2JpbmRnZW5fd29ya2VyX3JlYWR5Jyk7XG4gICAgICByZXR1cm4gd29ya2VyO1xuICAgIH0pXG4gICk7XG4gIGJ1aWxkZXIuYnVpbGQoKTtcbn1cbiJdLCJuYW1lcyI6WyJ3YWl0Rm9yTXNnVHlwZSIsInRhcmdldCIsInR5cGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbk1zZyIsImRhdGEiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2VsZiIsInRoZW4iLCJwa2ciLCJkZWZhdWx0IiwibW9kdWxlIiwibWVtb3J5IiwicG9zdE1lc3NhZ2UiLCJ3YmdfcmF5b25fc3RhcnRfd29ya2VyIiwicmVjZWl2ZXIiLCJfd29ya2VycyIsInN0YXJ0V29ya2VycyIsImJ1aWxkZXIiLCJ3b3JrZXJJbml0IiwiYWxsIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwibnVtVGhyZWFkcyIsIndvcmtlciIsIldvcmtlciIsIlVSTCIsInVybCIsImJ1aWxkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/halo2Prover/wasm/snippets/wasm-bindgen-rayon-7afa899f36665473/src/workerHelpers.js\n"));

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
/******/ 		__webpack_require__.hmrF = function() { return "static/webpack/" + __webpack_require__.h() + ".e3dd17c022c0b8f0.hot-update.json"; };
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
/******/ 			"lib_halo2Prover_wasm_snippets_wasm-bindgen-rayon-7afa899f36665473_src_workerHelpers_js": 1
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
/******/ 	var __webpack_exports__ = __webpack_require__("./lib/halo2Prover/wasm/snippets/wasm-bindgen-rayon-7afa899f36665473/src/workerHelpers.js");
/******/ 	_N_E = __webpack_exports__;
/******/ 	
/******/ })()
;