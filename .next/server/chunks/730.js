"use strict";
exports.id = 730;
exports.ids = [730];
exports.modules = {

/***/ 220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6731);
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6146);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_Remove__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9509);
/* harmony import */ var _mui_icons_material_Remove__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Remove__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_Euro__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5499);
/* harmony import */ var _mui_icons_material_Euro__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Euro__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9580);
/* harmony import */ var _mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _store_apphooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7810);
/* harmony import */ var _store_fetchdatadessert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7084);
/* harmony import */ var _store_orderslice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7465);

//Cards











//redux elments



//Actions Of fetchOffers

//AddOrder Action for orderSlice

function useStyle(getData, selectData, increment, decrement) {
    //Dispatch Fetch Data from API 
    const dispatchel = (0,_store_apphooks__WEBPACK_IMPORTED_MODULE_12__/* .useAppDispatch */ .T)();
    const dipatchev = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useDispatch)();
    //Get Data From Fetch Data Offers
    const { data , pending , error ,  } = (0,_store_apphooks__WEBPACK_IMPORTED_MODULE_12__/* .useAppSelector */ .C)(selectData);
    //orders
    const dispatchOrder = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        dispatchel(getData());
    }, []);
    //Dipatch Add Order To OrderSlice
    const handelOrder = (post)=>{
        dispatchOrder((0,_store_orderslice__WEBPACK_IMPORTED_MODULE_14__/* .addorder */ .Ct)(post));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        container: true,
        rowSpacing: "4",
        columnSpacing: "xs:2,sm:4,md:4",
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        item: true,
        xs: 2,
        sm: 4,
        md: 4,
        spacing: "3",
        my: 4,
        sx: {
            marginTop: "50px"
        },
        children: data.map((post, id)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_3___default()), {
                sx: {
                    maxWidth: 345,
                    height: "350px"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_5___default()), {
                        component: "img",
                        height: "140",
                        image: post.imgPath,
                        alt: post.label
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                        gutterBottom: true,
                        variant: "h6",
                        component: "p",
                        color: "error",
                        sx: {
                            fontWeight: "700",
                            maxWidth: "345px"
                        },
                        children: post.label
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardActionArea, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                                variant: "h5",
                                sx: {
                                    fontSize: "20px",
                                    fontWeight: "600"
                                },
                                children: [
                                    post.price * post.count,
                                    "Euro"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4___default()), {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    gutterBottom: true,
                                    sx: {
                                        fontSize: "13px"
                                    },
                                    component: "p",
                                    children: post.info
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardActions, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                size: "large",
                                color: "error",
                                variant: "contained",
                                onClick: ()=>handelOrder(post)
                                ,
                                children: "Order"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_10___default()), {
                                color: "error",
                                variant: "contained",
                                onClick: ()=>dipatchev(increment(id))
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                                    color: "error",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        sx: {
                                            marginLeft: "5px",
                                            marginRight: "5px"
                                        }
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_10___default()), {
                                color: "error",
                                variant: "contained",
                                onClick: ()=>dipatchev(decrement(id))
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                                    color: "error",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Remove__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        sx: {
                                            marginLeft: "0px",
                                            marginRight: "5px"
                                        }
                                    })
                                })
                            })
                        ]
                    })
                ]
            }, id)
        )
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyle);


/***/ }),

/***/ 2129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);


function useTitle(Icon, text) {
    const titletext = text;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        container: true,
        direction: "row",
        spacing: "4",
        sx: {
            paddingLeft: "20px",
            marginTop: "100px",
            color: "rgba(0, 0, 0, 0.87)"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
            variant: "h4",
            sx: {
                color: "#da3430"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                    sx: {
                        fontSize: "40px"
                    }
                }),
                " ",
                titletext
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTitle);


/***/ })

};
;