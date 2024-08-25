const { Router } = require("express");
const User = require("../model/user");
const TimRelawan = require("../model/timRelawan");
const Relawan = require("../model/relawan");
const Aspirasi = require("../model/aspirasi");
const Artikel = require("../model/artikel");
const Gallery = require("../model/galleri");
const Map = require("../model/map");
const Posko = require("../model/posko");
const KegiatanRelawan = require("../model/kegiatanRelawan");
const LaporanIsu = require("../model/laproanisu");
const Visimisi = require("../model/visimisi");
const Trackrecord = require("../model/trackRecord");
const jwt = require("jsonwebtoken");
const { SECRET, MAX_AGE } = require("../consts");
const { requireLogin } = require("../middleware/authentication");
const { Client, NoAuth } = require("whatsapp-web.js");
const multer = require("multer");
const crypto = require("crypto");

const router = Router();

const createJwt = (payload) => {
  return jwt.sign({ payload }, SECRET, { expiresIn: MAX_AGE });
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const encryptData = (data) => {
  const algorithm = "aes-256-cbc";
  const key = process.env.ENCRYPTION_KEY;
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(JSON.stringify(data), "utf8", "hex");
  encrypted += cipher.final("hex");

  return {
    iv: iv.toString("hex"),
    data: encrypted,
  };
};

const upload = multer({ storage: storage });

const client = new Client({
  authStrategy: new NoAuth(),
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
});

let qrCode = null;
let clientReady = false;

const handleQR = (qr) => {
  console.log("QR Code received", qr);
  qrCode = qr;
};

client.on("qr", handleQR);

client.on("ready", () => {
  console.log("WhatsApp Client siap!");
  clientReady = true;
  qrCode = null;
});

client.on("ready", () => {
  clientReady = true;
  console.log("Client siap");
});

client.on("authenticated", () => {
  console.log("Client terautentikasi");
});

router.get("/visi-misi", (req, res) => {
  Visimisi.find()
    .then((visimisi) => {
      res.status(200).json({ message: "success", data: visimisi });
    })
    .catch((error) => res.status(400).json({ message: "error", error }));
});

router.get("/track-record", (req, res) => {
  Trackrecord.find()
    .then((trackrecord) => {
      res.status(200).json({ message: "success", data: trackrecord });
    })
    .catch((error) => res.status(400).json({ message: "error", error }));
});

router.get("/qr", (req, res) => {
  if (qrCode) {
    res.status(200).json({ message: "success", data: qrCode });
  } else {
    res.status(503).json({ message: "QR Code belum tersedia, coba lagi." });
  }
});

router.get("/verifikasiqr", (req, res) => {
  if (clientReady) {
    res.status(200).json({ message: "connected" });
  } else {
    res.status(200).json({ message: "Harap Connect Bot!" });
  }
});

const getTotalAnggotaSeluruhRelawan = async () => {
  try {
    const result = await TimRelawan.aggregate([
      {
        $group: {
          _id: null,
          totalAnggota: { $sum: "$totalanggota" },
        },
      },
    ]);

    const totalAnggota = result.length > 0 ? result[0].totalAnggota : 0;
    return totalAnggota;
  } catch (err) {
    console.error("Error fetching total anggota:", err);
    throw err;
  }
};

router.get("/totalanggota", async (req, res) => {
  try {
    const totalAnggota = await getTotalAnggotaSeluruhRelawan();
    const resData = { message: "success", data: totalAnggota };
    const encryptedData = encryptData(resData);
    res.status(200).json(encryptedData);
  } catch (error) {
    res.status(500).json({ message: "error", error: error.message });
  }
});

router.get("/laporan", (req, res) => {
  LaporanIsu.find()
    .then((laporans) => {
      res.status(200).json({ message: "success", data: laporans });
    })
    .catch((error) => res.status(400).json({ message: "error", error }));
});

router.post("/laporan", upload.single("foto"), (req, res) => {
  const {
    JudulLaporan,
    namaPelapor,
    isiLaporan,
    kecamatan,
    kelurahan,
    rt,
    rw,
    latitude,
    longitude,
    tanggal,
  } = req.body;
  const foto = req.file ? req.file.path : "";

  LaporanIsu.create({
    JudulLaporan,
    namaPelapor,
    isiLaporan,
    kecamatan,
    kelurahan,
    rt,
    rw,
    latitude,
    longitude,
    tanggal,
    foto,
    statusLaporan,
  })
    .then((laporans) =>
      res.status(201).json({ message: "success", data: laporans })
    )
    .catch((error) => res.status(400).json({ message: "error", error }));
});

router.put("/laporan/:id/status", (req, res) => {
  const { id } = req.params;
  const { statusLaporan } = req.body;

  LaporanIsu.findByIdAndUpdate(id, { statusLaporan }, { new: true })
    .then((updatedLaporan) => {
      if (!updatedLaporan) {
        return res.status(404).json({ message: "Laporan tidak ditemukan" });
      }
      res.status(200).json({
        message: "Status laporan berhasil diperbarui",
        data: updatedLaporan,
      });
    })
    .catch((error) =>
      res.status(400).json({ message: "Error saat memperbarui laporan", error })
    );
});

router.get("/laporan/:id", (req, res) => {
  const { id } = req.params;
  LaporanIsu.findById(id)
    .then((laporans) => {
      res.status(200).json({ message: "success", data: laporans });
    })
    .catch((error) => res.status(400).json({ message: "error", error }));
});

// router.get("/qr", (req, res) => {
//   if (qrCode) {
//     res.status(200).json({ message: "success", data: qrCode });
//   } else {
//     res.status(503).json({ message: "QR Code belum tersedia, coba lagi." });
//   }
// });

router.get("/kegiatanByToken", async (req, res) => {
  const { token } = req.query;
  try {
    let kegiatan = await KegiatanRelawan.find({ token: token });
    if (kegiatan.length > 0) {
      const resData = { message: "success", data: kegiatan };
      const encryptedData = encryptData(resData);
      res.status(200).json(encryptedData);
    } else {
      res.status(404).json({
        status: "fail",
        message: "Tidak ada kegiatan yang ditemukan.",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
      error: error,
    });
  }
});

router.post("/api/verifyToken", async (req, res) => {
  const { token } = req.body;

  try {
    const timrelawan = await TimRelawan.findOne({ token: token });
    if (timrelawan) {
      return res.send({
        status: "success",
        message: "Token valid.",
        type: "timrelawan",
        data: timrelawan,
      });
    } else {
      const relawan = await Relawan.findOne({ token: token });
      if (relawan) {
        return res.send({
          status: "success",
          message: "Token valid.",
          type: "relawan",
          data: relawan,
        });
      } else {
        return res.status(404).send({
          status: "fail",
          message: "Token tidak valid.",
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
      error: error,
    });
  }
});

router.post("/broadcast", async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ message: "Message is required" });
  }
  try {
    const timrelawans = await TimRelawan.find({}, "hp").exec();
    const timRelawanNumbers = timrelawans.map((relawan) => relawan.hp);
    const relawans = await Relawan.find({}, "hp").exec();
    const relawanNumbers = relawans.map((relawan) => relawan.hp);
    const allNumbers = [...timRelawanNumbers, ...relawanNumbers];
    let br = /<br>/g;
    let findBr = message.replace(br, "\n");
    for (let idx = 0; idx < allNumbers.length; idx++) {
      const number = allNumbers[idx].trim();
      const chatId = `${number}@c.us`;

      try {
        await client.sendMessage(chatId, findBr);
      } catch (error) {
        console.error(`Error saat mengirim pesan ke ${number}:`, error.message);
      }
    }
    res.status(200).json({ message: "Pesan berhasil dikirim ke semua nomor!" });
  } catch (error) {
    console.error(`Error fetching relawan: ${error.message}`);
    res
      .status(500)
      .json({ message: "Error fetching relawan", error: error.message });
  }
});

