webpackHotUpdate_N_E("pages/impacts-1-2",{

/***/ "./src/pages/impacts-1-2.jsx":
/*!***********************************!*\
  !*** ./src/pages/impacts-1-2.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _components_layout_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/layout/_canvas */ \"./src/components/layout/_canvas.js\");\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Menu */ \"./src/components/Menu.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/color */ \"./src/components/color.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n/* harmony import */ var react_wavify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-wavify */ \"./node_modules/react-wavify/lib/index.module.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_RoundBlueButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/RoundBlueButton */ \"./src/components/RoundBlueButton.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div`\n  width: 100vw;\n  height: 100vh;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow-y: none;\n`;\nconst CompletionCard = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div`\n  \n  width: 90vw;\n  height:80vh;\n  background: white;\n  top: 10vw;\n  z-index: 1000;\n  border-radius: 25px;\n  border: 1px solid ${_components_color__WEBPACK_IMPORTED_MODULE_3__[\"colors\"].blue};\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding:10vh 0 10vh 0;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  flex-direction: column;\n  transition:0.5s ease;\n\n`;\nconst CompletionInformation = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div`\n  \nwidth: 80%;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\ncolor: ${_components_color__WEBPACK_IMPORTED_MODULE_3__[\"colors\"].green};\nfont-size: 18px;\nfont-weight: 700;\nfont-family: Nunito;\n\n`;\nconst CompletionFact = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div`\n  \nwidth: 80%;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\ncolor: ${_components_color__WEBPACK_IMPORTED_MODULE_3__[\"colors\"].blue};\nfont-size: 18px;\nfont-weight: 700;\nfont-family: Nunito;\ntext-align: center;\n\n`;\nconst Information = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div`\n  width: 80vw;\n  min-height: 100px;\n  position: absolute;\n  top: 20vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ${_components_color__WEBPACK_IMPORTED_MODULE_3__[\"colors\"].blue};\n  font-size: 16px;\n  font-weight: 700;\n  font-family: Nunito;\n`;\nconst Space = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div`\n  width: 10px;\n`;\nconst ResultsUI = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div`\n  width: 90vw;\n  min-height: 100px;\n  position: absolute;\n  bottom: 10vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ${_components_color__WEBPACK_IMPORTED_MODULE_3__[\"colors\"].blue};\n  font-family: Nunito;\n  z-index: 500;\n  animation: 3s blink infinite;\n`;\nconst Plastic = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].img`\n  width: 20vw;\n  \n  z-index: 200;\n  position: absolute;\n  bottom: 35vh;\n  animation: float 3s infinite;\n  cursor: pointer;\n  max-width: 100px;\n  padding: 10px;\n\n\n`;\nconst Impact = () => {\n  const props = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"])({\n    config: {duration: 2250},\n    number: 70,\n    from: {number: 0}\n  });\n  let count = 0;\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])();\n  const handleClick = (e) => {\n    setFill(!fill);\n    setTimeout(() => {\n      setCompleteTask(true);\n    }, 1e3);\n  };\n  const [completeTask, setCompleteTask] = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false);\n  const [hide, setHide] = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false);\n  const [fill, setFill] = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false);\n  const [instructions, setInstructions] = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"Click to pick up the microfibers from the ocean\");\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CompletionCard, {\n    style: {\n      transform: completeTask ? \"translateY(0)\" : \"translateY(100vh)\"\n    }\n  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CompletionInformation, null, \"You've unlocked a tip!\"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n    style: {\n      width: \"200px\",\n      animation: \"float 3s infinite\"\n    },\n    src: \"/bottle-filled.png\"\n  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CompletionFact, null, \"To help save drinking water, reduce the amount of times you do laundry.\"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_RoundBlueButton__WEBPACK_IMPORTED_MODULE_8__[\"RoundBlueButton\"], {\n    text: \"more impacts\"\n  })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Information, null, \"Clothing is one of the leading drivers of climate change, responsible for 8% of all carbon emissions more than all international  flights combined.      \"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Menu__WEBPACK_IMPORTED_MODULE_1__[\"Menu\"], {\n    hide,\n    setHide,\n    logo: \"/logo-small-blue.png\",\n    iconColor: _components_color__WEBPACK_IMPORTED_MODULE_3__[\"colors\"].blue,\n    three: true\n  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ResultsUI, null, instructions), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n    onClick: handleClick,\n    style: {\n      position: \"absolute\",\n      bottom: \"30vh\",\n      height: \"30vh\",\n      zIndex: \"300\",\n      cursor: \"pointer\"\n    },\n    src: \"/bottle-empty.png\"\n  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n    style: {\n      position: \"absolute\",\n      bottom: \"30vh\",\n      height: \"25vh\",\n      opacity: fill ? \"100%\" : \"0%\",\n      transition: \"1s ease\"\n    },\n    src: \"/water-fill.png\"\n  })));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Impact);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2ltcGFjdHMtMS0yLmpzeD82YjU3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLE1BQU0sWUFBWSx5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVN6QixNQUFNLGlCQUFpQix5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFRUix3REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYTdCLE1BQU0sd0JBQXdCLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FNNUIsd0RBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPaEIsTUFBTSxpQkFBZ0IseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU1wQix3REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVWhCLE1BQU0sY0FBYyx5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVFoQix3REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNbEIsTUFBTSxRQUFRLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBSXJCLE1BQU0sWUFBWSx5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVFkLHdEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1sQixNQUFNLFVBQVUseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWN2QixNQUFNLFNBQVMsTUFBTTtBQUNuQixRQUFNLFFBQVEsOERBQVMsQ0FBQztBQUFBLElBQ3RCLFFBQVEsQ0FBRSxVQUFVO0FBQUEsSUFDcEIsUUFBUTtBQUFBLElBQ1IsTUFBTSxDQUFFLFFBQVE7QUFBQTtBQUdsQixNQUFJLFFBQVE7QUFFWixRQUFNLFNBQVMsNkRBQVM7QUFFeEIsUUFBTSxjQUFjLENBQUMsTUFBTTtBQUN6QixZQUFRLENBQUM7QUFHUCxlQUFXLE1BQUs7QUFFZCxzQkFBZ0I7QUFBQSxPQUVmO0FBQUE7QUFRUCxRQUFNLENBQUMsY0FBYyxtQkFBbUIsc0RBQVEsQ0FBQztBQUVqRCxRQUFNLENBQUMsTUFBTSxXQUFXLHNEQUFRLENBQUM7QUFFakMsUUFBTSxDQUFDLE1BQU0sV0FBVyxzREFBUSxDQUFDO0FBRWpDLFFBQU0sQ0FBQyxjQUFjLG1CQUFtQixzREFBUSxDQUFDO0FBRWpELFNBRUUsd0lBRUEsMkVBQUMsV0FBRCxNQUVBLDJFQUFDLGdCQUFEO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFFTCxXQUFXLGVBQWUsa0JBQWtCO0FBQUE7QUFBQSxLQUc5QywyRUFBQyx1QkFBRCxNQUF1QiwyQkFLckIsMkVBQUMsT0FBRDtBQUFBLElBQ0csT0FBTztBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsV0FBVztBQUFBO0FBQUEsSUFFZixLQUFJO0FBQUEsTUFFTiwyRUFBQyxnQkFBRCxNQUFnQiw0RUFLaEIsMkVBQUMsMkVBQWUsRUFBaEI7QUFBQSxJQUFpQixNQUFNO0FBQUEsT0FJckIsMkVBQUMsYUFBRCxNQUFhLDhKQUdiLDJFQUFDLHFEQUFJLEVBQUw7QUFBQSxJQUNFO0FBQUEsSUFDQTtBQUFBLElBQ0EsTUFBSztBQUFBLElBQ0wsV0FBVyx3REFBTSxDQUFDO0FBQUEsSUFDbEIsT0FBTztBQUFBLE1BR1QsMkVBQUMsV0FBRCxNQUFZLGVBRVosMkVBQUMsT0FBRDtBQUFBLElBQ0EsU0FBUztBQUFBLElBQ1QsT0FBTztBQUFBLE1BQ0wsVUFBVTtBQUFBLE1BQ1YsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBO0FBQUEsSUFHUCxLQUFJO0FBQUEsTUFFYiwyRUFBQyxPQUFEO0FBQUEsSUFBSyxPQUFPO0FBQUEsTUFDSixVQUFVO0FBQUEsTUFDVixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFFUixTQUFTLE9BQU8sU0FBUztBQUFBLE1BQ3pCLFlBQVk7QUFBQTtBQUFBLElBQ1gsS0FBSTtBQUFBO0FBQUE7QUFjRSxxRUFBTSIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbXBhY3RzLTEtMi5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGhyZWVDYW52YXMgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvX2NhbnZhcydcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnXG4vKiBpbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5tb2R1bGUuY3NzJyovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJ0AvY29tcG9uZW50cy9jb2xvcidcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSAncmVhY3Qtc3ByaW5nJ1xuaW1wb3J0IFdhdmUgZnJvbSAncmVhY3Qtd2F2aWZ5J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBSb3VuZEJsdWVCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvUm91bmRCbHVlQnV0dG9uJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3cteTogbm9uZTtcbmBcbmNvbnN0IENvbXBsZXRpb25DYXJkID0gc3R5bGVkLmRpdmBcbiAgXG4gIHdpZHRoOiA5MHZ3O1xuICBoZWlnaHQ6ODB2aDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHRvcDogMTB2dztcbiAgei1pbmRleDogMTAwMDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvcnMuYmx1ZX07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzoxMHZoIDAgMTB2aCAwO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0cmFuc2l0aW9uOjAuNXMgZWFzZTtcblxuYFxuXG5cblxuY29uc3QgQ29tcGxldGlvbkluZm9ybWF0aW9uID0gc3R5bGVkLmRpdmBcbiAgXG53aWR0aDogODAlO1xuZGlzcGxheTogZmxleDtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmNvbG9yOiAke2NvbG9ycy5ncmVlbn07XG5mb250LXNpemU6IDE4cHg7XG5mb250LXdlaWdodDogNzAwO1xuZm9udC1mYW1pbHk6IE51bml0bztcblxuYFxuXG5jb25zdCBDb21wbGV0aW9uRmFjdD0gc3R5bGVkLmRpdmBcbiAgXG53aWR0aDogODAlO1xuZGlzcGxheTogZmxleDtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmNvbG9yOiAke2NvbG9ycy5ibHVlfTtcbmZvbnQtc2l6ZTogMThweDtcbmZvbnQtd2VpZ2h0OiA3MDA7XG5mb250LWZhbWlseTogTnVuaXRvO1xudGV4dC1hbGlnbjogY2VudGVyO1xuXG5gXG5cblxuXG5jb25zdCBJbmZvcm1hdGlvbiA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA4MHZ3O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogJHtjb2xvcnMuYmx1ZX07XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1mYW1pbHk6IE51bml0bztcbmBcblxuY29uc3QgU3BhY2UgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTBweDtcbmBcblxuY29uc3QgUmVzdWx0c1VJID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDkwdnc7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAke2NvbG9ycy5ibHVlfTtcbiAgZm9udC1mYW1pbHk6IE51bml0bztcbiAgei1pbmRleDogNTAwO1xuICBhbmltYXRpb246IDNzIGJsaW5rIGluZmluaXRlO1xuYFxuXG5jb25zdCBQbGFzdGljID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDIwdnc7XG4gIFxuICB6LWluZGV4OiAyMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzNXZoO1xuICBhbmltYXRpb246IGZsb2F0IDNzIGluZmluaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG5cblxuYFxuXG5jb25zdCBJbXBhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IHByb3BzID0gdXNlU3ByaW5nKHtcbiAgICBjb25maWc6IHsgZHVyYXRpb246IDIyNTAgfSxcbiAgICBudW1iZXI6IDcwLFxuICAgIGZyb206IHsgbnVtYmVyOiAwIH0sXG4gIH0pXG5cbiAgbGV0IGNvdW50ID0gMFxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIHNldEZpbGwoIWZpbGwpXG5cbiAgICBcbiAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG5cbiAgICAgICAgc2V0Q29tcGxldGVUYXNrKHRydWUpXG5cbiAgICAgIH0sIDEwMDApXG4gICAgICBcbiAgICAgIC8qIHNldEluc3RydWN0aW9ucygnc3dpcGUgdXAgdG8gc2VlIGhvdyB5b3UgY2FuIGhlbHAnKSAqL1xuICAgIH1cbiAgXG5cblxuXG4gIGNvbnN0IFtjb21wbGV0ZVRhc2ssIHNldENvbXBsZXRlVGFza10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBbaGlkZSwgc2V0SGlkZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBbZmlsbCwgc2V0RmlsbF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBbaW5zdHJ1Y3Rpb25zLCBzZXRJbnN0cnVjdGlvbnNdID0gdXNlU3RhdGUoJ0NsaWNrIHRvIHBpY2sgdXAgdGhlIG1pY3JvZmliZXJzIGZyb20gdGhlIG9jZWFuJylcblxuICByZXR1cm4gKFxuXG4gICAgPD5cblxuICAgIDxDb250YWluZXI+XG5cbiAgICA8Q29tcGxldGlvbkNhcmRcbiAgICBzdHlsZT17e1xuICAgICAgXG4gICAgICB0cmFuc2Zvcm06IGNvbXBsZXRlVGFzayA/ICd0cmFuc2xhdGVZKDApJyA6ICd0cmFuc2xhdGVZKDEwMHZoKSdcbiAgICB9fT5cblxuICAgIDxDb21wbGV0aW9uSW5mb3JtYXRpb24+XG4gXG4gICAgWW91J3ZlIHVubG9ja2VkIGEgdGlwIVxuICAgIDwvQ29tcGxldGlvbkluZm9ybWF0aW9uPlxuXG4gICAgICA8aW1nIFxuICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogJzIwMHB4JyxcbiAgICAgICAgICBhbmltYXRpb246ICdmbG9hdCAzcyBpbmZpbml0ZScsXG4gICAgICAgIH19XG4gICAgICBzcmM9XCIvYm90dGxlLWZpbGxlZC5wbmdcIi8+XG5cbiAgICA8Q29tcGxldGlvbkZhY3Q+XG4gXG4gICAgVG8gaGVscCBzYXZlIGRyaW5raW5nIHdhdGVyLCByZWR1Y2UgdGhlIGFtb3VudCBvZiB0aW1lcyB5b3UgZG8gbGF1bmRyeS5cbiAgICA8L0NvbXBsZXRpb25GYWN0PlxuXG4gICAgPFJvdW5kQmx1ZUJ1dHRvbiB0ZXh0PXsnbW9yZSBpbXBhY3RzJ30vPlxuXG4gICAgICA8L0NvbXBsZXRpb25DYXJkPlxuXG4gICAgICA8SW5mb3JtYXRpb24+XG4gICAgICBDbG90aGluZyBpcyBvbmUgb2YgdGhlIGxlYWRpbmcgZHJpdmVycyBvZiBjbGltYXRlIGNoYW5nZSwgcmVzcG9uc2libGUgZm9yIDglIG9mIGFsbCBjYXJib24gZW1pc3Npb25zIG1vcmUgdGhhbiBhbGwgaW50ZXJuYXRpb25hbCAgZmxpZ2h0cyBjb21iaW5lZC4gICAgICA8L0luZm9ybWF0aW9uPlxuXG4gICAgICA8TWVudVxuICAgICAgICBoaWRlPXtoaWRlfVxuICAgICAgICBzZXRIaWRlPXtzZXRIaWRlfVxuICAgICAgICBsb2dvPScvbG9nby1zbWFsbC1ibHVlLnBuZydcbiAgICAgICAgaWNvbkNvbG9yPXtjb2xvcnMuYmx1ZX1cbiAgICAgICAgdGhyZWU9e3RydWV9XG4gICAgICAvPlxuXG4gICAgICA8UmVzdWx0c1VJPntpbnN0cnVjdGlvbnN9PC9SZXN1bHRzVUk+XG5cbiAgICAgIDxpbWdcbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGJvdHRvbTogJzMwdmgnLFxuICAgICAgICBoZWlnaHQ6ICczMHZoJyxcbiAgICAgICAgekluZGV4OiAnMzAwJyxcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgIFxuICAgICBcbiAgICAgIH19IHNyYz1cIi9ib3R0bGUtZW1wdHkucG5nXCIvPlxuXG48aW1nIHN0eWxlPXt7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBib3R0b206ICczMHZoJyxcbiAgICAgICAgaGVpZ2h0OiAnMjV2aCcsXG4gICAgICAgIFxuICAgICAgICBvcGFjaXR5OiBmaWxsID8gJzEwMCUnIDogJzAlJyxcbiAgICAgICAgdHJhbnNpdGlvbjogJzFzIGVhc2UnXG4gICAgICB9fSBzcmM9XCIvd2F0ZXItZmlsbC5wbmdcIi8+XG5cbiAgICAgIFxuXG5cblxuXG5cbiAgICA8L0NvbnRhaW5lcj5cblxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEltcGFjdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/impacts-1-2.jsx\n");

/***/ })

})