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
const express_1 = __importDefault(require("express"));
const Logger_1 = __importDefault(require("../utils/Logger"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const Config_1 = require("./Config");
const RouterConfig_1 = __importDefault(require("../routes/v1/RouterConfig"));
const ErrorHandlerMiddlewares_1 = __importDefault(require("../middleware/ErrorHandlerMiddlewares"));
const tsyringe_1 = require("tsyringe");
const multer_1 = __importDefault(require("multer"));
const MongoDBConnectionConfig_1 = __importDefault(require("./MongoDBConnectionConfig"));
const AuthMiddleware_1 = __importDefault(require("../auth/AuthMiddleware"));
const FrontEndRouterConfig_1 = __importDefault(require("../routes/frontend/FrontEndRouterConfig"));
let AppWideConfig = class AppWideConfig {
    constructor(routerConfig, mongoDBConnectionConfig, frontEndRouterConfig, authMiddleware) {
        this.app = (0, express_1.default)();
        this.isConfigured = false;
        this.routerConfig = routerConfig;
        this.mongoDBConnectionConfig = mongoDBConnectionConfig;
        this.frontEndRouterConfig = frontEndRouterConfig;
        this.authMiddleware = authMiddleware;
    }
    getConfiguredApp() {
        Logger_1.default.debug("Returning Configured app");
        process.on('uncaughtException', (e) => {
            Logger_1.default.error(e);
        });
        if (this.isConfigured) {
            return this.app;
        }
        this.configureMongoDBConnection();
        this.configureBodyParser();
        this.configureMulter();
        this.configureCORS();
        this.attachPreRouterMiddlewares();
        this.configureV1Router();
        this.configureFrontEndEngineAndExtension();
        this.configureFrontEndRouter();
        this.attachErrorMiddleware();
        this.isConfigured = true;
        return this.app;
    }
    configureMongoDBConnection() {
        this.mongoDBConnectionConfig.initializeDB();
    }
    configureBodyParser() {
        Logger_1.default.debug("Configuring Body Parser");
        this.app.use(body_parser_1.default.json({ limit: '1mb' }));
        this.app.use(body_parser_1.default.urlencoded({ limit: '1mb', extended: true, parameterLimit: 50000 }));
    }
    configureMulter() {
        const multer = (0, multer_1.default)({
            storage: multer_1.default.memoryStorage(),
            limits: {
                fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
            },
        });
        this.app.use(multer.any());
    }
    configureCORS() {
        Logger_1.default.debug("Configuring CORS");
        this.app.use((0, cors_1.default)({ origin: Config_1.corsUrl, optionsSuccessStatus: 200 }));
    }
    attachPreRouterMiddlewares() {
        Logger_1.default.debug("Configuring Pre Router Middlewares");
        this.app.use(this.authMiddleware.authMiddleware);
    }
    configureV1Router() {
        Logger_1.default.debug("Configuring Regular Router");
        this.app.use('/api/v1', this.routerConfig.getRouter());
    }
    configureFrontEndEngineAndExtension() {
        Logger_1.default.debug("Configuring Front end engine and extension");
        const path = require("path");
        const expressLayouts = require("express-ejs-layouts");
        // const partials = require('express-partials');
        this.app.use(expressLayouts);
        this.app.set('layout', './layouts/layouts');
        this.app.set("views", path.join(__dirname, "../views"));
        this.app.set("view engine", "ejs");
        // this.app.use(partials())
        Logger_1.default.debug("Configuring public files for folder: " + path.join(__dirname, "../../public"));
        this.app.use(express_1.default.static(path.join(__dirname, "../../public")));
    }
    configureFrontEndRouter() {
        Logger_1.default.debug("Configuring front end router");
        this.configureRobots();
        this.app.use('/', this.frontEndRouterConfig.getRouter());
    }
    configureRobots() {
        const robots = require('express-robots-txt');
        this.app.use(robots([
            {
                UserAgent: '*',
                allow: '/',
                sitemap: 'https://scalelot.com/sitemap.xml',
            }
        ]));
    }
    attachErrorMiddleware() {
        Logger_1.default.debug("Configuring Error Middlewares");
        // catch 404 and forward to error handler
        this.app.use(ErrorHandlerMiddlewares_1.default.undefinedRoutesErrorMiddleware);
        // Middleware Error Handler
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.app.use(ErrorHandlerMiddlewares_1.default.errorHandlerMiddleware);
    }
};
AppWideConfig = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [RouterConfig_1.default, MongoDBConnectionConfig_1.default, FrontEndRouterConfig_1.default, AuthMiddleware_1.default])
], AppWideConfig);
exports.default = AppWideConfig;
