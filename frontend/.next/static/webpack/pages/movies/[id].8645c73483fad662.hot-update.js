"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movies/[id]",{

/***/ "./src/pages/movies/[id].js":
/*!**********************************!*\
  !*** ./src/pages/movies/[id].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// pages/movies/[id].js\n\n\n\nconst MovieDetail = (param)=>{\n    let { movie } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: movie.title\n            }, void 0, false, {\n                fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: movie.overview\n            }, void 0, false, {\n                fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Release Date: \",\n                    movie.release_date\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Vote Average: \",\n                    movie.vote_average\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MovieDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieDetail);\nvar _c;\n$RefreshReg$(_c, \"MovieDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbW92aWVzL1tpZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx1QkFBdUI7O0FBQzRCO0FBQ3pCO0FBRTFCLE1BQU1JLGNBQWM7UUFBQyxFQUFFQyxLQUFLLEVBQUU7SUFDNUIscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7MEJBQUlGLE1BQU1HLEtBQUs7Ozs7OzswQkFDaEIsOERBQUNDOzBCQUFHSixNQUFNSyxRQUFROzs7Ozs7MEJBQ2xCLDhEQUFDRDs7b0JBQUU7b0JBQWVKLE1BQU1NLFlBQVk7Ozs7Ozs7MEJBQ3BDLDhEQUFDRjs7b0JBQUU7b0JBQWVKLE1BQU1PLFlBQVk7Ozs7Ozs7Ozs7Ozs7QUFJMUM7S0FWTVI7QUFZTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbW92aWVzL1tpZF0uanM/YmRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9tb3ZpZXMvW2lkXS5qc1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IE1vdmllRGV0YWlsID0gKHsgbW92aWUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+e21vdmllLnRpdGxlfTwvaDE+XHJcbiAgICAgIDxwPnttb3ZpZS5vdmVydmlld308L3A+XHJcbiAgICAgIDxwPlJlbGVhc2UgRGF0ZToge21vdmllLnJlbGVhc2VfZGF0ZX08L3A+XHJcbiAgICAgIDxwPlZvdGUgQXZlcmFnZToge21vdmllLnZvdGVfYXZlcmFnZX08L3A+XHJcbiAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVEZXRhaWw7XHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiTW92aWVEZXRhaWwiLCJtb3ZpZSIsImRpdiIsImgxIiwidGl0bGUiLCJwIiwib3ZlcnZpZXciLCJyZWxlYXNlX2RhdGUiLCJ2b3RlX2F2ZXJhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/movies/[id].js\n"));

/***/ })

});