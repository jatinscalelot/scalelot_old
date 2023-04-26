import mongoose from "mongoose";
import {singleton} from "tsyringe";
import {db, DEFAULT_USER_CREDS} from "./Config";
import Logger from "../utils/Logger";
import LoginEntity from "../repository/entity/LoginEntity";
import bcrypt from 'bcrypt';


@singleton()
export default class MongoDBConnectionConfig {
    constructor(dbConnection: mongoose.Connection) {
        this._isDBInitialised = false;

    }

    private _isDBInitialised: boolean;

    /**
     * Getter isDBInitialised
     * @return {boolean}
     */
    public get isDBInitialised(): boolean {
        return this._isDBInitialised;
    }

    private _dbConnection?: mongoose.Connection;

    /**
     * Getter $dbConnection
     * @return {mongoose.Connection}
     */
    public get dbConnection(): mongoose.Connection | undefined {
        return this._dbConnection;
    }

    public async initializeDB() {
        Logger.debug("Initializing DB");
        mongoose.connect(db.connectionString!, {dbName: "scalelot"}, (error: Error) => {
            if (error) {
                Logger.error(error.stack);
            } else {
                Logger.debug("MongoDB Connected");
            }
        });
        this._dbConnection = mongoose.connection;
        this._isDBInitialised = true;

        await LoginEntity.collection.drop();

        let passwordHash: string = await bcrypt.hash(DEFAULT_USER_CREDS.password, 10)
        const loginEntity: any = new LoginEntity({userName: DEFAULT_USER_CREDS.userName, password: passwordHash});
        await loginEntity.save();

        Logger.debug("DB Initialised");

    }


}