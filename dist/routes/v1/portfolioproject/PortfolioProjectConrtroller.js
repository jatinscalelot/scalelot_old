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
const class_transformer_1 = require("class-transformer");
const PortfolioProject_1 = __importDefault(require("../../../dto/PortfolioProject"));
const PortfolioProjectService_1 = __importDefault(require("../../../service/PortfolioProjectService"));
const FileDTO_1 = __importDefault(require("../../../dto/FileDTO"));
let PortfolioProjectController = class PortfolioProjectController {
    constructor(portfolioProjectService) {
        this._router = express_1.default.Router();
        this._portfolioProjectService = portfolioProjectService;
    }
    routes() {
        Logger_1.default.debug("Configuring Meta Keywords Router");
        this._router.post('/', (0, AsyncHandler_1.default)(async (req, res) => this.addPortfolioProject(req, res)));
        return this._router;
    }
    async addPortfolioProject(req, res) {
        Logger_1.default.debug("Adding portfolio project");
        let portfolioProject = (0, class_transformer_1.plainToInstance)(PortfolioProject_1.default, req.body, { excludeExtraneousValues: true });
        Logger_1.default.debug("Got Portfolio Project");
        Logger_1.default.debug(portfolioProject);
        let files = req.files.map((file) => {
            let fileDTO = (0, class_transformer_1.plainToInstance)(FileDTO_1.default, file, { excludeExtraneousValues: true });
            fileDTO.buffer = file.buffer.toString("base64");
            return fileDTO;
        });
        portfolioProject = await this._portfolioProjectService.addPortfolioProject(portfolioProject, files);
        return res.redirect("/thanks");
        // return new SuccessResponse(ResponseMessages.CREATE_PORTFOLIO_PROJECT_SUCCESS, portfolioProject).send(res);
    }
};
PortfolioProjectController = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [PortfolioProjectService_1.default])
], PortfolioProjectController);
exports.default = PortfolioProjectController;
