"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
// EXTERNAL MODULE: ./store/fetchdataoffers.ts
var fetchdataoffers = __webpack_require__(2086);
// EXTERNAL MODULE: ./store/orderslice.ts
var orderslice = __webpack_require__(7465);
// EXTERNAL MODULE: ./store/fetchdataoneperson.tsx
var fetchdataoneperson = __webpack_require__(4188);
// EXTERNAL MODULE: ./store/fetchdatasharing.tsx
var fetchdatasharing = __webpack_require__(8743);
// EXTERNAL MODULE: ./store/fetchdatadessert.tsx
var fetchdatadessert = __webpack_require__(7084);
;// CONCATENATED MODULE: ./store/index.tsx







const makeStore = ()=>(0,toolkit_.configureStore)({
        reducer: {
            // counterSlice,
            // offersSlice,
            // OffersData,
            fetchdataoffers: fetchdataoffers/* default */.ZP,
            orderSlice: orderslice/* default */.ZP,
            fetchdataoneperson: fetchdataoneperson/* default */.ZP,
            fetchdatasharing: fetchdatasharing/* default */.ZP,
            fetchdatadesserts: fetchdatadessert/* default */.ZP
        }
    })
;
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore);

;// CONCATENATED MODULE: external "next-auth/react"
const react_namespaceObject = require("next-auth/react");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: external "@mui/material/Toolbar"
const Toolbar_namespaceObject = require("@mui/material/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: external "@mui/material/Menu"
const Menu_namespaceObject = require("@mui/material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const icons_material_Menu_namespaceObject = require("@mui/icons-material/Menu");
var icons_material_Menu_default = /*#__PURE__*/__webpack_require__.n(icons_material_Menu_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Container"
const Container_namespaceObject = require("@mui/material/Container");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Avatar"
const Avatar_namespaceObject = require("@mui/material/Avatar");
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Button"
const Button_namespaceObject = require("@mui/material/Button");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Tooltip"
const Tooltip_namespaceObject = require("@mui/material/Tooltip");
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/MenuItem"
const MenuItem_namespaceObject = require("@mui/material/MenuItem");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "@mui/material/Fade"
const Fade_namespaceObject = require("@mui/material/Fade");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_namespaceObject);
// EXTERNAL MODULE: external "@mui/icons-material/Fastfood"
var Fastfood_ = __webpack_require__(3842);
var Fastfood_default = /*#__PURE__*/__webpack_require__.n(Fastfood_);
// EXTERNAL MODULE: external "@mui/material/ButtonGroup"
var ButtonGroup_ = __webpack_require__(9580);
var ButtonGroup_default = /*#__PURE__*/__webpack_require__.n(ButtonGroup_);
;// CONCATENATED MODULE: external "@mui/icons-material/ShoppingBasket"
const ShoppingBasket_namespaceObject = require("@mui/icons-material/ShoppingBasket");
var ShoppingBasket_default = /*#__PURE__*/__webpack_require__.n(ShoppingBasket_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Divider"
const Divider_namespaceObject = require("@mui/material/Divider");
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: external "@mui/material/CardMedia"
var CardMedia_ = __webpack_require__(6731);
var CardMedia_default = /*#__PURE__*/__webpack_require__.n(CardMedia_);
// EXTERNAL MODULE: ./store/apphooks.ts
var apphooks = __webpack_require__(7810);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./components/Menu.js




























const pages = (/* unused pure expression or super */ null && ([
    "DEALS",
    "FORONE",
    "For Sharing",
    "SIDES&DESSERTS",
    "SHOPPINGCARD"
]));
const settings = [
    "Profile",
    "Account", 
];
const ResponsiveAppBar = ()=>{
    const [anchorElNav, setAnchorElNav] = external_react_.useState(null);
    const [anchorElUser, setAnchorElUser] = external_react_.useState(null);
    const handleOpenNavMenu = (event)=>{
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event)=>{
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = ()=>{
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = ()=>{
        setAnchorElUser(null);
    };
    //Login Info
    const { data: session , status  } = (0,react_namespaceObject.useSession)();
    const loading = status === "loading";
    const [anchorEl, setAnchorEl] = external_react_.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const { orders  } = (0,apphooks/* useAppSelector */.C)(orderslice/* selectorders */.dC);
    const dispatchOrder = (0,external_react_redux_.useDispatch)();
    const handeldelete = (uniq_Id)=>{
        dispatchOrder((0,orderslice/* deleteorder */.O9)(uniq_Id));
    // console.log(uniq_Id)
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
                position: "fixed",
                color: "info",
                sx: {
                    backgroundColor: "rgb(229 55 55 / 87%)"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                    maxWidth: "xl",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                        disableGutters: true,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Fastfood_default()), {
                                sx: {
                                    display: {
                                        xs: "none",
                                        md: "flex"
                                    },
                                    mr: 1
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "h6",
                                noWrap: true,
                                component: "a",
                                href: "/",
                                sx: {
                                    mr: 4,
                                    display: {
                                        xs: "none",
                                        md: "flex"
                                    },
                                    fontFamily: "cursive",
                                    fontWeight: 700,
                                    letterSpacing: ".3rem",
                                    color: "#ffee0a",
                                    textDecoration: "none"
                                },
                                children: "farm restaurant"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    flexGrow: 1,
                                    display: {
                                        xs: "flex",
                                        md: "none"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                        size: "large",
                                        "aria-label": "account of current user",
                                        "aria-controls": "menu-appbar",
                                        "aria-haspopup": "true",
                                        onClick: handleOpenNavMenu,
                                        color: "inherit",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((icons_material_Menu_default()), {})
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Menu_default()), {
                                        id: "menu-appbar",
                                        anchorEl: anchorElNav,
                                        anchorOrigin: {
                                            vertical: "bottom",
                                            horizontal: "left"
                                        },
                                        keepMounted: true,
                                        transformOrigin: {
                                            vertical: "top",
                                            horizontal: "left"
                                        },
                                        open: Boolean(anchorElNav),
                                        onClose: handleCloseNavMenu,
                                        sx: {
                                            flexGrow: 1,
                                            display: {
                                                xs: "block",
                                                md: "none"
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                sx: {
                                                    my: 1,
                                                    color: "black",
                                                    display: "block",
                                                    fontFamily: "cursive"
                                                },
                                                onClick: handleCloseNavMenu,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    textAlign: "center",
                                                    href: "/deals",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Deals"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                sx: {
                                                    my: 1,
                                                    color: "black",
                                                    display: "block",
                                                    fontFamily: "cursive"
                                                },
                                                onClick: handleCloseNavMenu,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    textAlign: "center",
                                                    href: "/forone",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "FOR ONE"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                sx: {
                                                    my: 1,
                                                    color: "black",
                                                    display: "block",
                                                    fontFamily: "cursive"
                                                },
                                                onClick: handleCloseNavMenu,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    textAlign: "center",
                                                    href: "/forsharing",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "For Sharing"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                sx: {
                                                    my: 1,
                                                    color: "black",
                                                    display: "block",
                                                    fontFamily: "cursive"
                                                },
                                                onClick: handleCloseNavMenu,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    textAlign: "center",
                                                    href: "/desserts",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "DESSERTS"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                sx: {
                                                    my: 1,
                                                    color: "black",
                                                    display: "block",
                                                    fontFamily: "cursive"
                                                },
                                                onClick: handleCloseNavMenu,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    textAlign: "center",
                                                    href: "/shoppingcard",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "SHOPPINGCARD"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "h5",
                                noWrap: true,
                                component: "a",
                                href: "",
                                sx: {
                                    mr: 2,
                                    display: {
                                        xs: "flex",
                                        md: "none"
                                    },
                                    flexGrow: 1,
                                    // fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: ".3rem",
                                    color: "#ffee0a",
                                    textDecoration: "none",
                                    fontFamily: "cursive"
                                },
                                children: "farm restaurant"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    flexGrow: 1,
                                    display: {
                                        xs: "none",
                                        md: "flex"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        sx: {
                                            my: 2,
                                            color: "white",
                                            display: "block",
                                            fontFamily: "cursive"
                                        },
                                        onClick: handleCloseNavMenu,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            textAlign: "center",
                                            href: "/deals",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "Deals"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        sx: {
                                            my: 2,
                                            color: "white",
                                            display: "block",
                                            fontFamily: "cursive"
                                        },
                                        onClick: handleCloseNavMenu,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            textAlign: "center",
                                            href: "/forone",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "FOR ONE"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        sx: {
                                            my: 2,
                                            color: "white",
                                            display: "block",
                                            fontFamily: "cursive"
                                        },
                                        onClick: handleCloseNavMenu,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            textAlign: "center",
                                            href: "/forsharing",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "For Sharing"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        sx: {
                                            my: 2,
                                            color: "white",
                                            display: "block",
                                            fontFamily: "cursive"
                                        },
                                        onClick: handleCloseNavMenu,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            textAlign: "center",
                                            href: "/desserts",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "DESSERTS"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        sx: {
                                            my: 2,
                                            color: "white",
                                            display: "block",
                                            fontFamily: "cursive"
                                        },
                                        onClick: handleCloseNavMenu,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            textAlign: "center",
                                            href: "/shoppingcard",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "SHOPPINGCARD"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((ButtonGroup_default()), {
                                        id: "fade-button",
                                        "aria-controls": open ? "fade-menu" : undefined,
                                        "aria-haspopup": "true",
                                        "aria-expanded": open ? "true" : undefined,
                                        onClick: handleClick,
                                        sx: {
                                            marginRight: "40px"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((ShoppingBasket_default()), {
                                            sx: {
                                                color: "white"
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                                        id: "fade-menu",
                                        MenuListProps: {
                                            "aria-labelledby": "fade-button"
                                        },
                                        anchorEl: anchorEl,
                                        open: open,
                                        onClose: handleClose,
                                        TransitionComponent: (Fade_default()),
                                        sx: {
                                            maxHeight: "300px",
                                            marginTop: "12px"
                                        },
                                        children: orders.map((e, id)=>{
                                            return(// <MenuItem key={id} onClick={handleClose}>{e.label}</MenuItem>
                                            e === "no products" ? "No Product" : /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                                                        sx: {
                                                            display: "flex"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                                sx: {
                                                                    display: "flex",
                                                                    flexDirection: "column"
                                                                },
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                                                                    sx: {
                                                                        flex: "1 0 auto"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                            component: "div",
                                                                            variant: "h5",
                                                                            children: e.label
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                            variant: "subtitle1",
                                                                            color: "text.secondary",
                                                                            component: "div",
                                                                            sx: {
                                                                                width: "348px"
                                                                            },
                                                                            children: e.info
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                                                            component: "div",
                                                                            variant: "h5",
                                                                            children: [
                                                                                "Count: ",
                                                                                e.count
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                                            size: "large",
                                                                            color: "error",
                                                                            variant: "contained",
                                                                            onClick: ()=>handeldelete(e.label)
                                                                            ,
                                                                            children: "Delete"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((CardMedia_default()), {
                                                                component: "img",
                                                                sx: {
                                                                    maxWidth: 151
                                                                },
                                                                image: e.imgPath,
                                                                alt: "Live from space album cover"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {})
                                                ]
                                            }, id));
                                        })
                                    })
                                ]
                            }),
                            session && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    flexGrow: 0
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                        title: "Open settings",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                            onClick: handleOpenUserMenu,
                                            sx: {
                                                p: 0
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                                alt: `${session.user.name}`,
                                                src: `${session.user.image}`
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Menu_default()), {
                                        sx: {
                                            mt: "45px"
                                        },
                                        id: "menu-appbar",
                                        anchorEl: anchorElUser,
                                        anchorOrigin: {
                                            vertical: "top",
                                            horizontal: "right"
                                        },
                                        keepMounted: true,
                                        transformOrigin: {
                                            vertical: "top",
                                            horizontal: "right"
                                        },
                                        open: Boolean(anchorElUser),
                                        onClose: handleCloseUserMenu,
                                        children: [
                                            settings.map((setting)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                    onClick: handleCloseUserMenu,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        textAlign: "center",
                                                        sx: {
                                                            fontFamily: "cursive"
                                                        },
                                                        children: setting
                                                    })
                                                }, setting)
                                            ),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/api/auth/signout",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                        (0,react_namespaceObject.signOut)();
                                                    },
                                                    children: "Sign Out"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            !loading && !session && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/api/auth/signin",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        (0,react_namespaceObject.signIn)();
                                    },
                                    children: "Sign In"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
                position: "fixed",
                sx: {
                    backgroundColor: "rgb(45, 56, 67)",
                    marginTop: "55px"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
                    maxWidth: "xl",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                            title: "+1(202)599086824",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                sx: {
                                    color: "white",
                                    fontFamily: "cursive"
                                },
                                children: "contact Us"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                            TransitionComponent: (Fade_default()),
                            TransitionProps: {
                                timeout: 600
                            },
                            title: "London",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                sx: {
                                    color: "white",
                                    fontFamily: "cursive"
                                },
                                children: "visit us"
                            })
                        })
                    ]
                })
            })
        ]
    });
}; // export default ResponsiveAppBar

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./components/footer2.js




