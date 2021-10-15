import mongoose, { Schema, Document, Model } from 'mongoose';
import { cultureSchema } from '../doc/schema';

type Image = {
  url: string;
  source?: string;
}

type Region = {
  name: {
    enUS: string;
    ptBR: string;
  },
  iniStageDays: number;
  devStageDays: number;
  midStageDays: number;
  endStageDays: number;
  totalDays: number;
  cultureMonths: number[],
}
export interface ICultureModel extends Document {
  name: {
    enUS: string;
    ptBR: string;
    scientific?: string
  };
  type?: {
    enUS?: string;
    ptBR?: string;
  };
  class: {
    enUS?: string;
    ptBR: string;
  };
  description?: {
    enUS?: string;
    ptBR?: string;
  };
  iniStagekc: number;
  devStagekc?: number;
  midStagekc: number;
  endStagekc: number;
  maxCropHeight?: number;
  icon: string;
  images?: Image[];
  regions?: Region[];
  tags?: string[];
  access?: number;
  source: string;
}

const ResgionSchema: Schema = new Schema(
  {
    name: {
      enUS: { required: true, type: String },
      ptBR: { required: true, type: String },
    },
    iniStageDays: { required: true, type: Number },
    devStageDays: { required: true, type: Number },
    midStageDays: { required: true, type: Number },
    endStageDays: { required: true, type: Number },
    totalDays: { required: true, type: Number },
    cultureMonths: { required: true, type: [Number] },
  }
)
const ImageSchema: Schema = new Schema(
  {
    url: { required: true, type: String },
    source: { required: false, type: String },
  }
)

const CultureSchema: Schema = new Schema(
  {
    name: {
      enUS: { index: true, unique: true, required: true, type: String },
      ptBR: { index: true, unique: true, required: true, type: String },
      scientific: { unique: true, sparse: true, type: String },
    },
    type: {
      enUS: { type: String },
      ptBR: { type: String },
    },
    class: {
      enUS: { type: String },
      ptBR: { required: true, type: String },
    },
    description: {
      enUS: { type: String },
      ptBR: { type: String },
    },
    iniStagekc: { required: true, type: Number },
    devStagekc: { type: Number },
    midStagekc: { required: true, type: Number },
    endStagekc: { required: true, type: Number },
    maxCropHeight: { type: Number },
    icon: { required: true, type: String },
    images: { required: false, type: [ImageSchema] },
    regions: { required: false, type: [ResgionSchema], default: [] },
    tags: { type: [String], default: [] },
    source: { required: true, type: String },
    access: { type: Number, default: 0 },
  },
  { versionKey: false, timestamps: { createdAt: 'created_at' } },
);

CultureSchema.index({ '$**': 'text' }, { default_language: "portuguese" });

export const CultureModel: Model<ICultureModel> = mongoose.model<ICultureModel>('Culture', CultureSchema);