router.get("/relawan/:id", async (req, res) => {
  const { id } = req.params;
  Relawan.findById(id)
    .then((relawanx) => {
      const resData = { message: "success", data: relawanx };
      const encryptedData = encryptData(resData);
      res.status(200).json(encryptedData);
    })
    .catch((error) => res.status(400).json({ message: "error", error }));
});

router.get("/timrelawan/:id", async (req, res) => {
  const { id } = req.params;
  TimRelawan.findById(id)
    .then((relawanx) => {
      const resData = { message: "success", data: relawanx };
      const encryptedData = encryptData(resData);
      res.status(200).json(encryptedData);
    })
    .catch((error) => res.status(400).json({ message: "error", error }));
});

router.post("/confirm/relawan/:hp", async (req, res) => {
  const { message } = req.body;
  const { hp } = req.params;
  if (!message) {
    return res.status(400).json({ message: "Message is required" });
  }
  try {
    const relawan = await Relawan.findOne({ hp }).exec();
    if (!relawan) {
      return res.status(404).json({ message: "Relawan not found" });
    }
    const numbers = relawan.hp;
    const chatId = `${numbers}@c.us`;
    try {
      await client.sendMessage(chatId, message);
      res.status(200).send("Pesan berhasil dikirim ke semua nomor!");
    } catch (error) {
      console.error(`Error saat mengirim pesan ke ${number}:`, error.message);
    }
  } catch (error) {
    console.error(`Error fetching relawan: ${error.message}`);
    res
      .status(500)
      .json({ message: "Error fetching relawan", error: error.message });
  }
});

