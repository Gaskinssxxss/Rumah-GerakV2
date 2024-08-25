require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

// Middleware
if (process.env.NODE_ENV === "production") {
  app.use(
    cors({
      origin: "http://rumahgerak.com",
      credentials: true,
    })
  );
} else {
  app.use(cors());
}
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Connect to database
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("INFO - MongoDB connected successfully."))
  .catch((err) => console.log(`ERROR - MongoDB not connected : ${err}`));

// Register API routes
const apiRoutes = require("./routes");
app.use("/api", apiRoutes);

// Serve static files from 'uploads' directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Serve static files from 'public' directory (SPA)
app.use(express.static(path.join(__dirname + "/public")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

// Run server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
