"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/forsharing",{

/***/ "./components/Forsharing.tsx":
/*!***********************************!*\
  !*** ./components/Forsharing.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/Card/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/CardContent/index.js\");\n/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CardMedia */ \"./node_modules/@mui/material/CardMedia/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Add */ \"./node_modules/@mui/icons-material/Add.js\");\n/* harmony import */ var _mui_icons_material_Remove__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/Remove */ \"./node_modules/@mui/icons-material/Remove.js\");\n/* harmony import */ var _mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/ButtonGroup */ \"./node_modules/@mui/material/ButtonGroup/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _pages_store_fetchdatasharing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/store/fetchdatasharing */ \"./pages/store/fetchdatasharing.tsx\");\n/* harmony import */ var _pages_store_apphooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/store/apphooks */ \"./pages/store/apphooks.ts\");\n/* harmony import */ var _pages_store_orderslice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/store/orderslice */ \"./pages/store/orderslice.ts\");\n\n//Cards\n\n\n\n\n\n\n\n\n\n\n//redux elments\n\n//get && select Data from fetch offers \n\n// get app hooks from apphooks\n\n\n//Actions Of fetchOffers\n\n//AddOrder Action for orderSlice\n\nvar _s = $RefreshSig$();\nfunction Forsharing() {\n    var _this = this;\n    _s();\n    //Dispatch Fetch Data from API \n    var dispatchel = (0,_pages_store_apphooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();\n    var dipatchev = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    //Get Data From Fetch Data Offers\n    var ref = (0,_pages_store_apphooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)(_pages_store_fetchdatasharing__WEBPACK_IMPORTED_MODULE_3__.selectDataSharing), data = ref.data, pending = ref.pending, error = ref.error;\n    //orders\n    var dispatchOrder = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        dispatchel((0,_pages_store_fetchdatasharing__WEBPACK_IMPORTED_MODULE_3__.getDataSharing)());\n    }, []);\n    //Dipatch Add Order To OrderSlice\n    var handelOrder = function(post) {\n        dispatchOrder((0,_pages_store_orderslice__WEBPACK_IMPORTED_MODULE_5__.addorder)(post));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n        container: true,\n        rowSpacing: \"4\",\n        columnSpacing: \"xs:2,sm:4,md:4\",\n        direction: \"row\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        gap: \"20px\",\n        item: true,\n        xs: 2,\n        sm: 4,\n        md: 4,\n        spacing: \"3\",\n        my: 4,\n        sx: {\n            marginTop: \"50px\"\n        },\n        children: data.map(function(post, id) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                sx: {\n                    maxWidth: 345,\n                    height: \"350px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        component: \"img\",\n                        height: \"140\",\n                        image: post.imgPath,\n                        alt: post.label\n                    }, void 0, false, {\n                        fileName: \"/media/hamza/webpro/Resturant_App_use_Nextjs/components/Forsharing.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 29\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        gutterBottom: true,\n                        variant: \"h6\",\n                        component: \"p\",\n                        color: \"error\",\n                        sx: {\n                            fontWeight: \"700\",\n                            maxWidth: \"20px\"\n                        },\n                        children: post.label\n                    }, void 0, false, {\n                        fileName: \"/media/hamza/webpro/Resturant_App_use_Nextjs/components/Forsharing.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 31\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.CardActionArea, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                variant: \"h5\",\n                                sx: {\n                                    fontSize: \"20px\",\n                                    fontWeight: \"600\"\n                                },\n                                children: [\n                                    post.price * post.count,\n                                    \"Euro\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/media/hamza/webpro/Resturant_App_use_Nextjs/components/Forsharing.tsx\",\n                                lineNumber: 132,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    gutterBottom: true,\n                                    sx: {\n                                        fontSize: \"13px\"\n                                    },\n                                    component: \"p\",\n                                    children: post.info\n                                }, void 0, false, {\n                                    fileName: \"/media/hamza/webpro/Resturant_App_use_Nextjs/components/Forsharing.tsx\",\n                                    lineNumber: 136,\n                                    columnNumber: 33\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/media/hamza/webpro/Resturant_App_use_Nextjs/components/Forsharing.tsx\",\n                                lineNumber: 135,\n                                columnNumber: 29\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/hamza/webpro/Resturant_App_use_Nextjs/components/Forsharing.tsx\",\n                        lineNumber: 129,\n                        columnNumber: 29\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.CardActions, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                size: \"large\",\n                                color: \"error\",\n                                variant: \"contained\",\n                                onClick: function() {\n                                    return handelOrder(post);\n                                },\n                                children: \"Order\"\n                            }, void 0, false, {\n                                fileName: \"/media/hamza/webpro/Resturant_App_use_Nextjs/components/Forsharing.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                color: \"error\",\n                                variant: \"contained\",\n                                onClick: function() {\n                                    return dipatchev((0,_pages_store_fetchdatasharing__WEBPACK_IMPORTED_MODULE_3__.incrementSharing)(id));\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.IconButton, {\n                                    color: \"error\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                        sx: {\n                                            marginLeft: \"5px\",\n                                            marginRight: \"5px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/media/hamza/webpro/Resturant_App_use_Nextjs/components/Forsharing.tsx\",\n                                        lineNumber: 149,\n                                        columnNumber: 37\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/media/hamza/webpro/Resturant_App_use_Nextjs/components/Forsharing.tsx\",\n                                    lineNumber: 148,\n                                    columnNumber: 29\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/media/hamza/webpro/Resturant_App_use_Nextjs/components/Forsharing.tsx\",\n                                lineNumber: 146,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                color: \"error\",\n                                variant: \"contained\",\n                                onClick: function() {\n                                    return dipatchev((0,_pages_store_fetchdatasharing__WEBPACK_IMPORTED_MODULE_3__.decrementSharing)(id));\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.IconButton, {\n                                    color: \"error\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Remove__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                        sx: {\n                                            marginLeft: \"0px\",\n                                            marginRight: \"5px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/media/hamza/webpro/Resturant_App_use_Nextjs/components/Forsharing.tsx\",\n                                        lineNumber: 157,\n                                        columnNumber: 37\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/media/hamza/webpro/Resturant_App_use_Nextjs/components/Forsharing.tsx\",\n                                    lineNumber: 156,\n                                    columnNumber: 29\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/media/hamza/webpro/Resturant_App_use_Nextjs/components/Forsharing.tsx\",\n                                lineNumber: 154,\n                                columnNumber: 29\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/hamza/webpro/Resturant_App_use_Nextjs/components/Forsharing.tsx\",\n                        lineNumber: 142,\n                        columnNumber: 29\n                    }, _this)\n                ]\n            }, id, true, {\n                fileName: \"/media/hamza/webpro/Resturant_App_use_Nextjs/components/Forsharing.tsx\",\n                lineNumber: 117,\n                columnNumber: 25\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/media/hamza/webpro/Resturant_App_use_Nextjs/components/Forsharing.tsx\",\n        lineNumber: 97,\n        columnNumber: 13\n    }, this);\n}\n_s(Forsharing, \"+JSgpa1Y3J0jILgNmHKW9h7SVMM=\", false, function() {\n    return [\n        _pages_store_apphooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        _pages_store_apphooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Forsharing;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Forsharing);\nvar _c;\n$RefreshReg$(_c, \"Forsharing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzZDQUFJOzs7Ozt5Q0FFckQ7Ozs7O3FDQUNDOzs7Ozs7NkJBSUE7O2VBL0MrQm5CLEVBQUU7Ozs7cUJBZ0RoRDtTQUNOLENBQUM7Ozs7O1lBSUgsQ0FFVjtDQUNKO0dBbEhJekIsVUFBVTs7UUFRUU4saUVBQWM7UUFFaEJILG9EQUFXO1FBTXhCSSxpRUFBYztRQUdJSixvREFBVzs7O0FBbkJoQ1MsS0FBQUEsVUFBVTtBQXFIZiwrREFBZUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZvcnNoYXJpbmcudHN4PzkxZWMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vL0NhcmRzXG5pbXBvcnQge1xuICAgIFN0YWNrLFxuICAgIEdyaWQsXG4gICAgSWNvbkJ1dHRvbixcbiAgICBcbiAgICBcbiAgICB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG4gICAgXG4gICAgaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuICAgIGltcG9ydCBDYXJkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZCc7XG4gICAgaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnQnO1xuICAgIGltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkTWVkaWEnO1xuICAgIGltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG4gICAgaW1wb3J0IHsgQnV0dG9uLCBDYXJkQWN0aW9uQXJlYSwgQ2FyZEFjdGlvbnMgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbiAgICBcbiAgICBcbiAgICBpbXBvcnQgQWRkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FkZCc7XG4gICAgaW1wb3J0IFJlbW92ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SZW1vdmUnO1xuICAgIGltcG9ydCBFdXJvSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0V1cm8nO1xuICAgIGltcG9ydCBCdXR0b25Hcm91cCBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbkdyb3VwJztcblxuICAgIC8vcmVkdXggZWxtZW50c1xuICAgIGltcG9ydCB7dXNlRGlzcGF0Y2gsdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG4vL2dldCAmJiBzZWxlY3QgRGF0YSBmcm9tIGZldGNoIG9mZmVycyBcbiAgICBpbXBvcnQge1xuICAgICAgICBnZXREYXRhU2hhcmluZyxcbiAgICAgICAgc2VsZWN0RGF0YVNoYXJpbmdcbiAgICB9ZnJvbSAnLi4vcGFnZXMvc3RvcmUvZmV0Y2hkYXRhc2hhcmluZydcblxuLy8gZ2V0IGFwcCBob29rcyBmcm9tIGFwcGhvb2tzXG4gICAgaW1wb3J0IHtcbiAgICAgICAgdXNlQXBwRGlzcGF0Y2gsXG4gICAgICAgIHVzZUFwcFNlbGVjdG9yXG4gICAgfWZyb20gJy4uL3BhZ2VzL3N0b3JlL2FwcGhvb2tzJ1xuICAgIFxuXG5cblxuXG5cblxuXG5cbiAgICBpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5cbiAgICAvL0FjdGlvbnMgT2YgZmV0Y2hPZmZlcnNcbmltcG9ydCB7aW5jcmVtZW50U2hhcmluZyxkZWNyZW1lbnRTaGFyaW5nfSBmcm9tICcuLi9wYWdlcy9zdG9yZS9mZXRjaGRhdGFzaGFyaW5nJyBcblxuLy9BZGRPcmRlciBBY3Rpb24gZm9yIG9yZGVyU2xpY2VcbmltcG9ydCB7IGFkZG9yZGVyIH0gZnJvbSAnLi4vcGFnZXMvc3RvcmUvb3JkZXJzbGljZSc7XG5cblxuXG5cblxuZnVuY3Rpb24gRm9yc2hhcmluZyAoKXtcblxuXG5cblxuXG5cbiAgICAgICAgICAgIC8vRGlzcGF0Y2ggRmV0Y2ggRGF0YSBmcm9tIEFQSSBcbiAgICAgICAgY29uc3QgZGlzcGF0Y2hlbCA9IHVzZUFwcERpc3BhdGNoKClcblxuICAgICAgIGNvbnN0ICBkaXBhdGNoZXY9IHVzZURpc3BhdGNoKClcbiAgICAgICAvL0dldCBEYXRhIEZyb20gRmV0Y2ggRGF0YSBPZmZlcnNcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBlbmRpbmcsXG4gICAgICAgICAgICBlcnJvcixcbiAgICAgICAgfSA9IHVzZUFwcFNlbGVjdG9yKHNlbGVjdERhdGFTaGFyaW5nKVxuXG4gICAgICAgIC8vb3JkZXJzXG4gICAgICAgIGNvbnN0IGRpc3BhdGNoT3JkZXIgPSB1c2VEaXNwYXRjaCgpXG4gIFxuXG5cbiAgICAgICAgdXNlRWZmZWN0KCgpPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hlbChnZXREYXRhU2hhcmluZygpKVxuICAgICAgICAgICAgXG4gICAgICAgIH0sW10pXG5cblxuXG4gICAgXG4gICAgICAgIC8vRGlwYXRjaCBBZGQgT3JkZXIgVG8gT3JkZXJTbGljZVxuICAgICAgICBjb25zdCBoYW5kZWxPcmRlciA9KHBvc3Q6IGFueSApID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoT3JkZXIoYWRkb3JkZXIocG9zdCkpXG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPEdyaWQgXG4gICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgIHJvd1NwYWNpbmc9JzQnXG4gICAgICAgICAgICBjb2x1bW5TcGFjaW5nPSd4czoyLHNtOjQsbWQ6NCdcbiAgICAgICAgICAgIGRpcmVjdGlvbj0ncm93J1xuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9J2NlbnRlcidcbiAgICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcbiAgICAgICAgICAgIGdhcD0nMjBweCdcbiAgICAgICAgICAgIGl0ZW0geHM9ezJ9IHNtPXs0fSBtZD17NH1cbiAgICAgICAgICAgIHNwYWNpbmc9JzMnXG4gICAgICAgICAgICBteT17NH1cbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOic1MHB4J1xuICAgICAgICAgICAgfX1cbiAgICBcbiAgICAgICAgICAgID5cblxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgocG9zdDogYW55LGlkOm51bWJlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3g9e3sgbWF4V2lkdGg6IDM0NSxoZWlnaHQ6JzM1MHB4JyB9fSBrZXk9e2lkfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17cG9zdC5pbWdQYXRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Bvc3QubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJwXCIgY29sb3I9J2Vycm9yJyBzeD17e2ZvbnRXZWlnaHQ6JzcwMCcsbWF4V2lkdGg6JzIwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRBY3Rpb25BcmVhPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDUnIHN4PXt7Zm9udFNpemU6JzIwcHgnLGZvbnRXZWlnaHQ6JzYwMCd9fT57cG9zdC5wcmljZSAqIHBvc3QuY291bnR9RXVybzwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHN4PXt7Zm9udFNpemU6JzEzcHgnfX0gY29tcG9uZW50PVwicFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QuaW5mb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwibGFyZ2VcIiAgY29sb3I9XCJlcnJvclwiICB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17KCkgPT4gaGFuZGVsT3JkZXIocG9zdCl9ICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9yZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXAgY29sb3IgPSAnZXJyb3InICB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17KCkgPT4gZGlwYXRjaGV2KGluY3JlbWVudFNoYXJpbmcoaWQpKX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvciA9ICdlcnJvcicgID4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkSWNvbiBzeD17e21hcmdpbkxlZnQ6JzVweCcsbWFyZ2luUmlnaHQ6JzVweCcsIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cCBjb2xvcj0nZXJyb3InICB2YXJpYW50ID1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9eygpID0+IGRpcGF0Y2hldihkZWNyZW1lbnRTaGFyaW5nKGlkKSl9ID5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uICBjb2xvcj0nZXJyb3InICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUljb24gc3g9e3ttYXJnaW5MZWZ0OicwcHgnLG1hcmdpblJpZ2h0Oic1cHgnLCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH0gXG4gICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgXG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgXG4gICAgZXhwb3J0IGRlZmF1bHQgRm9yc2hhcmluZ1xuIl0sIm5hbWVzIjpbIkdyaWQiLCJJY29uQnV0dG9uIiwiUmVhY3QiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkTWVkaWEiLCJUeXBvZ3JhcGh5IiwiQnV0dG9uIiwiQ2FyZEFjdGlvbkFyZWEiLCJDYXJkQWN0aW9ucyIsIkFkZEljb24iLCJSZW1vdmVJY29uIiwiQnV0dG9uR3JvdXAiLCJ1c2VEaXNwYXRjaCIsImdldERhdGFTaGFyaW5nIiwic2VsZWN0RGF0YVNoYXJpbmciLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwidXNlRWZmZWN0IiwiaW5jcmVtZW50U2hhcmluZyIsImRlY3JlbWVudFNoYXJpbmciLCJhZGRvcmRlciIsIkZvcnNoYXJpbmciLCJkaXNwYXRjaGVsIiwiZGlwYXRjaGV2IiwiZGF0YSIsInBlbmRpbmciLCJlcnJvciIsImRpc3BhdGNoT3JkZXIiLCJoYW5kZWxPcmRlciIsInBvc3QiLCJjb250YWluZXIiLCJyb3dTcGFjaW5nIiwiY29sdW1uU3BhY2luZyIsImRpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImdhcCIsIml0ZW0iLCJ4cyIsInNtIiwibWQiLCJzcGFjaW5nIiwibXkiLCJzeCIsIm1hcmdpblRvcCIsIm1hcCIsImlkIiwibWF4V2lkdGgiLCJoZWlnaHQiLCJjb21wb25lbnQiLCJpbWFnZSIsImltZ1BhdGgiLCJhbHQiLCJsYWJlbCIsImd1dHRlckJvdHRvbSIsInZhcmlhbnQiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsInByaWNlIiwiY291bnQiLCJpbmZvIiwic2l6ZSIsIm9uQ2xpY2siLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Forsharing.tsx\n");

/***/ })

});