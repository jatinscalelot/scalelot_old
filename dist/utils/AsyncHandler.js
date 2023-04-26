"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
exports.default = (execution) => (req, res, next) => {
    execution(req, res, next).catch(next);
};
