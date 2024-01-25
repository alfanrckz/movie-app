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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n// pages/movies/[id].js\n\n\n\nconst MovieDetail = (param)=>{\n    let { movie } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        w: 1000,\n        centerContent: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            maxW: \"md\",\n            borderWidth: \"1px\",\n            borderRadius: \"lg\",\n            overflow: \"hidden\",\n            p: 4,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                            src: \"https://image.tmdb.org/t/p/w500/\".concat(movie.poster_path),\n                            alt: movie.title\n                        }, void 0, false, {\n                            fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n                            lineNumber: 14,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                                as: \"h1\",\n                                size: \"xl\",\n                                mt: 4,\n                                children: movie.title\n                            }, void 0, false, {\n                                fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n                                lineNumber: 19,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                fontSize: \"lg\",\n                                mt: 2,\n                                color: \"gray.600\",\n                                children: [\n                                    \"Release Date: \",\n                                    movie.release_date\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n                                lineNumber: 22,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                fontSize: \"lg\",\n                                mt: 2,\n                                children: movie.overview\n                            }, void 0, false, {\n                                fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n                                lineNumber: 25,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                fontSize: \"lg\",\n                                mt: 2,\n                                children: [\n                                    \"Vote Average: \",\n                                    movie.vote_average\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n                                lineNumber: 28,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MovieDetail;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieDetail);\nvar _c;\n$RefreshReg$(_c, \"MovieDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbW92aWVzL1tpZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUJBQXVCOztBQUNHO0FBRW9EO0FBRTlFLE1BQU1PLGNBQWM7UUFBQyxFQUFFQyxLQUFLLEVBQUU7SUFDNUIscUJBQ0UsOERBQUNOLGlEQUFHQTtRQUFDTyxHQUFHO1FBQU9DLGFBQWE7a0JBQzFCLDRFQUFDUixpREFBR0E7WUFBQ1MsTUFBSztZQUFLQyxhQUFZO1lBQU1DLGNBQWE7WUFBS0MsVUFBUztZQUFTQyxHQUFHO3NCQUN0RSw0RUFBQ1Qsa0RBQUlBOztrQ0FFTCw4REFBQ0osaURBQUdBO2tDQUVKLDRFQUFDQyxtREFBS0E7NEJBQUNhLEtBQUssbUNBQXFELE9BQWxCUixNQUFNUyxXQUFXOzRCQUFJQyxLQUFLVixNQUFNVyxLQUFLOzs7Ozs7Ozs7OztrQ0FHcEYsOERBQUNqQixpREFBR0E7OzBDQUVKLDhEQUFDRSxxREFBT0E7Z0NBQUNnQixJQUFHO2dDQUFLQyxNQUFLO2dDQUFLQyxJQUFJOzBDQUM1QmQsTUFBTVcsS0FBSzs7Ozs7OzBDQUVkLDhEQUFDZCxrREFBSUE7Z0NBQUNrQixVQUFTO2dDQUFLRCxJQUFJO2dDQUFHRSxPQUFNOztvQ0FBVztvQ0FDM0JoQixNQUFNaUIsWUFBWTs7Ozs7OzswQ0FFbkMsOERBQUNwQixrREFBSUE7Z0NBQUNrQixVQUFTO2dDQUFLRCxJQUFJOzBDQUNyQmQsTUFBTWtCLFFBQVE7Ozs7OzswQ0FFakIsOERBQUNyQixrREFBSUE7Z0NBQUNrQixVQUFTO2dDQUFLRCxJQUFJOztvQ0FBRztvQ0FDVmQsTUFBTW1CLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzNDO0tBOUJNcEI7O0FBbUROLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9tb3ZpZXMvW2lkXS5qcz9iZGJiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL21vdmllcy9baWRdLmpzXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgQm94LCBJbWFnZSwgSGVhZGluZywgVGV4dCwgRmxleCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5cclxuY29uc3QgTW92aWVEZXRhaWwgPSAoeyBtb3ZpZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggdz17MTAwMH0gIGNlbnRlckNvbnRlbnQ+XHJcbiAgICAgIDxCb3ggbWF4Vz1cIm1kXCIgYm9yZGVyV2lkdGg9XCIxcHhcIiBib3JkZXJSYWRpdXM9XCJsZ1wiIG92ZXJmbG93PVwiaGlkZGVuXCIgcD17NH0+XHJcbiAgICAgICAgPEZsZXg+XHJcblxyXG4gICAgICAgIDxCb3g+XHJcblxyXG4gICAgICAgIDxJbWFnZSBzcmM9e2BodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwLyR7bW92aWUucG9zdGVyX3BhdGh9YH0gYWx0PXttb3ZpZS50aXRsZX0gLz5cclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgPEJveD5cclxuXHJcbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCJ4bFwiIG10PXs0fT5cclxuICAgICAgICAgIHttb3ZpZS50aXRsZX1cclxuICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiIG10PXsyfSBjb2xvcj1cImdyYXkuNjAwXCI+XHJcbiAgICAgICAgICBSZWxlYXNlIERhdGU6IHttb3ZpZS5yZWxlYXNlX2RhdGV9XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDxUZXh0IGZvbnRTaXplPVwibGdcIiBtdD17Mn0+XHJcbiAgICAgICAgICB7bW92aWUub3ZlcnZpZXd9XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDxUZXh0IGZvbnRTaXplPVwibGdcIiBtdD17Mn0+XHJcbiAgICAgICAgICBWb3RlIEF2ZXJhZ2U6IHttb3ZpZS52b3RlX2F2ZXJhZ2V9XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5xdWVyeTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL21vdmllcy8ke2lkfWApO1xyXG4gICAgY29uc3QgbW92aWUgPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7IG1vdmllIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBtb3ZpZSBkZXRhaWxzJywgZXJyb3IpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5vdEZvdW5kOiB0cnVlLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllRGV0YWlsO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb250YWluZXIiLCJCb3giLCJJbWFnZSIsIkhlYWRpbmciLCJUZXh0IiwiRmxleCIsIk1vdmllRGV0YWlsIiwibW92aWUiLCJ3IiwiY2VudGVyQ29udGVudCIsIm1heFciLCJib3JkZXJXaWR0aCIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwicCIsInNyYyIsInBvc3Rlcl9wYXRoIiwiYWx0IiwidGl0bGUiLCJhcyIsInNpemUiLCJtdCIsImZvbnRTaXplIiwiY29sb3IiLCJyZWxlYXNlX2RhdGUiLCJvdmVydmlldyIsInZvdGVfYXZlcmFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/movies/[id].js\n"));

/***/ })

});