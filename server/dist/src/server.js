"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const userRoutes_1 = __importDefault(require("../routes/userRoutes"));
const postRoutes_1 = __importDefault(require("../routes/postRoutes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3500;
app.use((0, cors_1.default)());
app.use("/users", userRoutes_1.default);
app.use("/posts", postRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
