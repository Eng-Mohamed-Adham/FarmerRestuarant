"use strict";
(() => {
var exports = {};
exports.id = 578;
exports.ids = [578];
exports.modules = {

/***/ 5038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./data/oneperson.ts
const oneperson = [
    {
        id: 0,
        label: "BuffBurger",
        imgPath: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        info: "Minced meat sandwich with vegetables",
        count: 1,
        price: 10,
        totalPrice: 10
    },
    {
        id: 1,
        label: "HamBurger",
        imgPath: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600",
        info: "Minced meat sandwich with vegetables",
        count: 1,
        price: 10,
        totalPrice: 10
    },
    {
        id: 2,
        label: "BuffBurger",
        imgPath: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        info: "Minced meat sandwich with vegetables",
        count: 1,
        price: 10,
        totalPrice: 10
    },
    {
        id: 3,
        label: "HamBurger",
        imgPath: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=600",
        info: "Minced meat sandwich with vegetables",
        count: 1,
        price: 10,
        totalPrice: 10
    },
    {
        id: 4,
        label: "BuffBurger",
        imgPath: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        info: "Minced meat sandwich with vegetables",
        count: 1,
        price: 10,
        totalPrice: 10
    },
    {
        id: 5,
        label: "HamBurger",
        imgPath: "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600",
        info: "Minced meat sandwich with vegetables",
        count: 1,
        price: 10,
        totalPrice: 10
    }, 
];

;// CONCATENATED MODULE: ./pages/api/oneperson/index.js

function handler(req, res) {
    res.status(200).json(oneperson);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5038));
module.exports = __webpack_exports__;

})();