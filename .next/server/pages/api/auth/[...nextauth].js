"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth/next":
/*!*********************************!*\
  !*** external "next-auth/next" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ "next-auth/providers/auth0":
/*!********************************************!*\
  !*** external "next-auth/providers/auth0" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/auth0");

/***/ }),

/***/ "next-auth/providers/facebook":
/*!***********************************************!*\
  !*** external "next-auth/providers/facebook" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/facebook");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/auth0 */ \"next-auth/providers/auth0\");\n/* harmony import */ var next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/facebook */ \"next-auth/providers/facebook\");\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth_next__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n            params: {\n                prompt: \"consent\",\n                access_type: \"offline\",\n                response_type: \"code\"\n            }\n        }),\n        next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_4___default()({\n            clientId: process.env.FACEBOOK_CLIENT_ID,\n            clientSecret: process.env.FACEBOOK_CLIENT_SECRET\n        })\n    ],\n    secret: process.env.JWT_SECRET\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR3NDO0FBQ2U7QUFFRztBQUVBO0FBQ0k7QUFJNUQsaUVBQWVBLHFEQUFRLENBQUM7SUFFcEJLLFNBQVMsRUFBRTtRQUVURixpRUFBYyxDQUFDO1lBQ2JHLFFBQVEsRUFBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVM7WUFDOUJDLFlBQVksRUFBQ0gsT0FBTyxDQUFDQyxHQUFHLENBQUNHLGFBQWE7U0FFdkMsQ0FBQztRQUVGVCxpRUFBYyxDQUFDO1lBQ2JJLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNJLGdCQUFnQjtZQUN0Q0YsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssb0JBQW9CO1lBQzlDQyxNQUFNLEVBQUU7Z0JBQ05DLE1BQU0sRUFBRSxTQUFTO2dCQUNqQkMsV0FBVyxFQUFFLFNBQVM7Z0JBQ3RCQyxhQUFhLEVBQUUsTUFBTTthQUN0QjtTQUNGLENBQUM7UUFDRmIsbUVBQWdCLENBQUM7WUFDZkUsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1Usa0JBQWtCO1lBQ3hDUixZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVyxzQkFBc0I7U0FDakQsQ0FBQztLQUlIO0lBQ0RDLE1BQU0sRUFBRWIsT0FBTyxDQUFDQyxHQUFHLENBQUNhLFVBQVU7Q0FFakMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aC9uZXh0XCI7XG5pbXBvcnQgQXV0aDBQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9hdXRoMFwiXG5cbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcblxuaW1wb3J0IEdpdEh1YlByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViJztcbmltcG9ydCBGYWNlYm9va1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2ZhY2Vib29rXCI7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gICAgXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICBcbiAgICAgIEdpdEh1YlByb3ZpZGVyKHtcbiAgICAgICAgY2xpZW50SWQ6cHJvY2Vzcy5lbnYuR0lUSFVCX0lELFxuICAgICAgICBjbGllbnRTZWNyZXQ6cHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCxcbiAgICAgICAgXG4gICAgICB9KSxcblxuICAgICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgcHJvbXB0OiBcImNvbnNlbnRcIixcbiAgICAgICAgICBhY2Nlc3NfdHlwZTogXCJvZmZsaW5lXCIsXG4gICAgICAgICAgcmVzcG9uc2VfdHlwZTogXCJjb2RlXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBGYWNlYm9va1Byb3ZpZGVyKHtcbiAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkZBQ0VCT09LX0NMSUVOVF9JRCxcbiAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5GQUNFQk9PS19DTElFTlRfU0VDUkVUXG4gICAgICB9KVxuICAgIFxuXG5cbiAgICBdLFxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCxcbiAgICBcbn0pXG5cblxuXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJBdXRoMFByb3ZpZGVyIiwiR29vZ2xlUHJvdmlkZXIiLCJHaXRIdWJQcm92aWRlciIsIkZhY2Vib29rUHJvdmlkZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfU0VDUkVUIiwiR09PR0xFX0NMSUVOVF9JRCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwicGFyYW1zIiwicHJvbXB0IiwiYWNjZXNzX3R5cGUiLCJyZXNwb25zZV90eXBlIiwiRkFDRUJPT0tfQ0xJRU5UX0lEIiwiRkFDRUJPT0tfQ0xJRU5UX1NFQ1JFVCIsInNlY3JldCIsIkpXVF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();