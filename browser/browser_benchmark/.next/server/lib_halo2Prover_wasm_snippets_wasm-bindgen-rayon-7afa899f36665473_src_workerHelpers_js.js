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

/***/ "./lib/halo2Prover/wasm/snippets/wasm-bindgen-rayon-7afa899f36665473/src/workerHelpers.js":
/*!************************************************************************************************!*\
  !*** ./lib/halo2Prover/wasm/snippets/wasm-bindgen-rayon-7afa899f36665473/src/workerHelpers.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startWorkers\": () => (/* binding */ startWorkers)\n/* harmony export */ });\n/**\n * Copyright 2021 Google Inc. All Rights Reserved.\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *     http://www.apache.org/licenses/LICENSE-2.0\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ // Note: we use `wasm_bindgen_worker_`-prefixed message types to make sure\n// we can handle bundling into other files, which might happen to have their\n// own `postMessage`/`onmessage` communication channels.\n//\n// If we didn't take that into the account, we could send much simpler signals\n// like just `0` or whatever, but the code would be less resilient.\nfunction waitForMsgType(target, type) {\n    return new Promise((resolve)=>{\n        target.addEventListener(\"message\", function onMsg({ data  }) {\n            if (data == null || data.type !== type) return;\n            target.removeEventListener(\"message\", onMsg);\n            resolve(data);\n        });\n    });\n}\nwaitForMsgType(self, \"wasm_bindgen_worker_init\").then(async (data)=>{\n    // # Note 1\n    // Our JS should have been generated in\n    // `[out-dir]/snippets/wasm-bindgen-rayon-[hash]/workerHelpers.js`,\n    // resolve the main module via `../../..`.\n    //\n    // This might need updating if the generated structure changes on wasm-bindgen\n    // side ever in the future, but works well with bundlers today. The whole\n    // point of this crate, after all, is to abstract away unstable features\n    // and temporary bugs so that you don't need to deal with them in your code.\n    //\n    // # Note 2\n    // This could be a regular import, but then some bundlers complain about\n    // circular deps.\n    //\n    // Dynamic import could be cheap if this file was inlined into the parent,\n    // which would require us just using `../../..` in `new Worker` below,\n    // but that doesn't work because wasm-pack unconditionally adds\n    // \"sideEffects\":false (see below).\n    //\n    // OTOH, even though it can't be inlined, it should be still reasonably\n    // cheap since the requested file is already in cache (it was loaded by\n    // the main thread).\n    const pkg = await __webpack_require__.e(/*! import() */ \"lib_halo2Prover_wasm_halo2_efficient_ecdsa_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../.. */ \"./lib/halo2Prover/wasm/halo2_efficient_ecdsa.js\"));\n    await pkg.default(data.module, data.memory);\n    postMessage({\n        type: \"wasm_bindgen_worker_ready\"\n    });\n    pkg.wbg_rayon_start_worker(data.receiver);\n});\n// Note: this is never used, but necessary to prevent a bug in Firefox\n// (https://bugzilla.mozilla.org/show_bug.cgi?id=1702191) where it collects\n// Web Workers that have a shared WebAssembly memory with the main thread,\n// but are not explicitly rooted via a `Worker` instance.\n//\n// By storing them in a variable, we can keep `Worker` objects around and\n// prevent them from getting GC-d.\nlet _workers;\nasync function startWorkers(module, memory, builder) {\n    const workerInit = {\n        type: \"wasm_bindgen_worker_init\",\n        module,\n        memory,\n        receiver: builder.receiver()\n    };\n    _workers = await Promise.all(Array.from({\n        length: builder.numThreads()\n    }, async ()=>{\n        // Self-spawn into a new Worker.\n        //\n        // TODO: while `new URL('...', import.meta.url) becomes a semi-standard\n        // way to get asset URLs relative to the module across various bundlers\n        // and browser, ideally we should switch to `import.meta.resolve`\n        // once it becomes a standard.\n        //\n        // Note: we could use `../../..` as the URL here to inline workerHelpers.js\n        // into the parent entry instead of creating another split point -\n        // this would be preferable from optimization perspective -\n        // however, Webpack then eliminates all message handler code\n        // because wasm-pack produces \"sideEffects\":false in package.json\n        // unconditionally.\n        //\n        // The only way to work around that is to have side effect code\n        // in an entry point such as Worker file itself.\n        const worker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(\"lib_halo2Prover_wasm_snippets_wasm-bindgen-rayon-7afa899f36665473_src_workerHelpers_js\"), __webpack_require__.b), {\n            type: undefined\n        });\n        worker.postMessage(workerInit);\n        await waitForMsgType(worker, \"wasm_bindgen_worker_ready\");\n        return worker;\n    }));\n    builder.build();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaGFsbzJQcm92ZXIvd2FzbS9zbmlwcGV0cy93YXNtLWJpbmRnZW4tcmF5b24tN2FmYTg5OWYzNjY2NTQ3My9zcmMvd29ya2VySGVscGVycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7Ozs7O0NBV0MsR0FFRCwwRUFBMEU7QUFDMUUsNEVBQTRFO0FBQzVFLHdEQUF3RDtBQUN4RCxFQUFFO0FBQ0YsOEVBQThFO0FBQzlFLG1FQUFtRTtBQUVuRSxTQUFTQSxlQUFlQyxNQUFNLEVBQUVDLElBQUksRUFBRTtJQUNwQyxPQUFPLElBQUlDLFFBQVFDLENBQUFBLFVBQVc7UUFDNUJILE9BQU9JLGdCQUFnQixDQUFDLFdBQVcsU0FBU0MsTUFBTSxFQUFFQyxLQUFJLEVBQUUsRUFBRTtZQUMxRCxJQUFJQSxRQUFRLElBQUksSUFBSUEsS0FBS0wsSUFBSSxLQUFLQSxNQUFNO1lBQ3hDRCxPQUFPTyxtQkFBbUIsQ0FBQyxXQUFXRjtZQUN0Q0YsUUFBUUc7UUFDVjtJQUNGO0FBQ0Y7QUFFQVAsZUFBZVMsTUFBTSw0QkFBNEJDLElBQUksQ0FBQyxPQUFNSCxPQUFRO0lBQ2xFLFdBQVc7SUFDWCx1Q0FBdUM7SUFDdkMsbUVBQW1FO0lBQ25FLDBDQUEwQztJQUMxQyxFQUFFO0lBQ0YsOEVBQThFO0lBQzlFLHlFQUF5RTtJQUN6RSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLEVBQUU7SUFDRixXQUFXO0lBQ1gsd0VBQXdFO0lBQ3hFLGlCQUFpQjtJQUNqQixFQUFFO0lBQ0YsMEVBQTBFO0lBQzFFLHNFQUFzRTtJQUN0RSwrREFBK0Q7SUFDL0QsbUNBQW1DO0lBQ25DLEVBQUU7SUFDRix1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLG9CQUFvQjtJQUNwQixNQUFNSSxNQUFNLE1BQU0sNk1BQU87SUFDekIsTUFBTUEsSUFBSUMsT0FBTyxDQUFDTCxLQUFLTSxNQUFNLEVBQUVOLEtBQUtPLE1BQU07SUFDMUNDLFlBQVk7UUFBRWIsTUFBTTtJQUE0QjtJQUNoRFMsSUFBSUssc0JBQXNCLENBQUNULEtBQUtVLFFBQVE7QUFDMUM7QUFFQSxzRUFBc0U7QUFDdEUsMkVBQTJFO0FBQzNFLDBFQUEwRTtBQUMxRSx5REFBeUQ7QUFDekQsRUFBRTtBQUNGLHlFQUF5RTtBQUN6RSxrQ0FBa0M7QUFDbEMsSUFBSUM7QUFFRyxlQUFlQyxhQUFhTixNQUFNLEVBQUVDLE1BQU0sRUFBRU0sT0FBTyxFQUFFO0lBQzFELE1BQU1DLGFBQWE7UUFDakJuQixNQUFNO1FBQ05XO1FBQ0FDO1FBQ0FHLFVBQVVHLFFBQVFILFFBQVE7SUFDNUI7SUFFQUMsV0FBVyxNQUFNZixRQUFRbUIsR0FBRyxDQUMxQkMsTUFBTUMsSUFBSSxDQUFDO1FBQUVDLFFBQVFMLFFBQVFNLFVBQVU7SUFBRyxHQUFHLFVBQVk7UUFDdkQsZ0NBQWdDO1FBQ2hDLEVBQUU7UUFDRix1RUFBdUU7UUFDdkUsdUVBQXVFO1FBQ3ZFLGlFQUFpRTtRQUNqRSw4QkFBOEI7UUFDOUIsRUFBRTtRQUNGLDJFQUEyRTtRQUMzRSxrRUFBa0U7UUFDbEUsMkRBQTJEO1FBQzNELDREQUE0RDtRQUM1RCxpRUFBaUU7UUFDakUsbUJBQW1CO1FBQ25CLEVBQUU7UUFDRiwrREFBK0Q7UUFDL0QsZ0RBQWdEO1FBQ2hELE1BQU1DLFNBQVMsSUFBSUMsT0FBTyxJQUFJQyxJQUFJLGtMQUFxQyxHQUFHO1lBQ3hFM0IsTUFBTTtRQUNSO1FBQ0F5QixPQUFPWixXQUFXLENBQUNNO1FBQ25CLE1BQU1yQixlQUFlMkIsUUFBUTtRQUM3QixPQUFPQTtJQUNUO0lBRUZQLFFBQVFXLEtBQUs7QUFDZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFsbzItZWZmaWNpZW50LWVjZHNhLWJlbmNoLy4vbGliL2hhbG8yUHJvdmVyL3dhc20vc25pcHBldHMvd2FzbS1iaW5kZ2VuLXJheW9uLTdhZmE4OTlmMzY2NjU0NzMvc3JjL3dvcmtlckhlbHBlcnMuanM/YzBiOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIE5vdGU6IHdlIHVzZSBgd2FzbV9iaW5kZ2VuX3dvcmtlcl9gLXByZWZpeGVkIG1lc3NhZ2UgdHlwZXMgdG8gbWFrZSBzdXJlXG4vLyB3ZSBjYW4gaGFuZGxlIGJ1bmRsaW5nIGludG8gb3RoZXIgZmlsZXMsIHdoaWNoIG1pZ2h0IGhhcHBlbiB0byBoYXZlIHRoZWlyXG4vLyBvd24gYHBvc3RNZXNzYWdlYC9gb25tZXNzYWdlYCBjb21tdW5pY2F0aW9uIGNoYW5uZWxzLlxuLy9cbi8vIElmIHdlIGRpZG4ndCB0YWtlIHRoYXQgaW50byB0aGUgYWNjb3VudCwgd2UgY291bGQgc2VuZCBtdWNoIHNpbXBsZXIgc2lnbmFsc1xuLy8gbGlrZSBqdXN0IGAwYCBvciB3aGF0ZXZlciwgYnV0IHRoZSBjb2RlIHdvdWxkIGJlIGxlc3MgcmVzaWxpZW50LlxuXG5mdW5jdGlvbiB3YWl0Rm9yTXNnVHlwZSh0YXJnZXQsIHR5cGUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gb25Nc2coeyBkYXRhIH0pIHtcbiAgICAgIGlmIChkYXRhID09IG51bGwgfHwgZGF0YS50eXBlICE9PSB0eXBlKSByZXR1cm47XG4gICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTXNnKTtcbiAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG53YWl0Rm9yTXNnVHlwZShzZWxmLCAnd2FzbV9iaW5kZ2VuX3dvcmtlcl9pbml0JykudGhlbihhc3luYyBkYXRhID0+IHtcbiAgLy8gIyBOb3RlIDFcbiAgLy8gT3VyIEpTIHNob3VsZCBoYXZlIGJlZW4gZ2VuZXJhdGVkIGluXG4gIC8vIGBbb3V0LWRpcl0vc25pcHBldHMvd2FzbS1iaW5kZ2VuLXJheW9uLVtoYXNoXS93b3JrZXJIZWxwZXJzLmpzYCxcbiAgLy8gcmVzb2x2ZSB0aGUgbWFpbiBtb2R1bGUgdmlhIGAuLi8uLi8uLmAuXG4gIC8vXG4gIC8vIFRoaXMgbWlnaHQgbmVlZCB1cGRhdGluZyBpZiB0aGUgZ2VuZXJhdGVkIHN0cnVjdHVyZSBjaGFuZ2VzIG9uIHdhc20tYmluZGdlblxuICAvLyBzaWRlIGV2ZXIgaW4gdGhlIGZ1dHVyZSwgYnV0IHdvcmtzIHdlbGwgd2l0aCBidW5kbGVycyB0b2RheS4gVGhlIHdob2xlXG4gIC8vIHBvaW50IG9mIHRoaXMgY3JhdGUsIGFmdGVyIGFsbCwgaXMgdG8gYWJzdHJhY3QgYXdheSB1bnN0YWJsZSBmZWF0dXJlc1xuICAvLyBhbmQgdGVtcG9yYXJ5IGJ1Z3Mgc28gdGhhdCB5b3UgZG9uJ3QgbmVlZCB0byBkZWFsIHdpdGggdGhlbSBpbiB5b3VyIGNvZGUuXG4gIC8vXG4gIC8vICMgTm90ZSAyXG4gIC8vIFRoaXMgY291bGQgYmUgYSByZWd1bGFyIGltcG9ydCwgYnV0IHRoZW4gc29tZSBidW5kbGVycyBjb21wbGFpbiBhYm91dFxuICAvLyBjaXJjdWxhciBkZXBzLlxuICAvL1xuICAvLyBEeW5hbWljIGltcG9ydCBjb3VsZCBiZSBjaGVhcCBpZiB0aGlzIGZpbGUgd2FzIGlubGluZWQgaW50byB0aGUgcGFyZW50LFxuICAvLyB3aGljaCB3b3VsZCByZXF1aXJlIHVzIGp1c3QgdXNpbmcgYC4uLy4uLy4uYCBpbiBgbmV3IFdvcmtlcmAgYmVsb3csXG4gIC8vIGJ1dCB0aGF0IGRvZXNuJ3Qgd29yayBiZWNhdXNlIHdhc20tcGFjayB1bmNvbmRpdGlvbmFsbHkgYWRkc1xuICAvLyBcInNpZGVFZmZlY3RzXCI6ZmFsc2UgKHNlZSBiZWxvdykuXG4gIC8vXG4gIC8vIE9UT0gsIGV2ZW4gdGhvdWdoIGl0IGNhbid0IGJlIGlubGluZWQsIGl0IHNob3VsZCBiZSBzdGlsbCByZWFzb25hYmx5XG4gIC8vIGNoZWFwIHNpbmNlIHRoZSByZXF1ZXN0ZWQgZmlsZSBpcyBhbHJlYWR5IGluIGNhY2hlIChpdCB3YXMgbG9hZGVkIGJ5XG4gIC8vIHRoZSBtYWluIHRocmVhZCkuXG4gIGNvbnN0IHBrZyA9IGF3YWl0IGltcG9ydCgnLi4vLi4vLi4nKTtcbiAgYXdhaXQgcGtnLmRlZmF1bHQoZGF0YS5tb2R1bGUsIGRhdGEubWVtb3J5KTtcbiAgcG9zdE1lc3NhZ2UoeyB0eXBlOiAnd2FzbV9iaW5kZ2VuX3dvcmtlcl9yZWFkeScgfSk7XG4gIHBrZy53YmdfcmF5b25fc3RhcnRfd29ya2VyKGRhdGEucmVjZWl2ZXIpO1xufSk7XG5cbi8vIE5vdGU6IHRoaXMgaXMgbmV2ZXIgdXNlZCwgYnV0IG5lY2Vzc2FyeSB0byBwcmV2ZW50IGEgYnVnIGluIEZpcmVmb3hcbi8vIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzAyMTkxKSB3aGVyZSBpdCBjb2xsZWN0c1xuLy8gV2ViIFdvcmtlcnMgdGhhdCBoYXZlIGEgc2hhcmVkIFdlYkFzc2VtYmx5IG1lbW9yeSB3aXRoIHRoZSBtYWluIHRocmVhZCxcbi8vIGJ1dCBhcmUgbm90IGV4cGxpY2l0bHkgcm9vdGVkIHZpYSBhIGBXb3JrZXJgIGluc3RhbmNlLlxuLy9cbi8vIEJ5IHN0b3JpbmcgdGhlbSBpbiBhIHZhcmlhYmxlLCB3ZSBjYW4ga2VlcCBgV29ya2VyYCBvYmplY3RzIGFyb3VuZCBhbmRcbi8vIHByZXZlbnQgdGhlbSBmcm9tIGdldHRpbmcgR0MtZC5cbmxldCBfd29ya2VycztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0V29ya2Vycyhtb2R1bGUsIG1lbW9yeSwgYnVpbGRlcikge1xuICBjb25zdCB3b3JrZXJJbml0ID0ge1xuICAgIHR5cGU6ICd3YXNtX2JpbmRnZW5fd29ya2VyX2luaXQnLFxuICAgIG1vZHVsZSxcbiAgICBtZW1vcnksXG4gICAgcmVjZWl2ZXI6IGJ1aWxkZXIucmVjZWl2ZXIoKVxuICB9O1xuXG4gIF93b3JrZXJzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogYnVpbGRlci5udW1UaHJlYWRzKCkgfSwgYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gU2VsZi1zcGF3biBpbnRvIGEgbmV3IFdvcmtlci5cbiAgICAgIC8vXG4gICAgICAvLyBUT0RPOiB3aGlsZSBgbmV3IFVSTCgnLi4uJywgaW1wb3J0Lm1ldGEudXJsKSBiZWNvbWVzIGEgc2VtaS1zdGFuZGFyZFxuICAgICAgLy8gd2F5IHRvIGdldCBhc3NldCBVUkxzIHJlbGF0aXZlIHRvIHRoZSBtb2R1bGUgYWNyb3NzIHZhcmlvdXMgYnVuZGxlcnNcbiAgICAgIC8vIGFuZCBicm93c2VyLCBpZGVhbGx5IHdlIHNob3VsZCBzd2l0Y2ggdG8gYGltcG9ydC5tZXRhLnJlc29sdmVgXG4gICAgICAvLyBvbmNlIGl0IGJlY29tZXMgYSBzdGFuZGFyZC5cbiAgICAgIC8vXG4gICAgICAvLyBOb3RlOiB3ZSBjb3VsZCB1c2UgYC4uLy4uLy4uYCBhcyB0aGUgVVJMIGhlcmUgdG8gaW5saW5lIHdvcmtlckhlbHBlcnMuanNcbiAgICAgIC8vIGludG8gdGhlIHBhcmVudCBlbnRyeSBpbnN0ZWFkIG9mIGNyZWF0aW5nIGFub3RoZXIgc3BsaXQgcG9pbnQgLVxuICAgICAgLy8gdGhpcyB3b3VsZCBiZSBwcmVmZXJhYmxlIGZyb20gb3B0aW1pemF0aW9uIHBlcnNwZWN0aXZlIC1cbiAgICAgIC8vIGhvd2V2ZXIsIFdlYnBhY2sgdGhlbiBlbGltaW5hdGVzIGFsbCBtZXNzYWdlIGhhbmRsZXIgY29kZVxuICAgICAgLy8gYmVjYXVzZSB3YXNtLXBhY2sgcHJvZHVjZXMgXCJzaWRlRWZmZWN0c1wiOmZhbHNlIGluIHBhY2thZ2UuanNvblxuICAgICAgLy8gdW5jb25kaXRpb25hbGx5LlxuICAgICAgLy9cbiAgICAgIC8vIFRoZSBvbmx5IHdheSB0byB3b3JrIGFyb3VuZCB0aGF0IGlzIHRvIGhhdmUgc2lkZSBlZmZlY3QgY29kZVxuICAgICAgLy8gaW4gYW4gZW50cnkgcG9pbnQgc3VjaCBhcyBXb3JrZXIgZmlsZSBpdHNlbGYuXG4gICAgICBjb25zdCB3b3JrZXIgPSBuZXcgV29ya2VyKG5ldyBVUkwoJy4vd29ya2VySGVscGVycy5qcycsIGltcG9ydC5tZXRhLnVybCksIHtcbiAgICAgICAgdHlwZTogJ21vZHVsZSdcbiAgICAgIH0pO1xuICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHdvcmtlckluaXQpO1xuICAgICAgYXdhaXQgd2FpdEZvck1zZ1R5cGUod29ya2VyLCAnd2FzbV9iaW5kZ2VuX3dvcmtlcl9yZWFkeScpO1xuICAgICAgcmV0dXJuIHdvcmtlcjtcbiAgICB9KVxuICApO1xuICBidWlsZGVyLmJ1aWxkKCk7XG59XG4iXSwibmFtZXMiOlsid2FpdEZvck1zZ1R5cGUiLCJ0YXJnZXQiLCJ0eXBlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhZGRFdmVudExpc3RlbmVyIiwib25Nc2ciLCJkYXRhIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNlbGYiLCJ0aGVuIiwicGtnIiwiZGVmYXVsdCIsIm1vZHVsZSIsIm1lbW9yeSIsInBvc3RNZXNzYWdlIiwid2JnX3JheW9uX3N0YXJ0X3dvcmtlciIsInJlY2VpdmVyIiwiX3dvcmtlcnMiLCJzdGFydFdvcmtlcnMiLCJidWlsZGVyIiwid29ya2VySW5pdCIsImFsbCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIm51bVRocmVhZHMiLCJ3b3JrZXIiLCJXb3JrZXIiLCJVUkwiLCJ1cmwiLCJidWlsZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/halo2Prover/wasm/snippets/wasm-bindgen-rayon-7afa899f36665473/src/workerHelpers.js\n");

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
/******/ 			"lib_halo2Prover_wasm_snippets_wasm-bindgen-rayon-7afa899f36665473_src_workerHelpers_js": 1
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./lib/halo2Prover/wasm/snippets/wasm-bindgen-rayon-7afa899f36665473/src/workerHelpers.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;