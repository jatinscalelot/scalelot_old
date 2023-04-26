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
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const CareerRepository_1 = __importDefault(require("../repository/CareerRepository"));
const FileService_1 = __importDefault(require("./FileService"));
const Logger_1 = __importDefault(require("../utils/Logger"));
let CareerService = class CareerService {
    constructor(careerRepository, fileService) {
        this._careerRepository = careerRepository;
        this._fileService = fileService;
    }
    async createCareer(career, files) {
        let fileIds = [];
        for (let fileIndex in files) {
            let savedFile = await this._fileService.saveFile(files[fileIndex]);
            require("fs").writeFile("./public/assets/images/dynamic-images/" + savedFile.id, files[fileIndex].buffer, 'base64', function (err) {
                Logger_1.default.debug(err);
            });
            fileIds.push(savedFile.id.toString());
        }
        career.files = fileIds;
        return this._careerRepository.saveCareer(career);
    }
    async fetchAllCareer() {
        return this._careerRepository.getAllCareer();
    }
};
CareerService = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [CareerRepository_1.default, FileService_1.default])
], CareerService);
exports.default = CareerService;
