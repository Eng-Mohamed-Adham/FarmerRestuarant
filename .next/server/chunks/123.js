"use strict";
exports.id = 123;
exports.ids = [123];
exports.modules = {

/***/ 7810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useAppSelector),
/* harmony export */   "T": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

// export const useAppDispatch = () => useDispatch<  AppStore>();
const useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch;
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ }),

/***/ 7465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ct": () => (/* binding */ addorder),
/* harmony export */   "O9": () => (/* binding */ deleteorder),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dC": () => (/* binding */ selectorders)
/* harmony export */ });
/* unused harmony export orderSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    orders: [
        "no products"
    ]
};
const orderSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "orders",
    initialState,
    reducers: {
        addorder: (state, action)=>{
            // let itemsOfOrder =state.orders
            // let order : any  =itemsOfOrder.findIndex(e => e ===  "no products" )
            // console.log(order)
            let itemnull = state.orders[0];
            if (itemnull === "no products") {
                state.orders.splice(itemnull, 1);
                state.orders.push(action.payload);
            } else {
                state.orders.push(action.payload);
            }
        // state.orders.push(action.payload)
        },
        deleteorder: (state, action)=>{
            let itemsOfOrder = state.orders;
            let order = itemsOfOrder.findIndex((e)=>e.label === action.payload
            );
            // console.log(order)
            itemsOfOrder.splice(order, 1);
        }
    }
});
const selectorders = (state)=>state.orderSlice
;
const { addorder , deleteorder  } = orderSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (orderSlice.reducer);


/***/ })

};
;