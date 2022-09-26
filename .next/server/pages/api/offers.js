"use strict";
(() => {
var exports = {};
exports.id = 782;
exports.ids = [782];
exports.modules = {

/***/ 6103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./data/offers.ts
const offers = [
    {
        id: 0,
        label: " Super Meal Mix ",
        imgPath: "https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        info: " Mighty Zinger + 3 Strips + Fries + Coleslaw + Pepsi",
        count: 1,
        price: 10,
        totalPrice: 10
    },
    {
        id: 1,
        label: " MAXX Crunch Twister Box  ",
        imgPath: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        info: " 2 twister sandwiches + 1 pc chicken + fries + coleslaw + Drink ",
        count: 1,
        price: 10,
        totalPrice: 10
    },
    {
        id: 2,
        label: " Mighty Zinger Box ",
        imgPath: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        info: " Mighty Zinger + 3 Strips + Fries + Coleslaw + Pepsi",
        count: 1,
        price: 10,
        totalPrice: 10
    },
    {
        id: 3,
        label: " Double Twister Box  ",
        imgPath: "https://images.pexels.com/photos/2871755/pexels-photo-2871755.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        info: " Mighty Zinger + 3 Strips + Fries + Coleslaw + Pepsi",
        count: 1,
        price: 10,
        totalPrice: 10
    },
    {
        id: 4,
        label: " MAXX Crunch Twister Combo ",
        imgPath: "https://images.pexels.com/photos/9045145/pexels-photo-9045145.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        info: " 2 twister sandwiches + 1 pc chicken + fries + coleslaw + Drink ",
        count: 1,
        price: 10,
        totalPrice: 10
    },
    {
        id: 5,
        label: "Lay\u2019s Maxx Crunch Strips Meal  ",
        imgPath: "https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        info: " Mighty Zinger + 3 Strips + Fries + Coleslaw + Pepsi",
        count: 1,
        price: 10,
        totalPrice: 10
    }, 
];

;// CONCATENATED MODULE: ./pages/api/offers/index.js

function handler(req, res) {
    res.status(200).json(offers);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6103));
module.exports = __webpack_exports__;

})();