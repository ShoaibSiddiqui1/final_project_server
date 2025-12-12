const express = require("express");
const cors = require("cors");
const app = express();
const { db } = require("./db");

app.use(cors());
app.use(express.json());

app.use("/api", require("./routes"));

const PORT = 3001;

const start = async () => {
  try {
    console.log("Syncing database...");
    await db.sync();
    console.log("DB synced, starting server...");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Error in start():", err);
  }
};

start();
