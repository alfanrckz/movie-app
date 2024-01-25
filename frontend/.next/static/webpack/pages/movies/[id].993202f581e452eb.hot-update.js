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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n// pages/movies/[id].js\n\n\n\nconst MovieDetail = (param)=>{\n    let { movie } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        maxW: \"container.lg\",\n        centerContent: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            maxW: \"md\",\n            borderWidth: \"1px\",\n            borderRadius: \"lg\",\n            overflow: \"hidden\",\n            p: 4,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                        src: \"https://image.tmdb.org/t/p/w500/\".concat(movie.poster_path),\n                        alt: movie.title\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                            as: \"h1\",\n                            size: \"xl\",\n                            mt: 4,\n                            children: movie.title\n                        }, void 0, false, {\n                            fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n                            lineNumber: 17,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                            fontSize: \"lg\",\n                            mt: 2,\n                            color: \"gray.600\",\n                            children: [\n                                \"Release Date: \",\n                                movie.release_date\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n                            lineNumber: 20,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                            fontSize: \"lg\",\n                            mt: 2,\n                            children: movie.overview\n                        }, void 0, false, {\n                            fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n                            lineNumber: 23,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                            fontSize: \"lg\",\n                            mt: 2,\n                            children: [\n                                \"Vote Average: \",\n                                movie.vote_average\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n                            lineNumber: 26,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MovieDetail;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieDetail);\nvar _c;\n$RefreshReg$(_c, \"MovieDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbW92aWVzL1tpZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUJBQXVCOztBQUNHO0FBRThDO0FBRXhFLE1BQU1NLGNBQWM7UUFBQyxFQUFFQyxLQUFLLEVBQUU7SUFDNUIscUJBQ0UsOERBQUNOLHVEQUFTQTtRQUFDTyxNQUFLO1FBQWVDLGFBQWE7a0JBQzFDLDRFQUFDUCxpREFBR0E7WUFBQ00sTUFBSztZQUFLRSxhQUFZO1lBQU1DLGNBQWE7WUFBS0MsVUFBUztZQUFTQyxHQUFHOzs4QkFDdEUsOERBQUNYLGlEQUFHQTs4QkFFSiw0RUFBQ0MsbURBQUtBO3dCQUFDVyxLQUFLLG1DQUFxRCxPQUFsQlAsTUFBTVEsV0FBVzt3QkFBSUMsS0FBS1QsTUFBTVUsS0FBSzs7Ozs7Ozs7Ozs7OEJBR3BGLDhEQUFDZixpREFBR0E7O3NDQUVKLDhEQUFDRSxxREFBT0E7NEJBQUNjLElBQUc7NEJBQUtDLE1BQUs7NEJBQUtDLElBQUk7c0NBQzVCYixNQUFNVSxLQUFLOzs7Ozs7c0NBRWQsOERBQUNaLGtEQUFJQTs0QkFBQ2dCLFVBQVM7NEJBQUtELElBQUk7NEJBQUdFLE9BQU07O2dDQUFXO2dDQUMzQmYsTUFBTWdCLFlBQVk7Ozs7Ozs7c0NBRW5DLDhEQUFDbEIsa0RBQUlBOzRCQUFDZ0IsVUFBUzs0QkFBS0QsSUFBSTtzQ0FDckJiLE1BQU1pQixRQUFROzs7Ozs7c0NBRWpCLDhEQUFDbkIsa0RBQUlBOzRCQUFDZ0IsVUFBUzs0QkFBS0QsSUFBSTs7Z0NBQUc7Z0NBQ1ZiLE1BQU1rQixZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNM0M7S0EzQk1uQjs7QUFnRE4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21vdmllcy9baWRdLmpzP2JkYmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvbW92aWVzL1tpZF0uanNcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3gsIEltYWdlLCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcblxyXG5jb25zdCBNb3ZpZURldGFpbCA9ICh7IG1vdmllIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBtYXhXPVwiY29udGFpbmVyLmxnXCIgY2VudGVyQ29udGVudD5cclxuICAgICAgPEJveCBtYXhXPVwibWRcIiBib3JkZXJXaWR0aD1cIjFweFwiIGJvcmRlclJhZGl1cz1cImxnXCIgb3ZlcmZsb3c9XCJoaWRkZW5cIiBwPXs0fT5cclxuICAgICAgICA8Qm94PlxyXG5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMC8ke21vdmllLnBvc3Rlcl9wYXRofWB9IGFsdD17bW92aWUudGl0bGV9IC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIDxCb3g+XHJcblxyXG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiBzaXplPVwieGxcIiBtdD17NH0+XHJcbiAgICAgICAgICB7bW92aWUudGl0bGV9XHJcbiAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgIDxUZXh0IGZvbnRTaXplPVwibGdcIiBtdD17Mn0gY29sb3I9XCJncmF5LjYwMFwiPlxyXG4gICAgICAgICAgUmVsZWFzZSBEYXRlOiB7bW92aWUucmVsZWFzZV9kYXRlfVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8VGV4dCBmb250U2l6ZT1cImxnXCIgbXQ9ezJ9PlxyXG4gICAgICAgICAge21vdmllLm92ZXJ2aWV3fVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8VGV4dCBmb250U2l6ZT1cImxnXCIgbXQ9ezJ9PlxyXG4gICAgICAgICAgVm90ZSBBdmVyYWdlOiB7bW92aWUudm90ZV9hdmVyYWdlfVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5xdWVyeTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL21vdmllcy8ke2lkfWApO1xyXG4gICAgY29uc3QgbW92aWUgPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7IG1vdmllIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBtb3ZpZSBkZXRhaWxzJywgZXJyb3IpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5vdEZvdW5kOiB0cnVlLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllRGV0YWlsO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb250YWluZXIiLCJCb3giLCJJbWFnZSIsIkhlYWRpbmciLCJUZXh0IiwiTW92aWVEZXRhaWwiLCJtb3ZpZSIsIm1heFciLCJjZW50ZXJDb250ZW50IiwiYm9yZGVyV2lkdGgiLCJib3JkZXJSYWRpdXMiLCJvdmVyZmxvdyIsInAiLCJzcmMiLCJwb3N0ZXJfcGF0aCIsImFsdCIsInRpdGxlIiwiYXMiLCJzaXplIiwibXQiLCJmb250U2l6ZSIsImNvbG9yIiwicmVsZWFzZV9kYXRlIiwib3ZlcnZpZXciLCJ2b3RlX2F2ZXJhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/movies/[id].js\n"));

/***/ })

});