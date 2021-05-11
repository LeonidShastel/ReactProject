"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.firebaseApp = void 0;

var _reBase = _interopRequireDefault(require("re-base"));

var _app = _interopRequireDefault(require("firebase/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('firebase/database');

var firebaseApp = _app["default"].initializeApp({
  apiKey: "AIzaSyDVpq8CMCHjFXPFdDmoDWm7l5Wu8ZTyHAI",
  authDomain: "first-project-react-5487b.firebaseapp.com",
  databaseURL: "https://first-project-react-5487b-default-rtdb.firebaseio.com"
});

exports.firebaseApp = firebaseApp;

var base = _reBase["default"].createClass(firebaseApp.database());

var _default = base;
exports["default"] = _default;