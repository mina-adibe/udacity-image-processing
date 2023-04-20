import express, { Request, Response, Router } from "express";
import * as path from "path";
import morgan from "morgan";

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
import {
  validateImagePreview,
  validateImageResize,
  validationMiddleware,
} from "./middlewares/validationMiddleware";
import { validationErrorHandler } from "./middlewares/ErrorHandler";
import { resizeImage } from "./controllers/resize";
import routes from "./routes";

const app = express();

// set the path to the static files directory
const staticPath = path.join(__dirname, "images");

// serve static files
app.use("/images", express.static(staticPath));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", routes);
// make a get request to read images from fi

app.use(validationErrorHandler);

app.use(morgan("dev"));

app.listen(PORT, () => {
  console.log("Server is listening on port" + PORT);
});

export default app;
