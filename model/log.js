const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  username: String,
  endpoint: String,
  method: String,
  timestamp: Date,
  data: mongoose.Schema.Types.Mixed, // Bisa menyimpan objek apa saja
});

const Log = mongoose.model("Log", logSchema);
module.exports = Log;
