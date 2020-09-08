import mongoose, { Schema, Document, Model } from 'mongoose';



export interface IStationModel extends Document {
  stationCod: string,
  name?: string,
  wsiCod?: string,
  oscarCod?: string,
  status: string,
  type: string,
  city?: string,
  state?: string,
  country: string,
  url?: string,
  entity: string,
  location: {
    type: string,
    coordinates: [number, number]
  },
  elevation?: number,
  distance?: number,
}

const stationSchema = new Schema(
  {
    stationCod: { required: true, index: true, unique: true, type: String },
    name: { type: String },
    wsiCod: { unique: true, sparse: true, type: String },
    oscarCod: { unique: true, sparse: true, type: String },
    status: { required: true, type: String, enum: ['enabled', 'disabled'] },
    type: { required: true, type: String, enum: ['automatic', 'manual'] },
    city: { type: String, default: '' },
    state: { type: String, default: '' },
    country: { required: true, type: String, maxlength: 2, minlength: 2 },
    url: { unique: true, sparse: true, type: String },
    entity: { required: true, type: String },
    location: { type: { type: String, default: 'Point' }, coordinates: { type: [Number, Number] } },
    elevation: { type: Number },
  },
  { versionKey: false, timestamps: { createdAt: 'created_at' } },
);

stationSchema.index({ "location": "2dsphere" });

export const stationModel: Model<IStationModel> = mongoose.model('Station', stationSchema);