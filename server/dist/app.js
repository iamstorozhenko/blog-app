"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3500;
app.use((0, cors_1.default)());
app.get("/", function (req, res) {
  res.send("c121221");
});
app.listen(PORT, function () {
  console.log("Server running on port: ".concat(PORT));
});
