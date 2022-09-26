"use strict";
exports.id = 84;
exports.ids = [84];
exports.modules = {

/***/ 7084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "At": () => (/* binding */ selectDataDesserts),
/* harmony export */   "Oy": () => (/* binding */ incrementDessert),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "c5": () => (/* binding */ decrementDessert),
/* harmony export */   "dQ": () => (/* binding */ getDataDesserts)
/* harmony export */ });
/* unused harmony export dataDessertsSlice */
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
const getDataDesserts = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("/desserts", async ()=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("./api/desserts");
    return response.data;
});
const dataDessertsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "fetchdatadesserts",
    initialState,
    reducers: {
        incrementDessert: (state, action)=>{
            {
                state.data.filter((el)=>el.id === action.payload ? el.totalPrice = ++el.count * el.price : el
                );
            }
        },
        decrementDessert: (state, action)=>{
            {
                state.data.filter((el)=>el.id === action.payload ? el.count <= 1 ? el.count = 1 : el.count-- : el
                );
            }
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getDataDesserts.pending, (state)=>{
            state.pending = true;
        }).addCase(getDataDesserts.fulfilled, (state, { payload  })=>{
            state.pending = false;
            state.data = payload;
        }).addCase(getDataDesserts.rejected, (state)=>{
            state.pending = false;
            state.error = true;
        });
    }
});
const selectDataDesserts = (state)=>state.fetchdatadesserts
;
const { incrementDessert , decrementDessert  } = dataDessertsSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataDessertsSlice.reducer);


/***/ })

};
;