router.post("/confirm/timrelawan/:hp", async (req, res) => {
  const { message } = req.body;
  const { hp } = req.params;
  if (!message) {
    return res.status(400).json({ message: "Message is required" });
  }
  try {
    const relawan = await TimRelawan.findOne({ hp }).exec();
    if (!relawan) {
      return res.status(404).json({ message: "Relawan not found" });
    }
    const numbers = relawan.hp;
    const chatId = `${numbers}@c.us`;
    try {
      await client.sendMessage(chatId, message);
      res.status(200).send("Pesan berhasil dikirim ke semua nomor!");
    } catch (error) {
      console.error(`Error saat mengirim pesan ke ${number}:`, error.message);
    }
  } catch (error) {
    console.error(`Error fetching relawan: ${error.message}`);
    res
      .status(500)
      .json({ message: "Error fetching relawan", error: error.message });
  }
});

router.get("/kegiatan/relawan", (req, res) => {
  KegiatanRelawan.find()
    .then((kegs) => {
      const resData = { message: "success", data: kegs };
      const encryptedData = encryptData(resData);
      res.status(200).json(encryptedData);
    })
    .catch((error) => res.status(400).json({ message: "error", error }));
});

router.post("/kegiatan/relawan", upload.single("video"), (req, res) => {
  const {
    namaKegiatan,
    nama,
    kecamatan,
    kelurahan,
    rt,
    rw,
    latitude,
    longitude,
    tanggal,
    alamatLengkap,
    jamMulai,
    jamSelesai,
  } = req.body;
  const video = req.file ? req.file.path : "";

  KegiatanRelawan.create({
    namaKegiatan,
    nama,
    kecamatan,
    kelurahan,
    rt,
    rw,
    latitude,
    longitude,
    tanggal,
    jamMulai,
    jamSelesai,
    alamatLengkap,
    video,
  })
    .then((kegiatanRelawan) =>
      res.status(201).json({ message: "success", data: kegiatanRelawan })
    )
    .catch((error) => res.status(400).json({ message: "error", error }));
});

router.put(
  "/kegiatan/relawan/:namaKegiatan",
  upload.single("video"),
  (req, res) => {
    const { status } = req.body;
    const video = req.file ? req.file.path.replace(/\\/g, "/") : "";

    const updateData = {
      status,
    };
    if (video) {
      updateData.video = video;
    }

    KegiatanRelawan.findOneAndUpdate(
      { namaKegiatan: req.params.namaKegiatan },
      updateData,
      {
        new: true,
      }
    )
      .then((kegiatanRelawan) => {
        if (!kegiatanRelawan) {
          return res
            .status(404)
            .json({ message: "Kegiatan relawan tidak ditemukan" });
        }
        res.status(200).json({ message: "success", data: kegiatanRelawan });
      })
      .catch((error) => res.status(400).json({ message: "error", error }));
  }
);

