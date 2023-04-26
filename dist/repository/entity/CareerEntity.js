"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const careerSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        minlength: 2,
        required: true
    },
    lastName: {
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
    address: {
        type: String,
        minlength: 2,
    },
    applyFor: {
        type: String,
        minlength: 2,
        required: true
    },
    experience: {
        type: String,
        minlength: 2,
        required: true
    },
    currentCTC: {
        type: String,
        minlength: 2,
        required: true
    },
    expectedCTC: {
        type: String,
        minlength: 2,
        required: true
    },
    files: [{
            type: String,
            required: true
        }],
});
exports.default = (0, mongoose_1.model)("career", careerSchema);
