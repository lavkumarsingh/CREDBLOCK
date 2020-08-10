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
      name: '',
      course: '',
      hash: '',
      desc: '',
      date: '',
      aadhar: '',
      uni: '',
      block: 'block0'
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
        className: "jsx-1407384199" + " " + "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 7
        }
      }, __jsx("nav", {
        className: "jsx-1407384199",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }
      }, __jsx("h5", {
        className: "jsx-1407384199",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }
      }, "Certify"), __jsx("div", {
        className: "jsx-1407384199" + " " + "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }
      }, __jsx("ul", {
        className: "jsx-1407384199",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }
      }, __jsx("li", {
        className: "jsx-1407384199",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: "/",
        className: "jsx-1407384199",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 19
        }
      }, "Home")), __jsx("li", {
        className: "jsx-1407384199",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: "/about",
        className: "jsx-1407384199",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 19
        }
      }, "About")), __jsx("li", {
        className: "jsx-1407384199",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: "/create",
        className: "jsx-1407384199",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 19
        }
      }, "Create")), __jsx("li", {
        className: "jsx-1407384199",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: "/verify",
        className: "jsx-1407384199",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 19
        }
      }, "Verify")))), __jsx("h4", {
        className: "jsx-1407384199" + " " + "address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }
      }, this.state.account)), __jsx("div", {
        className: "jsx-1407384199" + " " + "body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 9
        }
      }, __jsx("form", {
        onSubmit: this.onSubmit,
        className: "jsx-1407384199",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "jsx-1407384199",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }
      }, __jsx("h4", {
        className: "jsx-1407384199",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }
      }, "Issuer"), __jsx("input", {
        value: this.state.account,
        className: "jsx-1407384199" + " " + "input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "jsx-1407384199",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }
      }, __jsx("h4", {
        className: "jsx-1407384199",
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
        className: "jsx-1407384199" + " " + "input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "jsx-1407384199",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }
      }, __jsx("h4", {
        className: "jsx-1407384199",
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
        className: "jsx-1407384199" + " " + "input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "jsx-1407384199",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }
      }, __jsx("h4", {
        className: "jsx-1407384199",
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
        className: "jsx-1407384199" + " " + "input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "jsx-1407384199",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }
      }, __jsx("h4", {
        className: "jsx-1407384199",
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
        className: "jsx-1407384199" + " " + "input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "jsx-1407384199",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }
      }, __jsx("h4", {
        className: "jsx-1407384199",
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
        className: "jsx-1407384199" + " " + "txt",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }
      })), __jsx("button", {
        className: "jsx-1407384199" + " " + "btn",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }
      }, "Issue Certificate"))), __jsx("div", {
        className: "jsx-1407384199" + " " + (this.state.block || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "jsx-1407384199" + " " + "certificate",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }
      }, __jsx("h4", {
        className: "jsx-1407384199" + " " + "university",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 13
        }
      }, this.state.uni), __jsx("h4", {
        className: "jsx-1407384199" + " " + "date",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 13
        }
      }, this.state.date), __jsx("h4", {
        className: "jsx-1407384199" + " " + "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 13
        }
      }, this.state.name), __jsx("h4", {
        className: "jsx-1407384199" + " " + "course",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 13
        }
      }, this.state.course), __jsx("h4", {
        className: "jsx-1407384199" + " " + "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 13
        }
      }, this.state.desc), __jsx("h4", {
        className: "jsx-1407384199" + " " + "aadhar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 13
        }
      }, "Government Id: ", this.state.aadhar), __jsx("h4", {
        className: "jsx-1407384199" + " " + "account",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 13
        }
      }, "Issued from: ", this.state.account), __jsx("h4", {
        className: "jsx-1407384199" + " " + "hash",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 13
        }
      }, "Credential ID: ", this.state.hash))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "1407384199",
        __self: this
      }, ".certificate.jsx-1407384199{background-color:#2bcbba;padding:50px 10px 20px 10px;max-width:80vw;height:1000px;margin:200px;margin-top:5%;border-radius:12px;}.university.jsx-1407384199{font-family:Cinzel;font-size:50px;margin-left:20%;}.date.jsx-1407384199{font-family:Cinzel;font-size:14px;margin-left:20%;}.name.jsx-1407384199{font-family:Cinzel;font-size:28px;margin-left:20%;margin-top:100px;}.course.jsx-1407384199{font-family:Cinzel;font-size:18px;margin-left:20%;margin-top:20px;}.description.jsx-1407384199{font-family:Cinzel;font-size:16px;margin-left:20%;max-width:500px;margin-top:40px;}.aadhar.jsx-1407384199{font-family:Cinzel;font-size:20px;margin-left:20%;max-width:500px;margin-top:100px;}.account.jsx-1407384199{font-family:Cinzel;font-size:16px;margin-left:20%;max-width:500px;margin-top:60px;}.hash.jsx-1407384199{font-family:Cinzel;font-size:16px;margin-left:20%;max-width:500px;margin-top:100px;margin-left:40%;}form.jsx-1407384199{margin-left:30%;margin-top:5%;}.input.jsx-1407384199{border-radius:0;border:0;padding:0;border-radius:8px;height:40px;width:600px;font-family:Montserrat;font-size:22px;padding:10px 60px;background-color:#dcdde1;}.txt.jsx-1407384199{border-radius:0;border:0;padding:0;border-radius:8px;height:200px;width:600px;font-family:Montserrat;font-size:22px;padding:10px 60px;background-color:#dcdde1;}.btn.jsx-1407384199{border-radius:0;border:0;padding:0;border-radius:8px;height:60px;font-family:Montserrat;font-size:24px;font-weight:800;color:#fff;padding:10px 60px;margin-top:20px;margin-left:15%;background-color:#26de81;margin-bottom:50px;}h4.jsx-1407384199{font-family:Montserrat;font-size:18px;font-weight:600;margin-bottom:10px;}.block1.jsx-1407384199{display:block;}.block0.jsx-1407384199{display:none;}.container.jsx-1407384199{margin:0 50px;position:absolute;top:0;left:0;right:0;margin:0;padding:0;background-color:#f5f6fa;}.body.jsx-1407384199{margin-top:100px;}nav.jsx-1407384199{background-color:#3c40c6;position:absolute;right:0;left:0;top:0;height:60px;}nav.jsx-1407384199 h5.jsx-1407384199{font-family:Montserrat;font-size:30px;color:white;margin:15px 50px;}ul.jsx-1407384199{list-style-type:none;margin:0;padding:0;overflow:hidden;position:absolute;top:0;right:0;}li.jsx-1407384199{float:left;}li.jsx-1407384199 a.jsx-1407384199{display:block;padding:8px;margin-right:40px;font-family:Montserrat;color:#fff;-webkit-text-decoration:none;text-decoration:none;margin-top:10px;}.address.jsx-1407384199{font-family:Montserrat;background-color:#3c40c6;height:15px;padding:20px;border-radius:8px;color:#fff;font-weight:600;position:absolute;top:60px;right:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTGF2IFNpbmdoXFxEZXNrdG9wXFxDUkVEU09MXFxwYWdlc1xcY3JlYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlKb0IsQUFJd0MsQUFTTixBQU1BLEFBT0EsQUFPQSxBQU9BLEFBUUEsQUFRQSxBQVFBLEFBVUgsQUFLQSxBQWFBLEFBYUEsQUFpQk8sQUFPVCxBQUdELEFBR0MsQUFXRyxBQUlRLEFBU0YsQUFPRixBQVVWLEFBSUcsQUFVUyxXQWJ6QixFQTVDQSxDQUhBLEFBTW9CLEFBNkNOLEVBMUdFLEFBS0wsQUFhQSxBQWFBLENBeUNYLEVBcklpQixBQU1BLEFBT0EsQUFPQSxBQU9BLEFBUUEsQUFRQSxBQVFBLEVBc0dOLEVBNUNNLEFBcUNBLEFBK0JVLEVBMUxHLEFBNEVsQixBQWFBLEFBYUEsQUE0Q1EsQ0ErQkEsSUExR3BCLEFBNEZZLEVBL0JKLEVBMUhVLEFBTUEsQUFPQSxBQU9BLEFBT0EsQUFRQSxBQVFBLEFBUUEsQ0FnQkUsQUFhQSxBQWFBLEdBZ0JGLEFBY1QsQUF1QkssRUFRSSxHQWpCUixDQStCZSxDQTVDZixHQXFESSxFQWhMZCxBQU9BLEFBTW1CLEFBT0QsQUFPQSxBQVFBLEFBUUEsQUFRQSxBQStGQyxDQVRWLEVBbkpRLEFBNkVILEFBYUMsQUFhRCxBQStCSCxDQWZVLEVBNkNELEVBaEJaLEVBdUNPLEVBcERILEVBY0UsQ0F2RUEsQUEwQlcsQ0F6RXpCLEFBT2tCLEFBUUMsQUFRRCxBQVFDLEFBNkJMLENBbkVkLEFBcUlBLEFBcUJhLENBakxHLElBdUlXLENBaEIzQixBQW9Fb0IsQ0F2QlosRUFmUixDQXZFeUIsQ0FhQSxBQXVGRixFQWJiLEVBcEtLLEFBcUNmLEFBZ0JBLENBUkEsQUFnQmtCLEtBMENELEFBOERqQixHQXNCYSxJQTFMRyxFQXNJaEIsRUF4RUEsQ0FlaUIsQ0FhQSxDQWlHQyxDQXBGQSxNQXRHRyxNQTZFRCxDQWFBLEVBaUdBLENBcEZQLFNBdEdiLEFBK0trQixFQXhFRSxHQTFCTyxDQWFBLEVBaUdoQixRQVhYLENBWWEsR0FwRkssUUFxRmxCLEVBL0dBLENBYUEsS0Fja0IsZ0JBQ1MseUJBQ04sbUJBQ3JCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTGF2IFNpbmdoXFxEZXNrdG9wXFxDUkVEU09MXFxwYWdlc1xcY3JlYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ0xJRU5UIFNJREVcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGluc3RhbmNlIGZyb20gJy4uL2V0aGVyZXVtL2luc3RhbmNlJztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XHJcbmltcG9ydCBtZDUgZnJvbSAnbWQ1JztcclxuXHJcbmNsYXNzIENyZWF0ZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBhY2NvdW50OiAnJyxcclxuICAgIG5hbWU6ICcnLFxyXG4gICAgY291cnNlOiAnJyxcclxuICAgIGhhc2g6ICcnLFxyXG4gICAgZGVzYzogJycsXHJcbiAgICBkYXRlOiAnJyxcclxuICAgIGFhZGhhcjogJycsXHJcbiAgICB1bmk6ICcnLFxyXG4gICAgYmxvY2s6ICdibG9jazAnXHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBoYXNoID0gbWQ1KHRoaXMuc3RhdGUuY291cnNlICsgdGhpcy5zdGF0ZS5uYW1lICsgdGhpcy5zdGF0ZS5vcmdhbmlzYXRpb24pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhhc2ggfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgIGF3YWl0IGluc3RhbmNlXHJcbiAgICAgICAgLm1ldGhvZHMuZ2VuZXJhdGVDZXJ0aWZpY2F0ZSh0aGlzLnN0YXRlLmFjY291bnQsIHRoaXMuc3RhdGUuYWFkaGFyLCB0aGlzLnN0YXRlLmNvdXJzZSwgaGFzaClcclxuICAgICAgICAuc2VuZCh7IGdhczogJzEwMDAwMDAnLCBmcm9tOiBhY2NvdW50c1swXX0pO1xyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICAgIC8vIGRhdGEgdXBsb2FkIGZpbmlzaGVzLi4uXHJcbiAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFyIGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgIHZhciBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy9KYW51YXJ5IGlzIDAhXHJcbiAgICB2YXIgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgdG9kYXkgPSBtbSArICcvJyArIGRkICsgJy8nICsgeXl5eTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRlOiB0b2RheSB9KTtcclxuICAgIGNvbnNvbGUubG9nKHRvZGF5KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBibG9jazogXCJibG9jazFcIiB9KTtcclxuXHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgICB3ZWIzLmV0aC5nZXRBY2NvdW50cygpLnRoZW4oIGFjY291bnQgPT4ge1xyXG4gICAgICAgIGlmKGFjY291bnRbMF0gIT09ICcnKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogYWNjb3VudFswXSB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogJ0xvZ2luIHRvIHlvdXIgTWV0YW1hc2snIH0pXHJcbiAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgPGg1PkNlcnRpZnk8L2g1PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL1wiPkhvbWU8L2E+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvY3JlYXRlXCI+Q3JlYXRlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvdmVyaWZ5XCI+VmVyaWZ5PC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiYWRkcmVzc1wiPnt0aGlzLnN0YXRlLmFjY291bnR9PC9oND5cclxuICAgICAgICA8L25hdj5cclxuXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cclxuXHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg0Pklzc3VlcjwvaDQ+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hY2NvdW50fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg0PkFhZGhhcjwvaDQ+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFhZGhhci4uLlwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWFkaGFyfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgYWFkaGFyOiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDQ+TmFtZTwvaDQ+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZ1bGwgTmFtZS4uLlwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoND5Db3Vyc2UgSUQ8L2g0PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb3Vyc2UgSUQuLi5cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNvdXJzZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvdXJzZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg0PlVuaXZlcnNpdHk8L2g0PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVbml2ZXJzaXR5IG5hbWUuLi5cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVuaX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IHVuaTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg0PkRlc2NyaXB0aW9uPC9oND5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uLi4uXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgZGVzYzogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiPklzc3VlIENlcnRpZmljYXRlPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5ibG9ja30+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlcnRpZmljYXRlXCI+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ1bml2ZXJzaXR5XCI+e3RoaXMuc3RhdGUudW5pfTwvaDQ+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJkYXRlXCI+e3RoaXMuc3RhdGUuZGF0ZX08L2g0PlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibmFtZVwiPnt0aGlzLnN0YXRlLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNvdXJzZVwiPnt0aGlzLnN0YXRlLmNvdXJzZX08L2g0PlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57dGhpcy5zdGF0ZS5kZXNjfTwvaDQ+XHJcblxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiYWFkaGFyXCI+R292ZXJubWVudCBJZDoge3RoaXMuc3RhdGUuYWFkaGFyfTwvaDQ+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJhY2NvdW50XCI+SXNzdWVkIGZyb206IHt0aGlzLnN0YXRlLmFjY291bnR9PC9oND5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImhhc2hcIj5DcmVkZW50aWFsIElEOiB7dGhpcy5zdGF0ZS5oYXNofTwvaDQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAgICAgLmNlcnRpZmljYXRlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmJjYmJhO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggMTBweCAyMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MHZ3O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMjAwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudW5pdmVyc2l0eSB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENpbnplbDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDaW56ZWw7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENpbnplbDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvdXJzZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENpbnplbDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDaW56ZWw7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYWFkaGFyIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogQ2luemVsO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5hY2NvdW50IHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogQ2luemVsO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmhhc2gge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDaW56ZWw7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmlucHV0IHtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDYwcHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjZGRlMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnR4dCB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNjBweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkZGUxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA2MHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZkZTgxO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYmxvY2sxIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYmxvY2swIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCA1MHB4O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZhO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYm9keSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hdiB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNjNDBjNjtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYXYgaDUge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxpIGEge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5hZGRyZXNzIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M0MGM2O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDYwcHg7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Lav Singh\\\\Desktop\\\\CREDSOL\\\\pages\\\\create.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXRlLmpzIl0sIm5hbWVzIjpbIkNyZWF0ZSIsImFjY291bnQiLCJuYW1lIiwiY291cnNlIiwiaGFzaCIsImRlc2MiLCJkYXRlIiwiYWFkaGFyIiwidW5pIiwiYmxvY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJtZDUiLCJzdGF0ZSIsIm9yZ2FuaXNhdGlvbiIsInNldFN0YXRlIiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJpbnN0YW5jZSIsIm1ldGhvZHMiLCJnZW5lcmF0ZUNlcnRpZmljYXRlIiwic2VuZCIsImdhcyIsImZyb20iLCJjb25zb2xlIiwibG9nIiwidG9kYXkiLCJEYXRlIiwiZGQiLCJTdHJpbmciLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtbSIsImdldE1vbnRoIiwieXl5eSIsImdldEZ1bGxZZWFyIiwidGhlbiIsIm9uU3VibWl0IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLE07Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsYUFBTyxFQUFFLEVBREg7QUFFTkMsVUFBSSxFQUFFLEVBRkE7QUFHTkMsWUFBTSxFQUFFLEVBSEY7QUFJTkMsVUFBSSxFQUFFLEVBSkE7QUFLTkMsVUFBSSxFQUFFLEVBTEE7QUFNTkMsVUFBSSxFQUFFLEVBTkE7QUFPTkMsWUFBTSxFQUFFLEVBUEY7QUFRTkMsU0FBRyxFQUFFLEVBUkM7QUFTTkMsV0FBSyxFQUFFO0FBVEQsSzs7O2tNQVlHLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNUQSxpQkFBQyxDQUFDQyxjQUFGO0FBQ01QLG9CQUZHLEdBRUlRLDJDQUFHLENBQUMsTUFBS0MsS0FBTCxDQUFXVixNQUFYLEdBQW9CLE1B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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQTRCLEtBQUtJLEtBQUwsQ0FBV0wsR0FBdkMsQ0FERixFQUVFO0FBQUEsNENBQWMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXNCLEtBQUtLLEtBQUwsQ0FBV1AsSUFBakMsQ0FGRixFQUdFO0FBQUEsNENBQWMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXNCLEtBQUtPLEtBQUwsQ0FBV1gsSUFBakMsQ0FIRixFQUlFO0FBQUEsNENBQWMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXdCLEtBQUtXLEtBQUwsQ0FBV1YsTUFBbkMsQ0FKRixFQUtFO0FBQUEsNENBQWMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQTZCLEtBQUtVLEtBQUwsQ0FBV1IsSUFBeEMsQ0FMRixFQU9FO0FBQUEsNENBQWMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUF1QyxLQUFLUSxLQUFMLENBQVdOLE1BQWxELENBUEYsRUFRRTtBQUFBLDRDQUFjLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBc0MsS0FBS00sS0FBTCxDQUFXWixPQUFqRCxDQVJGLEVBU0U7QUFBQSw0Q0FBYyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQXFDLEtBQUtZLEtBQUwsQ0FBV1QsSUFBaEQsQ0FURixDQURGLENBckZGO0FBQUE7QUFBQTtBQUFBLDJ0akJBREY7QUFnVEQ7Ozs7RUEvVmtCdUMsZ0Q7O0FBa1dOM0MscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3JlYXRlLjhiOTE4MGM5MWFmYjQyMWUxNjk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDTElFTlQgU0lERVxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgaW5zdGFuY2UgZnJvbSAnLi4vZXRoZXJldW0vaW5zdGFuY2UnO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IG1kNSBmcm9tICdtZDUnO1xyXG5cclxuY2xhc3MgQ3JlYXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGFjY291bnQ6ICcnLFxyXG4gICAgbmFtZTogJycsXHJcbiAgICBjb3Vyc2U6ICcnLFxyXG4gICAgaGFzaDogJycsXHJcbiAgICBkZXNjOiAnJyxcclxuICAgIGRhdGU6ICcnLFxyXG4gICAgYWFkaGFyOiAnJyxcclxuICAgIHVuaTogJycsXHJcbiAgICBibG9jazogJ2Jsb2NrMCdcclxuICB9XHJcblxyXG4gIG9uU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGhhc2ggPSBtZDUodGhpcy5zdGF0ZS5jb3Vyc2UgKyB0aGlzLnN0YXRlLm5hbWUgKyB0aGlzLnN0YXRlLm9yZ2FuaXNhdGlvbik7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaGFzaCB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgYXdhaXQgaW5zdGFuY2VcclxuICAgICAgICAubWV0aG9kcy5nZW5lcmF0ZUNlcnRpZmljYXRlKHRoaXMuc3RhdGUuYWNjb3VudCwgdGhpcy5zdGF0ZS5hYWRoYXIsIHRoaXMuc3RhdGUuY291cnNlLCBoYXNoKVxyXG4gICAgICAgIC5zZW5kKHsgZ2FzOiAnMTAwMDAwMCcsIGZyb206IGFjY291bnRzWzBdfSk7XHJcbiAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gICAgLy8gZGF0YSB1cGxvYWQgZmluaXNoZXMuLi5cclxuICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgdmFyIG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpOyAvL0phbnVhcnkgaXMgMCFcclxuICAgIHZhciB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICB0b2RheSA9IG1tICsgJy8nICsgZGQgKyAnLycgKyB5eXl5O1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGU6IHRvZGF5IH0pO1xyXG4gICAgY29uc29sZS5sb2codG9kYXkpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGJsb2NrOiBcImJsb2NrMVwiIH0pO1xyXG5cclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICAgIHdlYjMuZXRoLmdldEFjY291bnRzKCkudGhlbiggYWNjb3VudCA9PiB7XHJcbiAgICAgICAgaWYoYWNjb3VudFswXSAhPT0gJycpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiBhY2NvdW50WzBdIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiAnTG9naW4gdG8geW91ciBNZXRhbWFzaycgfSlcclxuICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICA8aDU+Q2VydGlmeTwvaDU+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvXCI+SG9tZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L2E+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9jcmVhdGVcIj5DcmVhdGU8L2E+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi92ZXJpZnlcIj5WZXJpZnk8L2E+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJhZGRyZXNzXCI+e3RoaXMuc3RhdGUuYWNjb3VudH08L2g0PlxyXG4gICAgICAgIDwvbmF2PlxyXG5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9PlxyXG5cclxuXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDQ+SXNzdWVyPC9oND5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFjY291bnR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDQ+QWFkaGFyPC9oND5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWFkaGFyLi4uXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hYWRoYXJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBhYWRoYXI6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoND5OYW1lPC9oND5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRnVsbCBOYW1lLi4uXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg0PkNvdXJzZSBJRDwvaDQ+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvdXJzZSBJRC4uLlwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY291cnNlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgY291cnNlOiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDQ+VW5pdmVyc2l0eTwvaDQ+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVuaXZlcnNpdHkgbmFtZS4uLlwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudW5pfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgdW5pOiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDQ+RGVzY3JpcHRpb248L2g0PlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb24uLi5cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRlc2N9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBkZXNjOiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCI+SXNzdWUgQ2VydGlmaWNhdGU8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmJsb2NrfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VydGlmaWNhdGVcIj5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInVuaXZlcnNpdHlcIj57dGhpcy5zdGF0ZS51bml9PC9oND5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImRhdGVcIj57dGhpcy5zdGF0ZS5kYXRlfTwvaDQ+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJuYW1lXCI+e3RoaXMuc3RhdGUubmFtZX08L2g0PlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY291cnNlXCI+e3RoaXMuc3RhdGUuY291cnNlfTwvaDQ+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPnt0aGlzLnN0YXRlLmRlc2N9PC9oND5cclxuXHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJhYWRoYXJcIj5Hb3Zlcm5tZW50IElkOiB7dGhpcy5zdGF0ZS5hYWRoYXJ9PC9oND5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImFjY291bnRcIj5Jc3N1ZWQgZnJvbToge3RoaXMuc3RhdGUuYWNjb3VudH08L2g0PlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiaGFzaFwiPkNyZWRlbnRpYWwgSUQ6IHt0aGlzLnN0YXRlLmhhc2h9PC9oND5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgICAgICAuY2VydGlmaWNhdGUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYmNiYmE7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNTBweCAxMHB4IDIwcHggMTBweDtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgwdnc7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAyMDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC51bml2ZXJzaXR5IHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogQ2luemVsO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGF0ZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENpbnplbDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogQ2luemVsO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY291cnNlIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogQ2luemVsO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENpbnplbDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5hYWRoYXIge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDaW56ZWw7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmFjY291bnQge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDaW56ZWw7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaGFzaCB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENpbnplbDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaW5wdXQge1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNjBweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkZGUxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudHh0IHtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA2MHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2RkZTE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDYwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNmRlODE7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ibG9jazEge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ibG9jazAge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDUwcHg7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZmE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ib2R5IHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmF2IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M0MGM2O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hdiBoNSB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDE1cHggNTBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGkgYSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmFkZHJlc3Mge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzYzQwYzY7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogNjBweDtcclxuICAgICAgICAgICAgICByaWdodDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=