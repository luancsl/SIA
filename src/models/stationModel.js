require('dotenv').config({ path: '.env' });
const mongoose = require('mongoose');

const { Schema } = mongoose;

const stationModel = new Schema(
  [{
    station_cod: { required: true, index: true, unique: true, type: String },
    elevation: { required: true, type: Number },
    location: { type: [Number], default: [0, 0] },
    city: { required: true, type: String },
    state: { required: true, type: String },
    country: { required: true, type: String, default: 'BR' },
    url: { required: true, index: true, unique: true, type: String },
  }],
  { versionKey: false, timestamps: { createdAt: 'created_at' } },
);

stationModel.index({ "location": "2d" });

module.exports = mongoose.model('Station', stationModel);