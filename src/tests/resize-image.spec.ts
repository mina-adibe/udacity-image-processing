import { resizeImage } from "../controllers/resize";

describe("resizeImage", () => {
  it("should throw an error if there is an error processing the image", async () => {
    const width = 200;
    const height = 300;
    const filename = "invalid-image.jpg";

    // Call the function and wait for it to throw an error
    await expectAsync(
      resizeImage(width, height, filename)
    ).toBeRejectedWithError("Error processing image");
  });
});
