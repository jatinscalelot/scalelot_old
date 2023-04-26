import {Expose, Transform} from "class-transformer";
import mongoose from "mongoose";

export default class Login{
    @Expose()
    @Transform(param => param.obj ? param.obj.id : null, {toClassOnly: true})
    private readonly _id?: mongoose.Types.ObjectId;

    @Expose({name: "userName"})
    private _userName: string;

    @Expose({name: "password"})
    private _password: string;

    constructor(id: mongoose.Types.ObjectId, userName: string, password: string) {
        this._id = id;
        this._userName = userName;
        this._password = password;
    }


    get id(): mongoose.Types.ObjectId {
        return <mongoose.Types.ObjectId>this._id;
    }

    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }
}