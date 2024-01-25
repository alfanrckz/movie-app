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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n// components/MovieList.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst MovieList = ()=>{\n    _s();\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchMovies = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:5000/api/movies/popular\");\n                console.log(\"Fetched movies:\", response.data);\n                setMovies(response.data);\n            } catch (error) {\n                console.error(\"Error fetching Movies\", error);\n            }\n        };\n        fetchMovies();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {\n        align: \"center\",\n        spacing: 8,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                children: \"Popular Movies\"\n            }, void 0, false, {\n                fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.HStack, {\n                spacing: 8,\n                children: movies && movies.length > 0 ? movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                        maxW: \"sm\",\n                        borderWidth: \"1px\",\n                        borderRadius: \"lg\",\n                        overflow: \"hidden\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                                src: \"https://image.tmdb.org/t/p/w500/\".concat(movie.poster_path),\n                                alt: movie.title\n                            }, void 0, false, {\n                                fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                                p: \"6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                                        d: \"flex\",\n                                        alignItems: \"baseline\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                            fontSize: \"sm\",\n                                            color: \"gray.500\",\n                                            children: movie.release_date\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                                        mt: \"1\",\n                                        fontWeight: \"semibold\",\n                                        as: \"h4\",\n                                        lineHeight: \"tight\",\n                                        isTruncated: true,\n                                        children: movie.title\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/movies/\".concat(movie.id),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                            mt: \"2\",\n                                            color: \"blue.500\",\n                                            fontSize: \"sm\",\n                                            cursor: \"pointer\",\n                                            children: \"View Details\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, movie.id, true, {\n                        fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                    children: \"No movies available\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MovieList, \"MO6b3PSP3RIUqZ8gtSrBZBVtBbs=\");\n_c = MovieList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieList);\nvar _c;\n$RefreshReg$(_c, \"MovieList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb3ZpZUxpc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQjs7O0FBQ3dCO0FBQ3pCO0FBQ0c7QUFDZ0Q7QUFFN0UsTUFBTVcsWUFBWTs7SUFDaEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdYLCtDQUFRQSxDQUFDLEVBQUU7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWEsY0FBYztZQUNsQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTVosaURBQVMsQ0FBQztnQkFDakNjLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJILFNBQVNJLElBQUk7Z0JBQzVDTixVQUFVRSxTQUFTSSxJQUFJO1lBQ3pCLEVBQUUsT0FBT0MsT0FBTztnQkFDZEgsUUFBUUcsS0FBSyxDQUFDLHlCQUF5QkE7WUFDekM7UUFDRjtRQUNBTjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDTixvREFBTUE7UUFBQ2EsT0FBTTtRQUFTQyxTQUFTOzswQkFDOUIsOERBQUNaLHFEQUFPQTswQkFBQzs7Ozs7OzBCQUNULDhEQUFDRCxvREFBTUE7Z0JBQUNhLFNBQVM7MEJBQ2RWLFVBQVVBLE9BQU9XLE1BQU0sR0FBRyxJQUN6QlgsT0FBT1ksR0FBRyxDQUFDLENBQUNDLHNCQUNWLDhEQUFDcEIsaURBQUdBO3dCQUFnQnFCLE1BQUs7d0JBQUtDLGFBQVk7d0JBQU1DLGNBQWE7d0JBQUtDLFVBQVM7OzBDQUN6RSw4REFBQ3ZCLG1EQUFLQTtnQ0FBQ3dCLEtBQUssbUNBQXFELE9BQWxCTCxNQUFNTSxXQUFXO2dDQUFJQyxLQUFLUCxNQUFNUSxLQUFLOzs7Ozs7MENBQ3BGLDhEQUFDNUIsaURBQUdBO2dDQUFDNkIsR0FBRTs7a0RBQ0wsOERBQUM3QixpREFBR0E7d0NBQUM4QixHQUFFO3dDQUFPQyxZQUFXO2tEQUN2Qiw0RUFBQzdCLGtEQUFJQTs0Q0FBQzhCLFVBQVM7NENBQUtDLE9BQU07c0RBQ3ZCYixNQUFNYyxZQUFZOzs7Ozs7Ozs7OztrREFHdkIsOERBQUNsQyxpREFBR0E7d0NBQUNtQyxJQUFHO3dDQUFJQyxZQUFXO3dDQUFXQyxJQUFHO3dDQUFLQyxZQUFXO3dDQUFRQyxXQUFXO2tEQUNyRW5CLE1BQU1RLEtBQUs7Ozs7OztrREFHZCw4REFBQzdCLGtEQUFJQTt3Q0FBQ3lDLE1BQU0sV0FBb0IsT0FBVHBCLE1BQU1xQixFQUFFO2tEQUM3Qiw0RUFBQ3ZDLGtEQUFJQTs0Q0FBQ2lDLElBQUc7NENBQUlGLE9BQU07NENBQVdELFVBQVM7NENBQUtVLFFBQU87c0RBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFiekR0QixNQUFNcUIsRUFBRTs7OzttREFxQnBCLDhEQUFDdkMsa0RBQUlBOzhCQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtoQjtHQWhETUk7S0FBQUE7QUFrRE4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW92aWVMaXN0LmpzeD8zMGJiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvTW92aWVMaXN0LnRzeFxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQm94LCBJbWFnZSwgVGV4dCwgVlN0YWNrLCBIU3RhY2ssIEhlYWRpbmcgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuXHJcbmNvbnN0IE1vdmllTGlzdCA9ICgpID0+IHtcclxuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hNb3ZpZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvbW92aWVzL3BvcHVsYXInKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnRmV0Y2hlZCBtb3ZpZXM6JywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgc2V0TW92aWVzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIE1vdmllcycsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoTW92aWVzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFZTdGFjayBhbGlnbj1cImNlbnRlclwiIHNwYWNpbmc9ezh9PlxyXG4gICAgICA8SGVhZGluZz5Qb3B1bGFyIE1vdmllczwvSGVhZGluZz5cclxuICAgICAgPEhTdGFjayBzcGFjaW5nPXs4fT5cclxuICAgICAgICB7bW92aWVzICYmIG1vdmllcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgbW92aWVzLm1hcCgobW92aWUpID0+IChcclxuICAgICAgICAgICAgPEJveCBrZXk9e21vdmllLmlkfSBtYXhXPVwic21cIiBib3JkZXJXaWR0aD1cIjFweFwiIGJvcmRlclJhZGl1cz1cImxnXCIgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cclxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMC8ke21vdmllLnBvc3Rlcl9wYXRofWB9IGFsdD17bW92aWUudGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgPEJveCBwPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgPEJveCBkPVwiZmxleFwiIGFsaWduSXRlbXM9XCJiYXNlbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cInNtXCIgY29sb3I9XCJncmF5LjUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHttb3ZpZS5yZWxlYXNlX2RhdGV9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPEJveCBtdD1cIjFcIiBmb250V2VpZ2h0PVwic2VtaWJvbGRcIiBhcz1cImg0XCIgbGluZUhlaWdodD1cInRpZ2h0XCIgaXNUcnVuY2F0ZWQ+XHJcbiAgICAgICAgICAgICAgICAgIHttb3ZpZS50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbW92aWVzLyR7bW92aWUuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0IG10PVwiMlwiIGNvbG9yPVwiYmx1ZS41MDBcIiBmb250U2l6ZT1cInNtXCIgY3Vyc29yPVwicG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFZpZXcgRGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPFRleHQ+Tm8gbW92aWVzIGF2YWlsYWJsZTwvVGV4dD5cclxuICAgICAgICApfVxyXG4gICAgICA8L0hTdGFjaz5cclxuICAgIDwvVlN0YWNrPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUxpc3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJMaW5rIiwiQm94IiwiSW1hZ2UiLCJUZXh0IiwiVlN0YWNrIiwiSFN0YWNrIiwiSGVhZGluZyIsIk1vdmllTGlzdCIsIm1vdmllcyIsInNldE1vdmllcyIsImZldGNoTW92aWVzIiwicmVzcG9uc2UiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVycm9yIiwiYWxpZ24iLCJzcGFjaW5nIiwibGVuZ3RoIiwibWFwIiwibW92aWUiLCJtYXhXIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJSYWRpdXMiLCJvdmVyZmxvdyIsInNyYyIsInBvc3Rlcl9wYXRoIiwiYWx0IiwidGl0bGUiLCJwIiwiZCIsImFsaWduSXRlbXMiLCJmb250U2l6ZSIsImNvbG9yIiwicmVsZWFzZV9kYXRlIiwibXQiLCJmb250V2VpZ2h0IiwiYXMiLCJsaW5lSGVpZ2h0IiwiaXNUcnVuY2F0ZWQiLCJocmVmIiwiaWQiLCJjdXJzb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/MovieList.jsx\n"));

/***/ })

});