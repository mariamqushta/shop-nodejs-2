"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _mongoose = require("./DB/mongoose.js");

var _morgan = _interopRequireDefault(require("morgan"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _productRoute = _interopRequireDefault(require("./routes/product-route.js"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();
var port = process.env.PORT || 3000;
app.use((0, _cors["default"])({
  origin: ["http://localhost:3000", "https://react-online-shop-rouge.vercel.app"],
  // Allow only your frontend
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"],
  // Allowed headers
  credentials: true // Allow credentials

}));
app.use(_express["default"].json());
app.use((0, _morgan["default"])('dev'));
app.use((0, _cookieParser["default"])());
app.use("/products", _productRoute["default"]);
app.get("/", function (req, res) {
  res.send("<h1> API is running! </h1> ");
}); // export default function handler(req, res) {
//   res.status(200).json({ message: "Backend is live 🚀" });
// }

(0, _mongoose.ConnectToDB)();
app.listen(port, function () {
  console.log("app work on port ".concat(port));
});