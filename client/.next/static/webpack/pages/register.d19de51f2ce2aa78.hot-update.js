"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./pages/register.tsx":
/*!****************************!*\
  !*** ./pages/register.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Register; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/alert */ \"../node_modules/antd/lib/alert/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button */ \"../node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Register() {\n    _s();\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const currenttime = new Date();\n    const isValidEmail = (email)=>{\n        const emailRegex = /^[^\\s@]+@[hotmail|gmail]+\\.[^\\s@]+$/;\n        return emailRegex.test(email);\n    };\n    const passwordStrong = (password)=>{\n        const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;\n        return strongRegex.test(password);\n    };\n    const _handleRegister = async ()=>{\n        try {\n            var _result_data_result, _result_data;\n            if (!username || !password || !email) {\n                setErrorMessage(\"Please enter a email username and password\");\n                return;\n            }\n            if (!isValidEmail(email)) {\n                setErrorMessage(\"Email must end with @hotmail.com or @gmail.com\");\n                return;\n            }\n            if (!passwordStrong(password)) {\n                setErrorMessage(\"Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long.\");\n                return;\n            }\n            const result = await (0,axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n                method: \"post\",\n                maxBodyLength: Infinity,\n                url: \"/api/user/create\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                data: JSON.stringify({\n                    \"email\": email,\n                    \"username\": username,\n                    \"password\": password,\n                    \"createdDay\": currenttime.toISOString().slice(0, 10),\n                    \"role\": \"user\"\n                })\n            });\n            if (result === null || result === void 0 ? void 0 : (_result_data = result.data) === null || _result_data === void 0 ? void 0 : (_result_data_result = _result_data.result) === null || _result_data_result === void 0 ? void 0 : _result_data_result.id) {\n                console.log(\"Sign Up successful!\");\n                await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/log/addlog\", {\n                    event_happening: \"\".concat(username, \" new user signed up \")\n                });\n                next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/login\");\n            }\n        } catch (errorMessage) {\n            if (axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAxiosError(errorMessage)) {\n                if (errorMessage.response) {\n                    setErrorMessage(\"มีผู้ใช้งานนี้ในระบบแล้ว\");\n                }\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"bg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: \"Sign up to SeniorProject\"\n            }, void 0, false, {\n                fileName: \"D:\\\\project\\\\client\\\\pages\\\\register.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"register\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"signup\",\n                                    htmlFor: \"signup\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            children: \"SIGN UP\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\project\\\\client\\\\pages\\\\register.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\project\\\\client\\\\pages\\\\register.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\project\\\\client\\\\pages\\\\register.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"uname\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"Email\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\project\\\\client\\\\pages\\\\register.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\project\\\\client\\\\pages\\\\register.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Enter Email\",\n                                    name: \"em\",\n                                    required: true,\n                                    value: email,\n                                    onChange: (e)=>setEmail(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\project\\\\client\\\\pages\\\\register.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"uname\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"Username\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\project\\\\client\\\\pages\\\\register.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\project\\\\client\\\\pages\\\\register.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Enter Username\",\n                                    name: \"uname\",\n                                    required: true,\n                                    value: username,\n                                    onChange: (e)=>setUsername(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\project\\\\client\\\\pages\\\\register.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"psw\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"Password\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\project\\\\client\\\\pages\\\\register.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\project\\\\client\\\\pages\\\\register.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    placeholder: \"Enter Password\",\n                                    name: \"psw\",\n                                    required: true,\n                                    value: password,\n                                    onChange: (e)=>setPassword(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\project\\\\client\\\\pages\\\\register.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    className: \"buttonlogin\",\n                                    type: \"primary\",\n                                    onClick: _handleRegister,\n                                    children: \"SIGN UP\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\project\\\\client\\\\pages\\\\register.tsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\project\\\\client\\\\pages\\\\register.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_alert__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                message: errorMessage,\n                                type: \"info\",\n                                showIcon: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\project\\\\client\\\\pages\\\\register.tsx\",\n                                lineNumber: 128,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\project\\\\client\\\\pages\\\\register.tsx\",\n                            lineNumber: 127,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\project\\\\client\\\\pages\\\\register.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\project\\\\client\\\\pages\\\\register.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\project\\\\client\\\\pages\\\\register.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_s(Register, \"yuKBIS0lWz3Z448dgmtw3XkTWcE=\");\n_c = Register;\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztvQ0FDUDhDLFVBQVUsQ0FBQ0MsSUFBTTlDLFlBQVk4QyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs4Q0FFN0MsOERBQUNUO29DQUFNQyxTQUFROzhDQUNiLDRFQUFDQztrREFBRTs7Ozs7Ozs7Ozs7OENBRUwsOERBQUNFO29DQUNDQyxNQUFLO29DQUNMQyxhQUFZO29DQUNaQyxNQUFLO29DQUNMQyxRQUFRO29DQUNSQyxPQUFPM0M7b0NBQ1A0QyxVQUFVLENBQUNDLElBQU01QyxZQUFZNEMsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7OENBRzdDLDhEQUFDckQsd0RBQU1BO29DQUNMd0MsV0FBVTtvQ0FDVlMsTUFBSztvQ0FDTFEsU0FBU3RDOzhDQUNWOzs7Ozs7Ozs7Ozs7c0NBSUgsOERBQUN1QztzQ0FBR3RELDhCQUNBLDhEQUFDTCxzREFBS0E7Z0NBQUM0RCxTQUFTdkQ7Z0NBQWM2QyxNQUFLO2dDQUFPVyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhFO0dBL0h3QnpEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JlZ2lzdGVyLnRzeD9hNmM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBbGVydCwgQnV0dG9uLCBtZXNzYWdlfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZUNBUFRDSEEgZnJvbSBcInJlYWN0LWdvb2dsZS1yZWNhcHRjaGFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyKCkge1xyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG5cclxuICBjb25zdCBjdXJyZW50dGltZSA9IG5ldyBEYXRlKCk7XHJcblxyXG5cclxuICBjb25zdCBpc1ZhbGlkRW1haWwgPSAoZW1haWw6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgZW1haWxSZWdleCA9IC9eW15cXHNAXStAW2hvdG1haWx8Z21haWxdK1xcLlteXFxzQF0rJC87XHJcbiAgICByZXR1cm4gZW1haWxSZWdleC50ZXN0KGVtYWlsKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBhc3N3b3JkU3Ryb25nID0gKHBhc3N3b3JkKSA9PiB7XHJcbiAgICBjb25zdCBzdHJvbmdSZWdleCA9IC9eKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qXFxkKSg/PS4qW0AkISUqPyZdKVtBLVphLXpcXGRAJCElKj8mXXs4LH0kLztcclxuICAgIHJldHVybiBzdHJvbmdSZWdleC50ZXN0KHBhc3N3b3JkKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IF9oYW5kbGVSZWdpc3RlciA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghdXNlcm5hbWUgfHwgIXBhc3N3b3JkIHx8ICFlbWFpbCkge1xyXG4gICAgICAgIHNldEVycm9yTWVzc2FnZShcIlBsZWFzZSBlbnRlciBhIGVtYWlsIHVzZXJuYW1lIGFuZCBwYXNzd29yZFwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghaXNWYWxpZEVtYWlsKGVtYWlsKSkge1xyXG4gICAgICAgIHNldEVycm9yTWVzc2FnZShcIkVtYWlsIG11c3QgZW5kIHdpdGggQGhvdG1haWwuY29tIG9yIEBnbWFpbC5jb21cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXBhc3N3b3JkU3Ryb25nKHBhc3N3b3JkKSkge1xyXG4gICAgICAgIHNldEVycm9yTWVzc2FnZShcIlBhc3N3b3JkIG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgbG93ZXJjYXNlIGxldHRlciwgb25lIHVwcGVyY2FzZSBsZXR0ZXIsIG9uZSBkaWdpdCwgb25lIHNwZWNpYWwgY2hhcmFjdGVyLCBhbmQgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzIGxvbmcuXCIpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICBtYXhCb2R5TGVuZ3RoOiBJbmZpbml0eSxcclxuICAgICAgICB1cmw6IFwiL2FwaS91c2VyL2NyZWF0ZVwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgXCJlbWFpbFwiOiBlbWFpbCxcclxuICAgICAgICAgIFwidXNlcm5hbWVcIjogdXNlcm5hbWUsXHJcbiAgICAgICAgICBcInBhc3N3b3JkXCI6IHBhc3N3b3JkLFxyXG4gICAgICAgICAgXCJjcmVhdGVkRGF5XCI6IGN1cnJlbnR0aW1lLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwxMCksXHJcbiAgICAgICAgICBcInJvbGVcIjogXCJ1c2VyXCIsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAocmVzdWx0Py5kYXRhPy5yZXN1bHQ/LmlkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTaWduIFVwIHN1Y2Nlc3NmdWwhXCIpO1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvbG9nL2FkZGxvZycsIHtcclxuICAgICAgICAgIGV2ZW50X2hhcHBlbmluZzogYCR7dXNlcm5hbWV9IG5ldyB1c2VyIHNpZ25lZCB1cCBgLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvck1lc3NhZ2U6IGFueSkge1xyXG4gICAgICBpZiAoYXhpb3MuaXNBeGlvc0Vycm9yKGVycm9yTWVzc2FnZSkpIHtcclxuICAgICAgICBpZiAoZXJyb3JNZXNzYWdlLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCLguKHguLXguJzguLnguYnguYPguIrguYnguIfguLLguJnguJnguLXguYnguYPguJnguKPguLDguJrguJrguYHguKXguYnguKdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cImJnXCI+XHJcbiAgICAgIDx0aXRsZT5TaWduIHVwIHRvIFNlbmlvclByb2plY3Q8L3RpdGxlPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyXCI+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic2lnbnVwXCIgaHRtbEZvcj1cInNpZ251cFwiPlxyXG4gICAgICAgICAgICAgIDxiPlxyXG4gICAgICAgICAgICAgICAgPGgxPlNJR04gVVA8L2gxPlxyXG4gICAgICAgICAgICAgIDwvYj5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1bmFtZVwiPlxyXG4gICAgICAgICAgICAgIDxiPkVtYWlsPC9iPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1bmFtZVwiPlxyXG4gICAgICAgICAgICAgIDxiPlVzZXJuYW1lPC9iPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInVuYW1lXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwc3dcIj5cclxuICAgICAgICAgICAgICA8Yj5QYXNzd29yZDwvYj5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicHN3XCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9ubG9naW5cIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtfaGFuZGxlUmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTSUdOIFVQXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cD57ZXJyb3JNZXNzYWdlICYmIChcclxuICAgICAgICAgICAgICA8QWxlcnQgbWVzc2FnZT17ZXJyb3JNZXNzYWdlfSB0eXBlPVwiaW5mb1wiIHNob3dJY29uIC8+XHJcbiAgICAgICAgICAgICl9PC9wPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFsZXJ0IiwiQnV0dG9uIiwiYXhpb3MiLCJSb3V0ZXIiLCJSZWdpc3RlciIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImVtYWlsIiwic2V0RW1haWwiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImN1cnJlbnR0aW1lIiwiRGF0ZSIsImlzVmFsaWRFbWFpbCIsImVtYWlsUmVnZXgiLCJ0ZXN0IiwicGFzc3dvcmRTdHJvbmciLCJzdHJvbmdSZWdleCIsIl9oYW5kbGVSZWdpc3RlciIsInJlc3VsdCIsIm1ldGhvZCIsIm1heEJvZHlMZW5ndGgiLCJJbmZpbml0eSIsInVybCIsImhlYWRlcnMiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInRvSVNPU3RyaW5nIiwic2xpY2UiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwiZXZlbnRfaGFwcGVuaW5nIiwicHVzaCIsImlzQXhpb3NFcnJvciIsInJlc3BvbnNlIiwibWFpbiIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGl2IiwiZm9ybSIsImxhYmVsIiwiaHRtbEZvciIsImIiLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwibmFtZSIsInJlcXVpcmVkIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvbkNsaWNrIiwicCIsIm1lc3NhZ2UiLCJzaG93SWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/register.tsx\n"));

/***/ })

});