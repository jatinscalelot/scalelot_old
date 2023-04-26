"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const Logger_1 = __importDefault(require("./utils/Logger"));
const Config_1 = require("./config/Config");
const tsyringe_1 = require("tsyringe");
const AppWideConfig_1 = __importDefault(require("./config/AppWideConfig"));
const appWideConfig = tsyringe_1.container.resolve(AppWideConfig_1.default);
appWideConfig.getConfiguredApp().listen(Config_1.port, () => {
    Logger_1.default.info(`server running on port : ${Config_1.port}`);
    Logger_1.default.error("App Running for profile: " + Config_1.environment);
}).on('error', (e) => Logger_1.default.error(e));
