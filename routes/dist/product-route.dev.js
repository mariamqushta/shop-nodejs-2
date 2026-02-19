"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _validate = require("../middleware/validate.js");

var _auth = require("../middleware/auth.js");

var _authValidation = require("../services/auth-validation.js");

var _controller = require("../controller/controller.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var productRouter = _express["default"].Router(); // Admin add product


productRouter.post("/add", // check token     // check role
(0, _validate.validate)(_authValidation.productValidation), _controller.createProduct); // Get all products

productRouter.get("/", _controller.getAllProducts);
var _default = productRouter;
exports["default"] = _default;