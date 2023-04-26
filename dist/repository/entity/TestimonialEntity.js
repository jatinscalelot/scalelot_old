"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const testimonialSchema = new mongoose_1.Schema({
    rating: {
        type: String,
        minlength: 1,
        required: true
    },
    clientName: {
        type: String,
        minlength: 2,
        required: true
    },
    clientDesignation: {
        type: String,
    },
    review: {
        type: String,
        minlength: 2,
        required: true
    },
    tags: {
        type: String
    },
    files: [{
            type: String,
            required: true
        }],
});
exports.default = (0, mongoose_1.model)("testimonial", testimonialSchema);
