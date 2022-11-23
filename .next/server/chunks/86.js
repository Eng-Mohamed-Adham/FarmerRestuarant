"use strict";
exports.id = 86;
exports.ids = [86];
exports.modules = {

/***/ 2086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$I": () => (/* binding */ getDataOffers),
/* harmony export */   "Dp": () => (/* binding */ incrementOffers),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "w6": () => (/* binding */ decrementOffers),
/* harmony export */   "yA": () => (/* binding */ selectData)
/* harmony export */ });
/* unused harmony export dataoffersSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
    data: [
        "Uploading Data"
    ],
    pending: false,
    error: false
};
const getDataOffers = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("/offers", async ()=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("./api/offers");
    return response.data;
});
const dataoffersSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "fetchdataoffers",
    initialState,
    reducers: {
        incrementOffers: (state, action)=>{
            {
                state.data.filter((el)=>el.id === action.payload ? el.totalPrice = ++el.count * el.price : el
                );
            }
        },
        decrementOffers: (state, action)=>{
            {
                state.data.filter((el)=>el.id === action.payload ? el.count <= 1 ? el.count = 1 : el.count-- : el
                );
            }
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getDataOffers.pending, (state)=>{
            state.pending = true;
        }).addCase(getDataOffers.fulfilled, (state, { payload  })=>{
            state.pending = false;
            state.data = payload;
        }).addCase(getDataOffers.rejected, (state)=>{
            state.pending = false;
            state.error = true;
        });
    }
});
const selectData = (state)=>state.fetchdataoffers
;
const { incrementOffers , decrementOffers  } = dataoffersSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataoffersSlice.reducer);


/***/ })

};
;