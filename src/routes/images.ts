import { Request, Response, Router } from "express";

import {
  validateImagePreview,
  validateImageResize,
  validationMiddleware,
} from "../middlewares/validationMiddleware";
import { resizeImage } from "../controllers/resize";

import { checkiIsImageExist } from "../models/is-image-exist";

const routes = Router();
routes.get(
  "/preview",
  validateImagePreview(),
  validationMiddleware,
  (req: Request, res: Response) => {
    const filename = req.query.filename as string;

    res.render("preview", { image: `${filename}.jpg` });
  }
);

routes.get(
  "/convert",
  validateImageResize(),
  validationMiddleware,
  async (req: Request, res: Response) => {
    const filename = req.query.filename as string;
    const width = parseInt(req.query.width as string);
    const height = parseInt(req.query.height as string);

    const resizedFilename = `${filename}-${width}x${height}.jpg`;

    const IfImageExist = await checkiIsImageExist(filename, width, height);

    if (IfImageExist) {
      res.render("convert", { image: resizedFilename });
    } else {
      await resizeImage(width, height, filename);

      res.render("convert", {
        image: `${resizedFilename}`,
      });
    }
  }
);

export default routes;