router.put("/kegiatan/relawan/status/:namaKegiatan", async (req, res) => {
  const { status } = req.body;

  // Update data status kegiatan
  const updateData = { status };

  try {
    const kegiatanRelawan = await KegiatanRelawan.findOneAndUpdate(
      { namaKegiatan: req.params.namaKegiatan },
      updateData,
      { new: true }
    );

    // Cek apakah kegiatan ditemukan
    if (!kegiatanRelawan) {
      return res
        .status(404)
        .json({ message: "Kegiatan relawan tidak ditemukan" });
    }

    // Cek jika status adalah "Disetujui", kirim pesan broadcast
    if (status === "Disetujui") {
      if (clientReady) {
        // Cari tim relawan berdasarkan kecamatan dan kelurahan kegiatan
        const timRelawan = await TimRelawan.findOne({
          kecamatan: kegiatanRelawan.kecamatan,
          kelurahan: kegiatanRelawan.kelurahan,
        });

        // Cek jika tim relawan ditemukan
        if (timRelawan) {
          const message = `Kegiatan ${kegiatanRelawan.namaKegiatan} telah disetujui! Mohon persiapkan diri Anda.`;
          const chatId = `${timRelawan.hp}@c.us`;

          try {
            await client.sendMessage(chatId, message);
            console.log(`Pesan terkirim ke ${chatId}`);
          } catch (error) {
            console.error(`Gagal mengirim pesan ke ${chatId}:`, error.message);
          }
        } else {
          console.log("Tim relawan tidak ditemukan.");
        }
      } else {
        console.log("WhatsApp Client is not ready.");
      }
    } else if (status === "Ditolak") {
      if (clientReady) {
        // Cari tim relawan berdasarkan kecamatan dan kelurahan kegiatan
        const timRelawan = await TimRelawan.findOne({
          kecamatan: kegiatanRelawan.kecamatan,
          kelurahan: kegiatanRelawan.kelurahan,
        });

        // Cek jika tim relawan ditemukan
        if (timRelawan) {
          const message = `Mohon Maaf Kegiatan ${kegiatanRelawan.namaKegiatan} Ditolak! Mohon Hubungi Admin Untuk Informasi Yang Lengkap!`;
          const chatId = `${timRelawan.hp}@c.us`;

          try {
            await client.sendMessage(chatId, message);
            console.log(`Pesan terkirim ke ${chatId}`);
          } catch (error) {
            console.error(`Gagal mengirim pesan ke ${chatId}:`, error.message);
          }
        } else {
          console.log("Tim relawan tidak ditemukan.");
        }
      } else {
        console.log("WhatsApp Client is not ready.");
      }
    }

    // Respon sukses
    res.status(200).json({ message: "success", data: kegiatanRelawan });
  } catch (error) {
    console.error("Error updating kegiatan or sending message:", error.message);
    res.status(400).json({ message: "error", error: error.message });
  }
});

router.get("/posko", (req, res) => {
  Posko.find()
    .then((poskos) => {
      const resData = { message: "success", data: poskos };
      const encryptedData = encryptData(resData);
      res.status(200).json(encryptedData);
    })
    .catch((error) => res.status(400).json({ message: "error", error }));
});

router.post("/posko", upload.single("foto"), (req, res) => {
  const { nama, kecamatan, kelurahan, rt, rw, latitude, longitude, tanggal } =
    req.body;
  const foto = req.file ? req.file.path : "";

  Posko.create({
    nama,
    kecamatan,
    kelurahan,
    rt,
    rw,
    latitude,
    longitude,
    tanggal,
    foto,
  })
    .then((poskos) =>
      res.status(201).json({ message: "success", data: poskos })
    )
    .catch((error) => res.status(400).json({ message: "error", error }));
});

// router.get("/map", (req, res) => {
//   Map.find()
//     .then((maps) => {
//       res.status(200).json({ message: "success", data: maps });
//     })
//     .catch((error) => res.status(400).json({ message: "error", error }));
// });

router.post("/map", (req, res) => {
  const { latitude, longitude } = req.body;

  if (!latitude || !longitude) {
    return res
      .status(400)
      .json({ message: "Latitude and Longitude are required" });
  }

  Map.create({ latitude, longitude })
    .then((map) => {
      res.status(201).json({ message: "success", data: map });
    })
    .catch((error) => res.status(400).json({ message: "error", error }));
});

