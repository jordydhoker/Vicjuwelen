const imagemin = require("imagemin");
const webp = require("imagemin-webp");

imagemin(["img/*.jpg"], "./img", {
  use: [
    webp()
  ]
}).then(function() {
  console.log("Images converted!");
});
