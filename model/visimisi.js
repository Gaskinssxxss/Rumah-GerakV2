const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const visimisi = new Schema({
  visi: {
    type: String,
    required: true,
  },
  misi: {
    type: String,
    required: true,
  },
});

const Visimisi = mongoose.model("Visimisi", visimisi);
module.exports = Visimisi;
