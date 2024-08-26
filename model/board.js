const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const board = new Schema({
  judul: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  tempat: {
    type: String,
    required: true,
  },
  jam: {
    type: String,
    required: true,
  },
  tanggal: {
    type: String,
    required: true,
  },
});

const Board = mongoose.model("Board", board);
module.exports = Board;
