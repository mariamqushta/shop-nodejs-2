"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var productSchema = new _mongoose["default"].Schema({
  header: String,
  type: String,
  img: [String],
  cost: Number,
  Discount: Number
}, {
  timestamps: true,
  collection: "product1"
});

var Product = _mongoose["default"].model("Product1", productSchema);

var _default = Product;
exports["default"] = _default;