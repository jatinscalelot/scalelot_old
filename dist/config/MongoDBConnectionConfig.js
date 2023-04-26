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
const mongoose_1 = __importDefault(require("mongoose"));
const tsyringe_1 = require("tsyringe");
const Config_1 = require("./Config");
const Logger_1 = __importDefault(require("../utils/Logger"));
const LoginEntity_1 = __importDefault(require("../repository/entity/LoginEntity"));
const bcrypt_1 = __importDefault(require("bcrypt"));
let MongoDBConnectionConfig = class MongoDBConnectionConfig {
    constructor(dbConnection) {
        this._isDBInitialised = false;
    }
    /**
     * Getter isDBInitialised
     * @return {boolean}
     */
    get isDBInitialised() {
        return this._isDBInitialised;
    }
    /**
     * Getter $dbConnection
     * @return {mongoose.Connection}
     */
    get dbConnection() {
        return this._dbConnection;
    }
    async initializeDB() {
        Logger_1.default.debug("Initializing DB");
        mongoose_1.default.connect(Config_1.db.connectionString, { dbName: "scalelot" }, (error) => {
            if (error) {
                Logger_1.default.error(error.stack);
            }
            else {
                Logger_1.default.debug("MongoDB Connected");
            }
        });
        this._dbConnection = mongoose_1.default.connection;
        this._isDBInitialised = true;
        await LoginEntity_1.default.collection.drop();
        let passwordHash = await bcrypt_1.default.hash(Config_1.DEFAULT_USER_CREDS.password, 10);
        const loginEntity = new LoginEntity_1.default({ userName: Config_1.DEFAULT_USER_CREDS.userName, password: passwordHash });
        await loginEntity.save();
        Logger_1.default.debug("DB Initialised");
    }
};
MongoDBConnectionConfig = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [mongoose_1.default.Connection])
], MongoDBConnectionConfig);
exports.default = MongoDBConnectionConfig;
