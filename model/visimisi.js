const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const misiSchema = new Schema({
  judul: {
    type: String,
    required: true,
  },
  deskripsi: {
    type: String,
    required: true,
  },
  program: [
    {
      type: String,
      required: true,
    },
  ],
});

const visimisi = new Schema({
  visi: {
    type: String,
    required: true,
  },
  misi: [misiSchema],
});

const Visimisi = mongoose.model("Visimisi", visimisi);
module.exports = Visimisi;

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const visimisi = new Schema({
//   visi: {
//     type: String,
//     required: true,
//   },
//   misi: {
//     type: String,
//     required: true,
//   },
// });

// const Visimisi = mongoose.model("Visimisi", visimisi);
// module.exports = Visimisi;
