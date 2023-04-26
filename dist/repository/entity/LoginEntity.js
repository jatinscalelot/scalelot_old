"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const loginSchema = new mongoose_1.Schema({
    userName: {
        type: String,
        minlength: 2,
        required: true
    },
    password: {
        type: String,
        minlength: 2,
        required: true
    }
});
exports.default = (0, mongoose_1.model)("login", loginSchema);
