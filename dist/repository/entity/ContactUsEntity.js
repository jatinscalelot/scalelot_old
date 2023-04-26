"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const contactUsSchema = new mongoose_1.Schema({
    name: {
        type: String,
        minlength: 2,
        required: true
    },
    companyName: {
        type: String,
        minlength: 2,
        required: true
    },
    email: {
        type: String,
        minlength: 2,
        required: true
    },
    phoneNumber: {
        type: String,
        minlength: 2,
        required: true
    },
    description: {
        type: String,
        minlength: 2,
        required: true
    },
    files: [{
            type: String,
            required: true
        }],
});
exports.default = (0, mongoose_1.model)("contactUs", contactUsSchema);