router.get("/gallery", (req, res) => {
  Gallery.find()
    .then((gallery) => {
      const resData = { message: "success", data: gallery };
      const encryptedData = encryptData(resData);
      res.status(200).json(encryptedData);
    })
    .catch((error) => res.status(400).json({ message: "error", error }));
});

router.get("/gallery/:id", (req, res) => {
  const { id } = req.params;
  Gallery.findById(id)
    .then((galleri) => {
      const resData = { message: "success", data: galleri };
      const encryptedData = encryptData(resData);
      res.status(200).json(encryptedData);
    })
    .catch((error) => res.status(400).json({ message: "error", error }));
});

router.post(
  "/gallery",
  upload.fields([
    { name: "img", maxCount: 1 },
    { name: "img2", maxCount: 4 },
  ]),
  (req, res) => {
    const { judul, deskripsi, tanggal } = req.body;
    const img = req.files["img"] ? req.files["img"][0].path : "";
    const img2 = req.files["img2"]
      ? req.files["img2"].map((file) => file.path)
      : [];

    Gallery.create({
      judul,
      img,
      img2,
      deskripsi,
      tanggal,
    })
      .then((galleri) => {
        res.status(201).json({ message: "success", data: galleri });
      })
      .catch((error) => res.status(400).json({ message: "error", error }));
  }
);

router.put(
  "/gallery/edit/:id",
  upload.fields([
    { name: "img", maxCount: 1 },
    { name: "img2", maxCount: 1 },
  ]),
  (req, res) => {
    const { id } = req.params;
    const { judul, deskripsi, tanggal } = req.body;

    Gallery.findById(id)
      .then((galler) => {
        if (!galler) {
          return res.status(404).json({ message: "Artikel not found" });
        }

        const img = req.files["img"] ? req.files["img"][0].path : galler.img;
        const img2 = req.files["img2"]
          ? req.files["img2"][0].path
          : galler.img2;

        galler.judul = judul || galler.judul;
        galler.img = img;
        galler.img2 = img2;
        galler.deskripsi = deskripsi || galler.deskripsi;
        galler.tanggal = tanggal || galler.tanggal;

        return galler.save();
      })
      .then((updatedGallery) => {
        res.status(200).json({ message: "success", data: updatedGallery });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "error", error });
      });
  }
);

router.delete("/gallery/:id", (req, res) => {
  const { id } = req.params;
  Gallery.findByIdAndDelete(id)
    .then(() => res.status(200).json({ message: "success" }))
    .catch((error) => res.status(400).json({ message: "error", error }));
});

router.get("/artikel", (req, res) => {
  Artikel.find()
    .then((artikels) => {
      const resData = { message: "success", data: artikels };
      const encryptedData = encryptData(resData);
      res.status(200).json(encryptedData);
    })
    .catch((error) => res.status(400).json({ message: "error", error }));
});

router.get("/artikel/:id", (req, res) => {
  const { id } = req.params;
  Artikel.findById(id)
    .then((artikels) => {
      const resData = { message: "success", data: artikels };
      const encryptedData = encryptData(resData);
      res.status(200).json(encryptedData);
    })
    .catch((error) => res.status(400).json({ message: "error", error }));
});

router.post(
  "/artikel",
  upload.fields([
    { name: "img", maxCount: 1 },
    { name: "img2", maxCount: 1 },
  ]),
  (req, res) => {
    const { judul, p1, p2, p3, p4, p5, author, tanggal } = req.body;
    const img = req.files["img"] ? req.files["img"][0].path : "";
    const img2 = req.files["img2"] ? req.files["img2"][0].path : "";

    Artikel.create({
      judul,
      img,
      p1,
      p2,
      img2,
      p3,
      p4,
      p5,
      author,
      tanggal,
    })
      .then((artikel) => {
        res.status(201).json({ message: "success", data: artikel });
      })
      .catch((error) => res.status(400).json({ message: "error", error }));
  }
);

