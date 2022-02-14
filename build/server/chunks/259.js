"use strict";
exports.id = 259;
exports.ids = [259];
exports.modules = {

/***/ 259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ about_us)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/sections/about-us1.json
const about_us1_namespaceObject = JSON.parse('{"bH":"Bună. noi suntem,","TN":"CSC Design","kQ":"CSC Design este agenția de publicitate de lângă tine, înființată din pasiune pentru design grafic, artă, marketing și publicitate. Ofertele noastre sunt mereu adaptate nevoilor clienților noștrii, iar consilierea specializată reprezintă o constantă a tuturor colaborărilor pe ca re le avem. Am investit în tehnologii de ultimă generație, pentru ca ideile creative și unice să devină realitate într-o prezentare superioară. Valoarea echipei noastre este compusă atât din personalul cu experiență în domeniud, cât și din viziunea noastră de dezvoltare pe termen lung. Timpul este un reper important pentru noi. De accea, din respect pentru clien, eficientizăm procesul de realizare a unui proiect, totodată punând pasiune în el. Pentru aceste oferim clienților noștrii servicii complete de publicitate, calibrate pe client și orientate către rezultat","BH":"/img/feat-custom.jpg","hm":[{"id":1,"stautsName":"Agenție Publicitate"},{"id":2,"stautsName":"Servicii Creative"}]}');
// EXTERNAL MODULE: external "react-parallax-tilt"
var external_react_parallax_tilt_ = __webpack_require__(3124);
var external_react_parallax_tilt_default = /*#__PURE__*/__webpack_require__.n(external_react_parallax_tilt_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/About-us/about-us.jsx

/* eslint-disable @next/next/no-img-element */ 



const AboutUs = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "about-us section-padding",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-5 valign md-mb50",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mb-50",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "fw-100 text-u ls10 mb-10",
                                    children: about_us1_namespaceObject.bH
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "./demos/despre-noi-csc",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "fw-600 text-u ls1 mb-30 color-font",
                                            children: about_us1_namespaceObject.TN
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: about_us1_namespaceObject.kQ
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-7 img",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((external_react_parallax_tilt_default()), {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: about_us1_namespaceObject.BH,
                                    alt: "CSC Design"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "stauts",
                                children: about_us1_namespaceObject.hm.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                children: [
                                                    item.number,
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: item.letter
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                children: item.stautsName
                                            })
                                        ]
                                    }, item.id)
                                )
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const about_us = (AboutUs);


/***/ })

};
;