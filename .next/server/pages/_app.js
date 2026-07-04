/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/wagmiConfig.js":
/*!****************************!*\
  !*** ./lib/wagmiConfig.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config)\n/* harmony export */ });\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__, wagmi_chains__WEBPACK_IMPORTED_MODULE_1__]);\n([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__, wagmi_chains__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst config = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.getDefaultConfig)({\n    appName: \"The Vault — FundMe\",\n    projectId: \"6cbf863df7dc5884a5dfe66d10e66ff2\" || 0,\n    chains: [\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_1__.sepolia\n    ],\n    ssr: true\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvd2FnbWlDb25maWcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBEO0FBQ25CO0FBRWhDLE1BQU1FLFNBQVNGLHdFQUFnQkEsQ0FBQztJQUNyQ0csU0FBUztJQUNUQyxXQUFXQyxrQ0FBZ0QsSUFBSTtJQUMvREcsUUFBUTtRQUFDUCxpREFBT0E7S0FBQztJQUNqQlEsS0FBSztBQUNQLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW5kbWUtdmF1bHQtcmFpbmJvd2tpdC8uL2xpYi93YWdtaUNvbmZpZy5qcz9kZGMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldERlZmF1bHRDb25maWcgfSBmcm9tICdAcmFpbmJvdy1tZS9yYWluYm93a2l0JztcbmltcG9ydCB7IHNlcG9saWEgfSBmcm9tICd3YWdtaS9jaGFpbnMnO1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0gZ2V0RGVmYXVsdENvbmZpZyh7XG4gIGFwcE5hbWU6ICdUaGUgVmF1bHQg4oCUIEZ1bmRNZScsXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfV0FMTEVUQ09OTkVDVF9QUk9KRUNUX0lEIHx8ICdSRVBMQUNFX1dJVEhfV0FMTEVUQ09OTkVDVF9QUk9KRUNUX0lEJyxcbiAgY2hhaW5zOiBbc2Vwb2xpYV0sXG4gIHNzcjogdHJ1ZSxcbn0pO1xuIl0sIm5hbWVzIjpbImdldERlZmF1bHRDb25maWciLCJzZXBvbGlhIiwiY29uZmlnIiwiYXBwTmFtZSIsInByb2plY3RJZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19XQUxMRVRDT05ORUNUX1BST0pFQ1RfSUQiLCJjaGFpbnMiLCJzc3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/wagmiConfig.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _lib_wagmiConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/wagmiConfig */ \"./lib/wagmiConfig.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_3__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__, _lib_wagmiConfig__WEBPACK_IMPORTED_MODULE_6__]);\n([wagmi__WEBPACK_IMPORTED_MODULE_3__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__, _lib_wagmiConfig__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClient();\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_3__.WagmiProvider, {\n        config: _lib_wagmiConfig__WEBPACK_IMPORTED_MODULE_6__.config,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClientProvider, {\n            client: queryClient,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.RainbowKitProvider, {\n                theme: (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.darkTheme)({\n                    accentColor: \"#C9A227\",\n                    accentColorForeground: \"#14121F\",\n                    borderRadius: \"medium\"\n                }),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/acp/Downloads/fundme-vault-rainbowkit (1)/fundme-vault-rainbowkit/pages/_app.js\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/acp/Downloads/fundme-vault-rainbowkit (1)/fundme-vault-rainbowkit/pages/_app.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/acp/Downloads/fundme-vault-rainbowkit (1)/fundme-vault-rainbowkit/pages/_app.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/acp/Downloads/fundme-vault-rainbowkit (1)/fundme-vault-rainbowkit/pages/_app.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNaO0FBRU87QUFDaUM7QUFDRTtBQUM3QjtBQUU1QyxNQUFNTSxjQUFjLElBQUlILDhEQUFXQTtBQUVwQixTQUFTSSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNFLDhEQUFDVCxnREFBYUE7UUFBQ0ssUUFBUUEsb0RBQU1BO2tCQUMzQiw0RUFBQ0Qsc0VBQW1CQTtZQUFDTSxRQUFRSjtzQkFDM0IsNEVBQUNMLHNFQUFrQkE7Z0JBQ2pCVSxPQUFPVCxpRUFBU0EsQ0FBQztvQkFDZlUsYUFBYTtvQkFDYkMsdUJBQXVCO29CQUN2QkMsY0FBYztnQkFDaEI7MEJBRUEsNEVBQUNOO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Z1bmRtZS12YXVsdC1yYWluYm93a2l0Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC9zdHlsZXMuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcblxuaW1wb3J0IHsgV2FnbWlQcm92aWRlciB9IGZyb20gJ3dhZ21pJztcbmltcG9ydCB7IFJhaW5ib3dLaXRQcm92aWRlciwgZGFya1RoZW1lIH0gZnJvbSAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdCc7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9saWIvd2FnbWlDb25maWcnO1xuXG5jb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFdhZ21pUHJvdmlkZXIgY29uZmlnPXtjb25maWd9PlxuICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICAgIDxSYWluYm93S2l0UHJvdmlkZXJcbiAgICAgICAgICB0aGVtZT17ZGFya1RoZW1lKHtcbiAgICAgICAgICAgIGFjY2VudENvbG9yOiAnI0M5QTIyNycsXG4gICAgICAgICAgICBhY2NlbnRDb2xvckZvcmVncm91bmQ6ICcjMTQxMjFGJyxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJ21lZGl1bScsXG4gICAgICAgICAgfSl9XG4gICAgICAgID5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxuICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICAgIDwvV2FnbWlQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJXYWdtaVByb3ZpZGVyIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwiZGFya1RoZW1lIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiY29uZmlnIiwicXVlcnlDbGllbnQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiLCJ0aGVtZSIsImFjY2VudENvbG9yIiwiYWNjZW50Q29sb3JGb3JlZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@rainbow-me"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();