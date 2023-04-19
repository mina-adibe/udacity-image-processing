import * as path from "path";

const image_path = path.resolve(__dirname, `../images`);

const original_image_path = path.resolve(
  __dirname,
  `../${image_path}/${filename}.jpg`
);

const resized_image_path = path.resolve(
  __dirname,
  `../${image_path}/${filename}-${width}x${height}.jpg`
);
