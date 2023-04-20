import * as path from "path";
import {
  images_folder_path,
  thumbnails_folder_path,
} from "../constants/constants";

const image_path = path.resolve(__dirname, `../images`);

export const original_image = (filename: string): string => {
  return path.resolve(__dirname, `${images_folder_path}/${filename}.jpg`);
};

export const resized_image = (
  filename: string,
  width: number,
  height: number
): string => {
  return path.resolve(
    __dirname,
    `${thumbnails_folder_path}/${filename}-${width}x${height}.jpg`
  );
};
