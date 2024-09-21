const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const misiSchema = new Schema({
  program: [
    {
      type: String,
      required: true,
    },
  ],
});

const pkSchema = new Schema({
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
  programKerja: [pkSchema],
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
