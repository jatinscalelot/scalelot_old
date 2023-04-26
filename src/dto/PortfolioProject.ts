import {Expose, Transform} from "class-transformer";
import FileDTO from "./FileDTO";
import mongoose from "mongoose";
import {PriorityEnum} from "../utils/enum/PriorityEnum";

export default class PortfolioProject {

    @Expose()
    @Transform(param => param.obj ? param.obj._id : null, {toClassOnly: true})
    @Transform(param => param.obj && param.obj._id ? param.obj._id.toString() : null, {toPlainOnly: true})
    private readonly _id?: mongoose.Types.ObjectId;

    @Expose({name: "title"})
    private _title: string;

    @Expose({name: "category"})
    private _category: string;

    @Expose({name: "pageLink"})
    private _pageLink: string;

    @Expose({name: "rating"})
    private _rating: string;

    @Expose({name: "description"})
    private _description: string;

    @Expose({name: "webFramework"})
    private _webFramework: string[];

    @Expose({name: "programmingLanguages"})
    private _programmingLanguages: string[];

    @Expose({name: "miscellaneous"})
    private _miscellaneous: string[];

    @Expose({name: "libraries"})
    private _libraries: string[];

    @Expose({name: "uiFrameworks"})
    private _uiFrameworks: string[];

    @Expose({name: "designingLanguage"})
    private _designingLanguage: string[];

    @Expose({name: "designingTools"})
    private _designingTools: string;

    @Expose({name: "tags"})
    private _tags: string[];

    @Expose({name: "priority"})
    private _priority: PriorityEnum;

    @Expose({name: "files"})
    private _files: string[];

    constructor(id: mongoose.Types.ObjectId, title: string, category: string, pageLink: string, rating: string, description: string, webFramework: string[], programmingLanguages: string[], miscellaneous: string[], libraries: string[], uiFrameworks: string[], designingLanguage: string[], designingTools: string, tags: string[], priority: PriorityEnum, files: string[]) {
        this._id = id;
        this._title = title;
        this._category = category;
        this._pageLink = pageLink;
        this._rating = rating;
        this._description = description;
        this._webFramework = webFramework;
        this._programmingLanguages = programmingLanguages;
        this._miscellaneous = miscellaneous;
        this._libraries = libraries;
        this._uiFrameworks = uiFrameworks;
        this._designingLanguage = designingLanguage;
        this._designingTools = designingTools;
        this._tags = tags;
        this._priority = priority;
        this._files = files;
    }

    get id(): mongoose.Types.ObjectId {
        return <mongoose.Types.ObjectId>this._id;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get category(): string {
        return this._category;
    }

    set category(value: string) {
        this._category = value;
    }

    get pageLink(): string {
        return this._pageLink;
    }

    set pageLink(value: string) {
        this._pageLink = value;
    }

    get rating(): string {
        return this._rating;
    }

    set rating(value: string) {
        this._rating = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get webFramework(): string[] {
        return this._webFramework;
    }

    set webFramework(value: string[]) {
        this._webFramework = value;
    }

    get programmingLanguages(): string[] {
        return this._programmingLanguages;
    }

    set programmingLanguages(value: string[]) {
        this._programmingLanguages = value;
    }

    get miscellaneous(): string[] {
        return this._miscellaneous;
    }

    set miscellaneous(value: string[]) {
        this._miscellaneous = value;
    }

    get libraries(): string[] {
        return this._libraries;
    }

    set libraries(value: string[]) {
        this._libraries = value;
    }

    get uiFrameworks(): string[] {
        return this._uiFrameworks;
    }

    set uiFrameworks(value: string[]) {
        this._uiFrameworks = value;
    }

    get designingLanguage(): string[] {
        return this._designingLanguage;
    }

    set designingLanguage(value: string[]) {
        this._designingLanguage = value;
    }

    get designingTools(): string {
        return this._designingTools;
    }

    set designingTools(value: string) {
        this._designingTools = value;
    }

    get files(): string[] {
        return this._files;
    }

    set files(value: string[]) {
        this._files = value;
    }

    get priority(): PriorityEnum {
        return this._priority;
    }

    set priority(value: PriorityEnum) {
        this._priority = value;
    }

    get tags(): string[] {
        return this._tags;
    }

    set tags(value: string[]) {
        this._tags = value;
    }
}