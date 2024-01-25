"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/MovieList.jsx":
/*!**************************************!*\
  !*** ./src/components/MovieList.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n// components/MovieList.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst MovieList = ()=>{\n    _s();\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchMovies = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:5000/api/movies/popular\");\n                console.log(\"Fetched movies:\", response.data);\n                setMovies(response.data);\n            } catch (error) {\n                console.error(\"Error fetching Movies\", error);\n            }\n        };\n        fetchMovies();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {\n        align: \"center\",\n        spacing: 8,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                    children: \"Popular Movies\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.HStack, {\n                    spacing: 8,\n                    children: movies && movies.length > 0 ? movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                            maxW: \"sm\",\n                            borderWidth: \"1px\",\n                            borderRadius: \"lg\",\n                            overflow: \"hidden\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                                    src: \"https://image.tmdb.org/t/p/w500/\".concat(movie.poster_path),\n                                    alt: movie.title\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                                    p: \"6\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                                            d: \"flex\",\n                                            alignItems: \"baseline\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                fontSize: \"sm\",\n                                                color: \"gray.500\",\n                                                children: movie.release_date\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                                                lineNumber: 35,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                                            mt: \"1\",\n                                            fontWeight: \"semibold\",\n                                            as: \"h4\",\n                                            lineHeight: \"tight\",\n                                            isTruncated: true,\n                                            children: movie.title\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/movies/\".concat(movie.id),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                mt: \"2\",\n                                                color: \"blue.500\",\n                                                fontSize: \"sm\",\n                                                cursor: \"pointer\",\n                                                children: \"View Details\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, movie.id, true, {\n                            fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 17\n                        }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                        children: \"No movies available\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MovieList, \"MO6b3PSP3RIUqZ8gtSrBZBVtBbs=\");\n_c = MovieList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieList);\nvar _c;\n$RefreshReg$(_c, \"MovieList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb3ZpZUxpc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQjs7O0FBQ3dCO0FBQ3pCO0FBQ0c7QUFDMkQ7QUFFeEYsTUFBTVksWUFBWTs7SUFDaEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdaLCtDQUFRQSxDQUFDLEVBQUU7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWMsY0FBYztZQUNsQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTWIsaURBQVMsQ0FBQztnQkFDakNlLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJILFNBQVNJLElBQUk7Z0JBQzVDTixVQUFVRSxTQUFTSSxJQUFJO1lBQ3pCLEVBQUUsT0FBT0MsT0FBTztnQkFDZEgsUUFBUUcsS0FBSyxDQUFDLHlCQUF5QkE7WUFDekM7UUFDRjtRQUNBTjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDUCxvREFBTUE7UUFBQ2MsT0FBTTtRQUFTQyxTQUFTO2tCQUM5Qiw0RUFBQ1osdURBQVNBOzs4QkFDViw4REFBQ0QscURBQU9BOzhCQUFDOzs7Ozs7OEJBRVQsOERBQUNELG9EQUFNQTtvQkFBQ2MsU0FBUzs4QkFDZFYsVUFBVUEsT0FBT1csTUFBTSxHQUFHLElBQ3ZCWCxPQUFPWSxHQUFHLENBQUMsQ0FBQ0Msc0JBQ1IsOERBQUNyQixpREFBR0E7NEJBQWdCc0IsTUFBSzs0QkFBS0MsYUFBWTs0QkFBTUMsY0FBYTs0QkFBS0MsVUFBUzs7OENBQzdFLDhEQUFDeEIsbURBQUtBO29DQUFDeUIsS0FBSyxtQ0FBcUQsT0FBbEJMLE1BQU1NLFdBQVc7b0NBQUlDLEtBQUtQLE1BQU1RLEtBQUs7Ozs7Ozs4Q0FDcEYsOERBQUM3QixpREFBR0E7b0NBQUM4QixHQUFFOztzREFDTCw4REFBQzlCLGlEQUFHQTs0Q0FBQytCLEdBQUU7NENBQU9DLFlBQVc7c0RBQ3ZCLDRFQUFDOUIsa0RBQUlBO2dEQUFDK0IsVUFBUztnREFBS0MsT0FBTTswREFDdkJiLE1BQU1jLFlBQVk7Ozs7Ozs7Ozs7O3NEQUd2Qiw4REFBQ25DLGlEQUFHQTs0Q0FBQ29DLElBQUc7NENBQUlDLFlBQVc7NENBQVdDLElBQUc7NENBQUtDLFlBQVc7NENBQVFDLFdBQVc7c0RBQ3JFbkIsTUFBTVEsS0FBSzs7Ozs7O3NEQUdkLDhEQUFDOUIsa0RBQUlBOzRDQUFDMEMsTUFBTSxXQUFvQixPQUFUcEIsTUFBTXFCLEVBQUU7c0RBQzdCLDRFQUFDeEMsa0RBQUlBO2dEQUFDa0MsSUFBRztnREFBSUYsT0FBTTtnREFBV0QsVUFBUztnREFBS1UsUUFBTzswREFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQWJyRHRCLE1BQU1xQixFQUFFOzs7O3VEQXFCcEIsOERBQUN4QyxrREFBSUE7a0NBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEI7R0FuRE1LO0tBQUFBO0FBcUROLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdC5qc3g/MzBiYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL01vdmllTGlzdC50c3hcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEJveCwgSW1hZ2UsIFRleHQsIFZTdGFjaywgSFN0YWNrLCBIZWFkaW5nLCBDb250YWluZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuXHJcbmNvbnN0IE1vdmllTGlzdCA9ICgpID0+IHtcclxuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hNb3ZpZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvbW92aWVzL3BvcHVsYXInKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnRmV0Y2hlZCBtb3ZpZXM6JywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgc2V0TW92aWVzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIE1vdmllcycsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoTW92aWVzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFZTdGFjayBhbGlnbj1cImNlbnRlclwiIHNwYWNpbmc9ezh9PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8SGVhZGluZz5Qb3B1bGFyIE1vdmllczwvSGVhZGluZz5cclxuXHJcbiAgICAgIDxIU3RhY2sgc3BhY2luZz17OH0+XHJcbiAgICAgICAge21vdmllcyAmJiBtb3ZpZXMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgbW92aWVzLm1hcCgobW92aWUpID0+IChcclxuICAgICAgICAgICAgICAgIDxCb3gga2V5PXttb3ZpZS5pZH0gbWF4Vz1cInNtXCIgYm9yZGVyV2lkdGg9XCIxcHhcIiBib3JkZXJSYWRpdXM9XCJsZ1wiIG92ZXJmbG93PVwiaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17YGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAvJHttb3ZpZS5wb3N0ZXJfcGF0aH1gfSBhbHQ9e21vdmllLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgIDxCb3ggcD1cIjZcIj5cclxuICAgICAgICAgICAgICAgIDxCb3ggZD1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiYmFzZWxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJzbVwiIGNvbG9yPVwiZ3JheS41MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bW92aWUucmVsZWFzZV9kYXRlfVxyXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDxCb3ggbXQ9XCIxXCIgZm9udFdlaWdodD1cInNlbWlib2xkXCIgYXM9XCJoNFwiIGxpbmVIZWlnaHQ9XCJ0aWdodFwiIGlzVHJ1bmNhdGVkPlxyXG4gICAgICAgICAgICAgICAgICB7bW92aWUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL21vdmllcy8ke21vdmllLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dCBtdD1cIjJcIiBjb2xvcj1cImJsdWUuNTAwXCIgZm9udFNpemU9XCJzbVwiIGN1cnNvcj1cInBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICBWaWV3IERldGFpbHNcclxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxUZXh0Pk5vIG1vdmllcyBhdmFpbGFibGU8L1RleHQ+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgPC9IU3RhY2s+XHJcbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L1ZTdGFjaz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiTGluayIsIkJveCIsIkltYWdlIiwiVGV4dCIsIlZTdGFjayIsIkhTdGFjayIsIkhlYWRpbmciLCJDb250YWluZXIiLCJNb3ZpZUxpc3QiLCJtb3ZpZXMiLCJzZXRNb3ZpZXMiLCJmZXRjaE1vdmllcyIsInJlc3BvbnNlIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnJvciIsImFsaWduIiwic3BhY2luZyIsImxlbmd0aCIsIm1hcCIsIm1vdmllIiwibWF4VyIsImJvcmRlcldpZHRoIiwiYm9yZGVyUmFkaXVzIiwib3ZlcmZsb3ciLCJzcmMiLCJwb3N0ZXJfcGF0aCIsImFsdCIsInRpdGxlIiwicCIsImQiLCJhbGlnbkl0ZW1zIiwiZm9udFNpemUiLCJjb2xvciIsInJlbGVhc2VfZGF0ZSIsIm10IiwiZm9udFdlaWdodCIsImFzIiwibGluZUhlaWdodCIsImlzVHJ1bmNhdGVkIiwiaHJlZiIsImlkIiwiY3Vyc29yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/MovieList.jsx\n"));

/***/ })

});