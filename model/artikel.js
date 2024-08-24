const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artikel = new Schema({
  judul: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  p1: {
    type: String,
    required: true,
  },
  p2: {
    type: String,
    required: true,
  },
  img2: {
    type: String,
    required: true,
  },
  p3: {
    type: String,
    required: true,
  },
  p4: {
    type: String,
    required: false,
  },
  p5: {
    type: String,
    required: false,
  },
  author: {
    type: String,
    required: true,
  },
  tanggal: {
    type: String,
    required: true,
  },
});

const Artikel = mongoose.model("Artikel", artikel);
module.exports = Artikel;
