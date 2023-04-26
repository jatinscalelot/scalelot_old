"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const fileSchema = new mongoose_1.Schema({
    fieldname: {
        type: String,
        minlength: 2,
        required: true
    },
    originalname: {
        type: String,
        minlength: 2,
        required: true
    },
    encoding: {
        type: String,
        minlength: 2,
        required: true
    },
    mimetype: {
        type: String,
        minlength: 2,
        required: true
    },
    size: {
        type: String,
        minlength: 2,
        required: true
    }
});
exports.default = (0, mongoose_1.model)("files", fileSchema);
