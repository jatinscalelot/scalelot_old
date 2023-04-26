import {Schema, model} from 'mongoose';

interface FileEntity extends Document {
    _id:string
    fieldname: string,
    originalname: string,
    encoding: string,
    mimetype: string,
    size: string,
}

const fileSchema = new Schema<FileEntity>({
    fieldname:{
        type: String,
        minlength: 2,
        required: true
    },
    originalname: {
        type: String,
        minlength: 2,
        required: true
    },
    encoding: {
        type: String,
        minlength: 2,
        required: true
    },
    mimetype: {
        type: String,
        minlength: 2,
        required: true
    },
    size: {
        type: String,
        minlength: 2,
        required: true
    }
});


export default model<FileEntity>("files", fileSchema);