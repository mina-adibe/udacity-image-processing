import express from "express";
import * as path from "path";

import ejs from "ejs";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  const title = "Hello, World!";
  res.render("index.ejs", { title });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000.");
});
