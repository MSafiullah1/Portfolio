"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"52dcbad47079\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyIvVXNlcnMvbXVoYW1tYWRzYWZpdWxsYWgvRGVza3RvcC9MVU1TL1BvcnRmb2xpbyBXZWJzaXRlL3NyYy9hcHAvZ2xvYmFscy5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI1MmRjYmFkNDcwNzlcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"(app-pages-browser)/./node_modules/next-themes/dist/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_Menu_Moon_Sun_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Menu,Moon,Sun,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/sun.js\");\n/* harmony import */ var _barrel_optimize_names_Menu_Moon_Sun_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Menu,Moon,Sun,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/moon.js\");\n/* harmony import */ var _barrel_optimize_names_Menu_Moon_Sun_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Menu,Moon,Sun,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/x.js\");\n/* harmony import */ var _barrel_optimize_names_Menu_Moon_Sun_X_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Menu,Moon,Sun,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Header() {\n    _s();\n    const { theme, setTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [mobileMenuOpen, setMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"Header.useEffect\": ()=>setMounted(true)\n    }[\"Header.useEffect\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"Header.useEffect\": ()=>{\n            if (mobileMenuOpen) {\n                document.body.style.overflow = 'hidden';\n            } else {\n                document.body.style.overflow = 'unset';\n            }\n        }\n    }[\"Header.useEffect\"], [\n        mobileMenuOpen\n    ]);\n    if (!mounted) return null;\n    const navItems = [\n        {\n            href: \"#home\",\n            label: \"Home\"\n        },\n        {\n            href: \"#about\",\n            label: \"About\"\n        },\n        {\n            href: \"#education\",\n            label: \"Education\"\n        },\n        {\n            href: \"#experience\",\n            label: \"Experience\"\n        },\n        {\n            href: \"#projects\",\n            label: \"Projects\"\n        },\n        {\n            href: \"#skills\",\n            label: \"Skills\"\n        },\n        {\n            href: \"#contact\",\n            label: \"Contact\"\n        }\n    ];\n    const NavItems = (param)=>{\n        let { mobile = false } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: navItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: item.href,\n                        className: \"text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors \".concat(mobile ? 'block text-lg py-2' : ''),\n                        onClick: ()=>mobile && setMobileMenuOpen(false),\n                        children: item.label\n                    }, void 0, false, {\n                        fileName: \"/Users/muhammadsafiullah/Desktop/LUMS/Portfolio Website/src/components/Header.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this)\n                }, item.href, false, {\n                    fileName: \"/Users/muhammadsafiullah/Desktop/LUMS/Portfolio Website/src/components/Header.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this))\n        }, void 0, false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"container mx-auto px-6 py-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/\",\n                            className: \"text-2xl font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors\",\n                            children: \"Muhammad Safiullah\"\n                        }, void 0, false, {\n                            fileName: \"/Users/muhammadsafiullah/Desktop/LUMS/Portfolio Website/src/components/Header.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hidden md:flex space-x-6 items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"flex space-x-6 items-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItems, {}, void 0, false, {\n                                        fileName: \"/Users/muhammadsafiullah/Desktop/LUMS/Portfolio Website/src/components/Header.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/muhammadsafiullah/Desktop/LUMS/Portfolio Website/src/components/Header.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>setTheme(theme === 'dark' ? 'light' : 'dark'),\n                                    className: \"p-2 rounded-full bg-gray-200 dark:bg-gray-700\",\n                                    children: theme === 'dark' ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_Moon_Sun_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        className: \"w-5 h-5\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/muhammadsafiullah/Desktop/LUMS/Portfolio Website/src/components/Header.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 35\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_Moon_Sun_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        className: \"w-5 h-5\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/muhammadsafiullah/Desktop/LUMS/Portfolio Website/src/components/Header.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 65\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/muhammadsafiullah/Desktop/LUMS/Portfolio Website/src/components/Header.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/muhammadsafiullah/Desktop/LUMS/Portfolio Website/src/components/Header.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"md:hidden flex items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>setTheme(theme === 'dark' ? 'light' : 'dark'),\n                                    className: \"p-2 rounded-full bg-gray-200 dark:bg-gray-700 mr-2\",\n                                    children: theme === 'dark' ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_Moon_Sun_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        className: \"w-5 h-5\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/muhammadsafiullah/Desktop/LUMS/Portfolio Website/src/components/Header.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 35\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_Moon_Sun_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        className: \"w-5 h-5\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/muhammadsafiullah/Desktop/LUMS/Portfolio Website/src/components/Header.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 65\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/muhammadsafiullah/Desktop/LUMS/Portfolio Website/src/components/Header.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),\n                                    className: \"text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400\",\n                                    children: mobileMenuOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_Moon_Sun_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        className: \"w-6 h-6\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/muhammadsafiullah/Desktop/LUMS/Portfolio Website/src/components/Header.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 33\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_Moon_Sun_X_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        className: \"w-6 h-6\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/muhammadsafiullah/Desktop/LUMS/Portfolio Website/src/components/Header.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 61\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/muhammadsafiullah/Desktop/LUMS/Portfolio Website/src/components/Header.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/muhammadsafiullah/Desktop/LUMS/Portfolio Website/src/components/Header.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/muhammadsafiullah/Desktop/LUMS/Portfolio Website/src/components/Header.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this),\n                mobileMenuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"fixed inset-y-0 right-0 max-w-xs w-full bg-white dark:bg-gray-800 shadow-xl p-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between items-center mb-8\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-2xl font-bold text-indigo-600 dark:text-indigo-400\",\n                                        children: \"Menu\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/muhammadsafiullah/Desktop/LUMS/Portfolio Website/src/components/Header.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>setMobileMenuOpen(false),\n                                        className: \"text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_Moon_Sun_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            className: \"w-6 h-6\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/muhammadsafiullah/Desktop/LUMS/Portfolio Website/src/components/Header.tsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/muhammadsafiullah/Desktop/LUMS/Portfolio Website/src/components/Header.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/muhammadsafiullah/Desktop/LUMS/Portfolio Website/src/components/Header.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"space-y-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItems, {\n                                    mobile: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/muhammadsafiullah/Desktop/LUMS/Portfolio Website/src/components/Header.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/muhammadsafiullah/Desktop/LUMS/Portfolio Website/src/components/Header.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/muhammadsafiullah/Desktop/LUMS/Portfolio Website/src/components/Header.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/muhammadsafiullah/Desktop/LUMS/Portfolio Website/src/components/Header.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/muhammadsafiullah/Desktop/LUMS/Portfolio Website/src/components/Header.tsx\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/muhammadsafiullah/Desktop/LUMS/Portfolio Website/src/components/Header.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"EtzHyK1mMkEVgXlbsyYxmiWtLBE=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUU0QjtBQUNVO0FBQ1c7QUFDTjtBQUU1QixTQUFTUTs7SUFDdEIsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHVCxxREFBUUE7SUFDcEMsTUFBTSxDQUFDVSxTQUFTQyxXQUFXLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ00sZ0JBQWdCQyxrQkFBa0IsR0FBR1AsK0NBQVFBLENBQUM7SUFFckRELGdEQUFTQTs0QkFBQyxJQUFNTSxXQUFXOzJCQUFPLEVBQUU7SUFFcENOLGdEQUFTQTs0QkFBQztZQUNSLElBQUlPLGdCQUFnQjtnQkFDbEJFLFNBQVNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxRQUFRLEdBQUc7WUFDakMsT0FBTztnQkFDTEgsU0FBU0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFFBQVEsR0FBRztZQUNqQztRQUNGOzJCQUFHO1FBQUNMO0tBQWU7SUFFbkIsSUFBSSxDQUFDRixTQUFTLE9BQU87SUFFckIsTUFBTVEsV0FBVztRQUNmO1lBQUVDLE1BQU07WUFBU0MsT0FBTztRQUFPO1FBQy9CO1lBQUVELE1BQU07WUFBVUMsT0FBTztRQUFRO1FBQ2pDO1lBQUVELE1BQU07WUFBY0MsT0FBTztRQUFZO1FBQ3pDO1lBQUVELE1BQU07WUFBZUMsT0FBTztRQUFhO1FBQzNDO1lBQUVELE1BQU07WUFBYUMsT0FBTztRQUFXO1FBQ3ZDO1lBQUVELE1BQU07WUFBV0MsT0FBTztRQUFTO1FBQ25DO1lBQUVELE1BQU07WUFBWUMsT0FBTztRQUFVO0tBQ3RDO0lBRUQsTUFBTUMsV0FBVztZQUFDLEVBQUVDLFNBQVMsS0FBSyxFQUFFOzZCQUNsQztzQkFDR0osU0FBU0ssR0FBRyxDQUFDLENBQUNDLHFCQUNiLDhEQUFDQzs4QkFDQyw0RUFBQzFCLGtEQUFJQTt3QkFDSG9CLE1BQU1LLEtBQUtMLElBQUk7d0JBQ2ZPLFdBQVcsdUdBRVYsT0FEQ0osU0FBUyx1QkFBdUI7d0JBRWxDSyxTQUFTLElBQU1MLFVBQVVULGtCQUFrQjtrQ0FFMUNXLEtBQUtKLEtBQUs7Ozs7OzttQkFSTkksS0FBS0wsSUFBSTs7Ozs7OztJQWV4QixxQkFDRSw4REFBQ1M7UUFBT0YsV0FBVTtrQkFDaEIsNEVBQUNHO1lBQUlILFdBQVU7OzhCQUNiLDhEQUFDSTtvQkFBSUosV0FBVTs7c0NBQ2IsOERBQUMzQixrREFBSUE7NEJBQUNvQixNQUFLOzRCQUFJTyxXQUFVO3NDQUE2SDs7Ozs7O3NDQUd0Siw4REFBQ0k7NEJBQUlKLFdBQVU7OzhDQUNiLDhEQUFDSztvQ0FBR0wsV0FBVTs4Q0FDWiw0RUFBQ0w7Ozs7Ozs7Ozs7OENBRUgsOERBQUNXO29DQUNDTCxTQUFTLElBQU1sQixTQUFTRCxVQUFVLFNBQVMsVUFBVTtvQ0FDckRrQixXQUFVOzhDQUVUbEIsVUFBVSx1QkFBUyw4REFBQ04sMkZBQUdBO3dDQUFDd0IsV0FBVTs7Ozs7NkRBQWUsOERBQUN6QiwyRkFBSUE7d0NBQUN5QixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHdEUsOERBQUNJOzRCQUFJSixXQUFVOzs4Q0FDYiw4REFBQ007b0NBQ0NMLFNBQVMsSUFBTWxCLFNBQVNELFVBQVUsU0FBUyxVQUFVO29DQUNyRGtCLFdBQVU7OENBRVRsQixVQUFVLHVCQUFTLDhEQUFDTiwyRkFBR0E7d0NBQUN3QixXQUFVOzs7Ozs2REFBZSw4REFBQ3pCLDJGQUFJQTt3Q0FBQ3lCLFdBQVU7Ozs7Ozs7Ozs7OzhDQUVwRSw4REFBQ007b0NBQ0NMLFNBQVMsSUFBTWQsa0JBQWtCLENBQUNEO29DQUNsQ2MsV0FBVTs4Q0FFVGQsK0JBQWlCLDhEQUFDUiwyRkFBQ0E7d0NBQUNzQixXQUFVOzs7Ozs2REFBZSw4REFBQ3ZCLDJGQUFJQTt3Q0FBQ3VCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUluRWQsZ0NBQ0MsOERBQUNrQjtvQkFBSUosV0FBVTs4QkFDYiw0RUFBQ0k7d0JBQUlKLFdBQVU7OzBDQUNiLDhEQUFDSTtnQ0FBSUosV0FBVTs7a0RBQ2IsOERBQUNPO3dDQUFHUCxXQUFVO2tEQUEwRDs7Ozs7O2tEQUN4RSw4REFBQ007d0NBQ0NMLFNBQVMsSUFBTWQsa0JBQWtCO3dDQUNqQ2EsV0FBVTtrREFFViw0RUFBQ3RCLDJGQUFDQTs0Q0FBQ3NCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUdqQiw4REFBQ0s7Z0NBQUdMLFdBQVU7MENBQ1osNEVBQUNMO29DQUFTQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRaEM7R0FuR3dCZjs7UUFDTVAsaURBQVFBOzs7S0FEZE8iLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdWhhbW1hZHNhZml1bGxhaC9EZXNrdG9wL0xVTVMvUG9ydGZvbGlvIFdlYnNpdGUvc3JjL2NvbXBvbmVudHMvSGVhZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICduZXh0LXRoZW1lcydcbmltcG9ydCB7IE1vb24sIFN1biwgTWVudSwgWCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCB7IHRoZW1lLCBzZXRUaGVtZSB9ID0gdXNlVGhlbWUoKVxuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW21vYmlsZU1lbnVPcGVuLCBzZXRNb2JpbGVNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4gc2V0TW91bnRlZCh0cnVlKSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobW9iaWxlTWVudU9wZW4pIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICd1bnNldCc7XG4gICAgfVxuICB9LCBbbW9iaWxlTWVudU9wZW5dKTtcblxuICBpZiAoIW1vdW50ZWQpIHJldHVybiBudWxsXG5cbiAgY29uc3QgbmF2SXRlbXMgPSBbXG4gICAgeyBocmVmOiBcIiNob21lXCIsIGxhYmVsOiBcIkhvbWVcIiB9LFxuICAgIHsgaHJlZjogXCIjYWJvdXRcIiwgbGFiZWw6IFwiQWJvdXRcIiB9LFxuICAgIHsgaHJlZjogXCIjZWR1Y2F0aW9uXCIsIGxhYmVsOiBcIkVkdWNhdGlvblwiIH0sXG4gICAgeyBocmVmOiBcIiNleHBlcmllbmNlXCIsIGxhYmVsOiBcIkV4cGVyaWVuY2VcIiB9LFxuICAgIHsgaHJlZjogXCIjcHJvamVjdHNcIiwgbGFiZWw6IFwiUHJvamVjdHNcIiB9LFxuICAgIHsgaHJlZjogXCIjc2tpbGxzXCIsIGxhYmVsOiBcIlNraWxsc1wiIH0sXG4gICAgeyBocmVmOiBcIiNjb250YWN0XCIsIGxhYmVsOiBcIkNvbnRhY3RcIiB9LFxuICBdXG5cbiAgY29uc3QgTmF2SXRlbXMgPSAoeyBtb2JpbGUgPSBmYWxzZSB9KSA9PiAoXG4gICAgPD5cbiAgICAgIHtuYXZJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgPGxpIGtleT17aXRlbS5ocmVmfT5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS0zMDAgaG92ZXI6dGV4dC1pbmRpZ28tNjAwIGRhcms6aG92ZXI6dGV4dC1pbmRpZ28tNDAwIHRyYW5zaXRpb24tY29sb3JzICR7XG4gICAgICAgICAgICAgIG1vYmlsZSA/ICdibG9jayB0ZXh0LWxnIHB5LTInIDogJydcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbW9iaWxlICYmIHNldE1vYmlsZU1lbnVPcGVuKGZhbHNlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXRlbS5sYWJlbH1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJiZy13aGl0ZSBkYXJrOmJnLWdyYXktODAwIHNoYWRvdy1zbSBzdGlja3kgdG9wLTAgei0xMFwiPlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC02IHB5LTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWluZGlnby02MDAgZGFyazp0ZXh0LWluZGlnby00MDAgaG92ZXI6dGV4dC1pbmRpZ28tODAwIGRhcms6aG92ZXI6dGV4dC1pbmRpZ28tMjAwIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgICBNdWhhbW1hZCBTYWZpdWxsYWhcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBzcGFjZS14LTYgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTYgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxOYXZJdGVtcyAvPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGhlbWUodGhlbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyaycpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC1mdWxsIGJnLWdyYXktMjAwIGRhcms6YmctZ3JheS03MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dGhlbWUgPT09ICdkYXJrJyA/IDxTdW4gY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+IDogPE1vb24gY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW4gZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGhlbWUodGhlbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyaycpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC1mdWxsIGJnLWdyYXktMjAwIGRhcms6YmctZ3JheS03MDAgbXItMlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0aGVtZSA9PT0gJ2RhcmsnID8gPFN1biBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz4gOiA8TW9vbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz59XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9iaWxlTWVudU9wZW4oIW1vYmlsZU1lbnVPcGVuKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS0zMDAgaG92ZXI6dGV4dC1pbmRpZ28tNjAwIGRhcms6aG92ZXI6dGV4dC1pbmRpZ28tNDAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge21vYmlsZU1lbnVPcGVuID8gPFggY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+IDogPE1lbnUgY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7bW9iaWxlTWVudU9wZW4gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTUwIGJnLWJsYWNrIGJnLW9wYWNpdHktNTAgbWQ6aGlkZGVuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LXktMCByaWdodC0wIG1heC13LXhzIHctZnVsbCBiZy13aGl0ZSBkYXJrOmJnLWdyYXktODAwIHNoYWRvdy14bCBwLTZcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItOFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1pbmRpZ28tNjAwIGRhcms6dGV4dC1pbmRpZ28tNDAwXCI+TWVudTwvaDI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9iaWxlTWVudU9wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS0zMDAgaG92ZXI6dGV4dC1pbmRpZ28tNjAwIGRhcms6aG92ZXI6dGV4dC1pbmRpZ28tNDAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICA8TmF2SXRlbXMgbW9iaWxlIC8+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlVGhlbWUiLCJNb29uIiwiU3VuIiwiTWVudSIsIlgiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWRlciIsInRoZW1lIiwic2V0VGhlbWUiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsIm1vYmlsZU1lbnVPcGVuIiwic2V0TW9iaWxlTWVudU9wZW4iLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwibmF2SXRlbXMiLCJocmVmIiwibGFiZWwiLCJOYXZJdGVtcyIsIm1vYmlsZSIsIm1hcCIsIml0ZW0iLCJsaSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJoZWFkZXIiLCJuYXYiLCJkaXYiLCJ1bCIsImJ1dHRvbiIsImgyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Header.tsx\n"));

/***/ })

});