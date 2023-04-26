"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppUtils {
    static nullPropsRemover(obj) {
        if (Array.isArray(obj)) {
            return obj
                .map(v => (v && typeof v === 'object') ? AppUtils.nullPropsRemover(v) : v)
                .filter(v => !(v == null));
        }
        else {
            return Object.entries(obj)
                .map(([k, v]) => [k, v && typeof v === 'object' ? AppUtils.nullPropsRemover(v) : v])
                .reduce((a, [k, v]) => (v == null ? a : (a[k] = v, a)), {});
        }
    }
}
exports.default = AppUtils;
