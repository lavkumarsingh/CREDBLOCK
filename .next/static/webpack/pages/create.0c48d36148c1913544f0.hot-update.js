webpackHotUpdate_N_E("pages/create",{

/***/ "./pages/create.js":
/*!*************************!*\
  !*** ./pages/create.js ***!
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









var _jsxFileName = "C:\\Users\\Lav Singh\\Desktop\\CREDSOL\\pages\\create.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// CLIENT SIDE





var Create = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Create, _Component);

  var _super = _createSuper(Create);

  function Create() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Create);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      account: '',
      name: 'Lav',
      course: 'C++',
      hash: 'akhflanf;',
      desc: 'ashlasnc',
      date: 'ashdlas',
      aadhar: '3435435463',
      uni: 'alknsdlknd',
      block: 'block1'
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSubmit", /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var hash, accounts, today, dd, mm, yyyy;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                hash = md5__WEBPACK_IMPORTED_MODULE_13___default()(_this.state.course + _this.state.name + _this.state.organisation);

                _this.setState({
                  hash: hash
                });

                _context.prev = 3;
                _context.next = 6;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__["default"].eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return _ethereum_instance__WEBPACK_IMPORTED_MODULE_11__["default"].methods.generateCertificate(_this.state.account, _this.state.aadhar, _this.state.course, hash).send({
                  gas: '1000000',
                  from: accounts[0]
                });

              case 9:
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);
                console.log(_context.t0);

              case 14:
                // data upload finishes...
                today = new Date();
                dd = String(today.getDate()).padStart(2, '0');
                mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

                yyyy = today.getFullYear();
                today = mm + '/' + dd + '/' + yyyy;

                _this.setState({
                  date: today
                });

                console.log(today);

                _this.setState({
                  block: "block1"
                });

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 11]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Create, [{
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
        className: "jsx-3147763827" + " " + "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 7
        }
      }, __jsx("nav", {
        className: "jsx-3147763827",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }
      }, __jsx("h5", {
        className: "jsx-3147763827",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }
      }, "Certify"), __jsx("div", {
        className: "jsx-3147763827" + " " + "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }
      }, __jsx("ul", {
        className: "jsx-3147763827",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }
      }, __jsx("li", {
        className: "jsx-3147763827",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: "/",
        className: "jsx-3147763827",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 19
        }
      }, "Home")), __jsx("li", {
        className: "jsx-3147763827",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: "/about",
        className: "jsx-3147763827",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 19
        }
      }, "About")), __jsx("li", {
        className: "jsx-3147763827",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: "/create",
        className: "jsx-3147763827",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 19
        }
      }, "Create")), __jsx("li", {
        className: "jsx-3147763827",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: "/verify",
        className: "jsx-3147763827",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 19
        }
      }, "Verify")))), __jsx("h4", {
        className: "jsx-3147763827" + " " + "address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }
      }, this.state.account)), __jsx("div", {
        className: "jsx-3147763827" + " " + "body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 9
        }
      }, __jsx("form", {
        onSubmit: this.onSubmit,
        className: "jsx-3147763827",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "jsx-3147763827",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }
      }, __jsx("h4", {
        className: "jsx-3147763827",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }
      }, "Issuer"), __jsx("input", {
        value: this.state.account,
        className: "jsx-3147763827" + " " + "input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "jsx-3147763827",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }
      }, __jsx("h4", {
        className: "jsx-3147763827",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }
      }, "Aadhar"), __jsx("input", {
        placeholder: "Aadhar...",
        value: this.state.aadhar,
        onChange: function onChange(event) {
          return _this2.setState({
            aadhar: event.target.value
          });
        },
        className: "jsx-3147763827" + " " + "input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "jsx-3147763827",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }
      }, __jsx("h4", {
        className: "jsx-3147763827",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }
      }, "Name"), __jsx("input", {
        placeholder: "Full Name...",
        value: this.state.name,
        onChange: function onChange(event) {
          return _this2.setState({
            name: event.target.value
          });
        },
        className: "jsx-3147763827" + " " + "input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "jsx-3147763827",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }
      }, __jsx("h4", {
        className: "jsx-3147763827",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 13
        }
      }, "Course ID"), __jsx("input", {
        placeholder: "Course ID...",
        value: this.state.course,
        onChange: function onChange(event) {
          return _this2.setState({
            course: event.target.value
          });
        },
        className: "jsx-3147763827" + " " + "input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "jsx-3147763827",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }
      }, __jsx("h4", {
        className: "jsx-3147763827",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 13
        }
      }, "University"), __jsx("input", {
        placeholder: "University name...",
        value: this.state.uni,
        onChange: function onChange(event) {
          return _this2.setState({
            uni: event.target.value
          });
        },
        className: "jsx-3147763827" + " " + "input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "jsx-3147763827",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }
      }, __jsx("h4", {
        className: "jsx-3147763827",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 13
        }
      }, "Description"), __jsx("textarea", {
        placeholder: "Description...",
        value: this.state.desc,
        onChange: function onChange(event) {
          return _this2.setState({
            desc: event.target.value
          });
        },
        className: "jsx-3147763827" + " " + "txt",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }
      })), __jsx("button", {
        className: "jsx-3147763827" + " " + "btn",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }
      }, "Issue Certificate"))), __jsx("div", {
        className: "jsx-3147763827" + " " + (this.state.block || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "jsx-3147763827" + " " + "certificate",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }
      }, __jsx("h4", {
        className: "jsx-3147763827" + " " + "university",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 13
        }
      }, this.state.uni), __jsx("h4", {
        className: "jsx-3147763827" + " " + "date",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 13
        }
      }, this.state.date), __jsx("h4", {
        className: "jsx-3147763827" + " " + "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 13
        }
      }, this.state.name), __jsx("h4", {
        className: "jsx-3147763827" + " " + "course",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 13
        }
      }, this.state.course), __jsx("h4", {
        className: "jsx-3147763827" + " " + "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 13
        }
      }, this.state.desc), __jsx("h4", {
        className: "jsx-3147763827" + " " + "aadhar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 13
        }
      }, "Government Id: ", this.state.aadhar), __jsx("h4", {
        className: "jsx-3147763827" + " " + "account",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 13
        }
      }, "Issued from: ", this.state.account), __jsx("h4", {
        className: "jsx-3147763827" + " " + "hash",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 13
        }
      }, "Credential ID: ", this.state.hash))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "3147763827",
        __self: this
      }, ".certificate.jsx-3147763827{background-color:#353b48;padding:50px 10px 20px 10px;max-width:80vw;height:1000px;margin:200px;margin-top:5%;border-radius:12px;border-style:dashed;border-color:#fff;}.university.jsx-3147763827{font-family:Cinzel;font-size:50px;margin-left:20%;color:#fff;}.date.jsx-3147763827{font-family:Cinzel;font-size:14px;margin-left:20%;color:#fff;}.name.jsx-3147763827{font-family:Cinzel;font-size:28px;margin-left:20%;margin-top:100px;color:#fff;}.course.jsx-3147763827{font-family:Cinzel;font-size:18px;margin-left:20%;margin-top:20px;color:#fff;}.description.jsx-3147763827{font-family:Cinzel;font-size:16px;margin-left:20%;max-width:500px;margin-top:40px;color:#fff;}.aadhar.jsx-3147763827{font-family:Cinzel;font-size:20px;margin-left:20%;max-width:500px;margin-top:100px;color:#fff;}.account.jsx-3147763827{font-family:Cinzel;font-size:16px;margin-left:20%;max-width:500px;margin-top:60px;color:#fff;}.hash.jsx-3147763827{font-family:Cinzel;font-size:16px;margin-left:20%;max-width:500px;margin-top:100px;margin-left:40%;color:#fff;}form.jsx-3147763827{margin-left:30%;margin-top:5%;}.input.jsx-3147763827{border-radius:0;border:0;padding:0;border-radius:8px;height:40px;width:600px;font-family:Montserrat;font-size:22px;padding:10px 60px;background-color:#dcdde1;}.txt.jsx-3147763827{border-radius:0;border:0;padding:0;border-radius:8px;height:200px;width:600px;font-family:Montserrat;font-size:22px;padding:10px 60px;background-color:#dcdde1;}.btn.jsx-3147763827{border-radius:0;border:0;padding:0;border-radius:8px;height:60px;color:#fff;padding:10px 60px;margin-top:20px;margin-left:15%;background-color:#4cd137;margin-bottom:50px;font-family:Montserrat;font-size:28px;font-weight:600;}h4.jsx-3147763827{font-family:Montserrat;font-size:18px;font-weight:600;margin-bottom:10px;}.block1.jsx-3147763827{display:block;}.block0.jsx-3147763827{display:none;}.container.jsx-3147763827{margin:0 50px;position:absolute;top:0;left:0;right:0;margin:0;padding:0;background-color:#f5f6fa;}.body.jsx-3147763827{margin-top:100px;}nav.jsx-3147763827{background-color:#3c40c6;position:absolute;right:0;left:0;top:0;height:60px;}nav.jsx-3147763827 h5.jsx-3147763827{font-family:Montserrat;font-size:30px;color:white;margin:15px 50px;}ul.jsx-3147763827{list-style-type:none;margin:0;padding:0;overflow:hidden;position:absolute;top:0;right:0;}li.jsx-3147763827{float:left;}li.jsx-3147763827 a.jsx-3147763827{display:block;padding:8px;margin-right:40px;font-family:Montserrat;color:#fff;-webkit-text-decoration:none;text-decoration:none;margin-top:10px;}.address.jsx-3147763827{font-family:Montserrat;background-color:#3c40c6;height:15px;padding:20px;border-radius:8px;color:#fff;font-weight:600;position:absolute;top:60px;right:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTGF2IFNpbmdoXFxEZXNrdG9wXFxDUkVEU09MXFxwYWdlc1xcY3JlYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlKb0IsQUFJd0MsQUFXTixBQU9BLEFBUUEsQUFRQSxBQVFBLEFBU0EsQUFTQSxBQVNBLEFBVUgsQUFLQSxBQWFBLEFBYUEsQUFpQk8sQUFPVCxBQUdELEFBR0MsQUFXRyxBQUlRLEFBU0YsQUFPRixBQVVWLEFBSUcsQUFVUyxXQWJ6QixFQTVDQSxDQUhBLEFBTW9CLEFBNkNOLEVBMUdFLEFBS0wsQUFhQSxBQWFBLENBeUNYLEVBNUlpQixBQU9BLEFBUUEsQUFRQSxBQVFBLEFBU0EsQUFTQSxBQVNBLEVBc0dOLEVBNUNNLEFBcUNBLEFBK0JVLEVBbk1HLEFBcUZsQixBQWFBLEFBYUEsQUE0Q1EsQ0ErQkEsSUExR3BCLEFBNEZZLEVBL0JKLEVBaklVLEFBT0EsQUFRQSxBQVFBLEFBUUEsQUFTQSxBQVNBLEFBU0EsQ0FnQkUsQUFhQSxBQWFBLEdBZ0JGLEFBY1QsQUF1QkssRUFRSSxHQWpCUixDQStCZSxDQTVDZixHQXFESSxFQXZMRCxBQU9BLEFBUU0sQUFRRCxBQVFBLEFBU0EsQUFTQSxBQVNBLEFBK0ZDLENBVFYsRUE1SlEsQUFzRkgsQUFhQyxBQWFELEFBK0JILENBZlUsRUE2Q0QsRUFoQlosRUF1Q08sQ0F2TGYsQUFRQSxDQTJIWSxFQWNFLENBdkVBLEFBMEJELENBN0VBLEFBUUssQUFTQyxBQVNELEFBU0MsQUE2QkwsQ0F4RUQsQUEwSWIsQUFxQmEsQ0ExTEcsSUFnSlcsQ0FoQjNCLEFBb0VvQixDQXZCWixFQTVEWSxBQTZDcEIsQ0ExSEEsQUFtRHlCLENBM0R6QixBQXdFeUIsQUF1RkYsRUFiYixFQTdLSyxBQTJDRixBQWtCQSxDQVRBLEFBa0JLLEtBd0dsQixHQXNCYSxFQXhKYixBQWtCQSxDQVRBLEFBNERrQixDQWhIRixFQStJaEIsRUF6RWEsQ0FnQkksQ0FhQSxDQWlHQyxPQW5NRyxDQXNFckIsQUEwQ2tCLEtBMUJFLENBYUEsRUFpR0EsUUFuRk8sRUFoSEwsQUF3TEosS0FsR1MsQ0FhQSxFQWlHaEIsUUFYWCxDQVlhLEdBcE1PLEdBZ0hDLEtBcUZyQixFQS9HQSxDQWFBLE9BbEdBLElBZ0h5Qix1QkFDUixlQUNDLGdCQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXExhdiBTaW5naFxcRGVza3RvcFxcQ1JFRFNPTFxccGFnZXNcXGNyZWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENMSUVOVCBTSURFXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBpbnN0YW5jZSBmcm9tICcuLi9ldGhlcmV1bS9pbnN0YW5jZSc7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xyXG5pbXBvcnQgbWQ1IGZyb20gJ21kNSc7XHJcblxyXG5jbGFzcyBDcmVhdGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgYWNjb3VudDogJycsXHJcbiAgICBuYW1lOiAnTGF2JyxcclxuICAgIGNvdXJzZTogJ0MrKycsXHJcbiAgICBoYXNoOiAnYWtoZmxhbmY7JyxcclxuICAgIGRlc2M6ICdhc2hsYXNuYycsXHJcbiAgICBkYXRlOiAnYXNoZGxhcycsXHJcbiAgICBhYWRoYXI6ICczNDM1NDM1NDYzJyxcclxuICAgIHVuaTogJ2Fsa25zZGxrbmQnLFxyXG4gICAgYmxvY2s6ICdibG9jazEnXHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBoYXNoID0gbWQ1KHRoaXMuc3RhdGUuY291cnNlICsgdGhpcy5zdGF0ZS5uYW1lICsgdGhpcy5zdGF0ZS5vcmdhbmlzYXRpb24pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhhc2ggfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgIGF3YWl0IGluc3RhbmNlXHJcbiAgICAgICAgLm1ldGhvZHMuZ2VuZXJhdGVDZXJ0aWZpY2F0ZSh0aGlzLnN0YXRlLmFjY291bnQsIHRoaXMuc3RhdGUuYWFkaGFyLCB0aGlzLnN0YXRlLmNvdXJzZSwgaGFzaClcclxuICAgICAgICAuc2VuZCh7IGdhczogJzEwMDAwMDAnLCBmcm9tOiBhY2NvdW50c1swXX0pO1xyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICAgIC8vIGRhdGEgdXBsb2FkIGZpbmlzaGVzLi4uXHJcbiAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFyIGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgIHZhciBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy9KYW51YXJ5IGlzIDAhXHJcbiAgICB2YXIgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgdG9kYXkgPSBtbSArICcvJyArIGRkICsgJy8nICsgeXl5eTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRlOiB0b2RheSB9KTtcclxuICAgIGNvbnNvbGUubG9nKHRvZGF5KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBibG9jazogXCJibG9jazFcIiB9KTtcclxuXHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgICB3ZWIzLmV0aC5nZXRBY2NvdW50cygpLnRoZW4oIGFjY291bnQgPT4ge1xyXG4gICAgICAgIGlmKGFjY291bnRbMF0gIT09ICcnKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogYWNjb3VudFswXSB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogJ0xvZ2luIHRvIHlvdXIgTWV0YW1hc2snIH0pXHJcbiAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgPGg1PkNlcnRpZnk8L2g1PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL1wiPkhvbWU8L2E+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvY3JlYXRlXCI+Q3JlYXRlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvdmVyaWZ5XCI+VmVyaWZ5PC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiYWRkcmVzc1wiPnt0aGlzLnN0YXRlLmFjY291bnR9PC9oND5cclxuICAgICAgICA8L25hdj5cclxuXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cclxuXHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg0Pklzc3VlcjwvaDQ+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hY2NvdW50fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg0PkFhZGhhcjwvaDQ+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFhZGhhci4uLlwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWFkaGFyfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgYWFkaGFyOiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDQ+TmFtZTwvaDQ+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZ1bGwgTmFtZS4uLlwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoND5Db3Vyc2UgSUQ8L2g0PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb3Vyc2UgSUQuLi5cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNvdXJzZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvdXJzZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg0PlVuaXZlcnNpdHk8L2g0PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVbml2ZXJzaXR5IG5hbWUuLi5cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVuaX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IHVuaTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg0PkRlc2NyaXB0aW9uPC9oND5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uLi4uXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgZGVzYzogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiPklzc3VlIENlcnRpZmljYXRlPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5ibG9ja30+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlcnRpZmljYXRlXCI+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ1bml2ZXJzaXR5XCI+e3RoaXMuc3RhdGUudW5pfTwvaDQ+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJkYXRlXCI+e3RoaXMuc3RhdGUuZGF0ZX08L2g0PlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibmFtZVwiPnt0aGlzLnN0YXRlLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNvdXJzZVwiPnt0aGlzLnN0YXRlLmNvdXJzZX08L2g0PlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57dGhpcy5zdGF0ZS5kZXNjfTwvaDQ+XHJcblxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiYWFkaGFyXCI+R292ZXJubWVudCBJZDoge3RoaXMuc3RhdGUuYWFkaGFyfTwvaDQ+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJhY2NvdW50XCI+SXNzdWVkIGZyb206IHt0aGlzLnN0YXRlLmFjY291bnR9PC9oND5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImhhc2hcIj5DcmVkZW50aWFsIElEOiB7dGhpcy5zdGF0ZS5oYXNofTwvaDQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAgICAgLmNlcnRpZmljYXRlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzYjQ4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggMTBweCAyMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MHZ3O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMjAwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcclxuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnVuaXZlcnNpdHkge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDaW56ZWw7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogQ2luemVsO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDaW56ZWw7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb3Vyc2Uge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDaW56ZWw7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogQ2luemVsO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmFhZGhhciB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENpbnplbDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYWNjb3VudCB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENpbnplbDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5oYXNoIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogQ2luemVsO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmlucHV0IHtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDYwcHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjZGRlMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnR4dCB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNjBweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkZGUxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA2MHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNkMTM3O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYmxvY2sxIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYmxvY2swIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCA1MHB4O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZhO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYm9keSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hdiB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNjNDBjNjtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYXYgaDUge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxpIGEge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5hZGRyZXNzIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M0MGM2O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDYwcHg7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Lav Singh\\\\Desktop\\\\CREDSOL\\\\pages\\\\create.js */"));
    }
  }]);

  return Create;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Create);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXRlLmpzIl0sIm5hbWVzIjpbIkNyZWF0ZSIsImFjY291bnQiLCJuYW1lIiwiY291cnNlIiwiaGFzaCIsImRlc2MiLCJkYXRlIiwiYWFkaGFyIiwidW5pIiwiYmxvY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJtZDUiLCJzdGF0ZSIsIm9yZ2FuaXNhdGlvbiIsInNldFN0YXRlIiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJpbnN0YW5jZSIsIm1ldGhvZHMiLCJnZW5lcmF0ZUNlcnRpZmljYXRlIiwic2VuZCIsImdhcyIsImZyb20iLCJjb25zb2xlIiwibG9nIiwidG9kYXkiLCJEYXRlIiwiZGQiLCJTdHJpbmciLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtbSIsImdldE1vbnRoIiwieXl5eSIsImdldEZ1bGxZZWFyIiwidGhlbiIsIm9uU3VibWl0IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLE07Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsYUFBTyxFQUFFLEVBREg7QUFFTkMsVUFBSSxFQUFFLEtBRkE7QUFHTkMsWUFBTSxFQUFFLEtBSEY7QUFJTkMsVUFBSSxFQUFFLFdBSkE7QUFLTkMsVUFBSSxFQUFFLFVBTEE7QUFNTkMsVUFBSSxFQUFFLFNBTkE7QUFPTkMsWUFBTSxFQUFFLFlBUEY7QUFRTkMsU0FBRyxFQUFFLFlBUkM7QUFTTkMsV0FBSyxFQUFFO0FBVEQsSzs7O2tNQVlHLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNUQSxpQkFBQyxDQUFDQyxjQUFGO0FBQ01QLG9CQUZHLEdBRUlRLDJDQUFHLENBQUMsTUFBS0MsS0FBTCxDQUFXVixNQUFYLEdBQW9CLE1B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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQTRCLEtBQUtJLEtBQUwsQ0FBV0wsR0FBdkMsQ0FERixFQUVFO0FBQUEsNENBQWMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXNCLEtBQUtLLEtBQUwsQ0FBV1AsSUFBakMsQ0FGRixFQUdFO0FBQUEsNENBQWMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXNCLEtBQUtPLEtBQUwsQ0FBV1gsSUFBakMsQ0FIRixFQUlFO0FBQUEsNENBQWMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXdCLEtBQUtXLEtBQUwsQ0FBV1YsTUFBbkMsQ0FKRixFQUtFO0FBQUEsNENBQWMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQTZCLEtBQUtVLEtBQUwsQ0FBV1IsSUFBeEMsQ0FMRixFQU9FO0FBQUEsNENBQWMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUF1QyxLQUFLUSxLQUFMLENBQVdOLE1BQWxELENBUEYsRUFRRTtBQUFBLDRDQUFjLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBc0MsS0FBS00sS0FBTCxDQUFXWixPQUFqRCxDQVJGLEVBU0U7QUFBQSw0Q0FBYyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQXFDLEtBQUtZLEtBQUwsQ0FBV1QsSUFBaEQsQ0FURixDQURGLENBckZGO0FBQUE7QUFBQTtBQUFBLDY0a0JBREY7QUF5VEQ7Ozs7RUF4V2tCdUMsZ0Q7O0FBMldOM0MscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3JlYXRlLjBjNDhkMzYxNDhjMTkxMzU0NGYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDTElFTlQgU0lERVxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgaW5zdGFuY2UgZnJvbSAnLi4vZXRoZXJldW0vaW5zdGFuY2UnO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IG1kNSBmcm9tICdtZDUnO1xyXG5cclxuY2xhc3MgQ3JlYXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGFjY291bnQ6ICcnLFxyXG4gICAgbmFtZTogJ0xhdicsXHJcbiAgICBjb3Vyc2U6ICdDKysnLFxyXG4gICAgaGFzaDogJ2FraGZsYW5mOycsXHJcbiAgICBkZXNjOiAnYXNobGFzbmMnLFxyXG4gICAgZGF0ZTogJ2FzaGRsYXMnLFxyXG4gICAgYWFkaGFyOiAnMzQzNTQzNTQ2MycsXHJcbiAgICB1bmk6ICdhbGtuc2Rsa25kJyxcclxuICAgIGJsb2NrOiAnYmxvY2sxJ1xyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgaGFzaCA9IG1kNSh0aGlzLnN0YXRlLmNvdXJzZSArIHRoaXMuc3RhdGUubmFtZSArIHRoaXMuc3RhdGUub3JnYW5pc2F0aW9uKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNoIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICBhd2FpdCBpbnN0YW5jZVxyXG4gICAgICAgIC5tZXRob2RzLmdlbmVyYXRlQ2VydGlmaWNhdGUodGhpcy5zdGF0ZS5hY2NvdW50LCB0aGlzLnN0YXRlLmFhZGhhciwgdGhpcy5zdGF0ZS5jb3Vyc2UsIGhhc2gpXHJcbiAgICAgICAgLnNlbmQoeyBnYXM6ICcxMDAwMDAwJywgZnJvbTogYWNjb3VudHNbMF19KTtcclxuICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgICAvLyBkYXRhIHVwbG9hZCBmaW5pc2hlcy4uLlxyXG4gICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIHZhciBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICB2YXIgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7IC8vSmFudWFyeSBpcyAwIVxyXG4gICAgdmFyIHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgIHRvZGF5ID0gbW0gKyAnLycgKyBkZCArICcvJyArIHl5eXk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGF0ZTogdG9kYXkgfSk7XHJcbiAgICBjb25zb2xlLmxvZyh0b2RheSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYmxvY2s6IFwiYmxvY2sxXCIgfSk7XHJcblxyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgICAgd2ViMy5ldGguZ2V0QWNjb3VudHMoKS50aGVuKCBhY2NvdW50ID0+IHtcclxuICAgICAgICBpZihhY2NvdW50WzBdICE9PSAnJyl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6IGFjY291bnRbMF0gfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6ICdMb2dpbiB0byB5b3VyIE1ldGFtYXNrJyB9KVxyXG4gICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgIDxoNT5DZXJ0aWZ5PC9oNT5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9cIj5Ib21lPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2NyZWF0ZVwiPkNyZWF0ZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL3ZlcmlmeVwiPlZlcmlmeTwvYT48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImFkZHJlc3NcIj57dGhpcy5zdGF0ZS5hY2NvdW50fTwvaDQ+XHJcbiAgICAgICAgPC9uYXY+XHJcblxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XHJcblxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoND5Jc3N1ZXI8L2g0PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWNjb3VudH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoND5BYWRoYXI8L2g0PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBYWRoYXIuLi5cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFhZGhhcn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IGFhZGhhcjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg0Pk5hbWU8L2g0PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGdWxsIE5hbWUuLi5cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDQ+Q291cnNlIElEPC9oND5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ291cnNlIElELi4uXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jb3Vyc2V9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBjb3Vyc2U6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoND5Vbml2ZXJzaXR5PC9oND5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVW5pdmVyc2l0eSBuYW1lLi4uXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS51bml9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyB1bmk6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoND5EZXNjcmlwdGlvbjwvaDQ+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbi4uLlwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVzY31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IGRlc2M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIj5Jc3N1ZSBDZXJ0aWZpY2F0ZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuYmxvY2t9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZXJ0aWZpY2F0ZVwiPlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidW5pdmVyc2l0eVwiPnt0aGlzLnN0YXRlLnVuaX08L2g0PlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZGF0ZVwiPnt0aGlzLnN0YXRlLmRhdGV9PC9oND5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm5hbWVcIj57dGhpcy5zdGF0ZS5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjb3Vyc2VcIj57dGhpcy5zdGF0ZS5jb3Vyc2V9PC9oND5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e3RoaXMuc3RhdGUuZGVzY308L2g0PlxyXG5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImFhZGhhclwiPkdvdmVybm1lbnQgSWQ6IHt0aGlzLnN0YXRlLmFhZGhhcn08L2g0PlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiYWNjb3VudFwiPklzc3VlZCBmcm9tOiB7dGhpcy5zdGF0ZS5hY2NvdW50fTwvaDQ+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJoYXNoXCI+Q3JlZGVudGlhbCBJRDoge3RoaXMuc3RhdGUuaGFzaH08L2g0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG5cclxuICAgICAgICAgIC5jZXJ0aWZpY2F0ZSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM1M2I0ODtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDEwcHggMjBweCAxMHB4O1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogODB2dztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDIwMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC51bml2ZXJzaXR5IHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogQ2luemVsO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGF0ZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENpbnplbDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogQ2luemVsO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY291cnNlIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogQ2luemVsO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENpbnplbDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5hYWRoYXIge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDaW56ZWw7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmFjY291bnQge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDaW56ZWw7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaGFzaCB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENpbnplbDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pbnB1dCB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA2MHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2RkZTE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50eHQge1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDYwcHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjZGRlMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRjZDEzNztcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJsb2NrMSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJsb2NrMCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgNTBweDtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmYTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJvZHkge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYXYge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzYzQwYzY7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmF2IGg1IHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMTVweCA1MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsaSBhIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYWRkcmVzcyB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNjNDBjNjtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgdG9wOiA2MHB4O1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==