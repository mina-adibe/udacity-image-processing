# Image processing API

### About the Project

- The Image Processing API is a project for the Udacity Full-Stack Nanodegree. It demonstrates the potential of using Nodejs and Express to build servers and APIs for various purposes. The project is a useful tool for image processing, specifically for resizing jpeg images into thumbnails with preset parameters like filename, width, and height.
- To use the API, simply insert any jpeg image under the images/full directory and use the filename in the query parameters while specifying the width and height. For example, http://localhost:3001/images/convert/?filename=santamonica&width=400&height=700. To preview the image, use http://localhost:3001/images/preview/?filename=santamonica.
- If the image is successfully resized, it will be available in the images/thumb directory.

### Technologies used

- NodeJs as the backend language
- Express to create and manipulate the server
- Express validator for validation
- Typescript
- prettier formatting
- eslint for linting
- Jasmine for unit testing
- Sharp for manipluating images

### Steps to Run The Project

#### Installing The Project in **_Development Mode_**

1. Clone the repository by running this command
   `git clone `.
2. Go to the project directory `cd image-processing-api`.
3. Install packages with `npm install`.
4. Run in development mode `npm run dev`.
5. switch to `localhost:3000`

#### Scripts available

1. `"start"` to run dev mode using nodemon.
1. `"build"` to run production mode .
1. `"test"` for testing using Jasmine.
1. `"lint"` for linting using eslint.
1. `"prettier"` for formatting.
1. `"jasmine"` run tests.

### License

This project is licensed under the terms of the ISC license.
