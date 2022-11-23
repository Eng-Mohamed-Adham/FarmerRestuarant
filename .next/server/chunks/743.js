"use strict";
exports.id = 743;
exports.ids = [743];
exports.modules = {

/***/ 8743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RB": () => (/* binding */ getDataSharing),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "gI": () => (/* binding */ decrementSharing),
/* harmony export */   "uR": () => (/* binding */ selectDataSharing),
/* harmony export */   "zO": () => (/* binding */ incrementSharing)
/* harmony export */ });
/* unused harmony export dataforSharingSlice */
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
const getDataSharing = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("/forsharing", async ()=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("./api/forsharing");
    return response.data;
});
const dataforSharingSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "fetchdatasharing",
    initialState,
    reducers: {
        incrementSharing: (state, action)=>{
            {
                state.data.filter((el)=>el.id === action.payload ? el.totalPrice = ++el.count * el.price : el
                );
            }
        },
        decrementSharing: (state, action)=>{
            {
                state.data.filter((el)=>el.id === action.payload ? el.count <= 1 ? el.count = 1 : el.count-- : el
                );
            }
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getDataSharing.pending, (state)=>{
            state.pending = true;
        }).addCase(getDataSharing.fulfilled, (state, { payload  })=>{
            state.pending = false;
            state.data = payload;
        }).addCase(getDataSharing.rejected, (state)=>{
            state.pending = false;
            state.error = true;
        });
    }
});
const selectDataSharing = (state)=>state.fetchdatasharing
;
const { incrementSharing , decrementSharing  } = dataforSharingSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataforSharingSlice.reducer);


/***/ })

};
;