require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const Chat = require("./model/chat");

const app = express();

const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "https://rumahgerak.com/",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("join", async ({ visitorID }) => {
    let chat = await Chat.findOne({ visitorID });

    if (!chat) {
      chat = new Chat({ visitorID, messages: [] });
      await chat.save();
    }

    socket.join(visitorID);
    console.log(`Pengunjung dengan ID ${visitorID} terhubung`);
  });

  socket.on("chatMessage", async (msg) => {
    const { visitorID, text, sender } = msg;

    const chat = await Chat.findOne({ visitorID });

    if (chat && chat.isActive) {
      // Cek apakah sesi masih aktif
      chat.messages.push({ sender, text });
      await chat.save();

      io.to(visitorID).emit("chatMessage", { sender, text });
      io.emit("adminMessage", { visitorID, sender, text });
    } else {
      socket.emit("chatClosed", {
        message: "This chat session has been closed.",
      });
    }
  });

  socket.on("adminReply", async (msg) => {
    const { visitorID, text } = msg;
    let chat = await Chat.findOne({ visitorID });

    if (chat && chat.isActive) {
      chat.messages.push({ sender: "Admin", text });
      await chat.save();

      io.to(visitorID).emit("chatMessage", { sender: "Admin", text });
      io.emit("adminMessage", { visitorID, sender: "Admin", text });
    }
  });

  socket.on("chatClosed", async ({ visitorID }) => {
    const chat = await Chat.findOne({ visitorID });

    if (chat && chat.isActive) {
      chat.isActive = false;
      await chat.save();

      io.to(visitorID).emit("chatClosed", {
        message: "This chat session has been closed.",
      });
    }
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(
    cors({
      origin: "https://rumahgerak.com",
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

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("INFO - MongoDB connected successfully."))
  .catch((err) => console.log(`ERROR - MongoDB not connected : ${err}`));

const apiRoutes = require("./routes");
app.use("/api", apiRoutes);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.static(path.join(__dirname + "/public")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 3000;
http.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// io.on("connection", (socket) => {
//   console.log("A user connected");

//   // Saat pengunjung bergabung, simpan ID pengunjung
//   socket.on("join", ({ visitorID }) => {
//     if (!activeChats[visitorID]) {
//       activeChats[visitorID] = [];
//     }
//     socket.join(visitorID); // Bergabung dengan room berdasarkan visitorID
//     console.log(`Pengunjung dengan ID ${visitorID} terhubung`);
//   });

//   // Tangani pesan yang dikirim pengunjung
//   socket.on("chatMessage", (msg) => {
//     console.log("Pesan diterima dari pengunjung:", msg); // Debugging
//     const { visitorID, text, sender } = msg;
//     if (activeChats[visitorID]) {
//       activeChats[visitorID].push({ sender, text });
//       // Kirim pesan hanya ke room visitorID
//       io.to(visitorID).emit("chatMessage", { sender, text });
//       // Kirim pesan ke admin
//       io.emit("adminMessage", { visitorID, sender, text }); // Ini mengirim pesan ke semua admin yang terhubung
//     }
//   });

//   // Tangani saat admin ingin membalas pesan
//   socket.on("adminReply", ({ visitorID, text }) => {
//     if (activeChats[visitorID]) {
//       activeChats[visitorID].push({ sender: "Admin", text });
//       // Kirim pesan hanya ke room visitorID
//       io.to(visitorID).emit("chatMessage", { sender: "Admin", text });
//     }
//   });

//   // Tangani pemutusan koneksi
//   socket.on("disconnect", () => {
//     console.log("A user disconnected");
//   });
// });

// require("dotenv").config();
// const express = require("express");
// const morgan = require("morgan");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const path = require("path");

// const app = express();

// // Middleware
// if (process.env.NODE_ENV === "production") {
//   app.use(
//     cors({
//       origin: "http://192.168.1.107:8080",
//       credentials: true,
//     })
//   );
// } else {
//   app.use(cors());
// }
// app.use(morgan("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// // Connect to database
// mongoose
//   .connect(process.env.DB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("INFO - MongoDB connected successfully."))
//   .catch((err) => console.log(`ERROR - MongoDB not connected : ${err}`));

// // Register API routes
// const apiRoutes = require("./routes");
// app.use("/api", apiRoutes);

// // Serve static files from 'uploads' directory
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // Serve static files from 'public' directory (SPA)
// app.use(express.static(path.join(__dirname + "/public")));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "public", "index.html"));
// });

// // Run server
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });
