"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SessionPayload {
    constructor(userId) {
        this._userId = userId;
    }
    get userId() {
        return this._userId;
    }
    set userId(value) {
        this._userId = value;
    }
}
exports.default = SessionPayload;
