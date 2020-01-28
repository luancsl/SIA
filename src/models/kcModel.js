require('dotenv').config({ path: '.env' });
const mongoose = require('mongoose');

const { Schema } = mongoose;

const kcModel = new Schema(
  [{
    culture: { required: true, type: String },
    type: { type: String, default: '' },
    class: { type: String, default: '' },
    ini: { required: true, type: Number },
    mid: { required: true, type: Number },
    end: { required: true, type: Number },
    max_crop_height: { type: Number, default: null },
    image_link: { required: true, type: String, default: '' },
    region: { type: String, default: null },
  }],
  { versionKey: false, timestamps: { createdAt: 'created_at' } },
);

module.exports = mongoose.model('Kc', kcModel);