"use strict";
exports.id = 4699;
exports.ids = [4699];
exports.modules = {

/***/ 9871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ about_us3)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8636);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/data/sections/about-us3.json
const about_us3_namespaceObject = JSON.parse('{"wp":"/img/01.jpg","Lx":"/img/02.jpg","Qq":{"r":28,"u":"Years Of Experience"},"TN":{"P":"Unlimited Skills","E":"for Super Projects."},"kQ":{"P":"Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).","E":"We develop creative solutions for small and big brands alike, build authentic product identities and much more."},"bH":"About Us"}');
;// CONCATENATED MODULE: ./src/components/About-us3/about-us3.jsx

/* eslint-disable @next/next/no-img-element */ 



const AboutUs3 = ()=>{
    external_react_default().useEffect(()=>{
        setTimeout(()=>{
            var imageDown = document.getElementsByClassName("thumparallax-down");
            var imageUp = document.getElementsByClassName("thumparallax");
            if (imageDown) {
                new simpleParallax(imageDown, {
                    orientation: "down",
                    delay: 1,
                    scale: 1.1
                });
            }
            if (imageUp) {
                new simpleParallax(imageUp, {
                    delay: 1,
                    scale: 1.1
                });
            }
        }, 1000);
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "agency section-padding position-re",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-7",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "imgsec md-mb50",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-md-6",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "item",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "imgone big-bord wow fadeInDown",
                                                        "data-wow-delay": ".8s",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            className: "thumparallax-down",
                                                            src: about_us3_namespaceObject.wp,
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "exp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                className: "nmb-font",
                                                                children: about_us3_namespaceObject.Qq.r
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                children: about_us3_namespaceObject.Qq.u
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-md-6",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "item",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "imgtwo big-bord wow fadeInUp",
                                                    "data-wow-delay": ".6s",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        className: "thumparallax",
                                                        src: about_us3_namespaceObject.Lx,
                                                        alt: ""
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-5 valign",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "content",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                            className: "wow words chars splitting",
                                            "data-splitting": true,
                                            children: [
                                                about_us3_namespaceObject.TN.P,
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " ",
                                                about_us3_namespaceObject.TN.E
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "wow txt words chars splitting",
                                            "data-splitting": true,
                                            children: [
                                                about_us3_namespaceObject.kQ.P,
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                about_us3_namespaceObject.kQ.E
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/about/about-dark",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "butn bord curve mt-40 wow fadeInUp",
                                            "data-wow-delay": ".8s",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: about_us3_namespaceObject.bH
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "line bottom right"
            })
        ]
    }));
};
/* harmony default export */ const about_us3 = (AboutUs3);


/***/ }),

/***/ 9216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8636);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);

/* eslint-disable @next/next/no-img-element */ 


const MinimalArea2 = ()=>{
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        setTimeout(()=>{
            var imageDown = document.getElementsByClassName("thumparallax-down");
            if (imageDown) {
                new simpleParallax(imageDown, {
                    orientation: "down",
                    delay: 1,
                    scale: 1.1
                });
            }
        }, 1000);
    }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "min-area",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "img",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "thumparallax-down",
                                src: "/img/min-area.jpg",
                                alt: ""
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-6 valign",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "content",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: "color-font",
                                    children: "Dream. Innovate. Implement."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Split__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "wow txt words chars splitting",
                                        "data-splitting": true,
                                        children: "Our creative Ad agency is ranked among the finest in the US. We cultivate smart ideas for start-ups and seasoned players. By adhering to industry standards, we create some stunning portfolios. Company branding redefines."
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "wow fadeInUp",
                                            "data-wow-delay": ".2s",
                                            children: "We provide free initial consultation and support."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "wow fadeInUp",
                                            "data-wow-delay": ".4s",
                                            children: "We work with some of the most successful businesses."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    href: "/about/about-dark",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "butn bord curve mt-40 wow fadeInUp",
                                        "data-wow-delay": ".8s",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Discover"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MinimalArea2);


/***/ })

};
;