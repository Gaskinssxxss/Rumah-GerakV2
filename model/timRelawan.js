const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const timrelawan = new Schema({
  token: {
    type: String,
    required: true,
  },
  namatim: {
    type: String,
    required: true,
  },
  namaketua: {
    type: String,
    required: true,
  },
  totalanggota: {
    type: Number,
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
    required: true,
  },
  ttdAnggota: {
    type: [],
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
    default: Date.now(),
  },
  status: {
    type: String,
    enum: ["pending", "success", "gagal"],
    default: "pending",
  },
});

const timRelawan = mongoose.model("timRelawan", timrelawan);
module.exports = timRelawan;
