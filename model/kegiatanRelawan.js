const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const kegiatanRelawan = new Schema({
  namaKegiatan: {
    type: String,
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: false,
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
  alamatLengkap: {
    type: String,
    required: true,
  },
  tanggal: {
    type: String,
    required: true,
  },
  jamMulai: {
    type: String,
    required: true,
  },
  jamSelesai: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Menunggu", "Disetujui", "Ditolak", "Selesai"],
    default: "Menunggu",
  },
});

const KegiatanRelawan = mongoose.model("KegiatanRelawan", kegiatanRelawan);
module.exports = KegiatanRelawan;
