const Log = require("../model/log"); // Import model log

const logActivity = (req, res, next) => {
  if (req.user) {
    console.log("Logging user activity..."); // Tambahkan log ini untuk memastikan middleware dijalankan
    console.log("User in request:", req.user); // Tambahkan ini untuk memeriksa apakah req.user terisi

    const logEntry = new Log({
      username: req.user.username,
      endpoint: req.originalUrl,
      method: req.method,
      timestamp: new Date(),
      data: req.body,
    });

    logEntry
      .save()
      .then(() => console.log("User activity logged."))
      .catch((err) => console.error("Error logging user activity:", err));
  } else {
    console.log("User not logged in, no activity logged.");
  }
  next();
};

module.exports = logActivity;
