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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n// pages/movies/[id].js\n\n\n\nconst MovieDetail = (param)=>{\n    let { movie } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        maxW: \"container.5xl\",\n        centerContent: true,\n        mt: 10,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n            direction: {\n                base: \"column\",\n                md: \"row\"\n            },\n            gap: 10,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    flex: \"1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                        src: \"https://image.tmdb.org/t/p/w500/\".concat(movie.poster_path),\n                        alt: movie.title\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    flex: \"1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                            as: \"h1\",\n                            size: \"xl\",\n                            mt: 4,\n                            children: movie.title\n                        }, void 0, false, {\n                            fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                            fontSize: \"lg\",\n                            mt: 2,\n                            color: \"gray.600\",\n                            children: [\n                                \"Release Date: \",\n                                movie.release_date\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                            fontSize: \"lg\",\n                            mt: 2,\n                            children: movie.overview\n                        }, void 0, false, {\n                            fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                            fontSize: \"lg\",\n                            mt: 2,\n                            children: [\n                                \"Vote Average: \",\n                                movie.vote_average\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\pages\\\\movies\\\\[id].js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MovieDetail;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieDetail);\nvar _c;\n$RefreshReg$(_c, \"MovieDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbW92aWVzL1tpZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUJBQXVCOztBQUNHO0FBRW9EO0FBRTlFLE1BQU1PLGNBQWM7UUFBQyxFQUFFQyxLQUFLLEVBQUU7SUFDNUIscUJBQ0UsOERBQUNQLHVEQUFTQTtRQUFDUSxNQUFLO1FBQWdCQyxhQUFhO1FBQUNDLElBQUk7a0JBQ2hELDRFQUFDTCxrREFBSUE7WUFBQ00sV0FBVztnQkFBRUMsTUFBTTtnQkFBVUMsSUFBSTtZQUFNO1lBQUdDLEtBQUs7OzhCQUNuRCw4REFBQ2IsaURBQUdBO29CQUFDYyxNQUFLOzhCQUNSLDRFQUFDYixtREFBS0E7d0JBQUNjLEtBQUssbUNBQXFELE9BQWxCVCxNQUFNVSxXQUFXO3dCQUFJQyxLQUFLWCxNQUFNWSxLQUFLOzs7Ozs7Ozs7Ozs4QkFFdEYsOERBQUNsQixpREFBR0E7b0JBQUNjLE1BQUs7O3NDQUNSLDhEQUFDWixxREFBT0E7NEJBQUNpQixJQUFHOzRCQUFLQyxNQUFLOzRCQUFLWCxJQUFJO3NDQUM1QkgsTUFBTVksS0FBSzs7Ozs7O3NDQUVkLDhEQUFDZixrREFBSUE7NEJBQUNrQixVQUFTOzRCQUFLWixJQUFJOzRCQUFHYSxPQUFNOztnQ0FBVztnQ0FDM0JoQixNQUFNaUIsWUFBWTs7Ozs7OztzQ0FFbkMsOERBQUNwQixrREFBSUE7NEJBQUNrQixVQUFTOzRCQUFLWixJQUFJO3NDQUNyQkgsTUFBTWtCLFFBQVE7Ozs7OztzQ0FFakIsOERBQUNyQixrREFBSUE7NEJBQUNrQixVQUFTOzRCQUFLWixJQUFJOztnQ0FBRztnQ0FDVkgsTUFBTW1CLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU03QztLQXhCTXBCOztBQTZDTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbW92aWVzL1tpZF0uanM/YmRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9tb3ZpZXMvW2lkXS5qc1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEJveCwgSW1hZ2UsIEhlYWRpbmcsIFRleHQsIEZsZXggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuXHJcbmNvbnN0IE1vdmllRGV0YWlsID0gKHsgbW92aWUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1heFc9XCJjb250YWluZXIuNXhsXCIgY2VudGVyQ29udGVudCBtdD17MTB9PlxyXG4gICAgICA8RmxleCBkaXJlY3Rpb249e3sgYmFzZTogJ2NvbHVtbicsIG1kOiAncm93JyB9fSBnYXA9ezEwfT5cclxuICAgICAgICA8Qm94IGZsZXg9XCIxXCI+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMC8ke21vdmllLnBvc3Rlcl9wYXRofWB9IGFsdD17bW92aWUudGl0bGV9IC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEJveCBmbGV4PVwiMVwiPlxyXG4gICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCJ4bFwiIG10PXs0fT5cclxuICAgICAgICAgICAge21vdmllLnRpdGxlfVxyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiIG10PXsyfSBjb2xvcj1cImdyYXkuNjAwXCI+XHJcbiAgICAgICAgICAgIFJlbGVhc2UgRGF0ZToge21vdmllLnJlbGVhc2VfZGF0ZX1cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwibGdcIiBtdD17Mn0+XHJcbiAgICAgICAgICAgIHttb3ZpZS5vdmVydmlld31cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwibGdcIiBtdD17Mn0+XHJcbiAgICAgICAgICAgIFZvdGUgQXZlcmFnZToge21vdmllLnZvdGVfYXZlcmFnZX1cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9tb3ZpZXMvJHtpZH1gKTtcclxuICAgIGNvbnN0IG1vdmllID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczogeyBtb3ZpZSB9LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgbW92aWUgZGV0YWlscycsIGVycm9yKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBub3RGb3VuZDogdHJ1ZSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZURldGFpbDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiQm94IiwiSW1hZ2UiLCJIZWFkaW5nIiwiVGV4dCIsIkZsZXgiLCJNb3ZpZURldGFpbCIsIm1vdmllIiwibWF4VyIsImNlbnRlckNvbnRlbnQiLCJtdCIsImRpcmVjdGlvbiIsImJhc2UiLCJtZCIsImdhcCIsImZsZXgiLCJzcmMiLCJwb3N0ZXJfcGF0aCIsImFsdCIsInRpdGxlIiwiYXMiLCJzaXplIiwiZm9udFNpemUiLCJjb2xvciIsInJlbGVhc2VfZGF0ZSIsIm92ZXJ2aWV3Iiwidm90ZV9hdmVyYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/movies/[id].js\n"));

/***/ })

});