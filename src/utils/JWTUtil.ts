import JWT from "../config/JWT";
import Logger from "./Logger";

export default class JWTUtil {

    static async generateJWTSessionToken(payload: any): Promise<string> {
        Logger.debug("Creating Session Token");
        let token = await JWT.encode(
            payload
        );
        Logger.debug("Token created.");
        return token;
    }

    static async generateJWTCSRFToken(payload: any): Promise<string> {
        Logger.debug("Creating CSRF Token");
        let token = await JWT.encode(
            payload
        );
        Logger.debug("Token created.");
        return token;
    }


}
