"use strict";
(() => {
var exports = {};
exports.id = 365;
exports.ids = [365];
exports.modules = {

/***/ 8783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./data/desserts.ts
const desserts = [
    {
        id: 0,
        label: "  Cinnamon Sugar Doh Rings, Red Robin        ",
        imgPath: "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        info: " Mighty Zinger + 3 Strips + Fries + Coleslaw + Pepsi",
        count: 1,
        price: 10,
        totalPrice: 10
    },
    {
        id: 1,
        label: "Salted Caramel Cookie Skillet",
        imgPath: "https://images.pexels.com/photos/2878737/pexels-photo-2878737.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        info: " 2 twister sandwiches + 1 pc chicken + fries + coleslaw + Drink ",
        count: 1,
        price: 10,
        totalPrice: 10
    },
    {
        id: 2,
        label: "  Chocolate Brownie Lasagna, Olive Garden    ",
        imgPath: "https://images.pexels.com/photos/574111/pexels-photo-574111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        info: " Mighty Zinger + 3 Strips + Fries + Coleslaw + Pepsi",
        count: 1,
        price: 10,
        totalPrice: 10
    },
    {
        id: 3,
        label: "Banana Spring Rolls, P.F. Chang's       ",
        imgPath: "https://images.pexels.com/photos/4869423/pexels-photo-4869423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        info: " Mighty Zinger + 3 Strips + Fries + Coleslaw + Pepsi",
        count: 1,
        price: 10,
        totalPrice: 10
    },
    {
        id: 4,
        label: " Paradise Pie, Chili's       ",
        imgPath: "https://images.pexels.com/photos/4078187/pexels-photo-4078187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        info: " 2 twister sandwiches + 1 pc chicken + fries ",
        count: 1,
        price: 10,
        totalPrice: 10
    },
    {
        id: 5,
        label: " Double Chocolate Fudge Coca-Cola Cake, Cracker Barrel",
        imgPath: "https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        info: " Mighty Zinger + 3 Strips + Fries + Coleslaw + Pepsi",
        count: 1,
        price: 10,
        totalPrice: 10
    }, 
];

;// CONCATENATED MODULE: ./pages/api/desserts/index.js

function handler(req, res) {
    res.status(200).json(desserts);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8783));
module.exports = __webpack_exports__;

})();