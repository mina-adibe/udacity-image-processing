import * as path from "path";

const images_folder_path = path.resolve(__dirname, "../images/full/");
const thumbnails_folder_path = path.resolve(__dirname, "../images/thumbnails/");

const IMAGES_FOLDER: readonly string[] = [
  "palmtunnel",
  "encenadaport",
  "fjord",
  "santamonica",
];

export { images_folder_path, thumbnails_folder_path, IMAGES_FOLDER };
