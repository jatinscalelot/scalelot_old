import express, {Express} from 'express';
import Logger from '../utils/Logger';
import bodyParser from 'body-parser';
import cors from 'cors';
import {corsUrl} from "./Config";
import RouterConfig from '../routes/v1/RouterConfig';
import ErrorHandlerMiddlewares from '../middleware/ErrorHandlerMiddlewares';
import {autoInjectable, container} from "tsyringe";
import Multer from 'multer';
import MongoDBConnectionConfig from './MongoDBConnectionConfig';
import AuthMiddleware from "../auth/AuthMiddleware";
import FrontEndRouterConfig from "../routes/frontend/FrontEndRouterConfig";
import FrontEndBeanConfig from "./FrontEndBeanConfig";

@autoInjectable()
export default class AppWideConfig {

    private app: Express;
    private isConfigured: boolean;
    private authMiddleware: AuthMiddleware;
    private routerConfig: RouterConfig;
    private frontEndRouterConfig: FrontEndRouterConfig;
    private mongoDBConnectionConfig: MongoDBConnectionConfig;

    constructor( routerConfig: RouterConfig, mongoDBConnectionConfig: MongoDBConnectionConfig, frontEndRouterConfig: FrontEndRouterConfig, authMiddleware: AuthMiddleware) {
        this.app = express();
        this.isConfigured = false;
        this.routerConfig = routerConfig;
        this.mongoDBConnectionConfig = mongoDBConnectionConfig;
        this.frontEndRouterConfig = frontEndRouterConfig;
        this.authMiddleware = authMiddleware;
    }

    public getConfiguredApp(): express.Express {
        Logger.debug("Returning Configured app");

        process.on('uncaughtException', (e) => {
            Logger.error(e);
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

    private configureMongoDBConnection() {
        this.mongoDBConnectionConfig.initializeDB();
    }
    
    private configureBodyParser() {
        Logger.debug("Configuring Body Parser");
        this.app.use(bodyParser.json({limit: '1mb'}));
        this.app.use(bodyParser.urlencoded({limit: '1mb', extended: true, parameterLimit: 50000}));
    }

    private configureMulter() {

        const multer = Multer({
            storage: Multer.memoryStorage(),
            limits: {
                fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
            },
        });

        this.app.use(multer.any());
    }

    private configureCORS() {
        Logger.debug("Configuring CORS");
        this.app.use(cors({origin: corsUrl, optionsSuccessStatus: 200}));
    }

    private attachPreRouterMiddlewares() {
        Logger.debug("Configuring Pre Router Middlewares");
        this.app.use(this.authMiddleware.authMiddleware);
    }

    private configureV1Router() {
        Logger.debug("Configuring Regular Router");
        this.app.use('/api/v1', this.routerConfig.getRouter());
    }

    private configureFrontEndEngineAndExtension() {
        Logger.debug("Configuring Front end engine and extension");

        const path = require("path");
        const expressLayouts = require("express-ejs-layouts");
        // const partials = require('express-partials');

        this.app.use(expressLayouts)
        this.app.set('layout', './layouts/layouts')
        this.app.set("views", path.join(__dirname, "../views"));
        this.app.set("view engine", "ejs");
        // this.app.use(partials())

        Logger.debug("Configuring public files for folder: " + path.join(__dirname, "../../public"));
        this.app.use(express.static(path.join(__dirname, "../../public")));
    }

    private configureFrontEndRouter() {
        Logger.debug("Configuring front end router");
        this.configureRobots();
        this.app.use('/', this.frontEndRouterConfig.getRouter());
    }

    private configureRobots() {
        const robots = require('express-robots-txt');

        this.app.use(robots([
            {
                UserAgent: '*',
                allow: '/',
                sitemap: 'https://scalelot.com/sitemap.xml',
            }
        ]));
    }

    private attachErrorMiddleware() {
        Logger.debug("Configuring Error Middlewares");
        // catch 404 and forward to error handler
        this.app.use(ErrorHandlerMiddlewares.undefinedRoutesErrorMiddleware);

        // Middleware Error Handler
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.app.use(ErrorHandlerMiddlewares.errorHandlerMiddleware);
    }
}