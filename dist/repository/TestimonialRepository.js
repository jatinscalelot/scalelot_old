"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const Testimonial_1 = __importDefault(require("../dto/Testimonial"));
const AppUtils_1 = __importDefault(require("../utils/AppUtils"));
const class_transformer_1 = require("class-transformer");
const TestimonialEntity_1 = __importDefault(require("./entity/TestimonialEntity"));
const Logger_1 = __importDefault(require("../utils/Logger"));
let TestimonialRepository = class TestimonialRepository {
    async addTestimonial(testimonial) {
        Logger_1.default.debug("Saving Testimonial");
        const testimonialEntity = new TestimonialEntity_1.default(AppUtils_1.default.nullPropsRemover((0, class_transformer_1.instanceToPlain)(testimonial)));
        await testimonialEntity.save();
        return (0, class_transformer_1.plainToInstance)(Testimonial_1.default, JSON.stringify(testimonialEntity.toObject({ minimize: true, versionKey: false })), { excludeExtraneousValues: true });
    }
    async getAllTestimonails() {
        let result = await TestimonialEntity_1.default.aggregate([{
                "$lookup": {
                    from: 'files',
                    localField: 'files',
                    foreignField: '_id',
                    as: 'images'
                }
            }]);
        return (0, class_transformer_1.plainToInstance)(Testimonial_1.default, result, { excludeExtraneousValues: true });
    }
};
TestimonialRepository = __decorate([
    (0, tsyringe_1.autoInjectable)()
], TestimonialRepository);
exports.default = TestimonialRepository;
