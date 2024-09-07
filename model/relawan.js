const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const relawan = new Schema({
  token: {
    type: String,
    required: true,
  },
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
  suratPernyataan: {
    type: String,
    required: true,
  },
  ttd: {
    type: String,
    required: false,
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
    default: Date.now(),
  },
  status: {
    type: String,
    enum: ["pending", "success", "gagal"],
    default: "pending",
  },
});

const Relawan = mongoose.model("Relawan", relawan);
module.exports = Relawan;
