import * as path from "path";

const image_path = path.resolve(__dirname, `../images`);

export const original_image = (filename: string): string => {
  return path.resolve(__dirname, `../images/${filename}.jpg`);
};

export const resized_image = (
  filename: string,
  width: number,
  height: number
): string => {
  return path.resolve(
    __dirname,
    `../images/thumbnails/${filename}-${width}x${height}.jpg`
  );
};
