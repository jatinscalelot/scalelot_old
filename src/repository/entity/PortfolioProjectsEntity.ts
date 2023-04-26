import {Schema, model} from 'mongoose';
import {ObjectId} from "mongodb";

interface PortfolioProjectsEntity extends Document {
    title: string,
    category: string,
    pageLink: string,
    rating: string,
    description: string,
    webFramework: string[],
    programmingLanguages: string[],
    miscellaneous: string[],
    libraries: string[],
    uiFrameworks: string[],
    designingLanguage: string[],
    designingTools: string[],
    priority: string,
    tags: string[],
    files: string[],
}

const portfolioProjectsSchema = new Schema<PortfolioProjectsEntity>({
    title:{
        type: String,
        minlength: 2,
        required: true
    },
    category:{
        type: String,
        minlength: 2,
        required: true
    },
    pageLink:{
        type: String
    },
    rating:{
        type: String,
        minlength: 1,
        required: true
    },
    description:{
        type: String
    },
    webFramework:[{
        type: String,
        minlength: 2,
    }],
    programmingLanguages:[{
        type: String,
        minlength: 2,
    }],
    miscellaneous:[{
        type: String,
        minlength: 2,
    }],
    libraries:[{
        type: String,
        minlength: 2,
    }],
    uiFrameworks:[{
        type: String,
        minlength: 2,
    }],
    designingLanguage:[{
        type: String,
        minlength: 2,
    }],
    designingTools:[{
        type: String,
        minlength: 2,
    }],
    priority: {
        type: String,
        required: true,
    },
    tags: [{
        type: String,
    }],
    files: [{
        type: String,
        required: true
    }],
});


export default model<PortfolioProjectsEntity>("portfolio-project", portfolioProjectsSchema);