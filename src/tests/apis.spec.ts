import supertest from "supertest";

import app from "../app";

const request = supertest(app);

describe("GET /preview", () => {
  it("should return 400 Bad Request when filename is missing", async () => {
    const response = await request.get("/preview");
    expect(response.status).toBe(404);
  });
});

describe("GET /convert", () => {
  it("should return 400 Bad Request when filename is missing", async () => {
    const response = await request.get("/convert?width=100&height=100");
    expect(response.status).toBe(404);
  });

  it("should return 400 Bad Request when width is missing", async () => {
    const response = await request.get("/convert?filename=fjord&height=100");
    expect(response.status).toBe(404);
  });

  it("should return 400 Bad Request when height is missing", async () => {
    const response = await request.get("/convert?filename=fjord&width=100");
    expect(response.status).toBe(404);
  });
});
