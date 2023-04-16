import sharp from "sharp";

export const resizeImage = async (
  width: number,
  height: number,
  filename: string,
  staticPath: string
): Promise<void> => {
  // make a try catch block

  try {
    await sharp(`${staticPath}/${filename}.jpg`)
      .resize(width, height)
      .toFile(`${staticPath}/${filename}-${width}x${height}.jpg`);
  } catch (error) {
    throw new Error(" Error processing image ");
  }
};
