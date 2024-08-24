const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const order = new Schema({
  total: {
    type: Number,
    required: true,
  },
  item: {
    type: String,
    required: true,
  },
  harga: {
    type: Number,
    required: true,
  },
  barista: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

const Order = mongoose.model("Order", order);
module.exports = Order;