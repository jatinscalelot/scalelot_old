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
const TestimonialRepository_1 = __importDefault(require("../repository/TestimonialRepository"));
const Logger_1 = __importDefault(require("../utils/Logger"));
const FileService_1 = __importDefault(require("./FileService"));
let TestimonialService = class TestimonialService {
    constructor(testimonialRepository, fileService) {
        this._testimonialRepository = testimonialRepository;
        this._fileService = fileService;
    }
    async addTestimonial(testimonial, files) {
        let fileIds = [];
        for (let fileIndex in files) {
            let savedFile = await this._fileService.saveFile(files[fileIndex]);
            require("fs").writeFile("./public/assets/images/dynamic-images/" + savedFile.id, files[fileIndex].buffer, 'base64', function (err) {
                Logger_1.default.debug(err);
            });
            fileIds.push(savedFile.id.toString());
        }
        testimonial.files = fileIds;
        Logger_1.default.debug("Files saved");
        return this._testimonialRepository.addTestimonial(testimonial);
    }
    async getAllTestimonials() {
        return this._testimonialRepository.getAllTestimonails();
    }
};
TestimonialService = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [TestimonialRepository_1.default, FileService_1.default])
], TestimonialService);
exports.default = TestimonialService;