router.put(
  "/artikel/edit/:id",
  upload.fields([
    { name: "img", maxCount: 1 },
    { name: "img2", maxCount: 1 },
  ]),
  (req, res) => {
    const { id } = req.params;
    const { judul, p1, p2, p3, p4, p5, author, tanggal } = req.body;

    Artikel.findById(id)
      .then((artikel) => {
        if (!artikel) {
          return res.status(404).json({ message: "Artikel not found" });
        }

        const img = req.files["img"] ? req.files["img"][0].path : artikel.img;
        const img2 = req.files["img2"]
          ? req.files["img2"][0].path
          : artikel.img2;

        artikel.judul = judul || artikel.judul;
        artikel.img = img;
        artikel.p1 = p1 || artikel.p1;
        artikel.p2 = p2 || artikel.p2;
        artikel.img2 = img2;
        artikel.p3 = p3 || artikel.p3;
        artikel.p4 = p4 || artikel.p4;
        artikel.p5 = p5 || artikel.p5;
        artikel.author = author || artikel.author;
        artikel.tanggal = tanggal || artikel.tanggal;

        return artikel.save();
      })
      .then((updatedArtikel) => {
        res.status(200).json({ message: "success", data: updatedArtikel });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "error", error });
      });
  }
);

router.delete("/artikel/:id", (req, res) => {
  const { id } = req.params;
  Artikel.findByIdAndDelete(id)
    .then(() => res.status(200).json({ message: "success" }))
    .catch((error) => res.status(400).json({ message: "error", error }));
});

router.get("/aspirasi", (req, res) => {
  Aspirasi.find()
    .then((aspirasi) => {
      const resData = { message: "success", data: aspirasi };
      const encryptedData = encryptData(resData);
      res.status(200).json(encryptedData);
    })
    .catch((error) => res.status(400).json({ message: "error", error }));
});

router.post("/aspirasi", (req, res) => {
  const { nama, hp, kecamatan, kelurahan, rt, rw, aspirasi, sarankritik } =
    req.body;

  Artikel.create({
    nama,
    hp,
    kecamatan,
    kelurahan,
    rt,
    rw,
    aspirasi,
    sarankritik,
  })
    .then((aspirasis) => {
      res.status(201).json({ message: "success", data: aspirasis });
    })
    .catch((error) => res.status(400).json({ message: "error", error }));
});

router.put("/relawan/:id", (req, res) => {
  const { id } = req.params;
  Relawan.findByIdAndUpdate(id, req.body, { new: true })
    .then((Relawan) =>
      res.status(200).json({ message: "success", data: Relawan })
    )
    .catch((error) => res.status(400).json({ message: "error", error }));
});

router.get("/timrelawan", (req, res) => {
  TimRelawan.find()
    .then((timRelawans) => {
      const resData = { message: "success", data: timRelawans };
      const encryptedData = encryptData(resData);
      res.status(200).json(encryptedData);
    })
    .catch((error) => res.status(400).json({ message: "error", error }));
});

router.get("/relawan", (req, res) => {
  Relawan.find()
    .then((Relawans) => {
      const resData = { message: "success", data: Relawans };
      const encryptedData = encryptData(resData);
      res.status(200).json(encryptedData);
    })
    .catch((error) => res.status(400).json({ message: "error", error }));
});

router.post(
  "/timrelawan",
  upload.fields([
    { name: "ttd", maxCount: 1 },
    { name: "ttdAnggota", maxCount: null },
  ]),
  (req, res) => {
    const {
      namatim,
      namaketua,
      totalanggota,
      hp,
      kecamatan,
      kelurahan,
      rt,
      rw,
      latitude,
      longitude,
      suratPernyataan,
    } = req.body;
    const ttd = req.files["ttd"] ? req.files["ttd"][0].path : "";
    const ttdAnggota = req.files["ttdAnggota"]
      ? req.files["ttdAnggota"].map((file) => file.path)
      : [];

    const randomNumbers = Math.floor(10000 + Math.random() * 90000);
    const newKel = kelurahan.replace(/\s+/g, "");
    const newName = namatim.replace(/\s+/g, "");
    let token = `${newName}${newKel}${randomNumbers}`;

    TimRelawan.create({
      token,
      namatim,
      namaketua,
      totalanggota,
      hp,
      kecamatan,
      kelurahan,
      rt,
      rw,
      latitude,
      longitude,
      suratPernyataan,
      ttd,
      ttdAnggota,
    })
      .then((timRelawan) =>
        res.status(201).json({ message: "success", data: timRelawan })
      )
      .catch((error) => res.status(400).json({ message: "error", error }));
  }
);

