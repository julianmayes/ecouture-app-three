webpackHotUpdate_N_E("pages/impacts-1-3",{

/***/ "./src/pages/impacts-1-3.jsx":
/*!***********************************!*\
  !*** ./src/pages/impacts-1-3.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _components_layout_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/layout/_canvas */ \"./src/components/layout/_canvas.js\");\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Menu */ \"./src/components/Menu.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/color */ \"./src/components/color.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n/* harmony import */ var react_wavify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-wavify */ \"./node_modules/react-wavify/lib/index.module.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_RoundBlueButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/RoundBlueButton */ \"./src/components/RoundBlueButton.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div`\n  width: 100vw;\n  height: 100vh;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow-y: none;\n`;\nconst CompletionCard = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div`\n  \n  width: 90vw;\n  height:80vh;\n  background: white;\n  top: 10vw;\n  z-index: 1000;\n  border-radius: 25px;\n  border: 1px solid ${_components_color__WEBPACK_IMPORTED_MODULE_3__[\"colors\"].blue};\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding:10vh 0 10vh 0;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  flex-direction: column;\n  transition:0.5s ease;\n\n`;\nconst CompletionInformation = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div`\n  \nwidth: 80%;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\ncolor: ${_components_color__WEBPACK_IMPORTED_MODULE_3__[\"colors\"].green};\nfont-size: 18px;\nfont-weight: 700;\nfont-family: Nunito;\n\n`;\nconst CompletionFact = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div`\n  \nwidth: 80%;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\ncolor: ${_components_color__WEBPACK_IMPORTED_MODULE_3__[\"colors\"].blue};\nfont-size: 18px;\nfont-weight: 700;\nfont-family: Nunito;\ntext-align: center;\n\n`;\nconst Information = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div`\n  width: 80vw;\n  min-height: 100px;\n  position: absolute;\n  top: 20vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ${_components_color__WEBPACK_IMPORTED_MODULE_3__[\"colors\"].blue};\n  font-size: 16px;\n  font-weight: 700;\n  font-family: Nunito;\n`;\nconst Space = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div`\n  width: 10px;\n`;\nconst ResultsUI = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div`\n  width: 90vw;\n  min-height: 100px;\n  position: absolute;\n  bottom: 10vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-family: Nunito;\n  z-index: 500;\n  animation: 3s blink infinite;\n`;\nconst Plastic = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].img`\n  width: 20vw;\n  \n  z-index: 200;\n  position: absolute;\n  bottom: 35vh;\n  animation: float 3s infinite;\n  cursor: pointer;\n  max-width: 100px;\n  padding: 10px;\n\n\n`;\nconst Impact = () => {\n  const props = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"])({\n    config: {duration: 2250},\n    number: 70,\n    from: {number: 0}\n  });\n  let count = 0;\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])();\n  const handleClick = (e) => {\n    e.target.style.display = \"none\";\n    count++;\n    if (count == 3) {\n      setCompleteTask(true);\n    }\n  };\n  const [completeTask, setCompleteTask] = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false);\n  const [hide, setHide] = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false);\n  const [instructions, setInstructions] = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"Click to pick up the microfibers from the ocean\");\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CompletionCard, {\n    style: {\n      transform: completeTask ? \"translateY(0)\" : \"translateY(100vh)\"\n    }\n  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CompletionInformation, null, \"You've unlocked a tip!\"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n    style: {\n      width: \"100px\",\n      animation: \"float 3s infinite\"\n    },\n    src: \"/grey-cloud.png\"\n  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CompletionFact, null, \"To reduce the microfibers you produce, buy natural textiles and try washing less with cool water.\"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_RoundBlueButton__WEBPACK_IMPORTED_MODULE_8__[\"RoundBlueButton\"], {\n    text: \"more impacts\"\n  })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Information, null, \"U.S. and Canadian households release over 870 tons of plastic microfibers into the ocean every year from laundry alone.\"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Menu__WEBPACK_IMPORTED_MODULE_1__[\"Menu\"], {\n    hide,\n    setHide,\n    logo: \"/logo-small-blue.png\",\n    iconColor: _components_color__WEBPACK_IMPORTED_MODULE_3__[\"colors\"].blue,\n    three: true\n  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ResultsUI, null, instructions), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Plastic, {\n    src: \"/grey-cloud.png\",\n    onClick: (e) => handleClick(e),\n    style: {\n      left: \"35%\",\n      animationDelay: \"1s\",\n      zIndex: \"200\"\n    }\n  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Plastic, {\n    src: \"/grey-cloud.png\",\n    onClick: (e) => handleClick(e),\n    style: {\n      left: \"40%\",\n      animationDelay: \"0.2s\",\n      zIndex: \"200\"\n    }\n  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Plastic, {\n    src: \"/grey-cloud.png\",\n    onClick: (e) => handleClick(e),\n    style: {\n      left: \"51%\",\n      animationDelay: \"0.5s\",\n      zIndex: \"200\"\n    }\n  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n    style: {\n      position: \"absolute\",\n      top: \"15vh\",\n      width: \"200px\",\n      zIndex: \"100\"\n    },\n    src: \"/factory.png\"\n  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n    style: {\n      position: \"absolute\",\n      bottom: \"0vh\",\n      width: \"100%\",\n      zIndex: \"0\",\n      height: \"65vh\"\n    },\n    src: \"/grass.png\"\n  })));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Impact);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2ltcGFjdHMtMS0zLmpzeD82ZTQ3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLE1BQU0sWUFBWSx5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVN6QixNQUFNLGlCQUFpQix5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFRUix3REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYTdCLE1BQU0sd0JBQXdCLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FNNUIsd0RBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPaEIsTUFBTSxpQkFBZ0IseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU1wQix3REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVWhCLE1BQU0sY0FBYyx5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVFoQix3REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPbEIsTUFBTSxRQUFRLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBSXJCLE1BQU0sWUFBWSx5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY3pCLE1BQU0sVUFBVSx5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY3ZCLE1BQU0sU0FBUyxNQUFNO0FBQ25CLFFBQU0sUUFBUSw4REFBUyxDQUFDO0FBQUEsSUFDdEIsUUFBUSxDQUFFLFVBQVU7QUFBQSxJQUNwQixRQUFRO0FBQUEsSUFDUixNQUFNLENBQUUsUUFBUTtBQUFBO0FBR2xCLE1BQUksUUFBUTtBQUVaLFFBQU0sU0FBUyw2REFBUztBQUV4QixRQUFNLGNBQWMsQ0FBQyxNQUFNO0FBQ3pCLE1BQUUsT0FBTyxNQUFNLFVBQVU7QUFDekI7QUFFQSxRQUFJLFNBQVMsR0FBRztBQUNkLHNCQUFnQjtBQUFBO0FBQUE7QUFLcEIsUUFBTSxDQUFDLGNBQWMsbUJBQW1CLHNEQUFRLENBQUM7QUFFakQsUUFBTSxDQUFDLE1BQU0sV0FBVyxzREFBUSxDQUFDO0FBRWpDLFFBQU0sQ0FBQyxjQUFjLG1CQUFtQixzREFBUSxDQUFDO0FBRWpELFNBRUUsd0lBRUEsMkVBQUMsV0FBRCxNQUVBLDJFQUFDLGdCQUFEO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFFTCxXQUFXLGVBQWUsa0JBQWtCO0FBQUE7QUFBQSxLQUc5QywyRUFBQyx1QkFBRCxNQUF1QiwyQkFLckIsMkVBQUMsT0FBRDtBQUFBLElBQ0csT0FBTztBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsV0FBVztBQUFBO0FBQUEsSUFFZixLQUFJO0FBQUEsTUFFTiwyRUFBQyxnQkFBRCxNQUFnQixzR0FLaEIsMkVBQUMsMkVBQWUsRUFBaEI7QUFBQSxJQUFpQixNQUFNO0FBQUEsT0FJckIsMkVBQUMsYUFBRCxNQUFhLDRIQUtiLDJFQUFDLHFEQUFJLEVBQUw7QUFBQSxJQUNFO0FBQUEsSUFDQTtBQUFBLElBQ0EsTUFBSztBQUFBLElBQ0wsV0FBVyx3REFBTSxDQUFDO0FBQUEsSUFDbEIsT0FBTztBQUFBLE1BR1QsMkVBQUMsV0FBRCxNQUFZLGVBRVosMkVBQUMsU0FBRDtBQUFBLElBQVMsS0FBSTtBQUFBLElBQ1gsU0FBUyxDQUFDLE1BQU0sWUFBWTtBQUFBLElBQzVCLE9BQU87QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLGdCQUFnQjtBQUFBLE1BQ2hCLFFBQVE7QUFBQTtBQUFBLE1BSWxCLDJFQUFDLFNBQUQ7QUFBQSxJQUFTLEtBQUk7QUFBQSxJQUNMLFNBQVMsQ0FBQyxNQUFNLFlBQVk7QUFBQSxJQUM1QixPQUFPO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixnQkFBZ0I7QUFBQSxNQUNoQixRQUFRO0FBQUE7QUFBQSxNQUlsQiwyRUFBQyxTQUFEO0FBQUEsSUFBUyxLQUFJO0FBQUEsSUFFTCxTQUFTLENBQUMsTUFBTSxZQUFZO0FBQUEsSUFDNUIsT0FBTztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sZ0JBQWdCO0FBQUEsTUFDaEIsUUFBUTtBQUFBO0FBQUEsTUFJbEIsMkVBQUMsT0FBRDtBQUFBLElBQUssT0FBTztBQUFBLE1BQ0osVUFBVTtBQUFBLE1BQ1YsS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLE1BQ1AsUUFBTztBQUFBO0FBQUEsSUFFTixLQUFJO0FBQUEsTUFDUCwyRUFBQyxPQUFEO0FBQUEsSUFBSyxPQUFPO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxRQUFPO0FBQUEsTUFDUCxRQUFPO0FBQUE7QUFBQSxJQUtOLEtBQUk7QUFBQTtBQUFBO0FBUUUscUVBQU0iLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW1wYWN0cy0xLTMuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRocmVlQ2FudmFzIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L19jYW52YXMnXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi4vY29tcG9uZW50cy9NZW51J1xuLyogaW1wb3J0ICcuLi9zdHlsZXMvaW5kZXgubW9kdWxlLmNzcycqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICdAL2NvbXBvbmVudHMvY29sb3InXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZydcbmltcG9ydCBXYXZlIGZyb20gJ3JlYWN0LXdhdmlmeSdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgUm91bmRCbHVlQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL1JvdW5kQmx1ZUJ1dHRvbic7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93LXk6IG5vbmU7XG5gXG5jb25zdCBDb21wbGV0aW9uQ2FyZCA9IHN0eWxlZC5kaXZgXG4gIFxuICB3aWR0aDogOTB2dztcbiAgaGVpZ2h0Ojgwdmg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0b3A6IDEwdnc7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3JzLmJsdWV9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6MTB2aCAwIDEwdmggMDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdHJhbnNpdGlvbjowLjVzIGVhc2U7XG5cbmBcblxuXG5cbmNvbnN0IENvbXBsZXRpb25JbmZvcm1hdGlvbiA9IHN0eWxlZC5kaXZgXG4gIFxud2lkdGg6IDgwJTtcbmRpc3BsYXk6IGZsZXg7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5jb2xvcjogJHtjb2xvcnMuZ3JlZW59O1xuZm9udC1zaXplOiAxOHB4O1xuZm9udC13ZWlnaHQ6IDcwMDtcbmZvbnQtZmFtaWx5OiBOdW5pdG87XG5cbmBcblxuY29uc3QgQ29tcGxldGlvbkZhY3Q9IHN0eWxlZC5kaXZgXG4gIFxud2lkdGg6IDgwJTtcbmRpc3BsYXk6IGZsZXg7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5jb2xvcjogJHtjb2xvcnMuYmx1ZX07XG5mb250LXNpemU6IDE4cHg7XG5mb250LXdlaWdodDogNzAwO1xuZm9udC1mYW1pbHk6IE51bml0bztcbnRleHQtYWxpZ246IGNlbnRlcjtcblxuYFxuXG5cblxuY29uc3QgSW5mb3JtYXRpb24gPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogODB2dztcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZmFtaWx5OiBOdW5pdG87XG5gXG5cblxuY29uc3QgU3BhY2UgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTBweDtcbmBcblxuY29uc3QgUmVzdWx0c1VJID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDkwdnc7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IE51bml0bztcbiAgei1pbmRleDogNTAwO1xuICBhbmltYXRpb246IDNzIGJsaW5rIGluZmluaXRlO1xuYFxuXG5jb25zdCBQbGFzdGljID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDIwdnc7XG4gIFxuICB6LWluZGV4OiAyMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzNXZoO1xuICBhbmltYXRpb246IGZsb2F0IDNzIGluZmluaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG5cblxuYFxuXG5jb25zdCBJbXBhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IHByb3BzID0gdXNlU3ByaW5nKHtcbiAgICBjb25maWc6IHsgZHVyYXRpb246IDIyNTAgfSxcbiAgICBudW1iZXI6IDcwLFxuICAgIGZyb206IHsgbnVtYmVyOiAwIH0sXG4gIH0pXG5cbiAgbGV0IGNvdW50ID0gMFxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGUudGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICBjb3VudCsrXG5cbiAgICBpZiAoY291bnQgPT0gMykge1xuICAgICAgc2V0Q29tcGxldGVUYXNrKHRydWUpXG4gICAgICAvKiBzZXRJbnN0cnVjdGlvbnMoJ3N3aXBlIHVwIHRvIHNlZSBob3cgeW91IGNhbiBoZWxwJykgKi9cbiAgICB9XG4gIH1cblxuICBjb25zdCBbY29tcGxldGVUYXNrLCBzZXRDb21wbGV0ZVRhc2tdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgW2hpZGUsIHNldEhpZGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgW2luc3RydWN0aW9ucywgc2V0SW5zdHJ1Y3Rpb25zXSA9IHVzZVN0YXRlKCdDbGljayB0byBwaWNrIHVwIHRoZSBtaWNyb2ZpYmVycyBmcm9tIHRoZSBvY2VhbicpXG5cbiAgcmV0dXJuIChcblxuICAgIDw+XG5cbiAgICA8Q29udGFpbmVyPlxuXG4gICAgPENvbXBsZXRpb25DYXJkXG4gICAgc3R5bGU9e3tcbiAgICAgIFxuICAgICAgdHJhbnNmb3JtOiBjb21wbGV0ZVRhc2sgPyAndHJhbnNsYXRlWSgwKScgOiAndHJhbnNsYXRlWSgxMDB2aCknXG4gICAgfX0+XG5cbiAgICA8Q29tcGxldGlvbkluZm9ybWF0aW9uPlxuIFxuICAgIFlvdSd2ZSB1bmxvY2tlZCBhIHRpcCFcbiAgICA8L0NvbXBsZXRpb25JbmZvcm1hdGlvbj5cblxuICAgICAgPGltZyBcbiAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6ICcxMDBweCcsXG4gICAgICAgICAgYW5pbWF0aW9uOiAnZmxvYXQgM3MgaW5maW5pdGUnLFxuICAgICAgICB9fVxuICAgICAgc3JjPVwiL2dyZXktY2xvdWQucG5nXCIvPlxuXG4gICAgPENvbXBsZXRpb25GYWN0PlxuIFxuICAgIFRvIHJlZHVjZSB0aGUgbWljcm9maWJlcnMgeW91IHByb2R1Y2UsIGJ1eSBuYXR1cmFsIHRleHRpbGVzIGFuZCB0cnkgd2FzaGluZyBsZXNzIHdpdGggY29vbCB3YXRlci5cbiAgICA8L0NvbXBsZXRpb25GYWN0PlxuXG4gICAgPFJvdW5kQmx1ZUJ1dHRvbiB0ZXh0PXsnbW9yZSBpbXBhY3RzJ30vPlxuXG4gICAgICA8L0NvbXBsZXRpb25DYXJkPlxuXG4gICAgICA8SW5mb3JtYXRpb24+XG4gICAgICAgIFUuUy4gYW5kIENhbmFkaWFuIGhvdXNlaG9sZHMgcmVsZWFzZSBvdmVyIDg3MCB0b25zIG9mIHBsYXN0aWNcbiAgICAgICAgbWljcm9maWJlcnMgaW50byB0aGUgb2NlYW4gZXZlcnkgeWVhciBmcm9tIGxhdW5kcnkgYWxvbmUuXG4gICAgICA8L0luZm9ybWF0aW9uPlxuXG4gICAgICA8TWVudVxuICAgICAgICBoaWRlPXtoaWRlfVxuICAgICAgICBzZXRIaWRlPXtzZXRIaWRlfVxuICAgICAgICBsb2dvPScvbG9nby1zbWFsbC1ibHVlLnBuZydcbiAgICAgICAgaWNvbkNvbG9yPXtjb2xvcnMuYmx1ZX1cbiAgICAgICAgdGhyZWU9e3RydWV9XG4gICAgICAvPlxuXG4gICAgICA8UmVzdWx0c1VJPntpbnN0cnVjdGlvbnN9PC9SZXN1bHRzVUk+XG5cbiAgICAgIDxQbGFzdGljIHNyYz1cIi9ncmV5LWNsb3VkLnBuZ1wiXG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlKX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBsZWZ0OiAnMzUlJyxcbiAgICAgICAgICBhbmltYXRpb25EZWxheTogJzFzJyxcbiAgICAgICAgICB6SW5kZXg6ICcyMDAnXG4gICAgICAgIH19XG4gICAgICAvPlxuXG48UGxhc3RpYyBzcmM9XCIvZ3JleS1jbG91ZC5wbmdcIlxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSl9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgbGVmdDogJzQwJScsXG4gICAgICAgICAgYW5pbWF0aW9uRGVsYXk6ICcwLjJzJyxcbiAgICAgICAgICB6SW5kZXg6ICcyMDAnXG4gICAgICAgIH19XG4gICAgICAvPlxuXG48UGxhc3RpYyBzcmM9XCIvZ3JleS1jbG91ZC5wbmdcIlxuXG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlKX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBsZWZ0OiAnNTElJyxcbiAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuNXMnLFxuICAgICAgICAgIHpJbmRleDogJzIwMCdcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbjxpbWcgc3R5bGU9e3tcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogJzE1dmgnLFxuICAgICAgICB3aWR0aDogJzIwMHB4JyxcbiAgICAgICAgekluZGV4OlwiMTAwXCJcbiAgICAgIFxuICAgICAgfX0gc3JjPVwiL2ZhY3RvcnkucG5nXCIvPlxuICAgICAgPGltZyBzdHlsZT17e1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgYm90dG9tOiAnMHZoJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgekluZGV4OlwiMFwiLFxuICAgICAgICBoZWlnaHQ6JzY1dmgnXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgIFxuICAgICAgXG4gICAgICB9fSBzcmM9XCIvZ3Jhc3MucG5nXCIvPlxuXG4gICAgPC9Db250YWluZXI+XG5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbXBhY3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/impacts-1-3.jsx\n");

/***/ })

})