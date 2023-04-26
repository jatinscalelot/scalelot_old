"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const portfolioProjectsSchema = new mongoose_1.Schema({
    title: {
        type: String,
        minlength: 2,
        required: true
    },
    category: {
        type: String,
        minlength: 2,
        required: true
    },
    pageLink: {
        type: String
    },
    rating: {
        type: String,
        minlength: 1,
        required: true
    },
    description: {
        type: String
    },
    webFramework: [{
            type: String,
            minlength: 2,
        }],
    programmingLanguages: [{
            type: String,
            minlength: 2,
        }],
    miscellaneous: [{
            type: String,
            minlength: 2,
        }],
    libraries: [{
            type: String,
            minlength: 2,
        }],
    uiFrameworks: [{
            type: String,
            minlength: 2,
        }],
    designingLanguage: [{
            type: String,
            minlength: 2,
        }],
    designingTools: [{
            type: String,
            minlength: 2,
        }],
    priority: {
        type: String,
        required: true,
    },
    tags: [{
            type: String,
        }],
    files: [{
            type: String,
            required: true
        }],
});
exports.default = (0, mongoose_1.model)("portfolio-project", portfolioProjectsSchema);
