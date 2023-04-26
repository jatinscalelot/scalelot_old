"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const metaKeywordsSchema = new mongoose_1.Schema({
    country: {
        type: String,
        minlength: 2,
        required: true
    },
    page: {
        type: String,
        minlength: 2,
        required: true
    },
    keywords: {
        type: String,
        minlength: 2,
        required: true
    }
});
exports.default = (0, mongoose_1.model)("meta_keywords", metaKeywordsSchema);
