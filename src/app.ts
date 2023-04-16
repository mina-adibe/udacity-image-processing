import express from "express";
import * as path from "path";
import morgan from "morgan";

import sharp from "sharp";

import fs from "fs";

const app = express();

// set the path to the static files directory
const staticPath = path.join(__dirname, "images");

// serve static files
app.use(express.static(staticPath));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  const title = "Hello, World!";
  res.render("index.ejs", { title });
});

// make a get request to read images from fi
app.get("/preview", (req, res) => {
  const filename = req.query.filename as string;
  res.render("preview", { image: `${filename}.jpg` });
});

app.get("/convert", (req, res) => {
  const filename = req.query.filename as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  const resizedFilename = `${filename}-${width}x${height}.jpg`;

  // check if the resized image already exists
  if (fs.existsSync(resizedFilename)) {
    res.render("convert", { image: resizedFilename });
  } else {
    // resize the image and save it to the images folder using sharp

    sharp(`${staticPath}/${filename}.jpg`)
      .resize(width, height)
      .toFile(`${staticPath}/${filename}-${width}x${height}.jpg`, (err) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error processing image");
        } else {
          // send the resized image to the client
          res.render("convert", {
            image: `${filename}-${width}x${height}.jpg`,
          });
        }
      });
  }
});

// make ge
app.use(morgan("dev"));

app.listen(3001, () => {
  console.log("Server is listening on port 3001.");
});
