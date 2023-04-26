import {autoInjectable} from "tsyringe";
import MetaKeywords from "../dto/MetaKeywords";
import MetaKeywordsRepository from "../repository/MetaKeywordsRepository";

@autoInjectable()
export default class MetaKeywordsService {

    private _metaKeywordsRepository: MetaKeywordsRepository;

    constructor(metaKeywordsRepository: MetaKeywordsRepository) {
        this._metaKeywordsRepository = metaKeywordsRepository;
    }

    async addMetaKeywords(metaKeywords: MetaKeywords): Promise<MetaKeywords> {
        return this._metaKeywordsRepository.saveMetaKeywords(metaKeywords);
    }
}