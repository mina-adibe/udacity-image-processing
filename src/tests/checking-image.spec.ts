import { checkiIsImageExist } from "../models/is-image-exist";

describe("Checking image", () => {
  it("should have an image", () => {
    expect(checkiIsImageExist).toBeDefined();
  });
});
