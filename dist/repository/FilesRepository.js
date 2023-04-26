"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const FileDTO_1 = __importDefault(require("../dto/FileDTO"));
const AppUtils_1 = __importDefault(require("../utils/AppUtils"));
const class_transformer_1 = require("class-transformer");
const FileEntity_1 = __importDefault(require("./entity/FileEntity"));
const Logger_1 = __importDefault(require("../utils/Logger"));
let FilesRepository = class FilesRepository {
    async saveFiles(files) {
        Logger_1.default.debug("Files Saving repo");
        let savedFiles = await FileEntity_1.default.insertMany(AppUtils_1.default.nullPropsRemover((0, class_transformer_1.instanceToPlain)(files)));
        Logger_1.default.debug("Saved Files: ");
        let fileDTOs = [];
        savedFiles.forEach(file => fileDTOs.push((0, class_transformer_1.plainToInstance)(FileDTO_1.default, file, { excludeExtraneousValues: true })));
        Logger_1.default.debug("Files saved:");
        return fileDTOs;
    }
    async saveFile(file) {
        let savedFile = await FileEntity_1.default.create(AppUtils_1.default.nullPropsRemover((0, class_transformer_1.instanceToPlain)(file)));
        await savedFile.save();
        return (0, class_transformer_1.plainToInstance)(FileDTO_1.default, savedFile);
    }
};
FilesRepository = __decorate([
    (0, tsyringe_1.autoInjectable)()
], FilesRepository);
exports.default = FilesRepository;
