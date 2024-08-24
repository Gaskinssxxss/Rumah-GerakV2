const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const posko = new Schema({
  nama: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
  kecamatan: {
    type: String,
    required: true,
  },
  kelurahan: {
    type: String,
    required: true,
  },
  rt: {
    type: String,
    required: true,
  },
  rw: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  tanggal: {
    type: Date,
    required: true,
  },
});

const Posko = mongoose.model("Posko", posko);
module.exports = Posko;
