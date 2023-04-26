import 'reflect-metadata';
import Logger from './utils/Logger';
import {db, environment, port} from "./config/Config";
import {container} from "tsyringe";
import AppWideConfig from './config/AppWideConfig';

const appWideConfig: AppWideConfig = container.resolve(AppWideConfig);

appWideConfig.getConfiguredApp().listen(port, () => {
    Logger.info(`server running on port : ${port}`);
    Logger.error("App Running for profile: " + environment);
}).on('error', (e: any) => Logger.error(e));