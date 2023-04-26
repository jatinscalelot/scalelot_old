import {Schema, model} from 'mongoose';

interface CareerEntity extends Document {
  _id:string
  firstName: string, 
  lastName: string, 
  email: string, 
  phoneNumber: string, 
  address: string, 
  applyFor: string, 
  experience: string, 
  currentCTC: string, 
  expectedCTC: string,
  files: string[],
}

const careerSchema = new Schema<CareerEntity>({
  firstName:{
    type: String,
    minlength: 2,
    required: true
  },
  lastName: {
    type: String,
    minlength: 2,
    required: true
  },
  email: {
    type: String,
    minlength: 2,
    required: true
  },
  phoneNumber: {
    type: String,
    minlength: 2,
    required: true
  },
  address: {
    type: String,
    minlength: 2,
  },
  applyFor: {
    type: String,
    minlength: 2,
    required: true
  },
  experience: {
    type: String,
    minlength: 2,
    required: true
  },
  currentCTC: {
    type: String,
    minlength: 2,
    required: true
  },
  expectedCTC: {
    type: String,
    minlength: 2,
    required: true
  },
  files: [{
    type: String,
    required: true
  }],
});


export default model<CareerEntity>("career", careerSchema);