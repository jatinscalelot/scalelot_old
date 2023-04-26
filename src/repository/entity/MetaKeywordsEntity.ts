import {Schema, model} from 'mongoose';
import MetaKeywords from "../../dto/MetaKeywords";

interface MetaKeywordsEntity extends Document {
    country: string,
    page: string,
    keywords: string,
}

const metaKeywordsSchema = new Schema<MetaKeywordsEntity>({
    country:{
        type: String,
        minlength: 2,
        required: true
    },
    page: {
        type: String,
        minlength: 2,
        required: true
    },
    keywords: {
        type: String,
        minlength: 2,
        required: true
    }
});


export default model<MetaKeywordsEntity>("meta_keywords", metaKeywordsSchema);