const footer2_pages = [
    "offers",
    "oneperson",
    "toparticipate",
    "dishes",
    "more"
];
const data = [
    "who are we",
    "Our history",
    "Careers",
    "Site Map"
];
const dataforAccount = [
    "myaccount",
    "create a new account",
    "Login"
];
const services = (/* unused pure expression or super */ null && ([
    "Customer Services",
    "Connect with US",
    "How do you reach US?",
    "Frequently Asked Questions", 
]));
function Footer2() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
        container: true,
        rowSpacing: "4",
        columnSpacing: "xs:2,sm:4,md:4",
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "60px",
        item: true,
        xs: 2,
        sm: 3,
        md: 4,
        spacing: "3",
        my: 4,
        sx: {
            marginTop: "50px",
            backgroundColor: "rgba(0, 0, 0, 0.87)",
            marginBottom: "0px"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "nav",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        sx: {
                            listStyle: "none",
                            color: "white"
                        },
                        children: footer2_pages.map((page)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                sx: {
                                    listStyle: "none",
                                    color: "white"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/${page}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "links",
                                        children: page
                                    })
                                })
                            }, page)
                        )
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "nav",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        sx: {
                            listStyle: "none",
                            color: "white"
                        },
                        children: data.map((info)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "style",
                                sx: {
                                    listStyle: "none",
                                    color: "white"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/${info}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "links",
                                        children: info
                                    })
                                })
                            }, info)
                        )
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "nav",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        sx: {
                            listStyle: "none",
                            color: "white"
                        },
                        children: dataforAccount.map((data1)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                sx: {
                                    listStyle: "none",
                                    color: "white"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/${data1}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "links",
                                        children: data1
                                    })
                                })
                            }, data1)
                        )
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const footer2 = (Footer2);

