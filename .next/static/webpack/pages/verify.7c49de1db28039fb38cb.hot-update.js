webpackHotUpdate_N_E("pages/verify",{

/***/ "./pages/verify.js":
/*!*************************!*\
  !*** ./pages/verify.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ethereum_instance__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ethereum/instance */ "./ethereum/instance.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_13__);









var _jsxFileName = "C:\\Users\\Lav Singh\\Desktop\\CREDSOL\\pages\\verify.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// CLIENT SIDE



 // 098bc8ecc4b72c6ea5d165a654bafd5f

var Verify = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Verify, _Component);

  var _super = _createSuper(Verify);

  function Verify() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Verify);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      account: '',
      address: 'ajjadan ',
      aadhar: '3434364343',
      course: 'c++',
      hashId: '098bc8ecc4b72c6ea5d165a654bafd5f',
      block: 'block1'
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onFetch", /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var getbykey;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _context.prev = 1;
                _context.next = 4;
                return _ethereum_instance__WEBPACK_IMPORTED_MODULE_11__["default"].methods.getValue(_this.state.hash).call().then(function (result) {
                  console.log(result[0], result[1], result[2], result[3]);

                  _this.setState({
                    address: result[0]
                  });

                  _this.setState({
                    aadhar: result[1]
                  });

                  _this.setState({
                    course: result[2]
                  });

                  _this.setState({
                    hashId: result[3]
                  });
                });

              case 4:
                getbykey = _context.sent;
                console.log(getbykey);

                _this.setState({
                  block: 'block1'
                });

                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Verify, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__["default"].eth.getAccounts().then(function (account) {
        if (account[0] !== '') {
          _this2.setState({
            account: account[0]
          });
        } else {
          _this2.setState({
            account: 'Login to your Metamask'
          });
        }
      });
      return __jsx("div", {
        className: "jsx-618588217" + " " + "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 7
        }
      }, __jsx("nav", {
        className: "jsx-618588217",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }
      }, __jsx("h5", {
        className: "jsx-618588217",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }
      }, "Certify"), __jsx("div", {
        className: "jsx-618588217" + " " + "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }
      }, __jsx("ul", {
        className: "jsx-618588217",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }
      }, __jsx("li", {
        className: "jsx-618588217",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: "/",
        className: "jsx-618588217",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 19
        }
      }, "Home")), __jsx("li", {
        className: "jsx-618588217",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: "/about",
        className: "jsx-618588217",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 19
        }
      }, "About")), __jsx("li", {
        className: "jsx-618588217",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: "/create",
        className: "jsx-618588217",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 19
        }
      }, "Create")), __jsx("li", {
        className: "jsx-618588217",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: "/verify",
        className: "jsx-618588217",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 19
        }
      }, "Verify")))), __jsx("h4", {
        className: "jsx-618588217" + " " + "address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }
      }, this.state.account)), __jsx("div", {
        className: "jsx-618588217" + " " + "body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 9
        }
      }, __jsx("form", {
        onSubmit: this.onFetch,
        className: "jsx-618588217",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "jsx-618588217",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }
      }, __jsx("input", {
        value: this.state.hash,
        placeholder: "Enter the hash...",
        onChange: function onChange(event) {
          return _this2.setState({
            hash: event.target.value
          });
        },
        className: "jsx-618588217" + " " + "input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }
      })), __jsx("button", {
        className: "jsx-618588217" + " " + "btn",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }
      }, "Verify"), __jsx("h2", {
        className: "jsx-618588217",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }
      }, this.state.fetch)), __jsx("div", {
        className: "jsx-618588217" + " " + (this.state.block || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "jsx-618588217" + " " + "certificate",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }
      }, __jsx("h2", {
        className: "jsx-618588217",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 15
        }
      }, "Credential id"), __jsx("p", {
        className: "jsx-618588217",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 15
        }
      }, this.state.hashId), __jsx("br", {
        className: "jsx-618588217",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 15
        }
      }), __jsx("hr", {
        className: "jsx-618588217",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 20
        }
      }), __jsx("h2", {
        className: "jsx-618588217",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 15
        }
      }, "Government id"), __jsx("p", {
        className: "jsx-618588217",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 15
        }
      }, this.state.aadhar), __jsx("br", {
        className: "jsx-618588217",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 15
        }
      }), __jsx("hr", {
        className: "jsx-618588217",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 20
        }
      }), __jsx("h2", {
        className: "jsx-618588217",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 15
        }
      }, "Issued by"), __jsx("p", {
        className: "jsx-618588217",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 15
        }
      }, this.state.address), __jsx("br", {
        className: "jsx-618588217",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 15
        }
      }), __jsx("hr", {
        className: "jsx-618588217",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 20
        }
      }), __jsx("h2", {
        className: "jsx-618588217",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 15
        }
      }, "Course"), __jsx("p", {
        className: "jsx-618588217",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 15
        }
      }, this.state.course)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "618588217",
        __self: this
      }, "form.jsx-618588217{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:15%;margin-left:28%;}p.jsx-618588217{font-family:Montserrat;font-size:18px;color:#fff;}h2.jsx-618588217{font-family:Montserrat;font-size:18px;color:#fff;}hr.jsx-618588217{margin-left:-400px;width:1000px;}.btn.jsx-618588217{height:60px;width:150px;border:0;border-radius:0 8px 8px 0;font-family:Montserrat;font-size:24px;background-color:#44bd32;color:#fff;font-family:Montserrat;font-size:28px;font-weight:600;}.input.jsx-618588217{border:0;border-radius:8px 0 0 8px;height:40px;width:600px;font-family:Montserrat;font-size:24px;padding:10px 60px;background-color:#dcdde1;}.certificate.jsx-618588217{background-color:#d1ccc0;padding:50px 500px;width:200px;margin:380px;margin-top:5%;border-radius:12px;}.block1.jsx-618588217{display:block;}.block0.jsx-618588217{display:none;}.container.jsx-618588217{margin:0 50px;position:absolute;top:0;left:0;right:0;margin:0;padding:0;background-color:#f5f6fa;}.body.jsx-618588217{margin-top:100px;}nav.jsx-618588217{background-color:#16a085;position:absolute;right:0;left:0;top:0;height:60px;}nav.jsx-618588217 h5.jsx-618588217{font-family:Montserrat;font-size:30px;color:white;margin:15px 50px;}ul.jsx-618588217{list-style-type:none;margin:0;padding:0;overflow:hidden;position:absolute;top:0;right:0;}li.jsx-618588217{float:left;}li.jsx-618588217 a.jsx-618588217{display:block;padding:8px;margin-right:40px;font-family:Montserrat;color:#fff;-webkit-text-decoration:none;text-decoration:none;margin-top:10px;}.address.jsx-618588217{font-family:Montserrat;background-color:#16a085;height:15px;padding:20px;border-radius:8px;color:#fff;font-weight:600;position:absolute;top:60px;right:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTGF2IFNpbmdoXFxEZXNrdG9wXFxDUkVEU09MXFxwYWdlc1xcdmVyaWZ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStGb0IsQUFHNEIsQUFLVSxBQUtBLEFBS0osQUFJUCxBQWFILEFBVWdCLEFBU1gsQUFHRCxBQUlDLEFBV0csQUFJUSxBQVNGLEFBT0YsQUFVVixBQUlHLEFBVVMsU0FoRkcsRUFtRTVCLENBaEZjLENBbUNkLENBSEEsQUFPb0IsQUE2Q04sR0FsQ2QsRUF0RGUsRUEwRUosRUFwRk0sQUFLQSxBQXdFQSxBQStCVSxDQTdGaEIsQ0FzQlUsQUErQkQsQ0ErQkEsSUFkUixFQTFFWixBQTJDUSxDQXRDb0IsRUFZZCxHQTNCRCxBQUtBLEFBaURKLEFBdUJLLEVBUUksR0FqQlIsQ0EvQkksQUE4RFcsQ0E1Q2YsRUEzQkksQ0FnRkEsQ0EzR2QsQUFLQSxDQXdFbUIsQ0FUVixFQWJFLEdBbEJJLEFBZ0RLLEVBaEJaLENBdERpQixBQWFBLENBZ0ZWLEVBcERILEVBY0UsR0FRZCxBQXFCYSxFQTdERyxHQW1CVyxDQW9EUCxDQXBISCxBQTZGVCxFQWZSLEVBNkJ1QixFQWJiLEVBdkVPLEFBYUEsQ0FVSSxLQWlEckIsQ0E5RmtCLEVBb0hMLE1BN0ZjLEFBYVAsQUE0QnBCLEtBbEJBLEFBdUVrQixHQXBIbEIsVUFvQzJCLEdBaUZQLElBOUZQLE1BbUZLLEtBbEZPLEdBOEZkLElBakZYLElBc0VBLENBWWEsV0E5RkksQUErRmpCLGVBOUZrQixnQkFDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxMYXYgU2luZ2hcXERlc2t0b3BcXENSRURTT0xcXHBhZ2VzXFx2ZXJpZnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDTElFTlQgU0lERVxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgaW5zdGFuY2UgZnJvbSAnLi4vZXRoZXJldW0vaW5zdGFuY2UnO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IG1kNSBmcm9tICdtZDUnO1xyXG4vLyAwOThiYzhlY2M0YjcyYzZlYTVkMTY1YTY1NGJhZmQ1ZlxyXG5jbGFzcyBWZXJpZnkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgYWNjb3VudDogJycsXHJcbiAgICBhZGRyZXNzOiAnYWpqYWRhbiAnLFxyXG4gICAgYWFkaGFyOiAnMzQzNDM2NDM0MycsXHJcbiAgICBjb3Vyc2U6ICdjKysnLFxyXG4gICAgaGFzaElkOiAnMDk4YmM4ZWNjNGI3MmM2ZWE1ZDE2NWE2NTRiYWZkNWYnLFxyXG4gICAgYmxvY2s6ICdibG9jazEnXHJcbiAgfVxyXG5cclxuICBvbkZldGNoID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBnZXRieWtleSA9IGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuZ2V0VmFsdWUodGhpcy5zdGF0ZS5oYXNoKVxyXG4gICAgICAgIC5jYWxsKCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0WzBdLCByZXN1bHRbMV0sIHJlc3VsdFsyXSwgcmVzdWx0WzNdKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FkZHJlc3M6IHJlc3VsdFswXX0pO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWFkaGFyOiByZXN1bHRbMV19KTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvdXJzZTogcmVzdWx0WzJdfSk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtoYXNoSWQ6IHJlc3VsdFszXX0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGdldGJ5a2V5KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYmxvY2s6ICdibG9jazEnIH0pO1xyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB3ZWIzLmV0aC5nZXRBY2NvdW50cygpLnRoZW4oIGFjY291bnQgPT4ge1xyXG4gICAgICBpZihhY2NvdW50WzBdICE9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiBhY2NvdW50WzBdIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6ICdMb2dpbiB0byB5b3VyIE1ldGFtYXNrJyB9KVxyXG4gICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICA8aDU+Q2VydGlmeTwvaDU+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvXCI+SG9tZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L2E+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9jcmVhdGVcIj5DcmVhdGU8L2E+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi92ZXJpZnlcIj5WZXJpZnk8L2E+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJhZGRyZXNzXCI+e3RoaXMuc3RhdGUuYWNjb3VudH08L2g0PlxyXG4gICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cclxuXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25GZXRjaH0+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmhhc2h9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgaGFzaC4uLlwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBoYXNoOiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiPlZlcmlmeTwvYnV0dG9uPlxyXG4gICAgICAgICAgPGgyPnt0aGlzLnN0YXRlLmZldGNofTwvaDI+XHJcbiAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmJsb2NrfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZXJ0aWZpY2F0ZVwiPlxyXG4gICAgICAgICAgICAgIDxoMj5DcmVkZW50aWFsIGlkPC9oMj5cclxuICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5oYXNoSWR9PC9wPlxyXG4gICAgICAgICAgICAgIDxici8+PGhyLz5cclxuICAgICAgICAgICAgICA8aDI+R292ZXJubWVudCBpZDwvaDI+XHJcbiAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuYWFkaGFyfTwvcD5cclxuICAgICAgICAgICAgICA8YnIvPjxoci8+XHJcbiAgICAgICAgICAgICAgPGgyPklzc3VlZCBieTwvaDI+XHJcbiAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuYWRkcmVzc308L3A+XHJcbiAgICAgICAgICAgICAgPGJyLz48aHIvPlxyXG4gICAgICAgICAgICAgIDxoMj5Db3Vyc2U8L2gyPlxyXG4gICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLmNvdXJzZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI4JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBociB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC00MDBweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgOHB4IDhweCAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRiZDMyO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbnB1dCB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweCAwIDAgOHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNjBweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkZGUxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jZXJ0aWZpY2F0ZSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2NjMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDUwMHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDM4MHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ibG9jazEge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ibG9jazAge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCA1MHB4O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZhO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYm9keSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hdiB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE2YTA4NTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYXYgaDUge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxpIGEge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5hZGRyZXNzIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTZhMDg1O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDYwcHg7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmVyaWZ5O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Lav Singh\\\\Desktop\\\\CREDSOL\\\\pages\\\\verify.js */"));
    }
  }]);

  return Verify;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Verify);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmVyaWZ5LmpzIl0sIm5hbWVzIjpbIlZlcmlmeSIsImFjY291bnQiLCJhZGRyZXNzIiwiYWFkaGFyIiwiY291cnNlIiwiaGFzaElkIiwiYmxvY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnN0YW5jZSIsIm1ldGhvZHMiLCJnZXRWYWx1ZSIsInN0YXRlIiwiaGFzaCIsImNhbGwiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiZ2V0YnlrZXkiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJvbkZldGNoIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZldGNoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7SUFDTUEsTTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyxhQUFPLEVBQUUsRUFESDtBQUVOQyxhQUFPLEVBQUUsVUFGSDtBQUdOQyxZQUFNLEVBQUUsWUFIRjtBQUlOQyxZQUFNLEVBQUUsS0FKRjtBQUtOQyxZQUFNLEVBQUUsa0NBTEY7QUFNTkMsV0FBSyxFQUFFO0FBTkQsSzs7O2tNQVNFLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSQSxpQkFBQyxDQUFDQyxjQUFGO0FBRFE7QUFBQTtBQUFBLHVCQUlpQkMsMkRBQVEsQ0FBQ0MsT0FBVCxDQUFpQkMsUUFBakIsQ0FBMEIsTUFBS0MsS0FBTCxDQUFXQyxJQUFyQyxFQUNwQkMsSUFEb0IsR0FDYkMsSUFEYSxDQUNSLFVBQUFDLE1BQU0sRUFBSTtBQUNyQkMseUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFNLENBQUMsQ0FBRCxDQUFsQixFQUF1QkEsTUFBTSxDQUFDLENBQUQsQ0FBN0IsRUFBa0NBLE1BQU0sQ0FBQyxDQUFELENBQXhDLEVBQTZDQSxNQUFN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VCxNQUFmLENBTEYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFORixFQU1PO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU5QLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUksS0FBS1MsS0FBTCxDQUFXVixPQUFmLENBUkYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFURixFQVNPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVRQLEVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZGLEVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUksS0FBS1UsS0FBTCxDQUFXUixNQUFmLENBWEYsQ0FERixDQWpCRixDQWpCRjtBQUFBO0FBQUE7QUFBQSw2NVdBREY7QUFzTEQ7Ozs7RUEzTmtCeUIsZ0Q7O0FBOE5ON0IscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmVyaWZ5LjdjNDlkZTFkYjI4MDM5ZmIzOGNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDTElFTlQgU0lERVxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgaW5zdGFuY2UgZnJvbSAnLi4vZXRoZXJldW0vaW5zdGFuY2UnO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IG1kNSBmcm9tICdtZDUnO1xyXG4vLyAwOThiYzhlY2M0YjcyYzZlYTVkMTY1YTY1NGJhZmQ1ZlxyXG5jbGFzcyBWZXJpZnkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgYWNjb3VudDogJycsXHJcbiAgICBhZGRyZXNzOiAnYWpqYWRhbiAnLFxyXG4gICAgYWFkaGFyOiAnMzQzNDM2NDM0MycsXHJcbiAgICBjb3Vyc2U6ICdjKysnLFxyXG4gICAgaGFzaElkOiAnMDk4YmM4ZWNjNGI3MmM2ZWE1ZDE2NWE2NTRiYWZkNWYnLFxyXG4gICAgYmxvY2s6ICdibG9jazEnXHJcbiAgfVxyXG5cclxuICBvbkZldGNoID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBnZXRieWtleSA9IGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuZ2V0VmFsdWUodGhpcy5zdGF0ZS5oYXNoKVxyXG4gICAgICAgIC5jYWxsKCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0WzBdLCByZXN1bHRbMV0sIHJlc3VsdFsyXSwgcmVzdWx0WzNdKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FkZHJlc3M6IHJlc3VsdFswXX0pO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWFkaGFyOiByZXN1bHRbMV19KTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvdXJzZTogcmVzdWx0WzJdfSk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtoYXNoSWQ6IHJlc3VsdFszXX0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGdldGJ5a2V5KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYmxvY2s6ICdibG9jazEnIH0pO1xyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB3ZWIzLmV0aC5nZXRBY2NvdW50cygpLnRoZW4oIGFjY291bnQgPT4ge1xyXG4gICAgICBpZihhY2NvdW50WzBdICE9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiBhY2NvdW50WzBdIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6ICdMb2dpbiB0byB5b3VyIE1ldGFtYXNrJyB9KVxyXG4gICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICA8aDU+Q2VydGlmeTwvaDU+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvXCI+SG9tZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L2E+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9jcmVhdGVcIj5DcmVhdGU8L2E+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi92ZXJpZnlcIj5WZXJpZnk8L2E+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJhZGRyZXNzXCI+e3RoaXMuc3RhdGUuYWNjb3VudH08L2g0PlxyXG4gICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cclxuXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25GZXRjaH0+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmhhc2h9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgaGFzaC4uLlwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBoYXNoOiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiPlZlcmlmeTwvYnV0dG9uPlxyXG4gICAgICAgICAgPGgyPnt0aGlzLnN0YXRlLmZldGNofTwvaDI+XHJcbiAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmJsb2NrfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZXJ0aWZpY2F0ZVwiPlxyXG4gICAgICAgICAgICAgIDxoMj5DcmVkZW50aWFsIGlkPC9oMj5cclxuICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5oYXNoSWR9PC9wPlxyXG4gICAgICAgICAgICAgIDxici8+PGhyLz5cclxuICAgICAgICAgICAgICA8aDI+R292ZXJubWVudCBpZDwvaDI+XHJcbiAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuYWFkaGFyfTwvcD5cclxuICAgICAgICAgICAgICA8YnIvPjxoci8+XHJcbiAgICAgICAgICAgICAgPGgyPklzc3VlZCBieTwvaDI+XHJcbiAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuYWRkcmVzc308L3A+XHJcbiAgICAgICAgICAgICAgPGJyLz48aHIvPlxyXG4gICAgICAgICAgICAgIDxoMj5Db3Vyc2U8L2gyPlxyXG4gICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLmNvdXJzZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI4JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBociB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC00MDBweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgOHB4IDhweCAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRiZDMyO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbnB1dCB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweCAwIDAgOHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNjBweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkZGUxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jZXJ0aWZpY2F0ZSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2NjMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDUwMHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDM4MHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ibG9jazEge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ibG9jazAge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCA1MHB4O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZhO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYm9keSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hdiB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE2YTA4NTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYXYgaDUge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxpIGEge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5hZGRyZXNzIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTZhMDg1O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDYwcHg7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmVyaWZ5O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9