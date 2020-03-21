webpackHotUpdate("static/development/pages/siemanko.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/Users/klaudiaskora/Projects_work/projectWithNext/components/header.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 3
    }
  }, __jsx(Link, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, "Home"), __jsx(Link, {
    href: "/test",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, "Test"), __jsx(Link, {
    href: "/siemanko",
    pathname: "/test/siemanko",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, "Siemanko"));
});

var Link = function Link(_ref) {
  var children = _ref.children,
      href = _ref.href;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return __jsx("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault(); // typically you want to use `next/link` for this usecase
      // but this example shows how you can also access the router
      // and use it manually

      router.push(href);
    },
    className: "jsx-1213245191",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1213245191",
    __self: _this
  }, "a.jsx-1213245191{margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rbGF1ZGlhc2tvcmEvUHJvamVjdHNfd29yay9wcm9qZWN0V2l0aE5leHQvY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JrQixBQUc2QixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2tsYXVkaWFza29yYS9Qcm9qZWN0c193b3JrL3Byb2plY3RXaXRoTmV4dC9jb21wb25lbnRzL2hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPExpbmsgaHJlZj1cIi9cIj5Ib21lPC9MaW5rPlxuICAgIDxMaW5rIGhyZWY9XCIvdGVzdFwiPlRlc3Q8L0xpbms+XG4gICAgPExpbmsgaHJlZj1cIi9zaWVtYW5rb1wiIHBhdGhuYW1lPVwiL3Rlc3Qvc2llbWFua29cIj5TaWVtYW5rbzwvTGluaz5cbiAgPC9kaXY+XG4pXG5cbmNvbnN0IExpbmsgPSAoeyBjaGlsZHJlbiwgaHJlZiB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIHJldHVybiAoXG4gICAgPGFcbiAgICAgIGhyZWY9XCIjXCJcbiAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgLy8gdHlwaWNhbGx5IHlvdSB3YW50IHRvIHVzZSBgbmV4dC9saW5rYCBmb3IgdGhpcyB1c2VjYXNlXG4gICAgICAgIC8vIGJ1dCB0aGlzIGV4YW1wbGUgc2hvd3MgaG93IHlvdSBjYW4gYWxzbyBhY2Nlc3MgdGhlIHJvdXRlclxuICAgICAgICAvLyBhbmQgdXNlIGl0IG1hbnVhbGx5XG4gICAgICAgIHJvdXRlci5wdXNoKGhyZWYpXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9hPlxuICApXG59Il19 */\n/*@ sourceURL=/Users/klaudiaskora/Projects_work/projectWithNext/components/header.js */"));
};

/***/ })

})
//# sourceMappingURL=siemanko.js.f3330acccac10104470a.hot-update.js.map