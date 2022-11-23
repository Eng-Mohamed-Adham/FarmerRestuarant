"use strict";
exports.id = 188;
exports.ids = [188];
exports.modules = {

/***/ 4188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B4": () => (/* binding */ incrementOneperson),
/* harmony export */   "H$": () => (/* binding */ getDataOnePerson),
/* harmony export */   "TW": () => (/* binding */ selectDataOnePerson),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "qO": () => (/* binding */ decrementOneperson)
/* harmony export */ });
/* unused harmony export dataonepersonSlice */
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
const getDataOnePerson = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("/oneperson", async ()=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("./api/oneperson");
    return response.data;
});
const dataonepersonSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "fetchdataoneperson",
    initialState,
    reducers: {
        incrementOneperson: (state, action)=>{
            {
                state.data.filter((el)=>el.id === action.payload ? el.totalPrice = ++el.count * el.price : el
                );
            }
        },
        decrementOneperson: (state, action)=>{
            {
                state.data.filter((el)=>el.id === action.payload ? el.count <= 1 ? el.count = 1 : el.count-- : el
                );
            }
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getDataOnePerson.pending, (state)=>{
            state.pending = true;
        }).addCase(getDataOnePerson.fulfilled, (state, { payload  })=>{
            state.pending = false;
            state.data = payload;
        }).addCase(getDataOnePerson.rejected, (state)=>{
            state.pending = false;
            state.error = true;
        });
    }
});
const selectDataOnePerson = (state)=>state.fetchdataoneperson
;
const { incrementOneperson , decrementOneperson  } = dataonepersonSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataonepersonSlice.reducer);


/***/ })

};
;