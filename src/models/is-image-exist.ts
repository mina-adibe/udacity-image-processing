import fs from "fs-extra";
import { thumbnails_folder_path } from "../constants/constants";

export const checkiIsImageExist = async (
  filename: string,
  width: number,
  height: number
) => {
  const resizedFilename = `${filename}-${width}x${height}.jpg`;
  const generatedImagePath = `${thumbnails_folder_path}/${resizedFilename}`;

  try {
    await fs.ensureDir(thumbnails_folder_path);

    // check if  a folder exists using fs-extra package
    const isImageExiste = (await fs.pathExists(generatedImagePath)) as boolean;

    return isImageExiste;
  } catch (error) {
    throw new Error("Error checking if image exists");
  }
};
