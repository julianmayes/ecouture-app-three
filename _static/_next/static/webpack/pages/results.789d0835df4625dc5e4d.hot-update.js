webpackHotUpdate_N_E("pages/results",{

/***/ "./src/components/layout/_canvas.js":
/*!******************************************!*\
  !*** ./src/components/layout/_canvas.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React, module) {/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/three */ \"./node_modules/@react-spring/three/index.js\");\n/* harmony import */ var _react_three_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/a11y */ \"./node_modules/@react-three/a11y/dist/a11y.esm.js\");\n/* harmony import */ var _Earth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Earth */ \"./src/components/Earth.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../color */ \"./src/components/color.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nconst Point = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div`\n  width: 25px;\n  height: 25px;\n  background: white;\n  border-radius: 50%;\n  cursor: pointer;\n  border: 1px solid ${_color__WEBPACK_IMPORTED_MODULE_6__[\"colors\"].green};\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  \n`;\nfunction KeyLight({brightness, color}) {\n  return /* @__PURE__ */ React.createElement(\"rectAreaLight\", {\n    width: 10,\n    height: 10,\n    color,\n    intensity: brightness,\n    position: [-2, 0, 5],\n    lookAt: [0, 0, 0],\n    penumbra: 1\n  });\n}\nfunction FillLight({brightness, color}) {\n  return /* @__PURE__ */ React.createElement(\"rectAreaLight\", {\n    width: 10,\n    height: 10,\n    intensity: brightness,\n    color,\n    position: [2, 1, 4],\n    lookAt: [0, 0, 0],\n    penumbra: 2\n  });\n}\nfunction RimLight({brightness, color}) {\n  return /* @__PURE__ */ React.createElement(\"rectAreaLight\", {\n    width: 10,\n    height: 10,\n    intensity: brightness,\n    color,\n    position: [-1, 4, -2],\n    rotation: [0, 180, 0]\n  });\n}\nconst Controls = _react_three_drei__WEBPACK_IMPORTED_MODULE_1__[\"OrbitControls\"];\nconst ThreeCanvas = ({hide, setHide}) => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])();\n  const [progress, setProgress] = Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useState\"])([false, false, false, false]);\n  Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useEffect\"])(() => {\n    console.log(progress);\n    const completed = () => {\n      if (localStorage.getItem(\"completed\") === null) {\n        return [false, false, false, false];\n      } else {\n        return JSON.parse(localStorage.getItem(\"completed\"));\n      }\n    };\n    setProgress(completed);\n  }, []);\n  const handleClick = (el) => {\n    if (el.target.id == 0) {\n      router.push(\"/impacts-1-1\");\n    } else if (el.target.id == 1) {\n      router.push(\"/impacts-1-2\");\n    } else if (el.target.id == 2) {\n      router.push(\"/impacts-1-3\");\n    } else if (el.target.id == 3) {\n      router.push(\"/impacts-2-1\");\n    } else if (el.target.id == 4) {\n      router.push(\"/impacts-2-2\");\n    } else if (el.target.id == 5) {\n      router.push(\"/impacts-2-3\");\n    } else if (el.target.id == 6) {\n      router.push(\"/impacts-3-1\");\n    } else if (el.target.id == 7) {\n      router.push(\"/impacts-3-2\");\n    } else if (el.target.id == 8) {\n      router.push(\"/impacts-3-3\");\n    } else if (el.target.id == 9) {\n      router.push(\"/impacts-4-1\");\n    } else if (el.target.id == 10) {\n      router.push(\"/impacts-4-2\");\n    } else if (el.target.id == 11) {\n      router.push(\"/impacts-4-3\");\n    }\n    progress[el.target.id] = true;\n    console.log(progress);\n    localStorage.setItem(\"completed\", JSON.stringify(progress));\n  };\n  return /* @__PURE__ */ React.createElement(_react_three_fiber__WEBPACK_IMPORTED_MODULE_0__[\"Canvas\"], {\n    style: {\n      position: \"absolute\",\n      top: 0,\n      background: \"none\",\n      zIndex: hide ? -100 : 0\n    }\n  }, /* @__PURE__ */ React.createElement(KeyLight, null), /* @__PURE__ */ React.createElement(RimLight, null), /* @__PURE__ */ React.createElement(FillLight, null), /* @__PURE__ */ React.createElement(_Earth__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /* @__PURE__ */ React.createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__[\"Html\"], {\n    position: [0.7, 0.7, 0.7]\n  }, /* @__PURE__ */ React.createElement(Point, {\n    id: \"0\",\n    style: {\n      background: progress[0] ? _color__WEBPACK_IMPORTED_MODULE_6__[\"colors\"].green : \"white\"\n    },\n    onClick: (el) => handleClick(el)\n  })), /* @__PURE__ */ React.createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__[\"Html\"], {\n    position: [-0.7, 0.7, -0.7]\n  }, /* @__PURE__ */ React.createElement(Point, {\n    style: {\n      background: progress[1] ? _color__WEBPACK_IMPORTED_MODULE_6__[\"colors\"].green : \"white\"\n    },\n    id: \"1\",\n    onClick: (el) => handleClick(el)\n  })), /* @__PURE__ */ React.createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__[\"Html\"], {\n    position: [-0.7, -0.7, 0.7]\n  }, /* @__PURE__ */ React.createElement(Point, {\n    style: {\n      background: \"white\",\n      background: progress[2] ? _color__WEBPACK_IMPORTED_MODULE_6__[\"colors\"].green : \"white\"\n    },\n    id: \"2\",\n    onClick: (e) => handleClick(e)\n  })), /* @__PURE__ */ React.createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__[\"Html\"], {\n    position: [0.9, 0.9, 0.9]\n  }, /* @__PURE__ */ React.createElement(Point, {\n    id: \"3\",\n    style: {\n      background: progress[0] ? _color__WEBPACK_IMPORTED_MODULE_6__[\"colors\"].green : \"white\"\n    }\n  })), /* @__PURE__ */ React.createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__[\"Html\"], {\n    position: [-0.9, 0.9, -0.9]\n  }, /* @__PURE__ */ React.createElement(Point, {\n    style: {\n      background: progress[1] ? _color__WEBPACK_IMPORTED_MODULE_6__[\"colors\"].green : \"white\"\n    },\n    id: \"4\"\n  })), /* @__PURE__ */ React.createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__[\"Html\"], {\n    position: [-0.9, -0.9, 0.9]\n  }, /* @__PURE__ */ React.createElement(Point, {\n    style: {\n      background: \"white\",\n      background: progress[2] ? _color__WEBPACK_IMPORTED_MODULE_6__[\"colors\"].green : \"white\"\n    },\n    id: \"5\"\n  })), /* @__PURE__ */ React.createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__[\"Html\"], {\n    position: [1.1, 1.1, 1.1]\n  }, /* @__PURE__ */ React.createElement(Point, {\n    id: \"6\",\n    style: {\n      background: progress[0] ? _color__WEBPACK_IMPORTED_MODULE_6__[\"colors\"].green : \"white\"\n    }\n  })), /* @__PURE__ */ React.createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__[\"Html\"], {\n    position: [-1.1, 1.1, -1.1]\n  }, /* @__PURE__ */ React.createElement(Point, {\n    style: {\n      background: progress[1] ? _color__WEBPACK_IMPORTED_MODULE_6__[\"colors\"].green : \"white\"\n    },\n    id: \"7\"\n  })), /* @__PURE__ */ React.createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__[\"Html\"], {\n    position: [-1.1, -1.1, 1.1]\n  }, /* @__PURE__ */ React.createElement(Point, {\n    style: {\n      background: \"white\",\n      background: progress[2] ? _color__WEBPACK_IMPORTED_MODULE_6__[\"colors\"].green : \"white\"\n    },\n    id: \"8\"\n  })), /* @__PURE__ */ React.createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__[\"Html\"], {\n    position: [1.3, 1.3, 1.3]\n  }, /* @__PURE__ */ React.createElement(Point, {\n    id: \"9\",\n    style: {\n      background: _color__WEBPACK_IMPORTED_MODULE_6__[\"colors\"].blue\n    }\n  })), /* @__PURE__ */ React.createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__[\"Html\"], {\n    position: [-1.3, 1.3, -1.3]\n  }, /* @__PURE__ */ React.createElement(Point, {\n    style: {\n      background: _color__WEBPACK_IMPORTED_MODULE_6__[\"colors\"].blue\n    },\n    id: \"10\"\n  })), /* @__PURE__ */ React.createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__[\"Html\"], {\n    position: [-1.3, -1.3, 1.3]\n  }, /* @__PURE__ */ React.createElement(Point, {\n    style: {\n      background: \"white\",\n      background: _color__WEBPACK_IMPORTED_MODULE_6__[\"colors\"].blue\n    },\n    id: \"11\"\n  })), /* @__PURE__ */ React.createElement(Controls, {\n    enablePan: false,\n    enableZoom: false,\n    enableDamping: true,\n    autoRotate: true\n  }));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThreeCanvas);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"./node_modules/react/index.js\"), __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L19jYW52YXMuanM/NTIyNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNLFFBQVEseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFNQyw2Q0FBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBTTdCLGtCQUFrQixDQUFFLFlBQVksUUFBUztBQUN2QyxTQUNFLG9DQUFDLGlCQUFEO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxRQUFRO0FBQUEsSUFDUjtBQUFBLElBQ0EsV0FBVztBQUFBLElBQ1gsVUFBVSxDQUFDLElBQUksR0FBRztBQUFBLElBQ2xCLFFBQVEsQ0FBQyxHQUFHLEdBQUc7QUFBQSxJQUNmLFVBQVU7QUFBQTtBQUFBO0FBSWhCLG1CQUFtQixDQUFFLFlBQVksUUFBUztBQUN4QyxTQUNFLG9DQUFDLGlCQUFEO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxRQUFRO0FBQUEsSUFDUixXQUFXO0FBQUEsSUFDWDtBQUFBLElBQ0EsVUFBVSxDQUFDLEdBQUcsR0FBRztBQUFBLElBQ2pCLFFBQVEsQ0FBQyxHQUFHLEdBQUc7QUFBQSxJQUNmLFVBQVU7QUFBQTtBQUFBO0FBS2hCLGtCQUFrQixDQUFFLFlBQVksUUFBUztBQUN2QyxTQUNFLG9DQUFDLGlCQUFEO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxRQUFRO0FBQUEsSUFDUixXQUFXO0FBQUEsSUFDWDtBQUFBLElBQ0EsVUFBVSxDQUFDLElBQUksR0FBRztBQUFBLElBQ2xCLFVBQVUsQ0FBQyxHQUFHLEtBQUs7QUFBQTtBQUFBO0FBS3pCLE1BQU0sV0FBVywrREFBYTtBQUU5QixNQUFNLGNBQWMsQ0FB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QUNFLElBQUc7QUFBQSxJQUNILE9BQU87QUFBQSxNQUNMLFlBQVksU0FBUyxLQUFLLDZDQUFNLENBQUMsUUFBUTtBQUFBO0FBQUEsT0FLL0Msb0NBQUMsc0RBQUksRUFBTDtBQUFBLElBQU0sVUFBVSxDQUFDLE1BQU0sS0FBSztBQUFBLEtBQzFCLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLE9BQU87QUFBQSxNQUNMLFlBQVksU0FBUyxLQUFLLDZDQUFNLENBQUMsUUFBUTtBQUFBO0FBQUEsSUFFM0MsSUFBRztBQUFBLE9BSVAsb0NBQUMsc0RBQUksRUFBTDtBQUFBLElBQU0sVUFBVSxDQUFDLE1BQU0sTUFBTTtBQUFBLEtBQzNCLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLE9BQU87QUFBQSxNQUNMLFlBQVk7QUFBQSxNQUNaLFlBQVksU0FBUyxLQUFLLDZDQUFNLENBQUMsUUFBUTtBQUFBO0FBQUEsSUFFM0MsSUFBRztBQUFBLE9BS1Asb0NBQUMsc0RBQUksRUFBTDtBQUFBLElBQU0sVUFBVSxDQUFDLEtBQUssS0FBSztBQUFBLEtBQ3pCLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLElBQUc7QUFBQSxJQUNILE9BQU87QUFBQSxNQUNMLFlBQVksU0FBUyxLQUFLLDZDQUFNLENBQUMsUUFBUTtBQUFBO0FBQUEsT0FLL0Msb0NBQUMsc0RBQUksRUFBTDtBQUFBLElBQU0sVUFBVSxDQUFDLE1BQU0sS0FBSztBQUFBLEtBQzFCLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLE9BQU87QUFBQSxNQUNMLFlBQVksU0FBUyxLQUFLLDZDQUFNLENBQUMsUUFBUTtBQUFBO0FBQUEsSUFFM0MsSUFBRztBQUFBLE9BSVAsb0NBQUMsc0RBQUksRUFBTDtBQUFBLElBQU0sVUFBVSxDQUFDLE1BQU0sTUFBTTtBQUFBLEtBQzNCLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLE9BQU87QUFBQSxNQUNMLFlBQVk7QUFBQSxNQUNaLFlBQVksU0FBUyxLQUFLLDZDQUFNLENBQUMsUUFBUTtBQUFBO0FBQUEsSUFFM0MsSUFBRztBQUFBLE9BS1Asb0NBQUMsc0RBQUksRUFBTDtBQUFBLElBQU0sVUFBVSxDQUFDLEtBQUssS0FBSztBQUFBLEtBQ3pCLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLElBQUc7QUFBQSxJQUNILE9BQU87QUFBQSxNQUNMLFlBQVksNkNBQU0sQ0FBQztBQUFBO0FBQUEsT0FLekIsb0NBQUMsc0RBQUksRUFBTDtBQUFBLElBQU0sVUFBVSxDQUFDLE1BQU0sS0FBSztBQUFBLEtBQzFCLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLE9BQU87QUFBQSxNQUNMLFlBQVksNkNBQU0sQ0FBQztBQUFBO0FBQUEsSUFFckIsSUFBRztBQUFBLE9BSVAsb0NBQUMsc0RBQUksRUFBTDtBQUFBLElBQU0sVUFBVSxDQUFDLE1BQU0sTUFBTTtBQUFBLEtBQzNCLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLE9BQU87QUFBQSxNQUNMLFlBQVk7QUFBQSxNQUNaLFlBQVksNkNBQU0sQ0FBQztBQUFBO0FBQUEsSUFFckIsSUFBRztBQUFBLE9BUVAsb0NBQUMsVUFBRDtBQUFBLElBQ0UsV0FBVztBQUFBLElBQ1gsWUFBWTtBQUFBLElBQ1osZUFBZTtBQUFBLElBQ2YsWUFBVTtBQUFBO0FBQUE7QUFNSCwwRUFBVyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2xheW91dC9fY2FudmFzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FudmFzLCB1c2VUaHJlZSB9IGZyb20gJ0ByZWFjdC10aHJlZS9maWJlcidcbmltcG9ydCB7IEh0bWwsIE9yYml0Q29udHJvbHMsIFByZWxvYWQsIFNwaGVyZSB9IGZyb20gJ0ByZWFjdC10aHJlZS9kcmVpJ1xuaW1wb3J0IHsgYSwgdXNlU3ByaW5nLCBQZXJzcGVjdGl2ZUNhbWVyYSB9IGZyb20gJ0ByZWFjdC1zcHJpbmcvdGhyZWUnXG5pbXBvcnQgeyBBMTF5VXNlclByZWZlcmVuY2VzIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ExMXknXG5pbXBvcnQgRWFydGhVSSBmcm9tICcuLi9FYXJ0aCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi9jb2xvcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBQb2ludCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvcnMuZ3JlZW59O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBcbmBcblxuLy8gTGlnaHRzXG5mdW5jdGlvbiBLZXlMaWdodCh7IGJyaWdodG5lc3MsIGNvbG9yIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8cmVjdEFyZWFMaWdodFxuICAgICAgd2lkdGg9ezEwfVxuICAgICAgaGVpZ2h0PXsxMH1cbiAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgIGludGVuc2l0eT17YnJpZ2h0bmVzc31cbiAgICAgIHBvc2l0aW9uPXtbLTIsIDAsIDVdfVxuICAgICAgbG9va0F0PXtbMCwgMCwgMF19XG4gICAgICBwZW51bWJyYT17MX1cbiAgICAvPlxuICApXG59XG5mdW5jdGlvbiBGaWxsTGlnaHQoeyBicmlnaHRuZXNzLCBjb2xvciB9KSB7XG4gIHJldHVybiAoXG4gICAgPHJlY3RBcmVhTGlnaHRcbiAgICAgIHdpZHRoPXsxMH1cbiAgICAgIGhlaWdodD17MTB9XG4gICAgICBpbnRlbnNpdHk9e2JyaWdodG5lc3N9XG4gICAgICBjb2xvcj17Y29sb3J9XG4gICAgICBwb3NpdGlvbj17WzIsIDEsIDRdfVxuICAgICAgbG9va0F0PXtbMCwgMCwgMF19XG4gICAgICBwZW51bWJyYT17Mn1cbiAgICAvPlxuICApXG59XG5cbmZ1bmN0aW9uIFJpbUxpZ2h0KHsgYnJpZ2h0bmVzcywgY29sb3IgfSkge1xuICByZXR1cm4gKFxuICAgIDxyZWN0QXJlYUxpZ2h0XG4gICAgICB3aWR0aD17MTB9XG4gICAgICBoZWlnaHQ9ezEwfVxuICAgICAgaW50ZW5zaXR5PXticmlnaHRuZXNzfVxuICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgcG9zaXRpb249e1stMSwgNCwgLTJdfVxuICAgICAgcm90YXRpb249e1swLCAxODAsIDBdfVxuICAgIC8+XG4gIClcbn1cblxuY29uc3QgQ29udHJvbHMgPSBPcmJpdENvbnRyb2xzXG5cbmNvbnN0IFRocmVlQ2FudmFzID0gKHsgaGlkZSwgc2V0SGlkZSB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZShbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdKVxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwcm9ncmVzcylcblxuICAgIGNvbnN0IGNvbXBsZXRlZCA9ICgpID0+IHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvbXBsZXRlZFwiKSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlIF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb21wbGV0ZWQnKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRQcm9ncmVzcyhjb21wbGV0ZWQpXG5cblxuXG5cbiAgfSxbXSlcblxuXG4gIFxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGVsKSA9PiB7XG4gICAgaWYoZWwudGFyZ2V0LmlkID09IDApe1xuICAgIHJvdXRlci5wdXNoKCcvaW1wYWN0cy0xLTEnKVxuICAgIH0gZWxzZSBpZiAoZWwudGFyZ2V0LmlkID09IDEpe1xuICAgICAgcm91dGVyLnB1c2goJy9pbXBhY3RzLTEtMicpXG4gICAgfSBlbHNlIGlmIChlbC50YXJnZXQuaWQgPT0gMil7XG4gICAgICByb3V0ZXIucHVzaCgnL2ltcGFjdHMtMS0zJylcbiAgICB9IGVsc2UgaWYgKGVsLnRhcmdldC5pZCA9PSAzKXtcbiAgICAgIHJvdXRlci5wdXNoKCcvaW1wYWN0cy0yLTEnKVxuICAgIH0gZWxzZSBpZiAoZWwudGFyZ2V0LmlkID09IDQpe1xuICAgICAgcm91dGVyLnB1c2goJy9pbXBhY3RzLTItMicpXG4gICAgfSBlbHNlIGlmIChlbC50YXJnZXQuaWQgPT0gNSl7XG4gICAgICByb3V0ZXIucHVzaCgnL2ltcGFjdHMtMi0zJylcbiAgICB9IGVsc2UgaWYgKGVsLnRhcmdldC5pZCA9PSA2KXtcbiAgICAgIHJvdXRlci5wdXNoKCcvaW1wYWN0cy0zLTEnKVxuICAgIH0gZWxzZSBpZiAoZWwudGFyZ2V0LmlkID09IDcpe1xuICAgICAgcm91dGVyLnB1c2goJy9pbXBhY3RzLTMtMicpXG4gICAgfSBlbHNlIGlmIChlbC50YXJnZXQuaWQgPT0gOCl7XG4gICAgICByb3V0ZXIucHVzaCgnL2ltcGFjdHMtMy0zJylcbiAgICB9IGVsc2UgaWYgKGVsLnRhcmdldC5pZCA9PSA5KXtcbiAgICAgIHJvdXRlci5wdXNoKCcvaW1wYWN0cy00LTEnKVxuICAgIH0gZWxzZSBpZiAoZWwudGFyZ2V0LmlkID09IDEwKXtcbiAgICAgIHJvdXRlci5wdXNoKCcvaW1wYWN0cy00LTInKVxuICAgIH0gZWxzZSBpZiAoZWwudGFyZ2V0LmlkID09IDExKXtcbiAgICAgIHJvdXRlci5wdXNoKCcvaW1wYWN0cy00LTMnKVxuICAgIH0gXG4gICAgcHJvZ3Jlc3NbZWwudGFyZ2V0LmlkXSA9IHRydWVcbiAgICBjb25zb2xlLmxvZyhwcm9ncmVzcylcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29tcGxldGVkJywgSlNPTi5zdHJpbmdpZnkocHJvZ3Jlc3MpKVxuXG4gICAgXG4gIH1cblxuIFxuICBcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8Q2FudmFzXG4gICAgICBzdHlsZT17e1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gICAgICAgIHpJbmRleDogaGlkZSA/IC0xMDAgOiAwLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8S2V5TGlnaHQgLz5cbiAgICAgIDxSaW1MaWdodCAvPlxuICAgICAgPEZpbGxMaWdodCAvPlxuXG4gICAgICA8RWFydGhVSSAvPlxuXG4gICAgICA8SHRtbCBwb3NpdGlvbj17WzAuNywgMC43LCAwLjddfT5cbiAgICAgICAgPFBvaW50XG4gICAgICAgICAgaWQ9JzAnXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHByb2dyZXNzWzBdID8gY29sb3JzLmdyZWVuIDogJ3doaXRlJyxcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2xpY2s9eyhlbCkgPT4gaGFuZGxlQ2xpY2soZWwpfVxuICAgICAgICAvPlxuICAgICAgPC9IdG1sPlxuICAgICAgPEh0bWwgcG9zaXRpb249e1stMC43LCAwLjcsIC0wLjddfT5cbiAgICAgICAgPFBvaW50XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHByb2dyZXNzWzFdID8gY29sb3JzLmdyZWVuIDogJ3doaXRlJyxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGlkPScxJ1xuICAgICAgICAgIG9uQ2xpY2s9eyhlbCkgPT4gaGFuZGxlQ2xpY2soZWwpfVxuICAgICAgICAvPlxuICAgICAgPC9IdG1sPlxuICAgICAgPEh0bWwgcG9zaXRpb249e1stMC43LCAtMC43LCAwLjddfT5cbiAgICAgICAgPFBvaW50XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBwcm9ncmVzc1syXSA/IGNvbG9ycy5ncmVlbiA6ICd3aGl0ZScsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBpZD0nMidcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSl9XG4gICAgICAgIC8+XG4gICAgICA8L0h0bWw+XG5cbiAgICAgIDxIdG1sIHBvc2l0aW9uPXtbMC45LCAwLjksIDAuOV19PlxuICAgICAgICA8UG9pbnRcbiAgICAgICAgICBpZD0nMydcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcHJvZ3Jlc3NbMF0gPyBjb2xvcnMuZ3JlZW4gOiAnd2hpdGUnLFxuICAgICAgICAgIH19XG4gICAgICAgICAgXG4gICAgICAgIC8+XG4gICAgICA8L0h0bWw+XG4gICAgICA8SHRtbCBwb3NpdGlvbj17Wy0wLjksIDAuOSwgLTAuOV19PlxuICAgICAgICA8UG9pbnRcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcHJvZ3Jlc3NbMV0gPyBjb2xvcnMuZ3JlZW4gOiAnd2hpdGUnLFxuICAgICAgICAgIH19XG4gICAgICAgICAgaWQ9JzQnXG4gICAgICAgICAgXG4gICAgICAgIC8+XG4gICAgICA8L0h0bWw+XG4gICAgICA8SHRtbCBwb3NpdGlvbj17Wy0wLjksIC0wLjksIDAuOV19PlxuICAgICAgICA8UG9pbnRcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHByb2dyZXNzWzJdID8gY29sb3JzLmdyZWVuIDogJ3doaXRlJyxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGlkPSc1J1xuICAgICAgICAgIFxuICAgICAgICAvPlxuICAgICAgPC9IdG1sPlxuXG4gICAgICA8SHRtbCBwb3NpdGlvbj17WzEuMSwgMS4xLCAxLjFdfT5cbiAgICAgICAgPFBvaW50XG4gICAgICAgICAgaWQ9JzYnXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHByb2dyZXNzWzBdID8gY29sb3JzLmdyZWVuIDogJ3doaXRlJyxcbiAgICAgICAgICB9fVxuICAgICAgICAgIFxuICAgICAgICAvPlxuICAgICAgPC9IdG1sPlxuICAgICAgPEh0bWwgcG9zaXRpb249e1stMS4xLCAxLjEsIC0xLjFdfT5cbiAgICAgICAgPFBvaW50XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHByb2dyZXNzWzFdID8gY29sb3JzLmdyZWVuIDogJ3doaXRlJyxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGlkPSc3J1xuICAgICAgICAgIFxuICAgICAgICAvPlxuICAgICAgPC9IdG1sPlxuICAgICAgPEh0bWwgcG9zaXRpb249e1stMS4xLCAtMS4xLCAxLjFdfT5cbiAgICAgICAgPFBvaW50XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBwcm9ncmVzc1syXSA/IGNvbG9ycy5ncmVlbiA6ICd3aGl0ZScsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBpZD0nOCdcbiAgICAgICAgICBcbiAgICAgICAgLz5cbiAgICAgIDwvSHRtbD5cblxuICAgICAgPEh0bWwgcG9zaXRpb249e1sxLjMsIDEuMywgMS4zXX0+XG4gICAgICAgIDxQb2ludFxuICAgICAgICAgIGlkPSc5J1xuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvcnMuYmx1ZVxuICAgICAgICAgIH19XG4gICAgICAgICAgXG4gICAgICAgIC8+XG4gICAgICA8L0h0bWw+XG4gICAgICA8SHRtbCBwb3NpdGlvbj17Wy0xLjMsIDEuMywgLTEuM119PlxuICAgICAgICA8UG9pbnRcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogY29sb3JzLmJsdWVcbiAgICAgICAgICB9fVxuICAgICAgICAgIGlkPScxMCdcbiAgICAgICAgICBcbiAgICAgICAgLz5cbiAgICAgIDwvSHRtbD5cbiAgICAgIDxIdG1sIHBvc2l0aW9uPXtbLTEuMywgLTEuMywgMS4zXX0+XG4gICAgICAgIDxQb2ludFxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogY29sb3JzLmJsdWVcbiAgICAgICAgICB9fVxuICAgICAgICAgIGlkPScxMSdcbiAgICAgICAgICBcbiAgICAgICAgLz5cbiAgICAgIDwvSHRtbD5cblxuXG5cblxuICAgICAgPENvbnRyb2xzXG4gICAgICAgIGVuYWJsZVBhbj17ZmFsc2V9XG4gICAgICAgIGVuYWJsZVpvb209e2ZhbHNlfVxuICAgICAgICBlbmFibGVEYW1waW5nPXt0cnVlfVxuICAgICAgICBhdXRvUm90YXRlXG4gICAgICAvPlxuICAgIDwvQ2FudmFzPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRocmVlQ2FudmFzXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/layout/_canvas.js\n");

/***/ })

})