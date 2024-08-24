const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trackrecord = new Schema({
  x: {
    type: [],
    required: true,
  },
  y: {
    type: [],
    required: true,
  },
});

const Trackrecord = mongoose.model("Trackrecord", trackrecord);
module.exports = Trackrecord;
