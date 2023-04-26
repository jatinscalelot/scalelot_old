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
const tsyringe_1 = require("tsyringe");
const Logger_1 = __importDefault(require("../utils/Logger"));
const EmailConfig_1 = __importDefault(require("../config/EmailConfig"));
const Config_1 = require("../config/Config");
let EmailService = class EmailService {
    constructor(emailConfig) {
        Logger_1.default.debug("Creating EmailService Instance");
        this.emailConfig = emailConfig;
    }
    //ToDo: Change this method for new Email Service Provider
    async sendEmail(to, subject, text, html, headers) {
        let response = await this.emailConfig.transporter.sendMail({
            from: Config_1.GMAIL_CONFIG.user,
            to: to,
            subject: subject,
            text: text,
            html: html,
            headers: headers
        });
        console.log('response', response);
        Logger_1.default.debug("Mail sent");
        return true;
    }
};
EmailService = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [EmailConfig_1.default])
], EmailService);
exports.default = EmailService;
