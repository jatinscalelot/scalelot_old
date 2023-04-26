import {Expose, Transform} from "class-transformer";
import mongoose from "mongoose";

export default class Testimonial {
    @Expose()
    @Transform(param => param.obj ? param.obj.id : null, {toClassOnly: true})
    @Transform(param => param.obj && param.obj._id ? param.obj._id.toString() : null, {toPlainOnly: true})
    private readonly _id?: string;

    @Expose({name: 'rating'})
    private _rating: string;

    @Expose({name: 'clientName'})
    private _clientName: string;

    @Expose({name: 'clientDesignation'})
    private _clientDesignation: string;

    @Expose({name: 'review'})
    private _review: string;

    @Expose({name: 'tags'})
    private _tags: string;

    @Expose({name: "files"})
    private _files: string[];

    constructor(id: string, rating: string, clientName: string, clientDesignation: string, review: string, tags: string, files: string[]) {
        this._id = id;
        this._rating = rating;
        this._clientName = clientName;
        this._clientDesignation = clientDesignation;
        this._review = review;
        this._tags = tags;
        this._files = files;
    }

    get id(): string {
        return <string>this._id;
    }

    get rating(): string {
        return this._rating;
    }

    set rating(value: string) {
        this._rating = value;
    }

    get clientName(): string {
        return this._clientName;
    }

    set clientName(value: string) {
        this._clientName = value;
    }

    get clientDesignation(): string {
        return this._clientDesignation;
    }

    set clientDesignation(value: string) {
        this._clientDesignation = value;
    }

    get review(): string {
        return this._review;
    }

    set review(value: string) {
        this._review = value;
    }

    get tags(): string {
        return this._tags;
    }

    set tags(value: string) {
        this._tags = value;
    }

    get files(): string[] {
        return this._files;
    }

    set files(value: string[]) {
        this._files = value;
    }
}