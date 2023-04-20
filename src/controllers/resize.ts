import sharp from "sharp";

import { original_image, resized_image } from "../helpers/imagePath";

export const resizeImage = async (
  width: number,
  height: number,
  filename: string
): Promise<void> => {
  try {
    await sharp(original_image(filename))
      .resize(Number(width), Number(height))
      .toFile(resized_image(filename, width, height));
  } catch (error) {
    throw new Error("Error processing image");
  }
};
