"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = require("./Config");
const tsyringe_1 = require("tsyringe");
const Logger_1 = __importDefault(require("../utils/Logger"));
let EmailConfig = class EmailConfig {
    constructor() {
        this.service = Config_1.GMAIL_CONFIG.service;
        this.user = Config_1.GMAIL_CONFIG.user;
        this.password = Config_1.GMAIL_CONFIG.password;
        Logger_1.default.debug("Creating EmailConfig Instance");
        const nodemailer = require("nodemailer");
        this._transporter = nodemailer.createTransport({
            // host: this.host,
            // port: this.port,
            // secure: this.secure,
            // requireTLS: this.requireTLS,
            service: this.service,
            auth: {
                user: this.user,
                pass: this.password,
            },
            logger: true
        });
    }
    get transporter() {
        return this._transporter;
    }
};
EmailConfig = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [])
], EmailConfig);
exports.default = EmailConfig;
