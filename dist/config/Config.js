"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logDirectory = exports.corsUrl = exports.GMAIL_CONFIG = exports.PROTECTED_ENDPOINTS = exports.DEFAULT_USER_CREDS = exports.db = exports.port = exports.environment = void 0;
// Mapper for environment variables
exports.environment = process.env.NODE_ENV || "development";
exports.port = process.env.PORT || "3000";
exports.db = {
    // connectionString: "mongodb://localhost:27017"
    connectionString: "mongodb+srv://gopal_scalelot:root%40Scalelot@cluster0.xjusu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    // connectionString: environment == 'production' ? process.env.PROD_DB_CONNECTION_STRING : process.env.DB_CONNECTION_STRING || '',
    // user: environment == 'production' ? process.env.PROD_DB_USER : process.env.DB_USER || '',
    // password: environment == 'production' ? process.env.PROD_DB_PASSWORD : process.env.DB_PASSWORD || '',
};
exports.DEFAULT_USER_CREDS = {
    userName: process.env.DEFAULT_USERNAME || 'admin',
    password: process.env.DEFAULT_PASSWORD || 'admin'
};
// export const PROTECTED_ENDPOINTS: string[] = process.env.PROTECTED_ENDPOINTS!.split(",");
exports.PROTECTED_ENDPOINTS = "/v1/meta-keywords,/v1/contact-us/all,/v1/career/all".split(",");
exports.GMAIL_CONFIG = {
    service: process.env.GMAIL_SERVICE || "gmail",
    user: process.env.GMAIL_AUTH_USERNAME || 'sales.scalelot@gmail.com',
    password: process.env.GMAIL_AUTH_PASSWORD || 'SalesScalelot@22',
};
exports.corsUrl = process.env.CORS_URL || "*";
exports.logDirectory = process.env.LOG_DIR || '';
