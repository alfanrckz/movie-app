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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n// components/MovieList.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst MovieList = ()=>{\n    _s();\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchMovies = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:5000/api/movies/popular\");\n                console.log(\"Fetched movies:\", response.data);\n                setMovies(response.data);\n            } catch (error) {\n                console.error(\"Error fetching Movies\", error);\n            }\n        };\n        fetchMovies();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        maxW: \"container.lg\",\n        centerContent: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {\n            spacing: 8,\n            align: \"center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                    children: \"Popular Movies\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.HStack, {\n                    spacing: 8,\n                    justify: \"center\",\n                    wrap: \"wrap\",\n                    children: movies && movies.length > 0 ? movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                            position: \"relative\",\n                            w: 150,\n                            h: 230,\n                            borderWidth: \"1px\",\n                            borderRadius: \"lg\",\n                            overflow: \"hidden\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                                    src: \"https://image.tmdb.org/t/p/w500/\".concat(movie.poster_path),\n                                    alt: movie.title\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                                    position: \"absolute\",\n                                    top: 0,\n                                    left: 0,\n                                    right: 0,\n                                    bg: \"rgba(0, 0, 0, 0.5)\",\n                                    p: \"6\",\n                                    color: \"white\",\n                                    textAlign: \"left\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                                            d: \"flex\",\n                                            alignItems: \"baseline\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                fontSize: \"sm\",\n                                                color: \"gray.500\",\n                                                children: movie.release_date\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                                            mt: \"1\",\n                                            fontWeight: \"semibold\",\n                                            as: \"h4\",\n                                            lineHeight: \"tight\",\n                                            isTruncated: true,\n                                            children: movie.title\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/movies/\".concat(movie.id),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                mt: \"2\",\n                                                color: \"blue.500\",\n                                                fontSize: \"sm\",\n                                                cursor: \"pointer\",\n                                                children: \"View Details\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, movie.id, true, {\n                            fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 15\n                        }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                        children: \"No movies available\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\code\\\\Project\\\\Latihan-sampai-pro\\\\Movie-app\\\\frontend\\\\src\\\\components\\\\MovieList.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MovieList, \"MO6b3PSP3RIUqZ8gtSrBZBVtBbs=\");\n_c = MovieList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieList);\nvar _c;\n$RefreshReg$(_c, \"MovieList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb3ZpZUxpc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQjs7O0FBQ3dCO0FBQ3pCO0FBQ0c7QUFDMkQ7QUFFeEYsTUFBTVksWUFBWTs7SUFDaEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdaLCtDQUFRQSxDQUFDLEVBQUU7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWMsY0FBYztZQUNsQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTWIsaURBQVMsQ0FBQztnQkFDakNlLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJILFNBQVNJLElBQUk7Z0JBQzVDTixVQUFVRSxTQUFTSSxJQUFJO1lBQ3pCLEVBQUUsT0FBT0MsT0FBTztnQkFDZEgsUUFBUUcsS0FBSyxDQUFDLHlCQUF5QkE7WUFDekM7UUFDRjtRQUNBTjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDSix1REFBU0E7UUFBQ1csTUFBSztRQUFlQyxhQUFhO2tCQUMxQyw0RUFBQ2Ysb0RBQU1BO1lBQUNnQixTQUFTO1lBQUdDLE9BQU07OzhCQUN4Qiw4REFBQ2YscURBQU9BOzhCQUFDOzs7Ozs7OEJBRVQsOERBQUNELG9EQUFNQTtvQkFBQ2UsU0FBUztvQkFBR0UsU0FBUTtvQkFBU0MsTUFBSzs4QkFDdkNkLFVBQVVBLE9BQU9lLE1BQU0sR0FBRyxJQUN6QmYsT0FBT2dCLEdBQUcsQ0FBQyxDQUFDQyxzQkFDViw4REFBQ3pCLGlEQUFHQTs0QkFBZ0IwQixVQUFTOzRCQUFXQyxHQUFHOzRCQUFLQyxHQUFHOzRCQUFLQyxhQUFZOzRCQUFNQyxjQUFhOzRCQUFLQyxVQUFTOzs4Q0FDbkcsOERBQUM5QixtREFBS0E7b0NBQUMrQixLQUFLLG1DQUFxRCxPQUFsQlAsTUFBTVEsV0FBVztvQ0FBSUMsS0FBS1QsTUFBTVUsS0FBSzs7Ozs7OzhDQUNwRiw4REFBQ25DLGlEQUFHQTtvQ0FDRjBCLFVBQVM7b0NBQ1RVLEtBQUs7b0NBQ0xDLE1BQU07b0NBQ05DLE9BQU87b0NBQ1BDLElBQUc7b0NBQ0hDLEdBQUU7b0NBQ0ZDLE9BQU07b0NBQ05DLFdBQVU7O3NEQUVWLDhEQUFDMUMsaURBQUdBOzRDQUFDMkMsR0FBRTs0Q0FBT0MsWUFBVztzREFDdkIsNEVBQUMxQyxrREFBSUE7Z0RBQUMyQyxVQUFTO2dEQUFLSixPQUFNOzBEQUN2QmhCLE1BQU1xQixZQUFZOzs7Ozs7Ozs7OztzREFHdkIsOERBQUM5QyxpREFBR0E7NENBQUMrQyxJQUFHOzRDQUFJQyxZQUFXOzRDQUFXQyxJQUFHOzRDQUFLQyxZQUFXOzRDQUFRQyxXQUFXO3NEQUNyRTFCLE1BQU1VLEtBQUs7Ozs7OztzREFHZCw4REFBQ3BDLGtEQUFJQTs0Q0FBQ3FELE1BQU0sV0FBb0IsT0FBVDNCLE1BQU00QixFQUFFO3NEQUM3Qiw0RUFBQ25ELGtEQUFJQTtnREFBQzZDLElBQUc7Z0RBQUlOLE9BQU07Z0RBQVdJLFVBQVM7Z0RBQUtTLFFBQU87MERBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkF0QnpEN0IsTUFBTTRCLEVBQUU7Ozs7dURBOEJwQiw4REFBQ25ELGtEQUFJQTtrQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sQjtHQTVETUs7S0FBQUE7QUE4RE4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW92aWVMaXN0LmpzeD8zMGJiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvTW92aWVMaXN0LnRzeFxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQm94LCBJbWFnZSwgVGV4dCwgVlN0YWNrLCBIU3RhY2ssIEhlYWRpbmcsIENvbnRhaW5lciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5cclxuY29uc3QgTW92aWVMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaE1vdmllcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9tb3ZpZXMvcG9wdWxhcicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdGZXRjaGVkIG1vdmllczonLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBzZXRNb3ZpZXMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgTW92aWVzJywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hNb3ZpZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1heFc9XCJjb250YWluZXIubGdcIiBjZW50ZXJDb250ZW50PlxyXG4gICAgICA8VlN0YWNrIHNwYWNpbmc9ezh9IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgPEhlYWRpbmc+UG9wdWxhciBNb3ZpZXM8L0hlYWRpbmc+XHJcblxyXG4gICAgICAgIDxIU3RhY2sgc3BhY2luZz17OH0ganVzdGlmeT1cImNlbnRlclwiIHdyYXA9XCJ3cmFwXCI+XHJcbiAgICAgICAgICB7bW92aWVzICYmIG1vdmllcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICBtb3ZpZXMubWFwKChtb3ZpZSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxCb3gga2V5PXttb3ZpZS5pZH0gcG9zaXRpb249XCJyZWxhdGl2ZVwiIHc9ezE1MH0gaD17MjMwfSBib3JkZXJXaWR0aD1cIjFweFwiIGJvcmRlclJhZGl1cz1cImxnXCIgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2BodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwLyR7bW92aWUucG9zdGVyX3BhdGh9YH0gYWx0PXttb3ZpZS50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIHRvcD17MH1cclxuICAgICAgICAgICAgICAgICAgbGVmdD17MH1cclxuICAgICAgICAgICAgICAgICAgcmlnaHQ9ezB9XHJcbiAgICAgICAgICAgICAgICAgIGJnPVwicmdiYSgwLCAwLCAwLCAwLjUpXCJcclxuICAgICAgICAgICAgICAgICAgcD1cIjZcIlxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxCb3ggZD1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiYmFzZWxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cInNtXCIgY29sb3I9XCJncmF5LjUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge21vdmllLnJlbGVhc2VfZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICA8Qm94IG10PVwiMVwiIGZvbnRXZWlnaHQ9XCJzZW1pYm9sZFwiIGFzPVwiaDRcIiBsaW5lSGVpZ2h0PVwidGlnaHRcIiBpc1RydW5jYXRlZD5cclxuICAgICAgICAgICAgICAgICAgICB7bW92aWUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9tb3ZpZXMvJHttb3ZpZS5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBtdD1cIjJcIiBjb2xvcj1cImJsdWUuNTAwXCIgZm9udFNpemU9XCJzbVwiIGN1cnNvcj1cInBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFZpZXcgRGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8VGV4dD5ObyBtb3ZpZXMgYXZhaWxhYmxlPC9UZXh0PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0hTdGFjaz5cclxuICAgICAgPC9WU3RhY2s+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiTGluayIsIkJveCIsIkltYWdlIiwiVGV4dCIsIlZTdGFjayIsIkhTdGFjayIsIkhlYWRpbmciLCJDb250YWluZXIiLCJNb3ZpZUxpc3QiLCJtb3ZpZXMiLCJzZXRNb3ZpZXMiLCJmZXRjaE1vdmllcyIsInJlc3BvbnNlIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnJvciIsIm1heFciLCJjZW50ZXJDb250ZW50Iiwic3BhY2luZyIsImFsaWduIiwianVzdGlmeSIsIndyYXAiLCJsZW5ndGgiLCJtYXAiLCJtb3ZpZSIsInBvc2l0aW9uIiwidyIsImgiLCJib3JkZXJXaWR0aCIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93Iiwic3JjIiwicG9zdGVyX3BhdGgiLCJhbHQiLCJ0aXRsZSIsInRvcCIsImxlZnQiLCJyaWdodCIsImJnIiwicCIsImNvbG9yIiwidGV4dEFsaWduIiwiZCIsImFsaWduSXRlbXMiLCJmb250U2l6ZSIsInJlbGVhc2VfZGF0ZSIsIm10IiwiZm9udFdlaWdodCIsImFzIiwibGluZUhlaWdodCIsImlzVHJ1bmNhdGVkIiwiaHJlZiIsImlkIiwiY3Vyc29yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/MovieList.jsx\n"));

/***/ })

});