import {Schema, model} from 'mongoose';

interface LoginEntity extends Document {
    _id:string
    userName: string,
    password: string,
}

const loginSchema = new Schema<LoginEntity>({
    userName:{
        type: String,
        minlength: 2,
        required: true
    },
    password: {
        type: String,
        minlength: 2,
        required: true
    }
});


export default model<LoginEntity>("login", loginSchema);