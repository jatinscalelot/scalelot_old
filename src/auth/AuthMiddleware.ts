import {ProtectedRequest} from "../utils/app-request";
import {NextFunction, Response} from "express";
import {autoInjectable} from "tsyringe";
import {PROTECTED_ENDPOINTS} from "../config/Config";
import Logger from "../utils/Logger";
import {BadTokenError} from "../error/ApiError";
import URLUtils from "../utils/URLUtils";
import JWT from "../config/JWT";
import SessionPayload from "../utils/other/SessionPayload";


@autoInjectable()
export default class AuthMiddleware {

    authMiddleware = [
        //Validate if Auth token is provided
        async (req: ProtectedRequest, res: Response, next: NextFunction) => {
            Logger.debug("Validating for auth token: " + req.url);
            if (PROTECTED_ENDPOINTS.includes(req.url)) {
                if (req.header('auth-token')) {
                    next();
                }
                else {
                    next(new BadTokenError());
                }
            } else {
                next();
            }
        },

        // //Validate if CSRF token is provided
        // async (req: ProtectedRequest, res: Response, next: NextFunction) => {
        //     Logger.debug("Validating for csrf token");
        //     if (!openEndpoints.includes(req.url)) {
        //         validator(schema.csrfToken, ValidationSource.HEADER)(req, res, next);
        //     } else {
        //         next();
        //     }
        // },
        //
        // //Validate CSRF token
        // async (req: ProtectedRequest, res: Response, next: NextFunction) => {
        //     Logger.debug("Validating CSRF Token");
        //     if (URLUtils.isProtectedURL(req)) {
        //         await JWT.decodeCSRFToken(req.header("csrf-token")!);
        //     }
        //     next();
        // },


        //Validate auth token and save payload in request
        async (req: ProtectedRequest, res: Response, next: NextFunction) => {
            Logger.debug("Validating Session token");
            try {
                if (URLUtils.isProtectedURL(req)) {
                    await JWT.validateSessionToken(req.header("auth-token") as string);
                    let sessionPayload: SessionPayload = await JWT.decodeSessionToken(req.header("auth-token")!);
                    req.accessToken = req.header("auth-token")!;
                    req.sessionPayload = sessionPayload;
                }
                Logger.debug("Validation success")
                next();
            }catch(e: any) {
                Logger.error(e.stack);
                next(new BadTokenError());
            }
        }
    ];


}
