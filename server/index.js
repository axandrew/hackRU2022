const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

const mongo = require("./mongo");
const controllers = require("./controllers");

const PORT = process.env.PORT || 3006;

async function boot() {
  await mongo();
  console.log("Connected to Mongo"); // eslint-disable-line no-console

  const app = express();

  app.set("view engine", "ejs");

  app.use(cors());

  app.use("/api", controllers);
  app.use(express.static("./reactapp/build"));
  app.get("/*", (req, res) => {
    const indexFile = path.resolve("./reactapp/build/index.html");
    fs.readFile(indexFile, "utf8", (err, data) => {
      if (err) {
        // console.error('Something went wrong:', err); // eslint-disable-line no-console
        return res.status(500).send("Oops, better luck next time!");
      }
      return res.send(data);
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`); // eslint-disable-line no-console
  });

  async function gracefulExit() {
    console.log("Disconnecting from mongo!"); // eslint-disable-line no-console
    mongoose.connection.close();
    process.exit(0);
  }

  process.on("SIGINT", gracefulExit).on("SIGTERM", gracefulExit);
}

boot();