router.post("/relawan", upload.single("ttd"), (req, res) => {
  const {
    nama,
    hp,
    kecamatan,
    kelurahan,
    rt,
    rw,
    latitude,
    longitude,
    suratPernyataan,
  } = req.body;
  const ttd = req.file ? req.file.path : "";

  const randomNumbers = Math.floor(10000 + Math.random() * 90000);
  const newKel = kelurahan.replace(/\s+/g, "");
  const newName = nama.replace(/\s+/g, "");
  let token = `${newName}${newKel}${randomNumbers}`;

  Relawan.create({
    token,
    nama,
    hp,
    kecamatan,
    kelurahan,
    rt,
    rw,
    latitude,
    longitude,
    suratPernyataan,
    ttd,
  })
    .then((Relawan) =>
      res.status(201).json({ message: "success", data: Relawan })
    )
    .catch((error) => res.status(400).json({ message: "error", error }));
});

router.put("/timrelawan/:id", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (status !== "success" && status !== "gagal") {
    return res.status(400).json({ message: "Invalid status value" });
  }

  TimRelawan.findByIdAndUpdate(id, { status }, { new: true })
    .then((relawan) =>
      res.status(200).json({ message: "success", data: relawan })
    )
    .catch((error) => res.status(400).json({ message: "error", error }));
});

router.put("/relawan/:id", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (status !== "success" && status !== "gagal") {
    return res.status(400).json({ message: "Invalid status value" });
  }

  Relawan.findByIdAndUpdate(id, { status }, { new: true })
    .then((relawan) =>
      res.status(200).json({ message: "success", data: relawan })
    )
    .catch((error) => res.status(400).json({ message: "error", error }));
});

router.delete("/timrelawan/:id", (req, res) => {
  const { id } = req.params;
  TimRelawan.findByIdAndDelete(id)
    .then(() => res.status(200).json({ message: "success" }))
    .catch((error) => res.status(400).json({ message: "error", error }));
});

router.delete("/relawan/:id", (req, res) => {
  const { id } = req.params;
  Relawan.findByIdAndDelete(id)
    .then(() => res.status(200).json({ message: "success" }))
    .catch((error) => res.status(400).json({ message: "error", error }));
});

/**
 * @route POST api/users/register
 * @desc Register new user
 * @access Private
 */
router.post("/users/register", (req, res) => {
  const { username, email, password } = req.body;
  User.create({ username, email, password })
    .then(() => {
      return res.status(200).json({ message: "success" });
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({ message: "failed", error });
    });
});

/**
 * @route POST api/users/login
 * @desc Login user
 * @access Public
 */
router.post("/users/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email, password: password })
    .then((user) => {
      if (!user) {
        return res
          .status(401)
          .json({ message: "failed", error: "wrong-credentials" });
      }
      const maxAge = 3 * 24 * 60 * 60;
      const token = createJwt(user._id, maxAge);
      res.cookie("auth", token, { httpOnly: true, maxAge: maxAge * 10 });
      clientReady = false;
      client.on("qr", handleQR);
      client.initialize();
      return res.status(200).json({ message: "success", data: user });
    })
    .catch((err) => {
      return res.status(400).json({ message: "failed", err });
    });
});

/**
 * @route POST api/users/logout
 * @desc Log user out
 * @access Public
 */
router.post("/users/logout", (req, res) => {
  if (clientReady) {
    client
      .logout()
      .then(() => {
        console.log("Client berhasil logout");
        client.off("qr", handleQR);
      })
      .catch((error) => {
        console.error("Error saat logout:", error);
      });
  }
  client.removeListener("qr", handleQR);
  res.clearCookie("auth");
  return res.status(200).json({ message: "success" });
});

/**
 * @route GET api/users
 * @desc Get authenticated user
 * @access Private
 */
router.get("/users", requireLogin, (req, res) => {
  const token = req.cookies.auth;
  const _id = jwt.verify(token, SECRET).payload;
  User.findOne({ _id }, { username: 1, email: 1, registrationDate: 1 })
    .then((user) => {
      const resData = { message: "success", data: user };
      const encryptedData = encryptData(resData);
      return res.status(200).json(encryptedData);
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(401)
        .json({ message: "error", code: "unauthenticated-access" });
    });
});

module.exports = router;
