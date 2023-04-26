import {PROTECTED_ENDPOINTS} from "../config/Config";
import {ProtectedRequest} from "./app-request";

export default class URLUtils {
    public static isProtectedURL(req: Request | ProtectedRequest): boolean {
        return PROTECTED_ENDPOINTS.includes(req.url);
    }
}
