const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const laporanIsu = new Schema({
  JudulLaporan: {
    type: String,
    required: true,
  },
  namaPelapor: {
    type: String,
    required: true,
  },
  isilaporan: {
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
  statusLaporan: {
    type: String,
    enum: [
      "Belum diBaca",
      "Sudah diBaca",
      "Sedang diTinjau",
      "Selesai diProses",
    ],
    default: "Belum diBaca",
  },
  tanggal: {
    type: Date,
    required: true,
  },
});

const LaporanIsu = mongoose.model("LaporanIsu", laporanIsu);
module.exports = LaporanIsu;
