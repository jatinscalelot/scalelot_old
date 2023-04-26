import {Expose, Transform} from "class-transformer";
import mongoose from "mongoose";
export default class FileDTO {
    @Expose()
    @Transform(param => param.obj ? param.obj.id : null, {toClassOnly: true})
    private readonly _id?: mongoose.Types.ObjectId;

    @Expose({name: 'fieldname'})
    private _fieldname: string;

    @Expose({name: 'originalname'})
    private _originalname: string;

    @Expose({name: 'encoding'})
    private _encoding: string;

    @Expose({name: 'mimetype'})
    private _mimetype: string;

    @Expose({name: 'buffer'})
    private _buffer: string;

    @Expose({name: 'size'})
    private _size: number;

    constructor(id: mongoose.Types.ObjectId, fieldname: string, originalname: string, encoding: string, mimetype: string, buffer: string, size: number) {
        this._id = id;
        this._fieldname = fieldname;
        this._originalname = originalname;
        this._encoding = encoding;
        this._mimetype = mimetype;
        this._buffer = buffer;
        this._size = size;
    }

    get id(): mongoose.Types.ObjectId {
        return <mongoose.Types.ObjectId>this._id;
    }

    get fieldname(): string {
        return this._fieldname;
    }

    set fieldname(value: string) {
        this._fieldname = value;
    }

    get originalname(): string {
        return this._originalname;
    }

    set originalname(value: string) {
        this._originalname = value;
    }

    get encoding(): string {
        return this._encoding;
    }

    set encoding(value: string) {
        this._encoding = value;
    }

    get mimetype(): string {
        return this._mimetype;
    }

    set mimetype(value: string) {
        this._mimetype = value;
    }

    get buffer(): string {
        return this._buffer;
    }

    set buffer(value: string) {
        this._buffer = value;
    }

    get size(): number {
        return this._size;
    }

    set size(value: number) {
        this._size = value;
    }
}