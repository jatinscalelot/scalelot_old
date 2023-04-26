import {Expose, Transform} from "class-transformer";
import {ObjectId} from "mongodb";
import mongoose from "mongoose";
import Logger from "../utils/Logger";

export default class ContactUs {

    @Expose()
    @Transform(param => param.obj ? param.obj.id : null, {toClassOnly: true})
    private readonly _id?: string;

    @Expose({name: 'name'})
    private _name: string;

    @Expose({name: 'companyName'})
    private _companyName: string;

    @Expose({name: 'email'})
    private _email: string;

    @Expose({name: 'phoneNumber'})
    private _phoneNumber: string;

    @Expose({name: 'description'})
    private _description: string;

    @Expose({name: "files"})
    private _files: string[];

    constructor(id: string, name: string, companyName: string, email: string, phoneNumber: string, description: string, files: string[]) {
        this._id = id;
        this._name = name;
        this._companyName = companyName;
        this._email = email;
        this._phoneNumber = phoneNumber;
        this._description = description;
        this._files = files;
    }

    get id(): string {
        return <string>this._id;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get companyName(): string {
        return this._companyName;
    }

    set companyName(value: string) {
        this._companyName = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    set phoneNumber(value: string) {
        this._phoneNumber = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get files(): string[] {
        return this._files;
    }

    set files(value: string[]) {
        this._files = value;
    }
}
