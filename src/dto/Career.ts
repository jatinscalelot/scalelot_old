import {Expose, Transform} from "class-transformer";
import mongoose from "mongoose";
import Logger from "../utils/Logger";

export default class Career {
    @Expose()
    @Transform(param => param.obj ? param.obj.id : null, {toClassOnly: true})
    private readonly _id?: mongoose.Types.ObjectId;

    @Expose({name: 'firstName'})
    private _firstName: string;

    @Expose({name: 'lastName'})
    private _lastName: string;

    @Expose({name: 'email'})
    private _email: string;

    @Expose({name: 'phoneNumber'})
    private _phoneNumber: string;

    @Expose({name: 'address'})
    private _address: string;

    @Expose({name: 'applyFor'})
    private _applyFor: string;

    @Expose({name: 'experience'})
    private _experience: string;

    @Expose({name: 'currentCTC'})
    private _currentCTC: string;

    @Expose({name: 'expectedCTC'})
    private _expectedCTC: string;

    @Expose({name: "files"})
    private _files: string[];

    constructor(id: mongoose.Types.ObjectId, firstName: string, lastName: string, email: string, phoneNumber: string, address: string, applyFor: string, experience: string, currentCTC: string, expectedCTC: string, files: string[]) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._phoneNumber = phoneNumber;
        this._address = address;
        this._applyFor = applyFor;
        this._experience = experience;
        this._currentCTC = currentCTC;
        this._expectedCTC = expectedCTC;
        this._files = files;
    }

    get id(): mongoose.Types.ObjectId {
        return <mongoose.Types.ObjectId>this._id;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
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

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get applyFor(): string {
        return this._applyFor;
    }

    set applyFor(value: string) {
        this._applyFor = value;
    }

    get experience(): string {
        return this._experience;
    }

    set experience(value: string) {
        this._experience = value;
    }

    get currentCTC(): string {
        return this._currentCTC;
    }

    set currentCTC(value: string) {
        this._currentCTC = value;
    }

    get expectedCTC(): string {
        return this._expectedCTC;
    }

    set expectedCTC(value: string) {
        this._expectedCTC = value;
    }

    get files(): string[] {
        return this._files;
    }

    set files(value: string[]) {
        this._files = value;
    }
}