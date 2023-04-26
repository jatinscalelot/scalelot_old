import {autoInjectable} from "tsyringe";
import AppUtils from "../utils/AppUtils";
import {instanceToPlain, plainToInstance} from "class-transformer";
import MetaKeywords from "../dto/MetaKeywords";
import MetaKeywordsEntity from "./entity/MetaKeywordsEntity";

@autoInjectable()
export default class MetaKeywordsRepository {
    public async saveMetaKeywords(metaKeywords: MetaKeywords): Promise<MetaKeywords> {
        const contactUsEntity = new MetaKeywordsEntity(AppUtils.nullPropsRemover(instanceToPlain(metaKeywords)));
        await contactUsEntity.save();
        return plainToInstance(MetaKeywords, contactUsEntity, {excludeExtraneousValues: true});
    }
}