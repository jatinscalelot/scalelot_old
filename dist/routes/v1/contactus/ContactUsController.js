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
const express_1 = __importDefault(require("express"));
const Logger_1 = __importDefault(require("../../../utils/Logger"));
const AsyncHandler_1 = __importDefault(require("../../../utils/AsyncHandler"));
const ApiResponse_1 = require("../../../utils/ApiResponse");
const ResponseMessages_1 = __importDefault(require("../../../utils/statics/ResponseMessages"));
const ContactUsService_1 = __importDefault(require("../../../service/ContactUsService"));
const ContactUs_1 = __importDefault(require("../../../dto/ContactUs"));
const class_transformer_1 = require("class-transformer");
const FileDTO_1 = __importDefault(require("../../../dto/FileDTO"));
const request = require('request');
let ContactUsController = class ContactUsController {
    constructor(contactUsService) {
        this._router = express_1.default.Router();
        this._contactUsService = contactUsService;
    }
    routes() {
        Logger_1.default.debug("Configuring routes for Contact Us");
        this._router.post('/', (0, AsyncHandler_1.default)(async (req, res) => this.addContactUsQuery(req, res)));
        this._router.get('/all', (0, AsyncHandler_1.default)(async (req, res) => this.getAllContactUsQuery(req, res)));
        return this._router;
    }
    async addContactUsQuery(req, res) {
        if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
            return res.json({ "responseError": "captcha error" });
        }
        const secretKey = "6LeM4dglAAAAALPLbqh0jn9nQ9lLEbLuWfr9OfFX";
        const verificationURL = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
        request(verificationURL, function (body) {
            body = JSON.parse(body);
            if (body.success !== undefined && !body.success) {
                return res.json({ "responseError": "Failed captcha verification" });
            }
            Logger_1.default.debug("New Contact US requested.");
            let files = [];
            let contactUs = (0, class_transformer_1.plainToInstance)(ContactUs_1.default, req.body, { excludeExtraneousValues: true });
            if (req.files && req.files.length != 0) {
                files = req.files.map((file) => {
                    let fileDTO = (0, class_transformer_1.plainToInstance)(FileDTO_1.default, file, { excludeExtraneousValues: true });
                    fileDTO.buffer = file.buffer.toString("base64");
                    return fileDTO;
                });
            }
            contactUs = this._contactUsService.addContactUsQuery(contactUs, files);
            return res.redirect("/thanks");
        });
        // if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
        //     // return res.redirect("/#contactUs?errors");
        // } else {
        //     Logger.debug("New Contact US requested.");
        //     let files: FileDTO[] = [];
        //     let contactUs: ContactUs = plainToInstance(ContactUs, req.body, { excludeExtraneousValues: true });
        //     if (req.files && req.files.length != 0) {
        //         files = req.files.map((file: any) => {
        //             let fileDTO: FileDTO = plainToInstance(FileDTO, file, { excludeExtraneousValues: true });
        //             fileDTO.buffer = file.buffer.toString("base64");
        //             return fileDTO;
        //         });
        //     }
        //     contactUs = await this._contactUsService.addContactUsQuery(contactUs, files);
        //     return res.redirect("/thanks");
        // }
    }
    async getAllContactUsQuery(req, res) {
        Logger_1.default.debug("Fetching all contact us query");
        let contactUsList = await this._contactUsService.getAllContactUsQuery();
        return new ApiResponse_1.SuccessResponse(ResponseMessages_1.default.FETCH_ALL_CONTACT_US_SUCCESS, contactUsList).send(res);
    }
};
ContactUsController = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [ContactUsService_1.default])
], ContactUsController);
exports.default = ContactUsController;
