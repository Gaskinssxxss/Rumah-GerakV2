const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gallery = new Schema({
  judul: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  img2: {
    type: [],
    required: true,
  },
  deskripsi: {
    type: String,
    required: true,
  },
  tanggal: {
    type: String,
    required: true,
  },
});

const Gallery = mongoose.model("Gallery", gallery);
module.exports = Gallery;
