const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const map = new Schema({
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
});

const Map = mongoose.model("Map", map);
module.exports = Map;
