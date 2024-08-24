const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const aspirasiSchema = new Schema({
  nama: {
    type: String,
    required: true,
  },
  hp: {
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
  aspirasi: {
    type: String,
    required: false,
  },
  sarankritik: {
    type: String,
    required: false,
  },
});

const Aspirasi = mongoose.model("Aspirasi", aspirasiSchema);
module.exports = Aspirasi;
