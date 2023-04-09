"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Please add your name"],
    },
    email: {
        type: String,
        required: [true, "Please add your email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please add your password"],
    },
    avatarUrl: String,
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)("User", userSchema);