;// CONCATENATED MODULE: external "@mui/icons-material/Facebook"
const Facebook_namespaceObject = require("@mui/icons-material/Facebook");
var Facebook_default = /*#__PURE__*/__webpack_require__.n(Facebook_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/YouTube"
const YouTube_namespaceObject = require("@mui/icons-material/YouTube");
var YouTube_default = /*#__PURE__*/__webpack_require__.n(YouTube_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Instagram"
const Instagram_namespaceObject = require("@mui/icons-material/Instagram");
var Instagram_default = /*#__PURE__*/__webpack_require__.n(Instagram_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/WhatsApp"
const WhatsApp_namespaceObject = require("@mui/icons-material/WhatsApp");
var WhatsApp_default = /*#__PURE__*/__webpack_require__.n(WhatsApp_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Telegram"
const Telegram_namespaceObject = require("@mui/icons-material/Telegram");
var Telegram_default = /*#__PURE__*/__webpack_require__.n(Telegram_namespaceObject);
;// CONCATENATED MODULE: ./components/footer.js








function Footer() {
    const today = new Date();
    const year = today.getFullYear();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
        container: true,
        direction: "row",
        spacing: "4",
        sx: {
            backgroundColor: "rgba(0, 0, 0, 0.87)",
            // height:'200px',
            marginTop: "0px",
            gridTemplateColumns: "repeat(auto-fill,minmax(350px , 1fr))"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                marginTop: "80px",
                padding: "0",
                sx: {
                    marginBottom: "auto",
                    marginRight: "auto",
                    marginLeft: "auto"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "https://www.facebook.com",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Facebook_default()), {
                            sx: {
                                // fontSize:'60px',
                                // paddingRight:'20px',
                                color: "#da3430",
                                marginLeft: "80px",
                                // transform: 'translate(-50%, 0%)',
                                display: "inline-block",
                                width: "60px",
                                height: "30px",
                                paddingLeft: "0",
                                margin: "auto",
                                textAlign: "center",
                                cursor: "pointer"
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "https://www.facebook.com",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((YouTube_default()), {
                            sx: {
                                // fontSize:'60px',
                                // paddingRight:'20px',
                                color: "#da3430",
                                // transform: 'translate(-50%, 0%)',
                                display: "inline-block",
                                width: "60px",
                                height: "30px",
                                paddingLeft: "0",
                                margin: "auto",
                                textAlign: "center",
                                cursor: "pointer"
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "https://www.facebook.com",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Instagram_default()), {
                            sx: {
                                // fontSize:'60px',
                                // paddingRight:'20px',
                                color: "#da3430",
                                // transform: 'translate(-50%, 0%)',
                                display: "inline-block",
                                width: "60px",
                                height: "30px",
                                paddingLeft: "0",
                                margin: "auto",
                                textAlign: "center",
                                cursor: "pointer"
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "https://www.facebook.com",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((WhatsApp_default()), {
                            sx: {
                                //     fontSize:'60px',
                                // paddingRight:'20px',
                                color: "#da3430",
                                // transform: 'translate(-50%, 0%)',
                                display: "inline-block",
                                width: "60px",
                                height: "30px",
                                paddingLeft: "0",
                                margin: "auto",
                                textAlign: "center",
                                cursor: "pointer"
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "https://www.facebook.com",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Telegram_default()), {
                            sx: {
                                // fontSize:'60px',
                                // paddingRight:'20px',
                                color: "#da3430",
                                // transform: 'translate(-50%, 0%)',
                                display: "inline-block",
                                width: "60px",
                                height: "30px",
                                paddingLeft: "0",
                                margin: "auto",
                                textAlign: "center",
                                cursor: "pointer"
                            }
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                container: true,
                sx: {
                    marginTop: "50px",
                    padding: "20px 0"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    style: {
                        padding: "20px 0",
                        textAlign: "center",
                        margin: "auto",
                        color: "#da3430"
                    },
                    variant: "h6",
                    sx: {
                        textAlign: "center",
                        color: "#fff",
                        marginLeft: "10px",
                        transform: {
                            xs: "translate(0%, -100%)",
                            sm: "translate(30%, 50%)",
                            md: "translate(100%, 0%)",
                            xl: "translate(120%, 0%)"
                        }
                    },
                    children: [
                        "Farm Restaurant All Rights Reserved ",
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        "\xa9 2017 - ",
                        year,
                        "\xa0"
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: ./pages/_app.tsx







function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.SessionProvider, {
        session: pageProps.session,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ResponsiveAppBar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer2, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
        ]
    });
}
/* harmony default export */ const _app = (wrapper.withRedux(MyApp));


/***/ }),

/***/ 3842:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Fastfood");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 9580:
/***/ ((module) => {

module.exports = require("@mui/material/ButtonGroup");

/***/ }),

/***/ 8167:
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ 8455:
/***/ ((module) => {

module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("@mui/material/CardMedia");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,123,84,188,743,86], () => (__webpack_exec__(7101)));
module.exports = __webpack_exports__;

})();