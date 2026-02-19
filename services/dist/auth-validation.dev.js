"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productValidation = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var productValidation = _joi["default"].object({
  header: _joi["default"].string().required(),
  type: _joi["default"].string().optional(),
  img: _joi["default"].string().required(),
  cost: _joi["default"].number().required(),
  Discount: _joi["default"].number().optional()
});

exports.productValidation = productValidation;