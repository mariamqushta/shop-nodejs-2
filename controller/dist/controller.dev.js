"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllProducts = exports.createProduct = exports.product = void 0;

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _productModel = _interopRequireDefault(require("../models/product-model.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var product = (0, _expressAsyncHandler["default"])(function _callee(req, res) {
  var products;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_productModel["default"].find());

        case 2:
          products = _context.sent;
          res.json(products);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.product = product;

var createProduct = function createProduct(req, res) {
  var _req$body, header, type, img, cost, Discount, _product;

  return regeneratorRuntime.async(function createProduct$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, header = _req$body.header, type = _req$body.type, img = _req$body.img, cost = _req$body.cost, Discount = _req$body.Discount;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_productModel["default"].create({
            header: header,
            type: type,
            img: Array.isArray(img) ? img : [img],
            // <– convert string to array
            cost: Number(cost),
            Discount: Number(Discount)
          }));

        case 4:
          _product = _context2.sent;
          res.status(201).json({
            message: "Product created successfully",
            product: _product
          });
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            message: _context2.t0.message
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
}; // Get all products


exports.createProduct = createProduct;

var getAllProducts = function getAllProducts(req, res) {
  var products;
  return regeneratorRuntime.async(function getAllProducts$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_productModel["default"].find());

        case 3:
          products = _context3.sent;
          res.json(products);
          _context3.next = 10;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            message: _context3.t0.message
          });

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getAllProducts = getAllProducts;