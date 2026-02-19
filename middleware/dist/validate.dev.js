"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = void 0;

var _mongoose = require("mongoose");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var validate = function validate(schema) {
  return function (req, res, next) {
    var inputs = _objectSpread({}, req.body, {}, req.params, {}, req.query);

    var _schema$validate = schema.validate(inputs, {
      abortEarly: false
    }),
        error = _schema$validate.error;

    if (error) {
      var errors = error.details.map(function (item) {
        return {
          message: item.message,
          field: item.path.join(".")
        };
      });
      return res.status(400).json({
        status: "validation_error",
        errors: errors
      });
    }

    next();
  };
};

exports.validate = validate;