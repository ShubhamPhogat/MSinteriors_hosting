const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    src: { type: String, required: true },
    description: { type: String, required: true },
    color: { type: String, required: true },
    finish: { type: String, required: true },
    theme: { type: String, required: true },
  },
  { timestamps: true }
);

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
