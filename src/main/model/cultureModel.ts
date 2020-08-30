import mongoose, { Schema, Document, Model } from 'mongoose';


export interface ICultureModel extends Document {
  culture: string;
  type: string;
  class: string;
  ini: number;
  mid: number;
  end: number;
  maxCropHeight: number;
  imageLink: string;
  region: string;
}

const CultureScheme: Schema = new Schema(
  {
    culture: { required: true, type: String },
    type: { type: String },
    class: { type: String },
    ini: { required: true, type: Number },
    mid: { required: true, type: Number },
    end: { required: true, type: Number },
    maxCropHeight: { type: Number },
    imageLink: { required: true, type: String },
    region: { type: String },
  },
  { versionKey: false, timestamps: { createdAt: 'created_at' } },
);

export const CultureModel: Model<ICultureModel> = mongoose.model('Culture', CultureScheme);