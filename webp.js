const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");
const imageminJpegtran = require("imagemin-jpegtran");

(async () => {
    const webp = imagemin(["C:/GD/Documenten/Victoria/Vicjuwelen site/img/woman2/png/*.{png}"], {
        destination: "./img/woman2/webp",
        plugins: [imageminWebp({ quality: 80, method: 6 })]
    });
    const jpg = imagemin(["C:/GD/Documenten/Victoria/Vicjuwelen site/img/woman2/jpg/*.{jpg}"], {
        destination: "./img/woman2/jpg",
        plugins: [imageminJpegtran({ progressive: true })]
    });

    await Promise.all([webp, jpg]);
})();
